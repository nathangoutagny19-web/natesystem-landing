/**
 * LE CONTENU DES PAGES MONTÉNÉGRO (anglais seulement), 8 novembre 2026.
 *
 * Nathan veut sortir premier sur les recherches Tivat / Kotor / Montenegro,
 * pour le site web, le développement, le logiciel, la création de contenu,
 * les réseaux sociaux et la publicité. Chaque page a son propre texte : des
 * pages copiées d'une ville à l'autre seraient traitées par Google comme des
 * pages satellites et déclassées.
 *
 * Règles : aucun prix ni délai, aucun chiffre inventé, aucun nom de prospect
 * ou de client sous NDA, jamais « agency » pour parler de NateSystem, pas de
 * grand tiret. Les douleurs viennent de la recherche terrain de la session
 * prospection (6:10prospection/03-recherche-marche/).
 */

export type MontenegroPageData = {
  /** Chemin sans préfixe de langue, sans slash final. */
  path: '/montenegro' | '/montenegro/tivat' | '/montenegro/kotor'
  title: string
  description: string
  eyebrow: string
  h1: string
  intro: string
  breadcrumb: { name: string; href: string }[]
  areaServed: string[]
  servicesTitle: string
  services: { title: string; text: string; items: string[] }[]
  painsTitle: string
  pains: string[]
  painsOutro?: string
  localTitle: string
  local: string[]
  related: { label: string; href: string }[]
  why: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaText: string
}

const WHY: MontenegroPageData['why'] = [
  {
    title: 'One partner, everything connected',
    text: 'Your website, your booking tool, your social media and your ads are built by the same people and share the same data. A request from Instagram lands in the same place as a request from your site.',
  },
  {
    title: 'You own it',
    text: 'The code, the website and the data belong to you. If you ever leave, you take everything with you. No locked subscription.',
  },
  {
    title: 'Built around how you work',
    text: 'We start from the way you already serve your guests, then build around it. Your team does not have to bend to a generic tool.',
  },
]

const SERVICES_BASE = {
  website: {
    title: 'Website design and development',
    items: [
      'Fast, bilingual or multilingual websites',
      'Booking and enquiry forms connected to your team',
      'SEO, so guests find you on Google',
    ],
  },
  software: {
    title: 'Custom software',
    items: [
      'Bookings, guests and owners in one place',
      'Suppliers, crew and tasks followed day by day',
      'Quotes, invoices and reports generated, not retyped',
    ],
  },
  content: {
    title: 'Content creation and social media',
    items: [
      'Photo and video of your yachts, villas or venue',
      'Instagram and reels that look like your brand',
      'A steady publishing rhythm you do not have to chase',
    ],
  },
  ads: {
    title: 'Ads and lead generation',
    items: [
      'Meta and Google ads aimed at the guests you want',
      'Landing pages built for each campaign',
      'Every lead tracked from the click to the booking',
    ],
  },
}

export const MONTENEGRO_PAGES: Record<MontenegroPageData['path'], MontenegroPageData> = {
  '/montenegro': {
    path: '/montenegro',
    title: 'Web Design, Software & Ads in Montenegro | NateSystem',
    description:
      'Websites, custom software, content and ads for yacht, villa, concierge and hospitality businesses in Tivat, Kotor and Budva. You own the code. Free audit.',
    eyebrow: 'Montenegro · Tivat · Kotor · Budva',
    h1: 'Websites, software and ads for luxury hospitality in Montenegro.',
    intro:
      'Yacht charter and management, villas, concierge services, boutique hotels and tours. We build your website, the software your team runs on, your content and your ads, all connected, all yours.',
    breadcrumb: [
      { name: 'NateSystem', href: '/en' },
      { name: 'Montenegro', href: '/en/montenegro' },
    ],
    areaServed: ['Montenegro', 'Tivat', 'Kotor', 'Budva', 'Herceg Novi', 'Porto Montenegro'],
    servicesTitle: 'What we build for Montenegro businesses',
    services: [
      {
        ...SERVICES_BASE.website,
        text: 'Most guests decide in seconds whether a website feels right. We design and develop sites that look like your level of service, load fast and turn visits into enquiries.',
      },
      {
        ...SERVICES_BASE.software,
        text: 'When bookings, owners, suppliers and payments live in WhatsApp, Excel and one person’s head, things slip. We build the tool that holds it all, around the way your team already works.',
      },
      {
        ...SERVICES_BASE.content,
        text: 'The Bay of Kotor and Porto Montenegro sell themselves on camera, if someone films them. We produce the photos, videos and posts that keep your accounts alive through the season.',
      },
      {
        ...SERVICES_BASE.ads,
        text: 'Ads bring guests only if the page behind them converts and every lead gets an answer. We run the campaigns and connect them to your website and your booking tool.',
      },
    ],
    painsTitle: 'What we hear from businesses on the coast',
    pains: [
      'Everything goes through the founder: the phone, WhatsApp, the suppliers, the last-minute changes.',
      'Requests arrive on WhatsApp, Instagram, email and booking platforms, and nobody sees them all in one place.',
      'Extras are delivered in July and forgotten on the invoice.',
      'Owners and guests ask where things stand, and the answer takes an hour to put together.',
      'The guest’s preferences live in one person’s memory. When that person is off, the service drops.',
    ],
    painsOutro: 'Often the demand is there. It is the operations that stop you from taking on more clients.',
    localTitle: 'Tivat, Kotor, Budva: one coast, different businesses',
    local: [
      'Tivat lives around Porto Montenegro and the yachting season: charters, yacht management, superyacht agents and the suppliers who serve them. Kotor and its bay draw cruise guests, boutique hotels, villas and private tours. Budva runs on summer volume.',
      'The tools and the message are not the same for each. A yacht manager needs expenses per boat and reports for owners. A villa company needs availability, cleaning and owner statements. A tour operator needs bookings, guides and reviews. We build for the business in front of us, not for a template.',
    ],
    related: [
      { label: 'Web design and software in Tivat', href: '/en/montenegro/tivat' },
      { label: 'Web design and software in Kotor', href: '/en/montenegro/kotor' },
    ],
    why: WHY,
    faq: [
      {
        q: 'Do you build websites for businesses in Montenegro?',
        a: 'Yes. We design and develop websites for yacht, villa, concierge, hotel and tour businesses in Tivat, Kotor, Budva and the rest of the coast, connected to their bookings and their team.',
      },
      {
        q: 'Can you also handle social media, content and ads?',
        a: 'Yes. We produce photo and video content, run your social media and manage Meta and Google ads, connected to your website so every lead is tracked.',
      },
      {
        q: 'Who owns the website and the software?',
        a: 'You do. The code, the website and the data belong to you, and you keep everything if you ever stop working with us.',
      },
      {
        q: 'How do we start?',
        a: 'With a free audit: you leave your website, we look at where your organisation loses time and guests, and we send you what we found. No commitment and no call required.',
      },
    ],
    ctaTitle: 'See where your business loses time and guests.',
    ctaText: 'Leave your website. We look at it, and at how your requests are handled, then send you our audit. Free, no commitment.',
  },

  '/montenegro/tivat': {
    path: '/montenegro/tivat',
    title: 'Web Design & Software in Tivat, Montenegro | NateSystem',
    description:
      'Websites, custom software, content and ads for yacht charter, yacht management and luxury businesses in Tivat and Porto Montenegro. You own the code.',
    eyebrow: 'Tivat · Porto Montenegro',
    h1: 'Websites, software and ads for yacht and luxury businesses in Tivat.',
    intro:
      'Charter companies, yacht managers, superyacht agents, villas and concierge services around Porto Montenegro. We build the website your clients see and the software your team runs on, connected and owned by you.',
    breadcrumb: [
      { name: 'NateSystem', href: '/en' },
      { name: 'Montenegro', href: '/en/montenegro' },
      { name: 'Tivat', href: '/en/montenegro/tivat' },
    ],
    areaServed: ['Tivat', 'Porto Montenegro', 'Montenegro'],
    servicesTitle: 'What we build in Tivat',
    services: [
      {
        ...SERVICES_BASE.software,
        title: 'Software for yacht charter and yacht management',
        text: 'Owners want to know what was spent on their boat and why. Captains need supplies on board on time. We build the tool that follows each yacht: expenses with their invoices, owner approvals, crew, check-ins and the monthly report.',
        items: [
          'Expenses and invoices per yacht, ready for the owner',
          'Supplier orders and deliveries followed in one place',
          'Owner and captain access to what concerns them',
        ],
      },
      {
        ...SERVICES_BASE.website,
        text: 'A yacht or villa website has to feel as premium as the service. We design and develop it, in English and other languages, with enquiry forms that reach the right person.',
      },
      {
        ...SERVICES_BASE.content,
        text: 'Porto Montenegro, the bay at sunset, the boat underway: the content is there. We film it, edit it and publish it so your accounts stay active through the season.',
      },
      {
        ...SERVICES_BASE.ads,
        text: 'We run Meta and Google campaigns for charter and villa demand, send them to pages built to convert, and track every enquiry to the booking.',
      },
    ],
    painsTitle: 'What yacht and luxury businesses in Tivat tell us',
    pains: [
      'Every request goes through the owner first, on several phones and WhatsApp lines, day and night. You are always catching up.',
      'Each line of a yacht’s invoice needs its cost, commission and fees. The captain wants one clean price, the accountant wants the detail.',
      'Nobody can say what a given yacht spent last season, how often it came, or on what.',
      'The monthly owner statement is a project in itself, and owners are hard to reach.',
      'Suppliers and last-minute changes: who accepted, who declined, and the taxi needed in ten minutes.',
      'Generic yachting software that forces the team to work its way, and a fear of depending on a platform you do not own.',
    ],
    painsOutro: 'What they want is to keep their speed and grow without hiring, not to lose their evenings.',
    localTitle: 'Built for the Porto Montenegro season',
    local: [
      'Tivat runs on a season: boats arrive, crews change, owners visit, suppliers are booked weeks ahead and then changed the day before. The busiest weeks are the ones where nothing can slip.',
      'We already work with a yacht company in Tivat. We know the rhythm of the marina, the owners who want reports and the captains who want answers, and we build tools that fit that pace.',
    ],
    related: [
      { label: 'All of Montenegro', href: '/en/montenegro' },
      { label: 'Web design and software in Kotor', href: '/en/montenegro/kotor' },
    ],
    why: WHY,
    faq: [
      {
        q: 'Do you build software for yacht management companies in Tivat?',
        a: 'Yes. We build custom tools for yacht charter and management: expenses per yacht, owner reports, supplier orders, crew and check-ins, around the way your team already works.',
      },
      {
        q: 'Can you redesign our yacht charter website?',
        a: 'Yes. We design and develop the website, connect its enquiry forms to your team and your software, and take care of SEO so clients find you.',
      },
      {
        q: 'Do you also do content and ads for Porto Montenegro businesses?',
        a: 'Yes. We produce photo and video content, run social media and manage Meta and Google ads, all connected to your website.',
      },
      {
        q: 'Who owns the result?',
        a: 'You do. The code, the website and the data are yours.',
      },
    ],
    ctaTitle: 'See where your yacht or villa business loses time.',
    ctaText: 'Leave your website. We look at it, and at how your requests and suppliers are handled, then send you our audit. Free, no commitment.',
  },

  '/montenegro/kotor': {
    path: '/montenegro/kotor',
    title: 'Web Design & Software in Kotor, Montenegro | NateSystem',
    description:
      'Websites, custom software, content and ads for boutique hotels, villas, tours and concierge services in Kotor and the Bay of Kotor. You own the code.',
    eyebrow: 'Kotor · Bay of Kotor',
    h1: 'Websites, software and ads for hotels, villas and tours in Kotor.',
    intro:
      'Boutique hotels in the Old Town, villas around the bay, private tours and concierge services. We build the website guests book on, the software your team runs on, and the content and ads that bring guests in.',
    breadcrumb: [
      { name: 'NateSystem', href: '/en' },
      { name: 'Montenegro', href: '/en/montenegro' },
      { name: 'Kotor', href: '/en/montenegro/kotor' },
    ],
    areaServed: ['Kotor', 'Bay of Kotor', 'Perast', 'Montenegro'],
    servicesTitle: 'What we build in Kotor',
    services: [
      {
        ...SERVICES_BASE.website,
        text: 'Your guests compare you with every other place in the bay in a few seconds. We design and develop a website that shows your level of service, loads fast and takes direct bookings and enquiries.',
      },
      {
        ...SERVICES_BASE.software,
        title: 'Software for hotels, villas and tours',
        text: 'Availability, guests, cleaning, guides, transfers and owner statements: we build the tool that keeps them in one place, so the team stops rebuilding the same information every day.',
        items: [
          'Bookings and availability in one view',
          'Tasks for cleaning, guides and transfers, day by day',
          'Owner statements and invoices generated, not retyped',
        ],
      },
      {
        ...SERVICES_BASE.content,
        text: 'The Old Town, the bay, Perast at golden hour. We produce photo and video content that shows your place at its best, and keep your accounts publishing.',
      },
      {
        ...SERVICES_BASE.ads,
        text: 'We run Meta and Google campaigns to bring direct bookings, so you depend less on the commissions of booking platforms, and we track every enquiry.',
      },
    ],
    painsTitle: 'What hotels, villas and tour businesses in Kotor tell us',
    pains: [
      'Bookings come from platforms, WhatsApp, email and walk-ins, and someone reconciles them by hand.',
      'Availability is checked property by property, owner by owner.',
      'Extras sold during the stay are forgotten on the final invoice.',
      'Guest preferences live in one person’s head, so returning guests repeat themselves.',
      'Owners are not kept informed on time, and their statements are done by hand.',
    ],
    painsOutro: 'Often the demand is there. It is the operations that stop you from taking on more guests.',
    localTitle: 'Built for the Bay of Kotor',
    local: [
      'Kotor runs at two speeds: cruise days that fill the Old Town for a few hours, and guests who stay in the bay for a week. Hotels, villas and tour operators serve both, often with a small team.',
      'That is exactly where the right website and the right tool make the difference: more direct bookings, fewer hours rebuilding the same information, and a guest experience that does not depend on who is on shift.',
    ],
    related: [
      { label: 'All of Montenegro', href: '/en/montenegro' },
      { label: 'Web design and software in Tivat', href: '/en/montenegro/tivat' },
    ],
    why: WHY,
    faq: [
      {
        q: 'Do you build websites for hotels and villas in Kotor?',
        a: 'Yes. We design and develop websites for boutique hotels, villas and tour operators in Kotor and around the bay, with direct booking and enquiry forms connected to your team.',
      },
      {
        q: 'Can you help us get more direct bookings?',
        a: 'That is the aim of the website, the content and the ads together: bring guests to your own site, make it easy to book, and answer every enquiry.',
      },
      {
        q: 'Do you build software for tours and villa management?',
        a: 'Yes. Bookings, availability, guides, cleaning, transfers and owner statements, built around how your team already works.',
      },
      {
        q: 'Who owns the website and the software?',
        a: 'You do. The code, the website and the data belong to you.',
      },
    ],
    ctaTitle: 'See where your business loses time and direct bookings.',
    ctaText: 'Leave your website. We look at it, and at how your bookings and requests are handled, then send you our audit. Free, no commitment.',
  },
}

/** Métadonnées d'une page Monténégro : anglais seul, donc canonique sur
 *  elle-même et aucun hreflang vers une version française qui n'existe pas. */
export function montenegroMetadata(path: MontenegroPageData['path']) {
  const d = MONTENEGRO_PAGES[path]
  const url = `https://www.natesystem.com/en${path}/`
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: url, languages: { en: url, 'x-default': url } },
    openGraph: {
      title: d.title,
      description: d.description,
      url,
      type: 'website' as const,
      locale: 'en_US',
      siteName: 'NateSystem',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
    },
    twitter: { card: 'summary_large_image' as const, title: d.title, description: d.description, images: ['/og-image.png'] },
  }
}
