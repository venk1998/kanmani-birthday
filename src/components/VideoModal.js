// Video Modal Component

export class VideoModal {
  constructor(containerEl, onCloseCallback) {
    this.container = containerEl;
    this.onClose = onCloseCallback;
  }

  show(videoTitle, videoUrl, customMessage = "Here is your special video reward! 🎬", onCloseCallback = null) {
    if (onCloseCallback) {
      this.onClose = onCloseCallback;
    }

    // Auto turn off background music when video plays
    const bgmAudio = document.getElementById("bgmAudio");
    if (bgmAudio) {
      bgmAudio.pause();
    }

    let videoHtml = "";

    if (videoUrl && videoUrl.trim() !== "") {
      const url = videoUrl.trim();
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        let embedUrl = url;
        if (url.includes("watch?v=")) {
          embedUrl = url.replace("watch?v=", "embed/");
        } else if (url.includes("youtu.be/")) {
          embedUrl = url.replace("youtu.be/", "www.youtube.com/embed/");
        }
        videoHtml = `
          <iframe src="${embedUrl}?autoplay=1" style="width:100%; height:100%; border:none; border-radius:12px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
      } else if (url.includes("drive.google.com")) {
        const previewUrl = url.replace(/\/view.*$/, "/preview");
        videoHtml = `
          <iframe src="${previewUrl}" style="width:100%; height:100%; border:none; border-radius:12px;" allow="autoplay" allowfullscreen></iframe>
        `;
      } else {
        videoHtml = `
          <video controls autoplay playsinline style="width:100%; height:100%; border-radius:12px;">
            <source src="${url}" type="video/mp4">
            <source src="${url}" type="video/webm">
            Your browser does not support video playback.
          </video>
        `;
      }
    } else {
      // Interactive placeholder where Venkatesha can select or drop his video directly!
      videoHtml = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:20px; color:#ff9ebb; border:2px dashed var(--primary-pink); border-radius:12px; background:rgba(255,255,255,0.05);">
          <div style="font-size:3rem; margin-bottom:10px;">📹</div>
          <h3 style="font-family:var(--font-cute); font-size:1.4rem; margin-bottom:8px;">Add Your Special Birthday Video Here!</h3>
          <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:15px; text-align:center;">Select your video file (.mp4, .mov) or drop it here to play!</p>
          <input type="file" id="localVideoInput" accept="video/*" style="display:none;" />
          <button class="btn-primary" id="selectVideoFileBtn" style="font-size:0.95rem; padding:10px 20px;">Choose Video File 🎬</button>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="video-modal-backdrop" id="videoModalBackdrop">
        <div class="video-modal-content">
          <h2 style="font-family:var(--font-cute); font-size:2rem; color:var(--soft-pink); margin-bottom:5px;">${videoTitle}</h2>
          <p style="color:var(--text-muted); font-size:1rem; margin-bottom:15px;">${customMessage}</p>
          <div class="video-player-frame" id="videoFrame">
            ${videoHtml}
          </div>
          <div style="margin-top:20px;">
            <button class="btn-primary" id="closeVideoBtn">Continue ✨</button>
          </div>
        </div>
      </div>
    `;

    // Local file selector binding
    const fileInput = this.container.querySelector("#localVideoInput");
    const selectBtn = this.container.querySelector("#selectVideoFileBtn");
    const frame = this.container.querySelector("#videoFrame");

    if (selectBtn && fileInput) {
      selectBtn.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const fileObjUrl = URL.createObjectURL(file);
          frame.innerHTML = `
            <video controls autoplay playsinline style="width:100%; height:100%; border-radius:12px;">
              <source src="${fileObjUrl}" type="${file.type}">
              Your browser does not support video playback.
            </video>
          `;
        }
      });
    }

    // Close modal binding
    const closeBtn = this.container.querySelector("#closeVideoBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        // Pause playing video inside modal
        const video = this.container.querySelector("video");
        if (video) video.pause();

        this.hide();

        // Turn background music back on automatically
        const bgm = document.getElementById("bgmAudio");
        const musicBtn = document.getElementById("musicToggleBtn");
        if (bgm && bgm.src) {
          bgm.play().then(() => {
            if (musicBtn) {
              const span = musicBtn.querySelector("span");
              if (span) span.innerText = "🎵 BGM: On";
              musicBtn.style.opacity = "1";
            }
          }).catch(err => console.log("BGM play resume", err));
        }

        if (this.onClose) this.onClose();
      });
    }
  }

  hide() {
    this.container.innerHTML = "";
  }
}
