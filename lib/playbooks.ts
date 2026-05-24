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
