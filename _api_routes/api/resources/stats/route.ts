import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Total leads
    const { count: totalLeads } = await supabase
      .from('resource_leads')
      .select('*', { count: 'exact', head: true })

    // This week
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const { count: thisWeek } = await supabase
      .from('resource_leads')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', weekAgo.toISOString())

    // By resource
    const { data: byResource } = await supabase
      .rpc('count_by_field', { field_name: 'resource_id' })
      .select()

    // By role
    const { data: byRole } = await supabase
      .rpc('count_by_field', { field_name: 'role' })
      .select()

    // By secteur
    const { data: bySecteur } = await supabase
      .rpc('count_by_field', { field_name: 'secteur' })
      .select()

    // Newsletter count
    const { count: newsletterCount } = await supabase
      .from('newsletter_subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('active', true)

    return NextResponse.json({
      total_leads: totalLeads || 0,
      cette_semaine: thisWeek || 0,
      par_ressource: byResource || {},
      par_role: byRole || {},
      par_secteur: bySecteur || {},
      newsletter_subscribers: newsletterCount || 0,
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
