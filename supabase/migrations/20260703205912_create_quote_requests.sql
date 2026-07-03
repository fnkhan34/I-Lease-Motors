/*
# Create quote_requests table

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `phone` (text, not null) — submitter's phone number
  - `email` (text) — optional email
  - `interest` (text) — service they're interested in
  - `timeframe` (text) — how soon they need the service
  - `message` (text) — free-form message
  - `created_at` (timestamptz) — submission timestamp

2. Security
- Enable RLS on `quote_requests`.
- Allow anonymous inserts (no login required — public contact form).
- No SELECT/UPDATE/DELETE for anon (data is private to the business owner).
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  interest text,
  timeframe text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);
