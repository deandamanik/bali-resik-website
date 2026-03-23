const initImpactSlider = () => {
    const images = document.querySelectorAll('.impact-img');
    const dots = document.querySelectorAll('.impact-dot');
    let currentIndex = 0;
    const intervalTime = 6000;

    if (images.length === 0) return; 

    const changeImage = () => {
        dots[currentIndex].classList.remove('w-8', 'bg-[#1F7A6B]', 'shadow-[0_0_15px_rgba(31,122,107,0.8)]');
        dots[currentIndex].classList.add('w-2', 'bg-white/50');

        currentIndex = (currentIndex + 1) % images.length;

        images.forEach((img, index) => {
            img.classList.toggle('opacity-100', index === currentIndex);
            img.classList.toggle('opacity-0', index !== currentIndex);
        });

        dots[currentIndex].classList.remove('w-2', 'bg-white/50');
        dots[currentIndex].classList.add('w-8', 'bg-[#1F7A6B]', 'shadow-[0_0_15px_rgba(31,122,107,0.8)]');
    };

    setInterval(changeImage, intervalTime);
};

document.addEventListener('DOMContentLoaded', initImpactSlider);