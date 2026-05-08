/**
 * Trip Sprite — Wizard & Interaction Logic
 *
 * Handles:
 * - Step navigation with validation
 * - Button toggle interactions
 * - Destination tile selection
 * - Itinerary rendering from data.js
 * - Tab switching
 * - Copy to clipboard for share card
 * - Flex toggle UI (demo mode)
 *
 * AI Integration Points (marked with // [AI]):
 * These are the hooks where the Claude API call would fire
 * in the full production version.
 */

// ==========================================
// STATE
// ==========================================

const state = {
  currentStep: 1,
  totalSteps: 5,
  selectedDest: 'moab',
  inputs: {
    tripLength: 'weekend',
    groupType: 'duo',
    startCity: 'Denver, CO',
    budget: 'mid',
    driveTime: '3',
    dog: 'yes',
    vibes: ['hiking', 'stargazing', 'food-scene'],
    transport: 'own-car',
    lodging: 'cabin',
    memory: 'on'
  }
};

// ==========================================
// STEP LABELS
// ==========================================

const stepLabels = ['Basics', 'Vibes', 'Group', 'Transport', 'Results'];

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  buildProgressSteps();
  updateProgress();
  initToggles();
  initFlexToggles();
  initItinTabs();
  renderDestination('moab');

  // Pre-initialize results tile click
  document.querySelectorAll('.dest-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const dest = tile.dataset.dest;
      selectDest(dest);
    });
  });
});

// ==========================================
// PROGRESS BAR
// ==========================================

function buildProgressSteps() {
  const container = document.getElementById('progressSteps');
  container.innerHTML = stepLabels.map((label, i) => {
    return `<div class="prog-step ${i === 0 ? 'active' : ''}" id="prog-${i + 1}">${label}</div>`;
  }).join('');
}

function updateProgress() {
  const fill = document.getElementById('progressFill');
  const pct = (state.currentStep / state.totalSteps) * 100;
  fill.style.width = `${pct}%`;

  stepLabels.forEach((_, i) => {
    const el = document.getElementById(`prog-${i + 1}`);
    if (!el) return;
    el.classList.remove('active', 'done');
    if (i + 1 === state.currentStep) el.classList.add('active');
    if (i + 1 < state.currentStep) el.classList.add('done');
  });

  document.getElementById('stepCounter').textContent =
    `Step ${state.currentStep} of ${state.totalSteps - 1}`;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.style.display = state.currentStep > 1 ? 'block' : 'none';

  if (state.currentStep === state.totalSteps) {
    nextBtn.style.display = 'none';
    document.getElementById('stepCounter').textContent = '✦ Your trips are ready!';
  } else {
    nextBtn.style.display = 'block';
    nextBtn.textContent = state.currentStep === state.totalSteps - 1 ? 'Show My Trips →' : 'Continue →';
  }
}

// ==========================================
// STEP NAVIGATION
// ==========================================

function changeStep(dir) {
  const newStep = state.currentStep + dir;
  if (newStep < 1 || newStep > state.totalSteps) return;

  // [AI] When advancing to step 5 (results), fire the Claude API call
  // with the collected state.inputs object to generate destination tiles.
  // Replace the static tiles in #destTiles with AI-generated content.
  if (newStep === state.totalSteps) {
    triggerDemoResults();
  }

  document.querySelector(`.wizard-step[data-step="${state.currentStep}"]`).classList.remove('active');
  state.currentStep = newStep;
  document.querySelector(`.wizard-step[data-step="${state.currentStep}"]`).classList.add('active');

  updateProgress();
  window.scrollTo({ top: document.getElementById('demo').offsetTop - 80, behavior: 'smooth' });
}

// ==========================================
// DEMO RESULTS TRIGGER
// ==========================================

function triggerDemoResults() {
  // [AI] In production: POST to /v1/messages with the full state.inputs
  // object as context. Claude generates destination tile JSON, which gets
  // rendered below. For the demo, we just show the static tiles.

  // Animate tiles in
  setTimeout(() => {
    document.querySelectorAll('.dest-tile').forEach((tile, i) => {
      tile.style.opacity = '0';
      tile.style.transform = 'translateY(20px)';
      setTimeout(() => {
        tile.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        tile.style.opacity = '1';
        tile.style.transform = 'translateY(0)';
      }, i * 120);
    });
  }, 100);
}

// ==========================================
// BUTTON GROUP TOGGLES (single-select)
// ==========================================

function initToggles() {
  // Single-select button rows
  ['tripLength', 'groupType', 'budget', 'driveTime', 'transport', 'lodging', 'scope'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    container.querySelectorAll('.opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.inputs[id] = btn.dataset.val;
      });
    });
  });

  // Multi-select vibes
  const vibeGrid = document.getElementById('vibeGrid');
  if (vibeGrid) {
    vibeGrid.querySelectorAll('.vibe-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const val = btn.dataset.val;
        if (state.inputs.vibes.includes(val)) {
          state.inputs.vibes = state.inputs.vibes.filter(v => v !== val);
        } else {
          state.inputs.vibes.push(val);
        }
      });
    });
  }

  // Dog toggle
  const dogOn = document.getElementById('dogToggle');
  const dogOff = document.getElementById('dogToggleNo');
  if (dogOn && dogOff) {
    dogOn.addEventListener('click', () => {
      dogOn.classList.add('active');
      dogOff.classList.remove('active');
      state.inputs.dog = 'yes';
    });
    dogOff.addEventListener('click', () => {
      dogOff.classList.add('active');
      dogOn.classList.remove('active');
      state.inputs.dog = 'no';
    });
  }

  // Memory toggle
  const memOn = document.getElementById('memOn');
  const memOff = document.getElementById('memOff');
  if (memOn && memOff) {
    memOn.addEventListener('click', () => {
      memOn.classList.add('active');
      memOff.classList.remove('active');
    });
    memOff.addEventListener('click', () => {
      memOff.classList.add('active');
      memOn.classList.remove('active');
    });
  }
}

// ==========================================
// FLEX TOGGLES
// ==========================================

function initFlexToggles() {
  const flexBtns = document.querySelectorAll('.flex-btn');
  flexBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      // [AI] In production: re-fire Claude API with updated flex params
      // and re-render destination tiles + itinerary in real time.
      // For demo: visual toggle only.
      showFlexFeedback(btn.textContent.trim());
    });
  });
}

function showFlexFeedback(label) {
  // Subtle flash on tiles to indicate recalc (demo stand-in for AI re-generation)
  document.querySelectorAll('.dest-tile').forEach(tile => {
    tile.style.transition = 'opacity 0.15s';
    tile.style.opacity = '0.4';
    setTimeout(() => { tile.style.opacity = '1'; }, 300);
  });
}

// ==========================================
// DESTINATION SELECTION
// ==========================================

function selectDest(destKey) {
  state.selectedDest = destKey;

  // Update tile selected state
  document.querySelectorAll('.dest-tile').forEach(tile => {
    tile.classList.toggle('selected', tile.dataset.dest === destKey);
  });

  // Update pick buttons
  document.querySelectorAll('.pick-btn').forEach(btn => {
    btn.classList.toggle('active-pick', btn.textContent.toLowerCase().includes(destKey.slice(0, 5)));
  });

  // [AI] In production: POST to /v1/messages to generate full itinerary
  // for the selected destination using the user's inputs + destination context.
  renderDestination(destKey);

  // Show itinerary panel
  const panel = document.getElementById('itineraryPanel');
  panel.classList.add('visible');

  // Scroll to it
  setTimeout(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
}

// ==========================================
// ITINERARY RENDERING
// ==========================================

function renderDestination(destKey) {
  const data = TRIP_DATA[destKey];
  if (!data) return;

  document.getElementById('itinTitle').textContent = `${data.name} Itinerary`;
  document.getElementById('itinMeta').textContent = data.meta;

  renderDays(data.days);
  renderBudget(data.budget, data.total);
  renderPacking(data.packing);
  renderShare(data.share);
}

function renderDays(days) {
  const container = document.getElementById('itinDays');
  container.innerHTML = days.map(day => `
    <div class="day-card">
      <div class="day-header">
        <span class="day-label">${day.label}</span>
        <span class="day-weather">${day.weather}</span>
      </div>
      <div class="day-body">
        ${day.activities.map(act => `
          <div class="activity">
            <div class="activity-time">${act.time}</div>
            <div class="activity-content">
              <h5>${act.title}</h5>
              <p>${act.desc}</p>
            </div>
          </div>
        `).join('')}
        <div class="weather-alt">☂️ <strong>Weather alternate:</strong> ${day.weatherAlt.replace('🌧️ Rain plan: ', '')}</div>
      </div>
    </div>
  `).join('');
}

function renderBudget(items, total) {
  const container = document.getElementById('budgetBreakdown');
  container.innerHTML = `
    <div class="budget-grid">
      ${items.map(item => `
        <div class="budget-row">
          <span class="budget-label">${item.label}</span>
          <span class="budget-amt">${item.amount}</span>
        </div>
      `).join('')}
      <div class="budget-total">
        <span>Estimated Total</span>
        <span>${total}</span>
      </div>
    </div>
    <p style="font-size:0.78rem;color:var(--ink-soft);margin-top:12px;">* Estimates based on typical trip costs. Group split available — divide lodging and gas by # of travelers.</p>
  `;
}

function renderPacking(packing) {
  const container = document.getElementById('packingList');
  const sections = [
    { label: '🏕️ Gear (unusual items only)', items: packing.gear },
    { label: '🐾 Dog essentials', items: packing.dog },
    { label: '🧥 Layers', items: packing.layers },
    { label: '📋 Admin & misc', items: packing.misc }
  ];

  container.innerHTML = sections.map(s => `
    <div class="pack-section">
      <h5>${s.label}</h5>
      <div class="pack-items">
        ${s.items.map(item => `<span class="pack-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderShare(text) {
  document.getElementById('shareCard').textContent = text;
}

// ==========================================
// ITINERARY TABS
// ==========================================

function initItinTabs() {
  document.querySelectorAll('.itin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;

      document.querySelectorAll('.itin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.itin-tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// ==========================================
// COPY TO CLIPBOARD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyShare');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = document.getElementById('shareCard').textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => { copyBtn.textContent = '📋 Copy to clipboard'; }, 2000);
      }).catch(() => {
        // Fallback for browsers without clipboard API
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => { copyBtn.textContent = '📋 Copy to clipboard'; }, 2000);
      });
    });
  }
});

// ==========================================
// GLOBAL: selectDest exposed for inline onclick
// ==========================================
window.selectDest = selectDest;
