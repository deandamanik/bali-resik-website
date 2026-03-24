// ============================================================
// PELAPORAN.JS — Bali Resik
// ============================================================

// ---- DOM References ----
const choosePhotoBtn    = document.getElementById('choosePhotoBtn');
const fileInput         = document.getElementById('fileInput');
const dropzone          = document.getElementById('dropzone');
const previewImage      = document.getElementById('previewImage');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');
const analyzeBtn        = document.getElementById('analyzeBtn');
const formFooter        = document.getElementById('formFooter');
const formLoading       = document.getElementById('formLoading');
const loadingBar        = document.getElementById('loadingBar');
const loadingText       = document.getElementById('loadingText');
const volumeButtons     = document.querySelectorAll('.volume-btn');

let selectedVolume    = '';
let uploadedImageFile = null;
let uploadedDataUrl   = null;

// ============================================================
// PHOTO UPLOAD
// ============================================================

choosePhotoBtn.addEventListener('click', () => fileInput.click());
dropzone.addEventListener('click', () => { if (!uploadedImageFile) fileInput.click(); });

dropzone.addEventListener('dragover',  (e) => { e.preventDefault(); dropzone.classList.add('border-primary'); });
dropzone.addEventListener('dragleave', ()  => dropzone.classList.remove('border-primary'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('border-primary');
  const file = e.dataTransfer.files[0];
  if (file?.type.startsWith('image/')) handleImageFile(file);
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files[0]) handleImageFile(e.target.files[0]);
});

/**
 * Handles the selected/dropped file for the trash image preview
 * @param {File} file - The uploaded image file
 */
function handleImageFile(file) {
  uploadedImageFile = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedDataUrl = e.target.result;
    previewImage.src = uploadedDataUrl;
    previewImage.classList.remove('hidden');
    uploadPlaceholder.classList.add('hidden');
    dropzone.classList.add('upload-preview-active');
  };
  reader.readAsDataURL(file);
}

// ============================================================
// VOLUME SELECTOR
// ============================================================

volumeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    volumeButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedVolume = btn.textContent.trim();
  });
});

// ============================================================
// FORM LOADING STATE
// ============================================================

/**
 * Toggles the loading state of the form button and progress bar container.
 * @param {boolean} isLoading - Whether the form is currently loading
 */
function setFormLoading(isLoading) {
  formFooter?.classList.toggle('hidden', isLoading);
  
  if (formLoading) {
    // Only use Tailwind's hidden class, avoid mixing with inline display
    formLoading.classList.toggle('hidden', !isLoading);
  }
  
  if (analyzeBtn) {
    analyzeBtn.disabled = isLoading;
    analyzeBtn.classList.toggle('opacity-70', isLoading);
    analyzeBtn.classList.toggle('cursor-not-allowed', isLoading);
  }
}

// ============================================================
// FORM SUBMIT & AI SIMULATION
// ============================================================

const LOADING_MSGS = [
  'Menganalisis gambar...',
  'Mendeteksi jenis material...',
  'Menghitung skor urgensi...',
  'Menyusun rekomendasi AI...',
  'Memfinalisasi laporan...',
];

function generateTicketId() {
  return `BR-2026-${Math.floor(10000 + Math.random() * 90000)}`;
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '-';
}

window.submitForm = function () {
  const kategori = document.getElementById('kategoriInput').value.trim() || 'Umum';
  const lokasi   = document.getElementById('lokasiInput').value.trim()   || 'Lokasi tidak diisi';
  const catatan  = document.getElementById('catatanInput').value.trim();

  if (!uploadedImageFile) return alert('Upload foto sampah dulu ya.');
  if (!selectedVolume)    return alert('Pilih estimasi volume dulu ya.');

  setFormLoading(true);

  let step = 0;
  const iv = setInterval(() => {
    step++;
    if (loadingBar)  loadingBar.style.width = Math.min(step * 22, 100) + '%';
    if (loadingText) loadingText.textContent = LOADING_MSGS[Math.min(step - 1, LOADING_MSGS.length - 1)];
    if (step >= 5) {
      clearInterval(iv);
      setTimeout(() => showAIResult(lokasi, kategori, selectedVolume, catatan), 500);
    }
  }, 550);
};

analyzeBtn?.addEventListener('click', () => window.submitForm?.());

// ============================================================
// AI DATA BUILDER
// ============================================================

/**
 * Generates mock contextual data for AI Result UI based on inputs.
 * @param {string} kategori - Category of trash inputted
 * @param {string} volume - Volume of trash ('Kecil', 'Sedang', 'Besar')
 * @param {string} lokasi - Location of trash
 * @returns {Object} Contextual payload map for UI
 */
function buildAIData(kategori, volume, lokasi) {
  const k = kategori.toLowerCase();
  const l = lokasi.toLowerCase();

  const data = {
    dominantLabel : `${capitalize(kategori)} Dominan`,
    dominant      : 72,
    impact        : 52,
    distance      : '42 m',
    distanceWidth : '44%',
    risiko        : 'Rendah',
    urgency       : 3,
    confidence    : 90,
    recommendation: `Sampah ${k} terdeteksi. Direkomendasikan pemisahan dan penanganan sesuai kategori.`,
    action1       : 'Prioritaskan pengumpulan di 1 titik aman',
    action2       : 'Kumpulkan lalu bawa ke TPS',
    action3       : 'Bisa lapor bila TPS terlalu jauh',
    selfGuide     : 'Gunakan perlindungan dasar lalu kumpulkan ke titik aman.',
    reportGuide1  : 'Skor 3/10, cukup dipantau petugas lokal.',
    reportGuide2  : 'Diteruskan ke petugas desa / dinas terkait.',
    selfReward    : 200,
    reportReward  : 50,
  };

  // Volume modifier
  if (volume === 'Sedang') Object.assign(data, { urgency: 5, impact: 64, dominant: 78, confidence: 92 });
  if (volume === 'Besar')  Object.assign(data, {
    urgency: 7, impact: 82, dominant: 86, confidence: 94,
    selfReward: 150, reportReward: 80,
    reportGuide1: 'Skor 7/10, lebih aman diteruskan ke petugas.',
  });

  // Kategori modifier
  if (k.includes('plastik')) {
    data.dominantLabel  = 'Plastik Dominan';
    data.dominant       = volume === 'Besar' ? 88 : volume === 'Sedang' ? 82 : 76;
    data.impact         = volume === 'Besar' ? 78 : volume === 'Sedang' ? 66 : 54;
    data.recommendation = volume === 'Besar'
      ? 'Sampah plastik volume besar terdeteksi. Disarankan dibersihkan bersama atau langsung dilaporkan ke petugas.'
      : 'Sampah plastik terdeteksi. Bersihkan mandiri lalu bawa ke TPS terdekat.';
    data.selfGuide = 'Pisahkan plastik, kumpulkan ke kantong besar, bawa ke TPS.';

  } else if (k.includes('organik')) {
    data.dominantLabel  = 'Organik Dominan';
    data.dominant       = volume === 'Besar' ? 82 : volume === 'Sedang' ? 78 : 72;
    data.impact         = volume === 'Besar' ? 70 : volume === 'Sedang' ? 60 : 54;
    data.recommendation = 'Sampah organik terdeteksi. Direkomendasikan pembuangan ke titik pengumpulan organik.';
    data.selfGuide      = 'Pisahkan sampah organik lalu pindahkan ke titik kumpul organik.';

  } else if (k.includes('b3') || k.includes('berbahaya') || k.includes('limbah')) {
    Object.assign(data, {
      dominantLabel : 'Risiko Tinggi',
      dominant: 92, impact: 88, risiko: 'Tinggi', urgency: 9, confidence: 96,
      selfReward: 50, reportReward: 120,
      recommendation : 'Material berbahaya terdeteksi. Laporkan ke petugas.',
      action1        : 'Jangan disentuh tanpa APD',
      action2        : 'Amankan area sekitar',
      action3        : 'Wajib eskalasi ke petugas',
      selfGuide      : 'Aksi mandiri tidak direkomendasikan.',
      reportGuide1   : 'Skor 9/10, wajib ditangani petugas.',
      reportGuide2   : 'Diteruskan instansi terkait prioritas tinggi.',
    });
  }

  // Lokasi modifier
  if (l.includes('pantai') || l.includes('laut')) {
    data.impact += 6;
    data.urgency += 1;
    data.recommendation += ' Prioritas penanganan meningkat.';
  }

  data.risiko = data.urgency >= 8 ? 'Tinggi' : data.urgency >= 5 ? 'Sedang' : 'Rendah';
  return data;
}

// ============================================================
// AI RESULT RENDERER
// ============================================================

/**
 * Render function to output the processed AI logic onto the page.
 * Unhides the wrapper container and triggers CSS animations.
 * 
 * @param {string} lokasi 
 * @param {string} kategori 
 * @param {string} volume 
 */
function showAIResult(lokasi, kategori, volume) {
  setFormLoading(false);
  const d  = buildAIData(kategori, volume, lokasi);
  const id = generateTicketId();

  document.getElementById('ticketIdText').textContent   = id;
  document.getElementById('confidenceText').textContent = `${d.confidence}%`;
  document.getElementById('aiScore').textContent        = `${d.confidence}%`;
  document.getElementById('resultKategori').textContent = capitalize(kategori);
  document.getElementById('resultVolume').textContent   = volume;
  document.getElementById('resultUrgency').textContent  = `${d.urgency}/10`;
  document.getElementById('resultRecommendation').textContent = d.recommendation;
  document.getElementById('resultLokasi').textContent   = lokasi;

  const risikoEl = document.getElementById('resultRisiko');
  risikoEl.textContent = d.risiko;
  risikoEl.className   = 'text-xl font-bold leading-tight ' +
    (d.risiko === 'Tinggi' ? 'text-error' : d.risiko === 'Sedang' ? 'text-warning' : 'text-success');

  const rb = document.getElementById('riskoBadge');
  rb.textContent = 'Risiko ' + d.risiko;
  rb.className   = 'rounded-full px-3 py-1.5 text-xs font-semibold ' +
    (d.risiko === 'Tinggi' ? 'bg-error/10 border border-error/20 text-error'
    : d.risiko === 'Sedang' ? 'bg-warning/10 border border-warning/20 text-warning'
    : 'bg-success/10 border border-success/20 text-success');

  document.getElementById('dominantLabel').textContent   = d.dominantLabel;
  document.getElementById('dominantPercent').textContent = `${d.dominant}%`;
  document.getElementById('impactPercent').textContent   = `${d.impact}%`;
  document.getElementById('distanceText').textContent    = d.distance;

  setTimeout(() => {
    document.getElementById('dominantBar').style.width = `${d.dominant}%`;
    document.getElementById('impactBar').style.width   = `${d.impact}%`;
    document.getElementById('distanceBar').style.width = d.distanceWidth;
  }, 700);

  document.getElementById('actionHint1').textContent = d.action1;
  document.getElementById('actionHint2').textContent = d.action2;
  document.getElementById('actionHint3').textContent = d.action3;
  document.getElementById('selfGuide').textContent    = d.selfGuide;
  document.getElementById('reportGuide1').textContent = d.reportGuide1;
  document.getElementById('reportGuide2').textContent = d.reportGuide2;
  document.getElementById('rewardPreview').textContent = `+${d.selfReward}`;
  document.getElementById('selfReward').textContent    = `+${d.selfReward}`;
  document.getElementById('reportReward').textContent  = `+${d.reportReward}`;

  if (uploadedDataUrl) {
    document.getElementById('aiPreviewImg').src = uploadedDataUrl;
    document.getElementById('aiImgBox').classList.remove('hidden');
  }

  const wrapper = document.getElementById('aiResultWrapper');
  if (wrapper) {
    // Reveal mechanism
    wrapper.classList.remove('hidden');
    wrapper.classList.add('reveal', 'reveal-up');
    
    setTimeout(() => {
      wrapper.classList.add('active');
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
}

// ============================================================
// REWARD POPUP
// ============================================================

const REWARD_CONFIG = {
  mandiri: {
    variant: 'green',
    tagLabel: 'Aksi mandiri',
    title: 'Reward untuk aksi bersih sudah siap',
    subtitle: 'Kamu akan mendapatkan poin lebih besar setelah aksi selesai dan bukti diunggah.',
    points: '+200',
    pointsNote: 'Poin masuk setelah aksi selesai diverifikasi',
    confirmText: 'Mulai aksi bersih',
    note: 'poin dikreditkan otomatis setelah foto bukti diunggah dan area dinyatakan bersih.',
    label2: 'Aksi mandiri selesai',
    val2: '+150',
    val3: '+Bonus',
    bars: ['100%', '100%', '70%'],
  },

  petugas: {
    variant: 'amber',
    tagLabel: 'Laporan petugas',
    title: 'Reward laporan berhasil diproses',
    subtitle: 'Laporanmu sudah diteruskan dan poin akan diberikan setelah verifikasi sistem.',
    points: '+50',
    pointsNote: 'Poin masuk setelah laporan diverifikasi',
    confirmText: 'Tutup',
    note: 'poin diberikan setelah laporan valid dan berhasil diteruskan ke petugas terkait.',
    label2: 'Laporan diteruskan',
    val2: '+0',
    val3: '+30',
    bars: ['100%', '35%', '45%'],
  },
};

(function initRewardPopup() {
  const overlay = document.getElementById('rewardOverlay');
  const modal = document.getElementById('rewardModal');
  const closeBtn = document.getElementById('rewardClose');

  const rmTagLabel = document.getElementById('rmTagLabel');
  const rmTitle = document.getElementById('rmTitle');
  const rmSubtitle = document.getElementById('rmSubtitle');
  const rmPoints = document.getElementById('rmPoints');
  const rmPointsNote = document.getElementById('rmPointsNote');
  const rmLabel2 = document.getElementById('rmLabel2');
  const rmVal2 = document.getElementById('rmVal2');
  const rmVal3 = document.getElementById('rmVal3');
  const rmNote = document.getElementById('rmNote');
  const rmConfirm = document.getElementById('rmConfirm');
  const rmBar1 = document.getElementById('rmBar1');
  const rmBar2 = document.getElementById('rmBar2');
  const rmBar3 = document.getElementById('rmBar3');

  function openModal(type) {
    const c = REWARD_CONFIG[type];
    if (!c || !overlay || !modal) return;

    modal.classList.remove('green', 'amber');
    modal.classList.add(c.variant);

    rmTagLabel.textContent = c.tagLabel;
    rmTitle.textContent = c.title;
    rmSubtitle.textContent = c.subtitle;
    rmPoints.textContent = c.points;
    rmPointsNote.textContent = c.pointsNote;
    rmLabel2.textContent = c.label2;
    rmVal2.textContent = c.val2;
    rmVal3.textContent = c.val3;
    rmNote.textContent = c.note;
    rmConfirm.textContent = c.confirmText;

    rmBar1.style.width = '0%';
    rmBar2.style.width = '0%';
    rmBar3.style.width = '0%';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      rmBar1.style.width = c.bars[0];
      rmBar2.style.width = c.bars[1];
      rmBar3.style.width = c.bars[2];
    }, 180);
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';

    if (rmBar1) rmBar1.style.width = '0%';
    if (rmBar2) rmBar2.style.width = '0%';
    if (rmBar3) rmBar3.style.width = '0%';
  }

  document.getElementById('btnMandiri')?.addEventListener('click', () => openModal('mandiri'));
  document.getElementById('btnPetugas')?.addEventListener('click', () => openModal('petugas'));
  rmConfirm?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

setTimeout(() => {
  document.querySelectorAll('#aiResultWrapper .reveal').forEach((el) => {
    el.classList.add('active');
  });
}, 100);