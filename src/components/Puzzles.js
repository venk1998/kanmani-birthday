// Interactive Puzzles Component Engine

export class PuzzleManager {
  constructor(containerEl, puzzles, onPuzzleComplete, mascotHost) {
    this.container = containerEl;
    this.puzzles = puzzles;
    this.currentStep = 0;
    this.onPuzzleComplete = onPuzzleComplete;
    this.mascotHost = mascotHost;

    // Puzzle State
    this.keypadCode = "";
    this.cardState = { flipped: [], matched: [] };
    this.cipherSelection = [];
  }

  renderCurrentPuzzle() {
    const puzzle = this.puzzles[this.currentStep];
    if (!puzzle) {
      this.onPuzzleComplete(true);
      return;
    }

    // Update Mascot Message
    if (this.mascotHost) {
      this.mascotHost.updateMessage(puzzle.mascotIntro, "bounce");
    }

    let innerContent = "";
    if (puzzle.type === "quiz") {
      innerContent = this.renderQuiz(puzzle);
    } else if (puzzle.type === "keypad") {
      innerContent = this.renderKeypad(puzzle);
    } else if (puzzle.type === "cardMatch") {
      innerContent = this.renderCardMatch(puzzle);
    } else if (puzzle.type === "cipher") {
      innerContent = this.renderCipher(puzzle);
    }

    const totalSteps = this.puzzles.length;
    let dotsHtml = "";
    for (let i = 0; i < totalSteps; i++) {
      let cls = "step-dot";
      if (i < this.currentStep) cls += " completed";
      else if (i === this.currentStep) cls += " active";
      dotsHtml += `<div class="${cls}">${i < this.currentStep ? "✓" : i + 1}</div>`;
    }

    this.container.innerHTML = `
      <div class="puzzle-card">
        <div class="puzzle-progress">${dotsHtml}</div>
        <h2 class="puzzle-title">${puzzle.title}</h2>
        <p class="puzzle-question">${puzzle.question}</p>
        ${innerContent}
        <div style="text-align:center; margin-top:20px;">
          <button class="btn-secondary" id="hintBtn" style="font-size:0.9rem; padding:8px 16px;">💡 Need a Hint?</button>
        </div>
      </div>
    `;

    this.bindEvents(puzzle);
  }

  // --- Puzzle 1: Quiz ---
  renderQuiz(puzzle) {
    return `
      <div class="options-grid">
        ${puzzle.options.map((opt, idx) => `
          <button class="option-btn" data-index="${idx}">
            <span>${opt}</span>
            <span class="opt-icon">✨</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  // --- Puzzle 2: Combination Keypad Lock ---
  renderKeypad(puzzle) {
    this.keypadCode = "";
    return `
      <div class="keypad-display" id="keypadDisplay">
        <div class="pin-digit" id="digit0">-</div>
        <div class="pin-digit" id="digit1">-</div>
        <div class="pin-digit" id="digit2">-</div>
        <div class="pin-digit" id="digit3">-</div>
      </div>
      <div class="keypad-grid">
        ${['1','2','3','4','5','6','7','8','9','C','0','⌫'].map(k => `
          <button class="key-btn" data-key="${k}">${k}</button>
        `).join('')}
      </div>
    `;
  }

  // --- Puzzle 3: Card Match ---
  renderCardMatch(puzzle) {
    const icons = ['💖', '🎁', '👑', '🧸', '💖', '🎁', '👑', '🧸'];
    // Shuffle cards deterministically or dynamically
    if (!this.shuffledCards) {
      this.shuffledCards = [...icons].sort(() => Math.random() - 0.5);
    }
    this.cardState = { flipped: [], matched: [] };

    return `
      <div class="cards-grid">
        ${this.shuffledCards.map((icon, idx) => `
          <div class="memory-card" data-card-index="${idx}" data-icon="${icon}">
            <span class="card-back">❓</span>
            <span class="card-front" style="display:none;">${icon}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --- Puzzle 4: Love Cipher ---
  renderCipher(puzzle) {
    this.cipherSelection = [];
    const words = puzzle.scrambledWords || ["LUBBB", "KANMANI", "UUU", "I"];

    return `
      <div class="cipher-board">
        <div style="font-size:1.3rem; font-family:var(--font-cute); min-height:40px; color:var(--accent-gold); letter-spacing:1px;" id="cipherSentence">
          Click the word blocks in the right order...
        </div>
        <div class="word-slots">
          ${words.map((w, idx) => `
            <div class="word-chip" data-word="${w}" data-idx="${idx}">${w}</div>
          `).join('')}
        </div>
        <div style="display:flex; gap:12px; margin-top:15px; flex-wrap:wrap; justify-content:center;">
          <button class="btn-primary" id="checkCipherBtn" style="font-size:1rem; padding:10px 24px;">Verify Cipher 🔓</button>
          <button class="btn-secondary" id="resetCipherBtn" style="font-size:0.9rem; padding:8px 16px;">Reset 🔄</button>
        </div>
      </div>
    `;
  }

  bindEvents(puzzle) {
    // Hint button click
    const hintBtn = this.container.querySelector("#hintBtn");
    if (hintBtn) {
      hintBtn.addEventListener("click", () => {
        if (this.mascotHost) {
          this.mascotHost.updateMessage(puzzle.mascotHint || "You can do it!", "wiggle");
        }
      });
    }

    // Quiz events
    if (puzzle.type === "quiz") {
      this.container.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const idx = parseInt(btn.getAttribute("data-index"));
          if (idx === puzzle.correctIndex) {
            btn.classList.add("correct");
            if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotSuccess, "bounce");
            setTimeout(() => this.nextPuzzle(), 1200);
          } else {
            btn.classList.add("wrong");
            if (this.mascotHost) this.mascotHost.updateMessage("Oopsie! Give it another try sweetie! 💕", "wiggle");
            setTimeout(() => btn.classList.remove("wrong"), 800);
          }
        });
      });
    }

    // Keypad events
    if (puzzle.type === "keypad") {
      this.container.querySelectorAll(".key-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-key");
          if (key === "C") {
            this.keypadCode = "";
          } else if (key === "⌫") {
            this.keypadCode = this.keypadCode.slice(0, -1);
          } else if (this.keypadCode.length < 4) {
            this.keypadCode += key;
          }

          this.updateKeypadDisplay();

          if (this.keypadCode.length === 4) {
            if (this.keypadCode === puzzle.correctCode) {
              if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotSuccess, "bounce");
              setTimeout(() => this.nextPuzzle(), 1200);
            } else {
              if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotHint || "Incorrect code! Try again 🔑", "wiggle");
              setTimeout(() => {
                this.keypadCode = "";
                this.updateKeypadDisplay();
              }, 1000);
            }
          }
        });
      });
    }

    // Card Match events
    if (puzzle.type === "cardMatch") {
      this.container.querySelectorAll(".memory-card").forEach(card => {
        card.addEventListener("click", () => {
          const idx = card.getAttribute("data-card-index");
          if (this.cardState.flipped.includes(idx) || this.cardState.matched.includes(idx) || this.cardState.flipped.length >= 2) return;

          // Flip card
          card.classList.add("flipped");
          card.querySelector(".card-back").style.display = "none";
          card.querySelector(".card-front").style.display = "inline";
          this.cardState.flipped.push(idx);

          if (this.cardState.flipped.length === 2) {
            const [idx1, idx2] = this.cardState.flipped;
            const card1 = this.container.querySelector(`[data-card-index="${idx1}"]`);
            const card2 = this.container.querySelector(`[data-card-index="${idx2}"]`);

            if (card1.getAttribute("data-icon") === card2.getAttribute("data-icon")) {
              // Match!
              card1.classList.add("matched");
              card2.classList.add("matched");
              this.cardState.matched.push(idx1, idx2);
              this.cardState.flipped = [];

              if (this.cardState.matched.length === this.shuffledCards.length) {
                if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotSuccess, "bounce");
                setTimeout(() => this.nextPuzzle(), 1200);
              }
            } else {
              // No match
              setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1.querySelector(".card-back").style.display = "inline";
                card1.querySelector(".card-front").style.display = "none";
                card2.querySelector(".card-back").style.display = "inline";
                card2.querySelector(".card-front").style.display = "none";
                this.cardState.flipped = [];
              }, 900);
            }
          }
        });
      });
    }

    // Cipher events
    if (puzzle.type === "cipher") {
      const chips = this.container.querySelectorAll(".word-chip");
      const display = this.container.querySelector("#cipherSentence");
      const checkBtn = this.container.querySelector("#checkCipherBtn");
      const resetBtn = this.container.querySelector("#resetCipherBtn");

      const updateDisplay = () => {
        if (this.cipherSelection.length > 0) {
          display.innerText = this.cipherSelection.map(item => item.word).join(" ");
        } else {
          display.innerText = "Click the word blocks in the right order...";
        }
      };

      chips.forEach(chip => {
        chip.addEventListener("click", () => {
          const word = chip.getAttribute("data-word");
          const idx = chip.getAttribute("data-idx");

          const existingIndex = this.cipherSelection.findIndex(item => item.idx === idx);
          if (existingIndex !== -1) {
            chip.classList.remove("selected");
            this.cipherSelection.splice(existingIndex, 1);
          } else {
            chip.classList.add("selected");
            this.cipherSelection.push({ idx, word });
          }
          updateDisplay();
        });
      });

      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          this.cipherSelection = [];
          chips.forEach(c => c.classList.remove("selected"));
          updateDisplay();
        });
      }

      checkBtn.addEventListener("click", () => {
        const formed = this.cipherSelection.map(item => item.word).join(" ").trim();
        const target = puzzle.correctAnswer.trim();

        if (formed.toUpperCase() === target.toUpperCase()) {
          if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotSuccess, "bounce");
          setTimeout(() => this.nextPuzzle(), 1200);
        } else {
          if (this.mascotHost) this.mascotHost.updateMessage(puzzle.mascotHint || "Not quite! Try again 💕", "wiggle");
        }
      });
    }
  }

  updateKeypadDisplay() {
    for (let i = 0; i < 4; i++) {
      const digitEl = this.container.querySelector(`#digit${i}`);
      if (digitEl) {
        digitEl.innerText = this.keypadCode[i] || "-";
      }
    }
  }

  nextPuzzle() {
    this.currentStep++;
    if (this.currentStep < this.puzzles.length) {
      this.renderCurrentPuzzle();
    } else {
      this.onPuzzleComplete(true);
    }
  }
}
