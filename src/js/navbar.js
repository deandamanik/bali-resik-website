const initNavbarScroll = (navType = 'type1') => {
    const navbar = document.getElementById('navbar');
    const logoImg = document.querySelector('#navbar img[alt="Bali Resik Logo"]');
    const navTitle = document.getElementById('nav-title');
    const navLinks = document.querySelectorAll('.nav-item');
    const navBtn = document.getElementById('nav-btn');
    const userIconDiv = document.getElementById('nav-user');
    const userIconImg = document.querySelector('#nav-user img');

    const getActiveMenu = () => {
        const path = window.location.pathname;
        
        if (path.includes('peta-sampah.html')) return "Peta Sampah";
        if (path.includes('gamifikasi.html')) return "Gamifikasi";
        if (path.includes('hubungi-kami.html')) return "Hubungi Kami";
        if (path.includes('pelaporan.html')) return "Laporkan";
        if (path.includes('profile.html')) return "";
        
        return "Beranda"; 
    };

    const activeMenuText = getActiveMenu();

    const updateNavLinks = (isScrolled) => {
        navLinks.forEach(link => {
            const isCurrent = link.innerText.trim() === activeMenuText;
            
            link.classList.remove(
                'text-white', 'font-bold', 'relative', 'after:absolute', 
                'after:-bottom-2', 'after:left-0', 'after:w-full', 'after:h-0.5',
                'after:bg-white', 'after:bg-[#1F7A6B]', 'text-gray-600', 'text-white/60'
            );

            if (isScrolled) {
                link.classList.add('text-gray-600');
                
                if (isCurrent) {
                    link.style.color = "#1F7A6B";
                    link.classList.add('font-bold', 'relative', 'after:absolute', 'after:-bottom-2', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-[#1F7A6B]');
                } else {
                    link.style.color = ""; 
                }

                link.onmouseenter = () => link.style.color = "#1F7A6B";
                link.onmouseleave = () => {
                    if (!isCurrent) link.style.color = ""; 
                };
            } else {
                link.classList.add('text-white/60');
                link.style.color = ""; 

                if (isCurrent) {
                    link.style.color = "white";
                    link.classList.add('text-white', 'font-bold', 'relative', 'after:absolute', 'after:-bottom-2', 'after:left-0', 'after:w-full', 'after:h-0.5');
                    
                    if (navType === 'type2') {
                        link.classList.add('after:bg-white');
                    } else {
                        link.classList.add('after:bg-white');
                    }
                }

                link.onmouseenter = () => link.style.color = "white";
                link.onmouseleave = () => {
                    if (!isCurrent) link.style.color = ""; 
                };
            }
        });
    };

    updateNavLinks(window.scrollY > 50);

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;

        if (isScrolled) {
            navbar.classList.add('bg-white', 'py-4', 'shadow-md');
            navbar.classList.remove('py-6', 'border-b', 'border-white/10');
            if (navTitle) navTitle.style.color = "#1F7A6B"; 
            if (logoImg) logoImg.src = "../public/assets/logo/Logo-Green.png"; 
            if (navBtn) {
                navBtn.style.backgroundColor = "#1F7A6B";
                navBtn.style.color = "white";
            }
            if (userIconImg) userIconImg.src = "../public/assets/icon/icon-user-2.png";
            if (userIconDiv) userIconDiv.style.borderColor = "rgba(31, 122, 107, 0.2)";
        } else {
            navbar.classList.remove('bg-white', 'py-4', 'shadow-md');
            navbar.classList.add('py-6', 'border-b', 'border-white/10');
            if (navTitle) navTitle.style.color = "white";
            if (logoImg) logoImg.src = "../public/assets/logo/Logo-White.png";
            if (navBtn) {
                navBtn.style.backgroundColor = "white";
                navBtn.style.color = "#153C35";
            }
            if (userIconImg) userIconImg.src = "../public/assets/icon/Icon-User.png";
            if (userIconDiv) userIconDiv.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }

        updateNavLinks(isScrolled);
    });
};