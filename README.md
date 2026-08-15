# 💖 Happy Birthday Kanmani - Interactive Surprise Website 🎂✨

A personalized, romantic, playful, and interactive birthday website created for **Kanmani's Birthday on August 15**. The website greets her with a romantic unboxing experience, guides her through a 4-puzzle interactive quest with an animated cute mascot host (**Mochi the Bear**), unlocks special video reward popups, and culminates in a grand birthday finale with heart fireworks, a romantic framed photo, love letter, and background music.

---

## 🌟 Key Features

### 💌 1. Romantic Welcome Screen
- **Unboxing Gift Envelope**: Clickable 3D sealed gift envelope with opening animation.
- **Ambient Canvas Particles**: Floating glowing pink heart particles and golden star dust.
- **Background Music (BGM)**: Audio player widget with an animated equalizer, volume control, and play/pause toggle.

### 🧸 2. Interactive Puzzle Quest (Mochi Mascot Host)
- **Expressive Host Mascot**: Animated kawaii bear host (*Mochi*) offering dialogs, celebratory reactions, and hints.
- **Puzzle 1: Memory Quiz 🌸** - Multiple-choice question about special shared memories.
- **Puzzle 2: Secret Date Lock 🔒** - Interactive combination keypad requiring her birthday date code (`1508`).
- **Puzzle 3: Cupid's Love Match 🃏** - Memory card matching mini-game with love tokens.
- **Puzzle 4: Secret Love Cipher 📜** - Word block arrangement puzzle forming `"YOU ARE MY EVERYTHING"`.

### 🎬 3. Video Rewards & Milestone Checkpoints
- **Intermediate Video Popup**: Triggers a video player modal after solving the puzzles.
- **Final Surprise Video**: Plays the main birthday celebration video at the finale.
- **File Uploader & Dropzone**: Easily drop or select `.mp4`/`.mov` videos directly inside the browser.

### 👑 4. Grand Birthday Finale
- **Fireworks & Confetti**: Dynamic particle fireworks burst across the screen.
- **Polaroid Photo Frame**: Framed romantic couple illustration with custom romantic caption.
- **Heartfelt Wishes**: Card list with sweet birthday messages.
- **Love Letter Accordion**: Interactive expandable love letter written specially for Kanmani.

### 🛠️ 5. Personalization Panel (Customizer Mode)
- Click the **"🛠️ Personalize Page"** button in the bottom left corner to customize:
  - Girlfriend's name & birthday date
  - Custom photo files (`.png`, `.jpg`) or image URLs
  - Video 1 & Video 2 files (`.mp4`)
  - Background music track (`.mp3`)
  - Saves automatically to `localStorage` so changes persist immediately!

---

## 📁 Project Structure

```
Kanmani Birthday/
├── index.html                # Main HTML layout & audio engine container
├── vite.config.js            # Vite configuration
├── package.json              # Project metadata & npm scripts
├── README.md                 # Project documentation
├── assets/                   # Public media assets (Mascot bear, couple photo, envelope)
│   ├── mascot_bear.png
│   ├── romantic_couple.png
│   └── gift_envelope.png
└── src/
    ├── main.js               # Main application coordinator & particle background engine
    ├── config/
    │   └── storyConfig.js    # Customizable story configuration (questions, answers, text)
    ├── styles/
    │   └── main.css          # Romantic glassmorphism design system & CSS animations
    └── components/
        ├── Mascot.js         # Mascot host speech bubble & reaction controller
        ├── Puzzles.js        # Puzzle game engines (Quiz, Keypad, Card Match, Cipher)
        ├── VideoModal.js     # Video overlay player component
        ├── Finale.js         # Grand Birthday Finale & Photo card component
        └── Customizer.js     # Live personalization modal panel
```

---

## 🚀 How to Run Locally

### Option 1: Using Python HTTP Server (Recommended - Instant & Zero Install)
1. Open Terminal in the project directory:
   ```bash
   cd "/Users/venkatesha/Desktop/Personal/Kanmani Birthday"
   ```
2. Start the local server:
   ```bash
   python3 -m http.server 3000
   ```
3. Open `http://localhost:3000` in your web browser!

---

### Option 2: Using Node / Vite (Optional)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your web browser.

---

## 🎨 How to Add Your Own Photos, Videos & Music

1. Open the website at `http://localhost:3000`.
2. Click **"🛠️ Personalize Page"** at the bottom-left corner of the screen.
3. Select your local photo (`.png`/`.jpg`), video files (`.mp4`), or audio file (`.mp3`).
4. Click **Save & Apply ✨** to instantly update the website!

---

*Crafted with ❤️ for Kanmani's Special Day!*
