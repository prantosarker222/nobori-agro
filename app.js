/* ==========================================================================
   NOBORI AGRO — Fresh Poultry & Gourmet Meat Store Engine
   ========================================================================== */

'use strict';

/* ==========================================================================
   19 OFFICIAL NOBORI AGRO PRODUCTS
   ========================================================================== */
const PRODUCTS = [
  // 1. PRIME CUTS & BONELESS
  {
    id: 1,
    name: 'Broiler Chicken Breast Bone Less',
    nameBn: 'ব্রয়লার চিকেন ব্রেস্ট বোনলেস',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 420,
    unit: '500g',
    img: 'breast_boneless.jpg',
    badge: 'Best Seller',
    badgeType: 'badge-accent',
    halal: true,
    desc: '100% tender, skinless, boneless chicken breast fillet. Zero fat, high protein, perfect for steaks, grilling, and stir-fry.'
  },
  {
    id: 2,
    name: 'Broiler Chicken Thai Bone Less',
    nameBn: 'ব্রয়লার চিকেন থাই বোনলেস',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 460,
    unit: '500g',
    img: 'thigh_boneless.jpg',
    badge: 'Juiciest Cut',
    badgeType: 'badge-gold',
    halal: true,
    desc: 'Succulent boneless chicken thigh meat. Naturally tender and juicy, ideal for Chicken Tikka, Shawarma, and BBQ.'
  },
  {
    id: 3,
    name: 'Broiler Chicken Drumstick',
    nameBn: 'ব্রয়লার চিকেন ড্রামস্টিক',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 380,
    unit: '500g (4-5 pcs)',
    img: 'drumsticks.jpg',
    badge: 'Kids Favorite',
    badgeType: '',
    halal: true,
    desc: 'Plump, skin-on fresh chicken drumsticks. Trimmed and ready for crispy frying, baking, or rich spicy roast.'
  },
  {
    id: 4,
    name: 'Broiler Chicken Wings',
    nameBn: 'ব্রয়লার চিকেন উইংস',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 280,
    unit: '500g',
    img: 'wings.jpg',
    badge: 'Hot Wings',
    badgeType: '',
    halal: true,
    desc: 'Freshly portioned two-joint chicken wings. Great for Buffalo glazed wings, BBQ platters, and snacks.'
  },
  {
    id: 5,
    name: 'Broiler Chicken Full Leg Bone Less',
    nameBn: 'ব্রয়লার চিকেন ফুল লেগ বোনলেস',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 440,
    unit: '500g',
    img: 'full_leg_boneless.jpg',
    badge: 'Chef Choice',
    badgeType: 'badge-gold',
    halal: true,
    desc: 'Thigh and drumstick combined, deboned and trimmed with precision for gourmet cutlets and Japanese Teriyaki.'
  },
  {
    id: 6,
    name: 'Broiler Chicken Full Leg',
    nameBn: 'ব্রয়লার চিকেন ফুল লেগ',
    cat: 'cuts',
    catLabel: 'Prime Cuts',
    price: 340,
    unit: '500g (2 pcs)',
    img: 'full_leg.jpg',
    badge: 'Classic Cut',
    badgeType: '',
    halal: true,
    desc: 'Whole chicken leg quarter (thigh + drumstick). Perfect for oven roasting, tandoori, and biryani.'
  },

  // 2. FRESH WHOLE BIRDS
  {
    id: 7,
    name: 'Broiler Whole Chicken Skin On',
    nameBn: 'ব্রয়লার সম্পূর্ণ মুরগি (স্কিন সহ)',
    cat: 'whole',
    catLabel: 'Whole Bird',
    price: 230,
    unit: '1 kg (Dressed)',
    img: 'whole_chicken_skin_on.jpg',
    badge: 'Daily Fresh',
    badgeType: 'badge-accent',
    halal: true,
    desc: '100% Halal slaughtered farm-fresh broiler chicken with natural skin for enhanced moisture during curry and roasting.'
  },
  {
    id: 8,
    name: 'Broiler Whole Chicken Skin Less',
    nameBn: 'ব্রয়লার সম্পূর্ণ মুরগি (স্কিন ছাড়া)',
    cat: 'whole',
    catLabel: 'Whole Bird',
    price: 260,
    unit: '1 kg (Dressed)',
    img: 'whole_chicken_skinless.jpg',
    badge: 'Clean Cut',
    badgeType: '',
    halal: true,
    desc: 'Hygienically skinned and dressed whole chicken. Perfectly trimmed of excess fat, ready to cut into curry pieces.'
  },
  {
    id: 9,
    name: 'Sonali Chicken (Pakistani) - 5-600gm',
    nameBn: 'সোনালি মুরগি (পাকিস্তানি) - ৫-৬০০ গ্রাম',
    cat: 'whole',
    catLabel: 'Whole Bird',
    price: 320,
    unit: '500-600g pc',
    img: 'sonali_chicken.jpg',
    badge: 'Heritage Breed',
    badgeType: 'badge-gold',
    halal: true,
    desc: 'Firm, flavorful indigenous crossbreed chicken. Deshi-like aromatic taste, optimal for traditional Bengali chicken roast and rezala.'
  },
  {
    id: 10,
    name: 'Deshi Duck - Local',
    nameBn: 'দেশি হাঁস - লোকাল',
    cat: 'whole',
    catLabel: 'Whole Bird',
    price: 650,
    unit: '1 pc (~1.2kg)',
    img: 'deshi_duck.jpg',
    badge: 'Village Fresh',
    badgeType: 'badge-gold',
    halal: true,
    desc: 'Locally raised farm duck from Haor/rural wetlands. Rich, savory dark meat that pairs wonderfully with bhuna khichuri.'
  },
  {
    id: 11,
    name: 'Roast/Local Chicken',
    nameBn: 'রোস্ট / দেশি মুরগি',
    cat: 'whole',
    catLabel: 'Whole Bird',
    price: 420,
    unit: '1 pc (approx 800g)',
    img: 'roast_chicken.jpg',
    badge: 'Traditional',
    badgeType: '',
    halal: true,
    desc: 'Free-range local deshi chicken. Highly nutritious with deep natural meat aroma for home-style broths and curry.'
  },

  // 3. READY-TO-COOK & FROZEN SNACKS
  {
    id: 12,
    name: 'Chicken Bologna (1200gm)',
    nameBn: 'চিকেন বোলোনিয়া (১২০০ গ্রাম)',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 750,
    unit: '1200g Loaf',
    img: 'chicken_bologna.jpg',
    badge: 'Family Pack',
    badgeType: 'badge-gold',
    halal: true,
    desc: 'Premium seasoned chicken cold-cut loaf. Slice thin for breakfast sandwiches, subs, salads, and pizza toppings.'
  },
  {
    id: 13,
    name: 'Chicken Samosa',
    nameBn: 'চিকেন সমুচা',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 240,
    unit: '10 pcs pack',
    img: 'chicken_samosa.jpg',
    badge: 'Crispy Snack',
    badgeType: 'badge-accent',
    halal: true,
    desc: 'Flaky pastry filled with spiced minced chicken breast, green chilies, and fresh onions. Fry straight from freezer.'
  },
  {
    id: 14,
    name: 'Chicken Spring Roll',
    nameBn: 'চিকেন স্প্রিং রোল',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 260,
    unit: '10 pcs pack',
    img: 'chicken_spring_roll.jpg',
    badge: 'Party Hit',
    badgeType: '',
    halal: true,
    desc: 'Crispy golden rolls stuffed with shredded tender chicken and crunchy seasonal vegetables with Asian aromatics.'
  },
  {
    id: 15,
    name: 'Chicken Sausage',
    nameBn: 'চিকেন সসেজ',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 290,
    unit: '10 pcs pack',
    img: 'chicken_sausage.jpg',
    badge: 'Breakfast Hit',
    badgeType: '',
    halal: true,
    desc: 'Lightly smoked Halal chicken sausage links. Perfect for breakfast platters, hotdogs, pastas, and stir-fries.'
  },
  {
    id: 16,
    name: 'Chicken Nuggets',
    nameBn: 'চিকেন নাগেটস',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 320,
    unit: '12 pcs pack',
    img: 'chicken_nuggets.jpg',
    badge: 'Crispy Golden',
    badgeType: 'badge-accent',
    halal: true,
    desc: '100% pure minced chicken breast inside a golden seasoned breadcrumb coating. Ready in 4 minutes.'
  },
  {
    id: 17,
    name: 'Chicken Meat Ball',
    nameBn: 'চিকেন মিট বল',
    cat: 'snacks',
    catLabel: 'Ready to Cook',
    price: 310,
    unit: '20 pcs pack',
    img: 'chicken_meatball.jpg',
    badge: 'Gourmet',
    badgeType: '',
    halal: true,
    desc: 'Juicy, seasoned chicken meatballs. Great for creamy pasta, chicken ball soup, and spicy sweet-sour glaze.'
  },

  // 4. OFFAL & CLEAN SPECIALTIES
  {
    id: 18,
    name: 'Broiler Chicken Liver-Gizzard',
    nameBn: 'ব্রয়লার মুরগির কলিজা ও গিলা',
    cat: 'specialties',
    catLabel: 'Offal & Cleaned',
    price: 190,
    unit: '500g pack',
    img: 'liver_gizzard.jpg',
    badge: 'Cleaned',
    badgeType: '',
    halal: true,
    desc: 'Meticulously washed and cleaned fresh chicken liver and gizzard. High iron and nutrient density for spicy bhuna.'
  },
  {
    id: 19,
    name: 'Broiler Chicken Feet (Clean)',
    nameBn: 'ব্রয়লার মুরগির পা (পরিষ্কার)',
    cat: 'specialties',
    catLabel: 'Offal & Cleaned',
    price: 150,
    unit: '500g pack',
    img: 'chicken_feet.jpg',
    badge: 'Collagen Rich',
    badgeType: '',
    halal: true,
    desc: 'Deeply cleansed and peeled chicken feet. Ideal for rich natural bone broth, collagen soups, and traditional stews.'
  }
];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let isBangla = false;

/* ==========================================================================
   DOM HELPERS
   ========================================================================== */
const $ = id => document.getElementById(id);
const $$ = selector => document.querySelectorAll(selector);

/* ==========================================================================
   RENDER PRODUCT CATALOG (WITH ON-CARD QUANTITY STEPPERS)
   ========================================================================== */
function renderProductCatalog() {
  const container = $('productsGridContainer');
  if (!container) return;

  // Filter products by category and search
  const filtered = PRODUCTS.filter(item => {
    const matchesCat = currentCategory === 'all' || item.cat === currentCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameBn.includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Update counter
  const counter = $('productCounterText');
  if (counter) {
    counter.textContent = `Showing ${filtered.length} Products`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2.2rem; color: var(--text-light); margin-bottom: 0.85rem;"></i>
        <h3 style="font-family: var(--font-heading); color: var(--text-main); margin-bottom: 0.35rem;">No products found</h3>
        <p style="font-size: 0.88rem;">Try searching for "Breast", "Nuggets", "Duck", or reset filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const inCart = cart.find(c => c.id === item.id);
    const displayName = isBangla ? item.nameBn : item.name;

    return `
      <article class="product-item-card" data-id="${item.id}">
        <div class="product-thumb-box" onclick="openProductModal(${item.id})">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          ${item.badge ? `<span class="card-badge-tag ${item.badgeType}">${item.badge}</span>` : ''}
          <span class="card-halal-stamp"><i class="fas fa-check-circle"></i> Halal</span>
        </div>

        <div class="product-body-info">
          <span class="product-cat-label">${item.catLabel}</span>
          <h3 class="product-item-title" onclick="openProductModal(${item.id})">${displayName}</h3>
          <p class="product-item-desc">${item.desc}</p>
          <div class="product-pack-spec">
            <i class="fas fa-weight-hanging"></i> ${item.unit}
          </div>

          <div class="product-card-bottom">
            <div class="price-box">
              <span class="price-num">৳${item.price}</span>
              <span class="price-unit">/ ${item.unit}</span>
            </div>

            <div class="card-action-wrap">
              ${inCart ? `
                <div class="card-qty-stepper">
                  <button class="card-stepper-btn" onclick="changeCartQty(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                  <span class="card-stepper-val">${inCart.qty}</span>
                  <button class="card-stepper-btn" onclick="changeCartQty(${item.id}, 1)" aria-label="Increase quantity">+</button>
                </div>
              ` : `
                <button class="btn-card-add" onclick="addToCart(${item.id})">
                  <i class="fas fa-plus"></i>
                  <span>${isBangla ? 'কিনুন' : 'Add'}</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   CATEGORY & SEARCH HANDLERS
   ========================================================================== */
function initFilterTabs() {
  $$('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderProductCatalog();
      
      // Auto-scroll category into view on mobile
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });
}

function filterCategory(catName) {
  const targetTab = document.querySelector(`.cat-tab[data-category="${catName}"]`);
  if (targetTab) {
    $$('.cat-tab').forEach(t => t.classList.remove('active'));
    targetTab.classList.add('active');
    currentCategory = catName;
    renderProductCatalog();
    targetTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function filterBySnacks() {
  filterCategory('snacks');
  const prodSec = $('products');
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function initSearchInputs() {
  const desktopSearch = $('searchInput');
  const mobileSearch = $('mobileSearchInput');
  const clearBtn = $('searchClearBtn');
  const mobileClearBtn = $('mobileSearchClearBtn');

  function handleSearch(val) {
    searchQuery = val.trim();
    if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
    if (mobileClearBtn) mobileClearBtn.style.display = searchQuery ? 'block' : 'none';
    
    // Sync both inputs
    if (desktopSearch && desktopSearch.value !== val) desktopSearch.value = val;
    if (mobileSearch && mobileSearch.value !== val) mobileSearch.value = val;

    renderProductCatalog();
  }

  desktopSearch?.addEventListener('input', e => handleSearch(e.target.value));
  mobileSearch?.addEventListener('input', e => handleSearch(e.target.value));

  clearBtn?.addEventListener('click', () => handleSearch(''));
  mobileClearBtn?.addEventListener('click', () => handleSearch(''));
}

/* ==========================================================================
   CART OPERATIONS & DRAWER
   ========================================================================== */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartDisplay();
  renderProductCatalog();
  
  // Trigger gentle vibration if mobile supports it
  if (navigator.vibrate) {
    navigator.vibrate(25);
  }
}

function changeCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  }

  updateCartDisplay();
  renderProductCatalog();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartDisplay();
  renderProductCatalog();
}

function updateCartDisplay() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const deliveryFee = subtotal >= 1500 || subtotal === 0 ? 0 : 60;
  const total = subtotal + deliveryFee;

  // Update Header Badges & Mobile Bottom Bar Badge
  const badgeCount = $('cartBadgeCount');
  const mobCartBadge = $('mobCartBadge');
  const peekTotal = $('peekTotal');
  const drawerItemCount = $('drawerItemCount');

  if (badgeCount) badgeCount.textContent = count;
  if (mobCartBadge) mobCartBadge.textContent = count;
  if (peekTotal) peekTotal.textContent = `৳${subtotal}`;
  if (drawerItemCount) drawerItemCount.textContent = `${count} items`;

  // Free delivery progress bar
  const shippingMsg = $('shippingMsg');
  const shippingFill = $('shippingFill');
  if (shippingMsg && shippingFill) {
    if (subtotal >= 1500) {
      shippingMsg.innerHTML = `🎉 You unlocked <span class="badge-free">FREE DELIVERY!</span>`;
      shippingFill.style.width = '100%';
    } else {
      const remaining = 1500 - subtotal;
      const pct = Math.min(100, Math.round((subtotal / 1500) * 100));
      shippingMsg.innerHTML = `Add <strong>৳${remaining}</strong> for <span class="badge-free">FREE DELIVERY</span>`;
      shippingFill.style.width = `${pct}%`;
    }
  }

  // Drawer Content
  const body = $('cartDrawerBody');
  const footer = $('cartDrawerFooter');

  if (!body || !footer) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fas fa-shopping-basket"></i>
        <h4>Your basket is empty</h4>
        <p>Add farm-fresh chicken, boneless cuts, or ready-to-cook snacks to begin.</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  $('cartSubtotalVal').textContent = `৳${subtotal}`;
  $('cartDeliveryVal').textContent = deliveryFee === 0 ? 'FREE' : `৳${deliveryFee}`;
  $('cartTotalVal').textContent = `৳${total}`;

  body.innerHTML = cart.map(item => `
    <div class="drawer-cart-item">
      <img src="${item.img}" alt="${item.name}" class="drawer-item-img">
      <div class="drawer-item-details">
        <div class="drawer-item-title">${item.name}</div>
        <div class="drawer-item-price">৳${item.price} &bull; ${item.unit}</div>
        <div class="drawer-qty-controls">
          <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="drawer-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
}

function openCartDrawer() {
  $('cartDrawer')?.classList.add('open');
  $('cartDrawerOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  $('cartDrawer')?.classList.remove('open');
  $('cartDrawerOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   PRODUCT QUICK VIEW MODAL
   ========================================================================== */
function openProductModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const contentArea = $('modalContentArea');
  if (!contentArea) return;

  contentArea.innerHTML = `
    <div class="modal-grid-layout">
      <div class="modal-img-frame">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="modal-details-block">
        <span class="product-cat-label">${p.catLabel}</span>
        <h2>${isBangla ? p.nameBn : p.name}</h2>
        <div class="modal-price-tag">৳${p.price} <span>/ ${p.unit}</span></div>
        <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.55;">${p.desc}</p>
        
        <div class="modal-specs-list">
          <div class="modal-spec-row"><i class="fas fa-shield-halved"></i> <strong>Halal:</strong>&nbsp; 100% Hand-Slaughtered</div>
          <div class="modal-spec-row"><i class="fas fa-snowflake"></i> <strong>Storage:</strong>&nbsp; 0&deg;C &ndash; 4&deg;C Cold Chain</div>
          <div class="modal-spec-row"><i class="fas fa-hand-sparkles"></i> <strong>Prep:</strong>&nbsp; Cleaned &amp; Dressed</div>
          <div class="modal-spec-row"><i class="fas fa-truck-fast"></i> <strong>Delivery:</strong>&nbsp; Express within 2 hours</div>
        </div>

        <button class="btn-hero-primary" style="width: 100%; justify-content: center;" onclick="addToCart(${p.id}); closeProductModal();">
          <i class="fas fa-shopping-basket"></i>
          <span>Add to Basket &bull; ৳${p.price}</span>
        </button>
      </div>
    </div>
  `;

  $('productModalCard')?.classList.add('open');
  $('productModalBackdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  $('productModalCard')?.classList.remove('open');
  $('productModalBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   POPULATE PRODUCT CHECKBOXES IN ORDER FORM
   ========================================================================== */
function populateOrderCheckboxes() {
  const container = $('productSelectorBox');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <label class="product-check-item">
      <input type="checkbox" name="orderItems" value="${p.name} (৳${p.price})">
      <span>${p.name}</span>
    </label>
  `).join('');
}

/* ==========================================================================
   EXPRESS ORDER FORM SUBMISSION
   ========================================================================== */
function initOrderForm() {
  const form = $('expressOrderForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = $('submitOrderBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Placing Order...';

    // Collect selected items from checkboxes or active cart
    const selectedBoxes = [...$$('input[name="orderItems"]:checked')].map(c => c.value);
    const cartItemsFormatted = cart.map(c => `${c.name} x${c.qty} (৳${c.price * c.qty})`);
    const allSelectedItems = [...new Set([...selectedBoxes, ...cartItemsFormatted])];

    const orderPayload = {
      name: $('orderName').value,
      phone: $('orderPhone').value,
      area: $('orderArea').value,
      address: $('orderAddress').value,
      products: allSelectedItems.length > 0 ? allSelectedItems.join(', ') : 'Direct Call Inquired',
      payment: document.querySelector('input[name="orderPayment"]:checked')?.value || 'cod',
      notes: $('orderNotes')?.value || '',
      source: 'Nobori Agro Fresh Poultry Store'
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
    } catch (_) {
      // Graceful fallback
    }

    form.style.display = 'none';
    $('orderSuccessScreen').style.display = 'block';
    
    // Clear cart on success
    cart = [];
    updateCartDisplay();
  });
}

function resetOrderForm() {
  const form = $('expressOrderForm');
  if (form) {
    form.reset();
    form.style.display = 'flex';
  }
  const success = $('orderSuccessScreen');
  if (success) success.style.display = 'none';

  const btn = $('submitOrderBtn');
  if (btn) {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-lock"></i> <span>Confirm &amp; Place Order</span>';
  }
}

/* ==========================================================================
   LANGUAGE TOGGLE (EN <-> BN)
   ========================================================================== */
function initLanguageToggle() {
  const desktopBtn = $('langToggleBtn');
  const mobileBtn = $('mobileLangToggleBtn');

  function toggleLang() {
    isBangla = !isBangla;
    const label = isBangla ? 'English' : 'বাংলা';
    if (desktopBtn) desktopBtn.querySelector('span').textContent = label;
    if (mobileBtn) mobileBtn.querySelector('span').textContent = label;
    renderProductCatalog();
  }

  desktopBtn?.addEventListener('click', toggleLang);
  mobileBtn?.addEventListener('click', toggleLang);
}

/* ==========================================================================
   MOBILE BOTTOM BAR & SCROLL SPY
   ========================================================================== */
function initMobileBottomNav() {
  const homeTab = $('mobTabHome');
  const prodTab = $('mobTabProducts');
  const orderTab = $('mobTabOrder');
  const mobCartBtn = $('mobBottomCartBtn');

  mobCartBtn?.addEventListener('click', openCartDrawer);

  // Update active tab on scroll
  const sections = [
    { el: $('hero'), tab: homeTab },
    { el: $('products'), tab: prodTab },
    { el: $('order-now'), tab: orderTab }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach(({ el, tab }) => {
      if (!el || !tab) return;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        $$('.mob-bottom-item').forEach(i => i.classList.remove('active'));
        tab.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   MOBILE MENU & EVENT LISTENERS
   ========================================================================== */
function initMobileMenu() {
  const btn = $('mobileMenuBtn');
  const panel = $('mobileNavPanel');
  btn?.addEventListener('click', () => {
    panel?.classList.toggle('open');
  });

  $$('.mob-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      panel?.classList.remove('open');
    });
  });
}

function initEventListeners() {
  // Cart Drawer triggers
  $('cartTriggerBtn')?.addEventListener('click', openCartDrawer);
  $('drawerCloseBtn')?.addEventListener('click', closeCartDrawer);
  $('cartDrawerOverlay')?.addEventListener('click', closeCartDrawer);
  $('continueShoppingBtn')?.addEventListener('click', closeCartDrawer);
  $('checkoutDrawerBtn')?.addEventListener('click', () => {
    closeCartDrawer();
  });

  // Modal triggers
  $('modalCloseTrigger')?.addEventListener('click', closeProductModal);
  $('productModalBackdrop')?.addEventListener('click', closeProductModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeProductModal();
    }
  });
}

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
function initializeApp() {
  renderProductCatalog();
  initFilterTabs();
  initSearchInputs();
  populateOrderCheckboxes();
  initOrderForm();
  initLanguageToggle();
  initMobileBottomNav();
  initMobileMenu();
  initEventListeners();
  updateCartDisplay();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
