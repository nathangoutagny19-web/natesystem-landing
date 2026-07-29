'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ScreenMock from '@/components/ui/ScreenMock'
import { CAL_LINK } from '@/lib/constants'

type Tool = {
  name: string
  tag: string
  problem: string
  href: string | null
  img: string | null
  alt: string
  cta: string
  soon?: boolean
}

// Le Prévisionnel : URL de démo qui marche aujourd'hui. À basculer sur
// https://previsionnel.natesystem.com une fois le domaine déployé.
const TOOLS: Tool[] = [
  {
    name: 'NateSystem Stock',
    tag: 'Gestion de stock',
    problem: 'Vous gérez votre stock sur Excel ? Voyez en temps réel ce qui manque, ce qui est en rupture, ce qui va bientôt manquer.',
    href: 'https://stack-stock.natesystem.com',
    img: 'demos/stock',
    alt: 'Logiciel de gestion de stock gratuit NateSystem Stock : tableau de bord avec références actives, stock faible et ruptures',
    cta: 'Essayer la démo',
  },
  {
    name: 'Le Prévisionnel',
    tag: 'Prévision de trésorerie',
    problem: 'Sachez exactement à quel mois votre trésorerie passe dans le rouge. TVA, salaires, cotisations et retards de paiement inclus.',
    href: 'https://natesystem-treso.vercel.app',
    img: 'demos/treso',
    alt: 'Outil de prévision de trésorerie gratuit Le Prévisionnel : tableau prévisionnel indiquant le mois où la trésorerie passe sous zéro',
    cta: 'Essayer la démo',
  },
  {
    name: 'Diagnostic IA',
    tag: 'Maturité IA',
    problem: 'Votre entreprise est-elle prête pour l’IA ? Le test en 2 minutes, sans jargon : processus, données, adoption.',
    href: '/outils/pret-pour-lia',
    img: 'demos/diagnostic-ia',
    alt: 'Diagnostic IA gratuit NateSystem : test de maturité IA avec 3 jauges par pilier (processus, données, adoption)',
    cta: 'Faire le test',
  },
]

export default function OutilsPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 860 }}>
          <FadeUp>
            <span className="section-label">Outils gratuits</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 820, margin: '14px auto 22px' }}>
              Des outils gratuits pour <span className="accent" style={{ color: 'var(--accent)' }}>reprendre le contrôle de votre entreprise.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 30px', lineHeight: 1.65 }}>
              On construit des logiciels sur-mesure pour les PME. En voici des versions gratuites, à tester tout de suite, sans inscription.
            </p>
            <Link href={CAL_LINK} className="font-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, letterSpacing: 0.4, color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 3 }}>
              Besoin d’un outil taillé pour vous ? Réserver un appel <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Grille des outils */}
      <section style={{ padding: '64px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div className="outils-grid">
            {TOOLS.map((tool, i) => (
              <FadeUp key={tool.name} delay={Math.min(i * 0.08, 0.3)}>
                <div className={`outil-card${tool.soon ? ' outil-card-soon' : ''}`}>
                  <div className="outil-head">
                    <span className="font-mono outil-tag">{tool.tag}</span>
                    {tool.soon && <span className="font-mono outil-badge-soon">Bientôt</span>}
                  </div>
                  <h2 className="font-serif italic outil-name">{tool.name}</h2>
                  <p className="font-sans outil-problem">{tool.problem}</p>

                  {tool.img ? (
                    <div className="outil-shot">
                      <ScreenMock src={`/realisations/${tool.img}.jpg`} alt={tool.alt} />
                    </div>
                  ) : (
                    <div className="outil-shot outil-shot-placeholder" aria-hidden="true">
                      <span className="font-mono">En préparation</span>
                    </div>
                  )}

                  {tool.href ? (
                    tool.href.startsWith('/') ? (
                      <Link href={tool.href} className="btn-primary outil-cta">
                        <span className="btn-primary-dot" />{tool.cta} &rarr;
                      </Link>
                    ) : (
                      <a href={tool.href} target="_blank" rel="noopener noreferrer" className="btn-primary outil-cta">
                        <span className="btn-primary-dot" />{tool.cta} &rarr;
                      </a>
                    )
                  ) : (
                    <span className="outil-cta-soon font-mono">{tool.cta}</span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Sections descriptives (contenu indexé par Google) */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <article style={{ marginBottom: 56 }}>
              <span className="section-label">NateSystem Stock</span>
              <h2 className="font-serif italic outil-desc-title">Un logiciel de gestion de stock gratuit, pour PME et TPE.</h2>
              <p className="outil-desc-p">
                Beaucoup de PME et de TPE gèrent encore leur stock sur Excel. Ça marche… jusqu’au jour où une rupture vous fait
                perdre une commande, ou où vous commandez en double faute de visibilité. NateSystem Stock est un logiciel de
                gestion de stock gratuit et simple : vous voyez en temps réel ce que vous avez, ce qui manque, et ce qui va
                bientôt manquer.
              </p>
              <p className="outil-desc-p">
                Références actives, entrées et sorties, seuils d’alerte, fournisseurs, lecture de codes-barres : tout est
                centralisé au même endroit. Fini le fichier qui s’écrase et le « c’était quelle version, déjà ? ». La démo tourne
                sur des données fictives, vous pouvez tout tester sans inscription et sans mur e-mail.
              </p>
              <p className="outil-desc-p">
                C’est le même moteur qu’on déploie en production chez nos clients, dans une version que vous essayez tout de suite.
                Si vous voulez un logiciel de gestion de stock taillé pour votre métier, avec vos références, vos fournisseurs et
                vos règles, c’est exactement ce qu’on construit chez NateSystem.
              </p>
            </article>

            <article style={{ marginBottom: 56 }}>
              <span className="section-label">Le Prévisionnel</span>
              <h2 className="font-serif italic outil-desc-title">Un outil de prévision de trésorerie gratuit.</h2>
              <p className="outil-desc-p">
                La trésorerie, c’est ce qui tue le plus de PME pourtant rentables. Pas parce qu’elles ne gagnent pas d’argent,
                mais parce qu’elles ne voient pas venir le mois où le compte passe dans le rouge. Le Prévisionnel est un outil de
                prévision de trésorerie gratuit qui vous donne cette visibilité : à quel mois vous passez sous zéro, et de combien.
              </p>
              <p className="outil-desc-p">
                Il tient compte de tout ce qui compte vraiment : TVA, salaires, cotisations, échéances, et surtout les retards de
                paiement de vos clients. Un tableau prévisionnel de trésorerie clair, sur vos vrais chiffres, avec un simulateur
                qui chiffre les leviers pour combler le trou : se faire payer plus tôt, négocier des délais fournisseurs, facturer
                davantage.
              </p>
              <p className="outil-desc-p">
                Vos chiffres ne quittent pas votre navigateur. Pas d’inscription, pas d’export vers un serveur : vous testez, vous
                voyez, vous décidez. Et si vous voulez brancher le prévisionnel sur votre comptabilité réelle, on le fait sur-mesure.
              </p>
            </article>

            <article>
              <span className="section-label">Diagnostic IA</span>
              <h2 className="font-serif italic outil-desc-title">Votre entreprise est-elle prête pour l’IA ?</h2>
              <p className="outil-desc-p">
                L’IA, tout le monde en parle, mais peu de dirigeants savent par où commencer chez eux. Notre Diagnostic IA
                répond à une question simple : votre entreprise est-elle vraiment prête ? En 12 questions honnêtes, réparties sur
                3 piliers (processus clairs, données fiables, adoption par les équipes), vous obtenez un score par pilier et un
                verdict franc.
              </p>
              <p className="outil-desc-p">
                En 2 minutes, sans jargon et sans inscription, vous voyez où l’IA vous ferait gagner de vraies heures, et où ce
                serait juste un gadget, avec un premier pas concret adapté à votre point le plus faible. Un point de départ
                honnête, pas une brochure.{' '}
                <Link href="/outils/pret-pour-lia" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Faire le test →</Link>
              </p>
            </article>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Bloc conversion */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Besoin d’un outil taillé pour <span className="accent">votre métier</span> ?
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                Ces outils gratuits sont des versions publiques de ce qu’on construit. Chez NateSystem, on développe le logiciel
                sur-mesure qui colle exactement à votre activité. Un appel offert pour en parler, sans engagement.
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />Réserver un appel gratuit
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .outils-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }
        .outil-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px 24px 24px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease;
        }
        .outil-card:hover { transform: translateY(-3px); border-color: rgba(230,57,70,0.28); }
        .outil-card-soon { opacity: 0.92; }
        .outil-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .outil-tag { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); font-weight: 600; }
        .outil-badge-soon {
          font-size: 9.5px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted);
          border: 1px solid var(--border); border-radius: 999px; padding: 3px 9px;
        }
        .outil-name { font-size: 24px; font-weight: 400; color: var(--text); line-height: 1.15; margin: 0 0 10px; }
        .outil-problem { font-size: 14px; font-weight: 300; color: var(--text-secondary); line-height: 1.6; margin: 0 0 20px; flex: 1; }
        .outil-shot { height: 168px; margin-bottom: 22px; }
        .outil-shot-placeholder {
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px; border: 1px dashed var(--border-hover); background: var(--bg-elevated);
        }
        .outil-shot-placeholder span { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); }
        .outil-cta { align-self: flex-start; font-size: 13px; }
        .outil-cta-soon {
          align-self: flex-start; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase;
          color: var(--text-muted); border: 1px solid var(--border); border-radius: 12px; padding: 12px 20px;
        }

        .outil-desc-title { font-size: clamp(22px, 3vw, 30px); font-weight: 400; color: var(--text); line-height: 1.2; margin: 4px 0 16px; }
        .outil-desc-p { font-size: 15.5px; font-weight: 300; color: var(--text-secondary); line-height: 1.75; margin: 0 0 16px; }

        @media (max-width: 900px) {
          .outils-grid { grid-template-columns: 1fr; gap: 18px; }
          .outil-problem { flex: none; }
        }
      `}</style>
    </main>
  )
}
