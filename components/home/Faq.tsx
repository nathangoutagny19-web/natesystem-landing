'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'

const faqItems = [
  {
    q: 'C\'est quoi la différence avec un freelance ?',
    a: 'Un freelance fait une mission et part. On construit une infrastructure permanente qui reste et évolue. Vous gardez tout — le code, les agents, les outils.',
  },
  {
    q: 'Et si vous disparaissez ?',
    a: 'Tout est propriétaire. Le code est à vous, hébergé sur vos serveurs. On livre la documentation complète. Vous pouvez continuer sans nous.',
  },
  {
    q: 'C\'est quoi un agent IA concrètement ?',
    a: 'C\'est un programme spécialisé qui exécute une tâche précise en autonomie — comme un employé virtuel. Il est connecté à vos données, suit vos process, et travaille 24/7.',
  },
  {
    q: 'Combien ça coûte ?',
    a: 'L\'audit stratégique est à 990\u00A0€. L\'infrastructure complète dépend de vos besoins — en général entre 5\u00A0000\u00A0€ et 25\u00A0000\u00A0€ pour le setup, puis une licence mensuelle de maintenance.',
  },
  {
    q: 'Combien de temps pour voir des résultats ?',
    a: 'Les premiers résultats arrivent en 2 à 4 semaines. L\'infrastructure complète est livrée en 6 à 10 semaines selon la complexité.',
  },
  {
    q: 'Est-ce que ça marche pour mon secteur ?',
    a: 'On a travaillé avec la restauration, le conseil, le BTP, l\'éducation, la santé. Le principe est le même : si vous avez des process répétitifs et des données, on peut automatiser.',
  },
  {
    q: 'Je n\'y connais rien en IA, c\'est un problème ?',
    a: 'Non. On gère tout. Vous n\'avez besoin d\'aucune compétence technique. On forme votre équipe et on reste disponible.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">QUESTIONS FRÉQUENTES</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>
            On répond <span className="accent">à tout.</span>
          </h2>
        </FadeUp>

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {faqItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      paddingBottom: '24px',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
