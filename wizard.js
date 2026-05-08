/* ==========================================
   TRIP SPRITE — Global Styles
   ========================================== */

:root {
  --ink: #1a1410;
  --ink-soft: #4a3f35;
  --cream: #faf6f0;
  --cream-dark: #f0e9de;
  --sand: #e8ddd0;
  --terracotta: #c4622d;
  --terracotta-light: #e07a4f;
  --sage: #7a9e7e;
  --sky: #5b8fad;
  --gold: #d4a843;
  --gold-light: #f0c96a;
  --white: #ffffff;

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;

  --shadow-soft: 0 4px 24px rgba(26, 20, 16, 0.08);
  --shadow-card: 0 8px 40px rgba(26, 20, 16, 0.12);
  --shadow-strong: 0 16px 64px rgba(26, 20, 16, 0.18);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--ink);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ==========================================
   HEADER
   ========================================== */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 246, 240, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--sand);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
}

.logo-sprite {
  color: var(--terracotta);
  font-size: 1.2rem;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.header-nav a {
  font-size: 0.9rem;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.2s;
}

.header-nav a:hover { color: var(--terracotta); }

.nav-github {
  background: var(--ink);
  color: var(--cream) !important;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.85rem !important;
  transition: background 0.2s !important;
}

.nav-github:hover { background: var(--terracotta) !important; }

/* ==========================================
   HERO
   ========================================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 32px;
  gap: 64px;
  overflow: hidden;
}

.hero-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}

.blob-1 {
  width: 600px; height: 600px;
  background: var(--terracotta);
  top: -200px; right: -100px;
  animation: blobFloat 12s ease-in-out infinite;
}

.blob-2 {
  width: 400px; height: 400px;
  background: var(--gold);
  bottom: 100px; left: -100px;
  animation: blobFloat 15s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px; height: 300px;
  background: var(--sage);
  top: 50%; left: 40%;
  animation: blobFloat 10s ease-in-out infinite 3s;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.97); }
}

.grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.4;
}

.hero-eyebrow {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 16px;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 20px;
}

.hero-headline em {
  font-style: italic;
  color: var(--terracotta);
  font-weight: 300;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--ink-soft);
  max-width: 480px;
  margin-bottom: 28px;
  line-height: 1.7;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
}

.hero-tags span {
  background: var(--white);
  border: 1px solid var(--sand);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--ink-soft);
  box-shadow: var(--shadow-soft);
}

.cta-btn {
  display: inline-block;
  background: var(--terracotta);
  color: var(--white);
  padding: 14px 32px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(196, 98, 45, 0.35);
  transition: all 0.2s;
}

.cta-btn:hover {
  background: var(--ink);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(26, 20, 16, 0.2);
}

/* Tile Preview Stack */
.tile-preview-stack {
  position: relative;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tile-preview {
  position: absolute;
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  box-shadow: var(--shadow-card);
  width: 260px;
  border: 1px solid var(--sand);
  transition: transform 0.3s;
}

.tile-preview:hover { transform: translateY(-4px) scale(1.02); }

.tp-1 { top: 0; left: 20px; z-index: 3; transform: rotate(-2deg); }
.tp-2 { top: 100px; left: 80px; z-index: 2; transform: rotate(1.5deg); }
.tp-3 { top: 200px; left: 40px; z-index: 1; transform: rotate(-1deg); }

.tp-tag {
  font-size: 0.75rem;
  color: var(--terracotta);
  font-weight: 500;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tp-name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ink);
}

.tp-vibe {
  font-size: 0.82rem;
  color: var(--ink-soft);
  margin-top: 4px;
}

/* ==========================================
   SECTIONS SHARED
   ========================================== */
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 32px;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 48px;
  line-height: 1.2;
}

/* ==========================================
   HOW IT WORKS
   ========================================== */
.how-it-works {
  background: var(--cream-dark);
  border-top: 1px solid var(--sand);
  border-bottom: 1px solid var(--sand);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.step-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 28px;
  border: 1px solid var(--sand);
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
}

.step-card:hover {
  box-shadow: var(--shadow-card);
  transform: translateY(-3px);
}

.step-num {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--terracotta);
  margin-bottom: 12px;
}

.step-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.step-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
}

.step-card p {
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.6;
}

/* ==========================================
   WIZARD
   ========================================== */
.demo-section { background: var(--cream); }

.wizard-shell {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--sand);
  box-shadow: var(--shadow-strong);
  overflow: hidden;
}

/* Progress */
.wizard-progress {
  padding: 24px 32px 0;
  background: var(--cream-dark);
  border-bottom: 1px solid var(--sand);
  padding-bottom: 20px;
}

.progress-track {
  height: 4px;
  background: var(--sand);
  border-radius: 100px;
  margin-bottom: 16px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--terracotta), var(--gold));
  border-radius: 100px;
  width: 25%;
  transition: width 0.4s ease;
}

.progress-steps {
  display: flex;
  gap: 8px;
}

.prog-step {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-soft);
  padding: 4px 12px;
  border-radius: 100px;
  background: transparent;
  transition: all 0.2s;
}

.prog-step.active {
  background: var(--terracotta);
  color: var(--white);
}

.prog-step.done {
  background: var(--sage);
  color: var(--white);
}

/* Wizard body */
.wizard-body {
  padding: 40px 40px;
  min-height: 480px;
}

.wizard-step {
  display: none;
  animation: fadeSlideIn 0.3s ease;
}

.wizard-step.active { display: block; }

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 28px;
}

.step-desc {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin-bottom: 28px;
  margin-top: -16px;
}

/* Fields */
.field-group {
  margin-bottom: 28px;
}

.field-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 10px;
}

.label-note {
  font-weight: 400;
  color: var(--ink-soft);
  font-size: 0.8rem;
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.opt-btn {
  padding: 8px 18px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: var(--white);
  color: var(--ink-soft);
  font-family: var(--font-body);
  font-size: 0.87rem;
  cursor: pointer;
  transition: all 0.15s;
}

.opt-btn:hover { border-color: var(--terracotta); color: var(--terracotta); }

.opt-btn.active {
  background: var(--terracotta);
  border-color: var(--terracotta);
  color: var(--white);
  font-weight: 500;
}

.text-input {
  width: 100%;
  max-width: 400px;
  padding: 10px 16px;
  border: 1.5px solid var(--sand);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink);
  background: var(--cream);
  transition: border-color 0.2s;
  outline: none;
}

.text-input:focus { border-color: var(--terracotta); }

.toggle-row {
  display: flex;
  gap: 10px;
}

.toggle-btn {
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--sand);
  background: var(--white);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s;
}

.toggle-btn.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--white);
}

/* Vibes grid */
.vibe-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.vibe-btn {
  padding: 9px 18px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: var(--white);
  color: var(--ink-soft);
  font-family: var(--font-body);
  font-size: 0.87rem;
  cursor: pointer;
  transition: all 0.15s;
}

.vibe-btn:hover { border-color: var(--gold); color: var(--ink); }

.vibe-btn.active {
  background: var(--gold-light);
  border-color: var(--gold);
  color: var(--ink);
  font-weight: 500;
}

/* Sliders */
.slider-list { display: flex; flex-direction: column; gap: 24px; }

.slider-row {
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  gap: 16px;
}

.slider-label-left {
  font-size: 0.85rem;
  color: var(--ink-soft);
  text-align: right;
}

.slider-label-right {
  font-size: 0.85rem;
  color: var(--ink-soft);
}

.slider-wrap {
  position: relative;
}

.vibe-slider {
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 100px;
  background: var(--sand);
  outline: none;
  cursor: pointer;
}

.vibe-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--terracotta);
  box-shadow: 0 2px 8px rgba(196,98,45,0.4);
  cursor: pointer;
  transition: transform 0.15s;
}

.vibe-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }

/* ==========================================
   RESULTS
   ========================================== */
.results-sub { margin-bottom: 20px; }

.ai-note {
  font-size: 0.8rem;
  color: var(--terracotta);
  font-style: italic;
}

/* Flex toggles */
.flex-toggles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
  padding: 14px 18px;
  background: var(--cream-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--sand);
}

.toggle-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-right: 4px;
}

.flex-btn {
  padding: 6px 14px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: var(--white);
  font-size: 0.8rem;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s;
  font-family: var(--font-body);
}

.flex-btn:hover { border-color: var(--terracotta); color: var(--terracotta); }

.flex-btn.active {
  background: var(--terracotta);
  border-color: var(--terracotta);
  color: var(--white);
}

/* Destination tiles */
.dest-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.dest-tile {
  border-radius: var(--radius-md);
  border: 2px solid var(--sand);
  background: var(--white);
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

.dest-tile:hover { box-shadow: var(--shadow-card); transform: translateY(-3px); }

.dest-tile.selected {
  border-color: var(--terracotta);
  box-shadow: 0 0 0 3px rgba(196, 98, 45, 0.12), var(--shadow-card);
}

.tile-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--cream-dark);
  border-bottom: 1px solid var(--sand);
}

.tile-rank {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--terracotta);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tile-dog { font-size: 0.75rem; color: var(--sage); }

.tile-img {
  height: 140px;
  background-size: cover;
  background-position: center;
}

.moab-img {
  background: linear-gradient(135deg, #c4622d 0%, #8b4513 50%, #d2691e 100%);
  position: relative;
}

.moab-img::after {
  content: '🏜️';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  opacity: 0.6;
}

.salida-img {
  background: linear-gradient(135deg, #5b8fad 0%, #7a9e7e 100%);
  position: relative;
}

.salida-img::after {
  content: '⛰️';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  opacity: 0.6;
}

.pagosa-img {
  background: linear-gradient(135deg, #4a6fa5 0%, #5b8fad 60%, #7a9e7e 100%);
  position: relative;
}

.pagosa-img::after {
  content: '♨️';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  opacity: 0.6;
}

.tile-body { padding: 16px; }

.tile-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}

.tile-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.tile-meta span {
  font-size: 0.8rem;
  color: var(--ink-soft);
}

.tile-vibes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tile-vibes span {
  background: var(--cream-dark);
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.75rem;
  color: var(--ink-soft);
}

.tile-highlight {
  font-size: 0.85rem;
  color: var(--ink);
  font-weight: 500;
  margin-bottom: 8px;
}

.tile-why {
  font-size: 0.82rem;
  color: var(--ink-soft);
  line-height: 1.5;
  margin-bottom: 14px;
}

.tile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tile-link {
  font-size: 0.78rem;
  padding: 5px 12px;
  border-radius: 100px;
  border: 1px solid var(--sand);
  color: var(--ink-soft);
  text-decoration: none;
  transition: all 0.15s;
  background: var(--cream);
}

.tile-link:hover { border-color: var(--terracotta); color: var(--terracotta); background: var(--white); }

/* Results CTA */
.results-cta {
  text-align: center;
  padding: 20px;
  background: var(--cream-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--sand);
  margin-bottom: 32px;
}

.results-cta p {
  font-size: 0.95rem;
  color: var(--ink-soft);
  margin-bottom: 14px;
}

.pick-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.pick-btn {
  padding: 10px 24px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: var(--white);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s;
}

.pick-btn:hover { border-color: var(--terracotta); color: var(--terracotta); }

.pick-btn.active-pick {
  background: var(--terracotta);
  border-color: var(--terracotta);
  color: var(--white);
  font-weight: 500;
}

/* ==========================================
   ITINERARY PANEL
   ========================================== */
.itinerary-panel {
  display: none;
  border: 2px solid var(--terracotta);
  border-radius: var(--radius-md);
  overflow: hidden;
  animation: fadeSlideIn 0.4s ease;
}

.itinerary-panel.visible { display: block; }

.itin-header {
  padding: 24px 28px;
  background: linear-gradient(135deg, var(--terracotta), #a8522b);
  color: var(--white);
}

.itin-header h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.itin-meta { font-size: 0.88rem; opacity: 0.85; }

.itin-tabs {
  display: flex;
  border-bottom: 1px solid var(--sand);
  background: var(--cream-dark);
}

.itin-tab {
  padding: 12px 20px;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.87rem;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.15s;
  border-bottom: 3px solid transparent;
  font-weight: 500;
}

.itin-tab:hover { color: var(--terracotta); }

.itin-tab.active {
  color: var(--terracotta);
  border-bottom-color: var(--terracotta);
  background: var(--white);
}

.itin-tab-content { display: none; padding: 28px; }
.itin-tab-content.active { display: block; }

/* Day cards */
.day-card {
  margin-bottom: 24px;
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.day-header {
  padding: 12px 20px;
  background: var(--cream-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-label {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
}

.day-weather {
  font-size: 0.8rem;
  color: var(--ink-soft);
}

.day-body { padding: 16px 20px; }

.activity {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--sand);
}

.activity:last-child { border-bottom: none; }

.activity-time {
  font-size: 0.75rem;
  color: var(--terracotta);
  font-weight: 600;
  min-width: 60px;
  padding-top: 2px;
}

.activity-content h5 {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 2px;
}

.activity-content p { font-size: 0.82rem; color: var(--ink-soft); }

.weather-alt {
  background: #e8f4fd;
  border: 1px solid #b8d9f0;
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  margin-top: 12px;
  font-size: 0.82rem;
  color: var(--sky);
}

/* Budget breakdown */
.budget-grid {
  display: grid;
  gap: 12px;
}

.budget-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--cream-dark);
  border-radius: var(--radius-sm);
  border: 1px solid var(--sand);
}

.budget-label { font-size: 0.9rem; color: var(--ink); }
.budget-amt { font-size: 0.9rem; font-weight: 600; color: var(--terracotta); }

.budget-total {
  padding: 14px 16px;
  background: var(--ink);
  color: var(--white);
  border-radius: var(--radius-sm);
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

/* Packing list */
.pack-section { margin-bottom: 20px; }

.pack-section h5 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--terracotta);
  margin-bottom: 10px;
}

.pack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pack-item {
  padding: 6px 14px;
  background: var(--cream-dark);
  border: 1px solid var(--sand);
  border-radius: 100px;
  font-size: 0.82rem;
  color: var(--ink-soft);
}

/* Share card */
.share-card {
  background: var(--cream-dark);
  border: 1px solid var(--sand);
  border-radius: var(--radius-md);
  padding: 24px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--ink);
  white-space: pre-wrap;
  margin-bottom: 14px;
}

.copy-btn {
  padding: 10px 20px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: var(--white);
  font-family: var(--font-body);
  font-size: 0.87rem;
  cursor: pointer;
  transition: all 0.15s;
  color: var(--ink-soft);
}

.copy-btn:hover { background: var(--terracotta); border-color: var(--terracotta); color: var(--white); }

/* Wizard nav */
.wizard-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  border-top: 1px solid var(--sand);
  background: var(--cream-dark);
}

.nav-btn {
  padding: 12px 28px;
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1.5px solid transparent;
}

.nav-btn.primary {
  background: var(--terracotta);
  color: var(--white);
  box-shadow: 0 4px 16px rgba(196,98,45,0.3);
}

.nav-btn.primary:hover {
  background: var(--ink);
  box-shadow: 0 6px 24px rgba(26,20,16,0.2);
  transform: translateY(-1px);
}

.nav-btn.secondary {
  background: var(--white);
  border-color: var(--sand);
  color: var(--ink-soft);
}

.nav-btn.secondary:hover { border-color: var(--ink); color: var(--ink); }

.step-counter {
  font-size: 0.82rem;
  color: var(--ink-soft);
  font-weight: 500;
}

/* ==========================================
   FEATURES STRIP
   ========================================== */
.features-strip {
  background: var(--ink);
  color: var(--white);
}

.features-strip .section-inner { padding: 72px 32px; }
.features-strip .section-title { color: var(--white); margin-bottom: 48px; }

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.feature-item { }

.feature-icon { font-size: 2rem; margin-bottom: 12px; }

.feature-item h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--gold-light);
  margin-bottom: 6px;
}

.feature-item p { font-size: 0.87rem; color: rgba(255,255,255,0.65); line-height: 1.6; }

/* ==========================================
   FOOTER
   ========================================== */
.site-footer {
  background: var(--cream-dark);
  border-top: 1px solid var(--sand);
  padding: 32px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
}

.footer-tagline { font-size: 0.82rem; color: var(--ink-soft); }

.footer-links { display: flex; gap: 20px; }
.footer-links a {
  font-size: 0.82rem;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--terracotta); }

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 60px 20px;
  }

  .hero-visual { display: none; }

  .header-inner { padding: 0 20px; }
  .header-nav a:not(.nav-github) { display: none; }

  .wizard-body { padding: 24px 20px; }
  .wizard-nav { padding: 16px 20px; }

  .section-inner { padding: 60px 20px; }

  .dest-tiles { grid-template-columns: 1fr; }

  .slider-row {
    grid-template-columns: 80px 1fr 80px;
    gap: 8px;
  }

  .slider-label-left, .slider-label-right { font-size: 0.75rem; }

  .footer-inner { flex-direction: column; text-align: center; }
  .footer-links { justify-content: center; }
}
