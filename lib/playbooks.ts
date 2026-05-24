import data from '@/data/playbooks.json'

export type PlaybookBullet = {
  icon: string
  title: string
  text: string
}

export type PlaybookHero = {
  eyebrow: string
  h1: string
  subtitle: string
}

export type Playbook = {
  slug: string
  title: string
  pdfPath: string
  mockupPath: string
  metaDescription: string
  hero: PlaybookHero
  bullets: PlaybookBullet[]
}

export const playbooks: Playbook[] = (data as { playbooks: Playbook[] }).playbooks

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooks.find((p) => p.slug === slug)
}

export function allSlugs(): string[] {
  return playbooks.map((p) => p.slug)
}

export function storageObjectFor(slug: string): string {
  return `${slug}.pdf`
}

const SECTOR_LABELS: Record<string, string> = {
  'hoteliers-independants': 'Hôtellerie indépendante',
  'avocats-affaires': 'Cabinets d’avocats d’affaires',
  'nettoyage-proprete-b2b': 'Propreté B2B',
  'installateurs-photovoltaique': 'Installateurs photovoltaïque',
  'installateurs-clim-pac': 'Installateurs clim / PAC',
  'expertise-comptable': 'Expertise-comptable',
  'architectes': 'Architectes',
  'agences-immobilieres': 'Agences immobilières',
  'centres-formation': 'Centres de formation Qualiopi',
  'securite-gardiennage': 'Sécurité & gardiennage',
  'traiteurs-evenementiel': 'Traiteurs & événementiel',
}

export function sectorLabelFor(slug: string): string {
  return SECTOR_LABELS[slug] ?? slug
}
