import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, phone, email, interest, timeframe, message } = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Name and phone are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("quote_requests").insert({
      name,
      phone,
      email: email || null,
      interest: interest || null,
      timeframe: timeframe || null,
      message: message || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <div style="background:#c9a84c;padding:24px 32px;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:0.05em;">NEW QUOTE REQUEST</h1>
          <p style="margin:4px 0 0;color:#000;font-size:14px;opacity:0.7;">I Lease Motors — ileasemotors.com</p>
        </div>
        <div style="padding:32px;background:#fff;border:1px solid #e5e5e5;border-top:none;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;width:120px;">Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:16px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;">Phone</td>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:16px;"><a href="tel:${phone}" style="color:#c9a84c;text-decoration:none;">${phone}</a></td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:16px;"><a href="mailto:${email}" style="color:#c9a84c;text-decoration:none;">${email}</a></td>
            </tr>` : ""}
            ${interest ? `
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;">Interested In</td>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;">${interest}</td>
            </tr>` : ""}
            ${timeframe ? `
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;">Timeframe</td>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:15px;">${timeframe}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding:12px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;vertical-align:top;padding-top:16px;">Message</td>
              <td style="padding:12px 0;font-size:15px;line-height:1.6;padding-top:16px;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
        </div>
        <div style="padding:16px 32px;background:#f9f9f9;border:1px solid #e5e5e5;border-top:none;font-size:12px;color:#888;">
          Submitted via ileasemotors.com contact form
        </div>
      </div>
    `;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "I Lease Motors <onboarding@resend.dev>",
        to: ["ileasemotors@gmail.com"],
        subject: `New Quote Request from ${name}`,
        html,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.text();
      console.error("Resend error:", errBody);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Your request was saved — we'll be in touch." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again or call us directly." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
