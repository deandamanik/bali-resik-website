const navbar = document.getElementById("navbar");
const choosePhotoBtn = document.getElementById("choosePhotoBtn");
const fileInput = document.getElementById("fileInput");
const dropzone = document.getElementById("dropzone");
const previewImage = document.getElementById("previewImage");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const volumeButtons = document.querySelectorAll(".volume-btn");
const analyzeBtn = document.getElementById("analyzeBtn");

let selectedVolume = "";
let uploadedImageFile = null;

// Optional UI elements (may not exist in the current HTML)
const formFooter = document.getElementById("formFooter");
const formLoading = document.getElementById("formLoading");
const loadingBar = document.getElementById("loadingBar");
const loadingText = document.getElementById("loadingText");

function setFormLoading(isLoading) {
  // Hide/show loading UI if it exists.
  if (formFooter) formFooter.classList.toggle("hidden", isLoading);
  if (formLoading) {
    formLoading.classList.toggle("hidden", !isLoading);
    if (isLoading) formLoading.style.display = "block";
  }

  // Also disable the button so user can't spam-click.
  if (analyzeBtn) {
    analyzeBtn.disabled = isLoading;
    analyzeBtn.classList.toggle("opacity-70", isLoading);
    analyzeBtn.classList.toggle("cursor-not-allowed", isLoading);
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

choosePhotoBtn.addEventListener("click", () => {
  fileInput.click();
});

dropzone.addEventListener("click", () => {
  if (!uploadedImageFile) {
    fileInput.click();
  }
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("border-primary");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("border-primary");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("border-primary");

  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    handleImageFile(file);
  }
});

let uploadedDataUrl = null;

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    handleImageFile(file);
  }
});

function handleImageFile(file) {
  uploadedImageFile = file;

  const reader = new FileReader();
  reader.onload = function (e) {
    uploadedDataUrl = e.target.result;
    previewImage.src = uploadedDataUrl;
    previewImage.classList.remove("hidden");
    uploadPlaceholder.classList.add("hidden");
    dropzone.classList.add("upload-preview-active");
  };
  reader.readAsDataURL(file);
}

volumeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    volumeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedVolume = button.textContent.trim();
  });
});

function generateTicketId() {
  return `BR-2026-${Math.floor(10000 + Math.random() * 90000)}`;
}

function capitalizeText(value) {
  if (!value) return "-";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const loadMsgs = ['Menganalisis gambar...','Mendeteksi jenis material...','Menghitung skor urgensi...','Menyusun rekomendasi AI...','Memfinalisasi laporan...'];

window.submitForm = function() {
  const kategori = document.getElementById("kategoriInput").value.trim() || 'Umum';
  const lokasi = document.getElementById("lokasiInput").value.trim() || 'Lokasi tidak diisi';
  const catatan = document.getElementById("catatanInput").value.trim();
  
  if (!uploadedImageFile) {
    alert("Upload foto sampah dulu ya.");
    return;
  }
  if (!selectedVolume) {
    alert("Pilih estimasi volume dulu ya.");
    return;
  }

  setFormLoading(true);

  let step = 0;
  const iv = setInterval(() => {
    step++;
    if (loadingBar) loadingBar.style.width = Math.min(step * 22, 100) + '%';
    if (loadingText) loadingText.textContent = loadMsgs[Math.min(step - 1, loadMsgs.length - 1)];
    if (step >= 5) { 
      clearInterval(iv); 
      setTimeout(() => showAI(lokasi, kategori, selectedVolume, catatan), 500); 
    }
  }, 550);
}

function showAI(lokasi, kategori, volume, catatan) {
  // Re-enable the submit button as soon as we start rendering results.
  setFormLoading(false);

  const ticketId = generateTicketId();

  const kategoriLower = kategori.toLowerCase();
  const catatanLower = catatan.toLowerCase();
  const lokasiLower = lokasi.toLowerCase();

  let dominantLabel = `${capitalizeText(kategori)} Dominan`;
  let dominant = 72;
  let impact = 52;
  let distance = "42 m";
  let distanceWidth = "44%";
  let risiko = "Rendah";
  let urgency = 3;
  let confidence = 90;
  let recommendation = `Sampah ${kategoriLower} terdeteksi. Direkomendasikan pemisahan dan penanganan sesuai kategori yang dipilih user.`;
  let action1 = "Prioritaskan pengumpulan di 1 titik aman";
  let action2 = "Kumpulkan lalu bawa ke TPS";
  let action3 = "Bisa lapor bila TPS terlalu jauh";
  let selfGuide = "Gunakan perlindungan dasar lalu kumpulkan ke titik aman.";
  let reportGuide1 = "Skor 3/10, cukup dipantau petugas lokal.";
  let reportGuide2 = "Diteruskan ke petugas desa / dinas terkait.";
  let selfReward = 200;
  let reportReward = 50;
  
  if (volume === "Sedang") { urgency = 5; impact = 64; dominant = 78; confidence = 92; }
  if (volume === "Besar") { urgency = 7; impact = 82; dominant = 86; confidence = 94; selfReward = 150; reportReward = 80; reportGuide1 = "Skor 7/10, lebih aman diteruskan ke petugas."; }

  if (kategoriLower.includes("plastik")) {
    dominantLabel = "Plastik Dominan";
    dominant = volume === "Besar" ? 88 : volume === "Sedang" ? 82 : 76;
    impact = volume === "Besar" ? 78 : volume === "Sedang" ? 66 : 54;
    recommendation = volume === "Besar" ? "Sampah plastik volume besar terdeteksi. Disarankan dibersihkan bersama atau langsung dilaporkan ke petugas." : "Sampah plastik terdeteksi. Bersihkan mandiri lalu bawa ke TPS terdekat.";
    selfGuide = "Pisahkan plastik, kumpulkan ke kantong besar, bawa ke TPS.";
  } else if (kategoriLower.includes("organik")) {
    dominantLabel = "Organik Dominan";
    dominant = volume === "Besar" ? 82 : volume === "Sedang" ? 78 : 72;
    impact = volume === "Besar" ? 70 : volume === "Sedang" ? 60 : 54;
    recommendation = "Sampah organik terdeteksi. Direkomendasikan pembuangan ke titik pengumpulan organik.";
    selfGuide = "Pisahkan sampah organik lalu pindahkan ke titik kumpul organik.";
  } else if (kategoriLower.includes("b3") || kategoriLower.includes("berbahaya") || kategoriLower.includes("limbah")) {
    dominantLabel = "Risiko Tinggi"; dominant = 92; impact = 88; risiko = "Tinggi"; urgency = 9; confidence = 96; selfReward = 50; reportReward = 120;
    recommendation = "Material berbahaya terdeteksi. Laporkan ke petugas.";
    action1 = "Jangan disentuh tanpa APD"; action2 = "Amankan area sekitar"; action3 = "Wajib eskalasi ke petugas";
    selfGuide = "Aksi mandiri tidak direkomendasikan.";
    reportGuide1 = "Skor 9/10, wajib ditangani petugas."; reportGuide2 = "Diteruskan instansi terkait prioritas tinggi.";
  }

  if (lokasiLower.includes("pantai") || lokasiLower.includes("laut")) { impact += 6; urgency += 1; recommendation += " Prioritas penanganan meningkat."; }
  if (urgency >= 8) risiko = "Tinggi"; else if (urgency >= 5) risiko = "Sedang"; else risiko = "Rendah";

  document.getElementById("ticketIdText").textContent = ticketId;
  document.getElementById("confidenceText").textContent = `${confidence}%`;
  document.getElementById("aiScore").textContent = `${confidence}%`;

  document.getElementById("resultKategori").textContent = capitalizeText(kategori);
  document.getElementById("resultVolume").textContent = volume;
  document.getElementById("resultUrgency").textContent = `${urgency}/10`;
  document.getElementById("resultRecommendation").textContent = recommendation;
  document.getElementById("resultLokasi").textContent = lokasi;

  const risikoEl = document.getElementById("resultRisiko");
  risikoEl.textContent = risiko;
  risikoEl.className = "text-xl font-bold leading-tight " + (risiko === "Tinggi" ? "text-error" : risiko === "Sedang" ? "text-warning" : "text-success");
  
  const rb = document.getElementById("riskoBadge");
  rb.textContent = "Risiko " + risiko;
  rb.className = "rounded-full px-3 py-1.5 text-xs font-semibold " + (risiko === "Tinggi" ? "bg-error/10 border border-error/20 text-error" : risiko === "Sedang" ? "bg-warning/10 border border-warning/20 text-warning" : "bg-success/10 border border-success/20 text-success");

  document.getElementById("dominantLabel").textContent = dominantLabel;
  document.getElementById("dominantPercent").textContent = `${dominant}%`;
  document.getElementById("impactPercent").textContent = `${impact}%`;
  document.getElementById("distanceText").textContent = distance;

  setTimeout(() => {
    document.getElementById("dominantBar").style.width = `${dominant}%`;
    document.getElementById("impactBar").style.width = `${impact}%`;
    document.getElementById("distanceBar").style.width = distanceWidth;
  }, 700);

  document.getElementById("actionHint1").textContent = action1;
  document.getElementById("actionHint2").textContent = action2;
  document.getElementById("actionHint3").textContent = action3;

  document.getElementById("selfGuide").textContent = selfGuide;
  document.getElementById("reportGuide1").textContent = reportGuide1;
  document.getElementById("reportGuide2").textContent = reportGuide2;

  document.getElementById("rewardPreview").textContent = `+${selfReward}`;
  document.getElementById("selfReward").textContent = `+${selfReward}`;
  document.getElementById("reportReward").textContent = `+${reportReward}`;

  if (uploadedDataUrl) {
    document.getElementById('aiPreviewImg').src = uploadedDataUrl;
    document.getElementById('aiImgBox').classList.remove('hidden');
  }

  const resultWrapper = document.getElementById("aiResultWrapper");
  resultWrapper.classList.remove("hidden");
  resultWrapper.style.display = 'block';
  setTimeout(() => resultWrapper.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
}

// Wire up the main "Kirim & Analisis AI" button.
// (Without this, clicking the button won't call `window.submitForm`.)
if (analyzeBtn) {
  analyzeBtn.addEventListener("click", () => {
    if (typeof window.submitForm === "function") window.submitForm();
  });
}