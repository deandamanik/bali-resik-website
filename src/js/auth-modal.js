const authTemplates = {
    login: `
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-primary mb-2">Selamat Datang di Bali Resik</h2>
        </div>
        <form class="space-y-5 w-full">
            <div>
                <label class="block text-primary font-bold mb-1.5 ml-1 text-sm">Email</label>
                <input type="email" class="w-full px-6 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all text-sm shadow-sm" placeholder="Masukkan email kamu">
            </div>
            <div class="relative">
                <div class="flex justify-between mb-1.5 px-1">
                    <label class="text-primary font-bold text-sm">Kata Sandi</label>
                    <button type="button" onclick="togglePassword('login-pass', 'eye-icon')" class="text-[12px] text-primary flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity">
                        <img id="eye-icon" src="../public/assets/icon/eye-close.png" class="w-4 h-4 object-contain" alt="Eye Icon">
                        <span>Sembunyi</span>
                    </button>
                </div>
                <input id="login-pass" type="password" class="w-full px-6 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all text-sm shadow-sm" placeholder="Masukkan kata sandi">
                <button type="button" class="text-[11px] text-primary mt-2 underline ml-1 font-semibold italic">Lupa Kata Sandi?</button>
            </div>
            <a href="profile.html"
            class="w-full bg-[#569785] hover:bg-primary text-white py-4 
                    rounded-full font-bold shadow-md transition-all 
                    duration-300 transform hover:-translate-y-0.5 
                    mt-2 text-base block text-center">
            Masuk
            </a>
        </form>
        <div class="relative my-8">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-100"></div></div>
            <div class="relative flex justify-center text-[12px]"><span class="px-4 bg-white text-gray-400 italic font-medium">atau</span></div>
        </div>
        <button class="w-full flex items-center justify-center gap-3 border border-gray-200 py-3.5 rounded-full hover:bg-gray-50 transition-all mb-6 font-bold text-gray-600 text-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5"> Lanjutkan dengan Google
        </button>
        <p class="text-center text-[13px] text-gray-500 font-medium">Belum Bergabung? <button onclick="toggleAuth('signup')" class="text-primary font-bold underline underline-offset-4 ml-1">Daftar</button></p>
    `,
    signup: `
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-primary mb-2">Selamat Datang di Bali Resik</h2>
            <p class="text-gray-400 text-sm italic px-4">Mulai berkontribusi menjaga Bali tetap bersih.</p>
        </div>
        <form class="space-y-5 w-full">
            <div>
                <label class="block text-primary font-bold mb-1.5 ml-1 text-sm">Nama Lengkap</label>
                <input type="text" class="w-full px-6 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all text-sm shadow-sm" placeholder="Nama lengkap kamu">
            </div>
            <div>
                <label class="block text-primary font-bold mb-1.5 ml-1 text-sm">Email</label>
                <input type="email" class="w-full px-6 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all text-sm shadow-sm" placeholder="Email aktif kamu">
            </div>
            <div>
                <div class="flex justify-between mb-1.5 px-1">
                    <label class="text-primary font-bold text-sm">Kata Sandi</label>
                    <button type="button" onclick="togglePassword('signup-pass', 'eye-icon-up')" class="text-[12px] text-primary flex items-center gap-1.5 font-bold hover:opacity-80 transition-opacity">
                        <img id="eye-icon-up" src="../public/assets/icon/eye-close.png" class="w-4 h-4 object-contain" alt="Eye Icon">
                        <span>Sembunyi</span>
                    </button>
                </div>
                <input id="signup-pass" type="password" class="w-full px-6 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all text-sm shadow-sm" placeholder="Buat kata sandi">
                <p class="text-[11px] text-primary mt-2 italic px-1 font-medium leading-relaxed">
                    Gunakan 8 karakter atau lebih dengan campuran huruf, angka, dan simbol.
                </p>
            </div>
            <a href="profile.html"
            class="w-full bg-[#569785] hover:bg-primary text-white py-4 
                    rounded-full font-bold shadow-md transition-all 
                    duration-300 transform hover:-translate-y-0.5 
                    mt-4 text-base block text-center">
            Buat akun
            </a>
        </form>
        <div class="relative my-8">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-100"></div></div>
            <div class="relative flex justify-center text-[12px]"><span class="px-4 bg-white text-gray-400 italic font-medium">atau</span></div>
        </div>
        <button class="w-full flex items-center justify-center gap-3 border border-gray-200 py-3.5 rounded-full hover:bg-gray-50 transition-all mb-8 font-bold text-gray-600 text-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5"> Lanjutkan dengan Google
        </button>
        <p class="text-center text-[13px] text-gray-500 font-semibold">Sudah punya akun? <button onclick="toggleAuth('login')" class="text-primary font-bold underline underline-offset-4 ml-1">Masuk</button></p>
    `
};

function togglePassword(inputId, iconId) {
    const passInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);
    const btnSpan = eyeIcon.nextElementSibling;

    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.src = "../public/assets/icon/eye-open.png";
        btnSpan.innerText = "Tampilkan";
    } else {
        passInput.type = "password";
        eyeIcon.src = "../public/assets/icon/eye-close.png";
        btnSpan.innerText = "Sembunyi";
    }
}

window.openAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    toggleAuth('login');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};

window.closeAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
};

window.toggleAuth = (type) => {
    const content = document.getElementById('modal-content');
    content.innerHTML = authTemplates[type];
};

window.togglePassword = togglePassword;

window.openAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const container = document.getElementById('modal-container');
    
    toggleAuth('login');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    document.body.classList.add('lock-scroll');

    requestAnimationFrame(() => {
        backdrop.classList.replace('opacity-0', 'opacity-100');
        container.classList.remove('scale-95', 'opacity-0');
        container.classList.add('scale-100', 'opacity-100');
    });
};

window.closeAuthModal = () => {
    const modal = document.getElementById('auth-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const container = document.getElementById('modal-container');

    backdrop.classList.replace('opacity-100', 'opacity-0');
    
    container.classList.remove('scale-100', 'opacity-100');
    container.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';

    }, 500); 
};
