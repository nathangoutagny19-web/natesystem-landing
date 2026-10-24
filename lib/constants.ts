// Primary booking CTA target. Points to the inline Cal.com embed section on
// the home (#rendez-vous) to remove every step before the calendar, lowest
// friction while we have few clients. The /book form is kept in the codebase
// (qualification step) for when volume justifies re-enabling it; flip this back
// to '/book' to restore the form-first flow everywhere at once.
export const CAL_LINK = '/#rendez-vous'
export const SITE_URL = 'https://www.natesystem.com'
export const API_URL = 'https://natesystem-backend.vercel.app'

// Calendly, appel diagnostic de 30 min (depuis le 24/10/2026). Après réservation,
// Calendly redirige vers /en/rdv-confirme avec le prénom.
export const CALENDLY_URL = 'https://calendly.com/nathan-natesystem/diagnostic'

// Cal.com (ancien embed, plus utilisé depuis le 24/10/2026), gardé pour l'historique
// Cal.com booking, appel de consulting offert (event 45 min)
export const CAL_HANDLE = 'goutagny-nathan-myv1qd/45min'
export const CAL_NAMESPACE = '45min'
// Lien direct (nouvel onglet) : la page Calendly depuis le 24/10/2026.
export const CAL_DIRECT_URL = CALENDLY_URL
