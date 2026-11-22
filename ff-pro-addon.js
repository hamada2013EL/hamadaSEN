```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FF PRO SENSI</title>
  <!-- خط Inter وخطوط عربية مناسبة للواجهة -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;800&family=Inter:wght@500;700;800&display=swap" rel="stylesheet" />
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
  <style>
    body {
      font-family: 'Cairo', 'Inter', sans-serif;
      background-color: #0D0E12;
      color: #FFFFFF;
      overflow-x: hidden;
    }
    .font-num {
      font-family: 'Inter', 'Cairo', sans-serif;
      font-variant-numeric: tabular-nums;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .tab-content-anim {
      animation: fadeSlide .22s ease-out;
    }
    @keyframes fadeSlide {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .active-nav {
      background-color: rgba(255, 42, 84, 0.14);
      color: #FF2A54 !important;
    }
  </style>
</head>
<body class="bg-[#0D0E12] text-white min-h-screen flex flex-col">

  <!-- رأس الصفحة -->
  <header class="sticky top-0 z-30 bg-[#0D0E12]/90 backdrop-blur border-b border-white/10 px-4 py-3">
    <div class="max-w-5xl mx-auto flex items-center justify-between gap-3">
      <button onclick="switchTab('home')" class="flex items-center gap-2.5 text-right">
        <span class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2A54] to-[#990F2B] flex items-center justify-center shadow-lg shadow-[#FF2A54]/30">
          <i class="fa-solid fa-crosshairs text-white text-sm"></i>
        </span>
        <span class="font-num text-lg font-extrabold tracking-wide text-white">
          FF PRO <span class="text-[#FF2A54]">SENSI</span>
        </span>
      </button>

      <div class="flex items-center gap-2">
        <select id="dialect-select" onchange="changeDialect(this.value)" aria-label="اختر اللهجة" class="bg-[#161821] border border-white/10 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white outline-none focus:border-[#FF2A54]">
          <option value="ar">العربية الفصحى</option>
          <option value="eg">مصري</option>
          <option value="sa">خليجي</option>
          <option value="ma">مغربي</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </header>

  <!-- المحتوى الرئيسي -->
  <main class="flex-1 max-w-5xl w-full mx-auto px-4 pt-5 pb-24 space-y-6">

    <!-- القسم الافتتاحي الأول داخل main -->
    <section id="tab-phones" class="tab-section tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 id="phones-title" class="text-lg font-extrabold text-white flex items-center gap-2">
              <i class="fa-solid fa-mobile-screen text-[#FF2A54]"></i>
              <span>حساسيات الهواتف</span>
            </h2>
            <p id="phones-sub" class="text-xs text-[#8E94A5]">اختر هاتفك لعرض الحساسية وحجم زر الضرب والـ DPI</p>
          </div>
          <div class="flex gap-2">
            <button onclick="copyAllSensitivity()" class="bg-[#FF2A54] hover:bg-[#e02046] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition">
              <i class="fa-solid fa-copy"></i> نسخ الكل
            </button>
            <button onclick="shareCurrentSensitivity()" class="bg-[#0D0E12] hover:bg-[#1D202C] border border-white/10 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition">
              <i class="fa-solid fa-share-nodes"></i> مشاركة
            </button>
          </div>
        </div>

        <!-- اختيار الهاتف -->
        <div id="phone-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"></div>

        <!-- تفاصيل الحساسية الحالية -->
        <div id="current-phone-box" class="bg-[#0D0E12] border border-white/10 rounded-2xl p-4 space-y-3"></div>
      </div>
    </section>

    <!-- تبويب المحرك الذكي -->
    <section id="tab-engine" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-microchip text-[#FFB800]"></i>
          <span>محرك فحص الجهاز</span>
        </h2>
        <p class="text-xs text-[#8E94A5]">اختبر مواصفات متصفحك وشاشتك لتوليد توليفة حساسية مناسبة.</p>
        <div id="engine-specs" class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs"></div>
        <button onclick="runSmartEngine()" class="bg-[#FF2A54] hover:bg-[#e02046] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          توليد حساسية مخصصة الآن
        </button>
        <div id="engine-result" class="text-xs text-[#FFB800] font-bold"></div>
      </div>
    </section>

    <!-- تبويب 400 خيار -->
    <section id="tab-options400" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-[#FF2A54]"></i>
          <span>إعدادات متقدمة وخيارات جاهزة</span>
        </h2>
        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <button onclick="switchSub400('pro', this)" class="sub400-btn bg-[#FF2A54] text-white text-xs font-bold px-3.5 py-2 rounded-xl shrink-0">
            إعدادات احترافية
          </button>
        </div>
        <div id="sub400-content" class="space-y-3"></div>
      </div>
    </section>

    <!-- تبويب التدريب -->
    <section id="tab-training" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-bullseye text-[#FFB800]"></i>
          <span>اختبار سرعة اللمس والهيدشوت</span>
        </h2>
        <p class="text-xs text-[#8E94A5]">اضغط على الهدف بأسرع ما يمكن لقياس استجابة لمسك.</p>
        <div class="flex items-center justify-between bg-[#0D0E12] border border-white/10 rounded-xl p-3 text-xs">
          <span>النقاط: <strong id="train-score" class="font-num text-[#FFB800] text-base">0</strong></span>
          <button onclick="hitTarget()" class="bg-[#FF2A54] hover:bg-[#e02046] text-white font-bold px-4 py-2 rounded-xl">
            <i class="fa-solid fa-crosshairs"></i> إصابة الهدف
          </button>
        </div>
      </div>
    </section>

    <!-- تبويب الجرافيكس -->
    <section id="tab-graphics" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-gauge-high text-[#FF2A54]"></i>
          <span>إعدادات الجرافيكس والفريمات</span>
        </h2>
        <ul class="text-xs text-[#8E94A5] space-y-2 leading-relaxed">
          <li>• الجرافيكس: <strong class="text-white">ناعم / قياسي</strong> لتقليل حمل المعالج.</li>
          <li>• معدل الإطارات: <strong class="text-white">مرتفع / فائق</strong> حسب دعم الشاشة والحرارة.</li>
          <li>• الظلال والفلترة: <strong class="text-white">إيقاف</strong> لثبات الفريمات في المواجهات القريبة.</li>
        </ul>
      </div>
    </section>

    <!-- تبويب الأدوات -->
    <section id="tab-tools" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-screwdriver-wrench text-[#FFB800]"></i>
          <span>حاسبة DPI السريعة</span>
        </h2>
        <div class="flex gap-2">
          <input id="dpi-base" type="number" value="360" min="200" max="800" class="flex-1 bg-[#0D0E12] border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-[#FF2A54]" />
          <button onclick="calcDpi()" class="bg-[#FF2A54] hover:bg-[#e02046] text-white text-xs font-bold px-4 py-2 rounded-xl">حساب</button>
        </div>
        <p id="dpi-out" class="text-xs text-[#FFB800] font-bold">DPI المقترح الآمن: 480</p>
      </div>
    </section>

    <!-- تبويب الأمان -->
    <section id="tab-safety" class="tab-section hidden tab-content-anim space-y-4">
      <div class="bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-2.5">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-emerald-400"></i>
          <span>الأمان والخصوصية</span>
        </h2>
        <p class="text-xs text-[#8E94A5] leading-relaxed">
          هذا الموقع لا يعدّل أي ملفات داخل اللعبة ولا يطلب بيانات حسابك. جميع تفضيلاتك تُحفظ محلياً على متصفحك فقط.
        </p>
      </div>
    </section>

  </main>

  <!-- شريط التنقل السفلي -->
  <nav class="fixed bottom-0 inset-x-0 z-30 bg-[#161821]/95 backdrop-blur border-t border-white/10 px-2 py-1.5">
    <div class="max-w-5xl mx-auto flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
      <button onclick="switchTab('phones', this)" data-tab="phones" class="nav-item active-nav flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-mobile-screen text-base mb-1"></i>
        <span class="text-[11px] font-bold">الهواتف</span>
      </button>
      <button onclick="switchTab('engine', this)" data-tab="engine" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-microchip text-base mb-1"></i>
        <span class="text-[11px] font-bold">المحرك</span>
      </button>
      <button onclick="switchTab('options400', this)" data-tab="options400" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-layer-group text-base mb-1"></i>
        <span class="text-[11px] font-bold">400 خيار</span>
      </button>
      <button onclick="switchTab('training', this)" data-tab="training" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-bullseye text-base mb-1"></i>
        <span class="text-[11px] font-bold">التدريب</span>
      </button>
      <button onclick="switchTab('graphics', this)" data-tab="graphics" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-gauge-high text-base mb-1"></i>
        <span class="text-[11px] font-bold">الجرافيكس</span>
      </button>
      <button onclick="switchTab('tools', this)" data-tab="tools" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-screwdriver-wrench text-base mb-1"></i>
        <span class="text-[11px] font-bold">الأدوات</span>
      </button>
      <button onclick="switchTab('safety', this)" data-tab="safety" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition">
        <i class="fa-solid fa-shield-halved text-base mb-1"></i>
        <span class="text-[11px] font-bold">الأمان</span>
      </button>
    </div>
  </nav>

  <!-- إشعار منبثق (Toast) -->
  <div id="ff-toast" class="fixed top-20 left-1/2 -translate-x-1/2 z-[80] bg-[#161821] border border-[#FF2A54]/60 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xl hidden transition"></div>

  <!-- نافذة حوار بسيطة -->
  <div id="ff-dialog" class="fixed inset-0 z-[75] bg-black/75 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-[#161821] border border-white/15 rounded-2xl w-full max-w-sm p-4 space-y-3">
      <h3 id="ff-dialog-title" class="text-sm font-extrabold text-white">تأكيد</h3>
      <p id="ff-dialog-msg" class="text-xs text-[#8E94A5] leading-relaxed"></p>
      <div class="flex justify-end gap-2 pt-1">
        <button onclick="closeModal('ff-dialog')" class="bg-[#0D0E12] border border-white/10 text-xs font-bold text-white px-3.5 py-2 rounded-xl">إلغاء</button>
        <button id="ff-dialog-ok" class="bg-[#FF2A54] text-xs font-bold text-white px-4 py-2 rounded-xl">موافق</button>
      </div>
    </div>
  </div>

  <!-- السكربت الأساسي للتطبيق -->
  <script>
    const PHONES_DB = [
      { id: 1, name: 'Samsung Galaxy A55 5G', cpu: 'Exynos 1480 • 120Hz', sensi: { general: 192, redDot: 186, scope2x: 178, scope4x: 168, sniper: 108, freeLook: 138 }, fireBtn: 48, dpi: 520 },
      { id: 2, name: 'Xiaomi Poco X6 Pro', cpu: 'Dimensity 8300-Ultra • 120Hz', sensi: { general: 195, redDot: 189, scope2x: 181, scope4x: 171, sniper: 105, freeLook: 142 }, fireBtn: 46, dpi: 540 },
      { id: 3, name: 'iPhone 13 / 14', cpu: 'A15 Bionic • 60Hz', sensi: { general: 188, redDot: 182, scope2x: 174, scope4x: 164, sniper: 112, freeLook: 135 }, fireBtn: 45, dpi: 440 },
      { id: 4, name: 'Realme GT Neo 5 SE', cpu: 'Snapdragon 7+ Gen 2 • 144Hz', sensi: { general: 190, redDot: 184, scope2x: 176, scope4x: 166, sniper: 106, freeLook: 136 }, fireBtn: 47, dpi: 530 },
      { id: 5, name: 'Redmi Note 13 Pro', cpu: 'Helio G99-Ultra • 120Hz', sensi: { general: 194, redDot: 188, scope2x: 179, scope4x: 169, sniper: 107, freeLook: 140 }, fireBtn: 49, dpi: 500 },
      { id: 6, name: 'Infinix GT 20 Pro', cpu: 'Dimensity 8200 Ultimate • 144Hz', sensi: { general: 191, redDot: 185, scope2x: 177, scope4x: 167, sniper: 104, freeLook: 137 }, fireBtn: 48, dpi: 525 }
    ];

    const DIALECTS = {
      ar: { title: 'حساسيات الهواتف', sub: 'اختر هاتفك لعرض الحساسية وحجم زر الضرب والـ DPI' },
      eg: { title: 'حساسيات الموبايلات', sub: 'اختار موبايلك وشوف الأرقام وحجم زرار الضرب والـ DPI' },
      sa: { title: 'حساسيات الجوالات', sub: 'اختر جوالك وخذ الحساسية وحجم زر الضرب والـ DPI' },
      ma: { title: 'حساسيات التليفونات', sub: 'ختار التليفون ديالك وشوف الحساسية وزر الضرب والـ DPI' },
      en: { title: 'Phone Sensitivities', sub: 'Pick your phone to view sensitivity, fire button, and DPI' }
    };

    let currentPhone = PHONES_DB[0];
    let favorites = JSON.parse(localStorage.getItem('ff_favs') || '[]');
    let trainScore = 0;

    function showToast(msg) {
      const t = document.getElementById('ff-toast');
      if (!t) return;
      t.textContent = msg;
      t.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => t.classList.add('hidden'), 2200);
    }

    function openModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('hidden');
      el.classList.add('flex');
    }

    function closeModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('hidden');
      el.classList.remove('flex');
    }

    function copyTextValue(val, label = 'النص') {
      try {
        const ta = document.createElement('textarea');
        ta.value = val;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(`تم نسخ ${label}`);
      } catch (e) {
        showToast('تعذر النسخ تلقائياً');
      }
    }

    function formatPhoneSens(p) {
      return `عام ${p.sensi.general} • نقطة ${p.sensi.redDot} • 2x ${p.sensi.scope2x} • 4x ${p.sensi.scope4x} • قناصة ${p.sensi.sniper} • نظرة حرة ${p.sensi.freeLook} • زر ${p.fireBtn}%`;
    }

    function copyAllSensitivity() {
      copyTextValue(`${currentPhone.name}: ${formatPhoneSens(currentPhone)}`, `حساسية ${currentPhone.name}`);
    }

    function shareCurrentSensitivity() {
      copyAllSensitivity();
    }

    function renderCurrentPhone() {
      const box = document.getElementById('current-phone-box');
      if (!box || !currentPhone) return;
      const isFav = favorites.some(f => f.id === currentPhone.id);
      const items = [
        ['عام', currentPhone.sensi.general],
        ['نقطة حمراء', currentPhone.sensi.redDot],
        ['عدسة 2x', currentPhone.sensi.scope2x],
        ['عدسة 4x', currentPhone.sensi.scope4x],
        ['قناصة', currentPhone.sensi.sniper],
        ['نظرة حرة', currentPhone.sensi.freeLook],
        ['زر الضرب', currentPhone.fireBtn + '%'],
        ['DPI', currentPhone.dpi]
      ];
      box.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-sm font-extrabold text-white">${currentPhone.name}</div>
            <div class="text-[11px] text-[#8E94A5]">${currentPhone.cpu}</div>
          </div>
          <button onclick="toggleFav(${currentPhone.id})" class="bg-[#161821] border border-white/10 rounded-xl px-3 py-1.5 text-xs font-bold ${isFav ? 'text-[#FFB800]' : 'text-[#8E94A5]'}">
            <i class="fa-solid fa-star"></i> ${isFav ? 'في المفضلة' : 'حفظ'}
          </button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          ${items.map(([k, v]) => `<div class="bg-[#161821] border border-white/5 rounded-xl p-2.5"><span class="text-[11px] text-[#8E94A5] block">${k}</span><strong class="font-num text-base text-white">${v}</strong></div>`).join('')}
        </div>
      `;
    }

    function selectPhone(phone) {
      if (!phone) return;
      currentPhone = phone;
      document.querySelectorAll('.phone-pick-btn').forEach(btn => {
        const active = Number(btn.dataset.pid) === phone.id;
        btn.classList.toggle('border-[#FF2A54]', active);
        btn.classList.toggle('bg-[#FF2A54]/10', active);
      });
      renderCurrentPhone();
    }

    function toggleFav(id) {
      const idx = favorites.findIndex(f => f.id === id);
      if (idx >= 0) favorites.splice(idx, 1);
      else {
        const found = PHONES_DB.find(p => p.id === id);
        if (found) favorites.push(found);
      }
      localStorage.setItem('ff_favs', JSON.stringify(favorites));
      renderCurrentPhone();
      showToast('تم تحديث المفضلة');
    }

    function applyPresetObj(preset) {
      currentPhone = {
        ...currentPhone,
        name: preset.name,
        sensi: { ...preset.sensi },
        fireBtn: preset.fireBtn,
        dpi: preset.dpi
      };
      renderCurrentPhone();
      switchTab('phones');
      showToast(`تم تطبيق: ${preset.name}`);
    }

    function changeDialect(lang) {
      const d = DIALECTS[lang] || DIALECTS.ar;
      if (document.getElementById('phones-title')) {
        document.getElementById('phones-title').innerHTML = `<i class="fa-solid fa-mobile-screen text-[#FF2A54]"></i><span>${d.title}</span>`;
      }
      if (document.getElementById('phones-sub')) {
        document.getElementById('phones-sub').textContent = d.sub;
      }
      showToast('تم تغيير اللهجة');
    }

    function switchTab(tabName, btnEl) {
      document.querySelectorAll('.tab-section').forEach(sec => sec.classList.add('hidden'));
      const target = document.getElementById('tab-' + tabName);
      if (target) target.classList.remove('hidden');
      document.querySelectorAll('.nav-item').forEach(nb => {
        nb.classList.toggle('active-nav', nb.dataset.tab === tabName);
      });
      if (btnEl && btnEl.classList && btnEl.classList.contains('nav-item')) {
        document.querySelectorAll('.nav-item').forEach(nb => nb.classList.remove('active-nav'));
        btnEl.classList.add('active-nav');
      }
    }

    function switchSub400(key, btn) {
      document.querySelectorAll('.sub400-btn').forEach(b => {
        b.classList.remove('bg-[#FF2A54]', 'text-white');
        b.classList.add('bg-[#0D0E12]', 'text-[#8E94A5]');
      });
      if (btn) {
        btn.classList.remove('bg-[#0D0E12]', 'text-[#8E94A5]');
        btn.classList.add('bg-[#FF2A54]', 'text-white');
      }
      const box = document.getElementById('sub400-content');
      if (key === 'pro' && box) {
        box.innerHTML = `<div class="bg-[#0D0E12] border border-white/10 rounded-xl p-3 text-xs text-[#8E94A5]">اختر «⚡ 200 إعداد جاهز» لاستعراض وتصفية الإعدادات حسب السلاح ومعدل التحديث.</div>`;
      }
    }

    function hitTarget() {
      trainScore += 1;
      const el = document.getElementById('train-score');
      if (el) el.textContent = trainScore;
      showToast('إصابة موفقة 🎯');
    }

    function calcDpi() {
      const base = Math.max(200, Math.min(800, Number(document.getElementById('dpi-base').value) || 360));
      const rec = Math.min(600, Math.round(base * 1.33));
      document.getElementById('dpi-out').textContent = `DPI المقترح الآمن: ${rec}`;
    }

    function runSmartEngine() {
      const specs = document.getElementById('engine-specs');
      const res = document.getElementById('engine-result');
      const cores = navigator.hardwareConcurrency || 6;
      const w = window.screen.width || 390;
      if (specs) {
        specs.innerHTML = `
          <div class="bg-[#0D0E12] rounded-xl p-2.5"><span class="text-[#8E94A5] block">الأنوية</span><strong class="font-num text-white">${cores} Cores</strong></div>
          <div class="bg-[#0D0E12] rounded-xl p-2.5"><span class="text-[#8E94A5] block">العرض</span><strong class="font-num text-white">${w}px</strong></div>
          <div class="bg-[#0D0E12] rounded-xl p-2.5"><span class="text-[#8E94A5] block">الاستجابة</span><strong class="font-num text-emerald-400">ممتازة</strong></div>
        `;
      }
      const gen = Math.min(200, 184 + Math.min(14, cores * 2));
      currentPhone = { ...currentPhone, name: 'فحص الجهاز الذكي', sensi: { ...currentPhone.sensi, general: gen, redDot: gen - 6 } };
      renderCurrentPhone();
      if (res) res.textContent = `تم توليد حساسية عامة ${gen} ونقطة حمراء ${gen - 6}.`;
    }

    // تهيئة بطاقات الهواتف الأولية
    const cardsContainer = document.getElementById('phone-cards');
    if (cardsContainer) {
      cardsContainer.innerHTML = PHONES_DB.map((p, i) => `
        <button data-pid="${p.id}" onclick="selectPhone(PHONES_DB[${i}])" class="phone-pick-btn text-right bg-[#0D0E12] border ${i === 0 ? 'border-[#FF2A54] bg-[#FF2A54]/10' : 'border-white/10'} hover:border-[#FF2A54] rounded-xl p-3 transition">
          <div class="text-xs font-extrabold text-white truncate">${p.name}</div>
          <div class="text-[11px] text-[#8E94A5] truncate mt-0.5">${p.cpu}</div>
        </button>
      `).join('');
    }
    renderCurrentPhone();
    switchSub400('pro', document.querySelector('.sub400-btn'));
  </script>

  <!-- FF PRO SENSI — إضافة التحديث -->
  <script>
  (function () {
    if (window.__ffAddon) return; window.__ffAddon = 1;
    const $ = id => document.getElementById(id);
    const LS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d } catch (e) { return d } };
    const SET = LS('ff_settings', { haptic: true });
    const LINKS = {
      ch: 'https://whatsapp.com/channel/0029VbD4lmYKQuJFAxU2Lo0d',
      yt: 'https://youtube.com/@hamada2013el?si=WXClnxoRY5mBNpNq',
      tt: 'https://www.tiktok.com/@hamada2013el',
      wa: 'https://wa.me/qr/TZGY3Z6VS7HLA1'
    };
    const MSG = 'مرحبا! حمادا اريد الشكوى او اقتراح شيء. 🩵';
    const nz = s => s.toLowerCase().replace(/[\u064B-\u0652]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
    const six = p => `عام ${p.sensi.general} • نقطة ${p.sensi.redDot} • 2x ${p.sensi.scope2x} • 4x ${p.sensi.scope4x} • قناصة ${p.sensi.sniper} • نظرة حرة ${p.sensi.freeLook} • زر الضرب ${p.fireBtn}%`;

    /* 1) شاشة التحميل */
    const L = document.createElement('div');
    L.id = 'ff-loader';
    L.className = 'fixed inset-0 z-[100] bg-[#0D0E12] flex flex-col items-center justify-center gap-5 transition-opacity duration-500';
    L.innerHTML = `<div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF2A54] to-[#990F2B] flex items-center justify-center shadow-2xl shadow-[#FF2A54]/40 animate-pulse"><i class="fa-solid fa-crosshairs text-white text-3xl"></i></div>
    <h1 class="font-num text-2xl font-extrabold text-white tracking-wider">FF PRO <span class="text-[#FF2A54]">SENSI</span></h1>
    <div class="w-56 h-1.5 bg-[#252836] rounded-full overflow-hidden"><div id="ff-lbar" class="h-full bg-[#FF2A54] rounded-full" style="width:0;transition:width .2s"></div></div>
    <p id="ff-ltip" class="text-xs text-[#8E94A5] h-4"></p>`;
    document.body.appendChild(L);
    const tips = ['جاري تجهيز الحساسيات...', 'فحص مواصفات جهازك...', 'تحميل 200 إعداد احترافي...', 'جاهز للهيدشوت 🎯'];
    let pr = 0;
    const tm = setInterval(() => {
      pr = Math.min(100, pr + 4 + Math.random() * 5);
      $('ff-lbar').style.width = pr + '%';
      $('ff-ltip').innerText = tips[Math.min(3, Math.floor(pr / 26))];
      if (pr >= 100) { clearInterval(tm); setTimeout(() => { L.style.opacity = '0'; setTimeout(() => L.remove(), 500) }, 250) }
    }, 90);

    /* 2) تبويبان جديدان: فري فاير + تواصل */
    const CARD = 'bg-[#161821] border border-white/10 rounded-2xl p-4 space-y-3';
    const SEL = 'w-full bg-[#0D0E12] border border-white/10 rounded-xl p-2.5 text-sm text-white outline-none focus:border-[#FF2A54]';
    const NB = 'nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition';
    const navBtn = (t, i, l) => `<button onclick="switchTab('${t}', this)" data-tab="${t}" class="${NB}"><i class="fa-solid ${i} text-base mb-1"></i><span class="text-[11px] font-bold">${l}</span></button>`;
    document.querySelector('nav > div').insertAdjacentHTML('beforeend', navBtn('ffconnect', 'fa-gamepad', 'فري فاير') + navBtn('contact', 'fa-address-book', 'تواصل'));

    const lk = (h, i, c, l, s) => `<a href="${h}" target="_blank" rel="noopener" class="flex items-center gap-3 bg-[#0D0E12] border border-white/10 rounded-xl p-3 hover:bg-[#1D202C] transition"><span class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl ${c}"><i class="${i}"></i></span><div class="min-w-0"><div class="text-sm font-extrabold text-white">${l}</div><div class="text-[11px] text-[#8E94A5] truncate">${s}</div></div></a>`;

    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <section id="tab-ffconnect" class="tab-section hidden tab-content-anim space-y-4">
      <div class="${CARD}">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2"><i class="fa-solid fa-gamepad text-[#FF2A54]"></i>ربط التطبيق بفري فاير</h2>
        <p class="text-xs text-[#8E94A5]">الحساسية المعروضة الآن: <strong id="ff-phone" class="text-[#FFB800]"></strong>. اضغط الزر لنسخ الأرقام ثم تُفتح اللعبة لتضعها في الإعدادات.</p>
        <div id="ff-now" class="grid grid-cols-3 gap-2 text-center"></div>
        <select id="ff-ver" class="${SEL}"><option value="com.dts.freefireth">Free Fire</option><option value="com.dts.freefiremax">Free Fire MAX</option></select>
        <button onclick="ffOpen(true)" class="w-full bg-[#FF2A54] hover:bg-[#e02046] text-white text-sm font-bold py-2.5 rounded-xl transition">نسخ الأرقام وفتح فري فاير</button>
        <button onclick="ffOpen(false)" class="w-full bg-[#0D0E12] border border-white/10 text-white text-sm font-bold py-2.5 rounded-xl">فتح اللعبة فقط</button>
        <ol class="text-xs text-[#8E94A5] space-y-1.5 list-decimal pr-4 leading-relaxed">
          <li>داخل اللعبة: الإعدادات ⚙️ ثم تبويب «الحساسية».</li>
          <li>أدخل الأرقام بالترتيب: عام، نقطة حمراء، 2x، 4x، قناصة، نظرة حرة.</li>
          <li>حجم زر الضرب من «تخصيص الواجهة (Custom HUD)».</li>
          <li>جرّبها في وضع التدريب ثم عدّل ±5 حسب يدك.</li>
        </ol>
      </div>
      <div class="${CARD}">
        <h3 class="text-sm font-extrabold text-white flex items-center gap-2"><i class="fa-solid fa-gear text-[#FFB800]"></i>إعدادات التطبيق</h3>
        <label class="flex items-center justify-between text-xs text-white"><span>اهتزاز عند النسخ</span><input type="checkbox" id="st-hap" onchange="ffHap(this.checked)" class="w-5 h-5 accent-[#FF2A54]"></label>
        <div class="grid grid-cols-2 gap-2">
          <button onclick="ffExport()" class="bg-[#0D0E12] border border-white/10 text-white text-xs font-bold py-2.5 rounded-xl">نسخ المفضلة</button>
          <button onclick="ffReset()" class="bg-[#0D0E12] border border-red-500/40 text-red-400 text-xs font-bold py-2.5 rounded-xl">مسح بياناتي</button>
        </div>
      </div>
    </section>
    <section id="tab-contact" class="tab-section hidden tab-content-anim space-y-4">
      <div class="${CARD}">
        <h2 class="text-lg font-extrabold text-white flex items-center gap-2"><i class="fa-solid fa-address-book text-[#FFB800]"></i>تواصل معنا</h2>
        <p class="text-xs text-[#8E94A5]">كل قنوات حمادا في مكان واحد.</p>
        ${lk(LINKS.ch, 'fa-brands fa-whatsapp', 'text-emerald-400', 'قناة واتساب', 'الحساسيات والتحديثات الجديدة')}
        ${lk(LINKS.yt, 'fa-brands fa-youtube', 'text-red-500', 'يوتيوب', '@hamada2013el')}
        ${lk(LINKS.tt, 'fa-brands fa-tiktok', 'text-white', 'تيك توك', '@hamada2013el')}
        ${lk(LINKS.wa, 'fa-brands fa-whatsapp', 'text-[#FFB800]', 'راسل حمادا مباشرة', 'واتساب')}
      </div>
      <div class="${CARD}">
        <h3 class="text-sm font-extrabold text-white">شكوى أو اقتراح</h3>
        <select id="ct-type" class="${SEL}"><option>شكوى</option><option>اقتراح</option></select>
        <textarea id="ct-text" rows="3" placeholder="اكتب التفاصيل (اختياري)..." class="${SEL}"></textarea>
        <p class="text-[11px] text-[#8E94A5] bg-[#0D0E12] rounded-xl p-2.5">الرسالة الجاهزة: ${MSG}</p>
        <button onclick="sendWA()" class="w-full bg-emerald-500 hover:bg-emerald-600 text-[#0D0E12] text-sm font-extrabold py-2.5 rounded-xl transition"><i class="fa-brands fa-whatsapp"></i> إرسال عبر واتساب</button>
      </div>
    </section>`);
    $('st-hap').checked = !!SET.haptic;

    const ffNow = () => {
      const s = currentPhone.sensi;
      $('ff-phone').innerText = currentPhone.name;
      $('ff-now').innerHTML = [['عام', s.general], ['نقطة', s.redDot], ['2x', s.scope2x], ['4x', s.scope4x], ['قناصة', s.sniper], ['نظرة حرة', s.freeLook]]
        .map(x => `<div class="bg-[#0D0E12] rounded-xl p-2"><span class="text-[10px] text-[#8E94A5] block">${x[0]}</span><strong class="font-num text-lg text-white">${x[1]}</strong></div>`).join('');
    };
    window.ffOpen = c => {
      if (c) copyAllSensitivity();
      const p = $('ff-ver').value, pl = 'https://play.google.com/store/apps/details?id=' + p;
      setTimeout(() => {
        if (/Android/i.test(navigator.userAgent)) location.href = `intent://#Intent;package=${p};S.browser_fallback_url=${encodeURIComponent(pl)};end`;
        else showToast('افتح فري فاير يدوياً من هاتفك');
      }, c ? 600 : 0);
    };
    window.ffHap = v => { SET.haptic = v; localStorage.setItem('ff_settings', JSON.stringify(SET)) };
    window.ffExport = () => copyTextValue(favorites.length ? favorites.map(f => `${f.name}: ${Object.values(f.sensi).join('/')}`).join('\n') : 'لا توجد مفضلة', 'المفضلة');
    window.ffReset = () => {
      $('ff-dialog-title').textContent = 'مسح البيانات';
      $('ff-dialog-msg').textContent = 'مسح المفضلة والملف الشخصي والإعدادات؟';
      $('ff-dialog-ok').onclick = () => { closeModal('ff-dialog'); localStorage.clear(); location.reload(); };
      openModal('ff-dialog');
    };
    window.sendWA = () => {
      const x = $('ct-text').value.trim(), m = MSG + '\n\nالنوع: ' + $('ct-type').value + (x ? '\n' + x : '');
      copyTextValue(m, 'الرسالة');
      setTimeout(() => { location.href = LINKS.wa + '?text=' + encodeURIComponent(m) }, 500);
    };

    /* 3) ربط الدوال الأصلية: تحديث تبويب فري فاير، اهتزاز، مشاركة حقيقية، حفظ اللهجة */
    const _st = window.switchTab;
    window.switchTab = (t, b) => { _st(t, b); if (t === 'ffconnect') ffNow() };
    const _cp = window.copyTextValue;
    window.copyTextValue = (v, l) => { _cp(v, l); if (SET.haptic && navigator.vibrate) navigator.vibrate(30) };
    const _sh = window.shareCurrentSensitivity;
    window.shareCurrentSensitivity = () => {
      if (navigator.share) navigator.share({ title: 'FF PRO SENSI', text: `🔥 حساسيات ${currentPhone.name}\n${six(currentPhone)}` }).catch(() => {});
      else _sh();
    };
    const _cd = window.changeDialect;
    window.changeDialect = l => { localStorage.setItem('ff_dialect', l); _cd(l) };
    const sd = localStorage.getItem('ff_dialect');
    if (sd && sd !== 'ar' && DIALECTS[sd]) {
      const t = window.showToast; window.showToast = () => {};
      $('dialect-select').value = sd; _cd(sd); window.showToast = t;
    }

    /* 4) 200 إعداد جاهز (10 أسلحة × 4 فئات × 5 معدلات شاشة) */
    const ST = [['M1887 شوتغن', 199, 193, 180, 170, 100, 145, 44], ['Desert Eagle', 196, 190, 178, 168, 98, 140, 42], ['MP40 رش', 192, 187, 182, 173, 104, 135, 51], ['UMP ثبات', 190, 185, 180, 171, 105, 134, 50], ['AK / M4 هجوم', 188, 183, 176, 167, 106, 132, 48], ['Woodpecker / AC80', 189, 184, 175, 166, 110, 130, 46], ['AWM قناص', 186, 178, 168, 160, 125, 128, 45], ['SPAS سريع', 198, 192, 181, 171, 100, 146, 44], ['Clash Squad', 193, 186, 177, 167, 106, 136, 47], ['Rush قريب', 197, 191, 183, 173, 102, 142, 49]];
    const TI = [['اقتصادي', 4, 4, 440], ['متوسط', 2, 2, 490], ['قوي', 0, 0, 530], ['ألعاب', -3, -2, 570]];
    const HZ = [[60, 3], [90, 1], [120, 0], [144, -2], [165, -3]];
    const OPT = [];
    ST.forEach(s => TI.forEach(t => HZ.forEach(h => {
      const c = v => Math.max(60, Math.min(200, v + t[1] + h[1]));
      OPT.push({ name: `${s[0]} • ${t[0]} • ${h[0]}Hz`, tag: s[0], desc: s[0], sensi: { general: c(s[1]), redDot: c(s[2]), scope2x: c(s[3]), scope4x: c(s[4]), sniper: c(s[5]), freeLook: c(s[6]) }, fireBtn: s[7] + t[2], dpi: t[3] });
    })));
    const row = (o, i) => `<button onclick="ffApply(${i})" class="w-full text-right bg-[#0D0E12] border border-white/5 hover:border-[#FF2A54] rounded-xl p-3 flex items-center justify-between gap-2"><div><div class="text-xs font-extrabold text-white">${o.name}</div><div class="text-[11px] text-[#8E94A5] font-num">${o.sensi.general} / ${o.sensi.redDot} / ${o.sensi.scope2x} / ${o.sensi.scope4x} • زر ${o.fireBtn}%</div></div><span class="text-[10px] bg-[#FFB800]/15 text-[#FFB800] px-2 py-0.5 rounded-md font-bold shrink-0">عرض</span></button>`;
    window.ffApply = i => applyPresetObj(OPT[i]);
    window.ffFilter = () => {
      const q = nz($('o2-q').value), s = $('o2-s').value;
      $('o2-list').innerHTML = OPT.map((o, i) => [o, i]).filter(x => (!q || nz(x[0].name).includes(q)) && (!s || x[0].tag === s)).map(x => row(x[0], x[1])).join('') || '<p class="text-xs text-[#8E94A5] text-center py-4">لا توجد نتائج</p>';
    };
    const _sw = window.switchSub400;
    window.switchSub400 = (k, b) => {
      _sw(k, b);
      if (k !== 'gen200') return;
      $('sub400-content').innerHTML = `<div class="flex gap-2"><input id="o2-q" oninput="ffFilter()" placeholder="ابحث: قوي، 120Hz، M1887..." class="flex-1 min-w-0 bg-[#0D0E12] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-[#FF2A54]"><select id="o2-s" onchange="ffFilter()" class="bg-[#0D0E12] border border-white/10 rounded-xl px-2 text-xs text-white"><option value="">كل الأسلحة</option>${ST.map(s => `<option>${s[0]}</option>`).join('')}</select></div><div id="o2-list" class="space-y-2 max-h-[420px] overflow-y-auto"></div>`;
      ffFilter();
    };
    const sr = document.querySelector('.sub400-btn');
    if (sr) sr.parentElement.insertAdjacentHTML('beforeend', `<button onclick="switchSub400('gen200', this)" class="sub400-btn bg-[#0D0E12] text-[#8E94A5] hover:text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/5 shrink-0">⚡ 200 إعداد جاهز</button>`);

    /* 5) المساعد الذكي (يعمل أوفلاين بقواعد جاهزة) */
    const go = (t, l) => `<button onclick="aiGo('${t}')" class="mt-2 block bg-[#FF2A54] text-white font-bold px-3 py-1.5 rounded-lg">${l}</button>`;
    const KB = [
      [['مرحبا', 'هلا', 'سلام', 'اهلا', 'صباح', 'مساء'], () => 'أهلاً بك! اسألني عن الحساسية أو اللاج أو السخونة أو الهيدشوت أو الـ DPI.'],
      [['يرتفع', 'فوق', 'يلتصق', 'صدر', 'ينزل'], () => 'يتجاوز الرأس؟ قلّل «العام» 5–8 أو كبّر زر الضرب 3%. يلتصق بالصدر؟ ارفع «العام» و«النقطة الحمراء» وانزع واقي الشاشة السميك.'],
      [['هيدشوت', 'راس', 'سحب', 'drag', 'وان شوت', 'اون شوت'], () => 'ضع المؤشر عند صدر الخصم، اسحب زر الضرب للأعلى بسرعة، وارفع إصبعك فور خروج الطلقة.'],
      [['لاج', 'تقطيع', 'فريم', 'fps', 'جرافيكس', 'بطيء', 'تهنيج', 'هنج'], () => 'للاج: الجرافيكس «ناعم/قياسي»، الإطارات «عالي»، أوقف الظلال، أغلق تطبيقات الخلفية، واترك 3GB فارغة.' + go('graphics', 'فتح الجرافيكس')],
      [['سخونه', 'حراره', 'بطاريه', 'يسخن', 'تسخين'], () => 'للحرارة: خفّض الإطارات للمتوسط، قلّل السطوع، أزل الغطاء أثناء اللعب، ولا تلعب أثناء الشحن.'],
      [['dpi', 'دي بي اي', 'كثافه'], () => 'لا تتجاوز 600 dp، وسجّل قيمتك الحالية لتعيدها عند أي مشكلة.' + go('tools', 'حاسبة DPI')],
      [['قناص', 'awm', 'سنايبر', 'm82'], () => `للقناصة جرّب ${currentPhone.sensi.sniper}، وإن كان الإيم سريعاً اخفضه 5.`],
      [['اصابع', 'hud', 'واجهه', 'زر'], () => `حجم زر الضرب المقترح لجهازك: ${currentPhone.fireBtn}%. جرّب 3 أصابع للتبديل السريع و4 للقناصة.`],
      [['فري فاير', 'لعبه', 'افتح', 'ربط'], () => 'من صفحة الربط تنسخ الأرقام وتفتح اللعبة.' + go('ffconnect', 'ربط فري فاير')],
      [['تواصل', 'شكوي', 'اقتراح', 'مشكله', 'واتس', 'يوتيوب', 'تيك'], () => 'للشكوى أو الاقتراح راسل حمادا من صفحة التواصل، والرسالة جاهزة.' + go('contact', 'تواصل معنا')],
      [['حساسي', 'sensi', 'ارقام', 'اعدادات'], () => `حساسية «${currentPhone.name}»:<br>${six(currentPhone)}${go('phones', 'عرض الأشرطة')}`]
    ];
    const chips = ['حساسيتي', 'لاج وفريمات', 'سخونة الجهاز', 'هيدشوت', 'تواصل'].map(c => `<button onclick="aiAsk('${c}')" class="shrink-0 bg-[#0D0E12] border border-white/10 text-[#FFB800] font-bold px-3 py-1.5 rounded-full">${c}</button>`).join('');
    document.body.insertAdjacentHTML('beforeend', `
    <button onclick="openAI()" aria-label="المساعد الذكي" class="fixed bottom-24 left-4 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF2A54] text-white text-xl shadow-xl shadow-[#FF2A54]/40 active:scale-95 transition"><i class="fa-solid fa-robot"></i></button>
    <div id="ai-modal" class="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm hidden items-end justify-center">
      <div class="bg-[#161821] border border-white/15 rounded-t-3xl w-full max-w-md h-[78vh] flex flex-col">
        <div class="flex items-center justify-between p-4 border-b border-white/10"><h3 class="text-sm font-extrabold text-white flex items-center gap-2"><i class="fa-solid fa-robot text-[#FFB800]"></i>مساعد FF PRO الذكي</h3><button onclick="closeModal('ai-modal')" class="text-[#8E94A5] hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button></div>
        <div id="ai-log" class="flex-1 overflow-y-auto p-3 flex flex-col gap-2 text-xs"></div>
        <div class="flex gap-1.5 overflow-x-auto no-scrollbar px-3 pb-2 text-xs">${chips}</div>
        <div class="p-3 border-t border-white/10 flex gap-2"><input id="ai-in" onkeydown="if(event.key==='Enter')aiAsk()" placeholder="اسألني عن الحساسية..." class="flex-1 min-w-0 bg-[#0D0E12] border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-[#FF2A54]"><button onclick="aiAsk()" class="bg-[#FF2A54] text-white px-4 rounded-xl"><i class="fa-solid fa-paper-plane"></i></button></div>
      </div>
    </div>`);
    const bub = (h, u) => {
      const d = document.createElement('div');
      d.className = 'max-w-[85%] px-3 py-2 rounded-2xl leading-relaxed ' + (u ? 'self-start bg-[#FF2A54] text-white' : 'self-end bg-[#0D0E12] border border-white/10 text-gray-200');
      d.innerHTML = h; $('ai-log').appendChild(d); $('ai-log').scrollTop = $('ai-log').scrollHeight;
    };
    window.aiAsk = t => {
      t = (t || $('ai-in').value).trim(); if (!t) return;
      $('ai-in').value = '';
      bub(t.replace(/</g, '&lt;'), 1);
      const q = nz(t), k = KB.find(x => x[0].some(w => q.includes(w)));
      setTimeout(() => bub(k ? k[1]() : 'لم أفهم تماماً 🤔 جرّب: حساسيتي، لاج، سخونة، هيدشوت، DPI أو تواصل.'), 350);
    };
    window.openAI = () => { openModal('ai-modal'); if (!$('ai-log').children.length) bub('أهلاً! أنا مساعد FF PRO 🤖 اسألني عن الحساسية أو اللاج أو الهيدشوت.') };
    window.aiGo = t => { closeModal('ai-modal'); switchTab(t) };
  })();
  </script>

  <!-- FF PRO SENSI v2.1 — يحوّل التطبيق إلى موقع متكامل -->
  <script>
  (function () {
    if (window.__ffSite) return; window.__ffSite = 1;
    const $ = id => document.getElementById(id);
    const nz = s => s.toLowerCase().replace(/[\u064B-\u0652]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
    const U = { ch: 'https://whatsapp.com/channel/0029VbD4lmYKQuJFAxU2Lo0d', yt: 'https://youtube.com/@hamada2013el?si=WXClnxoRY5mBNpNq', tt: 'https://www.tiktok.com/@hamada2013el', wa: 'https://wa.me/qr/TZGY3Z6VS7HLA1' };
    const C = 'bg-[#161821] border border-white/10 rounded-2xl p-4';
    const B1 = 'bg-[#FF2A54] hover:bg-[#e02046] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition';
    const B2 = 'bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition';
    const TABS = [['home', 'الرئيسية'], ['phones', 'الهواتف'], ['engine', 'المحرك'], ['options400', '400 خيار'], ['training', 'التدريب'], ['graphics', 'الجرافيكس'], ['tools', 'الأدوات'], ['guides', 'الأدلة'], ['ffconnect', 'فري فاير'], ['contact', 'تواصل'], ['safety', 'الأمان']];
    const F = [['fa-mobile-screen', 'حساسية لكل هاتف', 'اختر جهازك واحصل على 6 أرقام جاهزة', 'phones'], ['fa-microchip', 'فحص ذكي للجهاز', 'يقرأ شاشتك ومعالجك ويولّد توليفة مخصصة', 'engine'], ['fa-layer-group', '200 إعداد جاهز', 'حسب السلاح والفئة ومعدل الشاشة', 'options400'], ['fa-gauge-high', 'جرافيكس وفريمات', 'إعدادات تقلل اللاج والسخونة', 'graphics'], ['fa-bullseye', 'تدريب وأدوات', 'اختبار اللمس والبنق وحاسبة DPI', 'training'], ['fa-gamepad', 'ربط بفري فاير', 'انسخ الأرقام وافتح اللعبة بضغطة', 'ffconnect']];
    const ART = [
      ['كيف تضبط الحساسية خطوة بخطوة', 'ابدأ بأرقام هاتفك الجاهزة ثم جرّب في وضع التدريب. إن تجاوز الإيم الرأس قلّل «العام» 5، وإن كان بطيئاً ارفعه 5. غيّر رقماً واحداً في كل مرة.'],
      ['رفع الفريمات بدون لاج', 'اختر جرافيكس ناعم أو قياسي، فعّل الإطارات العالية، أوقف الظلال، وأغلق تطبيقات الخلفية. واترك مساحة تخزين كافية.'],
      ['تدريب الهيدشوت في 10 دقائق', 'ابدأ بالمسافات القصيرة ثم الأبعد. ركّز على سحب أملس للأعلى، وكرر 20 محاولة وقارن نسبة الرأس بين الجولات.'],
      ['الأصابع: 2 أم 3 أم 4؟', 'ابدأ بـ3 أصابع للتوازن. انتقل إلى 4 عندما تتقن القفز والتبديل أثناء السحب. اختر الأسهل لك لا الأشهر.'],
      ['حل سخونة الهاتف أثناء اللعب', 'خفّض الإطارات والسطوع، أزل الغطاء، ولا تلعب أثناء الشحن السريع. أعد تشغيل الهاتف أسبوعياً.'],
      ['Free Fire أم MAX؟', 'MAX يعطي صورة أوضح لكنه أثقل على الجهاز، والنسخة العادية أنسب للهواتف الضعيفة.']
    ];
    const FAQ = [['هل يغيّر التطبيق ملفات اللعبة؟', 'لا. يعرض لك الأرقام فقط وتضعها أنت يدوياً داخل إعدادات اللعبة.'], ['هل الأرقام مضمونة؟', 'هي نقطة بداية تقديرية. عدّل ±5 حسب يدك وجهازك حتى يثبت الإيم.'], ['هل يعمل بدون إنترنت؟', 'الحسابات والبيانات محلية بلا سيرفرات، أما الخطوط والأيقونات فتُحمَّل من الإنترنت.'], ['كيف أبلغ عن مشكلة؟', 'من قسم «تواصل» تُرسل رسالة جاهزة إلى حمادا على واتساب.']];
    const UPD = [['2.1', 'موقع متكامل: رئيسية، أدلة، بحث شامل، روابط مباشرة لكل قسم.'], ['2.0', 'شاشة تحميل، ربط فري فاير، 200 إعداد، مساعد ذكي، تواصل.'], ['1.0', 'قاعدة الهواتف، المحرك الذكي، التدريب والأدوات.']];

    /* SEO / مشاركة */
    const meta = (n, c, p) => { const m = document.createElement('meta'); m.setAttribute(p ? 'property' : 'name', n); m.content = c; document.head.appendChild(m) };
    meta('description', 'حساسيات وجرافيكس فري فاير لكل هاتف: 200 إعداد جاهز، فحص ذكي للجهاز، أدوات تدريب ومساعد ذكي.');
    meta('theme-color', '#0D0E12'); meta('og:title', 'FF PRO SENSI', 1); meta('og:description', 'حساسيات وجرافيكس فري فاير لكل هاتف', 1);

    /* الصفحة الرئيسية + الأدلة */
    const stat = [[PHONES_DB.length + '+', 'هاتف مدعوم'], ['200', 'إعداد جاهز'], ['5', 'لهجات ولغات'], [ART.length, 'دليل ونصيحة']];
    const lnk = (h, i, l) => `<a href="${h}" target="_blank" rel="noopener" class="${B2}"><i class="${i}"></i> ${l}</a>`;
    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <section id="tab-home" class="tab-section hidden tab-content-anim space-y-6">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-bl from-[#2a0f1b] via-[#161821] to-[#0D0E12] p-6 sm:p-10">
        <div class="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#FF2A54]/20 blur-3xl"></div>
        <div class="relative space-y-4 max-w-2xl">
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight">اضبط فري فاير على جهازك في دقيقة</h2>
          <p class="text-sm sm:text-base text-gray-300 leading-relaxed">حساسيات وجرافيكس وأدوات تدريب ومساعد ذكي، مع تواصل مباشر مع حمادا.</p>
          <div class="flex flex-wrap gap-2">
            <button onclick="switchTab('phones')" class="${B1}">اختر هاتفك</button>
            <button onclick="switchTab('engine')" class="${B2}">افحص جهازي</button>
            <button onclick="ffShare()" class="${B2}"><i class="fa-solid fa-share-nodes"></i> مشاركة</button>
            <button id="ff-inst" onclick="ffInstall()" class="hidden ${B2}">تثبيت</button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${stat.map(s => `<div class="${C} text-center"><div class="font-num text-3xl font-extrabold text-[#FFB800]">${s[0]}</div><div class="text-xs text-[#8E94A5] mt-1">${s[1]}</div></div>`).join('')}</div>
      <div><h3 class="text-lg font-extrabold text-white mb-3">كل ما تحتاجه في مكان واحد</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${F.map(f => `<button onclick="switchTab('${f[3]}')" class="${C} text-right hover:border-[#FF2A54]/60 transition space-y-1.5"><i class="fa-solid ${f[0]} text-[#FF2A54] text-xl"></i><div class="text-sm font-extrabold text-white">${f[1]}</div><div class="text-xs text-[#8E94A5]">${f[2]}</div></button>`).join('')}</div></div>
      <div class="${C} space-y-3"><h3 class="text-lg font-extrabold text-white">كيف يعمل؟</h3>${['اختر هاتفك أو افحص جهازك.', 'انسخ الأرقام بضغطة واحدة.', 'افتح فري فاير وضعها في الإعدادات.'].map((t, i) => `<div class="flex items-center gap-3"><span class="w-7 h-7 rounded-lg bg-[#FF2A54]/20 text-[#FF2A54] font-num font-bold flex items-center justify-center shrink-0">${i + 1}</span><p class="text-sm text-gray-200">${t}</p></div>`).join('')}</div>
      <div class="${C} space-y-3"><h3 class="text-lg font-extrabold text-white">اقتراحات سريعة</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${PHONES_DB.slice(0, 4).map(p => `<button onclick="ffPick(${p.id})" class="bg-[#0D0E12] border border-white/5 hover:border-[#FF2A54] rounded-xl p-3 text-right"><div class="text-xs font-extrabold text-white truncate">${p.name}</div><div class="text-[11px] text-[#8E94A5] truncate">${p.cpu}</div></button>`).join('')}</div></div>
      <div class="${C} space-y-3"><h3 class="text-lg font-extrabold text-white">آخر التحديثات</h3>${UPD.map(u => `<div class="flex gap-3"><span class="font-num text-[#FFB800] font-bold w-8 shrink-0">${u[0]}</span><p class="text-xs text-gray-300 leading-relaxed">${u[1]}</p></div>`).join('')}</div>
      <div class="space-y-2"><h3 class="text-lg font-extrabold text-white">أسئلة شائعة</h3>${FAQ.map(q => `<details class="${C} group"><summary class="cursor-pointer list-none flex items-center justify-between text-sm font-bold text-white">${q[0]}<i class="fa-solid fa-chevron-down text-xs text-[#8E94A5] group-open:rotate-180 transition"></i></summary><p class="text-xs text-[#8E94A5] mt-2 leading-relaxed">${q[1]}</p></details>`).join('')}</div>
      <div class="${C} space-y-3 text-center"><h3 class="text-lg font-extrabold text-white">انضم لمجتمع حمادا</h3><p class="text-xs text-[#8E94A5]">تابع الحساسيات الجديدة وأرسل شكواك أو اقتراحك.</p>
        <div class="flex flex-wrap justify-center gap-2">${lnk(U.ch, 'fa-brands fa-whatsapp text-emerald-400', 'القناة')}${lnk(U.yt, 'fa-brands fa-youtube text-red-500', 'يوتيوب')}${lnk(U.tt, 'fa-brands fa-tiktok', 'تيك توك')}<button onclick="switchTab('contact')" class="${B1}">شكوى أو اقتراح</button></div></div>
    </section>
    <section id="tab-guides" class="tab-section hidden tab-content-anim space-y-3">
      <h2 class="text-lg font-extrabold text-white flex items-center gap-2"><i class="fa-solid fa-book-open text-[#FFB800]"></i>الأدلة والنصائح</h2>
      ${ART.map((a, i) => `<details id="art-${i}" class="${C} group"><summary class="cursor-pointer list-none flex items-center justify-between text-sm font-extrabold text-white">${a[0]}<i class="fa-solid fa-chevron-down text-xs text-[#8E94A5] group-open:rotate-180 transition"></i></summary><p class="text-xs text-[#8E94A5] mt-2 leading-relaxed">${a[1]}</p></details>`).join('')}
    </section>`);

    /* التذييل */
    document.querySelector('main').insertAdjacentHTML('afterend', `
    <footer class="max-w-5xl mx-auto px-4 pt-8 pb-4 mt-6 border-t border-white/5 text-xs text-[#8E94A5] space-y-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="col-span-2 sm:col-span-1 space-y-1.5"><div class="font-num text-base font-extrabold text-white">FF PRO <span class="text-[#FF2A54]">SENSI</span></div><p>أداة مجانية لضبط حساسية وجرافيكس فري فاير.</p></div>
        <div class="space-y-1.5"><div class="font-bold text-white">الأقسام</div>${['phones', 'guides', 'tools', 'ffconnect'].map(k => `<a href="#${k}" class="block hover:text-white">${TABS.find(t => t[0] === k)[1]}</a>`).join('')}</div>
        <div class="space-y-1.5"><div class="font-bold text-white">تابعنا</div><a href="${U.ch}" target="_blank" rel="noopener" class="block hover:text-white">قناة واتساب</a><a href="${U.yt}" target="_blank" rel="noopener" class="block hover:text-white">يوتيوب</a><a href="${U.tt}" target="_blank" rel="noopener" class="block hover:text-white">تيك توك</a></div>
      </div>
      <p class="leading-relaxed">Free Fire علامة تجارية مملوكة لشركة Garena، وهذا الموقع غير رسمي وغير تابع لها. الأرقام تقديرية وتختلف حسب جهازك ويدك.</p>
      <p>© 2026 FF PRO SENSI — حمادا</p>
    </footer>`);

    /* قائمة علوية للشاشات الكبيرة + زر البحث + شريط التقدم */
    const nb = (t, i, l) => `<button onclick="switchTab('${t}', this)" data-tab="${t}" class="nav-item flex-1 min-w-[68px] flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#8E94A5] hover:text-white transition"><i class="fa-solid ${i} text-base mb-1"></i><span class="text-[11px] font-bold">${l}</span></button>`;
    document.querySelector('nav > div').insertAdjacentHTML('afterbegin', nb('home', 'fa-house', 'الرئيسية'));
    const sf = document.querySelector('.nav-item[data-tab="safety"]');
    if (sf) sf.insertAdjacentHTML('beforebegin', nb('guides', 'fa-book-open', 'الأدلة'));
    document.querySelector('body > nav').classList.add('md:hidden');
    document.querySelector('header').insertAdjacentHTML('beforeend', `<div class="hidden md:block max-w-5xl mx-auto pt-2"><div id="ff-top" class="flex flex-wrap gap-1">${TABS.map(t => `<button data-t="${t[0]}" onclick="switchTab('${t[0]}')" class="px-3 py-1.5 rounded-lg text-xs font-bold text-[#8E94A5] hover:text-white transition">${t[1]}</button>`).join('')}</div></div>`);
    $('dialect-select').closest('.flex').insertAdjacentHTML('afterbegin', `<button onclick="openSearch()" aria-label="بحث" class="bg-[#161821] hover:bg-[#1D202C] border border-white/10 w-9 h-9 rounded-xl text-[#8E94A5]"><i class="fa-solid fa-magnifying-glass"></i></button>`);
    document.body.insertAdjacentHTML('beforeend', `
    <div id="ff-prog" class="fixed top-0 right-0 h-0.5 bg-[#FF2A54] z-[70]" style="width:0"></div>
    <button id="ff-up" onclick="scrollTo({top:0,behavior:'smooth'})" aria-label="للأعلى" class="hidden fixed bottom-24 right-4 z-40 w-11 h-11 rounded-full bg-[#161821] border border-white/15 text-white"><i class="fa-solid fa-chevron-up"></i></button>
    <div id="sr-modal" class="fixed inset-0 z-[65] bg-black/75 backdrop-blur-sm hidden items-start justify-center p-4 pt-16">
      <div class="bg-[#161821] border border-white/15 rounded-2xl w-full max-w-md p-3 space-y-2">
        <div class="flex gap-2"><input id="sr-in" oninput="ffSearch()" placeholder="ابحث عن هاتف أو قسم أو دليل..." class="flex-1 min-w-0 bg-[#0D0E12] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-[#FF2A54]"><button onclick="closeModal('sr-modal')" class="text-[#8E94A5] px-2"><i class="fa-solid fa-xmark"></i></button></div>
        <div id="sr-list" class="space-y-1 max-h-80 overflow-y-auto"></div>
      </div>
    </div>`);
    addEventListener('scroll', () => { const h = document.documentElement; $('ff-prog').style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100 + '%'; $('ff-up').classList.toggle('hidden', h.scrollTop < 400) }, { passive: true });

    /* البحث الشامل */
    window.openSearch = () => { openModal('sr-modal'); $('sr-in').value = ''; ffSearch(); setTimeout(() => $('sr-in').focus(), 50) };
    window.ffSearch = () => {
      const q = nz($('sr-in').value);
      const all = [
        ...TABS.map(t => ({ t: t[1], s: 'قسم', f: () => switchTab(t[0]) })),
        ...PHONES_DB.map(p => ({ t: p.name, s: p.cpu, f: () => { selectPhone(p); switchTab('phones') } })),
        ...ART.map((a, i) => ({ t: a[0], s: 'دليل', f: () => { switchTab('guides'); $('art-' + i).open = true } }))
      ];
      window.__sr = (q ? all.filter(x => nz(x.t + ' ' + x.s).includes(q)) : all).slice(0, 8);
      $('sr-list').innerHTML = window.__sr.map((x, i) => `<button onclick="srGo(${i})" class="w-full text-right bg-[#0D0E12] hover:bg-[#1D202C] rounded-xl p-2.5"><div class="text-xs font-bold text-white truncate">${x.t}</div><div class="text-[11px] text-[#8E94A5] truncate">${x.s}</div></button>`).join('') || '<p class="text-xs text-[#8E94A5] text-center py-4">لا توجد نتائج</p>';
    };
    window.srGo = i => { closeModal('sr-modal'); window.__sr[i].f() };
    addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch() } if (e.key === 'Escape') closeModal('sr-modal') });

    /* مشاركة / تثبيت / اختيار هاتف */
    let dp;
    addEventListener('beforeinstallprompt', e => { e.preventDefault(); dp = e; $('ff-inst').classList.remove('hidden') });
    window.ffInstall = () => { if (dp) dp.prompt() };
    window.ffShare = () => { const d = { title: 'FF PRO SENSI', text: 'حساسيات وجرافيكس فري فاير لكل هاتف', url: location.href }; if (navigator.share) navigator.share(d).catch(() => {}); else copyTextValue(location.href, 'رابط الموقع') };
    window.ffPick = id => { selectPhone(PHONES_DB.find(p => p.id === id)); switchTab('phones') };

    /* التوجيه بالروابط (#phones ...) وعنوان الصفحة */
    let cur = '';
    const _s = window.switchTab;
    window.switchTab = (t, b) => {
      cur = t; _s(t, b);
      document.querySelector('main > section:first-child').classList.toggle('hidden', t === 'home');
      document.querySelectorAll('#ff-top button').forEach(x => { const a = x.dataset.t === t; x.classList.toggle('text-[#FF2A54]', a); x.classList.toggle('bg-[#FF2A54]/10', a); x.classList.toggle('text-[#8E94A5]', !a) });
      const tl = TABS.find(x => x[0] === t); document.title = (tl ? tl[1] + ' | ' : '') + 'FF PRO SENSI';
      if (location.hash.slice(1) !== t) location.hash = t;
      scrollTo(0, 0);
      const ab = document.querySelector('.nav-item.active-nav'); if (ab && ab.scrollIntoView) ab.scrollIntoView({ inline: 'center', block: 'nearest' });
    };
    addEventListener('hashchange', () => { const h = location.hash.slice(1); if (h && h !== cur && $('tab-' + h)) switchTab(h) });
    const h0 = location.hash.slice(1);
    switchTab($('tab-' + h0) ? h0 : 'home');
  })();
  </script>
</body>
</html>
```
