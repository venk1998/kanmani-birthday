// Romantic Story & Birthday Configuration
// Venkatesha can easily customize these values in the UI or directly in this file!

export const defaultStoryConfig = {
  version: 10,
  girlfriendName: "Kanmani",
  birthdayDate: "August 15",
  birthdayYear: 2026,

  // Background Music Settings
  bgmUrl: "./music/Arikil_pathiye.mp3",
  bgmTitle: "Arikil Pathiye 🎵",

  // Media Files
  couplePhotoUrl: "./images/IMG_8104 2.PNG",
  photoCaption: "Every moment with you is like a beautiful dream come true... Happy Birthday my love! ❤️",

  // Videos (Intermediate milestone video & Final video)
  video1Url: "", // Video played after completing puzzles
  video1Title: "Our Sweet Moments Memory Video 🎬",
  video2Url: "https://youtu.be/oGuvr--YwBY", // Unlisted YouTube Birthday Surprise Video
  video2Title: "Special Birthday Surprise Video 💖",

  // Gallery Photos (All 28 photos from images folder)
  galleryPhotos: [
    { url: "./images/IMG_8104 2.PNG", caption: "Your smile brightens up my whole world ✨" },
    { url: "./images/IMG_8110.PNG", caption: "My favorite place in the world is right next to you ❤️" },
    { url: "./images/IMG_8321.PNG", caption: "Every single moment with you is magic 🌸" },
    { url: "./images/IMG_8500.PNG", caption: "Holding your hand forever and ever 💕" },
    { url: "./images/IMG_8502.PNG", caption: "My heart beats only for my sweet Kanmanii 💓" },
    { url: "./images/IMG_9077.PNG", caption: "Sweet memories created together 🥰" },
    { url: "./images/IMG_9078.PNG", caption: "Forever grateful to have you in my life 🌟" },
    { url: "./images/IMG_9079.PNG", caption: "Happy Birthday my sweet princess! 🎂" },
    { url: "./images/IMG_0107.PNG", caption: "Together is my absolute favorite place to be 💖" },
    { url: "./images/IMG_1688.jpg", caption: "You are my sunshine on the sweetest days ☀️" },
    { url: "./images/IMG_8047.jpg", caption: "Looking at you makes my heart skip a beat 💓" },
    { url: "./images/IMG_8574.jpg", caption: "Forever and always, my love 🥰" },
    { url: "./images/IMG_8597.jpg", caption: "You make every day feel like a fairytale ✨" },
    { url: "./images/IMG_9489.jpg", caption: "My heart belongs to you, Kanmani ❤️" },
    { url: "./images/IMG_9565.jpg", caption: "Pure happiness whenever I am with you 🌸" },
    { url: "./images/IMG_9566.jpg", caption: "Soulmates forever and ever 💕" },
    { url: "./images/IMG_9578.jpg", caption: "Endless love, warmth, and kisses for you 😘" },
    { url: "./images/1a843cea-7f74-42ab-bde3-b03506330cd3.JPG", caption: "Every memory with you is a priceless treasure 💎" },
    { url: "./images/29344f18-daa2-47d4-9be2-5a23ee19aa63.JPG", caption: "Smiling because of you every single day 😊" },
    { url: "./images/39f0c3fe-4895-4622-897f-6d087e649047.JPG", caption: "My biggest dream come true 🌟" },
    { url: "./images/4a52d3ae-7737-4026-b18c-7e00503b2b79.JPG", caption: "Sweetest moments crafted together 💖" },
    { url: "./images/63da3ddd-132c-4c00-ae8e-be137031b64a.JPG", caption: "You fill my life with vibrant colors 🎨" },
    { url: "./images/7bd6b5c3-86a3-49ef-b597-9520ea014b3e.JPG", caption: "Deeply, madly, unconditionally in love with you 🥰" },
    { url: "./images/94c007a4-43ab-4746-8fcf-bd9de2319206.JPG", caption: "In your arms is where I belong 💕" },
    { url: "./images/Untitled design.jpg", caption: "Crafted with all my love for Kanmani ✨" },
    { url: "./images/cc82f002-5a22-40b7-9040-b04e84cdbb69.JPG", caption: "Always and forever by your side ❤️" },
    { url: "./images/e7843a0b-5dbb-46c1-807e-dfdb0d897b05.JPG", caption: "You are my everything, my love 🌟" },
    { url: "./images/f69cbaaf-773d-49e4-8233-db74f019d83c.JPG", caption: "Kanmani & Aetaa forever 💕" }
  ],

  // Blush Quotes for Secret Kiss Button
  blushQuotes: [
    "Stop looking so gorgeous, Aetaa's heart can't handle it! 🙈❤️",
    "Aetaa just felt 1,000 butterflies in his stomach! 🦋✨",
    "Sending you 1,000 forehead kisses right now! 😘",
    "Kanmanii, you are Aetaa's whole world forever and ever! 💖",
    "Did you know? Every time you smile, Aetaa blushes like crazy! 😳🌸"
  ],

  // Welcome Screen Message
  welcomeMessage: {
    title: "A Surprise For My Dearest Kanmani 💖",
    subtitle: "August 15 is special because the most precious person was born today...",
    introText: "My sweetest Kanmani, I crafted this special journey just for you. Solve each cute puzzle to unlock secret messages, memories, and special videos made with all my love!",
    buttonText: "Begin Our Romantic Journey ✨"
  },

  // Puzzles Configuration
  puzzles: [
    {
      id: 1,
      type: "quiz",
      title: "Puzzle 1: Memory Quiz 🌸",
      question: "How do u want aetaa to call u",
      options: [
        "Chellam",
        "Ammu",
        "Kanmanii",
        "Harinima"
      ],
      correctIndex: 2,
      mascotIntro: "Hi Kanmani! I'm Mochi 🧸! Let's start with a sweet question. Can you pick the right answer?",
      mascotSuccess: "Yay! Kanmanii it is! You are aetaa's whole world! 🌟",
      mascotHint: "Hint: Aetaa loves calling you Kanmanii! 🥰"
    },
    {
      id: 2,
      type: "keypad",
      title: "Puzzle 2: The Secret Time Lock 🔒",
      question: "Enter our secret time code (first msg time & a spl time ⏰):",
      correctCode: "0646",
      mascotIntro: "Oooh a secret romantic keypad! Do you remember our special first msg time? (06:46) 🔑",
      mascotSuccess: "Unlocked! Your heart holds the master key to mine! 💖",
      mascotHint: "Hint: Enter 0646 (our special first msg time 06:46)! ⏰"
    },
    {
      id: 3,
      type: "cardMatch",
      title: "Puzzle 3: Cupid's Love Match 🃏",
      question: "Match all the pairs of sweet hearts & love tokens!",
      mascotIntro: "Time for a fun game! Flip the cute cards and find all matching pairs! 🎀",
      mascotSuccess: "Super job! We are the perfect match forever and ever! 💞",
      mascotHint: "Take your time and match the matching symbols!"
    },
    {
      id: 4,
      type: "cipher",
      title: "Puzzle 4: The Unscramble Love Secret 📜",
      question: "Unscramble the secret message to complete your puzzle quest!",
      scrambledWords: ["LUBBB", "KANMANI", "UUU", "I"],
      correctAnswer: "KANMANI I LUBBB UUU",
      mascotIntro: "The last secret puzzle! Click the word blocks in the correct order to reveal my promise! ✨",
      mascotSuccess: "Awww! Kanmani I lubbb uuu too! You solved all the puzzles! Get ready for your special video reward! 🎉",
      mascotHint: "Hint: Click 'KANMANI' → 'I' → 'LUBBB' → 'UUU'!"
    }
  ],

  // Birthday Finale Wishes
  finale: {
    birthdayTitle: "Happy Birthday, My Beloved Chella Kanmani! 🎂🎉",
    romanticWishes: [
      "To the girl who fills my life with endless smiles, warmth, and magic...",
      "On your birthday, I want to remind you how deeply loved and cherished you are.",
      "May your day be filled with laughter, cute surprises, sweet treats, and all the happiness in the world!",
      "Thank you for being my soulmate, my best friend, and my home. I love you endlessly! ❤️"
    ],
    loveLetter: `Dearest Kanmani,

From the moment you walked into my life, every single day has been brighter and happier. Your laughter is my favorite melody, your smile is my favorite sunshine, and your happiness means the world to me.

I created this interactive page because baki ela plans um sodhapidichu ith mattum than enak theriyum.😬 Thank you for being you, for your kindness, your sweet hugs, and your wonderful spirit.

Happy Birthday, my sweet princess! Here's to forever together!

Forever yours,
Aetaaa 💕`
  }
};

export function getStoryConfig() {
  const saved = localStorage.getItem("kanmani_birthday_config");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.version === defaultStoryConfig.version) {
        return parsed;
      }
    } catch (e) {
      console.error("Failed to parse saved config", e);
    }
  }
  // Clear obsolete cache so new defaults take effect immediately
  localStorage.removeItem("kanmani_birthday_config");
  return defaultStoryConfig;
}

export function saveStoryConfig(config) {
  config.version = defaultStoryConfig.version;
  localStorage.setItem("kanmani_birthday_config", JSON.stringify(config));
}
