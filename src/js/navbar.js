// =====================
// Mobile Menu Toggle
// =====================
window.toggleMobileMenu = (event) => {
    event?.stopPropagation();

    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('hamburger-btn');
    const lines = btn?.querySelectorAll('.hamburger-line');

    if (!menu || !btn) return;

    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
        menu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        btn.setAttribute('aria-expanded', 'false');

        if (lines?.length) {
            lines[0].style.transform = '';
            lines[1].style.opacity = '';
            lines[2].style.transform = '';
            lines[2].style.width = '1rem';
        }
    } else {
        menu.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        btn.setAttribute('aria-expanded', 'true');

        if (lines?.length) {
            lines[0].style.transform = 'translateY(8px) rotate(45deg)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            lines[2].style.width = '1.5rem';
        }
    }
};

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('mobile-menu');

    if (menu && !menu.classList.contains('hidden') && navbar && !navbar.contains(e.target)) {
        window.toggleMobileMenu();
    }
});

// Close mobile menu when clicking mobile link
document.addEventListener('click', (e) => {
    const mobileLink = e.target.closest('.mobile-nav-item');
    const menu = document.getElementById('mobile-menu');

    if (mobileLink && menu && !menu.classList.contains('hidden')) {
        window.toggleMobileMenu();
    }
});

// Close mobile menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const menu = document.getElementById('mobile-menu');
        const btn = document.getElementById('hamburger-btn');
        const lines = btn?.querySelectorAll('.hamburger-line');

        if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }

        document.body.classList.remove('overflow-hidden');

        if (btn) btn.setAttribute('aria-expanded', 'false');

        if (lines?.length) {
            lines[0].style.transform = '';
            lines[1].style.opacity = '';
            lines[2].style.transform = '';
            lines[2].style.width = '1rem';
        }
    }
});

// =====================
// Navbar Scroll Behavior
// =====================
const initNavbarScroll = (navType = 'type1') => {
    const navbarInner = document.getElementById('navbar-inner');
    const logoImg = document.querySelector('#navbar img[alt="Bali Resik Logo"]');
    const navTitle = document.getElementById('nav-title');
    const navLinks = document.querySelectorAll('.nav-item');
    const navBtn = document.getElementById('nav-btn');
    const userIconDiv = document.getElementById('nav-user');
    const userIconImg = document.querySelector('#nav-user img');
    const hamburgerLines = document.querySelectorAll('#hamburger-btn .hamburger-line');

    const isPetaPage = navType === 'navbarPeta';

    const getActiveMenu = () => {
        const path = window.location.pathname;

        if (path.includes('peta-sampah.html')) return 'Peta Sampah';
        if (path.includes('gamifikasi.html')) return 'Gamifikasi';
        if (path.includes('hubungi-kami.html')) return 'Hubungi Kami';
        if (path.includes('pelaporan.html')) return 'Laporkan';
        if (path.includes('profile.html')) return '';

        return 'Beranda';
    };

    const activeMenuText = getActiveMenu();

    const updateNavLinks = (isScrolled) => {
        navLinks.forEach((link) => {
            const isCurrent = link.innerText.trim() === activeMenuText;

            link.classList.remove(
                'text-white',
                'font-bold',
                'relative',
                'after:absolute',
                'after:-bottom-2',
                'after:left-0',
                'after:w-full',
                'after:h-0.5',
                'after:bg-white',
                'after:bg-[#1F7A6B]',
                'text-gray-600',
                'text-white/60'
            );

            link.style.color = '';

            if (isScrolled || isPetaPage) {
                link.classList.add('text-gray-600');

                if (isCurrent) {
                    link.style.color = '#1F7A6B';
                    link.classList.add(
                        'font-bold',
                        'relative',
                        'after:absolute',
                        'after:-bottom-2',
                        'after:left-0',
                        'after:w-full',
                        'after:h-0.5',
                        'after:bg-[#1F7A6B]'
                    );
                }

                link.onmouseenter = () => (link.style.color = '#1F7A6B');
                link.onmouseleave = () => {
                    if (!isCurrent) link.style.color = '';
                };
            } else {
                link.classList.add('text-white/60');

                if (isCurrent) {
                    link.style.color = 'white';
                    link.classList.add(
                        'text-white',
                        'font-bold',
                        'relative',
                        'after:absolute',
                        'after:-bottom-2',
                        'after:left-0',
                        'after:w-full',
                        'after:h-0.5',
                        'after:bg-white'
                    );
                }

                link.onmouseenter = () => (link.style.color = 'white');
                link.onmouseleave = () => {
                    if (!isCurrent) link.style.color = '';
                };
            }
        });
    };

    const applyNavbarState = (isScrolled) => {
        if (isScrolled || isPetaPage) {
            if (navbarInner) {
                navbarInner.classList.add('bg-white', 'py-4', 'shadow-md');
                navbarInner.classList.remove('border-white/10');
            }

            if (navTitle) navTitle.style.color = '#1F7A6B';
            if (logoImg) logoImg.src = '../public/assets/logo/Logo-Green.png';

            if (navBtn) {
                navBtn.style.backgroundColor = '#1F7A6B';
                navBtn.style.color = 'white';
            }

            if (userIconImg) userIconImg.src = '../public/assets/icon/icon-user-2.png';
            if (userIconDiv) userIconDiv.style.borderColor = 'rgba(31, 122, 107, 0.2)';

            hamburgerLines.forEach((line) => {
                line.style.backgroundColor = '#1F7A6B';
            });
        } else {
            if (navbarInner) {
                navbarInner.classList.remove('bg-white', 'py-4', 'shadow-md');
                navbarInner.classList.add('border-white/10');
            }

            if (navTitle) navTitle.style.color = 'white';
            if (logoImg) logoImg.src = '../public/assets/logo/Logo-White.png';

            if (navBtn) {
                navBtn.style.backgroundColor = 'white';
                navBtn.style.color = '#153C35';
            }

            if (userIconImg) userIconImg.src = '../public/assets/icon/Icon-User.png';
            if (userIconDiv) userIconDiv.style.borderColor = 'rgba(255, 255, 255, 0.1)';

            hamburgerLines.forEach((line) => {
                line.style.backgroundColor = 'white';
            });
        }

        updateNavLinks(isScrolled);
    };

    applyNavbarState(window.scrollY > 50);

    window.addEventListener('scroll', () => {
        applyNavbarState(window.scrollY > 50);
    });
};