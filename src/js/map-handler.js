const reports = [
    { id: 1, title: "Pesisir Pantai Sanur", lat: -8.6750, lng: 115.2630, status: "Kritis", pelapor: "Wayan Sudarma", time: "12 menit lalu", img: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbe5e?q=80&w=2070", desc: "Tumpukan plastik kiriman di dekat dermaga penyeberangan." },
    { id: 2, title: "Tukad Badung", lat: -8.6650, lng: 115.2150, status: "Waspada", pelapor: "Made Gede", time: "1 jam lalu", img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=2000", desc: "Sampah domestik menyumbat aliran sungai di bawah jembatan." },
    { id: 3, title: "Hutan Mangrove Suwung", lat: -8.7391, lng: 115.2140, status: "Selesai", pelapor: "Santi Putri", time: "2 hari lalu", img: "https://images.unsplash.com/photo-1532660621034-ee5b6ad1f168?q=80&w=2000", desc: "Area mangrove sudah dibersihkan oleh komunitas lokal." },
    { id: 4, title: "Pantai Petitenget", lat: -8.6820, lng: 115.1510, status: "Selesai", pelapor: "Gede Agus", time: "5 jam lalu", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2000", desc: "Limbah kayu hanyut sudah diangkut oleh petugas kebersihan." },
    { id: 5, title: "Pasar Kumbasari", lat: -8.6580, lng: 115.2130, status: "Kritis", pelapor: "Ketut Arta", time: "30 menit lalu", img: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2000", desc: "Sampah organik pasar meluap hingga ke bahu jalan." },
    { id: 6, title: "Area Pura Uluwatu", lat: -8.8290, lng: 115.0840, status: "Waspada", pelapor: "Putu Siska", time: "3 jam lalu", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000", desc: "Sisa sesajen dan plastik botol berserakan di jalur tracking." },
    { id: 7, title: "Pantai Pandawa", lat: -8.8450, lng: 115.1850, status: "Selesai", pelapor: "Nyoman Satria", time: "1 hari lalu", img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2000", desc: "Pembersihan rutin oleh pengelola pantai sudah selesai dilakukan." }
];

const initMap = () => {
    const southWest = L.latLng(-8.95, 114.3);
    const northEast = L.latLng(-8.00, 115.8);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('map-container', {
        center: [-8.70, 115.18], 
        zoom: 11,
        minZoom: 10,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

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
        }).addTo(map);

        marker.on('click', () => {
            map.flyTo([report.lat, report.lng + 0.02], 13, { duration: 1.2 });
            openDetail(report);
        });
    });

    map.on('click', (e) => {
        if (e.originalEvent.target.id === 'map-container') closeDetail();
    });
};

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
                ${data.status === 'Selesai' ? 
                    `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>` : ''
                }
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

    panel.style.height = 'fit-content';
    panel.style.maxHeight = '85vh';
    panel.classList.remove('translate-x-[120%]');
};

const closeDetail = () => {
    document.getElementById('side-panel').classList.add('translate-x-[120%]');
};

document.addEventListener('DOMContentLoaded', initMap);