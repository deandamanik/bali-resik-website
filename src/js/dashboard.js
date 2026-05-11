// =============================================
// SIDEBAR CONFIG
// =============================================
const navItems = [
    { label: 'Overview',             href: 'government-dashboard.html', icon: '📊' },
    { label: 'Peta & Wilayah',       href: 'dashboard-peta.html',       icon: '🗺️' },
    { label: 'Data Sampah',          href: 'dashboard-data.html',       icon: '🗑️' },
    { label: 'Ekosistem & Komunitas',href: 'dashboard-ekosistem.html',  icon: '🌿' },
    { label: 'Insight & Prediksi',   href: 'dashboard-insight.html',    icon: '🔮' },
];

const navBottom = [
    { label: 'Export Data',  href: '#', icon: '⬇️' },
    { label: 'Pengaturan',   href: '#', icon: '⚙️' },
];

const renderSidebar = () => {
    const nav = document.getElementById('sidebar-nav');
    const current = window.location.pathname.split('/').pop() || 'government-dashboard.html';

    const makeItem = (item) => {
        const isActive = current === item.href;
        return `
            <a href="${item.href}" class="nav-item flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-medium ${isActive ? 'active' : ''}">
                <span class="w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-[#4CAF8A]' : 'bg-white/20'}"></span>
                ${item.label}
            </a>`;
    };

    nav.innerHTML = `
        <div class="mb-2">
            <div class="text-[9px] text-white/30 uppercase tracking-widest px-3 mb-1.5">Menu</div>
            ${navItems.map(makeItem).join('')}
        </div>
        <div class="mt-4">
            <div class="text-[9px] text-white/30 uppercase tracking-widest px-3 mb-1.5">Lainnya</div>
            ${navBottom.map(makeItem).join('')}
        </div>`;
};

// =============================================
// SHARED DATA
// =============================================
const tpaData = [
    { name: 'TPA Suwung',     kab: 'Denpasar / Badung', pct: 95, status: 'overload', lat: -8.7450, lng: 115.2180, operasi: '06.00 – 18.00' },
    { name: 'TPA Temesi',     kab: 'Gianyar',           pct: 68, status: 'sedang',   lat: -8.5850, lng: 115.3580, operasi: '06.00 – 17.00' },
    { name: 'TPA Mandung',    kab: 'Tabanan',            pct: 72, status: 'sedang',   lat: -8.5460, lng: 115.0730, operasi: '06.00 – 17.00' },
    { name: 'TPA Peh',        kab: 'Buleleng',           pct: 40, status: 'lega',     lat: -8.3200, lng: 115.0850, operasi: '06.00 – 17.00' },
    { name: 'TPA Linggasana', kab: 'Bangli',             pct: 35, status: 'lega',     lat: -8.4620, lng: 115.3510, operasi: '06.00 – 16.00' },
    { name: 'TPA Karangasem', kab: 'Karangasem',         pct: 60, status: 'sedang',   lat: -8.4530, lng: 115.6080, operasi: '06.00 – 17.00' },
];

const jenisData = [
    { label: 'Plastik',    pct: 38, color: '#EF4444' },
    { label: 'Organik',    pct: 28, color: '#F59E0B' },
    { label: 'Kertas',     pct: 14, color: '#3B82F6' },
    { label: 'Elektronik', pct: 11, color: '#8B5CF6' },
    { label: 'Lainnya',    pct: 9,  color: '#9CA3AF' },
];

const progressData = [
    { name: 'Badung',     pct: 89 },
    { name: 'Gianyar',    pct: 81 },
    { name: 'Denpasar',   pct: 74 },
    { name: 'Tabanan',    pct: 67 },
    { name: 'Buleleng',   pct: 58 },
    { name: 'Karangasem', pct: 44 },
    { name: 'Jembrana',   pct: 39 },
];

const petugasData = [
    { inisial: 'WS', nama: 'Wayan Santosa',   area: 'Denpasar Selatan', laporan: 47, selesai: 44, waktu: 2.1, rating: 4.9 },
    { inisial: 'MR', nama: 'Made Ramadhan',   area: 'Kuta, Badung',     laporan: 41, selesai: 38, waktu: 2.4, rating: 4.7 },
    { inisial: 'NP', nama: 'Nyoman Prasetya', area: 'Seminyak',         laporan: 38, selesai: 34, waktu: 2.8, rating: 4.6 },
    { inisial: 'KA', nama: 'Ketut Ariawan',   area: 'Gianyar Kota',     laporan: 29, selesai: 25, waktu: 3.2, rating: 4.4 },
    { inisial: 'PD', nama: 'Putu Darmawan',   area: 'Ubud, Gianyar',   laporan: 24, selesai: 19, waktu: 3.6, rating: 4.2 },
    { inisial: 'GS', nama: 'Gede Suarjana',   area: 'Tabanan',          laporan: 21, selesai: 17, waktu: 4.1, rating: 4.0 },
    { inisial: 'KD', nama: 'Komang Darma',    area: 'Buleleng',         laporan: 18, selesai: 12, waktu: 5.0, rating: 3.8 },
];

// SHARED — dipakai di Overview & Ekosistem
const wilayahPrioritasData = [
    { nama: 'Kuta',              kab: 'Badung',   laporan: 256, skor: 94, status: 'kritis'  },
    { nama: 'Denpasar Selatan',  kab: 'Denpasar', laporan: 312, skor: 91, status: 'kritis'  },
    { nama: 'Seminyak',          kab: 'Badung',   laporan: 218, skor: 87, status: 'kritis'  },
    { nama: 'Legian',            kab: 'Badung',   laporan: 190, skor: 78, status: 'waspada' },
    { nama: 'Gianyar Kota',      kab: 'Gianyar',  laporan: 172, skor: 72, status: 'waspada' },
    { nama: 'Denpasar Barat',    kab: 'Denpasar', laporan: 165, skor: 68, status: 'waspada' },
    { nama: 'Ubud',              kab: 'Gianyar',  laporan: 124, skor: 55, status: 'waspada' },
    { nama: 'Singaraja',         kab: 'Buleleng', laporan: 98,  skor: 42, status: 'waspada' },
];

// =============================================
// SHARED HELPERS
// =============================================
const tpaBadge = (tpa) => {
    if (tpa.status === 'overload') return { bar: '#EF4444', cls: 'bg-red-100 text-red-600',    label: `${tpa.pct}% Overload`      };
    if (tpa.status === 'sedang')   return { bar: '#F59E0B', cls: 'bg-amber-100 text-amber-700', label: `${tpa.pct}% Hampir Penuh`  };
    return                                 { bar: '#10B981', cls: 'bg-green-100 text-green-700', label: `${tpa.pct}% Lega`          };
};

const progressColor = (pct) => pct >= 75 ? '#1F7A6B' : pct >= 55 ? '#F59E0B' : '#EF4444';

const initPeriodTabs = () => {
    document.querySelectorAll('.period-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.period-tab').forEach(b => {
                b.classList.remove('active');
                b.classList.add('text-[#6B7A6B]');
            });
            btn.classList.add('active');
            btn.classList.remove('text-[#6B7A6B]');
        });
    });
};

// =============================================
// PAGE: OVERVIEW
// =============================================
const initOverview = () => {
    // Metric cards
    const metrics = [
        { label: 'Total Laporan Masuk', value: '1.284', sub: 'Minggu ini',    trend: '+12%', up: true,  cls: 'metric-green' },
        { label: 'Belum Ditangani',     value: '347',   sub: '27% dari total', trend: '+5%', up: false, cls: 'metric-amber' },
        { label: 'Sudah Ditangani',     value: '937',   sub: '73% penanganan', trend: '+8%', up: true,  cls: 'metric-green' },
        { label: 'Estimasi Volume',     value: '42 ton',sub: 'Minggu ini',    trend: '+3%', up: true,  cls: 'metric-blue'  },
    ];
    document.getElementById('metric-cards').innerHTML = metrics.map(m => `
        <div class="metric-card ${m.cls} bg-white border border-[#E8EDE8] rounded-2xl p-5 relative overflow-hidden">
            <div class="text-[11px] font-medium text-[#6B7A6B] uppercase tracking-wider mb-2">${m.label}</div>
            <div class="text-[28px] font-bold text-[#153C35] tracking-tight leading-none mb-1.5">${m.value}</div>
            <div class="flex items-center gap-2 text-[11px] text-[#6B7A6B]">
                ${m.sub}
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${m.up ? 'bg-[#E1F5EE] text-[#1F7A6B]' : 'bg-[#FEE2E2] text-red-500'}">${m.trend}</span>
            </div>
        </div>`).join('');

    // Area list
    const areas = [
        { name: 'Denpasar Selatan', count: 312, pct: 100 },
        { name: 'Kuta, Badung',     count: 256, pct: 82  },
        { name: 'Seminyak',         count: 218, pct: 70  },
        { name: 'Gianyar Kota',     count: 172, pct: 55  },
        { name: 'Ubud',             count: 124, pct: 40  },
    ];
    document.getElementById('area-list').innerHTML = areas.map((a, i) => `
        <div class="flex items-center gap-2.5 py-2 ${i < areas.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <span class="text-[11px] font-bold text-[#6B7A6B] w-5 shrink-0">#${i+1}</span>
            <span class="text-[12px] font-medium text-[#153C35] flex-1 truncate">${a.name}</span>
            <div class="w-[55px] h-1.5 bg-[#F4F6F3] rounded-full overflow-hidden shrink-0">
                <div class="h-full rounded-full" style="width:${a.pct}%;background:${i<3?'#1F7A6B':'#F59E0B'};"></div>
            </div>
            <span class="text-[12px] font-bold text-[#153C35] w-8 text-right shrink-0">${a.count}</span>
        </div>`).join('');

    // TPA grid
    document.getElementById('tpa-grid').innerHTML = tpaData.map((tpa, i) => {
        const b = tpaBadge(tpa);
        const col = i % 3, row = Math.floor(i/3);
        const br = col < 2 ? 'border-r border-[#E8EDE8]' : '';
        const bb = row < 1 ? 'border-b border-[#E8EDE8]' : '';
        const pad = col === 0 ? 'pr-5' : col === 1 ? 'px-5' : 'pl-5';
        return `
            <div class="flex items-center gap-3 py-3 ${pad} ${br} ${bb}">
                <div class="flex-1 min-w-0">
                    <div class="text-[12px] font-semibold text-[#153C35] truncate">${tpa.name}</div>
                    <div class="text-[10px] text-[#6B7A6B] mt-0.5">${tpa.kab}</div>
                </div>
                <div class="w-[70px] h-1.5 bg-[#F4F6F3] rounded-full overflow-hidden shrink-0">
                    <div class="h-full rounded-full" style="width:${tpa.pct}%;background:${b.bar};"></div>
                </div>
                <span class="text-[10px] font-semibold px-2 py-1 rounded-full shrink-0 ${b.cls}">${b.label}</span>
            </div>`; }).join('');

    // Tren chart
    new Chart(document.getElementById('chartTren'), {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','Mei'],
            datasets: [
                { label: 'Masuk',     data: [620,748,891,1043,1284], borderColor:'#1F7A6B', backgroundColor:'rgba(31,122,107,0.07)', borderWidth:2.5, fill:true, tension:0.4, pointBackgroundColor:'#1F7A6B', pointRadius:4, pointBorderColor:'#fff', pointBorderWidth:2 },
                { label: 'Ditangani', data: [490,601,712,820,937],  borderColor:'#4CAF8A', backgroundColor:'rgba(76,175,138,0.04)',  borderWidth:2,   fill:true, tension:0.4, borderDash:[5,3], pointBackgroundColor:'#4CAF8A', pointRadius:3, pointBorderColor:'#fff', pointBorderWidth:2 }
            ]
        },
        options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    // Jenis donut
    document.getElementById('jenis-legend').innerHTML = jenisData.map(j => `
        <span class="flex items-center gap-1.5 text-[11px] text-[#6B7A6B]">
            <span class="w-2.5 h-2.5 rounded-sm shrink-0" style="background:${j.color};"></span>${j.label} ${j.pct}%
        </span>`).join('');
    new Chart(document.getElementById('chartJenis'), {
        type:'doughnut',
        data:{ labels:jenisData.map(j=>j.label), datasets:[{ data:jenisData.map(j=>j.pct), backgroundColor:jenisData.map(j=>j.color), borderWidth:3, borderColor:'#fff' }] },
        options:{ responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{legend:{display:false}} }
    });

    // Progress penanganan per kab
    document.getElementById('progress-list').innerHTML = progressData.map(p => `
        <div>
            <div class="flex justify-between items-center mb-1">
                <span class="text-[12px] font-medium text-[#153C35]">${p.name}</span>
                <span class="text-[11px] font-bold text-[#153C35]">${p.pct}%</span>
            </div>
            <div class="h-2 bg-[#F4F6F3] rounded-full overflow-hidden">
                <div class="h-full rounded-full" style="width:${p.pct}%;background:${progressColor(p.pct)};"></div>
            </div>
        </div>`).join('');

    // ---- WILAYAH PRIORITAS (menggantikan Petugas Aktif) ----
    const top5 = wilayahPrioritasData.slice(0, 5);
    document.getElementById('wilayah-prioritas-ov').innerHTML = top5.map((w, i) => {
        const isKritis = w.status === 'kritis';
        const barColor  = isKritis ? '#EF4444' : '#F59E0B';
        const badgeCls  = isKritis ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700';
        const badgeText = isKritis ? 'Kritis' : 'Waspada';
        return `
            <div class="flex items-center gap-3 py-2.5 ${i < top5.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
                <span class="text-[11px] font-bold text-[#6B7A6B] w-5 shrink-0">#${i+1}</span>
                <div class="flex-1 min-w-0">
                    <div class="text-[12px] font-semibold text-[#153C35]">${w.nama}</div>
                    <div class="text-[10px] text-[#6B7A6B] mt-0.5">${w.kab} · ${w.laporan} laporan/minggu</div>
                </div>
                <div class="w-[70px] h-1.5 bg-[#F4F6F3] rounded-full overflow-hidden shrink-0">
                    <div class="h-full rounded-full" style="width:${w.skor}%;background:${barColor};"></div>
                </div>
                <span class="text-[11px] font-bold shrink-0" style="color:${barColor};">${w.skor}</span>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${badgeCls}">${badgeText}</span>
            </div>`;
    }).join('');

    // Respon chart
    new Chart(document.getElementById('chartRespon'), {
        type:'bar',
        data:{
            labels:['Badung','Gianyar','Denpasar','Tabanan','Buleleng','Klungkung','Karangasem','Jembrana'],
            datasets:[{ label:'Rata-rata (jam)', data:[1.8,2.1,2.5,3.0,3.4,3.8,4.5,5.2], backgroundColor:['#1F7A6B','#1F7A6B','#4CAF8A','#F59E0B','#F59E0B','#EF4444','#EF4444','#EF4444'], borderRadius:6, borderSkipped:false }]
        },
        options:{ responsive:true, maintainAspectRatio:false, indexAxis:'y', plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{display:false}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    // Insights
    const insights = [
        { emoji:'⚠️', bg:'bg-red-50',   title:'TPA Suwung penuh dalam 14 hari', desc:'Berdasarkan tren pengisian saat ini, TPA Suwung diperkirakan mencapai kapasitas maksimum pada 24 Mei 2026. Perlu koordinasi pengalihan ke TPA Peh.', tag:'Prioritas Tinggi', tagCls:'bg-red-100 text-red-600' },
        { emoji:'📍', bg:'bg-amber-50', title:'Kuta butuh bank sampah baru', desc:'Laporan di Kuta 256/minggu namun hanya ada 1 bank sampah dalam radius 3km. Kapasitas penampungan tidak memadai.', tag:'Rekomendasi', tagCls:'bg-amber-100 text-amber-700' },
        { emoji:'📈', bg:'bg-blue-50',  title:'Plastik naik 34% di musim turis', desc:'Sampah plastik meningkat signifikan Juni–Agustus bersamaan puncak kunjungan wisatawan. Perlu antisipasi kapasitas petugas.', tag:'Tren Musiman', tagCls:'bg-blue-100 text-blue-600' },
    ];
    document.getElementById('insight-grid').innerHTML = insights.map(ins => `
        <div class="bg-white border border-[#E8EDE8] rounded-2xl p-5 flex gap-3.5 items-start">
            <div class="w-10 h-10 rounded-xl ${ins.bg} flex items-center justify-center text-[18px] flex-shrink-0">${ins.emoji}</div>
            <div>
                <div class="text-[12px] font-bold text-[#153C35] mb-1.5 leading-snug">${ins.title}</div>
                <div class="text-[11px] text-[#6B7A6B] leading-relaxed mb-2.5">${ins.desc}</div>
                <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full ${ins.tagCls}">${ins.tag}</span>
            </div>
        </div>`).join('');
};

// =============================================
// PAGE: PETA & WILAYAH
// =============================================
const initPeta = () => {
    // Data laporan — konsisten dengan app user
    const reports = [
        { id:1,  title:'Pesisir Pantai Sanur',   lat:-8.6750, lng:115.2630, status:'Kritis',  kab:'Denpasar',  jenis:'Plastik',  vol:'120 kg',  pelapor:'Wayan Sudarma',  time:'12 menit lalu', desc:'Tumpukan plastik kiriman di dekat dermaga penyeberangan.' },
        { id:2,  title:'Tukad Badung',            lat:-8.6650, lng:115.2150, status:'Waspada', kab:'Denpasar',  jenis:'Organik',  vol:'80 kg',   pelapor:'Made Gede',       time:'1 jam lalu',    desc:'Sampah domestik menyumbat aliran sungai di bawah jembatan.' },
        { id:3,  title:'Hutan Mangrove Suwung',   lat:-8.7391, lng:115.2140, status:'Selesai', kab:'Denpasar',  jenis:'Campuran', vol:'200 kg',  pelapor:'Santi Putri',     time:'2 hari lalu',   desc:'Area mangrove sudah dibersihkan oleh komunitas lokal.' },
        { id:4,  title:'Pantai Petitenget',       lat:-8.6820, lng:115.1510, status:'Selesai', kab:'Badung',    jenis:'Kayu',     vol:'150 kg',  pelapor:'Gede Agus',       time:'5 jam lalu',    desc:'Limbah kayu hanyut sudah diangkut oleh petugas kebersihan.' },
        { id:5,  title:'Pasar Kumbasari',         lat:-8.6580, lng:115.2130, status:'Kritis',  kab:'Denpasar',  jenis:'Organik',  vol:'300 kg',  pelapor:'Ketut Arta',      time:'30 menit lalu', desc:'Sampah organik pasar meluap hingga ke bahu jalan.' },
        { id:6,  title:'Area Pura Uluwatu',       lat:-8.8290, lng:115.0840, status:'Waspada', kab:'Badung',    jenis:'Plastik',  vol:'60 kg',   pelapor:'Putu Siska',      time:'3 jam lalu',    desc:'Sisa sesajen dan plastik botol berserakan di jalur tracking.' },
        { id:7,  title:'Pantai Pandawa',          lat:-8.8450, lng:115.1850, status:'Selesai', kab:'Badung',    jenis:'Plastik',  vol:'90 kg',   pelapor:'Nyoman Satria',   time:'1 hari lalu',   desc:'Pembersihan rutin oleh pengelola pantai sudah selesai dilakukan.' },
        { id:8,  title:'Pantai Kuta',             lat:-8.7180, lng:115.1680, status:'Kritis',  kab:'Badung',    jenis:'Plastik',  vol:'240 kg',  pelapor:'Komang Ardi',     time:'18 menit lalu', desc:'Sampah plastik wisatawan menumpuk di area bibir pantai.' },
        { id:9,  title:'Pasar Badung',            lat:-8.6545, lng:115.2105, status:'Waspada', kab:'Denpasar',  jenis:'Organik',  vol:'130 kg',  pelapor:'Kadek Yoga',      time:'45 menit lalu', desc:'Sisa sampah sayur dan plastik mulai menumpuk di area belakang pasar.' },
        { id:10, title:'Pantai Jimbaran',         lat:-8.7900, lng:115.1600, status:'Kritis',  kab:'Badung',    jenis:'Plastik',  vol:'175 kg',  pelapor:'Luh Ayu',         time:'20 menit lalu', desc:'Limbah plastik dan styrofoam ditemukan di area pesisir.' },
        { id:11, title:'Terminal Ubung',          lat:-8.6400, lng:115.2000, status:'Waspada', kab:'Denpasar',  jenis:'Campuran', vol:'95 kg',   pelapor:'Nyoman Eka',      time:'2 jam lalu',    desc:'Area terminal dipenuhi sampah botol dan makanan.' },
        { id:12, title:'Pantai Berawa',           lat:-8.6600, lng:115.1300, status:'Selesai', kab:'Badung',    jenis:'Plastik',  vol:'110 kg',  pelapor:'Made Suta',       time:'5 jam lalu',    desc:'Pembersihan pantai selesai dilakukan komunitas lokal.' },
        { id:13, title:'Danau Batur',             lat:-8.2500, lng:115.3700, status:'Waspada', kab:'Bangli',    jenis:'Campuran', vol:'60 kg',   pelapor:'Ketut Budi',      time:'1 hari lalu',   desc:'Sampah pengunjung ditemukan di sekitar area danau.' },
        { id:14, title:'Pantai Melasti',          lat:-8.8470, lng:115.1540, status:'Kritis',  kab:'Badung',    jenis:'Plastik',  vol:'190 kg',  pelapor:'Putu Adi',        time:'10 menit lalu', desc:'Tumpukan sampah kiriman laut mulai meningkat.' },
        { id:15, title:'Tukad Ayung',             lat:-8.5000, lng:115.2600, status:'Selesai', kab:'Gianyar',   jenis:'Campuran', vol:'145 kg',  pelapor:'Gusti Rai',       time:'3 hari lalu',   desc:'Pembersihan sungai berhasil dilakukan bersama relawan.' },
    ];

    const map = L.map('peta-map', {
        center: [-8.55, 115.20],
        zoom: 10,
        minZoom: 8,
        zoomControl: false
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const laporanGroup = L.layerGroup();
    const tpaGroup     = L.layerGroup();
    let heatLayer      = null;

    // --- Laporan markers ---
    reports.forEach(r => {
        const color = r.status === 'Kritis' ? '#EF4444' : r.status === 'Waspada' ? '#F59E0B' : '#1F7A6B';
        const radius = r.status === 'Kritis' ? 11 : 9;
        const m = L.circleMarker([r.lat, r.lng], { radius, fillColor:color, color:'#fff', weight:2, fillOpacity:0.9 });
        m.on('click', () => {
            document.getElementById('peta-detail').innerHTML = `
                <div class="p-4">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="w-2 h-2 rounded-full" style="background:${color};"></span>
                        <span class="text-[10px] text-[#6B7A6B] uppercase tracking-widest font-semibold">${r.status}</span>
                        <span class="ml-auto text-[10px] text-[#9CA3AF]">${r.time}</span>
                    </div>
                    <h3 class="text-[14px] font-bold text-[#153C35] mb-1 leading-snug">${r.title}</h3>
                    <p class="text-[11px] text-[#6B7A6B] mb-3 leading-relaxed">${r.desc}</p>
                    <div class="space-y-1.5 border-t border-[#E8EDE8] pt-3">
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Pelapor</span><span class="font-medium text-[#153C35]">${r.pelapor}</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Kabupaten</span><span class="font-medium text-[#153C35]">${r.kab}</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Jenis Sampah</span><span class="font-medium text-[#153C35]">${r.jenis}</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Est. Volume</span><span class="font-medium text-[#153C35]">${r.vol}</span></div>
                    </div>
                </div>`;
        });
        laporanGroup.addLayer(m);
    });

    // --- TPA markers (pakai koordinat dari shared tpaData) ---
    tpaData.forEach(tpa => {
        const b = tpaBadge(tpa);
        const icon = L.divIcon({
            className: '',
            html: `<div style="width:30px;height:30px;background:${b.bar};border:3px solid white;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">🗑️</div>`,
            iconSize: [30,30], iconAnchor: [15,15]
        });
        const m = L.marker([tpa.lat, tpa.lng], { icon });
        m.on('click', () => {
            document.getElementById('peta-detail').innerHTML = `
                <div class="p-4">
                    <div class="text-[10px] text-[#6B7A6B] uppercase tracking-widest mb-1 font-semibold">TPA</div>
                    <h3 class="text-[14px] font-bold text-[#153C35] mb-3">${tpa.name}</h3>
                    <div class="space-y-1.5 border-t border-[#E8EDE8] pt-3">
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Kabupaten</span><span class="font-medium text-[#153C35]">${tpa.kab}</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Jam Operasi</span><span class="font-medium text-[#153C35]">${tpa.operasi}</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Kapasitas</span><span class="font-bold" style="color:${b.bar}">${tpa.pct}%</span></div>
                        <div class="flex justify-between text-[11px]"><span class="text-[#6B7A6B]">Status</span><span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${b.cls}">${b.label}</span></div>
                    </div>
                    <div class="mt-3 h-2 bg-[#F4F6F3] rounded-full overflow-hidden">
                        <div class="h-full rounded-full" style="width:${tpa.pct}%;background:${b.bar};"></div>
                    </div>
                </div>`;
        });
        tpaGroup.addLayer(m);
    });

    // --- Heatmap ---
    const heatPts = reports.map(r => [r.lat, r.lng, r.status==='Kritis'?1.0:r.status==='Waspada'?0.6:0.2]);
    heatLayer = L.heatLayer(heatPts, { radius:35, blur:25, maxZoom:14, gradient:{0:'#00ff00',0.4:'#ffff00',0.7:'#ff8800',1:'#ff0000'} });

    map.addLayer(laporanGroup);

    let state = { laporan:true, heatmap:false, tpa:false };
    const updateLayers = () => {
        state.laporan  ? map.addLayer(laporanGroup) : map.removeLayer(laporanGroup);
        state.heatmap  ? map.addLayer(heatLayer)    : map.removeLayer(heatLayer);
        state.tpa      ? map.addLayer(tpaGroup)     : map.removeLayer(tpaGroup);
    };

    ['laporan','heatmap','tpa'].forEach(key => {
        const btn = document.getElementById(`toggle-${key}`);
        if (!btn) return;
        btn.addEventListener('click', () => {
            state[key] = !state[key];
            btn.classList.toggle('active', state[key]);
            updateLayers();
        });
    });

    // Ringkasan stats
    const kritis  = reports.filter(r=>r.status==='Kritis').length;
    const waspada = reports.filter(r=>r.status==='Waspada').length;
    const selesai = reports.filter(r=>r.status==='Selesai').length;
    document.getElementById('peta-stats').innerHTML = `
        <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-red-500"></span><span class="text-[12px] text-[#153C35] font-medium">Kritis</span><span class="ml-auto text-[13px] font-bold text-red-500">${kritis}</span></div>
        <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span class="text-[12px] text-[#153C35] font-medium">Waspada</span><span class="ml-auto text-[13px] font-bold text-amber-500">${waspada}</span></div>
        <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#1F7A6B]"></span><span class="text-[12px] text-[#153C35] font-medium">Selesai</span><span class="ml-auto text-[13px] font-bold text-[#1F7A6B]">${selesai}</span></div>
        <div class="flex items-center gap-2 pt-2 border-t border-[#E8EDE8]"><span class="text-[12px] text-[#6B7A6B]">Total laporan</span><span class="ml-auto text-[13px] font-bold text-[#153C35]">${reports.length}</span></div>`;

    // Chart laporan per kabupaten
    const kabCount = {};
    reports.forEach(r => kabCount[r.kab] = (kabCount[r.kab]||0)+1);
    // Urutkan descending
    const kabSorted = Object.entries(kabCount).sort((a,b)=>b[1]-a[1]);
    new Chart(document.getElementById('chartKab'), {
        type:'bar',
        data:{
            labels: kabSorted.map(k=>k[0]),
            datasets:[{ data: kabSorted.map(k=>k[1]), backgroundColor:'#1F7A6B', borderRadius:8, borderSkipped:false }]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{display:false}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}, beginAtZero:true} } }
    });
};

// =============================================
// PAGE: DATA SAMPAH
// =============================================
const initDataSampah = () => {
    document.getElementById('jenis-legend-d').innerHTML = jenisData.map(j => `
        <span class="flex items-center gap-1.5 text-[11px] text-[#6B7A6B]">
            <span class="w-2.5 h-2.5 rounded-sm" style="background:${j.color};"></span>${j.label} ${j.pct}%
        </span>`).join('');
    new Chart(document.getElementById('chartJenisD'), {
        type:'doughnut',
        data:{ labels:jenisData.map(j=>j.label), datasets:[{ data:jenisData.map(j=>j.pct), backgroundColor:jenisData.map(j=>j.color), borderWidth:3, borderColor:'#fff' }] },
        options:{ responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{legend:{display:false}} }
    });

    new Chart(document.getElementById('chartVolume'), {
        type:'bar',
        data:{
            labels:['Denpasar','Badung','Gianyar','Tabanan','Buleleng','Karangasem','Klungkung','Bangli','Jembrana'],
            datasets:[
                { label:'Plastik',    data:[12,9,6,4,3,2,2,1,1], backgroundColor:'#EF4444', borderRadius:4 },
                { label:'Organik',    data:[9,7,5,4,2,2,1,1,1],  backgroundColor:'#F59E0B', borderRadius:4 },
                { label:'Lainnya',    data:[5,4,3,2,2,1,1,1,1],  backgroundColor:'#9CA3AF', borderRadius:4 },
            ]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{stacked:true, grid:{display:false}, ticks:{font:{family:'Poppins',size:10},color:'#6B7A6B'}}, y:{stacked:true, grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    new Chart(document.getElementById('chartTrenJenis'), {
        type:'line',
        data:{
            labels:['Jan','Feb','Mar','Apr','Mei'],
            datasets:[
                { label:'Plastik',    data:[210,238,265,298,340], borderColor:'#EF4444', backgroundColor:'rgba(239,68,68,0.05)',  borderWidth:2, fill:true, tension:0.4, pointRadius:3 },
                { label:'Organik',    data:[155,178,198,221,248], borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,0.05)', borderWidth:2, fill:true, tension:0.4, pointRadius:3 },
                { label:'Kertas',     data:[82,91,102,118,131],   borderColor:'#3B82F6', backgroundColor:'rgba(59,130,246,0.05)', borderWidth:2, fill:true, tension:0.4, pointRadius:3 },
                { label:'Elektronik', data:[60,68,78,90,110],     borderColor:'#8B5CF6', backgroundColor:'rgba(139,92,246,0.05)', borderWidth:2, fill:true, tension:0.4, pointRadius:3 },
            ]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    document.getElementById('progress-list-d').innerHTML = progressData.map(p => `
        <div>
            <div class="flex justify-between items-center mb-1">
                <span class="text-[12px] font-medium text-[#153C35]">${p.name}</span>
                <span class="text-[11px] font-bold text-[#153C35]">${p.pct}%</span>
            </div>
            <div class="h-2 bg-[#F4F6F3] rounded-full overflow-hidden">
                <div class="h-full rounded-full" style="width:${p.pct}%;background:${progressColor(p.pct)};"></div>
            </div>
        </div>`).join('');

    new Chart(document.getElementById('chartMasukKeluar'), {
        type:'bar',
        data:{
            labels:['Jan','Feb','Mar','Apr','Mei'],
            datasets:[
                { label:'Masuk (ton)', data:[28,33,39,41,42], backgroundColor:'#EF4444', borderRadius:6 },
                { label:'Ditangani (ton)', data:[22,27,32,36,38], backgroundColor:'#1F7A6B', borderRadius:6 },
            ]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{display:false}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });
};

// =============================================
// PAGE: KINERJA PETUGAS
// =============================================
const initKinerja = () => {
    const rankEmoji = ['🥇','🥈','🥉'];

    document.getElementById('leaderboard-full').innerHTML = petugasData.map((p,i) => {
        const rate = Math.round((p.selesai/p.laporan)*100);
        return `
        <div class="flex items-center gap-4 py-3.5 ${i<petugasData.length-1?'border-b border-[#E8EDE8]':''}">
            <span class="text-[16px] w-6 text-center flex-shrink-0">${i<3?rankEmoji[i]:`<span class="text-[12px] font-bold text-[#6B7A6B]">${i+1}</span>`}</span>
            <div class="w-9 h-9 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[12px] font-bold text-[#153C35] flex-shrink-0">${p.inisial}</div>
            <div class="flex-1 min-w-0">
                <div class="text-[13px] font-semibold text-[#153C35]">${p.nama}</div>
                <div class="text-[11px] text-[#6B7A6B]">${p.area}</div>
            </div>
            <div class="text-center flex-shrink-0 w-16">
                <div class="text-[14px] font-bold text-[#153C35]">${p.laporan}</div>
                <div class="text-[10px] text-[#6B7A6B]">laporan</div>
            </div>
            <div class="text-center flex-shrink-0 w-16">
                <div class="text-[14px] font-bold text-[#1F7A6B]">${rate}%</div>
                <div class="text-[10px] text-[#6B7A6B]">selesai</div>
            </div>
            <div class="text-center flex-shrink-0 w-16">
                <div class="text-[14px] font-bold text-[#153C35]">${p.waktu}j</div>
                <div class="text-[10px] text-[#6B7A6B]">avg waktu</div>
            </div>
            <div class="text-center flex-shrink-0 w-14">
                <div class="text-[14px] font-bold text-amber-500">⭐ ${p.rating}</div>
                <div class="text-[10px] text-[#6B7A6B]">rating</div>
            </div>
            <div class="w-[70px] flex-shrink-0">
                <div class="h-2 bg-[#F4F6F3] rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-[#1F7A6B]" style="width:${rate}%;"></div>
                </div>
            </div>
        </div>`; }).join('');

    new Chart(document.getElementById('chartResponFull'), {
        type:'bar',
        data:{
            labels: petugasData.map(p=>p.nama.split(' ')[0]+' '+p.nama.split(' ')[1]?.charAt(0)||''),
            datasets:[{ data:petugasData.map(p=>p.waktu), backgroundColor:petugasData.map(p=>p.waktu<=2.5?'#1F7A6B':p.waktu<=3.5?'#F59E0B':'#EF4444'), borderRadius:6, borderSkipped:false }]
        },
        options:{ responsive:true, maintainAspectRatio:false, indexAxis:'y', plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{display:false}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    new Chart(document.getElementById('chartLapPetugas'), {
        type:'bar',
        data:{
            labels: petugasData.map(p=>p.inisial),
            datasets:[
                { label:'Laporan masuk', data:petugasData.map(p=>p.laporan), backgroundColor:'rgba(31,122,107,0.2)', borderRadius:6 },
                { label:'Selesai',       data:petugasData.map(p=>p.selesai), backgroundColor:'#1F7A6B', borderRadius:6 },
            ]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{display:false}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    const avgWaktu = (petugasData.reduce((a,p)=>a+p.waktu,0)/petugasData.length).toFixed(1);
    const totalSelesai = petugasData.reduce((a,p)=>a+p.selesai,0);
    const totalLaporan = petugasData.reduce((a,p)=>a+p.laporan,0);
    document.getElementById('kinerja-metrics').innerHTML = [
        { label:'Total Petugas Aktif', value: petugasData.length, cls:'metric-green' },
        { label:'Avg Waktu Penanganan', value: avgWaktu+' jam', cls:'metric-amber' },
        { label:'Total Laporan Ditangani', value: totalSelesai, cls:'metric-green' },
        { label:'Tingkat Penyelesaian', value: Math.round(totalSelesai/totalLaporan*100)+'%', cls:'metric-blue' },
    ].map(m=>`
        <div class="metric-card ${m.cls} bg-white border border-[#E8EDE8] rounded-2xl p-5 relative overflow-hidden">
            <div class="text-[11px] font-medium text-[#6B7A6B] uppercase tracking-wider mb-2">${m.label}</div>
            <div class="text-[26px] font-bold text-[#153C35] tracking-tight leading-none">${m.value}</div>
        </div>`).join('');
};

// =============================================
// PAGE: INSIGHT & PREDIKSI
// =============================================
const initInsight = () => {
    new Chart(document.getElementById('chartPrediksiTpa'), {
        type:'line',
        data:{
            labels:['Apr','Mei','Jun (pred)','Jul (pred)','Agu (pred)'],
            datasets:[
                { label:'TPA Suwung',     data:[88,95,null,null,null], borderColor:'#EF4444', borderWidth:2.5, tension:0.3, pointRadius:4 },
                { label:'Suwung prediksi',data:[null,95,102,108,115],  borderColor:'#EF4444', borderWidth:2,   tension:0.3, borderDash:[5,3], pointRadius:3 },
                { label:'TPA Temesi',     data:[60,68,null,null,null], borderColor:'#F59E0B', borderWidth:2.5, tension:0.3, pointRadius:4 },
                { label:'Temesi prediksi',data:[null,68,74,79,83],     borderColor:'#F59E0B', borderWidth:2,   tension:0.3, borderDash:[5,3], pointRadius:3 },
                { label:'TPA Peh',        data:[35,40,null,null,null], borderColor:'#1F7A6B', borderWidth:2.5, tension:0.3, pointRadius:4 },
                { label:'Peh prediksi',   data:[null,40,43,46,48],     borderColor:'#1F7A6B', borderWidth:2,   tension:0.3, borderDash:[5,3], pointRadius:3 },
            ]
        },
        options:{
            responsive:true, maintainAspectRatio:false,
            plugins:{
                legend:{display:false},
                annotation:{ annotations:{ line1:{ type:'line', yMin:100, yMax:100, borderColor:'rgba(239,68,68,0.4)', borderWidth:1.5, borderDash:[4,4], label:{content:'Kapasitas Maks',display:true,font:{size:10}} } } }
            },
            scales:{ x:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}, max:120} }
        }
    });

    new Chart(document.getElementById('chartMusiman'), {
        type:'bar',
        data:{
            labels:['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
            datasets:[
                { label:'Plastik', data:[210,190,220,240,280,320,380,410,310,250,220,230], backgroundColor: ['#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#9CA3AF','#F59E0B','#EF4444','#EF4444','#F59E0B','#9CA3AF','#9CA3AF','#9CA3AF'], borderRadius:5 },
            ]
        },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{display:false}, ticks:{font:{family:'Poppins',size:10},color:'#6B7A6B'}}, y:{grid:{color:'rgba(0,0,0,0.04)'}, ticks:{font:{family:'Poppins',size:11},color:'#6B7A6B'}} } }
    });

    const rekom = [
        { area:'Kuta',           laporan:256, fasilitas:1, gap:'Tinggi',  cls:'bg-red-100 text-red-600'    },
        { area:'Seminyak',       laporan:218, fasilitas:1, gap:'Tinggi',  cls:'bg-red-100 text-red-600'    },
        { area:'Denpasar Barat', laporan:180, fasilitas:2, gap:'Sedang',  cls:'bg-amber-100 text-amber-700'},
        { area:'Gianyar Kota',   laporan:172, fasilitas:2, gap:'Sedang',  cls:'bg-amber-100 text-amber-700'},
        { area:'Tabanan Kota',   laporan:110, fasilitas:1, gap:'Sedang',  cls:'bg-amber-100 text-amber-700'},
        { area:'Singaraja',      laporan:90,  fasilitas:2, gap:'Rendah',  cls:'bg-green-100 text-green-700'},
    ];
    document.getElementById('rekom-bank').innerHTML = rekom.map(r=>`
        <div class="flex items-center gap-4 py-3 ${r!==rekom[rekom.length-1]?'border-b border-[#E8EDE8]':''}">
            <div class="flex-1"><div class="text-[13px] font-semibold text-[#153C35]">${r.area}</div><div class="text-[11px] text-[#6B7A6B]">${r.laporan} laporan/minggu · ${r.fasilitas} bank sampah aktif</div></div>
            <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full ${r.cls}">Gap ${r.gap}</span>
        </div>`).join('');

    const allInsights = [
        { emoji:'⚠️', bg:'bg-red-50',    title:'TPA Suwung overload dalam 14 hari', desc:'Kapasitas saat ini 95%. Berdasarkan tren input sampah, TPA Suwung akan mencapai batas maksimum sekitar 24 Mei 2026. Rekomendasi: alihkan 30% volume ke TPA Peh (Buleleng) yang masih 40% kapasitas.', tag:'Kritis', tagCls:'bg-red-100 text-red-600', action:'Hubungi Dinas LH Badung' },
        { emoji:'📍', bg:'bg-amber-50',  title:'Kuta & Seminyak kekurangan bank sampah', desc:'Dua wilayah wisata utama ini masing-masing hanya punya 1 bank sampah aktif namun menerima 256 dan 218 laporan per minggu. Rekomendasi: tambah minimal 2 bank sampah baru di masing-masing wilayah.', tag:'Rekomendasi', tagCls:'bg-amber-100 text-amber-700', action:'Lihat Detail Wilayah' },
        { emoji:'📈', bg:'bg-blue-50',   title:'Plastik meningkat 34% musim turis', desc:'Data historis 2023–2025 menunjukkan lonjakan sampah plastik konsisten di bulan Juni–Agustus. Prediksi: puncak 410 ton pada Agustus 2026. Perlu penambahan petugas dan kapasitas pengepul plastik.', tag:'Tren Musiman', tagCls:'bg-blue-100 text-blue-600', action:'Lihat Grafik Musiman' },
        { emoji:'♻️', bg:'bg-green-50',  title:'Potensi bank sampah digital di Gianyar', desc:'Gianyar memiliki komunitas adat yang aktif dan 81% tingkat penanganan — tertinggi kedua. Ini adalah wilayah ideal untuk pilot program bank sampah digital terintegrasi Bali Resik.', tag:'Peluang', tagCls:'bg-green-100 text-green-700', action:'Buat Proposal Pilot' },
        { emoji:'🏆', bg:'bg-purple-50', title:'Badung konsisten jadi pelopor', desc:'Kabupaten Badung mencatat waktu penanganan rata-rata 1.8 jam dan tingkat penanganan 89%. Model operasional Badung bisa dijadikan benchmark untuk kabupaten lain dengan performa rendah seperti Jembrana (39%).', tag:'Best Practice', tagCls:'bg-purple-100 text-purple-700', action:'Lihat Laporan Badung' },
        { emoji:'🌊', bg:'bg-cyan-50',   title:'33 ton plastik ke laut setiap tahun', desc:'Data gabungan laporan pesisir Bali Resik dan riset Ocean & Coastal Management menunjukkan tren stabil. Titik kritis: Sanur, Kuta, Lovina. Integrasi dengan program CSR kelautan diprioritaskan.', tag:'Dampak Lingkungan', tagCls:'bg-cyan-100 text-cyan-700', action:'Lihat Laporan Pesisir' },
    ];
    document.getElementById('all-insights').innerHTML = allInsights.map(ins=>`
        <div class="bg-white border border-[#E8EDE8] rounded-2xl p-5 flex gap-4 items-start">
            <div class="w-11 h-11 rounded-xl ${ins.bg} flex items-center justify-center text-[20px] flex-shrink-0">${ins.emoji}</div>
            <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-3 mb-2">
                    <div class="text-[13px] font-bold text-[#153C35] leading-snug">${ins.title}</div>
                    <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${ins.tagCls}">${ins.tag}</span>
                </div>
                <div class="text-[12px] text-[#6B7A6B] leading-relaxed mb-3">${ins.desc}</div>
                <button class="text-[11px] font-semibold text-[#1F7A6B] hover:underline">${ins.action} →</button>
            </div>
        </div>`).join('');
};

// =============================================
// CHART GAP (dipanggil dari initInsight)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop();
    if (page === 'dashboard-insight.html') {
        setTimeout(() => {
            const el = document.getElementById('chartGap');
            if (!el) return;
            new Chart(el, {
                type: 'bar',
                data: {
                    labels: ['Kuta', 'Seminyak', 'Dps Barat', 'Gianyar', 'Tabanan', 'Singaraja'],
                    datasets: [
                        { label: 'Laporan/minggu', data: [256,218,180,172,110,90], backgroundColor: 'rgba(239,68,68,0.2)', borderRadius: 5 },
                        { label: 'Kapasitas bank sampah', data: [40,40,80,80,40,80], backgroundColor: '#1F7A6B', borderRadius: 5 },
                    ]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: 'Poppins', size: 10 }, color: '#6B7A6B' } },
                        y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { family: 'Poppins', size: 11 }, color: '#6B7A6B' } }
                    }
                }
            });
        }, 100);
    }
});

// =============================================
// PAGE: EKOSISTEM & KOMUNITAS
// =============================================
const initEkosistem = () => {

    // Gunakan shared data wilayahPrioritasData
    const wilayahPrioritas = wilayahPrioritasData;

    const bankSampahList = [
        { nama: 'BS Induk Denpasar',    kab: 'Denpasar',  terima: 'Plastik, Kertas, Logam', jam: '08.00–16.00', anggota: 320 },
        { nama: 'BS Gianyar Bersih',    kab: 'Gianyar',   terima: 'Plastik, Organik',       jam: '08.00–15.00', anggota: 180 },
        { nama: 'BS Kuta Lestari',      kab: 'Badung',    terima: 'Plastik, Botol',          jam: '09.00–14.00', anggota: 95  },
        { nama: 'BS Buleleng Mandiri',  kab: 'Buleleng',  terima: 'Plastik, Kertas, Logam', jam: '08.00–16.00', anggota: 140 },
        { nama: 'BS Tabanan Hijau',     kab: 'Tabanan',   terima: 'Organik, Plastik',        jam: '07.00–15.00', anggota: 112 },
    ];

    const pengepulList = [
        { nama: 'Pengepul Logam Sanur',       kab: 'Denpasar', terima: 'Logam, Elektronik, TV',  harga: 'Besi Rp3rb/kg'   },
        { nama: 'Pengepul Barang Bekas Ubud', kab: 'Gianyar',  terima: 'Furniture, Elektronik',  harga: 'Nego langsung'   },
        { nama: 'Pengepul Minyak Jelantah',   kab: 'Denpasar', terima: 'Minyak jelantah',        harga: 'Rp4.000/liter'   },
        { nama: 'Pengepul Plastik Kuta',      kab: 'Badung',   terima: 'PET, HDPE, PP',          harga: 'PET Rp2rb/kg'    },
        { nama: 'Pengepul Kertas Gianyar',    kab: 'Gianyar',  terima: 'Kardus, HVS, Koran',     harga: 'Kardus Rp1rb/kg' },
    ];

    const tpaList = tpaData;

    const desaLeaderboard = [
        { nama: 'Desa Adat Ubud',        kab: 'Gianyar',  poin: 12480, laporan: 89, badge: '🏆' },
        { nama: 'Desa Adat Sanur',       kab: 'Denpasar', poin: 11200, laporan: 76, badge: '🥈' },
        { nama: 'Desa Adat Jimbaran',    kab: 'Badung',   poin: 9840,  laporan: 68, badge: '🥉' },
        { nama: 'Desa Adat Kerobokan',   kab: 'Badung',   poin: 8620,  laporan: 61, badge: '4'  },
        { nama: 'Desa Adat Seminyak',    kab: 'Badung',   poin: 7910,  laporan: 54, badge: '5'  },
        { nama: 'Desa Adat Tegallalang', kab: 'Gianyar',  poin: 6750,  laporan: 48, badge: '6'  },
    ];

    const topPelapor = [
        { inisial: 'WS', nama: 'Wayan Sudarma', desa: 'Ubud',      poin: 2450, laporan: 24, xp: 'LV 8' },
        { inisial: 'MR', nama: 'Made Riani',    desa: 'Sanur',     poin: 2210, laporan: 21, xp: 'LV 7' },
        { inisial: 'KA', nama: 'Ketut Artini',  desa: 'Jimbaran',  poin: 1980, laporan: 19, xp: 'LV 7' },
        { inisial: 'NP', nama: 'Nyoman Putra',  desa: 'Kerobokan', poin: 1740, laporan: 17, xp: 'LV 6' },
        { inisial: 'PD', nama: 'Putu Dewi',     desa: 'Seminyak',  poin: 1590, laporan: 15, xp: 'LV 6' },
        { inisial: 'GS', nama: 'Gede Suarjana', desa: 'Ubud',      poin: 1420, laporan: 13, xp: 'LV 5' },
    ];

    const dampakList = [
        { icon: '🗑️', label: 'Sampah Terlaporkan',   value: '42 ton',  sub: 'Minggu ini'          },
        { icon: '✅',  label: 'Titik Berhasil Bersih', value: '937',     sub: 'Laporan selesai'     },
        { icon: '♻️',  label: 'Sampah Didaur Ulang',   value: '8.4 ton', sub: 'Estimasi minggu ini' },
        { icon: '🌊',  label: 'Plastik Dicegah ke Laut',value: '1.2 ton',sub: 'Dari laporan pesisir'},
    ];

    const misiList = [
        { nama: 'Bersih Pantai Sanur',  peserta: 142, target: 200, deadline: '2 hari lagi', cls: 'bg-blue-50 text-blue-600'   },
        { nama: 'Pilah Sampah Rumahan', peserta: 89,  target: 100, deadline: '5 hari lagi', cls: 'bg-green-50 text-green-600' },
        { nama: 'Jepret & Lapor Pasar', peserta: 213, target: 250, deadline: '1 hari lagi', cls: 'bg-amber-50 text-amber-600' },
    ];

    // Render wilayah prioritas
    const renderWilayah = (data) => {
        document.getElementById('wilayah-prioritas').innerHTML = data.map((w, i) => {
            const isKritis = w.status === 'kritis';
            const badgeCls = isKritis ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700';
            const barColor = isKritis ? '#EF4444' : '#F59E0B';
            return `
                <div class="flex items-center gap-3 py-2.5 ${i < data.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
                    <span class="text-[11px] font-bold text-[#6B7A6B] w-5 flex-shrink-0">#${i+1}</span>
                    <div class="flex-1 min-w-0">
                        <div class="text-[12px] font-semibold text-[#153C35]">${w.nama}</div>
                        <div class="text-[10px] text-[#6B7A6B]">${w.kab} · ${w.laporan} laporan/minggu</div>
                    </div>
                    <div class="w-[90px] h-1.5 bg-[#F4F6F3] rounded-full overflow-hidden flex-shrink-0">
                        <div class="h-full rounded-full" style="width:${w.skor}%;background:${barColor};"></div>
                    </div>
                    <span class="text-[10px] font-bold w-8 text-right flex-shrink-0" style="color:${barColor};">${w.skor}</span>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeCls}">${isKritis ? 'Kritis' : 'Waspada'}</span>
                </div>`;
        }).join('');
    };

    renderWilayah(wilayahPrioritas);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.textContent.trim().toLowerCase();
            const filtered = f === 'semua' ? wilayahPrioritas : wilayahPrioritas.filter(w => w.status === f);
            renderWilayah(filtered);
        });
    });

    new Chart(document.getElementById('chartUrgensi'), {
        type: 'bar',
        data: {
            labels: ['Badung', 'Denpasar', 'Gianyar', 'Tabanan', 'Buleleng', 'Karangasem', 'Klungkung', 'Bangli', 'Jembrana'],
            datasets: [{ data: [88, 84, 72, 58, 45, 40, 35, 28, 22], backgroundColor: ['#EF4444','#EF4444','#F59E0B','#F59E0B','#4CAF8A','#4CAF8A','#4CAF8A','#4CAF8A','#4CAF8A'], borderRadius: 6, borderSkipped: false }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { family: 'Poppins', size: 10 }, color: '#6B7A6B' }, max: 100 },
                y: { grid: { display: false }, ticks: { font: { family: 'Poppins', size: 10 }, color: '#6B7A6B' } }
            }
        }
    });

    document.getElementById('list-bank-sampah').innerHTML = bankSampahList.map((b, i) => `
        <div class="py-2.5 ${i < bankSampahList.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                    <div class="text-[12px] font-semibold text-[#153C35] truncate">${b.nama}</div>
                    <div class="text-[10px] text-[#6B7A6B] mt-0.5">${b.kab} · ${b.jam}</div>
                    <div class="text-[10px] text-[#6B7A6B] mt-0.5 truncate">${b.terima}</div>
                </div>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E1F5EE] text-[#1F7A6B] flex-shrink-0">${b.anggota} anggota</span>
            </div>
        </div>`).join('');

    document.getElementById('list-pengepul').innerHTML = pengepulList.map((p, i) => `
        <div class="py-2.5 ${i < pengepulList.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <div class="text-[12px] font-semibold text-[#153C35] truncate">${p.nama}</div>
            <div class="text-[10px] text-[#6B7A6B] mt-0.5">${p.kab}</div>
            <div class="text-[10px] text-[#6B7A6B] mt-0.5 truncate">${p.terima}</div>
            <div class="text-[10px] font-medium text-[#1F7A6B] mt-0.5">${p.harga}</div>
        </div>`).join('');

    document.getElementById('list-tpa').innerHTML = tpaList.map((t, i) => {
        const b = tpaBadge(t);
        return `
        <div class="py-2.5 ${i < tpaList.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <div class="flex items-center justify-between gap-2 mb-1.5">
                <div class="text-[12px] font-semibold text-[#153C35] truncate">${t.name}</div>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${b.cls}">${t.pct}%</span>
            </div>
            <div class="h-1.5 bg-[#F4F6F3] rounded-full overflow-hidden">
                <div class="h-full rounded-full" style="width:${t.pct}%;background:${b.bar};"></div>
            </div>
            <div class="text-[10px] text-[#6B7A6B] mt-1">${t.kab}</div>
        </div>`; }).join('');

    const desaEmoji = ['🥇','🥈','🥉'];
    document.getElementById('leaderboard-desa').innerHTML = desaLeaderboard.map((d, i) => `
        <div class="flex items-center gap-3 py-2.5 ${i < desaLeaderboard.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <span class="text-[15px] w-5 text-center flex-shrink-0">${i < 3 ? desaEmoji[i] : `<span class="text-[11px] font-bold text-[#6B7A6B]">${i+1}</span>`}</span>
            <div class="flex-1 min-w-0">
                <div class="text-[12px] font-semibold text-[#153C35] truncate">${d.nama}</div>
                <div class="text-[10px] text-[#6B7A6B]">${d.kab} · ${d.laporan} laporan</div>
            </div>
            <div class="text-right flex-shrink-0">
                <div class="text-[13px] font-bold text-[#153C35]">${d.poin.toLocaleString()}</div>
                <div class="text-[10px] text-[#6B7A6B]">poin</div>
            </div>
        </div>`).join('');

    document.getElementById('top-pelapor').innerHTML = topPelapor.map((p, i) => `
        <div class="flex items-center gap-3 py-2.5 ${i < topPelapor.length-1 ? 'border-b border-[#E8EDE8]' : ''}">
            <div class="w-8 h-8 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[11px] font-bold text-[#153C35] flex-shrink-0">${p.inisial}</div>
            <div class="flex-1 min-w-0">
                <div class="text-[12px] font-semibold text-[#153C35] truncate">${p.nama}</div>
                <div class="text-[10px] text-[#6B7A6B]">${p.desa} · ${p.laporan} laporan</div>
            </div>
            <div class="text-right flex-shrink-0">
                <div class="text-[12px] font-bold text-[#153C35]">${p.poin.toLocaleString()}</div>
                <div class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-purple-50 text-purple-600">${p.xp}</div>
            </div>
        </div>`).join('');

    document.getElementById('dampak-nyata').innerHTML = dampakList.map(d => `
        <div class="flex items-center gap-3">
            <span class="text-[18px] flex-shrink-0">${d.icon}</span>
            <div class="flex-1 min-w-0">
                <div class="text-[11px] text-[#6B7A6B]">${d.label}</div>
                <div class="text-[13px] font-bold text-[#153C35]">${d.value} <span class="text-[10px] font-normal text-[#6B7A6B]">${d.sub}</span></div>
            </div>
        </div>`).join('');

    document.getElementById('misi-aktif').innerHTML = misiList.map(m => {
        const pct = Math.round((m.peserta / m.target) * 100);
        return `
        <div>
            <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-semibold text-[#153C35] truncate flex-1">${m.nama}</span>
                <span class="text-[10px] text-[#6B7A6B] ml-2 flex-shrink-0">${m.deadline}</span>
            </div>
            <div class="h-2 bg-[#F4F6F3] rounded-full overflow-hidden mb-1">
                <div class="h-full rounded-full bg-[#1F7A6B]" style="width:${pct}%;"></div>
            </div>
            <div class="flex justify-between text-[10px] text-[#6B7A6B]">
                <span>${m.peserta} peserta</span>
                <span>target ${m.target}</span>
            </div>
        </div>`; }).join('');
};

// =============================================
// INIT — detect page & run
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    initPeriodTabs();

    const page = window.location.pathname.split('/').pop();
    if (page === 'government-dashboard.html' || page === '') initOverview();
    else if (page === 'dashboard-peta.html')      initPeta();
    else if (page === 'dashboard-data.html')      initDataSampah();
    else if (page === 'dashboard-ekosistem.html') initEkosistem();
    else if (page === 'dashboard-insight.html')   initInsight();
});