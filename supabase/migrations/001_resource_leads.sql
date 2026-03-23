-- Resource leads table
CREATE TABLE IF NOT EXISTS resource_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom text NOT NULL,
  email text NOT NULL,
  role text,
  secteur text,
  resource_id text NOT NULL,
  newsletter boolean DEFAULT false,
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  prenom text,
  role text,
  secteur text,
  source text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_resource_leads_email_resource ON resource_leads(email, resource_id);
CREATE INDEX IF NOT EXISTS idx_resource_leads_resource_id ON resource_leads(resource_id);
CREATE INDEX IF NOT EXISTS idx_resource_leads_created_at ON resource_leads(created_at);
