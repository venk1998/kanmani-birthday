// Customizer & Settings Panel Component

export class CustomizerModal {
  constructor(containerEl, config, onSaveCallback) {
    this.container = containerEl;
    this.config = config;
    this.onSave = onSaveCallback;
    this.isOpen = false;
  }

  renderTrigger() {
    this.container.innerHTML = `
      <div id="customizerModalBox"></div>
    `;
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
    const box = this.container.querySelector("#customizerModalBox");
    if (!this.isOpen) {
      box.innerHTML = "";
      return;
    }

    box.innerHTML = `
      <div class="customizer-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:12px;">
          <h2 style="font-family:var(--font-cute); font-size:1.5rem; color:var(--soft-pink);">🛠️ Personalize Birthday Website</h2>
          <button id="closeModalBtn" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">✕</button>
        </div>

        <form id="customizerForm">
          <div class="form-group">
            <label>Girlfriend's Name</label>
            <input type="text" class="form-control" name="girlfriendName" value="${this.config.girlfriendName || 'Kanmani'}" />
          </div>

          <div class="form-group">
            <label>Birthday Date Title</label>
            <input type="text" class="form-control" name="birthdayDate" value="${this.config.birthdayDate || 'August 15'}" />
          </div>

          <div class="form-group">
            <label>Romantic Photo File / URL</label>
            <input type="text" class="form-control" name="couplePhotoUrl" id="couplePhotoUrlInput" value="${this.config.couplePhotoUrl || './assets/romantic_couple.png'}" placeholder="Paste URL or upload file below" />
            <input type="file" id="photoFileInput" accept="image/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadPhotoBtn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Custom Photo 📸</button>
          </div>

          <div class="form-group">
            <label>Photo Frame Caption</label>
            <input type="text" class="form-control" name="photoCaption" value="${this.config.photoCaption || ''}" />
          </div>

          <div class="form-group">
            <label>Intermediate Milestone Video File / URL</label>
            <input type="text" class="form-control" name="video1Url" id="video1UrlInput" value="${this.config.video1Url || ''}" placeholder="Path or URL (e.g. /my_video1.mp4)" />
            <input type="file" id="video1FileInput" accept="video/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadVideo1Btn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Video 1 🎬</button>
          </div>

          <div class="form-group">
            <label>Final Surprise Video File / URL</label>
            <input type="text" class="form-control" name="video2Url" id="video2UrlInput" value="${this.config.video2Url || ''}" placeholder="Path or URL (e.g. /my_final_video.mp4)" />
            <input type="file" id="video2FileInput" accept="video/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadVideo2Btn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Final Video 🎬</button>
          </div>

          <div class="form-group">
            <label>Background Music (BGM) File / URL</label>
            <input type="text" class="form-control" name="bgmUrl" id="bgmUrlInput" value="${this.config.bgmUrl || ''}" placeholder="Path or Audio URL" />
            <input type="file" id="bgmFileInput" accept="audio/*" style="display:none;" />
            <button type="button" class="btn-secondary" id="uploadBgmBtn" style="margin-top:5px; font-size:0.85rem; padding:6px 14px;">Upload Music File 🎵</button>
          </div>

          <div style="display:flex; gap:12px; margin-top:25px; justify-content:flex-end;">
            <button type="button" class="btn-secondary" id="resetDefaultsBtn">Reset Defaults</button>
            <button type="submit" class="btn-primary" style="font-size:1rem; padding:10px 24px;">Save & Apply ✨</button>
          </div>
        </form>
      </div>
    `;

    // File upload triggers
    const setupFilePicker = (btnId, inputId, textInputId) => {
      const btn = box.querySelector(`#${btnId}`);
      const fileIn = box.querySelector(`#${inputId}`);
      const textIn = box.querySelector(`#${textInputId}`);
      if (btn && fileIn && textIn) {
        btn.addEventListener("click", () => fileIn.click());
        fileIn.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (file) {
            textIn.value = URL.createObjectURL(file);
          }
        });
      }
    };

    setupFilePicker("uploadPhotoBtn", "photoFileInput", "couplePhotoUrlInput");
    setupFilePicker("uploadVideo1Btn", "video1FileInput", "video1UrlInput");
    setupFilePicker("uploadVideo2Btn", "video2FileInput", "video2UrlInput");
    setupFilePicker("uploadBgmBtn", "bgmFileInput", "bgmUrlInput");

    // Close button
    box.querySelector("#closeModalBtn").addEventListener("click", () => this.toggleModal());

    // Form submit
    box.querySelector("#customizerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const updated = { ...this.config };

      updated.girlfriendName = formData.get("girlfriendName");
      updated.birthdayDate = formData.get("birthdayDate");
      updated.couplePhotoUrl = formData.get("couplePhotoUrl");
      updated.photoCaption = formData.get("photoCaption");
      updated.video1Url = formData.get("video1Url");
      updated.video2Url = formData.get("video2Url");
      updated.bgmUrl = formData.get("bgmUrl");

      this.config = updated;
      if (this.onSave) this.onSave(updated);
      this.toggleModal();
    });

    // Reset defaults button
    box.querySelector("#resetDefaultsBtn").addEventListener("click", () => {
      localStorage.removeItem("kanmani_birthday_config");
      location.reload();
    });
  }
}
