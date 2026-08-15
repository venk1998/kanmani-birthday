// Main Application Controller

import { getStoryConfig, saveStoryConfig } from './config/storyConfig.js';
import { MascotHost } from './components/Mascot.js';
import { PuzzleManager } from './components/Puzzles.js';
import { VideoModal } from './components/VideoModal.js';
import { FinaleScreen } from './components/Finale.js';
import { CustomizerModal } from './components/Customizer.js';
import { BlushMeter } from './components/BlushMeter.js';
import { SecretKissWidget } from './components/SecretKissBtn.js';
import { MemoryGallery } from './components/MemoryGallery.js';

class BirthdayApp {
  constructor() {
    this.config = getStoryConfig();
    this.appEl = document.getElementById("app");
    this.audioEl = document.getElementById("bgmAudio");
    this.musicBtn = document.getElementById("musicToggleBtn");
    this.videoContainer = document.getElementById("videoModalContainer");
    this.customizerContainer = document.getElementById("customizerContainer");

    this.isPlayingMusic = false;
    this.currentScreen = "WELCOME"; // WELCOME | BLUSH_METER | PUZZLE | FINALE

    this.mascotHost = null;
    this.puzzleManager = null;
    this.videoModal = null;
    this.customizerModal = null;
    this.kissWidget = null;

    this.init();
  }

  init() {
    this.initCanvasBackground();
    this.initAudioEngine();
    this.initVideoModal();
    this.initCustomizer();
    this.initSecretKissWidget();
    this.renderCurrentScreen();
  }

  initSecretKissWidget() {
    let kissContainer = document.getElementById("secretKissContainer");
    if (!kissContainer) {
      kissContainer = document.createElement("div");
      kissContainer.id = "secretKissContainer";
      document.body.appendChild(kissContainer);
    }
    this.kissWidget = new SecretKissWidget(
      kissContainer,
      this.config.blushQuotes,
      () => this.mascotHost
    );
    this.kissWidget.render();
  }

  // --- 1. Background Particle Engine ---
  initCanvasBackground() {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const numParticles = 40;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 8 + 4,
        speedY: Math.random() * 0.8 + 0.3,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 1.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.3,
        type: Math.random() > 0.4 ? "heart" : "star"
      });
    }

    const drawHeart = (x, y, size, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#ff7895";
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      // bottom left curve
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
      // bottom right curve
      ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      // top right curve
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawStar = (x, y, radius, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#ffd700";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.angle += p.swaySpeed;
        p.x += Math.sin(p.angle) * p.swayAmplitude;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        if (p.type === "heart") {
          drawHeart(p.x, p.y, p.radius * 1.5, p.opacity);
        } else {
          drawStar(p.x, p.y, p.radius * 0.5, p.opacity);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  // --- 2. Audio Engine ---
  initAudioEngine() {
    if (this.config.bgmUrl) {
      this.audioEl.src = this.config.bgmUrl;
      this.audioEl.volume = 0.5;
    }

    this.musicBtn.addEventListener("click", () => {
      this.toggleMusic();
    });

    // Try auto-play on first click anywhere
    const firstUserTouch = () => {
      if (!this.isPlayingMusic) {
        this.playMusic();
      }
      window.removeEventListener("click", firstUserTouch);
      window.removeEventListener("touchstart", firstUserTouch);
    };
    window.addEventListener("click", firstUserTouch);
    window.addEventListener("touchstart", firstUserTouch);
  }

  playMusic() {
    if (!this.audioEl.src) return;
    this.audioEl.play().then(() => {
      this.isPlayingMusic = true;
      this.musicBtn.querySelector("span").innerText = "🎵 BGM: On";
      this.musicBtn.style.opacity = "1";
    }).catch(e => {
      console.log("Autoplay waiting for user gesture", e);
    });
  }

  pauseMusic() {
    this.audioEl.pause();
    this.isPlayingMusic = false;
    this.musicBtn.querySelector("span").innerText = "🔇 BGM: Off";
    this.musicBtn.style.opacity = "0.7";
  }

  toggleMusic() {
    if (this.isPlayingMusic) this.pauseMusic();
    else this.playMusic();
  }

  // --- 3. Video Modal & Customizer ---
  initVideoModal() {
    this.videoModal = new VideoModal(this.videoContainer);
  }

  initCustomizer() {
    this.customizerModal = new CustomizerModal(this.customizerContainer, this.config, (updatedConfig) => {
      this.config = updatedConfig;
      saveStoryConfig(updatedConfig);
      if (this.config.bgmUrl && this.audioEl.src !== this.config.bgmUrl) {
        this.audioEl.src = this.config.bgmUrl;
        if (this.isPlayingMusic) this.audioEl.play();
      }
      this.renderCurrentScreen();
    });
    this.customizerModal.renderTrigger();
  }

  // --- 4. Navigation & Screen Rendering ---
  renderCurrentScreen() {
    if (this.currentScreen === "WELCOME") {
      this.renderWelcomeScreen();
    } else if (this.currentScreen === "BLUSH_METER") {
      this.renderBlushMeterScreen();
    } else if (this.currentScreen === "PUZZLE") {
      this.renderPuzzleScreen();
    } else if (this.currentScreen === "FINALE") {
      this.renderFinaleScreen();
    } else if (this.currentScreen === "GALLERY") {
      this.renderGalleryScreen();
    }
  }

  // --- Welcome Screen ---
  renderWelcomeScreen() {
    const welcome = this.config.welcomeMessage;
    this.appEl.innerHTML = `
      <div class="screen-container">
        <div class="welcome-card">
          <div style="font-size:3rem; margin-bottom:10px;">🌸 💌 🌸</div>
          <h1 class="welcome-title">${welcome.title}</h1>
          <p class="welcome-subtitle">${welcome.subtitle}</p>

          <div class="envelope-wrapper" id="envelopeBtn">
            <img src="./assets/gift_envelope.png" alt="Sealed Gift Envelope" class="envelope-img" />
          </div>

          <p style="font-size:1.1rem; line-height:1.6; color:#ffd7ee; margin-top:20px;">
            ${welcome.introText}
          </p>

          <button class="btn-primary" id="startQuestBtn">
            ${welcome.buttonText}
          </button>
        </div>
      </div>
    `;

    const startBtn = this.appEl.querySelector("#startQuestBtn");
    const envBtn = this.appEl.querySelector("#envelopeBtn");

    const beginJourney = () => {
      this.currentScreen = "BLUSH_METER";
      this.renderCurrentScreen();
    };

    if (startBtn) startBtn.addEventListener("click", beginJourney);
    if (envBtn) envBtn.addEventListener("click", beginJourney);
  }

  // --- Heartbeat & Blush-O-Meter Screen ---
  renderBlushMeterScreen() {
    const blushMeter = new BlushMeter(this.appEl, () => {
      this.currentScreen = "PUZZLE";
      this.renderCurrentScreen();
    });
    blushMeter.render();
  }

  // --- Guided Puzzle Screen ---
  renderPuzzleScreen() {
    this.appEl.innerHTML = `
      <div class="screen-container">
        <div id="mascotWrapper" style="width:100%;"></div>
        <div id="puzzleWrapper" style="width:100%;"></div>
      </div>
    `;

    const mascotWrapper = this.appEl.querySelector("#mascotWrapper");
    const puzzleWrapper = this.appEl.querySelector("#puzzleWrapper");

    this.mascotHost = new MascotHost(mascotWrapper);
    this.mascotHost.render("Welcome to your puzzle quest!", "./assets/mascot_bear.png");

    this.puzzleManager = new PuzzleManager(
      puzzleWrapper,
      this.config.puzzles,
      (allDone) => {
        if (allDone) {
          if (this.config.video1Url) {
            this.pauseMusic();
            this.videoModal.show(
              this.config.video1Title || "Milestone Reward Video 🎬",
              this.config.video1Url,
              "You unlocked all the puzzles! Enjoy your special memory video reward before the grand finale! ✨",
              () => {
                this.currentScreen = "FINALE";
                this.renderCurrentScreen();
              }
            );
          } else {
            this.currentScreen = "FINALE";
            this.renderCurrentScreen();
          }
        }
      },
      this.mascotHost
    );

    this.puzzleManager.renderCurrentPuzzle();
  }

  // --- Grand Finale Screen ---
  renderFinaleScreen() {
    this.triggerFireworks();

    const finale = new FinaleScreen(
      this.appEl,
      this.config.finale,
      this.config.couplePhotoUrl,
      this.config.photoCaption,
      () => {
        // Play final video & auto turn off BGM
        this.pauseMusic();
        this.videoModal.show(
          this.config.video2Title || "Grand Birthday Celebration Video 💖",
          this.config.video2Url,
          "Happy Birthday Kanmani! Here is your final birthday surprise video! 🎬🎉",
          () => {
            // Auto resume BGM when video is closed
            this.playMusic();
          }
        );
      },
      () => {
        // Replay
        this.currentScreen = "PUZZLE";
        this.renderCurrentScreen();
      },
      () => {
        // Open Full-Screen Romantic Gallery
        this.currentScreen = "GALLERY";
        this.renderCurrentScreen();
      }
    );

    finale.render();
  }

  // --- Full-Screen Romantic Gallery Page ---
  renderGalleryScreen() {
    const gallery = new MemoryGallery(
      this.appEl,
      this.config.galleryPhotos || [],
      () => {
        // Play final video & auto turn off BGM
        this.pauseMusic();
        this.videoModal.show(
          this.config.video2Title || "Grand Birthday Celebration Video 💖",
          this.config.video2Url,
          "Happy Birthday Kanmani! Here is your final birthday surprise video! 🎬🎉",
          () => {
            // Auto resume BGM when video is closed
            this.playMusic();
          }
        );
      },
      () => {
        // Back to Finale
        this.currentScreen = "FINALE";
        this.renderCurrentScreen();
      }
    );
    gallery.render();
  }

  // --- Custom Canvas Confetti & Fireworks ---
  triggerFireworks() {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const confettiParticles = [];
    const colors = ["#ff6584", "#ffd700", "#ffffff", "#e8a598", "#aa336a", "#4cd964"];

    for (let i = 0; i < 150; i++) {
      confettiParticles.push({
        x: width / 2,
        y: height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        opacity: 1
      });
    }

    const runConfetti = () => {
      let active = false;
      confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2; // gravity
        p.rotation += p.vRot;
        p.opacity -= 0.008;

        if (p.opacity > 0) {
          active = true;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (active) requestAnimationFrame(runConfetti);
    };

    runConfetti();
  }
}

// Start App when DOM ready
document.addEventListener("DOMContentLoaded", () => {
  new BirthdayApp();
});
