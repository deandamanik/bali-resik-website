const components = {
    navbars: {
        type1: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-[200] transition-all duration-500">
            <div class="flex justify-between items-center gap-3 py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-20 xl:px-36 border-b border-white/10 transition-all duration-500" id="navbar-inner">
                <div class="flex min-w-0 items-center gap-3 sm:gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                    <img id="logo-img" src="../public/assets/logo/Logo-White.png" alt="Bali Resik Logo" class="h-9 sm:h-10 lg:h-12 shrink-0 transition-all">
                    <h1 id="nav-title" class="truncate text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight transition-all">Bali Resik</h1>
                </div>  
                
                <div id="nav-links" class="hidden md:flex gap-8 lg:gap-14 font-medium text-white/60 items-center animate-slideInRight animate-delay-200">
                    <a href="index.html" class="nav-item hover:text-white transition-all">Beranda</a>
                    <a href="peta-sampah.html" class="nav-item hover:text-white transition-all">Peta Sampah</a>
                    <a href="perankingan-desa.html" class="nav-item hover:text-white transition-all">Perankingan</a>
                    <a href="gamifikasi.html" class="nav-item hover:text-white transition-all">Gamifikasi</a>
                    <a href="hubungi-kami.html" class="nav-item hover:text-white transition-all">Hubungi Kami</a>
                </div>
                
                <div class="flex shrink-0 items-center gap-2 sm:gap-4 animate-slideInRight animate-delay-400">
                    <a href="pelaporan.html" class="hidden md:block shrink-0">
                        <button id="nav-btn" class="bg-white text-[#153C35] px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                            Laporkan
                        </button>
                    </a>
                    <div onclick="openAuthModal()" id="nav-user" class="hidden md:flex w-10 h-10 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition cursor-pointer">
                        <img src="../public/assets/icon/Icon-User.png" alt="User" class="w-full h-full object-cover">
                    </div>

                    <button
                        id="hamburger-btn"
                        type="button"
                        class="relative z-[220] md:hidden flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
                        onclick="toggleMobileMenu(event)"
                        aria-label="Toggle menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Toggle menu</span>
                        <span class="hamburger-wrap flex flex-col justify-center items-center gap-1.5">
                            <span class="hamburger-line block h-0.5 w-6 bg-white transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-6 bg-white transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-4 bg-white transition-all duration-300 rounded-full self-end"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 w-full z-[210] overflow-hidden">
                <div id="mobile-menu-inner" class="flex max-h-[calc(100vh-84px)] flex-col overflow-y-auto px-4 sm:px-6 pb-5 pt-2 gap-1 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
                    <a href="index.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Beranda</a>
                    <a href="peta-sampah.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Peta Sampah</a>
                    <a href="perankingan-desa.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Perankingan</a>   
                    <a href="gamifikasi.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Gamifikasi</a>
                    <a href="hubungi-kami.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Hubungi Kami</a>
                    <div class="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                        <a href="pelaporan.html" class="flex-1">
                            <button class="w-full bg-primary text-white px-7 py-2.5 rounded-lg font-bold hover:bg-bali-600 transition cursor-pointer">
                                Laporkan
                            </button>
                        </a>
                        <div onclick="openAuthModal()" class="w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-primary/30 transition cursor-pointer flex-none">
                            <img src="../public/assets/icon/icon-user-2.png" alt="User" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </nav>`,

        type2: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-[200] transition-all duration-500">
            <div class="flex justify-between items-center gap-3 py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-20 xl:px-36 border-b border-white/10 transition-all duration-500" id="navbar-inner">
                <div class="flex min-w-0 items-center gap-3 sm:gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                    <img id="logo-img" src="../public/assets/logo/Logo-White.png" alt="Bali Resik Logo" class="h-9 sm:h-10 lg:h-12 shrink-0 transition-all">
                    <h1 id="nav-title" class="truncate text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight transition-all">Bali Resik</h1>
                </div>
                
                <div class="flex shrink-0 items-center gap-2 sm:gap-4 animate-slideInRight animate-delay-400">
                    <a href="index.html" class="hidden md:block shrink-0">
                        <button id="nav-btn" class="bg-white text-[#153C35] px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                            Beranda
                        </button>
                    </a>
                    <div onclick="openAuthModal()" id="nav-user" class="hidden md:flex w-10 h-10 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition cursor-pointer">
                        <img src="../public/assets/icon/Icon-User.png" alt="User" class="w-full h-full object-cover">
                    </div>

                    <button
                        id="hamburger-btn"
                        type="button"
                        class="relative z-[220] md:hidden flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
                        onclick="toggleMobileMenu(event)"
                        aria-label="Toggle menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Toggle menu</span>
                        <span class="hamburger-wrap flex flex-col justify-center items-center gap-1.5">
                            <span class="hamburger-line block h-0.5 w-6 bg-white transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-6 bg-white transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-4 bg-white transition-all duration-300 rounded-full self-end"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 w-full z-[210] overflow-hidden">
                <div id="mobile-menu-inner" class="flex max-h-[calc(100vh-84px)] flex-col overflow-y-auto px-4 sm:px-6 pb-5 pt-2 gap-1 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
                    <a href="index.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Beranda</a>
                    <a href="peta-sampah.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Peta Sampah</a>
                    <a href="perankingan-desa.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Perankingan</a>
                    <a href="gamifikasi.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Gamifikasi</a>
                    <a href="hubungi-kami.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Hubungi Kami</a>
                    <div class="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                        <a href="index.html" class="flex-1">
                            <button class="w-full bg-primary text-white px-7 py-2.5 rounded-lg font-bold hover:bg-bali-600 transition cursor-pointer">
                                Beranda
                            </button>
                        </a>
                        <div onclick="openAuthModal()" class="w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-primary/30 transition cursor-pointer flex-none">
                            <img src="../public/assets/icon/icon-user-2.png" alt="User" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </nav>`,

        navbarPeta: `
        <nav id="navbar" class="fixed top-0 left-0 w-full z-[200] transition-all duration-500">
            <div class="flex justify-between items-center gap-3 py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-20 xl:px-36 bg-white border-b border-gray-100 shadow-sm transition-all duration-500" id="navbar-inner">
                <div class="flex min-w-0 items-center gap-3 sm:gap-4 cursor-pointer animate-slideInLeft" onclick="window.location.href='index.html'">
                    <img id="logo-img" src="../public/assets/logo/Logo-Green.png" alt="Bali Resik Logo" class="h-9 sm:h-10 lg:h-12 shrink-0 transition-all">
                    <h1 id="nav-title" class="truncate text-lg sm:text-xl lg:text-2xl font-bold text-[#1F7A6B] tracking-tight transition-all">Bali Resik</h1>
                </div> 
                
                <div id="nav-links" class="hidden md:flex gap-8 lg:gap-14 font-medium text-gray-500 items-center animate-slideInRight animate-delay-200">
                    <a href="index.html" class="nav-item hover:text-[#1F7A6B] transition-all">Beranda</a>
                    <a href="peta-sampah.html" class="nav-item text-[#1F7A6B] font-bold relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#1F7A6B] transition-all">Peta Sampah</a>
                    <a href="perankingan-desa.html" class="nav-item hover:text-[#1F7A6B] transition-all">Perankingan</a>
                    <a href="gamifikasi.html" class="nav-item hover:text-[#1F7A6B] transition-all">Gamifikasi</a>
                    <a href="hubungi-kami.html" class="nav-item hover:text-[#1F7A6B] transition-all">Hubungi Kami</a>
                </div>
                
                <div class="flex shrink-0 items-center gap-2 sm:gap-4 animate-slideInRight animate-delay-400">
                    <a href="pelaporan.html" class="hidden md:block shrink-0">
                        <button id="nav-btn" class="bg-[#1F7A6B] text-white px-7 py-2 rounded-sm font-bold hover:brightness-110 transition shadow-lg cursor-pointer">
                            Laporkan
                        </button>
                    </a>
                    <div onclick="openAuthModal()" id="nav-user" class="hidden md:flex w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-[#1F7A6B]/30 transition cursor-pointer">
                        <img src="../public/assets/icon/icon-user-2.png" alt="User" class="w-full h-full object-cover">
                    </div>

                    <button
                        id="hamburger-btn"
                        type="button"
                        class="relative z-[220] md:hidden flex h-11 w-11 items-center justify-center rounded-full cursor-pointer"
                        onclick="toggleMobileMenu(event)"
                        aria-label="Toggle menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Toggle menu</span>
                        <span class="hamburger-wrap flex flex-col justify-center items-center gap-1.5">
                            <span class="hamburger-line block h-0.5 w-6 bg-primary transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-6 bg-primary transition-all duration-300 rounded-full"></span>
                            <span class="hamburger-line block h-0.5 w-4 bg-primary transition-all duration-300 rounded-full self-end"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 w-full z-[210] overflow-hidden">
                <div id="mobile-menu-inner" class="flex max-h-[calc(100vh-84px)] flex-col overflow-y-auto px-4 sm:px-6 pb-5 pt-2 gap-1 bg-white shadow-lg border-t border-gray-100">
                    <a href="index.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Beranda</a>
                    <a href="peta-sampah.html" class="mobile-nav-item py-3 px-4 rounded-lg text-primary font-bold bg-bali-50 transition-all">Peta Sampah</a>
                    <a href="perankingan-desa.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Perankingan</a>
                    <a href="gamifikasi.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Gamifikasi</a>
                    <a href="hubungi-kami.html" class="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-bali-50 hover:text-primary transition-all">Hubungi Kami</a>
                    <div class="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                        <a href="pelaporan.html" class="flex-1">
                            <button class="w-full bg-primary text-white px-7 py-2.5 rounded-lg font-bold hover:bg-bali-600 transition cursor-pointer">
                                Laporkan
                            </button>
                        </a>
                        <div onclick="openAuthModal()" class="w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-primary/30 transition cursor-pointer flex-none">
                            <img src="../public/assets/icon/icon-user-2.png" alt="User" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </nav>`
    },

    footer: `
    <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-40">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3 cursor-pointer" onclick="window.location.href='index.html'">
              <img src="../public/assets/logo/Logo-Green.png" alt="Bali Resik Logo" class="w-10 h-10 object-contain">
              <span class="text-2xl font-bold text-primary tracking-tight">Bali Resik</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
              Platform pelaporan sampah berbasis komunitas untuk menjaga keindahan dan kebersihan Bali.
            </p>
            <div class="flex gap-3">
              <a href="#" class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all">
                <img src="../public/assets/icon/icon-instagram.png" alt="Instagram" class="w-4 h-4 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="#" class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all">
                <img src="../public/assets/icon/icon-twitter.png" alt="Twitter" class="w-4 h-4 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="#" class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all">
                <img src="../public/assets/icon/icon-yt.png" alt="YouTube" class="w-4 h-4 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
              <a href="#" class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center hover:bg-primary group transition-all">
                <img src="../public/assets/icon/icon-media.png" alt="Website" class="w-4 h-4 object-contain group-hover:brightness-0 group-hover:invert transition-all">
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Halaman</h4>
            <ul class="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><a href="index.html" class="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="peta-sampah.html" class="hover:text-primary transition-colors">Peta Sampah</a></li>
              <li><a href="perankingan-desa.html" class="hover:text-primary transition-colors">Perankingan</a></li> 
              <li><a href="gamifikasi.html" class="hover:text-primary transition-colors">Gamifikasi</a></li>
              <li><a href="hubungi-kami.html" class="hover:text-primary transition-colors">Hubungi Kami</a></li>
              <li><a href="pelaporan.html" class="hover:text-primary transition-colors">Laporkan Sampah</a></li>
            </ul>
          </div>

          <div class="flex flex-col gap-6">
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">Mulai Berkontribusi</h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Bersama kita jaga Bali tetap bersih dan lestari untuk generasi mendatang.
            </p>
            <a href="pelaporan.html" class="inline-block">
              <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-bali-600 transition-all shadow-md w-full md:w-auto cursor-pointer">
                Laporkan Sekarang
              </button>
            </a>
          </div>
        </div>

        <div class="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>Copyright © 2026 Bali Resik. All rights reserved.</p>
          <p class="text-xs">Inspired by <span class="italic font-medium">Tri Hita Karana</span></p>
        </div>
      </div>
    </footer>`,

    authModal: `
    <div id="auth-modal" class="fixed inset-0 z-999 hidden items-center justify-center">
        <div id="modal-backdrop" class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-all duration-500" onclick="closeAuthModal()"></div>
        <div id="modal-container" class="relative w-[90%] max-w-125 z-1000 opacity-0 scale-95 transition-all duration-300">
            <div class="bg-white rounded-[35px] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
                <button type="button" onclick="closeAuthModal()" class="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-primary p-2 hover:bg-gray-100 rounded-full transition-all">
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