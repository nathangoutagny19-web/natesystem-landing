'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import RevealWords from '@/components/ui/RevealWords'
import VslPlayer from '@/components/ui/VslPlayer'
import LiteYouTube from '@/components/ui/LiteYouTube'
import ClientsBar from '@/components/home/ClientsBar'

/**
 * ATELIER · « Créer ses propres outils pour sa classe, sans développeur »
 *
 * Porte d'entrée, pas offre. Trois heures gratuites et utiles offertes à
 * l'équipe pédagogique, qui mettent Nathan dans la maison et lui donnent une
 * raison de revenir parler d'organisation interne.
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
    titre: 'Trois heures',
    detail: 'Une demi-journée, en une fois. Pas un cycle de formation à caser dans l’année.',
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
    num: '1',
    titre: 'Heure 1 · Je construis devant eux',
    texte:
      'Écran partagé, de la page blanche à l’outil qui tourne. Mes tâtonnements et mes corrections compris : c’est ça qui fait penser « je peux le faire ». Cinq minutes au début sur les données des élèves, et une règle qu’on ne lâche pas de la journée, jamais un nom, on travaille sur initiales.',
  },
  {
    num: '2',
    titre: 'Heure 2 · Chacun construit le sien',
    texte:
      'Sur sa matière, sur sa vraie corvée. J’arrive avec trois sujets de secours pour ceux qui bloquent devant la page blanche, parce qu’il y en a toujours deux ou trois.',
  },
  {
    num: '3',
    titre: 'Heure 3 · On s’en sert, et on répare',
    texte:
      'Ils testent sur un cas réel, avec leurs vraies copies. Quelque chose va rater, et c’est le moment le plus utile des trois heures : c’est là qu’on apprend à corriger au lieu d’abandonner.',
  },
]

const EXEMPLES = [
  'Un outil d’appréciations de bulletins qui part de vos observations et rend un texte à relire, pas à écrire.',
  'Un générateur d’exercices sur trois niveaux, tiré d’un seul chapitre.',
  'Un QCM fabriqué à partir d’un cours existant, corrigé d’avance.',
  'Une grille de correction qui calcule toute seule et qui se réutilise d’une année sur l’autre.',
]

/* LES PRÉREQUIS. Ils servent deux fois : ici, pour qu'un directeur mesure la
   faisabilité avant de demander, et dans le formulaire, où il coche qu'il peut
   les réunir. La condition « un membre de la direction dans la salle » est le
   premier de la liste plutôt qu'un encart à part : c'est un prérequis, pas un
   discours, et il se vérifie comme les autres. */
const PREREQUIS = [
  {
    titre: 'Un membre de la direction dans la salle',
    detail:
      'La seule condition non négociable. La deuxième moitié de mon métier concerne l’organisation, et ça ne se raconte pas par personne interposée.',
    cle: true,
  },
  {
    titre: 'Un ordinateur portable par professeur',
    detail: 'Le sien ou celui de l’établissement, peu importe. Une tablette ne suffit pas.',
  },
  {
    titre: 'Du wifi qui tient vingt personnes en même temps',
    detail:
      'Le point de blocage le plus fréquent, et le seul que je ne peux pas rattraper sur place. À vérifier avant, pas le jour même.',
  },
  {
    titre: 'Un écran ou un vidéoprojecteur',
    detail:
      'Toute la première heure consiste à me regarder construire. Si la salle ne voit pas mon écran, il n’y a pas d’atelier.',
  },
  {
    titre: 'Trois heures d’affilée, dix à vingt personnes',
    detail:
      'Pas deux fois une heure et demie : la troisième heure ne vaut que parce qu’elle suit les deux autres.',
  },
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
            Atelier offert · Trois heures · Chez vous ou en visio
          </p>
          <h1 className="font-serif italic at-h1">
            <RevealWords text="Vos professeurs ont tous un tableur qu’ils ont bricolé seuls." />
          </h1>
          <p className="font-sans at-hero-sub">
            En trois heures, ils construisent l’outil qui le remplace, et ils le testent sur
            leurs vraies copies avant de partir. Pour leur classe, à leur main, sans écrire une
            ligne de code. C’est gratuit, et ça ne vous engage à rien.
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
          <p className="font-mono at-label">Les trois heures</p>
          <h2 className="font-serif italic at-h2">Ce qu’il se passe, concrètement.</h2>
          <p className="font-sans at-lead">
            L’atelier s’appelle « Créer ses propres outils pour sa classe, sans développeur ».
            Trois heures, trois temps. Rien à préparer, rien à installer, rien à acheter.
          </p>
        </FadeUp>

        <Deroule />
      </section>

      {/* ——— LES EXEMPLES ——— */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">De quoi on parle</p>
          <h2 className="font-serif italic at-h2">Le genre d’outil qui sort de trois heures.</h2>
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
            Ce sont des exemples, pas un programme. Les trois heures partent de ce que vos
            professeurs apportent ce jour-là.
          </p>
        </FadeUp>
      </section>

      {/* ——— QUI VIENT ——— */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">Qui vient</p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <div className="at-who">
            <figure className="at-who-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nathan.png"
                alt="Nathan Goutagny, fondateur de NateSystem"
                loading="lazy"
                width={1104}
                height={974}
              />
            </figure>
            <div>
              <h2 className="font-serif italic at-h2">Nathan Goutagny.</h2>
              <div className="at-prose">
                <p>
                  Je construis des logiciels de gestion sur mesure pour des établissements :
                  plannings, comptage des heures, dossiers, suivi des élèves. Je les vends et je
                  les code moi-même, il n’y a ni commercial ni junior derrière. La personne qui
                  anime les trois heures est celle qui écrirait le logiciel.
                </p>
                <p>
                  Quand un établissement me confie un projet, le code source lui appartient à
                  cent pour cent et les données restent hébergées en Europe. Pour un
                  établissement qui tient des dossiers de mineurs, ce n’est pas un détail de bas
                  de page.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ——— LA GARANTIE ———
          Texte de Nathan, repris quasi mot pour mot. Seule la personne change :
          il l'avait écrit en s'adressant aux professeurs, or le lecteur de
          cette page est le chef d'établissement, qui ne construit pas. */}
      <section className="at-section">
        <FadeUp>
          <p className="font-mono at-label">La garantie</p>
          <h2 className="font-serif italic at-h2">Personne ne repart les mains vides.</h2>
          <div className="at-prose">
            <p>
              Chaque professeur repart avec son premier outil qui marche, à tester dès le
              lendemain matin. Et surtout avec la technique pour en refaire d’autres sans moi.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="at-highlight">
            <p className="font-sans at-highlight-text">
              Si quelqu’un repart les mains vides, je reviens le faire avec lui.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ——— LES PRÉREQUIS ———
          Juste avant le formulaire : un directeur mesure la faisabilité, puis
          il demande. La case à cocher du formulaire renvoie à cette ancre. */}
      <section className="at-section" id="prerequis">
        <FadeUp>
          <p className="font-mono at-label">Avant de dire oui</p>
          <h2 className="font-serif italic at-h2">Ce qu’il vous faut de votre côté.</h2>
          <p className="font-sans at-lead">
            Rien d’exotique, mais tout compte. Si un seul manque, les trois heures tombent à
            plat, et c’est votre équipe qui aura perdu son après-midi.
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <ul className="at-prereqs">
            {PREREQUIS.map((r) => (
              <li key={r.titre} className={`at-prereq${r.cle ? ' at-prereq--cle' : ''}`}>
                <span className="at-prereq-mark" aria-hidden="true" />
                <div>
                  <p className="font-sans at-prereq-title">{r.titre}</p>
                  <p className="font-sans at-prereq-detail">{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
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

              {/* Requise : elle engage le directeur sur le matériel et sur la
                  présence de la direction, et elle part dans le CRM. C'est
                  aussi ce qui évite le déplacement pour rien. */}
              <label className="at-check">
                <input type="checkbox" name="prerequis" value="oui" required />
                <span className="font-sans at-check-text">
                  Je confirme pouvoir réunir <a href="#prerequis">les prérequis listés plus haut</a>{' '}
                  le jour de l’atelier, direction présente comprise.
                </span>
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

        /* ——— Encart accentué (la garantie) ——— */
        .at-highlight {
          margin-top: 26px;
          padding: 22px 26px;
          border-left: 2px solid var(--accent);
          background: var(--accent-subtle);
          border-radius: 0 10px 10px 0;
        }
        .at-highlight-text {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--text);
          max-width: 52ch;
          margin: 0;
        }

        /* ——— Qui vient ——— */
        .at-who {
          display: grid;
          grid-template-columns: 148px minmax(0, 1fr);
          gap: 30px;
          align-items: start;
        }
        .at-who-photo {
          margin: 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          aspect-ratio: 1 / 1;
        }
        .at-who-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ——— Prérequis ——— */
        .at-prereqs {
          list-style: none;
          padding: 0;
          margin: 30px 0 0;
          display: grid;
          gap: 2px;
        }
        .at-prereq {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-top: 1px solid var(--border);
        }
        .at-prereq:last-child {
          border-bottom: 1px solid var(--border);
        }
        .at-prereq-mark {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 1px solid var(--text-muted);
          margin-top: 7px;
          flex-shrink: 0;
        }
        .at-prereq--cle .at-prereq-mark {
          background: var(--accent);
          border-color: var(--accent);
        }
        .at-prereq-title {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 5px;
        }
        .at-prereq--cle .at-prereq-title {
          color: var(--accent);
        }
        .at-prereq-detail {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 60ch;
          margin: 0;
        }

        /* ——— Case de confirmation ——— */
        .at-check {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          cursor: pointer;
          margin-top: 2px;
        }
        .at-check input {
          width: 17px;
          height: 17px;
          margin-top: 2px;
          flex-shrink: 0;
          accent-color: var(--accent);
          cursor: pointer;
        }
        .at-check-text {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.55;
          color: var(--text-secondary);
        }
        .at-check-text a {
          color: var(--accent);
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
          .at-who {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .at-who-photo {
            width: 124px;
          }
          .at-submit {
            justify-self: stretch;
          }
        }
      `}</style>
    </main>
  )
}

/**
 * LE DÉROULÉ, ET SON RAIL QUI SE REMPLIT.
 *
 * Une seule animation, mais elle dit quelque chose : le trait se remplit au
 * rythme du défilement et chaque heure s'allume quand on l'atteint. La page
 * vend trois heures en trois temps, le rail le montre au lieu de l'écrire.
 *
 * `useSpring` lisse la valeur de défilement, sinon le trait colle au pixel
 * près à la molette et tressaute. L'étalement va de « le bloc entre par le bas
 * de l'écran » à « il est aux trois quarts sorti », pour que le remplissage se
 * termine pendant la lecture de la troisième heure et pas après.
 */
function Deroule() {
  const rail = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: rail,
    offset: ['start 0.78', 'end 0.55'],
  })
  const remplissage = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <div className="at-steps-wrap" ref={rail}>
      <div className="at-rail" aria-hidden="true">
        <motion.div className="at-rail-fill" style={{ scaleY: remplissage }} />
      </div>

      <ol className="at-steps">
        {DEROULE.map((etape) => (
          <Etape key={etape.num} etape={etape} />
        ))}
      </ol>

      <style jsx>{`
        .at-steps-wrap {
          position: relative;
          margin-top: 36px;
          padding-left: 58px;
        }
        .at-rail {
          position: absolute;
          left: 14px;
          top: 6px;
          bottom: 10px;
          width: 1px;
          background: var(--border);
        }
        /* :global est OBLIGATOIRE ici. motion.div est un composant, pas un
           élément du DOM : styled-jsx ne peut pas lui coller sa classe de
           portée, donc une règle « .at-rail-fill » toute seule ne s'applique
           jamais et le trait se remplit sans être visible. On passe par le
           parent .at-rail, lui bien réel, pour garder la règle confinée. */
        .at-rail :global(.at-rail-fill) {
          position: absolute;
          inset: 0;
          background: var(--accent);
          transform-origin: top center;
        }
        .at-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 34px;
        }
        @media (max-width: 560px) {
          .at-steps-wrap {
            padding-left: 44px;
          }
          .at-rail {
            left: 11px;
          }
        }
      `}</style>
    </div>
  )
}

/** Une heure du déroulé : elle s'allume quand elle entre réellement dans l'écran. */
function Etape({ etape }: { etape: (typeof DEROULE)[number] }) {
  const ref = useRef<HTMLLIElement>(null)
  const vue = useInView(ref, { once: true, margin: '-45% 0px -35% 0px' })

  return (
    <li ref={ref} className={`at-step${vue ? ' is-on' : ''}`}>
      <span className="font-mono at-step-num" aria-hidden="true">
        {etape.num}
      </span>
      <h3 className="font-sans at-step-title">{etape.titre}</h3>
      <p className="font-sans at-step-text">{etape.texte}</p>

      <style jsx>{`
        .at-step {
          position: relative;
        }
        /* La pastille porte le fond de la page : le rail passe derrière elle
           sans la traverser, et le remplissage s'arrête visuellement dessus. */
        .at-step-num {
          position: absolute;
          left: -58px;
          top: -2px;
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg);
          font-size: 11px;
          color: var(--text-muted);
          transition:
            color 0.5s ease,
            background 0.5s ease,
            border-color 0.5s ease,
            transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .at-step.is-on .at-step-num {
          color: #fff;
          background: var(--accent);
          border-color: var(--accent);
          transform: scale(1.1);
        }
        .at-step-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-muted);
          margin: 0 0 7px;
          transition: color 0.5s ease;
        }
        .at-step.is-on .at-step-title {
          color: var(--text);
        }
        .at-step-text {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text-secondary);
          max-width: 58ch;
          margin: 0;
          opacity: 0.55;
          transition: opacity 0.6s ease;
        }
        .at-step.is-on .at-step-text {
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .at-step-title,
          .at-step-text,
          .at-step-num {
            transition: none;
          }
          .at-step-title {
            color: var(--text);
          }
          .at-step-text {
            opacity: 1;
          }
        }
        @media (max-width: 560px) {
          .at-step-num {
            left: -44px;
            width: 25px;
            height: 25px;
            font-size: 10px;
          }
        }
      `}</style>
    </li>
  )
}
