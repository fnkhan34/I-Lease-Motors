CREATE POLICY "authenticated_select_quote_requests" ON quote_requests FOR SELECT
  TO authenticated USING (true);
