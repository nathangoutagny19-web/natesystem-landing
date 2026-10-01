'use client'

import { useEffect, useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import VslPlayer from '@/components/ui/VslPlayer'
import LiteYouTube from '@/components/ui/LiteYouTube'
import ClientsBar from '@/components/home/ClientsBar'

/**
 * ATELIER · « Créer ses propres outils pour sa classe, sans développeur »
 *
 * Porte d'entrée, pas offre. Une heure gratuite et utile offerte à l'équipe
 * pédagogique, qui met Nathan dans la maison et lui donne une raison de
 * revenir parler d'organisation interne.
 *
 * ⚠︎ UN SEUL LECTEUR : LE CHEF D'ÉTABLISSEMENT. Pas le professeur. C'est lui
 * qui autorise, qui réunit son équipe et qui signe plus tard. Le titre de
 * l'atelier, lui, est écrit pour le prof (c'est ce qui remplit la salle) :
 * il apparaît donc comme objet cité dans la page, jamais comme titre de la
 * page. Le titre de la page dit ce que le chef y gagne.
 *
 * ⚠︎ UNE SEULE ACTION. Ni nav, ni pied de page du site, ni second CTA. Tout
 * lien sortant est une fuite. Les seules sorties sont les mentions légales
 * (obligation) et l'email.
 *
 * ⚠︎ CHIFFRES. Les seuls publiables ici : les 40 h/mois des Chartreux,
 * toujours formulées comme un report du client, et leurs neuf établissements.
 * L'IUT de Saint-Étienne est citable comme preuve de secteur. Tout le reste
 * est « d'autres organisations ». Rien d'autre, jamais, même pour rendre une
 * ligne plus concrète. Voir brain/accounts/institut-chartreux.md.
 */

/* Le nombre d'établissements pris ce trimestre, décidé par Nathan le
   01/10/2026. Il crée la rareté et il doit rester vrai : c'est ici qu'on le
   change, il est affiché à deux endroits. */
const ETABLISSEMENTS_PAR_TRIMESTRE = 3

/* LA VSL, et elle n'existe pas encore (01/10/2026) : Nathan l'enregistre.
   Le bloc ne s'affiche QUE quand ce réglage n'est plus `null`, parce qu'une
   page en ligne ne montre pas un cadre vide, ni un bouton lecture qui ne lance
   rien, à un chef d'établissement.
   POUR L'ALLUMER : déposer la vidéo et son image d'attente dans /public, puis
   remplacer null par
     { src: '/vsl-atelier.mp4', poster: '/vsl-atelier-poster.jpg', duree: '3 min' }
   VslPlayer ne télécharge le fichier qu'au clic : seule l'image d'attente part
   au chargement, donc la page reste légère. */
const VSL: { src: string; poster?: string; duree?: string } | null = null

/* LA PREUVE CHIFFRÉE. Formulation voulue, et elle n'est pas interchangeable :
   neuf des établissements comptés appartiennent aux Chartreux, un seul client.
   « 13 organisations » serait donc faux et se vérifie en une question ; « 13
   établissements et organisations » dit exactement ce qu'il compte. Nathan a
   arrêté le nombre le 01/10/2026. */
const PARC = 'Plus de 13 établissements et organisations'

/* Le podcast avec Catherine F. n'existe pas en photo fixe dans le dépôt : il
   existe en vidéo, et sa miniature YouTube EST la photo, en cliquable. */
const PODCAST_ID = 'aMIjJbzuhDc'

const FAITS = [
  {
    titre: 'Une heure',
    detail: 'Pas une demi-journée, pas un cycle de formation à caser dans l’année.',
  },
  {
    titre: 'Dix à vingt personnes',
    detail: 'Votre équipe pédagogique telle qu’elle est, débutants compris.',
  },
  {
    titre: 'Chez vous ou en visio',
    detail: 'Je me déplace dans votre établissement quand c’est possible.',
  },
  {
    titre: 'Gratuit',
    detail: 'Il n’y a pas de version payante de l’atelier derrière.',
  },
]

const DEROULE = [
  {
    num: '01',
    titre: 'On part d’une corvée réelle',
    texte:
      'Un professeur de la salle donne la tâche qui lui mange ses dimanches soir. C’est celle-là qu’on traite, pas un exemple de démonstration préparé à l’avance.',
  },
  {
    num: '02',
    titre: 'On la construit en direct',
    texte:
      'À l’écran, devant tout le monde, de la feuille blanche à l’outil qui tourne. Les questions se posent pendant, pas à la fin.',
  },
  {
    num: '03',
    titre: 'Chacun repart avec le sien',
    texte:
      'L’outil construit pendant l’heure, et de quoi en refaire un autre tout seul la semaine suivante.',
  },
]

const EXEMPLES = [
  'Un suivi de classe qui se remplit en deux clics au lieu de quinze colonnes à recopier.',
  'Une grille d’évaluation qui calcule toute seule et qui se réutilise d’une année sur l’autre.',
  'Un récapitulatif de fin de trimestre qui se génère au lieu de se taper.',
  'Un planning de salle, de matériel ou de sortie qui ne vit plus dans un classeur partagé.',
]

const FONCTIONS = [
  'Chef d’établissement',
  'Direction adjointe',
  'Responsable administratif',
  'Professeur',
  'Autre',
]

const TAILLES = ['Moins de 10', '10 à 20', 'Plus de 20', 'Je ne sais pas encore']

const LIEUX = ['Dans notre établissement', 'En visio', 'Peu importe']

type Statut = 'repos' | 'envoi' | 'ok' | 'erreur'

export default function AtelierPage() {
  const [statut, setStatut] = useState<Statut>('repos')

  /* La bulle WhatsApp flottante est montée par le layout racine, donc sur
     toutes les pages. Ici elle est une deuxième action en concurrence avec le
     formulaire, et elle est hors registre pour un chef d'établissement. Le
     composant prévoit déjà son propre interrupteur, on s'en sert plutôt que
     de le modifier. */
  useEffect(() => {
    document.body.setAttribute('data-hide-whatsapp-float', 'true')
    return () => document.body.removeAttribute('data-hide-whatsapp-float')
  }, [])

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (statut === 'envoi') return
    setStatut('envoi')

    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    /* Contrairement à /api/book/notify, qui avale ses erreurs parce que le
       vrai rendez-vous se prend ensuite sur Cal, ici le formulaire EST la
       conversion. Un échec silencieux perdrait la demande sans que personne
       ne le sache : on le dit, et on donne l'adresse email en repli. */
    try {
      const res = await fetch('/api/atelier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatut(res.ok ? 'ok' : 'erreur')
    } catch {
      setStatut('erreur')
    }
  }

  return (
    <main className="at-page">
      {/* En-tête réduite au strict minimum : la marque, et rien à cliquer
          qui emmène ailleurs que sur le formulaire. */}
      <header className="at-header">
        <div className="at-brand">
          <span className="font-serif italic at-brand-n">N</span>
          <span className="at-brand-dot" aria-hidden="true" />
          <span className="font-sans at-brand-name">NateSystem</span>
        </div>
        <a href="#demander" className="font-sans at-header-cta">
          Demander l’atelier
        </a>
      </header>

      {/* ——— HERO ——— */}
      <section className="at-hero">
        <FadeUp>
          <p className="font-mono at-eyebrow">
            Atelier offert · Une heure · Chez vous ou en visio
          </p>
          <h1 className="font-serif italic at-h1">
            Vos professeurs ont tous un tableur qu’ils ont bricolé seuls.
          </h1>
          <p className="font-sans at-hero-sub">
            En une heure, ils construisent l’outil qui le remplace. Pour leur classe, à leur
            main, sans écrire une ligne de code et sans rien installer. C’est gratuit, et ça ne
            vous engage à rien.
          </p>
          {VSL && (
            <div className="at-vsl">
              <VslPlayer
                src={VSL.src}
                poster={VSL.poster}
                duration={VSL.duree}
                label="Voir ce que fait l’atelier"
                title="L’atelier NateSystem, en quelques minutes"
              />
            </div>
          )}

          <div className="at-hero-actions">
            <a href="#demander" className="btn-primary">
              Demander l’atelier pour mon établissement
            </a>
            <p className="font-mono at-scarcity">
              Je prends {ETABLISSEMENTS_PAR_TRIMESTRE} établissements ce trimestre.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ——— LES FAITS, pour que la décision se prenne sans appel préalable ——— */}
      <section className="at-facts-wrap">
        <FadeUp>
          <ul className="at-facts">
            {FAITS.map((f) => (
              <li key={f.titre} className="at-fact">
                <p className="font-sans at-fact-title">{f.titre}</p>
                <p className="font-sans at-fact-detail">{f.detail}</p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      {/* ——— LA PREUVE ———
          Elle arrive avant le déroulé : un directeur juge d'abord à qui il a
          affaire, le contenu de l'heure ne l'intéresse qu'ensuite.

          ⚠︎ Les logos viennent de ClientsBar, le composant de la home, et pas
          d'une liste recopiée ici : ajouter une référence doit rester un
          changement à un seul endroit. Son intitulé est masqué, le titre
          ci-dessous le remplace. */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">La preuve</p>
          <h2 className="font-serif italic at-h2">
            {PARC} tournent sur nos outils.
          </h2>
          <p className="font-sans at-lead">
            Des écoles, un IUT, et des organisations d’autres secteurs. Les mêmes contraintes
            partout : beaucoup de monde, peu de temps, et un logiciel du commerce qui ne colle
            jamais tout à fait.
          </p>
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="at-logos">
            <ClientsBar hideLabel />
          </div>
        </FadeUp>

        <div className="at-proof-grid">
          <FadeUp delay={0.1}>
            <figure className="at-proof-item">
              <div className="at-proof-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/realisations/chartreux-terrasse.webp"
                  alt="Nathan Goutagny serre la main de sa cliente sur la terrasse des Chartreux, à Lyon"
                  loading="lazy"
                  width={1200}
                  height={1200}
                />
              </div>
              <figcaption className="font-sans at-proof-caption">
                Aux Chartreux, à Lyon. Neuf établissements sur une seule plateforme, et quarante
                heures récupérées chaque mois, de leur propre compte.
              </figcaption>
            </figure>
          </FadeUp>

          <FadeUp delay={0.16}>
            <figure className="at-proof-item">
              <div className="at-proof-media at-proof-video">
                <LiteYouTube
                  id={PODCAST_ID}
                  title="Catherine F. raconte ce que les plateformes sur-mesure ont changé chez elle"
                />
              </div>
              <figcaption className="font-sans at-proof-caption">
                Catherine F., directrice générale d’une organisation de Saint-Étienne, raconte ce
                que deux plateformes sur-mesure ont changé chez eux.
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      {/* ——— LE DÉROULÉ ——— */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">L’heure</p>
          <h2 className="font-serif italic at-h2">Ce qu’il se passe, concrètement.</h2>
          <p className="font-sans at-lead">
            L’atelier s’appelle « Créer ses propres outils pour sa classe, sans développeur ».
            Il tient en trois moments. Rien à préparer, rien à installer, rien à acheter.
          </p>
        </FadeUp>
        <ol className="at-steps">
          {DEROULE.map((s, i) => (
            <FadeUp key={s.num} delay={0.06 * (i + 1)}>
              <li className="at-step">
                <span className="font-mono at-step-num">{s.num}</span>
                <div>
                  <h3 className="font-sans at-step-title">{s.titre}</h3>
                  <p className="font-sans at-step-text">{s.texte}</p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>

      {/* ——— LES EXEMPLES ——— */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">De quoi on parle</p>
          <h2 className="font-serif italic at-h2">Le genre d’outil qui sort d’une heure.</h2>
          <p className="font-sans at-lead">
            « Créer son outil » ne veut pas dire grand-chose tant qu’on n’a pas vu à quoi ça
            ressemble.
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <ul className="at-examples">
            {EXEMPLES.map((ex) => (
              <li key={ex} className="font-sans at-example">
                {ex}
              </li>
            ))}
          </ul>
          <p className="font-sans at-note">
            Ce sont des exemples, pas un programme. L’heure part de ce que vos professeurs
            apportent ce jour-là.
          </p>
        </FadeUp>
      </section>

      {/* ——— POURQUOI C'EST GRATUIT ———
          La section la plus importante de la page. Un chef d'établissement qui
          lit « gratuit » cherche le piège : on le lui donne, en clair. C'est
          aussi ici que vit la condition « un membre de la direction présent »,
          présentée comme une conséquence et non comme un péage. */}
      <section className="at-section at-why">
        <FadeUp>
          <p className="font-mono at-label">La transparence</p>
          <h2 className="font-serif italic at-h2">Pourquoi c’est gratuit, et ce que j’y gagne.</h2>
          <div className="at-prose">
            <p>
              Je ne vends pas de formation. Mon métier, c’est de construire des logiciels de
              gestion sur mesure pour des établissements : les plannings, le comptage des heures,
              les dossiers, le suivi des élèves.
            </p>
            <p>
              L’Institut des Chartreux, neuf établissements à Lyon, tourne sur une plateforme RH
              que j’ai écrite pour eux. Ils rapportent quarante heures récupérées par mois. L’IUT
              de Saint-Étienne a son CRM pédagogique. D’autres organisations ont leurs outils de
              stock et de logistique.
            </p>
            <p>
              L’atelier ne démontre rien de tout ça. C’est une heure utile pour vos professeurs,
              et elle le reste même si on n’en fait rien ensuite.
            </p>
            <p>
              Ce que j’y gagne : vous me voyez travailler. Si à la fin vous avez envie qu’on
              regarde comment ça se passe chez vous côté administratif, je reste une demi-heure de
              plus. Si vous n’avez pas envie, l’heure a quand même servi.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="at-condition">
            <p className="font-mono at-condition-label">La seule chose que je demande</p>
            <p className="font-sans at-condition-text">
              Qu’un membre de la direction soit dans la salle. La deuxième moitié de mon métier
              concerne l’organisation, et ça ne se raconte pas par personne interposée.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ——— QUI VIENT ——— */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">Qui vient</p>
          <h2 className="font-serif italic at-h2">Nathan Goutagny.</h2>
          <div className="at-prose">
            <p>
              Je vends et je code moi-même. Il n’y a ni commercial ni junior derrière : la
              personne qui anime l’heure est celle qui écrirait le logiciel.
            </p>
            <p>
              Quand un établissement me confie un projet, le code source lui appartient à cent
              pour cent et les données restent hébergées en Europe. Pour un établissement qui
              tient des dossiers de mineurs, ce n’est pas un détail de bas de page.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ——— LE FORMULAIRE, seule action de la page ——— */}
      <section className="at-section at-form-section" id="demander">
        <FadeUp>
          <p className="font-mono at-label">La demande</p>
          <h2 className="font-serif italic at-h2">Demander l’atelier pour votre établissement.</h2>
          <p className="font-sans at-lead">
            Je reviens vers vous sous 48 heures avec deux ou trois créneaux. Je prends{' '}
            {ETABLISSEMENTS_PAR_TRIMESTRE} établissements ce trimestre.
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          {statut === 'ok' ? (
            <div className="at-done">
              <p className="font-serif italic at-done-title">C’est parti.</p>
              <p className="font-sans at-done-text">
                Je vous réponds sous 48 heures, depuis nathan@natesystem.com. Si vous ne voyez
                rien passer, regardez vos indésirables.
              </p>
            </div>
          ) : (
            <form className="at-form" onSubmit={envoyer} noValidate={false}>
              <div className="at-row">
                <label className="at-field">
                  <span className="font-mono at-field-label">Votre nom</span>
                  <input name="nom" type="text" required autoComplete="name" placeholder="Prénom et nom" />
                </label>
                <label className="at-field">
                  <span className="font-mono at-field-label">Votre fonction</span>
                  <select name="fonction" defaultValue={FONCTIONS[0]}>
                    {FONCTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="at-field">
                <span className="font-mono at-field-label">Votre établissement</span>
                <input name="etablissement" type="text" required placeholder="Nom de l’établissement, et la ville" />
              </label>

              <div className="at-row">
                <label className="at-field">
                  <span className="font-mono at-field-label">Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="vous@etablissement.fr" />
                </label>
                <label className="at-field">
                  <span className="font-mono at-field-label">Téléphone</span>
                  <input name="telephone" type="tel" required autoComplete="tel" placeholder="06 00 00 00 00" />
                </label>
              </div>

              <div className="at-row">
                <label className="at-field">
                  <span className="font-mono at-field-label">Combien de personnes</span>
                  <select name="personnes" defaultValue={TAILLES[1]}>
                    {TAILLES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="at-field">
                  <span className="font-mono at-field-label">Plutôt</span>
                  <select name="lieu" defaultValue={LIEUX[2]}>
                    {LIEUX.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="at-field">
                <span className="font-mono at-field-label">Un mot, si vous voulez (facultatif)</span>
                <textarea name="mot" rows={3} placeholder="Ce qui vous fait venir, ou une contrainte de calendrier." />
              </label>

              <button type="submit" className="btn-primary at-submit" disabled={statut === 'envoi'}>
                {statut === 'envoi' ? 'Envoi…' : 'Envoyer la demande'}
              </button>

              {statut === 'erreur' && (
                <p className="font-sans at-error" role="alert">
                  Ça n’est pas parti. Écrivez-moi directement à{' '}
                  <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>, je réponds
                  aussi vite.
                </p>
              )}

              <p className="font-sans at-reassurance">
                Pas de newsletter, pas de relance automatique. Votre demande arrive directement
                dans ma boîte.
              </p>
            </form>
          )}
        </FadeUp>
      </section>

      {/* Pied de page réduit : la mention légale est une obligation, pas une
          invitation à visiter le site. */}
      <footer className="at-footer">
        <p className="font-sans at-footer-text">
          NateSystem · Nathan Goutagny ·{' '}
          <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
        </p>
        <a href="/mentions-legales" className="font-sans at-footer-legal">
          Mentions légales
        </a>
      </footer>

      <style jsx>{`
        .at-page {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        /* ——— En-tête ——— */
        .at-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0 0;
        }
        .at-brand {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .at-brand-n {
          font-size: 24px;
          font-weight: 400;
          color: var(--text);
        }
        .at-brand-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          margin: 10px 0 0 -2px;
        }
        .at-brand-name {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-left: 10px;
        }
        .at-header-cta {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          border-bottom: 1px solid var(--border-hover);
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .at-header-cta:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        /* ——— Hero ——— */
        .at-hero {
          padding: 72px 0 56px;
        }
        .at-eyebrow {
          font-size: 11px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 20px;
        }
        .at-h1 {
          font-size: clamp(34px, 6vw, 56px);
          font-weight: 400;
          line-height: 1.05;
          color: var(--text);
          margin: 0 0 22px;
          max-width: 22ch;
        }
        .at-hero-sub {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 56ch;
          margin: 0;
        }
        .at-hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 34px;
        }
        .at-scarcity {
          font-size: 11.5px;
          letter-spacing: 0.4px;
          color: var(--text-muted);
          margin: 0;
        }

        /* ——— Les faits ——— */
        .at-facts-wrap {
          padding-bottom: 12px;
        }
        .at-facts {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: var(--bg-card);
        }
        .at-fact {
          padding: 22px 20px;
          border-right: 1px solid var(--border);
        }
        .at-fact:last-child {
          border-right: 0;
        }
        .at-fact-title {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 7px;
        }
        .at-fact-detail {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        .at-vsl {
          margin-top: 34px;
          display: flex;
          justify-content: flex-start;
        }

        /* ——— Preuve ——— */
        /* ClientsBar porte son propre rembourrage de section, pensé pour la
           home : on le neutralise ici pour qu'il respire comme le reste. */
        .at-logos {
          margin: 26px -24px 4px;
        }
        .at-logos :global(section) {
          padding: 12px 0 !important;
        }
        .at-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          margin-top: 24px;
          align-items: start;
        }
        .at-proof-item {
          margin: 0;
        }
        .at-proof-media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
        }
        .at-proof-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .at-proof-caption {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 12px 0 0;
        }

        /* ——— Sections ——— */
        .at-section {
          padding: 64px 0 0;
        }
        .at-label {
          font-size: 10.5px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 14px;
        }
        .at-h2 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 400;
          line-height: 1.12;
          color: var(--text);
          margin: 0 0 16px;
          max-width: 20ch;
        }
        .at-lead {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 60ch;
          margin: 0;
        }
        .at-prose p {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--text-secondary);
          max-width: 62ch;
          margin: 0 0 16px;
        }
        .at-prose p:last-child {
          margin-bottom: 0;
        }

        /* ——— Déroulé ——— */
        .at-steps {
          list-style: none;
          padding: 0;
          margin: 34px 0 0;
          display: grid;
          gap: 2px;
        }
        .at-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 22px 0;
          border-top: 1px solid var(--border);
        }
        .at-step-num {
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 1px;
          padding-top: 3px;
          flex-shrink: 0;
        }
        .at-step-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 7px;
        }
        .at-step-text {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text-secondary);
          max-width: 58ch;
          margin: 0;
        }

        /* ——— Exemples ——— */
        .at-examples {
          list-style: none;
          padding: 0;
          margin: 30px 0 18px;
          display: grid;
          gap: 12px;
        }
        .at-example {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          padding: 15px 18px;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--bg-card);
        }
        .at-note {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 58ch;
          margin: 0;
        }

        /* ——— Pourquoi c'est gratuit ——— */
        .at-condition {
          margin-top: 30px;
          padding: 22px 24px;
          border-left: 2px solid var(--accent);
          background: var(--accent-subtle);
          border-radius: 0 10px 10px 0;
        }
        .at-condition-label {
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 10px;
        }
        .at-condition-text {
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text);
          max-width: 58ch;
          margin: 0;
        }

        /* ——— Formulaire ——— */
        .at-form-section {
          scroll-margin-top: 24px;
        }
        .at-form {
          margin-top: 32px;
          display: grid;
          gap: 18px;
          max-width: 640px;
        }
        .at-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .at-field {
          display: grid;
          gap: 8px;
        }
        .at-field-label {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .at-field input,
        .at-field select,
        .at-field textarea {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 300;
          color: var(--text);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 13px 14px;
          width: 100%;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .at-field textarea {
          resize: vertical;
          line-height: 1.6;
        }
        .at-field input::placeholder,
        .at-field textarea::placeholder {
          color: var(--text-muted);
        }
        .at-field input:focus,
        .at-field select:focus,
        .at-field textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }
        .at-submit {
          justify-self: start;
          margin-top: 4px;
          border: 0;
        }
        .at-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        .at-error {
          font-size: 14px;
          line-height: 1.6;
          color: var(--accent);
          margin: 0;
        }
        .at-error a {
          color: var(--accent);
        }
        .at-reassurance {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }
        .at-done {
          margin-top: 32px;
          padding: 30px 28px;
          border: 1px solid var(--border);
          border-left: 2px solid var(--accent);
          border-radius: 0 12px 12px 0;
          background: var(--bg-card);
          max-width: 560px;
        }
        .at-done-title {
          font-size: 28px;
          font-weight: 400;
          color: var(--text);
          margin: 0 0 10px;
        }
        .at-done-text {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ——— Pied de page ——— */
        .at-footer {
          margin-top: 72px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .at-footer-text,
        .at-footer-legal {
          font-size: 12.5px;
          font-weight: 300;
          color: var(--text-muted);
          margin: 0;
        }
        .at-footer-text a,
        .at-footer-legal {
          color: var(--text-secondary);
          text-decoration: none;
        }
        .at-footer-text a:hover,
        .at-footer-legal:hover {
          color: var(--accent);
        }

        @media (max-width: 820px) {
          .at-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .at-fact:nth-child(2n) {
            border-right: 0;
          }
          .at-fact:nth-child(-n + 2) {
            border-bottom: 1px solid var(--border);
          }
        }
        @media (max-width: 560px) {
          .at-hero {
            padding: 52px 0 44px;
          }
          .at-proof-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .at-h1 {
            max-width: none;
          }
          .at-facts {
            grid-template-columns: 1fr;
          }
          .at-fact {
            border-right: 0;
            border-bottom: 1px solid var(--border);
          }
          .at-fact:last-child {
            border-bottom: 0;
          }
          .at-row {
            grid-template-columns: 1fr;
          }
          .at-submit {
            justify-self: stretch;
          }
        }
      `}</style>
    </main>
  )
}
