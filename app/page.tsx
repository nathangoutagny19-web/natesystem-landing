import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import HeroNight from '@/components/home/HeroNight'
import ClientsBar from '@/components/home/ClientsBar'
import Constat from '@/components/home/Constat'
import StatementBand from '@/components/home/StatementBand'
import { SectorsSplit, ServicesSplit } from '@/components/home/HomeSplits'
import WorkTiles from '@/components/home/WorkTiles'
import BandQuotes from '@/components/home/Testimonials'
import Fondateur from '@/components/home/Fondateur'
import FaqNight from '@/components/home/FaqNight'
import { AuditBand } from '@/components/home/AuditFinal'
import CtaFinal from '@/components/home/CtaFinal'
import Footer from '@/components/layout/Footer'

/**
 * ACCUEIL, REFONTE DU 14 NOVEMBRE 2026. Nathan : « refais tout, inspire-toi
 * de Gourmet (structure, cohérence, design), avec la charte NateSystem, et
 * uniques, pas un plagiat ».
 *
 * Le rythme : sections nuit et claires en alternance, grande serif droite
 * avec un passage en italique rouge, deux colonnes séparées par des filets.
 * Ce qui est à nous : la carte depuis Tivat et la vidéo dans le hero, les
 * dessins au trait des secteurs, les vraies photos, les citations qui
 * défilent, la bande rouge de l'audit et l'agenda.
 *
 * Quittent l'accueil : les trois points « Ce qu'on construit » (BuildThree)
 * et les tuiles « Pour qui » (PourQui), remplacés par les deux sections en
 * deux colonnes. Les composants restent dans le dépôt.
 */
export default function Home() {
  return (
    <main>
      <Nav tone="dark" />

      {/* 1, nuit : le titre, la vidéo, la carte depuis Tivat */}
      <HeroNight />

      {/* 2, les logos des clients */}
      <ClientsBar />

      {/* 3, le constat */}
      <Constat />

      {/* 4, nuit : la phrase de positionnement */}
      <StatementBand />

      {/* 5, les quatre secteurs, photo des Chartreux et ses 40 h */}
      <SectorsSplit />

      {/* 6, les réalisations, puis les avis qui défilent */}
      <WorkTiles variant="home" />
      <section id="avis" style={{ padding: '0 0 clamp(96px, 12vw, 150px)' }}>
        <BandQuotes tone="light" />
      </section>

      {/* 7, nuit : les quatre services, photo de Budapest */}
      <ServicesSplit />

      {/* 8, le fondateur */}
      <div style={{ paddingTop: 'clamp(112px, 14vw, 176px)', paddingBottom: 'clamp(96px, 12vw, 150px)' }}>
        <Fondateur />
      </div>

      {/* 9, nuit : la FAQ numérotée */}
      <FaqNight />

      {/* 10, rouge : l'audit, puis l'agenda (c'est là que mènent tous les
          boutons « Recevoir votre audit gratuit » du site) */}
      <AuditBand />
      <CtaFinal />

      <Footer />
      <MobileCta />
    </main>
  )
}
