/* FF PRO SENSI — إضافة التحديث. الصق هذا الملف كاملاً داخل <script> ... </script> قبل </body> مباشرة */
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
  window.ffReset = () => { if (confirm('مسح المفضلة والملف الشخصي والإعدادات؟')) { localStorage.clear(); location.reload() } };
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
