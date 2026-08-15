// Cute Mascot Host Component (Mochi the Love Bear)

export class MascotHost {
  constructor(containerEl) {
    this.container = containerEl;
    this.currentText = "";
  }

  render(message, mascotImage = "./assets/mascot_bear.png") {
    this.currentText = message;
    this.container.innerHTML = `
      <div class="mascot-container">
        <div class="mascot-avatar">
          <img src="${mascotImage}" alt="Mochi the Mascot" id="mascotImg" />
        </div>
        <div class="speech-bubble" id="mascotBubble">
          ${message}
        </div>
      </div>
    `;
  }

  updateMessage(newMessage, animateReaction = "bounce") {
    const bubble = this.container.querySelector("#mascotBubble");
    const img = this.container.querySelector("#mascotImg");
    
    if (bubble) {
      bubble.style.opacity = "0";
      setTimeout(() => {
        bubble.innerText = newMessage;
        bubble.style.opacity = "1";
      }, 150);
    }

    if (img && animateReaction) {
      img.style.animation = "none";
      img.offsetHeight; // trigger reflow
      if (animateReaction === "bounce") {
        img.style.animation = "floatBounce 0.6s ease 2";
      } else if (animateReaction === "wiggle") {
        img.style.animation = "mascotWiggle 0.5s ease 2";
      }
    }
  }
}
