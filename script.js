// الرمز السري للدخول
const VIP_CODE = "VIP2026";

// قاموس الترجمة المتقنة 100% للغات الثلاث
const i18n = {
    ar: {
        loginTitle: "🔒 أدخل رمز VIP لتفعيل التطبيق",
        loginDesc: "احصل على الرمز المباشر من القناة الرسمية",
        btnLogin: "تأكيد الدخول",
        errPass: "الرمز غير صحيح! راجع القناة للحصول عليه.",
        hSys: "📊 فحص النظام والدقة",
        lblRam: "الرامات التقديرية:",
        lblCpu: "أنوية المعالج:",
        lblFps: "معدل الفريمات (FPS):",
        lblRes: "دقة الشاشة:",
        hGen: "🎯 توليد الحساسية المخصصة",
        lblQuality: "اختر جودة وطبيعة لعبك:",
        btnGen: "توليد الحساسية المثالية",
        hDpi: "⚙️ نصائح الـ DPI والجودة",
        hSocial: "📢 القناة والدعم الفني",
        socialDesc: "تابع كل جديد واطلب حساسية خاصة لجهازك من القناة:"
    },
    egy: {
        loginTitle: "🔒 اكتب باسوورد الـ VIP عشان يفتح",
        loginDesc: "هات الكود علطول من القناة بتاعتنا",
        btnLogin: "ادخل يا باشا",
        errPass: "الكود غلط يا غالي! شوفه في القناة وتعال تاني.",
        hSys: "📊 امكانيات جهازك الحقيقية",
        lblRam: "الرامات شغالة بكام:",
        lblCpu: "عدد الأنوية في البروسيسور:",
        lblFps: "الفريمات الشغالة (FPS):",
        lblRes: "أبعاد الشاشة:",
        hGen: "🎯 هات الحساسية المظبوطة",
        lblQuality: "طريقة لعبك ومستواك ايه:",
        btnGen: "طلعلي الحساسية فوراً",
        hDpi: "⚙️ الـ DPI المظبوط للجهاز",
        hSocial: "📢 قناتنا والدعم",
        socialDesc: "شرفنا في القناة واطلب أي حساسية محتاجها:"
    },
    en: {
        loginTitle: "🔒 Enter VIP Code to Unlock",
        loginDesc: "Get the code directly from our channel",
        btnLogin: "Confirm Code",
        errPass: "Invalid Code! Check our channel to get it.",
        hSys: "📊 System & Performance Info",
        lblRam: "Estimated RAM:",
        lblCpu: "CPU Cores:",
        lblFps: "Target FPS Rate:",
        lblRes: "Screen Resolution:",
        hGen: "🎯 Custom Sensitivity Generator",
        lblQuality: "Select Playstyle & Quality:",
        btnGen: "Generate Sensitivity",
        hDpi: "⚙️ DPI & Graphic Recommendations",
        hSocial: "📢 Channel & Support",
        socialDesc: "Subscribe to our channel for custom sensitivities:"
    }
};

let currentLang = 'ar';

// فحص الرمز السرّي
function checkPasscode() {
    const input = document.getElementById('vip-passcode').value;
    const err = document.getElementById('pass-error');
    if(input === VIP_CODE) {
        document.getElementById('login-overlay').style.display = 'none';
        initSystemCheck();
    } else {
        err.innerText = i18n[currentLang].errPass;
    }
}

// تغيير اللغة المتقنة
function changeLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    
    document.getElementById('login-title').innerText = t.loginTitle;
    document.getElementById('login-desc').innerText = t.loginDesc;
    document.getElementById('btn-login').innerText = t.btnLogin;
    document.getElementById('h-sys').innerText = t.hSys;
    document.getElementById('lbl-ram').innerText = t.lblRam;
    document.getElementById('lbl-cpu').innerText = t.lblCpu;
    document.getElementById('lbl-fps').innerText = t.lblFps;
    document.getElementById('lbl-res').innerText = t.lblRes;
    document.getElementById('h-gen').innerText = t.hGen;
    document.getElementById('lbl-quality').innerText = t.lblQuality;
    document.getElementById('btn-gen').innerText = t.btnGen;
    document.getElementById('h-dpi').innerText = t.hDpi;
    document.getElementById('h-social').innerText = t.hSocial;
    document.getElementById('social-desc').innerText = t.socialDesc;

    // ضبط اتجاه الصفحة حسب اللغة
    document.dir = (lang === 'en') ? 'ltr' : 'rtl';
}

// قراءة بيانات النظام بدقة 100%
function initSystemCheck() {
    // الرام الحقيقية التقريبية
    const ram = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "غير محدد بدقة";
    document.getElementById('ram-val').innerText = ram;

    // أنوية المعالج
    const cores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : "4 Cores";
    document.getElementById('cpu-val').innerText = cores;

    // الشاشة والرزليوشن
    document.getElementById('res-val').innerText = `${window.screen.width} x ${window.screen.height}`;

    // حساب الـ FPS التقديري الشغّال
    let requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    let startTime = performance.now();
    let frames = 0;

    function calcFPS() {
        frames++;
        let now = performance.now();
        if (now - startTime >= 1000) {
            document.getElementById('fps-val').innerText = `${frames} FPS (Hz)`;
        } else {
            requestFrame(calcFPS);
        }
    }
    requestFrame(calcFPS);
}

// مولد الحساسية
function generateSensi() {
    const gen = Math.floor(Math.random() * 15) + 85; // 85 - 100
    const red = Math.floor(Math.random() * 15) + 80;
    const scope2 = Math.floor(Math.random() * 15) + 75;
    const scope4 = Math.floor(Math.random() * 15) + 70;

    document.getElementById('sensi-result').innerHTML = `
        عام (General): ${gen}<br>
        نقطة حمراء (Red Dot): ${red}<br>
        عدسة 2X: ${scope2}<br>
        عدسة 4X: ${scope4}
    `;

    document.getElementById('dpi-info').innerHTML = `
        <p>💡 <strong>DPI الموصى به:</strong> ${window.screen.width < 600 ? '410 - 480 DPI' : 'تخطي DPI أو استخدم 600'}</p>
    `;
}