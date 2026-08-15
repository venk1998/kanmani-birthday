export class FinaleScreen {
  constructor(containerEl, finaleData, couplePhotoUrl, photoCaption, onPlayFinalVideo, onReplay, onOpenGallery) {
    this.container = containerEl;
    this.finaleData = finaleData;
    this.couplePhotoUrl = couplePhotoUrl || "./images/IMG_8104 2.PNG";
    this.photoCaption = photoCaption || "Happy Birthday My Love! ❤️";
    this.onPlayFinalVideo = onPlayFinalVideo;
    this.onReplay = onReplay;
    this.onOpenGallery = onOpenGallery;
  }

  render() {
    const wishesHtml = (this.finaleData.romanticWishes || []).map(w => `
      <div class="wish-item">
        <span>💖 ${w}</span>
      </div>
    `).join('');

    this.container.innerHTML = `
      <div class="screen-container">
        <div class="finale-card">
          <div style="font-size:3rem; margin-bottom:5px;">👑 ✨ 🎂 ✨ 👑</div>
          <h1 class="birthday-banner">${this.finaleData.birthdayTitle}</h1>
          <p style="font-size:1.2rem; color:var(--text-muted); margin-bottom:25px;">
            You have unlocked all the sweet surprises!
          </p>

          <!-- Romantic Framed Polaroid Photo -->
          <div class="photo-frame-wrapper">
            <img src="${this.couplePhotoUrl}" alt="Kanmani & Venkatesha" id="finalePhotoImg" />
            <div class="photo-caption">${this.photoCaption}</div>
          </div>

          <!-- Romantic Wishes -->
          <div class="wishes-list">
            ${wishesHtml}
          </div>

          <!-- Interactive Love Letter -->
          <div class="love-letter-accordion">
            <div class="accordion-header" id="letterHeader">
              <span>💌 Read My Special Love Letter For You</span>
              <span id="accordionArrow">▼</span>
            </div>
            <div class="accordion-content" id="letterContent" style="display:none;">
              ${this.finaleData.loveLetter}
            </div>
          </div>

          <!-- Actions -->
          <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:15px; margin-top:35px;">
            <button class="btn-primary" id="openGalleryBtn" style="background: linear-gradient(135deg, #ff4071, #9b27b0); box-shadow: 0 0 20px rgba(155, 39, 176, 0.6);">
              Explore Our Romantic Photo Memories 📸
            </button>
            <button class="btn-primary" id="playFinalVideoBtn">
              Play Final Birthday Surprise Video 🎬
            </button>
            <button class="btn-secondary" id="replayGameBtn">
              Replay Journey 🔄
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Accordion toggle
    const header = this.container.querySelector("#letterHeader");
    const content = this.container.querySelector("#letterContent");
    const arrow = this.container.querySelector("#accordionArrow");

    if (header && content) {
      header.addEventListener("click", () => {
        const isHidden = content.style.display === "none";
        content.style.display = isHidden ? "block" : "none";
        arrow.innerText = isHidden ? "▲" : "▼";
      });
    }

    // Open Gallery button
    const openGalleryBtn = this.container.querySelector("#openGalleryBtn");
    if (openGalleryBtn && this.onOpenGallery) {
      openGalleryBtn.addEventListener("click", () => this.onOpenGallery());
    }

    // Final video button
    const finalVideoBtn = this.container.querySelector("#playFinalVideoBtn");
    if (finalVideoBtn && this.onPlayFinalVideo) {
      finalVideoBtn.addEventListener("click", () => this.onPlayFinalVideo());
    }

    // Replay button
    const replayBtn = this.container.querySelector("#replayGameBtn");
    if (replayBtn && this.onReplay) {
      replayBtn.addEventListener("click", () => this.onReplay());
    }
  }
}
