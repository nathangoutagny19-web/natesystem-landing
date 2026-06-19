// Primary booking CTA target. Points to the inline Cal.com embed section on
// the home (#rendez-vous) to remove every step before the calendar — lowest
// friction while we have few clients. The /book form is kept in the codebase
// (qualification step) for when volume justifies re-enabling it; flip this back
// to '/book' to restore the form-first flow everywhere at once.
export const CAL_LINK = '/#rendez-vous'
export const SITE_URL = 'https://www.natesystem.com'
export const API_URL = 'https://natesystem-backend.vercel.app'

// Cal.com booking — appel de consulting 20 min offert
export const CAL_HANDLE = 'goutagny-nathan-myv1qd/20min'
export const CAL_NAMESPACE = '20min'
export const CAL_DIRECT_URL = `https://cal.com/${CAL_HANDLE}`
