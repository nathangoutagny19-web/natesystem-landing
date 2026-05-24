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
  'metiers-du-vin': 'Métiers du vin',
}

export function sectorLabelFor(slug: string): string {
  return SECTOR_LABELS[slug] ?? slug
}

const CARD_TAGLINES: Record<string, string> = {
  'hoteliers-independants':
    'Où l’IA libère vraiment du temps dans une exploitation hôtelière — sans toucher à l’expérience client.',
  'avocats-affaires':
    'Comment intégrer l’IA dans un cabinet sans toucher au secret professionnel ni au RIN.',
  'nettoyage-proprete-b2b':
    'Alléger le dispatch et sécuriser la loi AGEC 2026 sans recruter en exploitation.',
  'installateurs-photovoltaique':
    'Alléger l’admin chantier et pré-remplir Consuel et MaPrimeRénov’ automatiquement.',
  'installateurs-clim-pac':
    'Piloter la maintenance préventive et la conformité F-Gas sans recruter pour l’admin.',
  'expertise-comptable':
    'Remonter la chaîne saisie → révision → conseil avant la facturation électronique 2026.',
  'architectes':
    'Absorber la coordination, les comptes-rendus et les notes d’honoraires de votre agence.',
  'agences-immobilieres':
    'Qualifier leads SeLoger et estimations DVF sans toucher à votre conformité Tracfin.',
  'centres-formation':
    'Pré-remplir les dossiers OPCO et collecter les 32 indicateurs Qualiopi en continu.',
  'securite-gardiennage':
    'Générer le planning quotidien et suivre CNAPS, paie 3043, AO — en sous-effectif chronique.',
  'traiteurs-evenementiel':
    'Chiffrer plus vite les devis sur-mesure et produire les fiches techniques avec allergènes INCO.',
  'metiers-du-vin':
    'Alléger la DRM, le CVI et les allocations clients sans toucher à votre approche du vin.',
}

export function cardTaglineFor(slug: string): string {
  return CARD_TAGLINES[slug] ?? ''
}
