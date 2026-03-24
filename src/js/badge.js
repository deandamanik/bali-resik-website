const badges = [
    { icon: 'leaf', name: 'Pelopor Hijau', pts: 200, unlocked: true },
    { icon: 'map-pin', name: 'Pelopor Perdana', pts: 150, unlocked: true },
    { icon: 'flame', name: 'Streak 5 Hari', pts: 300, unlocked: true },
    { icon: 'waves', name: 'Penjaga Pantai', pts: 250, unlocked: true },
    { icon: 'shield-check', name: 'Pahlawan Laut', pts: 400, unlocked: false },
    { icon: 'globe', name: 'Relawan Aktif', pts: 500, unlocked: false },
    { icon: 'award', name: 'Eco Champion', pts: 750, unlocked: false },
    { icon: 'trash-2', name: 'Anti Plastik', pts: 300, unlocked: false },
    { icon: 'camera', name: 'Juru Foto', pts: 200, unlocked: false },
    { icon: 'sparkles', name: 'Dewata Resik', pts: 600, unlocked: false },
];

function renderBadges() {
    const grid = document.getElementById('badgeGrid');
    
    grid.innerHTML = badges.map(b => `
        <div class="bg-white border rounded-3xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 
            ${b.unlocked ? 'border-[#569785]/20 bg-[#F0F7F5] shadow-sm' : 'border-gray-100 opacity-30 grayscale'}">
            
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center 
                ${b.unlocked ? 'bg-[#1F7A6B] text-white' : 'bg-gray-100 text-gray-400'}">
                <i data-lucide="${b.icon}" class="w-6 h-6"></i>
            </div>

            <div class="space-y-1.5">
                <h4 class="text-[11px] font-bold text-[#153C35] leading-tight tracking-tight">${b.name}</h4>
                <div class="text-[9px] font-black px-2 py-0.5 rounded-full inline-block 
                    ${b.unlocked ? 'text-[#1F7A6B] bg-white border border-[#1F7A6B]/10' : 'text-gray-400 bg-gray-50'}">
                    +${b.pts} PTS
                </div>
            </div>
        </div>
    `).join('');

    // WAJIB: Render ulang icon Lucide setelah HTML di-inject
    lucide.createIcons();
}

renderBadges();