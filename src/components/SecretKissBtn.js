// Secret Kiss / "Tap if u miss Aetaa" Persistent Widget Component

export class SecretKissWidget {
  constructor(containerEl, quotes = [], getMascotHost = () => null) {
    this.container = containerEl;
    this.quotes = quotes.length ? quotes : [
      "Stop looking so gorgeous, Aetaa's heart can't handle it! 🙈❤️",
      "Aetaa just felt 1,000 butterflies in his stomach! 🦋✨",
      "Sending you 1,000 forehead kisses right now! 😘",
      "Kanmanii, you are Aetaa's whole world forever and ever! 💖",
      "Did you know? Every time you smile, Aetaa blushes like crazy! 😳🌸"
    ];
    this.getMascotHost = getMascotHost;
    this.quoteIdx = 0;
  }

  render() {
    this.container.innerHTML = `
      <div class="secret-kiss-wrapper">
        <button class="secret-kiss-btn" id="secretKissFloatingBtn">
          <span class="kiss-icon">💋</span>
          <span class="kiss-label">Tap if u miss Aetaa</span>
        </button>

        <!-- Kiss Toast Popup -->
        <div class="kiss-toast-popup" id="kissToast" style="display:none;">
          <div class="toast-heart-badge">💋 Aetaa Sent A Kiss! 💋</div>
          <div class="toast-quote" id="kissToastQuote"></div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  triggerKissBurst(e) {
    const symbols = ["💋", "💖", "✨", "🥰", "🌸", "💘", "💋"];
    const count = 12;

    const startX = e ? e.clientX : window.innerWidth - 60;
    const startY = e ? e.clientY : window.innerHeight - 60;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "floating-kiss-particle";
      particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5);
      const velocity = Math.random() * 120 + 80;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 60;

      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1200);
    }
  }

  bindEvents() {
    const btn = this.container.querySelector("#secretKissFloatingBtn");
    const toast = this.container.querySelector("#kissToast");
    const toastQuote = this.container.querySelector("#kissToastQuote");

    if (!btn) return;

    btn.addEventListener("click", (e) => {
      // 1. Particle explosion
      this.triggerKissBurst(e);

      // 2. Rotate quote
      const quote = this.quotes[this.quoteIdx % this.quotes.length];
      this.quoteIdx++;
      toastQuote.innerText = quote;

      // 3. Show toast popup
      toast.style.display = "block";
      toast.classList.remove("fade-out");
      toast.classList.add("fade-in");

      setTimeout(() => {
        toast.classList.remove("fade-in");
        toast.classList.add("fade-out");
        setTimeout(() => {
          toast.style.display = "none";
        }, 300);
      }, 3200);

      // 4. Mascot blushing reaction
      const mascot = this.getMascotHost();
      if (mascot) {
        mascot.updateMessage(`Aetaa sent you a big sweet kiss! 😳💋 "${quote}"`, "bounce");
        // Trigger blush animation on mascot image
        const mascotImg = document.querySelector("#mascotImg");
        if (mascotImg) {
          mascotImg.classList.add("blushing-mascot");
          setTimeout(() => mascotImg.classList.remove("blushing-mascot"), 2500);
        }
      }
    });
  }
}
