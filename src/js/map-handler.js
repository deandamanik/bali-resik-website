// =============================================
// DATA
// =============================================

const reports = [
    { id: 1, title: "Pesisir Pantai Sanur", lat: -8.6750, lng: 115.2630, status: "Kritis", pelapor: "Wayan Sudarma", time: "12 menit lalu", img: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbe5e?q=80&w=2070", desc: "Tumpukan plastik kiriman di dekat dermaga penyeberangan." },
    { id: 2, title: "Tukad Badung", lat: -8.6650, lng: 115.2150, status: "Waspada", pelapor: "Made Gede", time: "1 jam lalu", img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=2000", desc: "Sampah domestik menyumbat aliran sungai di bawah jembatan." },
    { id: 3, title: "Hutan Mangrove Suwung", lat: -8.7391, lng: 115.2140, status: "Selesai", pelapor: "Santi Putri", time: "2 hari lalu", img: "https://images.unsplash.com/photo-1532660621034-ee5b6ad1f168?q=80&w=2000", desc: "Area mangrove sudah dibersihkan oleh komunitas lokal." },
    { id: 4, title: "Pantai Petitenget", lat: -8.6820, lng: 115.1510, status: "Selesai", pelapor: "Gede Agus", time: "5 jam lalu", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2000", desc: "Limbah kayu hanyut sudah diangkut oleh petugas kebersihan." },
    { id: 5, title: "Pasar Kumbasari", lat: -8.6580, lng: 115.2130, status: "Kritis", pelapor: "Ketut Arta", time: "30 menit lalu", img: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2000", desc: "Sampah organik pasar meluap hingga ke bahu jalan." },
    { id: 6, title: "Area Pura Uluwatu", lat: -8.8290, lng: 115.0840, status: "Waspada", pelapor: "Putu Siska", time: "3 jam lalu", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000", desc: "Sisa sesajen dan plastik botol berserakan di jalur tracking." },
    { id: 7, title: "Pantai Pandawa", lat: -8.8450, lng: 115.1850, status: "Selesai", pelapor: "Nyoman Satria", time: "1 hari lalu", img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2000", desc: "Pembersihan rutin oleh pengelola pantai sudah selesai dilakukan." },
    { id: 8, title: "Pantai Kuta", lat: -8.7180, lng: 115.1680, status: "Kritis", pelapor: "Komang Ardi", time: "18 menit lalu", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000", desc: "Sampah plastik wisatawan menumpuk di area bibir pantai." },
    { id: 9, title: "Pasar Badung", lat: -8.6545, lng: 115.2105, status: "Waspada", pelapor: "Kadek Yoga", time: "45 menit lalu", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000", desc: "Sisa sampah sayur dan plastik mulai menumpuk di area belakang pasar." },  
    { id: 10, title: "Pantai Jimbaran", lat: -8.7900, lng: 115.1600, status: "Kritis", pelapor: "Luh Ayu", time: "20 menit lalu", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2000", desc: "Limbah plastik dan styrofoam ditemukan di area pesisir." },
    { id: 11, title: "Terminal Ubung", lat: -8.6400, lng: 115.2000, status: "Waspada", pelapor: "Nyoman Eka", time: "2 jam lalu", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000", desc: "Area terminal dipenuhi sampah botol dan makanan." },
    { id: 12, title: "Pantai Berawa", lat: -8.6600, lng: 115.1300, status: "Selesai", pelapor: "Made Suta", time: "5 jam lalu", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000", desc: "Pembersihan pantai selesai dilakukan komunitas lokal." },
    { id: 13, title: "Danau Batur", lat: -8.2500, lng: 115.3700, status: "Waspada", pelapor: "Ketut Budi", time: "1 hari lalu", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000", desc: "Sampah pengunjung ditemukan di sekitar area danau." },
    { id: 14, title: "Pantai Melasti", lat: -8.8470, lng: 115.1540, status: "Kritis", pelapor: "Putu Adi", time: "10 menit lalu", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000", desc: "Tumpukan sampah kiriman laut mulai meningkat." },
    { id: 15, title: "Tukad Ayung", lat: -8.5000, lng: 115.2600, status: "Selesai", pelapor: "Gusti Rai", time: "3 hari lalu", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000", desc: "Pembersihan sungai berhasil dilakukan bersama relawan." },
];

// Data TPA di Bali (kapasitas: overload / sedang / lega)
const tpaData = [
    { id: 1, nama: "TPA Suwung", lat: -8.7450, lng: 115.2180, kapasitas: "overload", persen: 95, kabupaten: "Denpasar / Badung", operasi: "06.00 - 18.00" },
    { id: 2, nama: "TPA Temesi", lat: -8.5850, lng: 115.3580, kapasitas: "sedang", persen: 68, kabupaten: "Gianyar", operasi: "06.00 - 17.00" },
    { id: 3, nama: "TPA Peh", lat: -8.3200, lng: 115.0850, kapasitas: "lega", persen: 40, kabupaten: "Buleleng", operasi: "06.00 - 17.00" },
    { id: 4, nama: "TPA Mandung", lat: -8.5460, lng: 115.0730, kapasitas: "sedang", persen: 72, kabupaten: "Tabanan", operasi: "06.00 - 17.00" },
    { id: 5, nama: "TPA Linggasana", lat: -8.4620, lng: 115.3510, kapasitas: "lega", persen: 35, kabupaten: "Bangli", operasi: "06.00 - 16.00" },
    { id: 6, nama: "TPA Karangasem", lat: -8.4530, lng: 115.6080, kapasitas: "sedang", persen: 60, kabupaten: "Karangasem", operasi: "06.00 - 17.00" },
];

// Data Bank Sampah & Pengepul di Bali
const bankSampahData = [
    { id: 1, nama: "Bank Sampah Induk Denpasar", lat: -8.6705, lng: 115.2126, tipe: "bank_sampah", alamat: "Jl. Cargo, Denpasar Utara", jam: "Senin-Jumat 08.00-16.00", terima: ["Plastik", "Kertas", "Logam", "Kaca"], harga: "Sesuai harga pengepul", cara_daftar: "Datang langsung, bawa KTP" },
    { id: 2, nama: "Bank Sampah Gianyar Bersih", lat: -8.5380, lng: 115.3250, tipe: "bank_sampah", alamat: "Jl. Ngurah Rai, Gianyar", jam: "Senin-Sabtu 08.00-15.00", terima: ["Plastik", "Kertas", "Organik"], harga: "Dibayar per kg", cara_daftar: "Hubungi koordinator desa" },
    { id: 3, nama: "Pengepul Logam & Elektronik Sanur", lat: -8.6880, lng: 115.2620, tipe: "pengepul", alamat: "Jl. Danau Poso, Sanur", jam: "Setiap hari 08.00-17.00", terima: ["Logam", "Elektronik", "TV", "Kulkas", "AC"], harga: "Besi Rp 3.000/kg, Tembaga Rp 60.000/kg", cara_daftar: "Langsung datang" },
    { id: 4, nama: "Bank Sampah Kuta Lestari", lat: -8.7200, lng: 115.1680, tipe: "bank_sampah", alamat: "Jl. Raya Kuta, Badung", jam: "Selasa & Jumat 09.00-14.00", terima: ["Plastik", "Botol", "Kardus"], harga: "Botol plastik Rp 1.500/kg", cara_daftar: "Daftar online via WhatsApp" },
    { id: 5, nama: "Pengepul Barang Bekas Ubud", lat: -8.5069, lng: 115.2624, tipe: "pengepul", alamat: "Jl. Raya Ubud, Gianyar", jam: "Setiap hari 07.00-18.00", terima: ["Furniture", "Elektronik", "Buku", "Pakaian"], harga: "Nego langsung", cara_daftar: "Langsung datang atau hubungi telepon" },
    { id: 6, nama: "Bank Sampah Buleleng Mandiri", lat: -8.1120, lng: 115.0890, tipe: "bank_sampah", alamat: "Jl. A. Yani, Singaraja", jam: "Senin-Jumat 08.00-16.00", terima: ["Plastik", "Kertas", "Logam"], harga: "Tabungan sampah per bulan", cara_daftar: "Daftar via kelurahan setempat" },
    { id: 7, nama: "Pengepul Minyak Jelantah Denpasar", lat: -8.6520, lng: 115.2300, tipe: "pengepul", alamat: "Jl. Imam Bonjol, Denpasar", jam: "Senin-Sabtu 08.00-17.00", terima: ["Minyak jelantah"], harga: "Rp 4.000/liter", cara_daftar: "Langsung datang bawa jerigen" },
    { id: 8, nama: "Bank Sampah Renon Hijau", lat: -8.6710, lng: 115.2390, tipe: "bank_sampah", alamat: "Jl. Raya Puputan, Renon", jam: "Senin-Sabtu 08.00-15.00", terima: ["Plastik", "Kertas"], harga: "Dibayar per kg", cara_daftar: "Datang langsung" },
    { id: 9, nama: "Pengepul Kardus Sesetan", lat: -8.7000, lng: 115.2200, tipe: "pengepul", alamat: "Jl. Sesetan, Denpasar", jam: "08.00-17.00", terima: ["Kardus", "Kertas"], harga: "Rp 2.000/kg", cara_daftar: "Langsung datang" },
    { id: 10, nama: "Bank Sampah Cemara Ubud", lat: -8.5200, lng: 115.2650, tipe: "bank_sampah", alamat: "Jl. Monkey Forest, Ubud", jam: "Senin-Jumat 09.00-16.00", terima: ["Botol", "Kertas", "Organik"], harga: "Tabungan sampah", cara_daftar: "Daftar via admin desa" },
    { id: 11, nama: "Pengepul Plastik Jimbaran", lat: -8.7900, lng: 115.1700, tipe: "pengepul", alamat: "Jl. Uluwatu, Jimbaran", jam: "Setiap hari 08.00-18.00", terima: ["Plastik", "Botol"], harga: "Rp 1.800/kg", cara_daftar: "Langsung datang" },
];

// =============================================
// STATE LAYER
// =============================================
let layerState = {
    laporan: true,
    heatmap: false,
    tpa: false,
    banksampah: false
};

let map;
let laporanLayerGroup;
let heatmapLayer;
let tpaLayerGroup;
let bankSampahLayerGroup;
let userLocationMarker;

// =============================================
// INISIALISASI MAP
// =============================================
const initMap = () => {
    const southWest = L.latLng(-8.95, 114.3);
    const northEast = L.latLng(-8.00, 115.8);
    const bounds = L.latLngBounds(southWest, northEast);

    map = L.map('map-container', {
        center: [-8.70, 115.18],
        zoom: 11,
        minZoom: 10,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Inisialisasi semua layer
    initLaporanLayer();
    initHeatmapLayer();
    initTpaLayer();
    initBankSampahLayer();

    // Tampilkan hanya layer yang aktif di awal
    updateLayerVisibility();

    // Setup tombol toggle
    setupLayerToggles();

    // Setup tombol GPS terdekat
    document.getElementById('btn-nearest').addEventListener('click', findNearestBankSampah);

    map.on('click', (e) => {
        if (e.originalEvent.target.id === 'map-container') closeDetail();
    });
};

// =============================================
// LAYER 1: LAPORAN (titik yang sudah ada)
// =============================================
const initLaporanLayer = () => {
    laporanLayerGroup = L.layerGroup();

    reports.forEach(report => {
        let color = '#F59E0B';
        if (report.status === 'Kritis') color = '#EF4444';
        if (report.status === 'Selesai') color = '#1F7A6B';

        const marker = L.circleMarker([report.lat, report.lng], {
            radius: 9,
            fillColor: color,
            color: "#fff",
            weight: 2,
            fillOpacity: 0.9
        });

        marker.on('click', () => {
            map.flyTo([report.lat, report.lng + 0.02], 13, { duration: 1.2 });
            openDetail(report);
        });

        laporanLayerGroup.addLayer(marker);
    });
};

// =============================================
// LAYER 2: HEATMAP
// =============================================
const initHeatmapLayer = () => {
    // Titik heatmap dari laporan (kritis = intensitas tinggi)
    const heatPoints = reports.map(r => {
        const intensity = r.status === 'Kritis' ? 1.0 : r.status === 'Waspada' ? 0.6 : 0.2;
        return [r.lat, r.lng, intensity];
    });

    // Tambah beberapa titik dense area untuk visual yang lebih realistis
    const denseAreas = [
        [-8.6600, 115.2200, 0.9], // Denpasar kota
        [-8.6500, 115.2100, 0.8],
        [-8.6700, 115.2300, 0.7],
        [-8.7100, 115.1800, 0.6], // Kuta area
        [-8.7200, 115.1700, 0.7],
        [-8.5400, 115.3300, 0.5], // Gianyar
        [-8.8200, 115.0900, 0.4], // Uluwatu
    ];

    heatmapLayer = L.heatLayer([...heatPoints, ...denseAreas], {
        radius: 35,
        blur: 25,
        maxZoom: 14,
        max: 1.0,
        gradient: {
            0.0: '#00ff00',  // hijau = sedikit
            0.4: '#ffff00',  // kuning = sedang
            0.7: '#ff8800',  // oranye = banyak
            1.0: '#ff0000'   // merah = kritis
        }
    });
};

// =============================================
// LAYER 3: TPA
// =============================================
const initTpaLayer = () => {
    tpaLayerGroup = L.layerGroup();

    tpaData.forEach(tpa => {
        let color = '#8B5CF6'; // ungu default
        let fillColor = '#8B5CF6';
        let kapasitasLabel = '';
        let kapasitasBg = '';

        if (tpa.kapasitas === 'overload') {
            fillColor = '#EF4444';
            color = '#EF4444';
            kapasitasLabel = 'Overload';
            kapasitasBg = 'bg-red-100 text-red-600';
        } else if (tpa.kapasitas === 'sedang') {
            fillColor = '#F59E0B';
            color = '#F59E0B';
            kapasitasLabel = 'Hampir Penuh';
            kapasitasBg = 'bg-amber-100 text-amber-600';
        } else {
            fillColor = '#10B981';
            color = '#10B981';
            kapasitasLabel = 'Masih Lega';
            kapasitasBg = 'bg-green-100 text-green-600';
        }

        // Icon TPA pakai polygon segitiga / marker khusus
        const tpaIcon = L.divIcon({
            className: '',
            html: `<div style="
                width: 32px; height: 32px;
                background: ${fillColor};
                border: 3px solid white;
                border-radius: 6px;
                display: flex; align-items: center; justify-content: center;
                font-size: 14px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">🗑️</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const marker = L.marker([tpa.lat, tpa.lng], { icon: tpaIcon });

        marker.on('click', () => {
            map.flyTo([tpa.lat, tpa.lng + 0.02], 13, { duration: 1.2 });
            openTpaDetail(tpa, kapasitasLabel, kapasitasBg, fillColor);
        });

        tpaLayerGroup.addLayer(marker);
    });
};

// =============================================
// LAYER 4: BANK SAMPAH & PENGEPUL
// =============================================
const initBankSampahLayer = () => {
    bankSampahLayerGroup = L.layerGroup();

    bankSampahData.forEach(bs => {
        const isBank = bs.tipe === 'bank_sampah';
        const emoji = isBank ? '♻️' : '🏪';
        const bgColor = isBank ? '#3B82F6' : '#6366F1';

        const bsIcon = L.divIcon({
            className: '',
            html: `<div style="
                width: 32px; height: 32px;
                background: ${bgColor};
                border: 3px solid white;
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 14px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">${emoji}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const marker = L.marker([bs.lat, bs.lng], { icon: bsIcon });

        marker.on('click', () => {
            map.flyTo([bs.lat, bs.lng + 0.02], 13, { duration: 1.2 });
            openBankSampahDetail(bs);
        });

        bankSampahLayerGroup.addLayer(marker);
    });
};

const updateLayerVisibility = () => {
    if (layerState.laporan) {
        map.addLayer(laporanLayerGroup);
    } else {
        map.removeLayer(laporanLayerGroup);
    }

    if (layerState.heatmap) {
        map.addLayer(heatmapLayer);
    } else {
        map.removeLayer(heatmapLayer);
    }

    if (layerState.tpa) {
        map.addLayer(tpaLayerGroup);
    } else {
        map.removeLayer(tpaLayerGroup);
    }

    if (layerState.banksampah) {
        map.addLayer(bankSampahLayerGroup);
    } else {
        map.removeLayer(bankSampahLayerGroup);
    }
};

const setupLayerToggles = () => {
    const btnLaporan = document.getElementById('btn-laporan');
    const btnHeatmap = document.getElementById('btn-heatmap');
    const btnTpa = document.getElementById('btn-tpa');
    const btnBankSampah = document.getElementById('btn-banksampah');

    btnLaporan.addEventListener('click', () => {
        layerState.laporan = !layerState.laporan;
        btnLaporan.classList.toggle('active', layerState.laporan);
        updateLayerVisibility();
    });

    btnHeatmap.addEventListener('click', () => {
        layerState.heatmap = !layerState.heatmap;
        btnHeatmap.classList.toggle('active', layerState.heatmap);
        updateLayerVisibility();
    });

    btnTpa.addEventListener('click', () => {
        layerState.tpa = !layerState.tpa;
        btnTpa.classList.toggle('active', layerState.tpa);
        updateLayerVisibility();
    });

    btnBankSampah.addEventListener('click', () => {
        layerState.banksampah = !layerState.banksampah;
        btnBankSampah.classList.toggle('active', layerState.banksampah);
        updateLayerVisibility();
    });
};

// =============================================
// FIND NEAREST BANK SAMPAH (GPS)
// =============================================
const findNearestBankSampah = () => {
    const btn = document.getElementById('btn-nearest');
    btn.innerHTML = `<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Mencari lokasi...`;
    btn.disabled = true;

    if (!navigator.geolocation) {
        alert('Browser Anda tidak mendukung GPS.');
        resetNearestBtn();
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Hapus marker user sebelumnya
            if (userLocationMarker) {
                map.removeLayer(userLocationMarker);
            }

            // Tambah marker lokasi user
            const userIcon = L.divIcon({
                className: '',
                html: `<div style="
                    width: 20px; height: 20px;
                    background: #3B82F6;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px rgba(59,130,246,0.3);
                "></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            userLocationMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(map);

            // Hitung jarak ke semua bank sampah
            const withDistance = bankSampahData.map(bs => {
                const dist = haversineDistance(userLat, userLng, bs.lat, bs.lng);
                return { ...bs, jarak: dist };
            });

            // Sort by jarak
            withDistance.sort((a, b) => a.jarak - b.jarak);
            const nearest = withDistance[0];

            // Aktifkan layer bank sampah
            layerState.banksampah = true;
            document.getElementById('btn-banksampah').classList.add('active');
            updateLayerVisibility();

            // Fly ke bank sampah terdekat
            map.flyTo([nearest.lat, nearest.lng], 14, { duration: 1.5 });

            // Tampilkan detail
            setTimeout(() => {
                openBankSampahDetail(nearest, nearest.jarak);
            }, 1600);

            resetNearestBtn();
        },
        (error) => {
            alert('Gagal mendapatkan lokasi. Pastikan GPS aktif dan izin diberikan.');
            resetNearestBtn();
        }
    );
};

const resetNearestBtn = () => {
    const btn = document.getElementById('btn-nearest');
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Temukan Bank Sampah Terdekat`;
    btn.disabled = false;
};

// Hitung jarak haversine (km)
const haversineDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
};

// =============================================
// DETAIL PANELS
// =============================================
const openDetail = (data) => {
    const panel = document.getElementById('side-panel');
    const content = document.getElementById('detail-content');

    let statusLabel = "";
    let statusBg = "";
    let textColor = "text-white";

    if (data.status === 'Kritis') {
        statusLabel = "Menunggu Penanganan Prioritas";
        statusBg = "bg-[#EF4444]";
    } else if (data.status === 'Selesai') {
        statusLabel = "Laporan Telah Diselesaikan";
        statusBg = "bg-[#1F7A6B]/10";
        textColor = "text-[#1F7A6B]";
    } else {
        statusLabel = "Sedang Dalam Penanganan";
        statusBg = "bg-[#F59E0B]";
    }

    const dotColor = data.status === 'Kritis' ? 'bg-[#EF4444]' : (data.status === 'Selesai' ? 'bg-[#1F7A6B]' : 'bg-[#F59E0B]');

    content.innerHTML = `
        <div class="flex flex-col animate-slideInRight h-fit font-poppins">
            <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 rounded-full ${dotColor} ${data.status !== 'Selesai' ? 'animate-pulse' : ''}"></span>
                <span class="text-black text-[10px] tracking-widest font-normal opacity-70">${data.status} • ${data.time}</span>
            </div>
            <h2 class="text-xl font-semibold text-[#153C35] mb-5 leading-tight">${data.title}</h2>
            <div class="relative w-full h-40 rounded-[25px] overflow-hidden mb-5 bg-gray-50 border border-gray-100 shadow-sm">
                <img src="${data.img}" class="w-full h-full object-cover">
            </div>
            <p class="text-gray-500 text-xs leading-relaxed mb-8">${data.desc}</p>
            <div class="w-full py-4 ${statusBg} ${textColor} rounded-2xl font-semibold text-sm text-center transition-all shadow-sm border border-black/5 flex items-center justify-center gap-2 pointer-events-none mb-8">
                ${data.status === 'Selesai' ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>` : ''}
                ${statusLabel}
            </div>
            <div class="flex items-center justify-between py-4 border-t border-gray-100 opacity-80">
                <div>
                    <p class="text-[9px] text-black tracking-widest uppercase mb-0.5 opacity-60">Pelapor</p>
                    <p class="text-[#153C35] font-medium text-xs">${data.pelapor}</p>
                </div>
                <div class="text-right">
                    <p class="text-[9px] text-black tracking-widest uppercase mb-0.5 opacity-60">Lokasi</p>
                    <p class="text-[#153C35] font-medium text-[10px]">Lat: ${data.lat.toFixed(3)} Lng: ${data.lng.toFixed(3)}</p>
                </div>
            </div>
        </div>
    `;

    panel.classList.remove('translate-x-[120%]');
};

const openTpaDetail = (tpa, kapasitasLabel, kapasitasBg, warna) => {
    const content = document.getElementById('detail-content');

    const barColor = tpa.kapasitas === 'overload' ? '#EF4444' : tpa.kapasitas === 'sedang' ? '#F59E0B' : '#10B981';

    content.innerHTML = `
        <div class="flex flex-col font-poppins">
            <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">🗑️</span>
                <span class="text-[10px] tracking-widest font-normal opacity-70 uppercase">TPA</span>
            </div>
            <h2 class="text-xl font-semibold text-[#153C35] mb-1 leading-tight">${tpa.nama}</h2>
            <p class="text-gray-400 text-xs mb-5">${tpa.kabupaten}</p>

            <!-- Kapasitas bar -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-medium text-gray-500">Kapasitas Terisi</span>
                    <span class="text-xs font-bold" style="color: ${barColor}">${tpa.persen}%</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3">
                    <div class="h-3 rounded-full transition-all duration-500" style="width: ${tpa.persen}%; background: ${barColor}"></div>
                </div>
                <div class="mt-2 inline-flex px-3 py-1 rounded-full text-xs font-semibold ${kapasitasBg}">
                    ${kapasitasLabel}
                </div>
            </div>

            <div class="space-y-3 border-t border-gray-100 pt-4">
                <div class="flex justify-between">
                    <span class="text-[10px] text-gray-400 uppercase tracking-wider">Jam Operasi</span>
                    <span class="text-xs font-medium text-[#153C35]">${tpa.operasi}</span>
                </div>
            </div>

            ${tpa.kapasitas === 'overload' ? `
            <div class="mt-6 p-3 bg-red-50 border border-red-100 rounded-2xl">
                <p class="text-xs text-red-600 font-medium">⚠️ TPA ini sudah overload. Pemerintah daerah perlu segera mengambil tindakan.</p>
            </div>` : ''}
        </div>
    `;

    document.getElementById('side-panel').classList.remove('translate-x-[120%]');
};

const openBankSampahDetail = (bs, jarakKm = null) => {
    const content = document.getElementById('detail-content');
    const isBank = bs.tipe === 'bank_sampah';
    const emoji = isBank ? '♻️' : '🏪';
    const tipeLabel = isBank ? 'Bank Sampah' : 'Pengepul';
    const bgColor = isBank ? '#3B82F6' : '#6366F1';

    const jarakHtml = jarakKm !== null ? `
        <div class="mb-4 inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
            📍 ${jarakKm.toFixed(1)} km dari lokasi Anda (terdekat)
        </div>
    ` : '';

    const terimaHtml = bs.terima.map(t => `
        <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-medium">${t}</span>
    `).join('');

    content.innerHTML = `
        <div class="flex flex-col font-poppins">
            <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">${emoji}</span>
                <span class="text-[10px] tracking-widest font-normal opacity-70 uppercase">${tipeLabel}</span>
            </div>
            <h2 class="text-xl font-semibold text-[#153C35] mb-1 leading-tight">${bs.nama}</h2>
            <p class="text-gray-400 text-xs mb-3">${bs.alamat}</p>

            ${jarakHtml}

            <div class="space-y-4 border-t border-gray-100 pt-4 mb-5">
                <div>
                    <p class="text-[9px] text-gray-400 uppercase tracking-wider mb-1">Jam Operasi</p>
                    <p class="text-xs font-medium text-[#153C35]">${bs.jam}</p>
                </div>
                <div>
                    <p class="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Jenis Sampah Diterima</p>
                    <div class="flex flex-wrap gap-1">${terimaHtml}</div>
                </div>
                <div>
                    <p class="text-[9px] text-gray-400 uppercase tracking-wider mb-1">Harga / Kompensasi</p>
                    <p class="text-xs font-medium text-[#153C35]">${bs.harga}</p>
                </div>
                <div>
                    <p class="text-[9px] text-gray-400 uppercase tracking-wider mb-1">Cara Bergabung</p>
                    <p class="text-xs text-gray-500 leading-relaxed">${bs.cara_daftar}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('side-panel').classList.remove('translate-x-[120%]');
};

const closeDetail = () => {
    document.getElementById('side-panel').classList.add('translate-x-[120%]');
};

document.addEventListener('DOMContentLoaded', initMap);