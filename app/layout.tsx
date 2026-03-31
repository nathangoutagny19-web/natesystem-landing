import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LangProvider } from '@/components/providers/LangProvider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NateSystem — Scale Operations Without Scaling Headcount',
  description:
    'Intelligent systems integrated into your operations. Your tools connect, your processes automate, your team focuses on what matters. 10h+ saved per week.',
  keywords: [
    'infrastructure IA',
    'agents IA PME',
    'automatisation processus',
    'NateSystem',
    'Nathan Goutagny',
    'transformation digitale PME',
    'AI infrastructure France',
  ],
  authors: [{ name: 'Nathan Goutagny', url: 'https://natesystem.com' }],
  creator: 'Nathan Goutagny',
  metadataBase: new URL('https://natesystem.com'),
  alternates: {
    canonical: 'https://natesystem.com',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://natesystem.com',
    title: 'NateSystem — Scale Operations Without Scaling Headcount',
    description:
      'Scale your operations without scaling headcount. Intelligent systems deployed directly into your business.',
    siteName: 'NateSystem',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem — Scale Operations Without Scaling Headcount',
    description: 'Intelligent systems deployed directly into your operations.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Instrument Serif from Google Fonts (no next/font support for italic-only) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231a1a1a'/%3E%3Ctext x='12' y='48' font-family='Georgia,serif' font-style='italic' font-size='46' font-weight='bold' fill='white'%3EN%3C/text%3E%3Ccircle cx='49' cy='46' r='4' fill='%23E63946'/%3E%3C/svg%3E"
        />
        {/* Inline theme script — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ns-theme');if(t==='light'||t==='dark'){document.documentElement.classList.toggle('light',t==='light')}else{document.documentElement.classList.add('light');localStorage.setItem('ns-theme','light')}}catch(e){}})()`,
          }}
        />
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JCM93QPKTD" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JCM93QPKTD');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","w4g9vbwe3u");`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>
            <div className="grid-bg" aria-hidden="true" />
            <div className="noise" aria-hidden="true" />
            <div className="content">
              {children}
            </div>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
