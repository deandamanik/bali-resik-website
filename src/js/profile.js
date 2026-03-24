document.addEventListener('DOMContentLoaded', () => {
  if (typeof initLayout === 'function') {
    initLayout('type1');
  }

  if (typeof initNavbarScroll === 'function') {
    initNavbarScroll('type1');
  }

  // ---- Elements ----
  const profileDropzone      = document.getElementById('profileDropzone');
  const profileImageInput    = document.getElementById('profileImageInput');
  const chooseProfileImageBtn = document.getElementById('chooseProfileImageBtn');
  const profilePreview       = document.getElementById('profilePreview');
  const profileNameDisplay   = document.getElementById('profileNameDisplay');
  const usernameInput        = document.getElementById('usernameInput');
  const profileForm          = document.getElementById('profileForm');

  // ---- Restore saved data from localStorage ----
  const saved = JSON.parse(localStorage.getItem('baliResikProfile') || '{}');
  if (saved.name && usernameInput)    usernameInput.value = saved.name;
  if (saved.name && profileNameDisplay) profileNameDisplay.textContent = saved.name;
  if (saved.photo && profilePreview)  profilePreview.src = saved.photo;

  // ---- Save on submit ----
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newName = usernameInput ? usernameInput.value.trim() : '';

      // Update sidebar name
      if (profileNameDisplay && newName) {
        profileNameDisplay.textContent = newName;
      }

      // Persist to localStorage
      const data = JSON.parse(localStorage.getItem('baliResikProfile') || '{}');
      if (newName) data.name = newName;
      if (profilePreview) data.photo = profilePreview.src;
      localStorage.setItem('baliResikProfile', JSON.stringify(data));

      // Toast notification
      showToast('Profil berhasil disimpan ✓');
    });
  }

  // ---- Profile photo change ----
  if (chooseProfileImageBtn && profileImageInput) {
    chooseProfileImageBtn.addEventListener('click', () => profileImageInput.click());
  }
  if (profileDropzone && profileImageInput) {
    profileDropzone.addEventListener('click', () => profileImageInput.click());
  }
  if (profileImageInput && profilePreview) {
    profileImageInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => { profilePreview.src = e.target.result; };
      reader.readAsDataURL(file);
    });
  }

  // ---- Toast helper ----
  function showToast(msg) {
    const existing = document.getElementById('profileToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'profileToast';
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
      background: #10685B; color: #fff;
      padding: 0.75rem 1.75rem; border-radius: 999px;
      font-family: Poppins, sans-serif; font-size: 0.875rem; font-weight: 500;
      box-shadow: 0 8px 24px rgba(16,104,91,0.3);
      z-index: 9999; opacity: 0; transition: opacity 0.3s ease;
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});