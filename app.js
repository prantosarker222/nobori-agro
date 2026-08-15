/* ============================================================
   NOBORI AGRO — Application Engine
   ============================================================ */

'use strict';

/* ---- Product Catalog ---- */
const PRODUCTS = [
  // Superfoods
  { id: 1,  name: 'Moringa Leaf Powder', nameBn: 'মরিঙ্গা পাতা পাউডার', cat: 'superfood', img: 'moringa.jpg', price: 320, unit: '100g', badge: 'Best Seller', badgeClass: 'badge-gold', desc: 'Triple-micronized organic moringa from Sylhet gardens. 46+ antioxidants, 18 amino acids, 7× vitamin C of oranges.' },
  { id: 2,  name: 'Dried Hibiscus Petals', nameBn: 'রক্ত জবার পাপড়ি', cat: 'superfood', img: 'hibiscus.jpg', price: 280, unit: '80g', badge: 'New Batch', badgeClass: '', desc: 'Sun-crystallized under UV-filter glass. Deep anthocyanins for heart health and vibrant herbal drinks.' },
  { id: 3,  name: 'Organic Turmeric Powder', nameBn: 'অর্গানিক হলুদ পাউডার', cat: 'spice', img: 'turmeric.jpg', price: 180, unit: '150g', badge: 'Lab Verified', badgeClass: '', desc: '4.8% curcumin content — nearly 2× the market standard. Solar-dried at 38°C, zero sulphur dioxide.' },
  { id: 4,  name: 'Spirulina Powder', nameBn: 'স্পিরুলিনা পাউডার', cat: 'superfood', img: 'moringa.jpg', price: 480, unit: '60g', badge: 'Premium', badgeClass: 'badge-gold', desc: 'High-protein blue-green microalgae. 60%+ protein content, B12 rich, iron-dense superfood.' },
  { id: 5,  name: 'Dried Neem Leaf', nameBn: 'নিম পাতা গুঁড়া', cat: 'herbal', img: 'moringa.jpg', price: 140, unit: '100g', badge: null, badgeClass: '', desc: 'Powerful antimicrobial and detox herb. Cold-processed to retain azadirachtin and polyphenols.' },
  { id: 6,  name: 'Holy Basil (Tulsi) Powder', nameBn: 'তুলসী পাতা পাউডার', cat: 'herbal', img: 'hibiscus.jpg', price: 160, unit: '80g', badge: null, badgeClass: '', desc: 'Adaptogenic stress-reliever with potent eugenol content. Dried from Bandarban forest groves.' },
  { id: 7,  name: 'Wild Turmeric (Amba Haldi)', nameBn: 'আম হলুদ পাউডার', cat: 'spice', img: 'turmeric.jpg', price: 240, unit: '100g', badge: 'Rare', badgeClass: '', desc: 'Curcuma aromatica — rare forest variety with 8% curcuminoids and a distinctly aromatic profile.' },
  { id: 8,  name: 'Sun-Dried Dragon Fruit', nameBn: 'সৌর-শুকনো ড্রাগন ফ্রুট', cat: 'dried-fruit', img: 'hibiscus.jpg', price: 560, unit: '100g', badge: 'Premium', badgeClass: 'badge-gold', desc: 'Vivid pink pitaya slices, solar-dehydrated to lock in betacyanins and antioxidants without added sugar.' },
  { id: 9,  name: 'Amla (Gooseberry) Powder', nameBn: 'আমলকী পাউডার', cat: 'superfood', img: 'moringa.jpg', price: 200, unit: '100g', badge: null, badgeClass: '', desc: 'One of nature\'s densest vitamin C sources. Tart, tangy, and remarkably bioavailable in solar-dried form.' },
  { id: 10, name: 'Black Seed (Nigella) Whole', nameBn: 'কালোজিরা', cat: 'herbal', img: 'turmeric.jpg', price: 210, unit: '150g', badge: null, badgeClass: '', desc: 'Pristine Nigella sativa seeds with thymoquinone levels verified by third-party labs.' },
  { id: 11, name: 'Ginger Powder (Sylheti)', nameBn: 'সিলেটি আদা পাউডার', cat: 'spice', img: 'turmeric.jpg', price: 160, unit: '150g', badge: 'Bestseller', badgeClass: 'badge-gold', desc: 'Aromatic hill ginger from Sylhet — higher gingerol content, zero fillers or starch.' },
  { id: 12, name: 'Dried Jackfruit Chips', nameBn: 'সৌর-শুকনো কাঁঠাল চিপস', cat: 'dried-fruit', img: 'hibiscus.jpg', price: 260, unit: '120g', badge: null, badgeClass: '', desc: 'Naturally sweet jackfruit dehydrated at 38°C — not fried, no sugar coating. Pure tropical crunch.' },
];

/* ---- State ---- */
let cart = [];
let currentCat = 'all';
let isBn = false;

/* ---- Translations ---- */
const T = {
  en: {
    addToCart: 'Add to Cart',
    remove: 'Remove',
    preorder: 'Pre-Order This',
    origin: 'Origin:',
    moisture: 'Moisture:',
    curcumin: 'Purity:',
    batch: 'Current Batch:',
    labCert: 'Lab Certified'
  },
  bn: {
    addToCart: 'কার্টে যোগ করুন',
    remove: 'সরান',
    preorder: 'প্রি-অর্ডার করুন',
    origin: 'উৎস:',
    moisture: 'আর্দ্রতা:',
    curcumin: 'বিশুদ্ধতা:',
    batch: 'চলতি ব্যাচ:',
    labCert: 'ল্যাব সার্টিফাইড'
  }
};
const t = key => (isBn ? T.bn[key] : T.en[key]) || key;

/* ---- DOM References ---- */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ---- Render Products ---- */
function renderProducts() {
  const grid = $('productsGrid');
  const filtered = currentCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentCat);

  if (!filtered.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-light);grid-column:1/-1;padding:3rem 0;">No products in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card" onclick="openModal(${p.id})" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ''}
        <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${p.id})" title="${t('addToCart')}">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.cat)}</div>
        <div class="product-name">${isBn ? p.nameBn : p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 80)}…</div>
        <div class="product-footer">
          <div class="product-price">৳${p.price} <span>/ ${p.unit}</span></div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">${t('addToCart')}</button>
        </div>
      </div>
    </article>
  `).join('');
}

function catLabel(cat) {
  const labels = {
    superfood: 'Superfood',
    herbal: 'Herbal & Wellness',
    spice: 'Spice',
    'dried-fruit': 'Dried Fruit'
  };
  return labels[cat] || cat;
}

/* ---- Category Filters ---- */
function initFilters() {
  $$('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderProducts();
    });
  });
}

/* ---- Cart Logic ---- */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, qty: 1 }); }
  updateCartUI();
  openDrawer();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);

  // Badge
  const badge = $('cartCount');
  if (count > 0) { badge.textContent = count; badge.classList.add('show'); }
  else { badge.classList.remove('show'); }

  // Drawer body
  const body = $('drawerBody');
  const footer = $('drawerFooter');

  if (!cart.length) {
    body.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="#products">Browse products →</a></p>';
    footer.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img src="${c.img}" alt="${c.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name} × ${c.qty}</div>
        <div class="cart-item-price">৳${c.price * c.qty}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})">${t('remove')}</button>
    </div>
  `).join('');

  $('drawerTotal').textContent = `৳${total}`;
  footer.style.display = 'block';
}

/* ---- Drawer ---- */
function openDrawer() {
  $('cartDrawer').classList.add('open');
  $('drawerBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  $('cartDrawer').classList.remove('open');
  $('drawerBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- Modal ---- */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  $('modalBody').innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-img-wrap">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="modal-info">
        <div class="modal-cat">${catLabel(p.cat)}</div>
        <h2 class="modal-name">${isBn ? p.nameBn : p.name}</h2>
        <div class="modal-price">৳${p.price} <span style="font-size:.85rem;font-weight:400;color:var(--text-light)">/ ${p.unit}</span></div>
        <p class="modal-desc">${p.desc}</p>
        <div class="modal-specs">
          <div class="modal-spec"><i class="fas fa-map-marker-alt"></i> <strong>Origin:</strong>&nbsp; Sylhet & Bandarban, Bangladesh</div>
          <div class="modal-spec"><i class="fas fa-tint-slash"></i> <strong>Moisture:</strong>&nbsp; &lt; 4.0% (Solar Precision)</div>
          <div class="modal-spec"><i class="fas fa-flask"></i> <strong>Preservatives:</strong>&nbsp; Zero — 100% natural</div>
          <div class="modal-spec"><i class="fas fa-box"></i> <strong>Packaging:</strong>&nbsp; Nitrogen-sealed food jar</div>
          <div class="modal-spec"><i class="fas fa-certificate"></i> <strong>Certification:</strong>&nbsp; Lab-certified, batch #NB-2026-08</div>
        </div>
        <button class="btn-primary btn-full" onclick="addToCart(${p.id}); closeModal()">
          <i class="fas fa-plus"></i> ${t('addToCart')} — ৳${p.price}
        </button>
      </div>
    </div>
  `;

  $('productModal').classList.add('open');
  $('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('productModal').classList.remove('open');
  $('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- Order Form: populate product checkboxes ---- */
function populateOrderCheckboxes() {
  const wrap = $('productCheckboxes');
  if (!wrap) return;
  wrap.innerHTML = PRODUCTS.slice(0, 8).map(p => `
    <label class="product-checkbox-item">
      <input type="checkbox" name="products" value="${p.id}">
      ${p.name} (৳${p.price}/${p.unit})
    </label>
  `).join('');
}

/* ---- Order Form Submit ---- */
function initOrderForm() {
  const form = $('orderForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('submitBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing…';

    const selected = [...$$('[name="products"]:checked')].map(el => {
      const p = PRODUCTS.find(x => x.id === +el.value);
      return p ? p.name : '';
    }).filter(Boolean);

    const payload = {
      name: $('custName').value,
      phone: $('custPhone').value,
      city: $('custCity').value,
      address: $('custAddress').value,
      products: selected.join(', '),
      payment: document.querySelector('[name="payment"]:checked')?.value || 'bkash',
      notes: $('custNotes')?.value || ''
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (_) { /* graceful — still show success */ }

    form.style.display = 'none';
    $('orderSuccess').style.display = 'block';
  });
}

/* ---- Language Toggle ---- */
function initLanguage() {
  const btn = $('langBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    isBn = !isBn;
    btn.textContent = isBn ? 'English' : 'বাংলা';
    renderProducts();
    updateCartUI();
  });
}

/* ---- Navigation: scroll behavior ---- */
function initNav() {
  const header = $('navHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  const ham = $('hamburger');
  const menu = $('mobileMenu');
  ham?.addEventListener('click', () => {
    menu.classList.toggle('open');
    ham.classList.toggle('active');
  });

  // Close mobile menu on link click
  $$('.mob-link').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      ham?.classList.remove('active');
    });
  });
}

/* ---- Announcement Bar ---- */
function initAnnBar() {
  $('annClose')?.addEventListener('click', () => {
    const bar = $('announcementBar');
    if (bar) { bar.style.height = bar.offsetHeight + 'px'; requestAnimationFrame(() => { bar.style.transition = 'height .3s'; bar.style.height = '0'; bar.style.overflow = 'hidden'; }); }
  });
}

/* ---- Active nav link on scroll ---- */
function initScrollSpy() {
  const sections = ['hero', 'products', 'process', 'story', 'order'];
  const links = $$('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const id = entry.target.id;
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(id => { const el = $(id); if (el) observer.observe(el); });
}

/* ---- Animate stats on scroll ---- */
function animateNumber(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(ease * target);
    el.textContent = (target >= 100 ? val.toLocaleString() : val) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initStatsAnimation() {
  const targets = [
    { el: document.querySelector('.stat-number:nth-child(1)'), val: 340, suffix: '+' },
  ];
  const nums = $$('.stat-number');
  const vals = [340, 98.4, 0, 100];
  const suffs = ['+', '%', 'ppm', '%'];
  const labels = ['340+', '98.4%', '0ppm', '100%'];
  let animated = false;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      nums.forEach((el, i) => { el.textContent = labels[i]; });
    }
  }, { threshold: 0.5 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
}

/* ---- Cart drawer triggers ---- */
function initCartDrawer() {
  $('cartBtn')?.addEventListener('click', openDrawer);
  $('drawerClose')?.addEventListener('click', closeDrawer);
  $('drawerBackdrop')?.addEventListener('click', closeDrawer);
  $('cartCheckoutBtn')?.addEventListener('click', () => {
    closeDrawer();
    setTimeout(() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' }), 200);
  });
}

/* ---- Modal triggers ---- */
function initModal() {
  $('modalClose')?.addEventListener('click', closeModal);
  $('modalBackdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeDrawer(); } });
}

/* ---- Init ---- */
function init() {
  renderProducts();
  initFilters();
  initNav();
  initAnnBar();
  initLanguage();
  initOrderForm();
  populateOrderCheckboxes();
  initCartDrawer();
  initModal();
  initScrollSpy();
  initStatsAnimation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
