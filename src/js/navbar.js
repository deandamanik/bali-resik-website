const initNavbar = () => {
    const navbar = document.getElementById('navbar');
    const logoImg = document.querySelector('#navbar img[alt="Bali Resik Logo"]');
    const navTitle = document.getElementById('nav-title');
    const navLinks = document.querySelectorAll('.nav-item');
    const navBtn = document.getElementById('nav-btn');
    const userIconDiv = document.getElementById('nav-user');
    const userIconImg = document.querySelector('#nav-user img');

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;

        if (isScrolled) {
            navbar.classList.add('bg-white', 'py-4', 'shadow-md');
            navbar.classList.remove('py-6', 'border-b', 'border-white/10');
            
            navTitle.style.color = "#1F7A6B"; 
            logoImg.src = "../public/assets/logo/Logo-Green.png"; 

            navLinks.forEach(link => {
                link.classList.add('text-gray-600');
                link.classList.remove('text-white/60');

                if (link.innerText === "Beranda") {
                    link.style.color = "#1F7A6B";
                    link.classList.add('after:bg-[#1F7A6B]');
                    link.classList.remove('after:bg-white');
                }

                link.onmouseenter = () => link.style.color = "#1F7A6B";
                link.onmouseleave = () => {
                    if (link.innerText !== "Beranda") {
                        link.style.color = ""; 
                    }
                };
            });

            navBtn.style.backgroundColor = "#1F7A6B";
            navBtn.classList.replace('text-[#153C35]', 'text-white');
            
            userIconImg.src = "../public/assets/icon/icon-user-2.png";
            userIconDiv.style.borderColor = "rgba(31, 122, 107, 0.2)";

        } else {
            navbar.classList.remove('bg-white', 'py-4', 'shadow-md');
            navbar.classList.add('py-6', 'border-b', 'border-white/10');
            
            navTitle.style.color = "white";
            logoImg.src = "../public/assets/logo/Logo-White.png";

            navLinks.forEach(link => {
                link.classList.remove('text-gray-600');
                link.classList.add('text-white/60');
                link.style.color = ""; 

                if (link.innerText === "Beranda") {
                    link.style.color = "white";
                    link.classList.remove('after:bg-[#1F7A6B]');
                    link.classList.add('after:bg-white');
                }

                link.onmouseenter = () => link.style.color = "white";
                link.onmouseleave = () => link.style.color = ""; 
            });

            navBtn.style.backgroundColor = "white";
            navBtn.classList.replace('text-white', 'text-[#153C35]');
            
            userIconImg.src = "../public/assets/icon/Icon-User.png";
            userIconDiv.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }
    });
};

document.addEventListener('DOMContentLoaded', initNavbar);