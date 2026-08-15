// Heartbeat & Blush-O-Meter Interactive Component

export class BlushMeter {
  constructor(containerEl, onComplete) {
    this.container = containerEl;
    this.onComplete = onComplete;
    this.progress = 0;
    this.isHolding = false;
    this.hasCompleted = false;
    this.holdTimer = null;
    this.audioCtx = null;
    this.modalEl = null;
  }

  render() {
    this.container.innerHTML = `
      <div class="screen-container">
        <div class="blush-card">
          <div class="blush-badge">💓 Heartbeat & Blush-O-Meter 😳</div>
          <h2 class="blush-title">Touch & Hold to Scan Love Level</h2>
          <p class="blush-subtitle">Press and hold your finger on the glowing heart to measure your love for Aetaa...</p>
          
          <div class="scanner-zone">
            <div class="heart-scanner-btn" id="heartScannerBtn">
              <div class="heart-pulse-ring" id="pulseRing"></div>
              <span class="heart-emoji" id="heartEmoji">💖</span>
            </div>
            <div class="scanner-text" id="scannerText">Press and Hold Here</div>
          </div>

          <div class="meter-bar-wrapper">
            <div class="meter-bar-fill" id="meterFill" style="width: 0%;"></div>
            <span class="meter-percentage" id="meterPercentage">0%</span>
          </div>

          <p style="font-size:0.9rem; color:var(--text-muted); margin-top:15px;" id="scannerStatus">
            Waiting for touch input...
          </p>

          <button class="btn-secondary" id="skipMeterBtn" style="margin-top:20px; font-size:0.85rem; padding:6px 16px;">
            Skip Scan ➡️
          </button>
        </div>

        <!-- Result Modal -->
        <div class="blush-modal-overlay" id="blushResultModal" style="display:none;">
          <div class="blush-modal-content">
            <div style="font-size:3.5rem; margin-bottom:10px; animation: mascotWiggle 1s ease infinite;">😳 💓 💋</div>
            <h2 class="result-modal-title">Love Scan Complete! 🎉</h2>
            <div class="result-box">
              <div class="result-row">
                <span class="result-label">💖 Love Score:</span>
                <span class="result-value highlight">99.9% Hopelessly in Love!</span>
              </div>
              <div class="result-row">
                <span class="result-label">😳 Blushing Level:</span>
                <span class="result-value critical">CRITICAL / MAXIMUM 💋</span>
              </div>
              <div class="result-row">
                <span class="result-label">🔒 Heart Status:</span>
                <span class="result-value">Stolen by Venkatesha forever!</span>
              </div>
              <div class="result-quote-box">
                "Aetaa loves you more than all the stars in the sky, my sweet Kanmanii! ❤️"
              </div>
            </div>
            <button class="btn-primary" id="continueFromMeterBtn" style="margin-top:22px; width:100%; font-size:1.1rem; padding:12px 24px;">
              Continue to Puzzle Quest ✨
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  playHeartbeatSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(80, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.15);
    } catch (e) {
      // Audio fallback silent
    }
  }

  cleanUpModal() {
    if (this.modalEl && this.modalEl.parentNode) {
      this.modalEl.parentNode.removeChild(this.modalEl);
    }
  }

  bindEvents() {
    const heartBtn = this.container.querySelector("#heartScannerBtn");
    const meterFill = this.container.querySelector("#meterFill");
    const percentageEl = this.container.querySelector("#meterPercentage");
    const statusEl = this.container.querySelector("#scannerStatus");
    const pulseRing = this.container.querySelector("#pulseRing");
    const heartEmoji = this.container.querySelector("#heartEmoji");
    const modal = this.container.querySelector("#blushResultModal");
    const skipBtn = this.container.querySelector("#skipMeterBtn");
    const continueBtn = this.container.querySelector("#continueFromMeterBtn");

    this.modalEl = modal;

    // Append modal directly to document body to prevent parent transform clipping
    if (modal && modal.parentNode !== document.body) {
      document.body.appendChild(modal);
    }

    const completeScan = () => {
      if (this.hasCompleted) return;
      this.hasCompleted = true;
      this.isHolding = false;
      if (this.holdTimer) {
        clearInterval(this.holdTimer);
        this.holdTimer = null;
      }

      heartBtn.classList.remove("holding");
      heartEmoji.innerText = "💘";
      pulseRing.style.animation = "none";
      meterFill.style.width = "100%";
      percentageEl.innerText = "100%";
      statusEl.innerText = "Scan 100% Complete! 🎉";
      this.playHeartbeatSound();

      if (this.modalEl) {
        this.modalEl.style.display = "flex";
      }
    };

    const startHolding = (e) => {
      e.preventDefault();
      if (this.hasCompleted) return;
      if (this.isHolding) return;

      this.isHolding = true;
      heartBtn.classList.add("holding");
      statusEl.innerText = "Scanning heartbeat & love signals... 💓";

      this.holdTimer = setInterval(() => {
        if (!this.isHolding) return;

        this.progress += 4;
        if (this.progress > 100) this.progress = 100;

        meterFill.style.width = `${this.progress}%`;
        percentageEl.innerText = `${Math.round(this.progress)}%`;

        if (Math.round(this.progress) % 20 === 0) {
          this.playHeartbeatSound();
        }

        if (this.progress >= 100) {
          completeScan();
        }
      }, 40);
    };

    const stopHolding = () => {
      if (this.hasCompleted) return;

      this.isHolding = false;
      heartBtn.classList.remove("holding");
      if (this.holdTimer) {
        clearInterval(this.holdTimer);
        this.holdTimer = null;
      }

      if (this.progress >= 90) {
        completeScan();
      } else {
        statusEl.innerText = "Touch released! Press and hold to finish scanning 💓";
      }
    };

    // Touch & mouse events
    heartBtn.addEventListener("mousedown", startHolding);
    heartBtn.addEventListener("mouseup", stopHolding);
    heartBtn.addEventListener("mouseleave", stopHolding);
    heartBtn.addEventListener("touchstart", startHolding, { passive: false });
    heartBtn.addEventListener("touchend", stopHolding);
    heartBtn.addEventListener("touchcancel", stopHolding);

    const finishStep = () => {
      this.cleanUpModal();
      if (this.onComplete) this.onComplete();
    };

    if (skipBtn) skipBtn.addEventListener("click", finishStep);
    if (continueBtn) continueBtn.addEventListener("click", finishStep);
  }
}
