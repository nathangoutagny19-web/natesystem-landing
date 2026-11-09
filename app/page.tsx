import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import ClientsBar from '@/components/home/ClientsBar'
import Constat from '@/components/home/Constat'
import BuildThree from '@/components/home/BuildThree'
import PourQui from '@/components/home/PourQui'
import WorkTiles from '@/components/home/WorkTiles'
import StatementBand from '@/components/home/StatementBand'
import Fondateur from '@/components/home/Fondateur'
import CtaFinal from '@/components/home/CtaFinal'
import Footer from '@/components/layout/Footer'

/**
 * ACCUEIL, REFONTE DU 9 NOVEMBRE 2026. Nathan : « mon site est un gros
 * bordel, aucun luxe, aucune cohérence, ça fait site tech ». Huit sections,
 * une idée chacune, beaucoup d'air, plus de grille ni de séparateurs.
 * Proposition : ~/Business/Commercial/6:10prospection/04-prompts-et-contexte/website-refonte-structure-2026-11-09.md
 *
 * Quittent l'accueil : l'avant/après (Transformation), les systèmes, les
 * quatre étapes et les secteurs (page Services), les différenciateurs et sa
 * vidéo, la bande de crédibilité, le comparatif et la FAQ (page Services),
 * « Demandez à l'IA ». Les composants restent dans le dépôt.
 */
export default function Home() {
  return (
    <main>
      <Nav />

      {/* 1, Hero : gardé, sous-titre raccourci */}
      <Hero />

      {/* 2, Les logos, en une bande fine */}
      <ClientsBar />

      {/* 3, Le constat */}
      <Constat />

      {/* 4, Ce qu'on construit, trois points */}
      <BuildThree />

      {/* 5, Pour qui, six tuiles */}
      <PourQui />

      {/* 6, Réalisations, trois tuiles */}
      <WorkTiles variant="home" />

      {/* 7, Ils en parlent : la bande noire, ses photos et les citations qui
          défilent, sans nom (version de Nathan du 8 novembre 2026) */}
      <StatementBand />

      {/* 8, Le fondateur, puis l'appel final et l'agenda */}
      <div style={{ paddingTop: 'clamp(112px, 14vw, 176px)' }}>
        <Fondateur />
      </div>
      <CtaFinal />

      <Footer />
      <MobileCta />
    </main>
  )
}
