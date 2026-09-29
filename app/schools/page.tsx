'use client'

import Link from 'next/link'
import { Check, X } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ScreenMock from '@/components/ui/ScreenMock'
import { CAL_LINK } from '@/lib/constants'

/**
 * La page vers laquelle pointe le lien LinkedIn.
 *
 * Le hero reprend mot pour mot la bannière du profil : même promesse, même
 * chiffre, même mockup. C'est le but, un prospect qui clique doit retrouver
 * exactement ce qu'il vient de lire.
 *
 * Il est rebâti en HTML plutôt que posé en image : un texte dans un PNG de
 * 1584 × 396 devient illisible sur téléphone, invisible pour Google, et ne se
 * corrige pas d'un mot. Le rendu est le même.
 *
 * ⚠︎ Aucun nom de client, aucun logo. Institut Chartreux n'est pas citable
 * publiquement (brain/accounts/institut-chartreux.md), et l'autorisation de
 * l'IUT n'est tracée nulle part. Le chiffre affiché, 30 heures par mois, est
 * celui du cerveau et il n'est attribué à personne.
 */

const PAINS = [
  'Schedules, hours and leave live in spreadsheets that three people edit at once',
  'Every month, someone re-enters the same hours to prepare payroll',
  'Each site tracks things its own way, so nothing adds up at group level',
  'Your software was built for a company, not for a school calendar',
  'When the person who knows the process is away, everything waits',
]

const BUILDS = [
  {
    title: 'Staff scheduling, per site',
    desc: 'One rota for every site, with your own roles, your own shift rules, and who is actually available. Changes are visible the second they are made.',
    metric: 'One rota, every site',
  },
  {
    title: 'Time tracking and hour counts',
    desc: 'Tablet or phone clock-in, overtime and annualised hours calculated against your collective agreement, not a generic template.',
    metric: 'Payroll prep in minutes',
  },
  {
    title: 'Stock and equipment',
    desc: 'Supplies, IT, linen, textbooks: what you hold, who has it, what needs reordering. No more end-of-year inventory weekend.',
    metric: 'What you hold, in real time',
  },
  {
    title: 'Student and family records',
    desc: 'Admissions, files, internships, alumni, all in one place instead of four. Each role sees what it needs, and nothing else.',
    metric: 'One record, one truth',
  },
]

const FOR_YOU = [
  'You run a private school or a group of 30 to 300 staff',
  'Your teams re-enter the same data into several tools every month',
  'You have several sites and no reliable consolidated view',
  'You want the tool to follow your calendar, not the reverse',
]

const NOT_FOR_YOU = [
  'You want an off-the-shelf tool you can buy this afternoon',
  'Your processes work and nobody loses time on them',
  'You would rather change how the school works than change the software',
  'You cannot give a few hours of your administrative team to the mapping',
]

const STEPS = [
  { n: '01', t: 'We map how the school actually runs', d: 'A few calls with the people who do the work. Who does what, in what order, with which file. You prepare nothing.' },
  { n: '02', t: 'You see a clickable prototype', d: 'Before anything is committed, you click through your own platform and tell us what is wrong.' },
  { n: '03', t: 'We build and put it live', d: 'Live within one trimester. Your teams keep working the whole time, nothing stops.' },
  { n: '04', t: 'We train until you are autonomous', d: 'From leadership to the front desk, until it runs without us. The code and the documentation are yours.' },
]

export default function SchoolsPage() {
  return (
    <main>
      <Nav />

      {/* ═══ HERO — la bannière LinkedIn, rebâtie en HTML ═══ */}
      <section className="sch-hero">
        <div className="mx-auto sch-hero-inner">
          <FadeUp>
            <p className="font-mono sch-eyebrow">Private schools · Custom platforms</p>
            <h1 className="font-serif italic sch-h1">
              Give your school administration <span className="accent">30 hours a month</span> back.
            </h1>
            <p className="font-sans sch-sub">
              Custom software built on your calendar, your collective agreement and your sites.
              Your teams stop re-entering the same data. <strong>You own the code.</strong>
            </p>
            <div className="sch-chips">
              <span className="sch-chip font-mono"><i />Time back</span>
              <span className="sch-chip font-mono"><i />Clear processes</span>
              <span className="sch-chip font-mono"><i />Centralized data</span>
              <span className="sch-chip font-mono"><i />Peace of mind</span>
            </div>
            <Link href={CAL_LINK} className="btn-primary sch-cta">
              <span className="btn-primary-dot" />Book a call · free &rarr;
            </Link>
          </FadeUp>

          {/* Le div est ici, et pas en `className` sur FadeUp, parce que styled-jsx
              ne pose sa classe de portée que sur de vrais éléments DOM : posée sur
              un composant, la règle `.sch-hero-shot …` ci-dessous ne matchait rien. */}
          <FadeUp delay={0.12}>
            <div className="sch-hero-shot">
              <ScreenMock
                src="/realisations/mockups/tcrm.webp"
                alt="Interface of a NateSystem platform: records, schedules and hours in one place"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ═══ LE PROBLÈME ═══ */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">If this sounds like you</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              The school runs fine. <span className="accent">The admin does not.</span>
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 640, display: 'grid', gap: 13 }}>
            {PAINS.map((p) => (
              <li key={p} className="flex items-start gap-3" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1, fontWeight: 600 }}>·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* ═══ CE QU'ON CONSTRUIT ═══ */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">What we build</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              One platform, <span className="accent">shaped like your school.</span>
            </h2>
          </FadeUp>
          <div className="sch-grid">
            {BUILDS.map((b) => (
              <div key={b.title} className="sch-card">
                <h3 className="font-serif italic sch-card-title">{b.title}</h3>
                <p className="font-sans sch-card-desc">{b.desc}</p>
                <div className="sch-card-metric">
                  <p className="font-mono">{b.metric}</p>
                </div>
              </div>
            ))}
          </div>
          <FadeUp>
            <p className="font-sans sch-note">
              We start from what you already do. If a module is not useful to your school, we do not build it.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ═══ POURQUOI C'EST DIFFÉRENT ═══ */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Why this is different</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              You change nothing about <span className="accent">how the school works.</span>
            </h2>
          </FadeUp>
          <div className="sch-why">
            <div className="sch-why-item">
              <h3 className="font-sans sch-why-title">Built on your calendar</h3>
              <p className="font-sans sch-why-desc">Terms, holidays, exam weeks, your own collective agreement. Generic tools were written for companies with none of that.</p>
            </div>
            <div className="sch-why-item">
              <h3 className="font-sans sch-why-title">No reorganization</h3>
              <p className="font-sans sch-why-desc">The software follows your processes. Your teams do not have to learn a new way of working to use it.</p>
            </div>
            <div className="sch-why-item">
              <h3 className="font-sans sch-why-title">The code is yours</h3>
              <p className="font-sans sch-why-desc">Source code delivered, documented. No subscription to keep access. If we disappear, it keeps running.</p>
            </div>
            <div className="sch-why-item">
              <h3 className="font-sans sch-why-title">Your data stays in the EU</h3>
              <p className="font-sans sch-why-desc">Student and staff records are sensitive. Hosted in the European Union, GDPR-native, auditable.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ COMMENT ÇA SE PASSE ═══ */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">How it goes</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Live within <span className="accent">one trimester.</span>
            </h2>
          </FadeUp>
          <div className="sch-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="sch-step">
                <span className="font-mono sch-step-n">{s.n}</span>
                <div>
                  <h3 className="font-sans sch-step-title">{s.t}</h3>
                  <p className="font-sans sch-step-desc">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ EST-CE POUR VOUS ═══ */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Is this for you?</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              We are <span className="accent">straight with you from the start.</span>
            </h2>
          </FadeUp>
          <div className="sch-fit">
            <div className="sch-fit-col">
              <div className="sch-fit-head"><Check size={16} strokeWidth={2.4} style={{ color: 'var(--accent)' }} /><span className="font-mono">This is for you if</span></div>
              <ul>{FOR_YOU.map((f) => <li key={f} className="font-sans">{f}</li>)}</ul>
            </div>
            <div className="sch-fit-col sch-fit-no">
              <div className="sch-fit-head"><X size={16} strokeWidth={2.4} style={{ color: 'var(--text-muted)' }} /><span className="font-mono">This is not for you if</span></div>
              <ul>{NOT_FOR_YOU.map((f) => <li key={f} className="font-sans">{f}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div className="sch-cta-box">
              <h2 className="font-serif italic sch-cta-title">
                Tell me where the hours go.
              </h2>
              <p className="font-sans sch-cta-sub">
                A free call. We look at how your school runs and I tell you plainly where the time is lost
                and what it would take to get it back. You leave with a clear plan, even if we never work together.
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />Book a call · free
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .sch-hero { padding: 150px 24px 60px; }
        .sch-hero-inner {
          max-width: 1180px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
          gap: 56px;
          align-items: center;
        }
        .sch-eyebrow {
          font-size: 11.5px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--accent); font-weight: 600; margin-bottom: 16px;
        }
        .sch-h1 {
          font-size: clamp(34px, 4.6vw, 54px); font-weight: 400; line-height: 1.12;
          color: var(--text); margin: 0 0 20px; letter-spacing: -0.4px;
        }
        .sch-sub {
          font-size: clamp(15px, 2.4vw, 17.5px); font-weight: 300; line-height: 1.65;
          color: var(--text-secondary); max-width: 560px; margin: 0 0 24px;
        }
        .sch-sub strong { font-weight: 500; color: var(--text); }
        .sch-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px; }
        .sch-chip {
          font-size: 11px; letter-spacing: 0.4px; color: var(--text-secondary);
          border: 1px solid var(--border); border-radius: 999px;
          padding: 6px 13px; background: var(--bg-card);
          display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;
        }
        .sch-chip i { width: 4.5px; height: 4.5px; border-radius: 50%; background: var(--accent); opacity: .85; }
        .sch-cta { font-size: 14px; }
        /* .screenmock est en height:100% (globals.css) : sans hauteur donnée ici,
           la colonne de grille se réduisait à la barre du navigateur et le
           mockup n'affichait rien. Le ratio la lui donne. */
        .sch-hero-shot { min-width: 0; }
        .sch-hero-shot :global(.screenmock) {
          height: auto;
          aspect-ratio: 2 / 1; /* la capture fait 1100x485, le cadre la suit de près */
          box-shadow: 0 30px 70px -30px rgba(15,23,42,.35);
        }

        .sch-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
        .sch-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
          padding: 28px 26px; height: 100%; display: flex; flex-direction: column; gap: 12px;
          box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 8px 24px -16px rgba(15,23,42,.12);
        }
        .sch-card-title { font-size: 22px; font-weight: 400; line-height: 1.15; color: var(--text); margin: 0; }
        .sch-card-desc { font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; font-weight: 300; margin: 0; flex: 1; }
        .sch-card-metric { border-left: 2px solid var(--accent); padding-left: 12px; margin-top: 4px; }
        .sch-card-metric p { font-size: 11px; font-weight: 500; color: var(--accent); line-height: 1.4; margin: 0; }
        .sch-note {
          font-size: 14.5px; font-weight: 300; color: var(--text-muted); line-height: 1.7;
          text-align: center; max-width: 640px; margin: 34px auto 0;
        }

        .sch-why { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 44px; }
        .sch-why-item { border-top: 1px solid var(--border); padding-top: 18px; }
        .sch-why-title { font-size: 16px; font-weight: 500; color: var(--text); margin: 0 0 8px; }
        .sch-why-desc { font-size: 14px; font-weight: 300; color: var(--text-secondary); line-height: 1.65; margin: 0; }

        .sch-steps { display: grid; gap: 22px; }
        .sch-step { display: grid; grid-template-columns: 56px 1fr; gap: 18px; align-items: start; }
        .sch-step-n { font-size: 20px; color: var(--text-muted); letter-spacing: 1px; padding-top: 2px; }
        .sch-step-title { font-size: 16.5px; font-weight: 500; color: var(--text); margin: 0 0 6px; }
        .sch-step-desc { font-size: 14px; font-weight: 300; color: var(--text-secondary); line-height: 1.65; margin: 0; }

        .sch-fit { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
        .sch-fit-col {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 14px; padding: 28px 26px;
        }
        .sch-fit-no { opacity: .82; }
        .sch-fit-head {
          display: flex; align-items: center; gap: 9px; margin-bottom: 18px;
          font-size: 10.5px; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--text-muted); font-weight: 600;
        }
        .sch-fit-col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
        .sch-fit-col li {
          font-size: 14.5px; font-weight: 300; color: var(--text-secondary); line-height: 1.55;
          padding-left: 16px; position: relative;
        }
        .sch-fit-col li::before {
          content: ''; position: absolute; left: 0; top: 8px;
          width: 5px; height: 5px; border-radius: 50%; background: var(--border-hover);
        }

        .sch-cta-box {
          background: var(--bg-card); border: 1px solid rgba(230,57,70,.15);
          border-radius: 12px; padding: 48px 40px; text-align: center;
        }
        .sch-cta-title { font-size: clamp(24px, 4vw, 32px); font-weight: 400; margin-bottom: 16px; color: var(--text); }
        .sch-cta-sub {
          font-size: 15px; font-weight: 300; color: var(--text-secondary); line-height: 1.7;
          max-width: 540px; margin: 0 auto 32px;
        }

        @media (max-width: 960px) {
          .sch-hero { padding: 130px 24px 48px; }
          .sch-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .sch-grid, .sch-why, .sch-fit { grid-template-columns: 1fr; }
          .sch-why { gap: 22px; }
        }
      `}</style>
    </main>
  )
}
