const initHeroSlider = () => {
    const images = document.querySelectorAll('.hero-img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 5000;

    const changeImage = () => {
        dots[currentIndex].classList.remove('w-8', 'bg-[#1F7A6B]', 'shadow-[0_0_10px_rgba(31,122,107,0.5)]');
        dots[currentIndex].classList.add('w-2', 'bg-white/30');

        currentIndex = (currentIndex + 1) % images.length;
        
        images.forEach((img, index) => {
            img.classList.toggle('opacity-100', index === currentIndex);
            img.classList.toggle('opacity-0', index !== currentIndex);
        });

        dots[currentIndex].classList.remove('w-2', 'bg-white/30');
        dots[currentIndex].classList.add('w-8', 'bg-[#1F7A6B]', 'shadow-[0_0_10px_rgba(31,122,107,0.5)]');
    };

    setInterval(changeImage, intervalTime);
};

document.addEventListener('DOMContentLoaded', initHeroSlider);