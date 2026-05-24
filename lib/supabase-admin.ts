import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let cached: SupabaseClient | null = null

export function supabaseAdmin(): SupabaseClient {
  if (cached) return cached
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars (NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY)'
    )
  }
  cached = createClient(url, key, {
    auth: { persistSession: false },
  })
  return cached
}

export const PLAYBOOK_BUCKET = 'playbooks'
export const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24
