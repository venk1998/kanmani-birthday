// Full-Screen Romantic Memory Gallery Component (With 3-Second Auto Slideshow)

export class MemoryGallery {
  constructor(containerEl, photos = [], onPlayVideo = null, onBackToFinale = null) {
    this.container = containerEl;
    this.photos = photos.length ? photos : [
      { url: "./images/IMG_8104 2.PNG", caption: "Your smile brightens up my whole world ✨" },
      { url: "./images/IMG_8110.PNG", caption: "My favorite place in the world is right next to you ❤️" },
      { url: "./images/IMG_8321.PNG", caption: "Every single moment with you is magic 🌸" },
      { url: "./images/IMG_8500.PNG", caption: "Holding your hand forever and ever 💕" },
      { url: "./images/IMG_8502.PNG", caption: "My heart beats only for my sweet Kanmanii 💓" },
      { url: "./images/IMG_9077.PNG", caption: "Sweet memories created together 🥰" },
      { url: "./images/IMG_9078.PNG", caption: "Forever grateful to have you in my life 🌟" },
      { url: "./images/IMG_9079.PNG", caption: "Happy Birthday my sweet princess! 🎂" }
    ];
    this.onPlayVideo = onPlayVideo;
    this.onBackToFinale = onBackToFinale;
    this.currentIndex = 0;
    this.autoPlayTimer = null;
  }

  render() {
    const currentPhoto = this.photos[this.currentIndex];

    this.container.innerHTML = `
      <div class="fullscreen-gallery-page">
        <!-- Full-Screen Transparent/Blurred Ambient Background -->
        <div class="gallery-bg-blur" id="galleryBgBlur" style="background-image: url('${currentPhoto.url}');"></div>
        <div class="gallery-bg-overlay"></div>

        <!-- Gallery Header Bar -->
        <header class="fullscreen-gallery-header">
          <button class="btn-secondary" id="backToFinaleBtn">
            ← Back to Finale 👑
          </button>
          <div class="gallery-header-badge">📸 Our Romantic Memories</div>
          <button class="btn-primary" id="galleryPlayVideoBtn">
            Play Final Video 🎬
          </button>
        </header>

        <!-- Main Display Stage -->
        <main class="fullscreen-gallery-stage">
          <button class="stage-nav-btn prev" id="galleryPrevBtn">❮</button>

          <div class="gallery-card-wrapper" id="galleryCardWrapper">
            <!-- Main Crisp Foreground Photo -->
            <div class="gallery-photo-frame">
              <img src="${currentPhoto.url}" alt="Kanmani & Venkatesha" id="galleryMainImg" />
              <div class="photo-counter-tag" id="galleryCounter">
                ${this.currentIndex + 1} / ${this.photos.length}
              </div>
            </div>

            <!-- Romantic Message Box -->
            <div class="romantic-message-box" id="galleryMessageBox">
              <div class="message-heart-icon">💖</div>
              <p class="romantic-caption-text" id="galleryCaptionText">
                ${currentPhoto.caption}
              </p>
            </div>
          </div>

          <button class="stage-nav-btn next" id="galleryNextBtn">❯</button>
        </main>

        <!-- Bottom Thumbnail Navigator -->
        <footer class="fullscreen-gallery-footer">
          <div class="thumbnail-strip">
            ${this.photos.map((p, idx) => `
              <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${p.url}" alt="Memory ${idx + 1}" />
              </div>
            `).join('')}
          </div>
        </footer>
      </div>
    `;

    this.bindEvents();
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.updateSlide(this.currentIndex + 1, false);
    }, 3000);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  updateSlide(newIndex, resetAutoPlayTimer = true) {
    if (newIndex < 0) newIndex = this.photos.length - 1;
    if (newIndex >= this.photos.length) newIndex = 0;

    this.currentIndex = newIndex;
    const photo = this.photos[this.currentIndex];

    const bgBlur = this.container.querySelector("#galleryBgBlur");
    const mainImg = this.container.querySelector("#galleryMainImg");
    const captionText = this.container.querySelector("#galleryCaptionText");
    const counterEl = this.container.querySelector("#galleryCounter");
    const cardWrapper = this.container.querySelector("#galleryCardWrapper");

    if (cardWrapper) {
      cardWrapper.style.opacity = "0.3";
      cardWrapper.style.transform = "scale(0.97)";

      setTimeout(() => {
        if (bgBlur) bgBlur.style.backgroundImage = `url('${photo.url}')`;
        if (mainImg) mainImg.src = photo.url;
        if (captionText) captionText.innerText = photo.caption;
        if (counterEl) counterEl.innerText = `${this.currentIndex + 1} / ${this.photos.length}`;

        cardWrapper.style.opacity = "1";
        cardWrapper.style.transform = "scale(1)";
      }, 200);
    }

    // Update thumbnail active status
    this.container.querySelectorAll(".thumb-item").forEach((thumb, idx) => {
      if (idx === this.currentIndex) thumb.classList.add("active");
      else thumb.classList.remove("active");
    });

    if (resetAutoPlayTimer) {
      this.startAutoPlay();
    }
  }

  bindEvents() {
    const prevBtn = this.container.querySelector("#galleryPrevBtn");
    const nextBtn = this.container.querySelector("#galleryNextBtn");
    const backBtn = this.container.querySelector("#backToFinaleBtn");
    const playVideoBtn = this.container.querySelector("#galleryPlayVideoBtn");
    const thumbs = this.container.querySelectorAll(".thumb-item");

    if (prevBtn) prevBtn.addEventListener("click", () => this.updateSlide(this.currentIndex - 1, true));
    if (nextBtn) nextBtn.addEventListener("click", () => this.updateSlide(this.currentIndex + 1, true));

    if (backBtn && this.onBackToFinale) {
      backBtn.addEventListener("click", () => {
        this.stopAutoPlay();
        this.onBackToFinale();
      });
    }

    if (playVideoBtn && this.onPlayVideo) {
      playVideoBtn.addEventListener("click", () => {
        this.stopAutoPlay();
        this.onPlayVideo();
      });
    }

    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = parseInt(thumb.getAttribute("data-index"));
        this.updateSlide(idx, true);
      });
    });

    // Keyboard arrow keys navigation
    const keyHandler = (e) => {
      if (e.key === "ArrowLeft") this.updateSlide(this.currentIndex - 1, true);
      if (e.key === "ArrowRight") this.updateSlide(this.currentIndex + 1, true);
    };
    window.addEventListener("keydown", keyHandler);
  }
}
