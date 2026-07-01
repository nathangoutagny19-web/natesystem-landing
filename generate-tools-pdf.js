const puppeteer = require('puppeteer');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: #f5f5f0;
    background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    color: #1a1a1a;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 210mm; min-height: 297mm;
    padding: 0;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }
  .page:last-child { page-break-after: auto; }

  /* Header */
  .header {
    background: #0e0e12; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 30px;
  }
  .header-left { display: flex; align-items: center; gap: 12px; }
  .logo-box {
    width: 36px; height: 36px; background: #1a1a1a; border-radius: 8px;
    display: flex; align-items: center; justify-content: center; position: relative;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .logo-n { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 22px; color: white; }
  .logo-dot { position: absolute; bottom: 6px; right: 5px; width: 4px; height: 4px; border-radius: 50%; background: #E63946; }
  .header-brand { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 18px; color: white; }
  .header-sub { font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a8a96; margin-left: 8px; }
  .header-url { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #E63946; }

  /* Content */
  .content { padding: 0 30px; }

  /* Hero */
  .hero { padding: 36px 0 20px; }
  .hero h1 { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 30px; color: #1a1a1a; line-height: 1.2; }
  .hero h1 .accent { color: #E63946; }
  .hero p { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 12px; color: #5a5a5a; margin-top: 8px; }

  /* Section */
  .section { margin-top: 20px; }
  .section-label {
    display: flex; align-items: center; gap: 10px;
    font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 400;
    letter-spacing: 2px; text-transform: uppercase; color: #5a5a5a;
    padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.08);
    margin-bottom: 12px;
  }
  .section-label::before {
    content: ''; width: 3px; height: 14px; background: #E63946; border-radius: 1px;
  }

  /* Card grid */
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .card {
    background: white; border: 1px solid rgba(0,0,0,0.08);
    border-radius: 12px; padding: 14px 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }
  .card.daily { border-top: 3px solid #E63946; }
  .card-header { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
  .card-name { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 12px; color: #1a1a1a; }
  .card-tag {
    font-family: 'JetBrains Mono', monospace; font-size: 8px; text-transform: uppercase;
    background: rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px; padding: 2px 7px; color: #5a5a5a; white-space: nowrap;
  }
  .card-desc {
    font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 10px;
    color: #5a5a5a; margin-top: 6px; line-height: 1.5;
  }

  /* Footer */
  .footer {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: #0e0e12; height: 32px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 30px;
  }
  .footer-left { font-family: 'DM Sans', sans-serif; font-size: 10px; color: #8a8a96; }
  .footer-right { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #E63946; }

  /* CTA */
  .cta-block {
    background: #0e0e12; border-radius: 12px; padding: 28px 28px 24px;
    margin-top: 28px; position: relative; overflow: hidden;
  }
  .cta-block::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #E63946; }
  .cta-title { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 15px; color: white; margin-bottom: 6px; }
  .cta-sub { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 11px; color: #8a8a96; margin-bottom: 12px; }
  .cta-link { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 12px; color: #E63946; text-decoration: none; }

  /* Quote */
  .quote {
    margin-top: 20px; padding-left: 16px;
    border-left: 2px solid #E63946;
  }
  .quote-text { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 12px; color: #1a1a1a; line-height: 1.6; }
  .quote-author { font-family: 'DM Sans', sans-serif; font-size: 11px; color: #5a5a5a; margin-top: 6px; }
</style>
</head>
<body>

<!-- ============ PAGE 1 ============ -->
<div class="page">
  <div class="header">
    <div class="header-left">
      <div class="logo-box"><span class="logo-n">N</span><span class="logo-dot"></span></div>
      <span class="header-brand">NateSystem</span>
      <span class="header-sub">Ma stack d'outils 2026</span>
    </div>
    <span class="header-url">nathangoutagny.com</span>
  </div>

  <div class="content">
    <div class="hero">
      <h1>Les outils que j'utilise<br><span class="accent">chaque jour.</span></h1>
      <p>Pas de sponsoring. Pas de partenariat. Uniquement ce que j'utilise vraiment.</p>
    </div>

    <div class="section">
      <div class="section-label">QUOTIDIEN — SANS EXCEPTION</div>
      <div class="grid">
        <div class="card daily">
          <div class="card-header"><span class="card-name">Claude Code</span><span class="card-tag">IA</span></div>
          <div class="card-desc">Assistant de développement IA. Je code, débugge et automatise en langage naturel.</div>
        </div>
        <div class="card daily">
          <div class="card-header"><span class="card-name">GitHub</span><span class="card-tag">DEV</span></div>
          <div class="card-desc">Versioning de tout le code NateSystem et des projets clients.</div>
        </div>
        <div class="card daily">
          <div class="card-header"><span class="card-name">Notion</span><span class="card-tag">OPS</span></div>
          <div class="card-desc">Base de connaissance, process internes, notes clients.</div>
        </div>
        <div class="card daily">
          <div class="card-header"><span class="card-name">Google Workspace</span><span class="card-tag">OPS</span></div>
          <div class="card-desc">Gmail, Drive, Docs. Toute ma communication professionnelle.</div>
        </div>
        <div class="card daily">
          <div class="card-header"><span class="card-name">Cal.com</span><span class="card-tag">SALES</span></div>
          <div class="card-desc">Prise de rendez-vous prospects et clients. Open source.</div>
        </div>
        <div class="card daily">
          <div class="card-header"><span class="card-name">Stripe</span><span class="card-tag">OPS</span></div>
          <div class="card-desc">Facturation et paiements clients.</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-label">DEV & INFRASTRUCTURE</div>
      <div class="grid">
        <div class="card">
          <div class="card-header"><span class="card-name">Next.js + Supabase + Vercel</span><span class="card-tag">STACK</span></div>
          <div class="card-desc">Ma stack principale pour tous les projets clients.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Cursor</span><span class="card-tag">DEV</span></div>
          <div class="card-desc">IDE IA complémentaire à Claude Code.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Resend</span><span class="card-tag">DEV</span></div>
          <div class="card-desc">Emails transactionnels pour mes produits.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">FastAPI</span><span class="card-tag">DEV</span></div>
          <div class="card-desc">APIs Python rapides et légères.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Python + Pandas</span><span class="card-tag">DATA</span></div>
          <div class="card-desc">Scripts de traitement de données et automatisations.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Trigger.dev</span><span class="card-tag">IA</span></div>
          <div class="card-desc">Monitoring et déploiement d'automatisations en production. Open source.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span class="footer-left">Nathan Goutagny · NateSystem · nathangoutagny.com</span>
    <span class="footer-right">1 / 2</span>
  </div>
</div>

<!-- ============ PAGE 2 ============ -->
<div class="page">
  <div class="header">
    <div class="header-left">
      <div class="logo-box"><span class="logo-n">N</span><span class="logo-dot"></span></div>
      <span class="header-brand">NateSystem</span>
      <span class="header-sub">Ma stack d'outils 2026</span>
    </div>
    <span class="header-url">nathangoutagny.com</span>
  </div>

  <div class="content">
    <div class="section" style="margin-top: 28px;">
      <div class="section-label">IA & AUTOMATISATION</div>
      <div class="grid">
        <div class="card">
          <div class="card-header"><span class="card-name">Claude API</span><span class="card-tag">IA</span></div>
          <div class="card-desc">Le cerveau de tous mes agents IA internes et clients.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Apify</span><span class="card-tag">DATA</span></div>
          <div class="card-desc">Scraping web et extraction de données à grande échelle.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Lovable</span><span class="card-tag">DEV</span></div>
          <div class="card-desc">Prototypage rapide d'outils et interfaces web.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Napkin.ai</span><span class="card-tag">DESIGN</span></div>
          <div class="card-desc">Génération de schémas et diagrammes visuels.</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-label">PROSPECTION & CRM</div>
      <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
        <div class="card">
          <div class="card-header"><span class="card-name">NateSystem CRM</span><span class="card-tag">INTERNE</span></div>
          <div class="card-desc">Mon CRM propriétaire. Pipeline, scoring leads, séquences emails, suivi clients.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Cal.com</span><span class="card-tag">SALES</span></div>
          <div class="card-desc">Qualification prospects via le formulaire de booking.</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-label">RECHERCHE & PRODUCTIVITÉ</div>
      <div class="grid">
        <div class="card">
          <div class="card-header"><span class="card-name">Perplexity</span><span class="card-tag">RECHERCHE</span></div>
          <div class="card-desc">Veille, préparation de rendez-vous, analyse concurrentielle IA.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Framer</span><span class="card-tag">DESIGN</span></div>
          <div class="card-desc">Design et landing pages.</div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-name">Loom</span><span class="card-tag">OPS</span></div>
          <div class="card-desc">Vidéos courtes pour expliquer des livrables aux clients.</div>
        </div>
      </div>
    </div>

    <div class="cta-block">
      <div class="cta-title">Vous voulez une stack IA sur mesure pour votre PME ?</div>
      <div class="cta-sub">Je construis des infrastructures IA propriétaires pour des équipes de 10 à 100 personnes.</div>
      <a class="cta-link" href="https://nathangoutagny.com/book">→  nathangoutagny.com/book</a>
    </div>

    <div class="quote">
      <div class="quote-text">Je n'utilise aucun outil que je n'ai pas testé moi-même.<br>Cette liste évolue chaque mois. Vrais outils, pas deals d'affiliation.</div>
      <div class="quote-author">— Nathan Goutagny, Fondateur NateSystem</div>
    </div>
  </div>

  <div class="footer">
    <span class="footer-left">Nathan Goutagny · NateSystem · nathangoutagny.com</span>
    <span class="footer-right">2 / 2</span>
  </div>
</div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  // Wait for fonts
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));

  const outputPath = path.join(__dirname, 'natesystem_tools.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log('PDF generated:', outputPath);
  await browser.close();
})();
