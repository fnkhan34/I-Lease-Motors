/*
# Remove unrestricted anon INSERT policy on quote_requests

The original anon INSERT policy used WITH CHECK (true), which was flagged as
unrestricted RLS bypass. It is safe to remove because all inserts into
quote_requests are performed by the send-quote-request edge function using the
service role key, which bypasses RLS. No direct client-side insert ever occurs,
so the anon policy is not needed and its removal has no impact on functionality.
*/

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
