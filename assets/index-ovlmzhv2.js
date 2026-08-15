(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const y={version:10,girlfriendName:"Kanmani",birthdayDate:"August 15",birthdayYear:2026,bgmUrl:"./music/Arikil_pathiye.mp3",bgmTitle:"Arikil Pathiye 🎵",couplePhotoUrl:"./images/IMG_8104 2.PNG",photoCaption:"Every moment with you is like a beautiful dream come true... Happy Birthday my love! ❤️",video1Url:"",video1Title:"Our Sweet Moments Memory Video 🎬",video2Url:"https://youtu.be/oGuvr--YwBY",video2Title:"Special Birthday Surprise Video 💖",galleryPhotos:[{url:"./images/IMG_8104 2.PNG",caption:"Your smile brightens up my whole world ✨"},{url:"./images/IMG_8110.PNG",caption:"My favorite place in the world is right next to you ❤️"},{url:"./images/IMG_8321.PNG",caption:"Every single moment with you is magic 🌸"},{url:"./images/IMG_8500.PNG",caption:"Holding your hand forever and ever 💕"},{url:"./images/IMG_8502.PNG",caption:"My heart beats only for my sweet Kanmanii 💓"},{url:"./images/IMG_9077.PNG",caption:"Sweet memories created together 🥰"},{url:"./images/IMG_9078.PNG",caption:"Forever grateful to have you in my life 🌟"},{url:"./images/IMG_9079.PNG",caption:"Happy Birthday my sweet princess! 🎂"},{url:"./images/IMG_0107.PNG",caption:"Together is my absolute favorite place to be 💖"},{url:"./images/IMG_1688.jpg",caption:"You are my sunshine on the sweetest days ☀️"},{url:"./images/IMG_8047.jpg",caption:"Looking at you makes my heart skip a beat 💓"},{url:"./images/IMG_8574.jpg",caption:"Forever and always, my love 🥰"},{url:"./images/IMG_8597.jpg",caption:"You make every day feel like a fairytale ✨"},{url:"./images/IMG_9489.jpg",caption:"My heart belongs to you, Kanmani ❤️"},{url:"./images/IMG_9565.jpg",caption:"Pure happiness whenever I am with you 🌸"},{url:"./images/IMG_9566.jpg",caption:"Soulmates forever and ever 💕"},{url:"./images/IMG_9578.jpg",caption:"Endless love, warmth, and kisses for you 😘"},{url:"./images/1a843cea-7f74-42ab-bde3-b03506330cd3.JPG",caption:"Every memory with you is a priceless treasure 💎"},{url:"./images/29344f18-daa2-47d4-9be2-5a23ee19aa63.JPG",caption:"Smiling because of you every single day 😊"},{url:"./images/39f0c3fe-4895-4622-897f-6d087e649047.JPG",caption:"My biggest dream come true 🌟"},{url:"./images/4a52d3ae-7737-4026-b18c-7e00503b2b79.JPG",caption:"Sweetest moments crafted together 💖"},{url:"./images/63da3ddd-132c-4c00-ae8e-be137031b64a.JPG",caption:"You fill my life with vibrant colors 🎨"},{url:"./images/7bd6b5c3-86a3-49ef-b597-9520ea014b3e.JPG",caption:"Deeply, madly, unconditionally in love with you 🥰"},{url:"./images/94c007a4-43ab-4746-8fcf-bd9de2319206.JPG",caption:"In your arms is where I belong 💕"},{url:"./images/Untitled design.jpg",caption:"Crafted with all my love for Kanmani ✨"},{url:"./images/cc82f002-5a22-40b7-9040-b04e84cdbb69.JPG",caption:"Always and forever by your side ❤️"},{url:"./images/e7843a0b-5dbb-46c1-807e-dfdb0d897b05.JPG",caption:"You are my everything, my love 🌟"},{url:"./images/f69cbaaf-773d-49e4-8233-db74f019d83c.JPG",caption:"Kanmani & Aetaa forever 💕"}],blushQuotes:["Stop looking so gorgeous, Aetaa's heart can't handle it! 🙈❤️","Aetaa just felt 1,000 butterflies in his stomach! 🦋✨","Sending you 1,000 forehead kisses right now! 😘","Kanmanii, you are Aetaa's whole world forever and ever! 💖","Did you know? Every time you smile, Aetaa blushes like crazy! 😳🌸"],welcomeMessage:{title:"A Surprise For My Dearest Kanmani 💖",subtitle:"August 15 is special because the most precious person was born today...",introText:"My sweetest Kanmani, I crafted this special journey just for you. Solve each cute puzzle to unlock secret messages, memories, and special videos made with all my love!",buttonText:"Begin Our Romantic Journey ✨"},puzzles:[{id:1,type:"quiz",title:"Puzzle 1: Memory Quiz 🌸",question:"How do u want aetaa to call u",options:["Chellam","Ammu","Kanmanii","Harinima"],correctIndex:2,mascotIntro:"Hi Kanmani! I'm Mochi 🧸! Let's start with a sweet question. Can you pick the right answer?",mascotSuccess:"Yay! Kanmanii it is! You are aetaa's whole world! 🌟",mascotHint:"Hint: Aetaa loves calling you Kanmanii! 🥰"},{id:2,type:"keypad",title:"Puzzle 2: The Secret Time Lock 🔒",question:"Enter our secret time code (first msg time & a spl time ⏰):",correctCode:"0646",mascotIntro:"Oooh a secret romantic keypad! Do you remember our special first msg time? (06:46) 🔑",mascotSuccess:"Unlocked! Your heart holds the master key to mine! 💖",mascotHint:"Hint: Enter 0646 (our special first msg time 06:46)! ⏰"},{id:3,type:"cardMatch",title:"Puzzle 3: Cupid's Love Match 🃏",question:"Match all the pairs of sweet hearts & love tokens!",mascotIntro:"Time for a fun game! Flip the cute cards and find all matching pairs! 🎀",mascotSuccess:"Super job! We are the perfect match forever and ever! 💞",mascotHint:"Take your time and match the matching symbols!"},{id:4,type:"cipher",title:"Puzzle 4: The Unscramble Love Secret 📜",question:"Unscramble the secret message to complete your puzzle quest!",scrambledWords:["LUBBB","KANMANI","UUU","I"],correctAnswer:"KANMANI I LUBBB UUU",mascotIntro:"The last secret puzzle! Click the word blocks in the correct order to reveal my promise! ✨",mascotSuccess:"Awww! Kanmani I lubbb uuu too! You solved all the puzzles! Get ready for your special video reward! 🎉",mascotHint:"Hint: Click 'KANMANI' → 'I' → 'LUBBB' → 'UUU'!"}],finale:{birthdayTitle:"Happy Birthday, My Beloved Chella Kanmani! 🎂🎉",romanticWishes:["To the girl who fills my life with endless smiles, warmth, and magic...","On your birthday, I want to remind you how deeply loved and cherished you are.","May your day be filled with laughter, cute surprises, sweet treats, and all the happiness in the world!","Thank you for being my soulmate, my best friend, and my home. I love you endlessly! ❤️"],loveLetter:`Dearest Kanmani,

From the moment you walked into my life, every single day has been brighter and happier. Your laughter is my favorite melody, your smile is my favorite sunshine, and your happiness means the world to me.

I created this interactive page because baki ela plans um sodhapidichu ith mattum than enak theriyum.😬 Thank you for being you, for your kindness, your sweet hugs, and your wonderful spirit.

Happy Birthday, my sweet princess! Here's to forever together!

Forever yours,
Aetaaa 💕`}};function g(){const h=localStorage.getItem("kanmani_birthday_config");if(h)try{const e=JSON.parse(h);if(e&&e.version===y.version)return e}catch(e){console.error("Failed to parse saved config",e)}return localStorage.removeItem("kanmani_birthday_config"),y}function f(h){h.version=y.version,localStorage.setItem("kanmani_birthday_config",JSON.stringify(h))}class v{constructor(e){this.container=e,this.currentText=""}render(e,t="./assets/mascot_bear.png"){this.currentText=e,this.container.innerHTML=`
      <div class="mascot-container">
        <div class="mascot-avatar">
          <img src="${t}" alt="Mochi the Mascot" id="mascotImg" />
        </div>
        <div class="speech-bubble" id="mascotBubble">
          ${e}
        </div>
      </div>
    `}updateMessage(e,t="bounce"){const s=this.container.querySelector("#mascotBubble"),i=this.container.querySelector("#mascotImg");s&&(s.style.opacity="0",setTimeout(()=>{s.innerText=e,s.style.opacity="1"},150)),i&&t&&(i.style.animation="none",i.offsetHeight,t==="bounce"?i.style.animation="floatBounce 0.6s ease 2":t==="wiggle"&&(i.style.animation="mascotWiggle 0.5s ease 2"))}}class b{constructor(e,t,s,i){this.container=e,this.puzzles=t,this.currentStep=0,this.onPuzzleComplete=s,this.mascotHost=i,this.keypadCode="",this.cardState={flipped:[],matched:[]},this.cipherSelection=[]}renderCurrentPuzzle(){const e=this.puzzles[this.currentStep];if(!e){this.onPuzzleComplete(!0);return}this.mascotHost&&this.mascotHost.updateMessage(e.mascotIntro,"bounce");let t="";e.type==="quiz"?t=this.renderQuiz(e):e.type==="keypad"?t=this.renderKeypad(e):e.type==="cardMatch"?t=this.renderCardMatch(e):e.type==="cipher"&&(t=this.renderCipher(e));const s=this.puzzles.length;let i="";for(let o=0;o<s;o++){let r="step-dot";o<this.currentStep?r+=" completed":o===this.currentStep&&(r+=" active"),i+=`<div class="${r}">${o<this.currentStep?"✓":o+1}</div>`}this.container.innerHTML=`
      <div class="puzzle-card">
        <div class="puzzle-progress">${i}</div>
        <h2 class="puzzle-title">${e.title}</h2>
        <p class="puzzle-question">${e.question}</p>
        ${t}
        <div style="text-align:center; margin-top:20px;">
          <button class="btn-secondary" id="hintBtn" style="font-size:0.9rem; padding:8px 16px;">💡 Need a Hint?</button>
        </div>
      </div>
    `,this.bindEvents(e)}renderQuiz(e){return`
      <div class="options-grid">
        ${e.options.map((t,s)=>`
          <button class="option-btn" data-index="${s}">
            <span>${t}</span>
            <span class="opt-icon">✨</span>
          </button>
        `).join("")}
      </div>
    `}renderKeypad(e){return this.keypadCode="",`
      <div class="keypad-display" id="keypadDisplay">
        <div class="pin-digit" id="digit0">-</div>
        <div class="pin-digit" id="digit1">-</div>
        <div class="pin-digit" id="digit2">-</div>
        <div class="pin-digit" id="digit3">-</div>
      </div>
      <div class="keypad-grid">
        ${["1","2","3","4","5","6","7","8","9","C","0","⌫"].map(t=>`
          <button class="key-btn" data-key="${t}">${t}</button>
        `).join("")}
      </div>
    `}renderCardMatch(e){const t=["💖","🎁","👑","🧸","💖","🎁","👑","🧸"];return this.shuffledCards||(this.shuffledCards=[...t].sort(()=>Math.random()-.5)),this.cardState={flipped:[],matched:[]},`
      <div class="cards-grid">
        ${this.shuffledCards.map((s,i)=>`
          <div class="memory-card" data-card-index="${i}" data-icon="${s}">
            <span class="card-back">❓</span>
            <span class="card-front" style="display:none;">${s}</span>
          </div>
        `).join("")}
      </div>
    `}renderCipher(e){return this.cipherSelection=[],`
      <div class="cipher-board">
        <div style="font-size:1.3rem; font-family:var(--font-cute); min-height:40px; color:var(--accent-gold); letter-spacing:1px;" id="cipherSentence">
          Click the word blocks in the right order...
        </div>
        <div class="word-slots">
          ${(e.scrambledWords||["LUBBB","KANMANI","UUU","I"]).map((s,i)=>`
            <div class="word-chip" data-word="${s}" data-idx="${i}">${s}</div>
          `).join("")}
        </div>
        <div style="display:flex; gap:12px; margin-top:15px; flex-wrap:wrap; justify-content:center;">
          <button class="btn-primary" id="checkCipherBtn" style="font-size:1rem; padding:10px 24px;">Verify Cipher 🔓</button>
          <button class="btn-secondary" id="resetCipherBtn" style="font-size:0.9rem; padding:8px 16px;">Reset 🔄</button>
        </div>
      </div>
    `}bindEvents(e){const t=this.container.querySelector("#hintBtn");if(t&&t.addEventListener("click",()=>{this.mascotHost&&this.mascotHost.updateMessage(e.mascotHint||"You can do it!","wiggle")}),e.type==="quiz"&&this.container.querySelectorAll(".option-btn").forEach(s=>{s.addEventListener("click",i=>{parseInt(s.getAttribute("data-index"))===e.correctIndex?(s.classList.add("correct"),this.mascotHost&&this.mascotHost.updateMessage(e.mascotSuccess,"bounce"),setTimeout(()=>this.nextPuzzle(),1200)):(s.classList.add("wrong"),this.mascotHost&&this.mascotHost.updateMessage("Oopsie! Give it another try sweetie! 💕","wiggle"),setTimeout(()=>s.classList.remove("wrong"),800))})}),e.type==="keypad"&&this.container.querySelectorAll(".key-btn").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-key");i==="C"?this.keypadCode="":i==="⌫"?this.keypadCode=this.keypadCode.slice(0,-1):this.keypadCode.length<4&&(this.keypadCode+=i),this.updateKeypadDisplay(),this.keypadCode.length===4&&(this.keypadCode===e.correctCode?(this.mascotHost&&this.mascotHost.updateMessage(e.mascotSuccess,"bounce"),setTimeout(()=>this.nextPuzzle(),1200)):(this.mascotHost&&this.mascotHost.updateMessage(e.mascotHint||"Incorrect code! Try again 🔑","wiggle"),setTimeout(()=>{this.keypadCode="",this.updateKeypadDisplay()},1e3)))})}),e.type==="cardMatch"&&this.container.querySelectorAll(".memory-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-card-index");if(!(this.cardState.flipped.includes(i)||this.cardState.matched.includes(i)||this.cardState.flipped.length>=2)&&(s.classList.add("flipped"),s.querySelector(".card-back").style.display="none",s.querySelector(".card-front").style.display="inline",this.cardState.flipped.push(i),this.cardState.flipped.length===2)){const[o,r]=this.cardState.flipped,n=this.container.querySelector(`[data-card-index="${o}"]`),l=this.container.querySelector(`[data-card-index="${r}"]`);n.getAttribute("data-icon")===l.getAttribute("data-icon")?(n.classList.add("matched"),l.classList.add("matched"),this.cardState.matched.push(o,r),this.cardState.flipped=[],this.cardState.matched.length===this.shuffledCards.length&&(this.mascotHost&&this.mascotHost.updateMessage(e.mascotSuccess,"bounce"),setTimeout(()=>this.nextPuzzle(),1200))):setTimeout(()=>{n.classList.remove("flipped"),l.classList.remove("flipped"),n.querySelector(".card-back").style.display="inline",n.querySelector(".card-front").style.display="none",l.querySelector(".card-back").style.display="inline",l.querySelector(".card-front").style.display="none",this.cardState.flipped=[]},900)}})}),e.type==="cipher"){const s=this.container.querySelectorAll(".word-chip"),i=this.container.querySelector("#cipherSentence"),o=this.container.querySelector("#checkCipherBtn"),r=this.container.querySelector("#resetCipherBtn"),n=()=>{this.cipherSelection.length>0?i.innerText=this.cipherSelection.map(l=>l.word).join(" "):i.innerText="Click the word blocks in the right order..."};s.forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-word"),a=l.getAttribute("data-idx"),c=this.cipherSelection.findIndex(u=>u.idx===a);c!==-1?(l.classList.remove("selected"),this.cipherSelection.splice(c,1)):(l.classList.add("selected"),this.cipherSelection.push({idx:a,word:d})),n()})}),r&&r.addEventListener("click",()=>{this.cipherSelection=[],s.forEach(l=>l.classList.remove("selected")),n()}),o.addEventListener("click",()=>{const l=this.cipherSelection.map(a=>a.word).join(" ").trim(),d=e.correctAnswer.trim();l.toUpperCase()===d.toUpperCase()?(this.mascotHost&&this.mascotHost.updateMessage(e.mascotSuccess,"bounce"),setTimeout(()=>this.nextPuzzle(),1200)):this.mascotHost&&this.mascotHost.updateMessage(e.mascotHint||"Not quite! Try again 💕","wiggle")})}}updateKeypadDisplay(){for(let e=0;e<4;e++){const t=this.container.querySelector(`#digit${e}`);t&&(t.innerText=this.keypadCode[e]||"-")}}nextPuzzle(){this.currentStep++,this.currentStep<this.puzzles.length?this.renderCurrentPuzzle():this.onPuzzleComplete(!0)}}class S{constructor(e,t){this.container=e,this.onClose=t}show(e,t,s="Here is your special video reward! 🎬",i=null){i&&(this.onClose=i);const o=document.getElementById("bgmAudio");o&&o.pause();let r="";if(t&&t.trim()!==""){const c=t.trim();if(c.includes("youtube.com")||c.includes("youtu.be")){let u=c;c.includes("watch?v=")?u=c.replace("watch?v=","embed/"):c.includes("youtu.be/")&&(u=c.replace("youtu.be/","www.youtube.com/embed/")),r=`
          <iframe src="${u}?autoplay=1" style="width:100%; height:100%; border:none; border-radius:12px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `}else c.includes("drive.google.com")?r=`
          <iframe src="${c.replace(/\/view.*$/,"/preview")}" style="width:100%; height:100%; border:none; border-radius:12px;" allow="autoplay" allowfullscreen></iframe>
        `:r=`
          <video controls autoplay playsinline style="width:100%; height:100%; border-radius:12px;">
            <source src="${c}" type="video/mp4">
            <source src="${c}" type="video/webm">
            Your browser does not support video playback.
          </video>
        `}else r=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:20px; color:#ff9ebb; border:2px dashed var(--primary-pink); border-radius:12px; background:rgba(255,255,255,0.05);">
          <div style="font-size:3rem; margin-bottom:10px;">📹</div>
          <h3 style="font-family:var(--font-cute); font-size:1.4rem; margin-bottom:8px;">Add Your Special Birthday Video Here!</h3>
          <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:15px; text-align:center;">Select your video file (.mp4, .mov) or drop it here to play!</p>
          <input type="file" id="localVideoInput" accept="video/*" style="display:none;" />
          <button class="btn-primary" id="selectVideoFileBtn" style="font-size:0.95rem; padding:10px 20px;">Choose Video File 🎬</button>
        </div>
      `;this.container.innerHTML=`
      <div class="video-modal-backdrop" id="videoModalBackdrop">
        <div class="video-modal-content">
          <h2 style="font-family:var(--font-cute); font-size:2rem; color:var(--soft-pink); margin-bottom:5px;">${e}</h2>
          <p style="color:var(--text-muted); font-size:1rem; margin-bottom:15px;">${s}</p>
          <div class="video-player-frame" id="videoFrame">
            ${r}
          </div>
          <div style="margin-top:20px;">
            <button class="btn-primary" id="closeVideoBtn">Continue ✨</button>
          </div>
        </div>
      </div>
    `;const n=this.container.querySelector("#localVideoInput"),l=this.container.querySelector("#selectVideoFileBtn"),d=this.container.querySelector("#videoFrame");l&&n&&(l.addEventListener("click",()=>n.click()),n.addEventListener("change",c=>{const u=c.target.files[0];if(u){const m=URL.createObjectURL(u);d.innerHTML=`
            <video controls autoplay playsinline style="width:100%; height:100%; border-radius:12px;">
              <source src="${m}" type="${u.type}">
              Your browser does not support video playback.
            </video>
          `}}));const a=this.container.querySelector("#closeVideoBtn");a&&a.addEventListener("click",()=>{const c=this.container.querySelector("video");c&&c.pause(),this.hide();const u=document.getElementById("bgmAudio"),m=document.getElementById("musicToggleBtn");u&&u.src&&u.play().then(()=>{if(m){const p=m.querySelector("span");p&&(p.innerText="🎵 BGM: On"),m.style.opacity="1"}}).catch(p=>console.log("BGM play resume",p)),this.onClose&&this.onClose()})}hide(){this.container.innerHTML=""}}class w{constructor(e,t,s,i,o,r,n){this.container=e,this.finaleData=t,this.couplePhotoUrl=s||"./images/IMG_8104 2.PNG",this.photoCaption=i||"Happy Birthday My Love! ❤️",this.onPlayFinalVideo=o,this.onReplay=r,this.onOpenGallery=n}render(){const e=(this.finaleData.romanticWishes||[]).map(t=>`
      <div class="wish-item">
        <span>💖 ${t}</span>
      </div>
    `).join("");this.container.innerHTML=`
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
            ${e}
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
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#letterHeader"),t=this.container.querySelector("#letterContent"),s=this.container.querySelector("#accordionArrow");e&&t&&e.addEventListener("click",()=>{const n=t.style.display==="none";t.style.display=n?"block":"none",s.innerText=n?"▲":"▼"});const i=this.container.querySelector("#openGalleryBtn");i&&this.onOpenGallery&&i.addEventListener("click",()=>this.onOpenGallery());const o=this.container.querySelector("#playFinalVideoBtn");o&&this.onPlayFinalVideo&&o.addEventListener("click",()=>this.onPlayFinalVideo());const r=this.container.querySelector("#replayGameBtn");r&&this.onReplay&&r.addEventListener("click",()=>this.onReplay())}}class M{constructor(e,t,s){this.container=e,this.config=t,this.onSave=s,this.isOpen=!1}renderTrigger(){this.container.innerHTML=`
      <div id="customizerModalBox"></div>
    `}toggleModal(){this.isOpen=!this.isOpen;const e=this.container.querySelector("#customizerModalBox");if(!this.isOpen){e.innerHTML="";return}e.innerHTML=`
      <div class="customizer-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:12px;">
          <h2 style="font-family:var(--font-cute); font-size:1.5rem; color:var(--soft-pink);">🛠️ Personalize Birthday Website</h2>
          <button id="closeModalBtn" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">✕</button>
        </div>

        <form id="customizerForm">
          <div class="form-group">
            <label>Girlfriend's Name</label>
            <input type="text" class="form-control" name="girlfriendName" value="${this.config.girlfriendName||"Kanmani"}" />
          </div>

          <div class="form-group">
            <label>Birthday Date Title</label>
            <input type="text" class="form-control" name="birthdayDate" value="${this.config.birthdayDate||"August 15"}" />
          </div>

          <div class="form-group">
            <label>Romantic Photo File / URL</label>
            <input type="text" class="form-control" name="couplePhotoUrl" id="couplePhotoUrlInput" value="${this.config.couplePhotoUrl||"./assets/romantic_couple.png"}" placeholder="Paste URL or upload file below" />
            <input type="file" id="photoFileInput" accept="image/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadPhotoBtn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Custom Photo 📸</button>
          </div>

          <div class="form-group">
            <label>Photo Frame Caption</label>
            <input type="text" class="form-control" name="photoCaption" value="${this.config.photoCaption||""}" />
          </div>

          <div class="form-group">
            <label>Intermediate Milestone Video File / URL</label>
            <input type="text" class="form-control" name="video1Url" id="video1UrlInput" value="${this.config.video1Url||""}" placeholder="Path or URL (e.g. /my_video1.mp4)" />
            <input type="file" id="video1FileInput" accept="video/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadVideo1Btn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Video 1 🎬</button>
          </div>

          <div class="form-group">
            <label>Final Surprise Video File / URL</label>
            <input type="text" class="form-control" name="video2Url" id="video2UrlInput" value="${this.config.video2Url||""}" placeholder="Path or URL (e.g. /my_final_video.mp4)" />
            <input type="file" id="video2FileInput" accept="video/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadVideo2Btn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Final Video 🎬</button>
          </div>

          <div class="form-group">
            <label>Background Music (BGM) File / URL</label>
            <input type="text" class="form-control" name="bgmUrl" id="bgmUrlInput" value="${this.config.bgmUrl||""}" placeholder="Path or Audio URL" />
            <input type="file" id="bgmFileInput" accept="audio/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadBgmBtn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Music File 🎵</button>
          </div>

          <div style="display:flex; gap:12px; margin-top:25px; justify-content:flex-end;">
            <button type="button" class="btn-secondary" id="resetDefaultsBtn">Reset Defaults</button>
            <button type="submit" class="btn-primary" style="font-size:1rem; padding:10px 24px;">Save & Apply ✨</button>
          </div>
        </form>
      </div>
    `;const t=(s,i,o)=>{const r=e.querySelector(`#${s}`),n=e.querySelector(`#${i}`),l=e.querySelector(`#${o}`);r&&n&&l&&(r.addEventListener("click",()=>n.click()),n.addEventListener("change",d=>{const a=d.target.files[0];a&&(l.value=URL.createObjectURL(a))}))};t("uploadPhotoBtn","photoFileInput","couplePhotoUrlInput"),t("uploadVideo1Btn","video1FileInput","video1UrlInput"),t("uploadVideo2Btn","video2FileInput","video2UrlInput"),t("uploadBgmBtn","bgmFileInput","bgmUrlInput"),e.querySelector("#closeModalBtn").addEventListener("click",()=>this.toggleModal()),e.querySelector("#customizerForm").addEventListener("submit",s=>{s.preventDefault();const i=new FormData(s.target),o={...this.config};o.girlfriendName=i.get("girlfriendName"),o.birthdayDate=i.get("birthdayDate"),o.couplePhotoUrl=i.get("couplePhotoUrl"),o.photoCaption=i.get("photoCaption"),o.video1Url=i.get("video1Url"),o.video2Url=i.get("video2Url"),o.bgmUrl=i.get("bgmUrl"),this.config=o,this.onSave&&this.onSave(o),this.toggleModal()}),e.querySelector("#resetDefaultsBtn").addEventListener("click",()=>{localStorage.removeItem("kanmani_birthday_config"),location.reload()})}}class x{constructor(e,t){this.container=e,this.onComplete=t,this.progress=0,this.isHolding=!1,this.hasCompleted=!1,this.holdTimer=null,this.audioCtx=null,this.modalEl=null}render(){this.container.innerHTML=`
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
    `,this.bindEvents()}playHeartbeatSound(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext)),this.audioCtx.state==="suspended"&&this.audioCtx.resume();const e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.type="sine",e.frequency.setValueAtTime(80,this.audioCtx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.audioCtx.currentTime+.15),t.gain.setValueAtTime(.3,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.audioCtx.currentTime+.15),e.connect(t),t.connect(this.audioCtx.destination),e.start(),e.stop(this.audioCtx.currentTime+.15)}catch{}}cleanUpModal(){this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl)}bindEvents(){const e=this.container.querySelector("#heartScannerBtn"),t=this.container.querySelector("#meterFill"),s=this.container.querySelector("#meterPercentage"),i=this.container.querySelector("#scannerStatus"),o=this.container.querySelector("#pulseRing"),r=this.container.querySelector("#heartEmoji"),n=this.container.querySelector("#blushResultModal"),l=this.container.querySelector("#skipMeterBtn"),d=this.container.querySelector("#continueFromMeterBtn");this.modalEl=n,n&&n.parentNode!==document.body&&document.body.appendChild(n);const a=()=>{this.hasCompleted||(this.hasCompleted=!0,this.isHolding=!1,this.holdTimer&&(clearInterval(this.holdTimer),this.holdTimer=null),e.classList.remove("holding"),r.innerText="💘",o.style.animation="none",t.style.width="100%",s.innerText="100%",i.innerText="Scan 100% Complete! 🎉",this.playHeartbeatSound(),this.modalEl&&(this.modalEl.style.display="flex"))},c=p=>{p.preventDefault(),!this.hasCompleted&&(this.isHolding||(this.isHolding=!0,e.classList.add("holding"),i.innerText="Scanning heartbeat & love signals... 💓",this.holdTimer=setInterval(()=>{this.isHolding&&(this.progress+=4,this.progress>100&&(this.progress=100),t.style.width=`${this.progress}%`,s.innerText=`${Math.round(this.progress)}%`,Math.round(this.progress)%20===0&&this.playHeartbeatSound(),this.progress>=100&&a())},40)))},u=()=>{this.hasCompleted||(this.isHolding=!1,e.classList.remove("holding"),this.holdTimer&&(clearInterval(this.holdTimer),this.holdTimer=null),this.progress>=90?a():i.innerText="Touch released! Press and hold to finish scanning 💓")};e.addEventListener("mousedown",c),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",u),e.addEventListener("touchstart",c,{passive:!1}),e.addEventListener("touchend",u),e.addEventListener("touchcancel",u);const m=()=>{this.cleanUpModal(),this.onComplete&&this.onComplete()};l&&l.addEventListener("click",m),d&&d.addEventListener("click",m)}}class B{constructor(e,t=[],s=()=>null){this.container=e,this.quotes=t.length?t:["Stop looking so gorgeous, Aetaa's heart can't handle it! 🙈❤️","Aetaa just felt 1,000 butterflies in his stomach! 🦋✨","Sending you 1,000 forehead kisses right now! 😘","Kanmanii, you are Aetaa's whole world forever and ever! 💖","Did you know? Every time you smile, Aetaa blushes like crazy! 😳🌸"],this.getMascotHost=s,this.quoteIdx=0}render(){this.container.innerHTML=`
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
    `,this.bindEvents()}triggerKissBurst(e){const t=["💋","💖","✨","🥰","🌸","💘","💋"],i=e?e.clientX:window.innerWidth-60,o=e?e.clientY:window.innerHeight-60;for(let r=0;r<12;r++){const n=document.createElement("div");n.className="floating-kiss-particle",n.innerText=t[Math.floor(Math.random()*t.length)];const l=Math.PI*2*r/12+Math.random()*.5,d=Math.random()*120+80,a=Math.cos(l)*d,c=Math.sin(l)*d-60;n.style.left=`${i}px`,n.style.top=`${o}px`,n.style.setProperty("--tx",`${a}px`),n.style.setProperty("--ty",`${c}px`),document.body.appendChild(n),setTimeout(()=>n.remove(),1200)}}bindEvents(){const e=this.container.querySelector("#secretKissFloatingBtn"),t=this.container.querySelector("#kissToast"),s=this.container.querySelector("#kissToastQuote");e&&e.addEventListener("click",i=>{this.triggerKissBurst(i);const o=this.quotes[this.quoteIdx%this.quotes.length];this.quoteIdx++,s.innerText=o,t.style.display="block",t.classList.remove("fade-out"),t.classList.add("fade-in"),setTimeout(()=>{t.classList.remove("fade-in"),t.classList.add("fade-out"),setTimeout(()=>{t.style.display="none"},300)},3200);const r=this.getMascotHost();if(r){r.updateMessage(`Aetaa sent you a big sweet kiss! 😳💋 "${o}"`,"bounce");const n=document.querySelector("#mascotImg");n&&(n.classList.add("blushing-mascot"),setTimeout(()=>n.classList.remove("blushing-mascot"),2500))}})}}class k{constructor(e,t=[],s=null,i=null){this.container=e,this.photos=t.length?t:[{url:"./images/IMG_8104 2.PNG",caption:"Your smile brightens up my whole world ✨"},{url:"./images/IMG_8110.PNG",caption:"My favorite place in the world is right next to you ❤️"},{url:"./images/IMG_8321.PNG",caption:"Every single moment with you is magic 🌸"},{url:"./images/IMG_8500.PNG",caption:"Holding your hand forever and ever 💕"},{url:"./images/IMG_8502.PNG",caption:"My heart beats only for my sweet Kanmanii 💓"},{url:"./images/IMG_9077.PNG",caption:"Sweet memories created together 🥰"},{url:"./images/IMG_9078.PNG",caption:"Forever grateful to have you in my life 🌟"},{url:"./images/IMG_9079.PNG",caption:"Happy Birthday my sweet princess! 🎂"}],this.onPlayVideo=s,this.onBackToFinale=i,this.currentIndex=0,this.autoPlayTimer=null}render(){const e=this.photos[this.currentIndex];this.container.innerHTML=`
      <div class="fullscreen-gallery-page">
        <!-- Full-Screen Transparent/Blurred Ambient Background -->
        <div class="gallery-bg-blur" id="galleryBgBlur" style="background-image: url('${e.url}');"></div>
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
              <img src="${e.url}" alt="Kanmani & Venkatesha" id="galleryMainImg" />
              <div class="photo-counter-tag" id="galleryCounter">
                ${this.currentIndex+1} / ${this.photos.length}
              </div>
            </div>

            <!-- Romantic Message Box -->
            <div class="romantic-message-box" id="galleryMessageBox">
              <div class="message-heart-icon">💖</div>
              <p class="romantic-caption-text" id="galleryCaptionText">
                ${e.caption}
              </p>
            </div>
          </div>

          <button class="stage-nav-btn next" id="galleryNextBtn">❯</button>
        </main>

        <!-- Bottom Thumbnail Navigator -->
        <footer class="fullscreen-gallery-footer">
          <div class="thumbnail-strip">
            ${this.photos.map((t,s)=>`
              <div class="thumb-item ${s===0?"active":""}" data-index="${s}">
                <img src="${t.url}" alt="Memory ${s+1}" />
              </div>
            `).join("")}
          </div>
        </footer>
      </div>
    `,this.bindEvents(),this.startAutoPlay()}startAutoPlay(){this.stopAutoPlay(),this.autoPlayTimer=setInterval(()=>{this.updateSlide(this.currentIndex+1,!1)},3e3)}stopAutoPlay(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null)}updateSlide(e,t=!0){e<0&&(e=this.photos.length-1),e>=this.photos.length&&(e=0),this.currentIndex=e;const s=this.photos[this.currentIndex],i=this.container.querySelector("#galleryBgBlur"),o=this.container.querySelector("#galleryMainImg"),r=this.container.querySelector("#galleryCaptionText"),n=this.container.querySelector("#galleryCounter"),l=this.container.querySelector("#galleryCardWrapper");l&&(l.style.opacity="0.3",l.style.transform="scale(0.97)",setTimeout(()=>{i&&(i.style.backgroundImage=`url('${s.url}')`),o&&(o.src=s.url),r&&(r.innerText=s.caption),n&&(n.innerText=`${this.currentIndex+1} / ${this.photos.length}`),l.style.opacity="1",l.style.transform="scale(1)"},200)),this.container.querySelectorAll(".thumb-item").forEach((d,a)=>{a===this.currentIndex?d.classList.add("active"):d.classList.remove("active")}),t&&this.startAutoPlay()}bindEvents(){const e=this.container.querySelector("#galleryPrevBtn"),t=this.container.querySelector("#galleryNextBtn"),s=this.container.querySelector("#backToFinaleBtn"),i=this.container.querySelector("#galleryPlayVideoBtn"),o=this.container.querySelectorAll(".thumb-item");e&&e.addEventListener("click",()=>this.updateSlide(this.currentIndex-1,!0)),t&&t.addEventListener("click",()=>this.updateSlide(this.currentIndex+1,!0)),s&&this.onBackToFinale&&s.addEventListener("click",()=>{this.stopAutoPlay(),this.onBackToFinale()}),i&&this.onPlayVideo&&i.addEventListener("click",()=>{this.stopAutoPlay(),this.onPlayVideo()}),o.forEach(n=>{n.addEventListener("click",()=>{const l=parseInt(n.getAttribute("data-index"));this.updateSlide(l,!0)})});const r=n=>{n.key==="ArrowLeft"&&this.updateSlide(this.currentIndex-1,!0),n.key==="ArrowRight"&&this.updateSlide(this.currentIndex+1,!0)};window.addEventListener("keydown",r)}}class C{constructor(){this.config=g(),this.appEl=document.getElementById("app"),this.audioEl=document.getElementById("bgmAudio"),this.musicBtn=document.getElementById("musicToggleBtn"),this.videoContainer=document.getElementById("videoModalContainer"),this.customizerContainer=document.getElementById("customizerContainer"),this.isPlayingMusic=!1,this.currentScreen="WELCOME",this.mascotHost=null,this.puzzleManager=null,this.videoModal=null,this.customizerModal=null,this.kissWidget=null,this.init()}init(){this.initCanvasBackground(),this.initAudioEngine(),this.initVideoModal(),this.initCustomizer(),this.initSecretKissWidget(),this.renderCurrentScreen()}initSecretKissWidget(){let e=document.getElementById("secretKissContainer");e||(e=document.createElement("div"),e.id="secretKissContainer",document.body.appendChild(e)),this.kissWidget=new B(e,this.config.blushQuotes,()=>this.mascotHost),this.kissWidget.render()}initCanvasBackground(){const e=document.getElementById("bgCanvas");if(!e)return;const t=e.getContext("2d");let s=e.width=window.innerWidth,i=e.height=window.innerHeight;window.addEventListener("resize",()=>{s=e.width=window.innerWidth,i=e.height=window.innerHeight});const o=[],r=40;for(let a=0;a<r;a++)o.push({x:Math.random()*s,y:Math.random()*i,radius:Math.random()*8+4,speedY:Math.random()*.8+.3,swaySpeed:Math.random()*.02+.01,swayAmplitude:Math.random()*1.5+.5,angle:Math.random()*Math.PI*2,opacity:Math.random()*.5+.3,type:Math.random()>.4?"heart":"star"});const n=(a,c,u,m)=>{t.save(),t.globalAlpha=m,t.fillStyle="#ff7895",t.beginPath();const p=u*.3;t.moveTo(a,c+p),t.bezierCurveTo(a,c,a-u/2,c,a-u/2,c+p),t.bezierCurveTo(a-u/2,c+(u+p)/2,a,c+u,a,c+u),t.bezierCurveTo(a,c+u,a+u/2,c+(u+p)/2,a+u/2,c+p),t.bezierCurveTo(a+u/2,c,a,c,a,c+p),t.closePath(),t.fill(),t.restore()},l=(a,c,u,m)=>{t.save(),t.globalAlpha=m,t.fillStyle="#ffd700",t.beginPath(),t.arc(a,c,u,0,Math.PI*2),t.fill(),t.restore()},d=()=>{t.clearRect(0,0,s,i),o.forEach(a=>{a.y-=a.speedY,a.angle+=a.swaySpeed,a.x+=Math.sin(a.angle)*a.swayAmplitude,a.y<-20&&(a.y=i+20,a.x=Math.random()*s),a.type==="heart"?n(a.x,a.y,a.radius*1.5,a.opacity):l(a.x,a.y,a.radius*.5,a.opacity)}),requestAnimationFrame(d)};d()}initAudioEngine(){this.config.bgmUrl&&(this.audioEl.src=this.config.bgmUrl,this.audioEl.volume=.5),this.musicBtn.addEventListener("click",()=>{this.toggleMusic()});const e=()=>{this.isPlayingMusic||this.playMusic(),window.removeEventListener("click",e),window.removeEventListener("touchstart",e)};window.addEventListener("click",e),window.addEventListener("touchstart",e)}playMusic(){this.audioEl.src&&this.audioEl.play().then(()=>{this.isPlayingMusic=!0,this.musicBtn.querySelector("span").innerText="🎵 BGM: On",this.musicBtn.style.opacity="1"}).catch(e=>{console.log("Autoplay waiting for user gesture",e)})}pauseMusic(){this.audioEl.pause(),this.isPlayingMusic=!1,this.musicBtn.querySelector("span").innerText="🔇 BGM: Off",this.musicBtn.style.opacity="0.7"}toggleMusic(){this.isPlayingMusic?this.pauseMusic():this.playMusic()}initVideoModal(){this.videoModal=new S(this.videoContainer)}initCustomizer(){this.customizerModal=new M(this.customizerContainer,this.config,e=>{this.config=e,f(e),this.config.bgmUrl&&this.audioEl.src!==this.config.bgmUrl&&(this.audioEl.src=this.config.bgmUrl,this.isPlayingMusic&&this.audioEl.play()),this.renderCurrentScreen()}),this.customizerModal.renderTrigger()}renderCurrentScreen(){this.currentScreen==="WELCOME"?this.renderWelcomeScreen():this.currentScreen==="BLUSH_METER"?this.renderBlushMeterScreen():this.currentScreen==="PUZZLE"?this.renderPuzzleScreen():this.currentScreen==="FINALE"?this.renderFinaleScreen():this.currentScreen==="GALLERY"&&this.renderGalleryScreen()}renderWelcomeScreen(){const e=this.config.welcomeMessage;this.appEl.innerHTML=`
      <div class="screen-container">
        <div class="welcome-card">
          <div style="font-size:3rem; margin-bottom:10px;">🌸 💌 🌸</div>
          <h1 class="welcome-title">${e.title}</h1>
          <p class="welcome-subtitle">${e.subtitle}</p>

          <div class="envelope-wrapper" id="envelopeBtn">
            <img src="./assets/gift_envelope.png" alt="Sealed Gift Envelope" class="envelope-img" />
          </div>

          <p style="font-size:1.1rem; line-height:1.6; color:#ffd7ee; margin-top:20px;">
            ${e.introText}
          </p>

          <button class="btn-primary" id="startQuestBtn">
            ${e.buttonText}
          </button>
        </div>
      </div>
    `;const t=this.appEl.querySelector("#startQuestBtn"),s=this.appEl.querySelector("#envelopeBtn"),i=()=>{this.currentScreen="BLUSH_METER",this.renderCurrentScreen()};t&&t.addEventListener("click",i),s&&s.addEventListener("click",i)}renderBlushMeterScreen(){new x(this.appEl,()=>{this.currentScreen="PUZZLE",this.renderCurrentScreen()}).render()}renderPuzzleScreen(){this.appEl.innerHTML=`
      <div class="screen-container">
        <div id="mascotWrapper" style="width:100%;"></div>
        <div id="puzzleWrapper" style="width:100%;"></div>
      </div>
    `;const e=this.appEl.querySelector("#mascotWrapper"),t=this.appEl.querySelector("#puzzleWrapper");this.mascotHost=new v(e),this.mascotHost.render("Welcome to your puzzle quest!","./assets/mascot_bear.png"),this.puzzleManager=new b(t,this.config.puzzles,s=>{s&&(this.config.video1Url?(this.pauseMusic(),this.videoModal.show(this.config.video1Title||"Milestone Reward Video 🎬",this.config.video1Url,"You unlocked all the puzzles! Enjoy your special memory video reward before the grand finale! ✨",()=>{this.currentScreen="FINALE",this.renderCurrentScreen()})):(this.currentScreen="FINALE",this.renderCurrentScreen()))},this.mascotHost),this.puzzleManager.renderCurrentPuzzle()}renderFinaleScreen(){this.triggerFireworks(),new w(this.appEl,this.config.finale,this.config.couplePhotoUrl,this.config.photoCaption,()=>{this.pauseMusic(),this.videoModal.show(this.config.video2Title||"Grand Birthday Celebration Video 💖",this.config.video2Url,"Happy Birthday Kanmani! Here is your final birthday surprise video! 🎬🎉",()=>{this.playMusic()})},()=>{this.currentScreen="PUZZLE",this.renderCurrentScreen()},()=>{this.currentScreen="GALLERY",this.renderCurrentScreen()}).render()}renderGalleryScreen(){new k(this.appEl,this.config.galleryPhotos||[],()=>{this.pauseMusic(),this.videoModal.show(this.config.video2Title||"Grand Birthday Celebration Video 💖",this.config.video2Url,"Happy Birthday Kanmani! Here is your final birthday surprise video! 🎬🎉",()=>{this.playMusic()})},()=>{this.currentScreen="FINALE",this.renderCurrentScreen()}).render()}triggerFireworks(){const e=document.getElementById("bgCanvas");if(!e)return;const t=e.getContext("2d"),s=e.width,i=e.height,o=[],r=["#ff6584","#ffd700","#ffffff","#e8a598","#aa336a","#4cd964"];for(let l=0;l<150;l++)o.push({x:s/2,y:i/2,vx:(Math.random()-.5)*16,vy:(Math.random()-.5)*16-4,size:Math.random()*8+4,color:r[Math.floor(Math.random()*r.length)],rotation:Math.random()*Math.PI*2,vRot:(Math.random()-.5)*.2,opacity:1});const n=()=>{let l=!1;o.forEach(d=>{d.x+=d.vx,d.y+=d.vy,d.vy+=.2,d.rotation+=d.vRot,d.opacity-=.008,d.opacity>0&&(l=!0,t.save(),t.globalAlpha=d.opacity,t.translate(d.x,d.y),t.rotate(d.rotation),t.fillStyle=d.color,t.fillRect(-d.size/2,-d.size/2,d.size,d.size),t.restore())}),l&&requestAnimationFrame(n)};n()}}document.addEventListener("DOMContentLoaded",()=>{new C});
