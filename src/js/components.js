const components = {
    navbars: {
        type1: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-6 lg:px-36 border-b border-white/10 transition-all duration-500">
            <div class="flex items-center gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                <img id="logo-img" src="../public/assets/logo/Logo-White.png" alt="Bali Resik Logo" class="h-12 transition-all">
                <h1 id="nav-title" class="text-2xl font-bold text-white tracking-tight transition-all">Bali Resik</h1>
            </div>  
            
            <div id="nav-links" class="hidden md:flex gap-14 font-medium text-white/60 items-center animate-slideInRight animate-delay-200">
                <a href="index.html" class="nav-item hover:text-white transition-all">Beranda</a>
                <a href="peta-sampah.html" class="nav-item hover:text-white transition-all">Peta Sampah</a>
                <a href="gamifikasi.html" class="nav-item hover:text-white transition-all">Gamifikasi</a>
                <a href="hubungi-kami.html" class="nav-item hover:text-white transition-all">Hubungi Kami</a>
            </div>
            
            <div class="flex items-center gap-6 animate-slideInRight animate-delay-400">
                <a href="pelaporan.html">
                    <button id="nav-btn" class="bg-white text-[#153C35] px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                        Laporkan
                    </button>
                </a>
                <div onclick="openAuthModal()" id="nav-user" class="w-10 h-10 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition cursor-pointer">
                    <img src="../public/assets/icon/Icon-User.png" alt="User" class="w-full h-full object-cover">
                </div>
            </div>
        </nav>`,

        type2: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-6 lg:px-36 border-b border-white/10 transition-all duration-500">
            <div class="flex items-center gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                <img id="logo-img" src="../public/assets/logo/Logo-White.png" alt="Bali Resik Logo" class="h-12 transition-all">
                <h1 id="nav-title" class="text-2xl font-bold text-white tracking-tight transition-all">Bali Resik</h1>
            </div>
            
            <div class="flex items-center gap-6 animate-slideInRight animate-delay-400">
                <a href="index.html">
                    <button id="nav-btn" class="bg-white text-[#153C35] px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                        Beranda
                    </button>
                </a>
                <div onclick="openAuthModal()" id="nav-user" class="w-10 h-10 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition cursor-pointer">
                    <img src="../public/assets/icon/Icon-User.png" alt="User" class="w-full h-full object-cover">
                </div>
            </div>
        </nav>`,

        navbarPeta: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-6 lg:px-36 bg-white border-b border-gray-100 shadow-sm transition-all duration-500">
            <div class="flex items-center gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                <img id="logo-img" src="../public/assets/logo/Logo-Green.png" alt="Bali Resik Logo" class="h-12 transition-all">
                <h1 id="nav-title" class="text-2xl font-bold text-[#1F7A6B] tracking-tight transition-all">Bali Resik</h1>
            </div> 
            
            <div id="nav-links" class="hidden md:flex gap-14 font-medium text-gray-500 items-center animate-slideInRight animate-delay-200">
                <a href="index.html" class="nav-item hover:text-[#1F7A6B] transition-all">Beranda</a>
                <a href="peta-sampah.html" class="nav-item text-[#1F7A6B] font-bold relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#1F7A6B] transition-all">Peta Sampah</a>
                <a href="gamifikasi.html" class="nav-item hover:text-[#1F7A6B] transition-all">Gamifikasi</a>
                <a href="hubungi-kami.html" class="nav-item hover:text-[#1F7A6B] transition-all">Hubungi Kami</a>
            </div>
            
            <div class="flex items-center gap-6 animate-slideInRight animate-delay-400">
                <a href="pelaporan.html">
                    <button id="nav-btn" class="bg-[#1F7A6B] text-white px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                        Laporkan
                    </button>
                </a>
                <div onclick="openAuthModal()" id="nav-user" class="w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-[#1F7A6B]/30 transition cursor-pointer">
                    <img src="../public/assets/icon/icon-user-2.png" alt="User" class="w-full h-full object-cover">
                </div>
            </div>
        </nav>`
    },

    footer: `
    <footer class="bg-white pt-28 pb-16 border-t border-gray-100">
      <div class="container mx-auto px-6 lg:px-40">
        <div class="flex flex-col md:flex-row justify-between items-start gap-16">
          <div class="flex flex-col gap-12">
            <div class="flex items-center gap-3">
              <img src="../public/assets/logo/Logo-Green.png" alt="Bali Resik Logo" class="w-12 h-12 object-contain">
              <span class="text-3xl font-bold text-[#153C35] tracking-tight">Bali Resik</span>
            </div>
            <div class="text-gray-400 text-sm font-medium leading-relaxed">
              <p>Copyright © 2026 Bali Resik.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div class="md:ml-auto">
            <h4 class="text-xl font-bold text-[#153C35] mb-10">Halaman</h4>
            <ul class="flex flex-col gap-5 text-gray-400 font-medium">
              <li><a href="index.html" class="hover:text-[#153C35] transition-colors">Home</a></li>
              <li><a href="peta-sampah.html" class="hover:text-[#153C35] transition-colors">Peta Sampah</a></li>
              <li><a href="gamifikasi.html" class="hover:text-[#153C35] transition-colors">Gamifikasi</a></li>
              <li><a href="tentang.html" class="hover:text-[#153C35] transition-colors">Tentang</a></li>
            </ul>
          </div>
          <div class="md:ml-24">
            <h4 class="text-xl font-bold text-[#153C35] mb-10">Sosial Media</h4>
            <div class="flex gap-4 mb-12">
              <a href="#" class="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#153C35] group transition-all">
                <img src="../public/assets/icon/icon-instagram.png" alt="Instagram" class="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="#" class="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#153C35] group transition-all">
                <img src="../public/assets/icon/icon-media.png" alt="Website" class="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="#" class="w-11 h-11 bg-bali-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all shadow-sm">
            <img src="../public/assets/icon/icon-twitter.png" alt="Twitter" class="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all">
            </a>
              <a href="#" class="w-11 h-11 bg-bali-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all shadow-sm">
            <img src="../public/assets/icon/icon-yt.png" alt="YouTube" class="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all">
            </a>
            </div>
            <a href="pelaporan.html" class="inline-block">
                <button class="bg-[#1F7A6B] text-white px-10 py-3.5 rounded-xl font-bold flex items-center gap-4 hover:bg-[#153C35] transition-all shadow-lg">
                  <span class="text-lg">Laporkan</span>
                </button>
            </a>
          </div>
        </div>
      </div>
    </footer>`,

    authModal: `
    <div id="auth-modal" class="fixed inset-0 z-999 hidden items-center justify-center">
        <div id="modal-backdrop" class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-all duration-500" onclick="closeAuthModal()"></div>
        <div id="modal-container" class="relative w-[90%] max-w-125 z-1000 opacity-0 scale-95 transition-all duration-300">
            <div class="bg-white rounded-[35px] p-10 shadow-2xl relative">
                <button type="button" onclick="closeAuthModal()" class="absolute top-6 right-6 text-gray-400 hover:text-primary p-2 hover:bg-gray-100 rounded-full transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div id="modal-content"></div>
            </div>
        </div>
    </div>`
};

window.initLayout = (navType = 'type1') => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) {
        header.innerHTML = components.navbars[navType];
    }

    if (footer) {
        footer.innerHTML = components.footer;
    }

    if (!document.getElementById('auth-modal')) {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = components.authModal;
        document.body.appendChild(modalDiv.firstElementChild);
    }
};