'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { Sparkles } from 'lucide-react'
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
 * ⚠︎ « JE », PAS « NOUS ». Le brouillon de Nathan disait « nous construisons ».
 * La page dit deux lignes plus bas « ni commercial ni junior derrière », et
 * l'opérateur unique est un des trois différenciateurs qui survivent à tout
 * (~/.claude/CLAUDE.md). Un « nous » ici se contredirait tout seul.
 *
 * ⚠︎ PAS DE « CES DERNIERS MOIS ». Le brouillon le portait ; le chantier des
 * Chartreux et celui de l'IUT ne tiennent pas dans cette fenêtre, et la date
 * n'est sourcée nulle part. Le chiffre reste, la fenêtre de temps saute.
 *
 * ⚠︎ CATHERINE F. Elle enseigne le numérique à l'IUT de Saint-Étienne, et ce
 * depuis longtemps (Nathan, 01/10/2026). La légende dit « dans le supérieur »
 * et PAS le nom de l'établissement : nommer l'employeur de quelqu'un, qui plus
 * est un établissement public, sur une page commerciale, ça se demande à
 * l'intéressée. Et son témoignage vidéo porte sur son autre organisation, pas
 * sur l'enseignement : citer les deux rôles côte à côte est honnête, laisser
 * croire que l'IUT cautionne ne l'est pas. Voir brain/accounts/chromosome.md.
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
    titre: 'Dix à quinze personnes',
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

/* LES PRÉREQUIS, EN TROIS BLOCS.
 *
 * Sur une landing, lever un frein vaut autant qu'énoncer une condition : le
 * troisième bloc ne demande rien, il désamorce. Et les deux prérequis marqués
 * `cle` sont ceux qui tuent l'atelier quand ils manquent, pas ceux qui le
 * gênent. Celui du participant est le plus souvent oublié : un professeur qui
 * arrive sans savoir ce qu'il veut automatiser cherche une idée pendant la
 * deuxième heure au lieu de construire, repart les mains vides, et déclenche
 * la garantie. D'où sa place ici, dès l'inscription.
 */
const PREREQUIS = [
  {
    groupe: 'Ce que l’établissement fournit',
    items: [
      {
        titre: 'Une salle et trois heures d’affilée',
        detail:
          'Pas fractionnées en deux fois une heure et demie : la troisième heure ne vaut que parce qu’elle suit les deux autres.',
      },
      {
        titre: 'Un ordinateur par participant',
        detail: 'Le sien ou celui de l’établissement, peu importe. Une tablette ne suffit pas.',
      },
      {
        titre: 'Une connexion qui tient',
        detail:
          'Quinze personnes dessus en même temps. C’est le point de blocage le plus fréquent, et le seul que je ne peux pas rattraper sur place.',
      },
      {
        titre: 'Un écran ou un vidéoprojecteur',
        detail:
          'Toute la première heure consiste à me regarder construire. Si la salle ne voit pas mon écran, il n’y a pas d’atelier.',
      },
      {
        titre: 'Dix à quinze personnes, pas plus',
        detail:
          'Au-delà, je ne peux plus passer aider chacun pendant la deuxième heure, et c’est elle qui fait la différence.',
      },
      {
        titre: 'Un membre de la direction dans la salle',
        detail:
          'La deuxième moitié de mon métier concerne l’organisation, et ça ne se raconte pas par personne interposée.',
        cle: true,
      },
    ],
  },
  {
    groupe: 'Ce que chaque participant apporte',
    items: [
      {
        titre: 'Une tâche précise qui lui prend du temps chaque semaine',
        detail:
          'Le prérequis le plus important, et celui que personne ne prépare. Un professeur qui arrive sans savoir ce qu’il veut automatiser passe la deuxième heure à chercher une idée au lieu de construire. Les quatre exemples plus haut suffisent à amorcer.',
        cle: true,
      },
      {
        titre: 'Ses propres documents',
        detail:
          'Une grille de notation, un sujet de contrôle, une liste de compétences. Ce qu’il utilise vraiment, pas un exemple refait pour l’occasion.',
      },
    ],
  },
  {
    groupe: 'Ce qui n’est pas nécessaire',
    items: [
      {
        titre: 'Aucune compétence technique',
        detail: 'Personne n’écrit une ligne de code, à aucun moment des trois heures.',
      },
      {
        titre: 'Aucune connaissance préalable des outils d’IA',
        detail: 'Les débutants complets sont souvent ceux qui en tirent le plus.',
      },
      {
        titre: 'Rien à payer pour participer',
        detail:
          'Pour aller plus loin ensuite, il existe des outils payants : je dis lesquels pendant la séance, et ce que j’y gagne quand c’est le cas.',
      },
    ],
  },
]

const FONCTIONS = [
  'Chef d’établissement',
  'Direction adjointe',
  'Responsable administratif',
  'Professeur',
  'Autre',
]

const TAILLES = ['Moins de 10', '10 à 15', 'Plus de 15', 'Je ne sais pas encore']

const LIEUX = ['Dans notre établissement', 'En visio', 'Peu importe']

const RESEAU = [
  'Oui, rien n’est bloqué',
  'Non, c’est filtré',
  'Je ne sais pas, je vérifie',
]

/* Même courbe que le hero du site : les deux pages doivent bouger pareil. */
const EASE = [0.22, 1, 0.36, 1] as const

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
    <main>
      {/* En-tête réduite au strict minimum : la marque, et une seule action.
          Pas la nav du site : douze portes de sortie sur une page qui n'a
          qu'une destination, c'est douze façons de la quitter. */}
      <header className="at-header">
        <div className="at-brand">
          <span className="font-serif italic at-brand-n">N</span>
          <span className="at-brand-dot" aria-hidden="true" />
          <span className="font-sans at-brand-name">NateSystem</span>
        </div>
        <a href="#demander" className="nav-cta-btn at-header-cta">
          Demander l’atelier
        </a>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="at-hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <span className="section-label at-hero-label">
            Atelier offert · Trois heures · Chez vous ou en visio
          </span>
        </motion.div>

        <h1 className="at-h1">
          <RevealWords text="Vos professeurs ont tous un tableur" delay={0.15} />{' '}
          <span className="at-h1-accent">
            <RevealWords text="qu’ils ont bricolé seuls." delay={0.45} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
          className="at-pill"
        >
          <Sparkles size={13} strokeWidth={2} className="at-pill-icon" />
          <span className="font-sans at-pill-text">
            Je prends {ETABLISSEMENTS_PAR_TRIMESTRE} établissements ce trimestre.
          </span>
        </motion.div>

        {VSL && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="at-vsl"
          >
            <VslPlayer
              src={VSL.src}
              poster={VSL.poster}
              duration={VSL.duree}
              label="Voir ce que fait l’atelier"
              title="L’atelier NateSystem, en quelques minutes"
            />
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15, ease: EASE }}
          className="font-sans at-hero-sub"
        >
          En trois heures, ils construisent l’outil qui le remplace, et ils le testent sur leurs
          vraies copies avant de partir. Pour leur classe, à leur main, sans écrire une ligne de
          code. C’est gratuit, et ça ne vous engage à rien.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
          className="at-hero-actions"
        >
          <a href="#demander" className="btn-primary">
            <span className="btn-primary-dot" />
            Demander l’atelier pour mon établissement
          </a>
          <a href="#les-trois-heures" className="btn-ghost">
            Voir le déroulé
          </a>
        </motion.div>
      </section>

      {/* ═══ LES FAITS ═══ */}
      <section className="at-band">
        <div className="at-wrap">
          <ul className="at-facts">
            {FAITS.map((f, i) => (
              <FadeUp key={f.titre} delay={0.05 * i}>
                <li className="card at-fact">
                  <p className="font-sans at-fact-title">{f.titre}</p>
                  <p className="font-sans at-fact-detail">{f.detail}</p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LA PREUVE ═══
          Elle arrive avant le déroulé : un directeur juge d'abord à qui il a
          affaire, le contenu de l'heure ne l'intéresse qu'ensuite.

          ⚠︎ Les logos viennent de ClientsBar, le composant de la home, et pas
          d'une liste recopiée ici : ajouter une référence doit rester un
          changement à un seul endroit. */}
      <section className="at-section">
        <div className="at-wrap">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">La preuve</span>
              <h2 className="section-title at-h2">{PARC} tournent sur nos outils.</h2>
              <p className="font-sans at-lead">
                Des écoles, un IUT, et des organisations d’autres secteurs. Les mêmes contraintes
                partout : beaucoup de monde, peu de temps, et un logiciel du commerce qui ne colle
                jamais tout à fait.
              </p>
            </header>
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
                  Catherine F. enseigne le numérique dans le supérieur et dirige une organisation
                  que nous équipons. Elle raconte ce que deux plateformes sur-mesure ont changé
                  chez eux.
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LE DÉROULÉ ═══ */}
      <section className="at-section" id="les-trois-heures">
        <div className="at-wrap at-wrap--narrow">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">Les trois heures</span>
              <h2 className="section-title at-h2">Ce qu’il se passe, concrètement.</h2>
              <p className="font-sans at-lead">
                L’atelier s’appelle « Créer ses propres outils pour sa classe, sans développeur ».
                Trois heures, trois temps. Rien à installer. Une seule chose à préparer : chaque
                participant arrive avec une corvée précise à régler.
              </p>
            </header>
          </FadeUp>

          <Deroule />
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LES EXEMPLES ═══ */}
      <section className="at-section">
        <div className="at-wrap">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">De quoi on parle</span>
              <h2 className="section-title at-h2">Le genre d’outil qui sort de trois heures.</h2>
              <p className="font-sans at-lead">
                « Créer son outil » ne veut pas dire grand-chose tant qu’on n’a pas vu à quoi ça
                ressemble.
              </p>
            </header>
          </FadeUp>

          <ul className="at-examples">
            {EXEMPLES.map((ex, i) => (
              <FadeUp key={ex} delay={0.05 * i}>
                <li className="card at-example">
                  <span className="font-mono at-example-num">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-sans at-example-text">{ex}</p>
                </li>
              </FadeUp>
            ))}
          </ul>

          <FadeUp delay={0.24}>
            <p className="font-sans at-note">
              Ce sont des exemples, pas un programme. Les trois heures partent de ce que vos
              professeurs apportent ce jour-là.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ QUI VIENT ═══ */}
      <section className="at-section">
        <div className="at-wrap at-wrap--narrow">
          <FadeUp>
            <span className="section-label at-who-label">Qui vient</span>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="card at-who">
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
              <div className="at-who-body">
                <h2 className="font-serif italic at-who-name">Nathan Goutagny.</h2>
                <div className="at-prose">
                  <p>
                    Je dirige NateSystem. Je construis des logiciels de gestion sur mesure pour des
                    établissements, et aussi des outils pédagogiques : plannings, comptage des
                    heures, dossiers, suivi des élèves. Plus de dix établissements tournent dessus,
                    dont les Chartreux et l’IUT de Saint-Étienne pour citer les plus connus.
                  </p>
                  <p>
                    Ce que ça leur apporte : des heures rendues aux équipes, des tâches répétitives
                    qui disparaissent, des données enfin claires, une communication interne qui ne
                    dépend plus de qui sait, et au bout de la chaîne des élèves mieux suivis. Les
                    Chartreux rapportent quarante heures récupérées par mois.
                  </p>
                  <p>
                    Je les vends et je les code moi-même, il n’y a ni commercial ni junior
                    derrière. Et je passe beaucoup de temps à former, parce qu’un logiciel que
                    personne n’utilise vraiment ne sert à rien : je forme jusqu’à l’autonomie.
                  </p>
                  <p>
                    C’est là que j’ai vu la même chose revenir, rendez-vous après rendez-vous. Des
                    professeurs et des directeurs qui voulaient se construire leurs propres petits
                    outils, qui essayaient, et qui s’emmêlaient les pinceaux. Cet atelier vient de
                    là.
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
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LA GARANTIE ═══
          Texte de Nathan, repris quasi mot pour mot. Seule la personne change :
          il l'avait écrit en s'adressant aux professeurs, or le lecteur de
          cette page est le chef d'établissement, qui ne construit pas. */}
      <section className="at-section">
        <div className="at-wrap at-wrap--narrow">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">La garantie</span>
              <h2 className="section-title at-h2">Personne ne repart les mains vides.</h2>
              <p className="font-sans at-lead">
                Chaque professeur repart avec son premier outil qui marche, à tester dès le
                lendemain matin. Et surtout avec la technique pour en refaire d’autres sans moi.
              </p>
            </header>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="at-pledge">
              <p className="font-serif italic at-pledge-text">
                Si quelqu’un repart les mains vides, je reviens le faire avec lui.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LES PRÉREQUIS ═══
          Juste avant le formulaire : un directeur mesure la faisabilité, puis
          il demande. La case à cocher du formulaire renvoie à cette ancre. */}
      <section className="at-section" id="prerequis">
        <div className="at-wrap">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">Avant de dire oui</span>
              <h2 className="section-title at-h2">Ce qu’il vous faut de votre côté.</h2>
              <p className="font-sans at-lead">
                Rien d’exotique, mais tout compte. Les deux lignes en rouge sont celles qui font
                rater un atelier quand elles manquent, pas celles qui le gênent.
              </p>
            </header>
          </FadeUp>

          <div className="at-prereq-cols">
            {PREREQUIS.map((bloc, b) => (
              <FadeUp key={bloc.groupe} delay={0.06 * b}>
                <div className="card at-prereq-col">
                  <h3 className="font-mono at-prereq-group-title">{bloc.groupe}</h3>
                  <ul className="at-prereqs">
                    {bloc.items.map((r) => (
                      <li
                        key={r.titre}
                        className={`at-prereq${'cle' in r && r.cle ? ' at-prereq--cle' : ''}`}
                      >
                        <span className="at-prereq-mark" aria-hidden="true" />
                        <div>
                          <p className="font-sans at-prereq-title">{r.titre}</p>
                          <p className="font-sans at-prereq-detail">{r.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LE FORMULAIRE, seule action de la page ═══ */}
      <section className="at-section at-form-section" id="demander">
        <div className="at-wrap at-wrap--narrow">
          <FadeUp>
            <header className="at-head">
              <span className="section-label">La demande</span>
              <h2 className="section-title at-h2">
                Demander l’atelier pour votre établissement.
              </h2>
              <p className="font-sans at-lead">
                Je reviens vers vous sous 48 heures avec deux ou trois créneaux. Je prends{' '}
                {ETABLISSEMENTS_PAR_TRIMESTRE} établissements ce trimestre.
              </p>
            </header>
          </FadeUp>

          <FadeUp delay={0.08}>
            {statut === 'ok' ? (
              <div className="card at-done">
                <p className="font-serif italic at-done-title">C’est parti.</p>
                <p className="font-sans at-done-text">
                  Je vous réponds sous 48 heures, depuis nathan@natesystem.com. Si vous ne voyez
                  rien passer, regardez vos indésirables.
                </p>
              </div>
            ) : (
              <form className="card at-form" onSubmit={envoyer}>
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

                {/* LE PRÉREQUIS INVISIBLE. Beaucoup d'établissements filtrent
                    les sites d'IA sur le réseau pédagogique. Découvert le jour J
                    devant quinze personnes, l'atelier est mort et la garantie
                    avec. « Je ne sais pas » est la réponse honnête et attendue :
                    elle dit simplement qu'il faut vérifier avant de caler la
                    date. */}
                <label className="at-field">
                  <span className="font-mono at-field-label">Accès réseau</span>
                  <span className="font-sans at-field-help">
                    Depuis les postes de l’établissement, un site comme ChatGPT est-il accessible ?
                  </span>
                  <select name="reseau" defaultValue={RESEAU[2]}>
                    {RESEAU.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>

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
                  <span className="btn-primary-dot" />
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
        </div>
      </section>

      {/* Pied de page réduit : la mention légale est une obligation, pas une
          invitation à visiter le site. */}
      <footer className="at-footer">
        <div className="at-wrap at-footer-inner">
          <p className="font-sans at-footer-text">
            NateSystem · Nathan Goutagny ·{' '}
            <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
          </p>
          <a href="/mentions-legales" className="font-sans at-footer-legal">
            Mentions légales
          </a>
        </div>
      </footer>

      <style jsx>{`
        /* ——— Conteneurs, au gabarit du site ——— */
        .at-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .at-wrap--narrow {
          max-width: 820px;
        }
        .at-section {
          padding: 110px 0;
        }
        .at-band {
          padding: 0 0 90px;
        }

        /* ——— En-tête ——— */
        .at-header {
          max-width: 1100px;
          margin: 0 auto;
          padding: 26px 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
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

        /* ——— Hero ——— */
        .at-hero {
          min-height: 86vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 90px 24px 70px;
        }
        .at-hero-label {
          color: var(--text-muted);
        }
        .at-h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(38px, 5.2vw, 64px);
          font-weight: 400;
          line-height: 1.08;
          color: var(--text);
          max-width: 940px;
          margin: 0 auto 26px;
        }
        .at-h1-accent {
          color: var(--accent);
        }
        /* ⚠︎ :global EST OBLIGATOIRE SUR TOUT CE BLOC. motion.div, motion.p et
           Sparkles sont des COMPOSANTS, pas des éléments du DOM : styled-jsx ne
           peut pas leur coller sa classe de portée, donc une règle « .at-pill »
           toute seule ne s'applique jamais. C'est ce qui avait vidé le hero de
           ses styles, pastille, sous-titre et boutons compris. On passe par
           .at-hero, lui bien réel, pour que les règles restent confinées. */
        .at-hero :global(.at-pill) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--accent-subtle);
          margin-bottom: 34px;
        }
        .at-hero :global(.at-pill-icon) {
          color: var(--accent);
          flex-shrink: 0;
        }
        .at-pill-text {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
        }
        .at-hero :global(.at-vsl) {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 38px;
        }
        .at-hero :global(.at-hero-sub) {
          font-size: clamp(15px, 3vw, 18px);
          font-weight: 300;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 640px;
          margin: 0 auto 38px;
        }
        .at-hero :global(.at-hero-actions) {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        /* ——— En-têtes de section ——— */
        .at-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 52px;
        }
        .at-h2 {
          font-size: clamp(26px, 3vw, 38px);
          color: var(--text);
          margin: 0 auto 18px;
          max-width: 20ch;
        }
        .at-lead {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 620px;
          margin: 0 auto;
        }

        /* ——— Les faits ——— */
        .at-facts {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .at-fact {
          padding: 26px 24px;
          height: 100%;
        }
        .at-fact-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 9px;
        }
        .at-fact-detail {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ——— Preuve ——— */
        /* ClientsBar porte son propre rembourrage de section, pensé pour la
           home : on le resserre ici pour qu'il respire comme le reste. */
        .at-logos :global(section) {
          padding: 8px 0 !important;
        }
        .at-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          margin-top: 36px;
          align-items: start;
        }
        .at-proof-item {
          margin: 0;
        }
        .at-proof-media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          box-shadow: 0 18px 48px -28px rgba(15, 23, 42, 0.32);
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
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 14px 0 0;
        }

        /* ——— Exemples ——— */
        .at-examples {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .at-example {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 26px 24px;
          height: 100%;
        }
        .at-example-num {
          font-size: 12px;
          letter-spacing: 1px;
          color: var(--accent);
          flex-shrink: 0;
          padding-top: 3px;
        }
        .at-example-text {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.62;
          color: var(--text-secondary);
          margin: 0;
        }
        .at-note {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 620px;
          margin: 26px auto 0;
          text-align: center;
        }

        /* ——— Qui vient ——— */
        .at-who-label {
          text-align: center;
        }
        .at-who {
          display: grid;
          grid-template-columns: 168px minmax(0, 1fr);
          gap: 34px;
          align-items: start;
          padding: 36px;
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
        .at-who-name {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          color: var(--text);
          margin: 0 0 16px;
        }
        .at-prose p {
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--text-secondary);
          margin: 0 0 15px;
        }
        .at-prose p:last-child {
          margin-bottom: 0;
        }

        /* ——— Garantie ——— */
        .at-pledge {
          text-align: center;
          padding: 40px 32px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--accent-subtle);
        }
        .at-pledge-text {
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 400;
          line-height: 1.4;
          color: var(--text);
          max-width: 24ch;
          margin: 0 auto;
        }

        /* ——— Prérequis ——— */
        .at-prereq-cols {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: start;
        }
        .at-prereq-col {
          padding: 28px 26px;
          height: 100%;
        }
        .at-prereq-group-title {
          font-size: 10.5px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
          margin: 0 0 6px;
        }
        .at-prereqs {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .at-prereq {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid var(--border);
        }
        .at-prereq:last-child {
          border-bottom: 0;
          padding-bottom: 0;
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
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 5px;
        }
        .at-prereq--cle .at-prereq-title {
          color: var(--accent);
        }
        .at-prereq-detail {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ——— Formulaire ——— */
        .at-form-section {
          scroll-margin-top: 20px;
        }
        .at-form {
          display: grid;
          gap: 20px;
          padding: 36px;
        }
        .at-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
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
        .at-field-help {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-top: -2px;
        }
        .at-field input,
        .at-field select,
        .at-field textarea {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 300;
          color: var(--text);
          background: var(--bg);
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
        .at-check {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          cursor: pointer;
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
        .at-submit {
          justify-self: start;
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
          padding: 40px 36px;
          border-left: 2px solid var(--accent);
          text-align: center;
        }
        .at-done-title {
          font-size: 32px;
          font-weight: 400;
          color: var(--text);
          margin: 0 0 12px;
        }
        .at-done-text {
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text-secondary);
          max-width: 46ch;
          margin: 0 auto;
        }

        /* ——— Pied de page ——— */
        .at-footer {
          border-top: 1px solid var(--border);
          padding: 28px 0 44px;
        }
        .at-footer-inner {
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

        /* ——— Adaptations ——— */
        @media (max-width: 1000px) {
          .at-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .at-prereq-cols {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 820px) {
          .at-section {
            padding: 80px 0;
          }
          .at-proof-grid,
          .at-examples {
            grid-template-columns: 1fr;
          }
          .at-who {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 28px;
          }
          .at-who-photo {
            width: 132px;
          }
        }
        @media (max-width: 560px) {
          .at-hero {
            min-height: 0;
            padding: 56px 24px 56px;
          }
          .at-facts {
            grid-template-columns: 1fr;
          }
          .at-row {
            grid-template-columns: 1fr;
          }
          .at-form,
          .at-done {
            padding: 26px 20px;
          }
          .at-submit {
            justify-self: stretch;
          }
          .at-hero :global(.at-hero-actions .btn-primary),
          .at-hero :global(.at-hero-actions .btn-ghost) {
            width: 100%;
            justify-content: center;
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
