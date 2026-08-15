/**
 * 🌿 NOBORI AGRO — HEADLESS COMMERCE & BATCH TIMELINE ENGINE
 * Philosophy: Absolute Purity, Solar Precision, Zero Preservatives
 * Complete 100 Products Catalog, Interactive Batch Production Queue, 
 * Glass Pre-Order Drawer, Predictive Search, and Bilingual EN/বাংলা Engine.
 */

// Global State
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'popular',
  language: 'bn', // default 'bn' for authentic experience, toggleable to 'en'
  activeSlide: 0,
  cart: [],
  selectedProduct: null,
  batchQueue: {
    batchNumber: 'NB-2026-08',
    totalSlots: 100,
    reservedSlots: 86,
    activeStage: 2, // 1: Harvested, 2: Solar Dehydration (38°C), 3: Nano-Milling, 4: Nitrogen Sealed Dispatch
    dispatchDate: '24 August 2026'
  }
};

// Bilingual Localization Dictionary
const i18n = {
  en: {
    topTicker: "🌿 LIVE HARVEST: Sylhet & Bandarban Agro-Clusters active in Solar Tunnel Dryers | Purity Tested 100%",
    batchNotice: "CURRENT BATCH #NB-2026-08 • 86% RESERVED",
    preOrderBtn: "Pre-Order Slot",
    secureBatch: "Secure Next Batch",
    inspectLab: "View Lab Certificate",
    drawerTitle: "Your Batch Reservations",
    drawerSubtitle: "Direct farm-to-packet nitrogen sealed allocation",
    emptyCart: "No batch allocations yet. Select your raw botanical superfoods.",
    subtotal: "Subtotal",
    deliveryFee: "Solar-Pack Courier",
    totalPayable: "Total Allocation",
    checkoutBtn: "Confirm Batch Pre-Order",
    moistureTag: "Solar Moisture",
    bioactiveTag: "Bio-Active",
    allCategories: "All Products",
    searchPlaceholder: "Search moringa, hibiscus, garlic, spices, batch #...",
    quickSearchTags: ["Moringa", "Hibiscus", "Raw Bamboo Shoot", "Turmeric", "Dragonfruit", "Kasturi Manjal"]
  },
  bn: {
    topTicker: "🌿 সরাসরি খামার থেকে: সিলেট ও বান্দরবানের সৌর টানেল ড্রায়ারে প্রক্রিয়াজাতকরণ চলছে | ১০০% বিশুদ্ধতা নিশ্চিত",
    batchNotice: "বর্তমান ব্যাচ #NB-2026-08 • ৮৬% সংরক্ষিত",
    preOrderBtn: "স্লট প্রি-অর্ডার",
    secureBatch: "পরবর্তী ব্যাচ বুক করুন",
    inspectLab: "ল্যাব টেস্ট রিপোর্ট",
    drawerTitle: "আপনার সংরক্ষিত ব্যাচ স্লট",
    drawerSubtitle: "খামার থেকে সরাসরি নাইট্রোজেন সিলড প্যাকেজিং",
    emptyCart: "আপনার ঝুড়িতে কোনো ব্যাচ যোগ করা হয়নি। খাঁটি অর্গানিক সুপারফুড নির্বাচন করুন।",
    subtotal: "উপমোট",
    deliveryFee: "সৌর-প্যাক ডেলিভারি",
    totalPayable: "সর্বমোট বরাদ্দ",
    checkoutBtn: "ব্যাচ প্রি-অর্ডার নিশ্চিত করুন",
    moistureTag: "আর্দ্রতা মাত্রা",
    bioactiveTag: "বায়ো-অ্যাক্টিভ",
    allCategories: "সকল পণ্য",
    searchPlaceholder: "সজিনা পাতা, হিবিস্কাস, বাঁশ করুল, হলুদ, ড্রাগন ফ্রুট খুঁজুন...",
    quickSearchTags: ["মরিঙ্গা", "হিবিস্কাস", "বাঁশ করুল", "রাজশাহী হলুদ", "ড্রাগন ফ্রুট", "কস্তুরী হলুদ"]
  }
};

// 7 Catalog Groups Definition
const categories = [
  { id: 'all', name_en: 'All Products (100)', name_bn: 'সকল পণ্য (১০০)', icon: 'fa-leaf' },
  { id: 'superfood', name_en: 'Superfood Powders', name_bn: 'সুপারফুড পাউডার', icon: 'fa-seedling' },
  { id: 'veg_spice', name_en: 'Vegetables & Spices', name_bn: 'সবজি ও মশলা পাউডার', icon: 'fa-pepper-hot' },
  { id: 'fruits_snacks', name_en: 'Solar-Dried Fruits', name_bn: 'সৌর-শুকনো ফল ও স্ন্যাকস', icon: 'fa-apple-alt' },
  { id: 'herbal_wellness', name_en: 'Herbal Wellness', name_bn: 'ভেষজ সুস্থতা ও হার্বাল', icon: 'fa-mortar-pestle' },
  { id: 'local_innovations', name_en: 'Local Innovations', name_bn: 'স্থানীয় উদ্ভাবন', icon: 'fa-lightbulb' },
  { id: 'natural_cosmetics', name_en: 'Natural Cosmetics', name_bn: 'প্রাকৃতিক রূপচর্চা', icon: 'fa-spa' },
  { id: 'kitchen_blends', name_en: 'Kitchen Blends', name_bn: 'স্পেশাল কিচেন ব্লেন্ড', icon: 'fa-utensils' }
];

// Complete 100 Indexed Products Data
const productsData = [
  // 1. Superfood Powders (15 products)
  {
    id: 1,
    name_en: "Organic Moringa Oleifera Powder",
    name_bn: "অর্গানিক সজিনা পাতা গুঁড়া (মরিঙ্গা)",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 480,
    unit: "100g Glass Jar",
    moisture: "3.2%",
    bioactive: "99.1%",
    batch: "NB-801",
    reserved: 92,
    rating: 4.9,
    origin: "Sylhet Organic Agro-Cluster",
    origin_bn: "সিলেট অর্গানিক এগ্রো-ক্লাস্টার",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Triple-micronized, shade-washed and low-temp solar dehydrated fresh Moringa leaves. Contains 7x more Vitamin C than oranges and 4x more Calcium than milk.",
    orac: "15,700 umol TE/100g",
    lab_cert: "Heavy Metals: 0.00ppm | Pesticides: None Detected | E.Coli: Negative"
  },
  {
    id: 2,
    name_en: "Pure Organic Spirulina Powder",
    name_bn: "খাঁটি অর্গানিক স্পিরুলিনা গুঁড়া",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 650,
    unit: "80g Jar",
    moisture: "2.8%",
    bioactive: "98.7%",
    batch: "NB-802",
    reserved: 84,
    rating: 4.8,
    origin: "Cox's Bazar Micro-Algae Farm",
    origin_bn: "কক্সবাজার অ্যালগি কালচার জোন",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    desc: "Unadulterated blue-green microalgae cultivated in pure mineral water, dried gently below 40°C.",
    orac: "24,000 umol TE/100g",
    lab_cert: "Protein: 68.4% | Micro-cystins: 0.00ppm"
  },
  {
    id: 3,
    name_en: "Young Organic Wheatgrass Powder",
    name_bn: "কচি গমের ঘাস গুঁড়া (হুইটগ্রাস)",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 520,
    unit: "100g Jar",
    moisture: "3.5%",
    bioactive: "97.9%",
    batch: "NB-803",
    reserved: 78,
    rating: 4.9,
    origin: "Gazipur Hydroponic Greenhouses",
    origin_bn: "গাজীপুর গ্রিনহাউস",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Harvested at the exact jointing stage for maximum living chlorophyll concentration.",
    orac: "18,200 umol TE/100g",
    lab_cert: "Chlorophyll: 720mg/100g | Purity: 100%"
  },
  {
    id: 4,
    name_en: "Ceremonial Green Matcha Powder",
    name_bn: "প্রিমিয়াম গ্রিন মাচা পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 850,
    unit: "50g Tin",
    moisture: "2.4%",
    bioactive: "99.4%",
    batch: "NB-804",
    reserved: 95,
    rating: 5.0,
    origin: "Sreemangal High Altitude Tea Estate",
    origin_bn: "শ্রীমঙ্গল চা বাগান",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Stone-milled, shade-grown spring leaves rich in L-theanine and EGCG catechins.",
    orac: "134,800 umol TE/100g",
    lab_cert: "EGCG: 11.2% | Caffeine: 2.8%"
  },
  {
    id: 5,
    name_en: "Green Barley Grass Powder",
    name_bn: "সবুজ বার্লি ঘাস পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 490,
    unit: "100g Jar",
    moisture: "3.6%",
    bioactive: "96.8%",
    batch: "NB-805",
    reserved: 70,
    rating: 4.7,
    origin: "Bogra Bio-Farms",
    origin_bn: "বগুড়া বায়ো-ফার্ম",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    desc: "Rich in SOD (Superoxide Dismutase) enzyme and natural alkalizing minerals.",
    orac: "14,500 umol TE/100g",
    lab_cert: "Enzyme Activity: 94% retention"
  },
  {
    id: 6,
    name_en: "Organic Alfalfa Leaf Powder",
    name_bn: "অর্গানিক আলফালফা পাতা পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 420,
    unit: "100g Jar",
    moisture: "3.4%",
    bioactive: "97.2%",
    batch: "NB-806",
    reserved: 68,
    rating: 4.8,
    origin: "Jessore Agro Valley",
    origin_bn: "যশোর এগ্রো ভ্যালি",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Deep-rooted super herb packed with natural Vitamin K, bioflavonoids, and iron.",
    orac: "12,900 umol TE/100g",
    lab_cert: "Pure Botanicals | Zero Additives"
  },
  {
    id: 7,
    name_en: "Micro-Ground Chia Seed Powder",
    name_bn: "মাইক্রো-গ্রাউন্ড চিয়া সিড পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 390,
    unit: "150g Pouch",
    moisture: "4.1%",
    bioactive: "98.1%",
    batch: "NB-807",
    reserved: 88,
    rating: 4.9,
    origin: "Chittagong High Lands",
    origin_bn: "চট্টগ্রাম পাহাড়ি অঞ্চল",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Cold-milled organic chia seeds for instant bio-availability of Omega-3 ALA.",
    orac: "9,800 umol TE/100g",
    lab_cert: "Omega-3: 18.2g/100g"
  },
  {
    id: 8,
    name_en: "Gold Reserve Maca Root Powder",
    name_bn: "গোল্ডেন ম্যাকা রুট পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 780,
    unit: "100g Jar",
    moisture: "3.0%",
    bioactive: "98.9%",
    batch: "NB-808",
    reserved: 91,
    rating: 5.0,
    origin: "Hill Tracts Micro-Climate",
    origin_bn: "পার্বত্য চট্টগ্রাম",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Adaptogenic root powder providing sustained cellular stamina and endocrine balance.",
    orac: "21,000 umol TE/100g",
    lab_cert: "Glucosinolates: 1.8%"
  },
  {
    id: 9,
    name_en: "Ashwagandha KSM Extract Powder",
    name_bn: "অশ্বগন্ধা রুট এক্সট্রাক্ট পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 580,
    unit: "100g Jar",
    moisture: "3.1%",
    bioactive: "99.0%",
    batch: "NB-809",
    reserved: 89,
    rating: 4.9,
    origin: "Mymensingh Herbal Zone",
    origin_bn: "ময়মনসিংহ ভেষজ জোন",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
    desc: "Full-spectrum root extract dried with solar precision to preserve withanolides.",
    orac: "26,500 umol TE/100g",
    lab_cert: "Withanolides: 5.4%"
  },
  {
    id: 10,
    name_en: "Sea Buckthorn Bio-Berry Powder",
    name_bn: "সি বাকথর্ন বেরি পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 720,
    unit: "80g Jar",
    moisture: "2.9%",
    bioactive: "98.5%",
    batch: "NB-810",
    reserved: 82,
    rating: 4.8,
    origin: "Bandarban Sun Valleys",
    origin_bn: "বান্দরবান সান ভ্যালি",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    desc: "Rare botanical source of Omega-7 fatty acids and extreme Vitamin C concentration.",
    orac: "38,900 umol TE/100g",
    lab_cert: "Omega-7 & Flavonoid rich"
  },
  {
    id: 11,
    name_en: "Organic Broken-Cell Chlorella",
    name_bn: "ব্রোকেন-সেল ক্লোরেলা পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 690,
    unit: "80g Jar",
    moisture: "2.7%",
    bioactive: "99.2%",
    batch: "NB-811",
    reserved: 86,
    rating: 4.9,
    origin: "Cox's Bazar Bio-Ponds",
    origin_bn: "কক্সবাজার বায়ো-পন্ড",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Sound-wave cracked cell wall for 95% digestion of vital peptides and nucleic acids.",
    orac: "29,400 umol TE/100g",
    lab_cert: "Heavy Metal Screen: Pass 100%"
  },
  {
    id: 12,
    name_en: "Raw Beetroot Nitric Booster",
    name_bn: "র বিটরুট নাইট্রেট বুস্টার পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 360,
    unit: "120g Jar",
    moisture: "3.8%",
    bioactive: "97.4%",
    batch: "NB-812",
    reserved: 94,
    rating: 4.9,
    origin: "Manikganj Organic Farm",
    origin_bn: "মানিকগঞ্জ অর্গানিক ফার্ম",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    desc: "Pure red beetroot solar crystals supporting blood pressure and cellular stamina.",
    orac: "11,200 umol TE/100g",
    lab_cert: "Natural Nitrates: 3.2%"
  },
  {
    id: 13,
    name_en: "Lion's Mane Mushroom Powder",
    name_bn: "লায়ন্স মেন মাশরুম পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 890,
    unit: "60g Jar",
    moisture: "2.6%",
    bioactive: "99.5%",
    batch: "NB-813",
    reserved: 96,
    rating: 5.0,
    origin: "Savar Mushroom Center",
    origin_bn: "সাভার মাশরুম কালচার",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Dual extracted for hericenones and erinacines supporting neuro-regeneration.",
    orac: "31,000 umol TE/100g",
    lab_cert: "Beta-Glucans: 34.2%"
  },
  {
    id: 14,
    name_en: "Amazonian Camu Camu Pure C",
    name_bn: "কামু কামু পিওর ভিটামিন সি",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 920,
    unit: "60g Jar",
    moisture: "2.2%",
    bioactive: "99.8%",
    batch: "NB-814",
    reserved: 90,
    rating: 5.0,
    origin: "Controlled Greenhouse Cluster",
    origin_bn: "নিয়ন্ত্রিত গ্রিনহাউস",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "30x more natural ascorbic acid than fresh lemons without synthetic chemicals.",
    orac: "52,000 umol TE/100g",
    lab_cert: "Natural Vitamin C: 12.5g/100g"
  },
  {
    id: 15,
    name_en: "Pure Organic Acai Berry Powder",
    name_bn: "অর্গানিক আকাই বেরি পাউডার",
    category: "superfood",
    category_name_bn: "সুপারফুড পাউডার",
    price: 950,
    unit: "60g Jar",
    moisture: "2.5%",
    bioactive: "99.3%",
    batch: "NB-815",
    reserved: 93,
    rating: 4.9,
    origin: "Highland Organic Shaded Farm",
    origin_bn: "পাহাড়ি শেডেড ফার্ম",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    desc: "Deep purple anthocyanin concentrate dried instantly after harvesting.",
    orac: "102,700 umol TE/100g",
    lab_cert: "Anthocyanins: 4.8%"
  },

  // 2. Vegetable & Spice Powders (15 products)
  {
    id: 16,
    name_en: "Single-Estate Rajshahi Turmeric",
    name_bn: "সিঙ্গেল এস্টেট রাজশাহী কাঁচা হলুদ গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 280,
    unit: "150g Pack",
    moisture: "3.4%",
    bioactive: "98.9%",
    batch: "NB-816",
    reserved: 95,
    rating: 5.0,
    origin: "Godagari, Rajshahi",
    origin_bn: "গোদাগাড়ী, রাজশাহী",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "High-curcumin heirloom rhizomes solar-dried and slow-milled with zero artificial polish or lead chromate.",
    orac: "127,000 umol TE/100g",
    lab_cert: "Curcumin: 6.8% | Lead: 0.00ppm"
  },
  {
    id: 17,
    name_en: "Natore Garlic Crystal Powder",
    name_bn: "নাটোরের খাঁটি রসুন ক্রিস্টাল গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 320,
    unit: "120g Jar",
    moisture: "3.1%",
    bioactive: "98.2%",
    batch: "NB-817",
    reserved: 87,
    rating: 4.8,
    origin: "Natore Allium Farm",
    origin_bn: "নাটোর এলিয়াম ফার্ম",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    desc: "100% pure garlic cloves dehydrated at 37°C to lock in pungent bioactive allicin.",
    orac: "18,400 umol TE/100g",
    lab_cert: "Allicin Retention: 96.5%"
  },
  {
    id: 18,
    name_en: "Khagrachari Mountain Ginger Powder",
    name_bn: "খাগড়াছড়ির পাহাড়ি আদা গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 340,
    unit: "120g Jar",
    moisture: "3.2%",
    bioactive: "98.6%",
    batch: "NB-818",
    reserved: 91,
    rating: 4.9,
    origin: "Khagrachari Slopes",
    origin_bn: "খাগড়াছড়ি পাহাড়",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Intensely aromatic gingerol-rich mountain ginger with smooth velvet grind.",
    orac: "28,800 umol TE/100g",
    lab_cert: "Gingerols: 4.2%"
  },
  {
    id: 19,
    name_en: "Sun-Ripened Tomato Flakes & Dust",
    name_bn: "রোদে শুকানো টমেটো গুঁড়া ও ফ্লেক্স",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 310,
    unit: "100g Jar",
    moisture: "3.9%",
    bioactive: "97.1%",
    batch: "NB-819",
    reserved: 79,
    rating: 4.7,
    origin: "Dinajpur Agro Center",
    origin_bn: "দিনাজপুর এগ্রো সেন্টার",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    desc: "Rich umami and bio-available lycopene from field-ripened organic tomatoes.",
    orac: "9,600 umol TE/100g",
    lab_cert: "Lycopene: 45mg/100g"
  },
  {
    id: 20,
    name_en: "Pabna Pink Onion Flakes & Powder",
    name_bn: "পাবনার মিষ্টি লাল পেঁয়াজ গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 290,
    unit: "150g Pack",
    moisture: "3.5%",
    bioactive: "96.9%",
    batch: "NB-820",
    reserved: 85,
    rating: 4.8,
    origin: "Pabna River Basin",
    origin_bn: "পাবনা নদী তীরবর্তী চর",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Natural quercetin and sweetness preserved via low-heat solar air tunnels.",
    orac: "7,400 umol TE/100g",
    lab_cert: "Preservatives: 0.00%"
  },
  {
    id: 21,
    name_en: "Sundarban Honey-Chili Fine Flakes",
    name_bn: "সুন্দরবন হানি-মরিচ গুঁড়া ও ফ্লেক্স",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 360,
    unit: "100g Jar",
    moisture: "3.0%",
    bioactive: "99.0%",
    batch: "NB-821",
    reserved: 93,
    rating: 4.9,
    origin: "Sundarban Coastal Buffer",
    origin_bn: "সুন্দরবন উপকূল",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Fiery organic red chili infused with raw mangrove honey vapor during solar curing.",
    orac: "23,600 umol TE/100g",
    lab_cert: "Capsaicin: 0.85%"
  },
  {
    id: 22,
    name_en: "Sylhet Wild Curry Leaf Powder",
    name_bn: "সিলেটি বুনো কারিপাতা গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 260,
    unit: "80g Jar",
    moisture: "2.9%",
    bioactive: "98.4%",
    batch: "NB-822",
    reserved: 76,
    rating: 4.8,
    origin: "Jaflong Herbal Farms",
    origin_bn: "জাফলং ভেষজ খামার",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Ultra-fresh aroma for culinary seasoning, hair health, and glucose metabolism.",
    orac: "16,200 umol TE/100g",
    lab_cert: "Essential Oils: 1.4%"
  },
  {
    id: 23,
    name_en: "Bogra Green Chili Solar Powder",
    name_bn: "বগুড়ার কাঁচামরিচ সৌর গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 330,
    unit: "100g Jar",
    moisture: "3.3%",
    bioactive: "97.8%",
    batch: "NB-823",
    reserved: 82,
    rating: 4.7,
    origin: "Sariakandi, Bogra",
    origin_bn: "সারিয়াকান্দি, বগুড়া",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    desc: "Vibrant emerald green chili powder retaining crisp natural heat and aroma.",
    orac: "19,800 umol TE/100g",
    lab_cert: "Natural Heat: 45,000 SHU"
  },
  {
    id: 24,
    name_en: "Heirloom Coriander Velvet Grind",
    name_bn: "দেশি ধনিয়া ভেলভেট গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 240,
    unit: "150g Pack",
    moisture: "3.7%",
    bioactive: "96.5%",
    batch: "NB-824",
    reserved: 80,
    rating: 4.8,
    origin: "Faridpur River Sands",
    origin_bn: "ফরিদপুর চর অঞ্চল",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Cold roasted and milled to avoid burning delicate citrus-scented linalool oils.",
    orac: "8,900 umol TE/100g",
    lab_cert: "Pure Coriandrum Sativum"
  },
  {
    id: 25,
    name_en: "Pure Ceylon Cinnamon Quill Grind",
    name_bn: "খাঁটি সিলন দারুচিনি গুঁড়া (লো-কুম্যারিন)",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 490,
    unit: "100g Jar",
    moisture: "2.8%",
    bioactive: "99.1%",
    batch: "NB-825",
    reserved: 91,
    rating: 4.9,
    origin: "Bandarban Spice Plantation",
    origin_bn: "বান্দরবান স্পাইস জোন",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "True Ceylon variety with safely low coumarin levels, ideal for daily wellness.",
    orac: "131,000 umol TE/100g",
    lab_cert: "Coumarin: <0.004% | Safe"
  },
  {
    id: 26,
    name_en: "Green Cardamom Pod Whole Grind",
    name_bn: "সবুজ এলাচ সম্পূর্ণ গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 680,
    unit: "50g Jar",
    moisture: "2.5%",
    bioactive: "99.3%",
    batch: "NB-826",
    reserved: 89,
    rating: 5.0,
    origin: "Sreemangal Spice Foothills",
    origin_bn: "শ্রীমঙ্গল স্পাইস ফুটহিলস",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Fragrant 8mm bold green cardamom pods milled with seeds and shell.",
    orac: "34,200 umol TE/100g",
    lab_cert: "Terpenyl Acetate: 42%"
  },
  {
    id: 27,
    name_en: "Tellicherry Black Pepper Dust",
    name_bn: "তেলিচেরি গোলমরিচ স্পেশাল গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 380,
    unit: "100g Jar",
    moisture: "2.9%",
    bioactive: "98.7%",
    batch: "NB-827",
    reserved: 84,
    rating: 4.9,
    origin: "Chittagong Hill Forests",
    origin_bn: "চট্টগ্রাম পাহাড়ি অরণ্য",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Over-ripe sun-blackened berries containing 7.5% bio-enhancing piperine.",
    orac: "32,400 umol TE/100g",
    lab_cert: "Piperine Content: 7.5%"
  },
  {
    id: 28,
    name_en: "Zanzibar Clove Bud Fine Powder",
    name_bn: "লবঙ্গ ফুল কুঁড়ি সূক্ষ্ম গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 450,
    unit: "80g Jar",
    moisture: "2.7%",
    bioactive: "99.6%",
    batch: "NB-828",
    reserved: 86,
    rating: 4.9,
    origin: "Sylhet Bio-Flora Reserve",
    origin_bn: "সিলেট বায়ো-রিজার্ভ",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Unopened flower buds with world-record ORAC antioxidant score.",
    orac: "290,000 umol TE/100g",
    lab_cert: "Eugenol: 82.4%"
  },
  {
    id: 29,
    name_en: "Whole Nutmeg & Mace Dust",
    name_bn: "জায়ফল ও জয়ত্রী মিশ্র গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 520,
    unit: "60g Jar",
    moisture: "3.0%",
    bioactive: "98.0%",
    batch: "NB-829",
    reserved: 78,
    rating: 4.8,
    origin: "Hill Tracts Agro Cooperative",
    origin_bn: "পার্বত্য এগ্রো কো-অপারেটিভ",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Warm comforting aroma for culinary, golden milk, and sound sleep blends.",
    orac: "47,900 umol TE/100g",
    lab_cert: "Myristicin Tested: Pure"
  },
  {
    id: 30,
    name_en: "Sun-Cured Fenugreek Seed Powder",
    name_bn: "রোদে শুকানো মেথি গুঁড়া",
    category: "veg_spice",
    category_name_bn: "সবজি ও মশলা পাউডার",
    price: 220,
    unit: "150g Pack",
    moisture: "3.6%",
    bioactive: "97.3%",
    batch: "NB-830",
    reserved: 81,
    rating: 4.7,
    origin: "Rajshahi Dry Zone",
    origin_bn: "রাজশাহী ড্রাই জোন",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Galactomannan soluble fiber and saponins supporting metabolism.",
    orac: "11,500 umol TE/100g",
    lab_cert: "Trigonelline: 0.38%"
  },

  // 3. Fruits & Snacks (14 products)
  {
    id: 31,
    name_en: "Solar-Dried Rajshahi Mango Crisps",
    name_bn: "রাজশাহীর সোলার-ড্রাইড আম ক্রিস্পস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 420,
    unit: "100g Pouch",
    moisture: "3.8%",
    bioactive: "98.5%",
    batch: "NB-831",
    reserved: 98,
    rating: 5.0,
    origin: "Chapainawabganj Orchards",
    origin_bn: "চাঁপাইনবাবগঞ্জ আম বাগান",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    desc: "100% pure Langra & Khirsapat mangoes dehydrated without sulphur, sugar, or preservatives.",
    orac: "6,800 umol TE/100g",
    lab_cert: "Added Sugar: 0.00g | Sulphites: 0.00ppm"
  },
  {
    id: 32,
    name_en: "Crimson Dragonfruit Solar Chips",
    name_bn: "লাল ড্রাগন ফ্রুট সোলার চিপস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 490,
    unit: "80g Pouch",
    moisture: "3.2%",
    bioactive: "99.1%",
    batch: "NB-832",
    reserved: 95,
    rating: 4.9,
    origin: "Natore Dragon Agro",
    origin_bn: "নাটোর ড্রাগন এগ্রো",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=600&q=80",
    desc: "Rich in betalains and prebiotic fiber, crunchy naturally sweet guilt-free snack.",
    orac: "14,200 umol TE/100g",
    lab_cert: "Betalains: 180mg/100g"
  },
  {
    id: 33,
    name_en: "Sreemangal Honey Pineapple Rings",
    name_bn: "শ্রীমঙ্গলের মধু আনারস ড্রাই রিংস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 380,
    unit: "100g Pouch",
    moisture: "4.0%",
    bioactive: "97.8%",
    batch: "NB-833",
    reserved: 89,
    rating: 4.8,
    origin: "Sreemangal Pineapple Slopes",
    origin_bn: "শ্রীমঙ্গল আনারস বাগান",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    desc: "Naturally sweet with high active bromelain enzyme for digestion.",
    orac: "5,400 umol TE/100g",
    lab_cert: "Bromelain Activity: 88%"
  },
  {
    id: 34,
    name_en: "Barisal Sweet Guava Chews",
    name_bn: "বরিশালের দেশি মিষ্টি পেয়ারা চিবুক",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 320,
    unit: "120g Pouch",
    moisture: "4.2%",
    bioactive: "98.0%",
    batch: "NB-834",
    reserved: 84,
    rating: 4.8,
    origin: "Swarupkathi Guava Groves",
    origin_bn: "স্বরূপকাঠি পেয়ারা বাগান",
    image: "https://images.unsplash.com/photo-1536511135899-738cb6222b4a?auto=format&fit=crop&w=600&q=80",
    desc: "Rich dietary pectin fiber and 4x Vitamin C of fresh citrus.",
    orac: "8,900 umol TE/100g",
    lab_cert: "Vitamin C: 228mg/100g"
  },
  {
    id: 35,
    name_en: "Golden Papaya Solar Bites",
    name_bn: "পাকা পেঁপে সোলার বাইটস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 340,
    unit: "100g Pouch",
    moisture: "3.9%",
    bioactive: "97.4%",
    batch: "NB-835",
    reserved: 79,
    rating: 4.7,
    origin: "Jessore Fruit Cluster",
    origin_bn: "যশোর ফল চাষ জোন",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=600&q=80",
    desc: "Rich papain enzyme and beta-carotene slices dried in hygienic solar chambers.",
    orac: "6,200 umol TE/100g",
    lab_cert: "Papain: 92% active"
  },
  {
    id: 36,
    name_en: "Mountain Jackfruit Solar Crisps",
    name_bn: "পাহাড়ি কাঁঠাল ক্রিস্পি স্ন্যাকস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 390,
    unit: "90g Pouch",
    moisture: "3.1%",
    bioactive: "98.2%",
    batch: "NB-836",
    reserved: 91,
    rating: 4.9,
    origin: "Modhupur Forest Orchards",
    origin_bn: "মধুপুর কাঁঠাল বাগান",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    desc: "Unbelievable natural sweetness and aroma, crunchy and oil-free.",
    orac: "4,900 umol TE/100g",
    lab_cert: "Oil Content: 0.0%"
  },
  {
    id: 37,
    name_en: "Wild Banana Chews & Flour",
    name_bn: "বুনো সাগর কলা সোলার চিবুক",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 280,
    unit: "150g Pouch",
    moisture: "4.4%",
    bioactive: "96.8%",
    batch: "NB-837",
    reserved: 82,
    rating: 4.6,
    origin: "Narsingdi Banana Lands",
    origin_bn: "নরসিংদী কলা বাগান",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    desc: "High potassium energy bite for athletes and healthy snacks for kids.",
    orac: "3,800 umol TE/100g",
    lab_cert: "Potassium: 890mg/100g"
  },
  {
    id: 38,
    name_en: "Solar Strawberry Crisps",
    name_bn: "সোলার স্ট্রবেরি ড্রাই ক্রিস্পস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 590,
    unit: "60g Pouch",
    moisture: "2.8%",
    bioactive: "99.0%",
    batch: "NB-838",
    reserved: 96,
    rating: 5.0,
    origin: "Rajshahi Strawberry Greenhouses",
    origin_bn: "রাজশাহী স্ট্রবেরি ফার্ম",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    desc: "Intense tart-sweet ruby red slices loaded with ellagic acid.",
    orac: "24,500 umol TE/100g",
    lab_cert: "Ellagic Acid: 1.2%"
  },
  {
    id: 39,
    name_en: "Toasted Coconut Flakes & Shreds",
    name_bn: "সৌর-শুকনো নারিকেল ফ্লেক্স",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 260,
    unit: "150g Pouch",
    moisture: "2.5%",
    bioactive: "98.3%",
    batch: "NB-839",
    reserved: 88,
    rating: 4.8,
    origin: "Bhola Island Palms",
    origin_bn: "ভোলা দ্বীপ নারিকেল বাগান",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Lauric acid rich healthy fats, unsweetened and raw.",
    orac: "4,100 umol TE/100g",
    lab_cert: "Lauric Acid: 48%"
  },
  {
    id: 40,
    name_en: "Dinajpur Lychee Solar Bites",
    name_bn: "দিনাজপুরের বেদানা লিচু ড্রাই বাইটস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 540,
    unit: "80g Pouch",
    moisture: "3.5%",
    bioactive: "98.7%",
    batch: "NB-840",
    reserved: 94,
    rating: 4.9,
    origin: "Dinajpur Royal Orchards",
    origin_bn: "দিনাজপুর লিচু বাগান",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    desc: "Exotic floral sweetness preserved with seed removed, zero sugar added.",
    orac: "8,200 umol TE/100g",
    lab_cert: "Purity Tested 100%"
  },
  {
    id: 41,
    name_en: "Pomegranate Seed Arils Solar Dried",
    name_bn: "বেদানা/ডালিম দানা সৌর শুকনো",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 490,
    unit: "80g Jar",
    moisture: "3.0%",
    bioactive: "99.2%",
    batch: "NB-841",
    reserved: 87,
    rating: 4.9,
    origin: "North Bengal Aril Farms",
    origin_bn: "উত্তরবঙ্গ ডালিম বাগান",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Crunchy ruby red arils containing punicalagin powerhouse antioxidants.",
    orac: "45,000 umol TE/100g",
    lab_cert: "Punicalagin: 2.8%"
  },
  {
    id: 42,
    name_en: "Sweet Jujube (Boroi) Chews",
    name_bn: "মিষ্টি কুল/বরই সোলার চিবুক",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 240,
    unit: "150g Pouch",
    moisture: "4.5%",
    bioactive: "96.4%",
    batch: "NB-842",
    reserved: 81,
    rating: 4.7,
    origin: "Kushtia Boroi Orchards",
    origin_bn: "কুষ্টিয়া কুল বাগান",
    image: "https://images.unsplash.com/photo-1536511135899-738cb6222b4a?auto=format&fit=crop&w=600&q=80",
    desc: "Tangy sweet solar cured red jujube for healthy immune snacking.",
    orac: "7,800 umol TE/100g",
    lab_cert: "Traditional Solar Cured"
  },
  {
    id: 43,
    name_en: "Kamranga (Starfruit) Tangy Slices",
    name_bn: "কামরাঙ্গা টক-মিষ্টি সোলার স্লাইস",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 270,
    unit: "100g Pouch",
    moisture: "3.7%",
    bioactive: "97.1%",
    batch: "NB-843",
    reserved: 77,
    rating: 4.6,
    origin: "Tangail Fruit Groves",
    origin_bn: "টাঙ্গাইল কামরাঙ্গা বাগান",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    desc: "Digestive tangy fruit slice dried with low-moisture solar crystals.",
    orac: "9,100 umol TE/100g",
    lab_cert: "Zero Preservatives"
  },
  {
    id: 44,
    name_en: "Sundried Tamarind Pulp Bites",
    name_bn: "রোদে শুকানো খাঁটি মিষ্টি-টক তেঁতুল",
    category: "fruits_snacks",
    category_name_bn: "সৌর-শুকনো ফল ও স্ন্যাকস",
    price: 210,
    unit: "200g Pouch",
    moisture: "5.0%",
    bioactive: "96.0%",
    batch: "NB-844",
    reserved: 86,
    rating: 4.8,
    origin: "Rajshahi Tamarind Trees",
    origin_bn: "রাজশাহী তেঁতুল গাছ",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Deseeded natural fruit pulp rich in tartaric acid and minerals.",
    orac: "8,400 umol TE/100g",
    lab_cert: "Seedless Pure Pulp"
  },

  // 4. Herbal Wellness (15 products)
  {
    id: 45,
    name_en: "Crimson Hibiscus Flower Petals & Dust",
    name_bn: "রক্ত জবা ফুল পাপড়ি ও পিওর ডাস্ট",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 460,
    unit: "80g Glass Jar",
    moisture: "2.8%",
    bioactive: "99.4%",
    batch: "NB-845",
    reserved: 96,
    rating: 5.0,
    origin: "Sylhet Organic Floral Cluster",
    origin_bn: "সিলেট অর্গানিক ফ্লোরাল জোন",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Hand-plucked whole red hibiscus calyces solar dried under UV-filtered glass. Powerhouse for heart health, blood pressure, and hair shine.",
    orac: "34,800 umol TE/100g",
    lab_cert: "Anthocyanins: 3.4% | Organic Certified"
  },
  {
    id: 46,
    name_en: "Holy Tulsi (Krishna & Rama) Powder",
    name_bn: "কৃষ্ণ ও রাম তুলসী পাতা পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 320,
    unit: "100g Jar",
    moisture: "3.0%",
    bioactive: "98.8%",
    batch: "NB-846",
    reserved: 90,
    rating: 4.9,
    origin: "Mymensingh Herbal Belt",
    origin_bn: "ময়মনসিংহ তুলসী খামার",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Eugenol and ursolic acid rich holy basil leaves for respiratory immunity and stress adaptation.",
    orac: "25,300 umol TE/100g",
    lab_cert: "Ursolic Acid: 1.6%"
  },
  {
    id: 47,
    name_en: "Triphala Organic Balanced Grind",
    name_bn: "ত্রিফলা অর্গানিক ব্যালেন্সড চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 350,
    unit: "150g Jar",
    moisture: "3.2%",
    bioactive: "98.5%",
    batch: "NB-847",
    reserved: 94,
    rating: 5.0,
    origin: "Hill Forests (Amla, Haritaki, Baheda)",
    origin_bn: "আমলকী, হরীতকী ও বহেড়া খামার",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
    desc: "Equal 1:1:1 ratio of fresh deseeded myrobalan fruits for gut detox and colon wellness.",
    orac: "48,000 umol TE/100g",
    lab_cert: "Tannins: 38% | Deseeded"
  },
  {
    id: 48,
    name_en: "Brahmi (Bacopa Monnieri) Mind Elixir",
    name_bn: "ব্রাহ্মী শাক মেধা বিকাশ পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 440,
    unit: "80g Jar",
    moisture: "3.1%",
    bioactive: "99.0%",
    batch: "NB-848",
    reserved: 92,
    rating: 4.9,
    origin: "Haor Wetlands Organic Cultivation",
    origin_bn: "হাওর বায়ো-ওয়েটল্যান্ড",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    desc: "Bacosides A & B rich wetland botanical known for cognitive clarity, memory, and nerve soothing.",
    orac: "19,500 umol TE/100g",
    lab_cert: "Bacosides: 20% standard"
  },
  {
    id: 49,
    name_en: "Shatavari Root Vitality Powder",
    name_bn: "শতমূলী (শতাবরী) রুট পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 490,
    unit: "100g Jar",
    moisture: "3.4%",
    bioactive: "98.1%",
    batch: "NB-849",
    reserved: 87,
    rating: 4.8,
    origin: "Bandarban Valley",
    origin_bn: "বান্দরবান ভেষজ উপত্যকা",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Supreme female hormonal wellness, reproductive nourishment, and cooling adaptogen.",
    orac: "17,600 umol TE/100g",
    lab_cert: "Saponins: 14.5%"
  },
  {
    id: 50,
    name_en: "Arjuna Bark Cardio-Shield Powder",
    name_bn: "অর্জুন ছাল কার্ডিও শিল্ড চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 290,
    unit: "150g Pack",
    moisture: "3.8%",
    bioactive: "97.5%",
    batch: "NB-850",
    reserved: 85,
    rating: 4.8,
    origin: "Bhawal Deciduous Forests",
    origin_bn: "ভাওয়াল শালবন জোন",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Terminalia Arjuna tree bark rich in CoQ10 precursors and heart muscle support compounds.",
    orac: "36,000 umol TE/100g",
    lab_cert: "Arjunic Acid: 1.8%"
  },
  {
    id: 51,
    name_en: "Gotu Kola (Thankuni) Leaf Powder",
    name_bn: "থানকুনি পাতা ভেষজ গুঁড়া",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 340,
    unit: "100g Jar",
    moisture: "3.2%",
    bioactive: "98.3%",
    batch: "NB-851",
    reserved: 91,
    rating: 4.9,
    origin: "Sunamganj Haor Edge",
    origin_bn: "সুনামগঞ্জ হাওর তীর",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Asiaticoside-rich leaf powder for intestinal wound healing, brain focus, and collagen.",
    orac: "14,800 umol TE/100g",
    lab_cert: "Asiaticoside: 2.2%"
  },
  {
    id: 52,
    name_en: "Giloy (Guduchi) Stem Powder",
    name_bn: "গুলঞ্চ (গিলয়) লতা পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 360,
    unit: "100g Jar",
    moisture: "3.3%",
    bioactive: "98.0%",
    batch: "NB-852",
    reserved: 88,
    rating: 4.8,
    origin: "Rangamati Reserve",
    origin_bn: "রাঙ্গামাটি বনভূমি",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Tinospora cordifolia vine harvested from neem host trees for maximum immune potency.",
    orac: "21,400 umol TE/100g",
    lab_cert: "Alkaloids: 3.1%"
  },
  {
    id: 53,
    name_en: "Senna (Sonamukhi) Leaf Powder",
    name_bn: "সোনামুখী পাতা পিওর পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 260,
    unit: "100g Pack",
    moisture: "3.7%",
    bioactive: "96.9%",
    batch: "NB-853",
    reserved: 75,
    rating: 4.6,
    origin: "Kushtia Herbal Farm",
    origin_bn: "কুষ্টিয়া ভেষজ খামার",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Natural sennosides for gentle natural bowel cleansing and periodic digestive flush.",
    orac: "8,900 umol TE/100g",
    lab_cert: "Sennosides: 2.4%"
  },
  {
    id: 54,
    name_en: "Shankhpushpi Calm Mind Herb",
    name_bn: "শঙ্খপুষ্পী মানসিক প্রশান্তি চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 420,
    unit: "80g Jar",
    moisture: "2.9%",
    bioactive: "98.6%",
    batch: "NB-854",
    reserved: 84,
    rating: 4.8,
    origin: "Chittagong Slopes",
    origin_bn: "চট্টগ্রাম পাহাড়",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Promotes GABA neurotransmitter balance and deep REM sleep cycles naturally.",
    orac: "16,700 umol TE/100g",
    lab_cert: "Convolvine Screen: Pure"
  },
  {
    id: 55,
    name_en: "Licorice (Mulethi) Root Powder",
    name_bn: "যষ্টিমধু (মুলেঠি) খাঁটি মূল পাউডার",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 340,
    unit: "120g Jar",
    moisture: "3.2%",
    bioactive: "98.7%",
    batch: "NB-855",
    reserved: 91,
    rating: 4.9,
    origin: "North Bengal Roots",
    origin_bn: "উত্তরবঙ্গ রুট ফার্ম",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Sweet soothing glycyrrhizin for throat ease, stomach acid coating, and skin brightening.",
    orac: "24,000 umol TE/100g",
    lab_cert: "Glycyrrhizin: 4.5%"
  },
  {
    id: 56,
    name_en: "Kalmegh (King of Bitters) Powder",
    name_bn: "কালমেঘ পাতা লিভার শিল্ড চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 310,
    unit: "80g Jar",
    moisture: "3.0%",
    bioactive: "99.1%",
    batch: "NB-856",
    reserved: 86,
    rating: 4.9,
    origin: "Sylhet Bio-Zone",
    origin_bn: "সিলেট বায়ো-ফার্ম",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Andrographolide active herb for liver detoxification and seasonal pathogen defense.",
    orac: "31,800 umol TE/100g",
    lab_cert: "Andrographolides: 10%"
  },
  {
    id: 57,
    name_en: "Gokshura (Tribulus) Vitality Powder",
    name_bn: "গোক্ষুর ফল এনার্জি ও কিডনি চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 430,
    unit: "100g Jar",
    moisture: "3.5%",
    bioactive: "97.9%",
    batch: "NB-857",
    reserved: 89,
    rating: 4.8,
    origin: "Barind Tract",
    origin_bn: "বরেন্দ্র অঞ্চল",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Protodioscin saponins for urinary tract cleansing, kidney vitality, and athletic vigor.",
    orac: "18,900 umol TE/100g",
    lab_cert: "Protodioscin: 40%"
  },
  {
    id: 58,
    name_en: "Manjistha (Indian Madder) Powder",
    name_bn: "মঞ্জিষ্ঠা মূল ব্লাড পিউরিফায়ার চূর্ণ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 390,
    unit: "100g Jar",
    moisture: "3.1%",
    bioactive: "98.4%",
    batch: "NB-858",
    reserved: 83,
    rating: 4.8,
    origin: "Bandarban Mountain Roots",
    origin_bn: "বান্দরবান পর্বতমালা",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    desc: "Renowned botanical lymphatic drainer and systemic blood purifying root.",
    orac: "29,600 umol TE/100g",
    lab_cert: "Purpurin Screen: High"
  },
  {
    id: 59,
    name_en: "Safed Musli (Asparagus Adscendens)",
    name_bn: "সফেদ মুসলী প্রিমিয়াম রিজার্ভ",
    category: "herbal_wellness",
    category_name_bn: "ভেষজ সুস্থতা ও হার্বাল",
    price: 880,
    unit: "60g Jar",
    moisture: "2.6%",
    bioactive: "99.5%",
    batch: "NB-859",
    reserved: 95,
    rating: 5.0,
    origin: "Khagrachari High Valleys",
    origin_bn: "খাগড়াছড়ি ভ্যালি",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Rare vitality root dried strictly below 35°C for cellular rejuvenation and stamina.",
    orac: "33,000 umol TE/100g",
    lab_cert: "Saponins: 52%"
  },

  // 5. Local Innovations (14 products)
  {
    id: 60,
    name_en: "Bandarban Raw Bamboo Shoot Powder",
    name_bn: "বান্দরবানের কচি বাঁশ করুল গুঁড়া",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 490,
    unit: "100g Jar",
    moisture: "3.2%",
    bioactive: "98.9%",
    batch: "NB-860",
    reserved: 97,
    rating: 5.0,
    origin: "Ruma, Bandarban Indigenous Forest",
    origin_bn: "রুমা, বান্দরবান বনাঞ্চল",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Ethically foraged young forest bamboo shoots, steam-blanched and solar dehydrated. Exceptionally high in dietary silica for hair, nails, and tendon elasticity.",
    orac: "18,400 umol TE/100g",
    lab_cert: "Organic Silica: 7.2% | Cyanogenic Glycosides: 0.00%"
  },
  {
    id: 61,
    name_en: "Green Jackfruit Flour (Enchor)",
    name_bn: "কাঁচা কাঁঠাল (এঁচোড়) লো-জিআই ময়দা",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 360,
    unit: "250g Pouch",
    moisture: "3.8%",
    bioactive: "97.6%",
    batch: "NB-861",
    reserved: 95,
    rating: 4.9,
    origin: "Gazipur Fruit Forests",
    origin_bn: "গাজীপুর কাঁঠাল বাগান",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Clinically proven low Glycemic Index (GI) flour for diabetics; can replace 30% wheat in roti.",
    orac: "7,800 umol TE/100g",
    lab_cert: "Resistant Starch: 24.5% | Low GI Certified"
  },
  {
    id: 62,
    name_en: "Haor Water Lily (Shapla) Seed Powder",
    name_bn: "হাওরের লাল শাপলা বীজ পাউডার (মাখনা ফ্লাওয়ার)",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 450,
    unit: "120g Jar",
    moisture: "3.0%",
    bioactive: "98.4%",
    batch: "NB-862",
    reserved: 89,
    rating: 4.8,
    origin: "Tanguar Haor Wetland Cluster",
    origin_bn: "টাঙ্গুয়ার হাওর",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Rare Foxnut (Makhana) relative from deep wetland blooms; rich in kaempferol anti-aging flavone.",
    orac: "15,900 umol TE/100g",
    lab_cert: "Gluten-Free: 100% | Kaempferol: 0.8%"
  },
  {
    id: 63,
    name_en: "Kalijira Black Seed Nano-Ground",
    name_bn: "কালোজিরা কোল্ড-মিল্ড ন্যানো পাউডার",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 380,
    unit: "150g Jar",
    moisture: "3.3%",
    bioactive: "99.3%",
    batch: "NB-863",
    reserved: 98,
    rating: 5.0,
    origin: "Jessore Nigella Fields",
    origin_bn: "যশোর কালোজিরা খেত",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Nigella Sativa seeds milled under nitrogen gas to prevent thymoquinone oil evaporation.",
    orac: "42,500 umol TE/100g",
    lab_cert: "Thymoquinone (TQ): 2.4%"
  },
  {
    id: 64,
    name_en: "Sundarban Wild Golpata (Nipa) Sugar",
    name_bn: "সুন্দরবনের বুনো গোলপাতা খাঁটি চিনি",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 520,
    unit: "200g Jar",
    moisture: "2.1%",
    bioactive: "98.7%",
    batch: "NB-864",
    reserved: 93,
    rating: 4.9,
    origin: "Sundarban Mangrove Belt",
    origin_bn: "সুন্দরবন গোলপাতা বাগান",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Low-GI unprocessed raw palm sap dried with solar evaporators; rich in Vitamin B complex and zinc.",
    orac: "9,400 umol TE/100g",
    lab_cert: "Glycemic Index: 35 | Minerals: Rich"
  },
  {
    id: 65,
    name_en: "Korola (Bitter Gourd) Solar Crystals",
    name_bn: "দেশি করলা সোলার ক্রিস্টাল গুঁড়া",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 340,
    unit: "100g Jar",
    moisture: "3.4%",
    bioactive: "98.2%",
    batch: "NB-865",
    reserved: 90,
    rating: 4.8,
    origin: "Narsingdi Vegetable Cluster",
    origin_bn: "নরসিংদী করলা ফার্ম",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    desc: "Charantin and polypeptide-p rich bitter melon powder for insulin receptor sensitivity.",
    orac: "16,300 umol TE/100g",
    lab_cert: "Charantin: 1.8%"
  },
  {
    id: 66,
    name_en: "Haor Lotus Root (Poddo Mool) Flour",
    name_bn: "হাওরের পদ্মমূল সোলার ময়দা",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 480,
    unit: "150g Jar",
    moisture: "3.1%",
    bioactive: "97.9%",
    batch: "NB-866",
    reserved: 84,
    rating: 4.8,
    origin: "Kishoreganj Haor System",
    origin_bn: "কিশোরগঞ্জ হাওর",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Soothes respiratory tract, nourishes intestinal mucosa, and provides gentle soothing carbs.",
    orac: "8,600 umol TE/100g",
    lab_cert: "Mucilage & Fiber: High"
  },
  {
    id: 67,
    name_en: "Wild Amra (Hog Plum) Tangy Dust",
    name_bn: "বুনো দেশি আমড়া টক গুঁড়া",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 280,
    unit: "100g Jar",
    moisture: "3.6%",
    bioactive: "96.7%",
    batch: "NB-867",
    reserved: 81,
    rating: 4.7,
    origin: "Barisal River Slopes",
    origin_bn: "বরিশাল আমড়া বাগান",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    desc: "Natural souring agent rich in plant iron and ascorbic acid for culinary and beverage mix.",
    orac: "11,800 umol TE/100g",
    lab_cert: "Ascorbic Acid: 38mg/100g"
  },
  {
    id: 68,
    name_en: "Chalta (Elephant Apple) Solar Powder",
    name_bn: "চালতা ফলের সোলার শুকনো গুঁড়া",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 310,
    unit: "100g Jar",
    moisture: "3.5%",
    bioactive: "97.4%",
    batch: "NB-868",
    reserved: 78,
    rating: 4.6,
    origin: "Sylhet Rainforest Edge",
    origin_bn: "সিলেট রেইনফরেস্ট জোন",
    image: "https://images.unsplash.com/photo-1536511135899-738cb6222b4a?auto=format&fit=crop&w=600&q=80",
    desc: "Betulinic acid source; delicious sour digestive kick for chutneys, pulses, and drinks.",
    orac: "14,100 umol TE/100g",
    lab_cert: "Betulinic Acid: 0.9%"
  },
  {
    id: 69,
    name_en: "Singara (Water Chestnut) Pure Flour",
    name_bn: "পানিফল (সিঙ্গারা) গ্লুটেন-ফ্রি আটা",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 370,
    unit: "200g Pouch",
    moisture: "3.2%",
    bioactive: "98.0%",
    batch: "NB-869",
    reserved: 86,
    rating: 4.8,
    origin: "Beel Wetlands, Pabna",
    origin_bn: "পাবনা চলনবিল",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Ancient cooling water tuber flour, excellent for religious fasting and gut soothing bread.",
    orac: "6,900 umol TE/100g",
    lab_cert: "Gluten Free | Grain Free"
  },
  {
    id: 70,
    name_en: "Hill Tribe Wild Yam (Misty Alu) Powder",
    name_bn: "পাহাড়ি বুনো মিষ্টি আলু গুঁড়া",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 390,
    unit: "150g Jar",
    moisture: "3.3%",
    bioactive: "98.5%",
    batch: "NB-870",
    reserved: 82,
    rating: 4.7,
    origin: "Bandarban High Slopes",
    origin_bn: "বান্দরবান পাহাড়ি অঞ্চল",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    desc: "Deep orange anthocyanin and diosgenin rich tuber cultivated by indigenous farmers.",
    orac: "19,200 umol TE/100g",
    lab_cert: "Diosgenin: 1.4%"
  },
  {
    id: 71,
    name_en: "Pat Shak (Jute Leaf) Super-Greens",
    name_bn: "পাট শাক সুপার-গ্রিন্স সোলার পাউডার",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 290,
    unit: "100g Jar",
    moisture: "3.1%",
    bioactive: "98.8%",
    batch: "NB-871",
    reserved: 92,
    rating: 4.9,
    origin: "Faridpur Golden Jute Fields",
    origin_bn: "ফরিদপুর পাট খেত",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    desc: "Ancient Egyptian Molokhia secret; highest botanical calcium, beta-carotene, and mucilage.",
    orac: "22,100 umol TE/100g",
    lab_cert: "Calcium: 1450mg/100g"
  },
  {
    id: 72,
    name_en: "Tamarind Seed Prebiotic Gum Powder",
    name_bn: "তেঁতুল বীজ প্রিবায়োটিক গাম পাউডার",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 330,
    unit: "120g Jar",
    moisture: "2.9%",
    bioactive: "97.5%",
    batch: "NB-872",
    reserved: 79,
    rating: 4.7,
    origin: "Natore Seed Cluster",
    origin_bn: "নাটোর তেঁতুল জোন",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Xyloglucan polysaccharide for joint cartilage support and gut microbiome fuel.",
    orac: "13,700 umol TE/100g",
    lab_cert: "Xyloglucan: 65%"
  },
  {
    id: 73,
    name_en: "Wood Apple (Bel) Sun-Cured Powder",
    name_bn: "খাঁটি পাকা বেলের সৌর চূর্ণ",
    category: "local_innovations",
    category_name_bn: "স্থানীয় উদ্ভাবন",
    price: 360,
    unit: "150g Jar",
    moisture: "3.8%",
    bioactive: "98.1%",
    batch: "NB-873",
    reserved: 95,
    rating: 4.9,
    origin: "Kushtia Aegle Groves",
    origin_bn: "কুষ্টিয়া বেল বাগান",
    image: "https://images.unsplash.com/photo-1536511135899-738cb6222b4a?auto=format&fit=crop&w=600&q=80",
    desc: "Supreme digestive soothe for IBS, ulcers, and summer heat balance. Just stir in water.",
    orac: "17,300 umol TE/100g",
    lab_cert: "Marmelosin: Active"
  },

  // 6. Natural Cosmetics (14 products)
  {
    id: 74,
    name_en: "Kasturi Manjal (Wild Turmeric) Dust",
    name_bn: "কস্তুরী হলুদ (ওয়াইল্ড টারমারিক) রূপচর্চা পাউডার",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 420,
    unit: "80g Glass Jar",
    moisture: "2.8%",
    bioactive: "99.6%",
    batch: "NB-874",
    reserved: 98,
    rating: 5.0,
    origin: "Sylhet Rainforest Foothills",
    origin_bn: "সিলেট রেইনফরেস্ট ফুটহিলস",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Non-staining aromatic Curcuma aromatica for glowing skin, acne removal, and hyperpigmentation reduction.",
    orac: "98,000 umol TE/100g",
    lab_cert: "Non-Staining Certified | 100% Raw"
  },
  {
    id: 75,
    name_en: "Pure Multani Mitti (Fuller's Earth)",
    name_bn: "খাঁটি মুলতানি মাটি আল্ট্রা-রিফাইন্ড",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 240,
    unit: "200g Jar",
    moisture: "1.9%",
    bioactive: "99.0%",
    batch: "NB-875",
    reserved: 91,
    rating: 4.9,
    origin: "Natural Clay Deposits",
    origin_bn: "প্রাকৃতিক ক্লে মাইন",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Micro-sieved volcanic clay that vacuums deep pore sebum, pollution particles, and blackheads.",
    orac: "Mineral Adsorption: High",
    lab_cert: "Heavy Metals: 0.00ppm | Sieved 300 Mesh"
  },
  {
    id: 76,
    name_en: "Solar-Dried Rose Petal Glow Dust",
    name_bn: "গোলাপ পাপড়ি উজ্জ্বলতা ফেসমাস্ক পাউডার",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 450,
    unit: "80g Jar",
    moisture: "2.6%",
    bioactive: "99.2%",
    batch: "NB-876",
    reserved: 94,
    rating: 5.0,
    origin: "Savar Rose Village (Golap Gram)",
    origin_bn: "সাভার গোলাপ গ্রাম",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Organically grown Damask rose petals dried at 32°C to lock natural rose geraniol oils.",
    orac: "42,000 umol TE/100g",
    lab_cert: "Pesticides: 0.00% | 100% Edible-Grade"
  },
  {
    id: 77,
    name_en: "Organic Neem Leaf Micro-Dust",
    name_bn: "অর্গানিক নিম পাতা মাইক্রো-ডাস্ট",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 260,
    unit: "100g Jar",
    moisture: "2.9%",
    bioactive: "98.7%",
    batch: "NB-877",
    reserved: 88,
    rating: 4.8,
    origin: "Rajshahi Neem Belt",
    origin_bn: "রাজশাহী নিম জোন",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Potent antibacterial azadirachtin for active acne spot treatment and scalp dandruff detox.",
    orac: "26,000 umol TE/100g",
    lab_cert: "Azadirachtin: 1.2%"
  },
  {
    id: 78,
    name_en: "Solar Orange Peel (Komola) Brightener",
    name_bn: "কমলার খোসা ব্রাইটনিং স্ক্রাব পাউডার",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 290,
    unit: "100g Jar",
    moisture: "3.1%",
    bioactive: "98.1%",
    batch: "NB-878",
    reserved: 89,
    rating: 4.8,
    origin: "Sylhet Orange Orchards",
    origin_bn: "সিলেট কমলা বাগান",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    desc: "Natural d-limonene and AHA fruit acids for gentle skin cell renewal and dark spot reduction.",
    orac: "19,400 umol TE/100g",
    lab_cert: "Citric & Ascorbic Acid Active"
  },
  {
    id: 79,
    name_en: "Pure Red Sandalwood (Rakta Chandan)",
    name_bn: "রক্ত চন্দন প্রিমিয়াম ফেসমাস্ক চূর্ণ",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 680,
    unit: "60g Jar",
    moisture: "2.4%",
    bioactive: "99.4%",
    batch: "NB-879",
    reserved: 96,
    rating: 5.0,
    origin: "Chittagong Reserve",
    origin_bn: "চট্টগ্রাম চন্দন রিজার্ভ",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    desc: "Cools skin inflammation, reduces severe sun tan, and restores porcelain even tone.",
    orac: "38,000 umol TE/100g",
    lab_cert: "Santalin Active: Pure"
  },
  {
    id: 80,
    name_en: "Bhringraj (Kesharaj) Hair Elixir",
    name_bn: "ভৃঙ্গরাজ (কালোকেশী) চুল ঘন করার চূর্ণ",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 360,
    unit: "100g Jar",
    moisture: "3.0%",
    bioactive: "98.5%",
    batch: "NB-880",
    reserved: 93,
    rating: 4.9,
    origin: "Gazipur Organic Nursery",
    origin_bn: "গাজীপুর ভেষজ নার্সারি",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "The king of hair herbs in Ayurveda; prevents premature greying and stimulates dormant hair follicles.",
    orac: "24,800 umol TE/100g",
    lab_cert: "Wedelolactone: 1.6%"
  },
  {
    id: 81,
    name_en: "Shikakai Pod Hair Cleanser",
    name_bn: "শিকাকাই ফল প্রাকৃতিক শ্যাম্পু চূর্ণ",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 280,
    unit: "150g Pack",
    moisture: "3.5%",
    bioactive: "97.2%",
    batch: "NB-881",
    reserved: 85,
    rating: 4.7,
    origin: "Hill Forests",
    origin_bn: "পাহাড়ি বনাঞ্চল",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Natural botanical saponins create mild pH 5.5 lather without stripping natural hair sebum.",
    orac: "11,200 umol TE/100g",
    lab_cert: "Natural Saponins: 18%"
  },
  {
    id: 82,
    name_en: "Wild Amla (Indian Gooseberry) Dust",
    name_bn: "বুনো আমলকী ফল রূপচর্চা পাউডার",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 320,
    unit: "120g Jar",
    moisture: "3.2%",
    bioactive: "98.9%",
    batch: "NB-882",
    reserved: 90,
    rating: 4.9,
    origin: "Bandarban Mountain Amla",
    origin_bn: "বান্দরবান আমলকী বাগান",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Extreme bioflavonoids to strengthen hair roots and clarify acne-prone skin.",
    orac: "48,500 umol TE/100g",
    lab_cert: "Tannoids: 28%"
  },
  {
    id: 83,
    name_en: "Kaolin Arctic White Clay Dust",
    name_bn: "আর্কটিক হোয়াইট কেওলিন ক্লে",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 290,
    unit: "150g Jar",
    moisture: "1.8%",
    bioactive: "99.1%",
    batch: "NB-883",
    reserved: 84,
    rating: 4.8,
    origin: "Netrokona Bijoypur White Clay Mines",
    origin_bn: "নেত্রকোণা বিজয়পুর সাদা মাটি",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Gentlest mineral clay for sensitive skin, absorbs excess shine while preserving moisture barrier.",
    orac: "Silicate Purity: 99.4%",
    lab_cert: "Sterilized | Cosmetic Grade"
  },
  {
    id: 84,
    name_en: "Bamboo Activated Charcoal 500 Mesh",
    name_bn: "অ্যাক্টিভেটেড বাঁশ কাঠকয়লা পাউডার",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 380,
    unit: "80g Jar",
    moisture: "1.5%",
    bioactive: "99.8%",
    batch: "NB-884",
    reserved: 95,
    rating: 4.9,
    origin: "Bandarban Eco-Kilns",
    origin_bn: "বান্দরবান ইকো-কিলন",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Steam activated at 900°C with 1800 m2/g adsorption surface for teeth whitening & pore detox.",
    orac: "Surface Area: 1850 m2/g",
    lab_cert: "Food & Cosmetic Grade"
  },
  {
    id: 85,
    name_en: "French Green Illite Clay",
    name_bn: "ফ্রেঞ্চ গ্রিন ইলাইট ক্লে ডাস্ট",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 490,
    unit: "100g Jar",
    moisture: "2.0%",
    bioactive: "99.0%",
    batch: "NB-885",
    reserved: 87,
    rating: 4.8,
    origin: "Mineral Valley Deposits",
    origin_bn: "মিনারেল ভ্যালি",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Rich in decomposed plant chlorophyll and trace minerals for intense clarifying masks.",
    orac: "Detox Rating: Supreme",
    lab_cert: "Heavy Metals: Pass"
  },
  {
    id: 86,
    name_en: "Methi (Fenugreek) Hair Softener",
    name_bn: "মেথি বীজ হেয়ার কন্ডিশনিং চূর্ণ",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 240,
    unit: "150g Jar",
    moisture: "3.4%",
    bioactive: "97.5%",
    batch: "NB-886",
    reserved: 83,
    rating: 4.7,
    origin: "Rajshahi Seed Farm",
    origin_bn: "রাজশাহী বীজ খামার",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "High plant lecithin binds to hair shafts giving mirror-like gloss and bounce.",
    orac: "11,200 umol TE/100g",
    lab_cert: "Natural Plant Lecithin"
  },
  {
    id: 87,
    name_en: "Brahmi-Amla Scalp Revitalizer",
    name_bn: "ব্রাহ্মী-আমলকী স্ক্যাল্প মাস্ক",
    category: "natural_cosmetics",
    category_name_bn: "প্রাকৃতিক রূপচর্চা",
    price: 420,
    unit: "120g Jar",
    moisture: "3.1%",
    bioactive: "98.7%",
    batch: "NB-87",
    reserved: 91,
    rating: 4.9,
    origin: "Synergy Herbal Gardens",
    origin_bn: "সিনার্জি হার্বাল গার্ডেন",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Dual herbal harmony to relax cranial tension and nourish root melanin pigments.",
    orac: "34,000 umol TE/100g",
    lab_cert: "100% Herbal Blend"
  },

  // 7. Kitchen Blends (13 products)
  {
    id: 88,
    name_en: "Artisan Panch Phoron Pure Grind",
    name_bn: "আর্টিসান খাঁটি পাঁচফোড়ন চূর্ণ",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 280,
    unit: "120g Glass Jar",
    moisture: "3.0%",
    bioactive: "99.1%",
    batch: "NB-888",
    reserved: 97,
    rating: 5.0,
    origin: "Traditional Heritage Mix",
    origin_bn: "ঐতিহ্যবাহী পঞ্চবীজ মিশ্রণ",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Heirloom ratio of Kalijira, Radhuni, Fenugreek, Cumin, and Fennel seeds, dry roasted and coarsely ground.",
    orac: "38,500 umol TE/100g",
    lab_cert: "Aromatic Volatiles: 3.8% | Zero Dust Filler"
  },
  {
    id: 89,
    name_en: "Luxury Reserve Shahi Garam Masala",
    name_bn: "শাহী গরম মশলা লাক্সারি রিজার্ভ",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 540,
    unit: "100g Glass Jar",
    moisture: "2.5%",
    bioactive: "99.5%",
    batch: "NB-889",
    reserved: 99,
    rating: 5.0,
    origin: "Royal Spicery Masterblend",
    origin_bn: "রয়্যাল স্পাইস ব্লেন্ড",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "14 aristocratic whole spices: green cardamom, mace, cinnamon quills, cloves, star anise, and saffron strands.",
    orac: "185,000 umol TE/100g",
    lab_cert: "Essential Oils: 5.2% | Authentic Shahi Blend"
  },
  {
    id: 90,
    name_en: "Pabna Shorshe (Mustard) Pure Powder",
    name_bn: "পাবনার ঝাঁঝালো সরিষা গুঁড়া",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 240,
    unit: "150g Jar",
    moisture: "3.2%",
    bioactive: "98.6%",
    batch: "NB-890",
    reserved: 94,
    rating: 4.9,
    origin: "Pabna Mustard Fields",
    origin_bn: "পাবনা সরিষা খেত",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Yellow and brown mustard blend cold-milled to retain fiery sinigrin enzyme for Ilish and Bhorta.",
    orac: "14,200 umol TE/100g",
    lab_cert: "Allyl Isothiocyanate Active"
  },
  {
    id: 91,
    name_en: "Roasted Cumin (Bhaja Jeera) Velvet",
    name_bn: "ভাজা জিরার ভেলভেট গুঁড়া",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 360,
    unit: "120g Jar",
    moisture: "2.6%",
    bioactive: "98.9%",
    batch: "NB-891",
    reserved: 92,
    rating: 4.9,
    origin: "Barind Plateau",
    origin_bn: "বরেন্দ্র সমভূমি",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Slow roasted in clay vessels before micro-milling. Perfect finishing touch for yogurts, curries, and dal.",
    orac: "48,000 umol TE/100g",
    lab_cert: "Cuminaldehyde: 3.2%"
  },
  {
    id: 92,
    name_en: "Kacchi Dum Biryani Royal Spice",
    name_bn: "কাচ্চি বিরিয়ানি স্পেশাল দম মশলা",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 490,
    unit: "100g Jar",
    moisture: "2.7%",
    bioactive: "99.2%",
    batch: "NB-892",
    reserved: 95,
    rating: 5.0,
    origin: "Old Dhaka Heritage Recipe",
    origin_bn: "পুরান ঢাকা ঐতিহ্যবাহী রেসিপি",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Nutmeg, mace, shahi jeera, rose petals, and allspice balanced for authentic aroma.",
    orac: "92,000 umol TE/100g",
    lab_cert: "100% Whole Spice Ground"
  },
  {
    id: 93,
    name_en: "Chaat Masala Tangy Sun-Dust",
    name_bn: "চাট মশলা টাঙ্গি সোলার ডাস্ট",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 290,
    unit: "120g Jar",
    moisture: "2.9%",
    bioactive: "98.0%",
    batch: "NB-893",
    reserved: 88,
    rating: 4.8,
    origin: "Artisan Kitchen Lab",
    origin_bn: "আর্টিসান কিচেন ল্যাব",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    desc: "Dried green mango (Amchur), black salt, cumin, and mint for salads, snacks, and fruits.",
    orac: "24,000 umol TE/100g",
    lab_cert: "Preservatives: 0.00%"
  },
  {
    id: 94,
    name_en: "Kasuri Methi Sun-Dried Whole Flakes",
    name_bn: "কাসৌরি মেথি রোদে শুকানো পাতা",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 260,
    unit: "60g Box",
    moisture: "3.0%",
    bioactive: "98.4%",
    batch: "NB-894",
    reserved: 86,
    rating: 4.8,
    origin: "Rajshahi Aromatic Farms",
    origin_bn: "রাজশাহী মেথি খেত",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    desc: "Intensely scented sun-cured fenugreek leaves that elevate butter chicken and dal makhani.",
    orac: "18,600 umol TE/100g",
    lab_cert: "Aroma Locked: 100%"
  },
  {
    id: 95,
    name_en: "Smokey Tandoori Clay-Oven Rub",
    name_bn: "স্মোকি তন্দুরি কাবাব মশলা",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 340,
    unit: "120g Jar",
    moisture: "3.1%",
    bioactive: "98.1%",
    batch: "NB-895",
    reserved: 90,
    rating: 4.9,
    origin: "Barbecue Masters Atelier",
    origin_bn: "কাবাব মাস্টার্স ব্লেন্ড",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    desc: "Paprika, garlic, ginger, smoked cardamom, and Kashmiri chili without artificial red dyes.",
    orac: "31,000 umol TE/100g",
    lab_cert: "No Artificial Food Color"
  },
  {
    id: 96,
    name_en: "Coastal Fish Curry (Machher Jhol) Blend",
    name_bn: "উপকূলীয় মাছের ঝোল স্পেশাল মশলা",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 320,
    unit: "150g Jar",
    moisture: "3.3%",
    bioactive: "97.9%",
    batch: "NB-896",
    reserved: 87,
    rating: 4.8,
    origin: "Chittagong Coastal Kitchens",
    origin_bn: "চট্টগ্রাম কোস্টাল কিচেন",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    desc: "Turmeric, cumin, roasted coriander, fenugreek, and black pepper tailored for freshwater & marine fish.",
    orac: "29,400 umol TE/100g",
    lab_cert: "Balanced Coastal Ratio"
  },
  {
    id: 97,
    name_en: "Haleem 15-Pulse & Grain Mastermix",
    name_bn: "হালিম ১৫-শস্য ও স্পাইস মাস্টারমিক্স",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 420,
    unit: "300g Pack",
    moisture: "3.7%",
    bioactive: "97.5%",
    batch: "NB-897",
    reserved: 91,
    rating: 4.9,
    origin: "Heritage Grain Clusters",
    origin_bn: "ঐতিহ্যবাহী শস্য ভাণ্ডার",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
    desc: "Coarsely ground lentils, broken wheat, barley, aromatic rice, and 12-spice digestive blend.",
    orac: "16,000 umol TE/100g",
    lab_cert: "Pure Multi-Grain | High Protein"
  },
  {
    id: 98,
    name_en: "Bengali Posto (Poppy Seed) Pure Dust",
    name_bn: "খাঁটি পোস্তদানা পাউডার (পোস্ত বাটা ব্লেন্ড)",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 690,
    unit: "100g Glass Jar",
    moisture: "2.3%",
    bioactive: "99.4%",
    batch: "NB-898",
    reserved: 96,
    rating: 5.0,
    origin: "Authentic Poppy Reserve",
    origin_bn: "খাঁটি পোস্তদানা রিজার্ভ",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "White poppy seeds milled under cryo-temperatures for authentic Alu-Posto creaminess.",
    orac: "28,200 umol TE/100g",
    lab_cert: "Purity Tested | 100% Unadulterated"
  },
  {
    id: 99,
    name_en: "Radhuni (Wild Celery Seed) Ground",
    name_bn: "খাঁটি রাঁধুনি বীজ চূর্ণ",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 310,
    unit: "80g Jar",
    moisture: "2.8%",
    bioactive: "98.8%",
    batch: "NB-899",
    reserved: 89,
    rating: 4.8,
    origin: "Kushtia Radhuni Farms",
    origin_bn: "কুষ্টিয়া রাঁধুনি খেত",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    desc: "Intensely pungent, unique Bengal spice that defines classic Shukto and aromatic Lentils.",
    orac: "36,400 umol TE/100g",
    lab_cert: "Aromatic Essential Oils: 4.1%"
  },
  {
    id: 100,
    name_en: "Sultani Chai Masala Herbal Infusion",
    name_bn: "সুলতানি মশলা চা হার্বাল মিশ্রণ",
    category: "kitchen_blends",
    category_name_bn: "স্পেশাল কিচেন ব্লেন্ড",
    price: 390,
    unit: "100g Jar",
    moisture: "2.5%",
    bioactive: "99.3%",
    batch: "NB-900",
    reserved: 98,
    rating: 5.0,
    origin: "Royal Tea Atelier",
    origin_bn: "রয়্যাল টি ব্লেন্ডারি",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Cardamom, dried ginger, cinnamon, clove, black pepper, nutmeg, and rose petals for invigorating immunity tea.",
    orac: "64,000 umol TE/100g",
    lab_cert: "100% Organic Botanical Spices"
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart from LocalStorage
  const savedCart = localStorage.getItem('nobori_cart');
  if (savedCart) {
    try { state.cart = JSON.parse(savedCart); } catch (e) {}
  }

  initLanguage();
  initHeaderScroll();
  initHeroSlider();
  initCategoryTabs();
  initSortFilter();
  initSearch();
  initDrawer();
  initCheckout();
  renderProducts();
  updateCartBadge();
});

// 1. Language Toggle & Initialization
function initLanguage() {
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      state.language = state.language === 'en' ? 'bn' : 'en';
      langBtn.innerHTML = state.language === 'en' ? '🌐 বাংলা' : '🌐 English';
      applyLanguageTexts();
      renderCategoryTabs();
      renderProducts();
      updateDrawerUI();
    });
  }
  applyLanguageTexts();
}

function applyLanguageTexts() {
  const dict = i18n[state.language];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const searchInput = document.getElementById('liveSearchInput');
  if (searchInput) {
    searchInput.placeholder = dict.searchPlaceholder;
  }
}

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.header-glass');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 3. Hero Slider Logic
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    state.activeSlide = index;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const nextIdx = (state.activeSlide - 1 + slides.length) % slides.length;
      showSlide(nextIdx);
    });
    nextBtn.addEventListener('click', () => {
      const nextIdx = (state.activeSlide + 1) % slides.length;
      showSlide(nextIdx);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  // Auto slide every 6 seconds
  setInterval(() => {
    const nextIdx = (state.activeSlide + 1) % slides.length;
    showSlide(nextIdx);
  }, 6500);
}

// 4. Category Tabs
function initCategoryTabs() {
  renderCategoryTabs();
}

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabsScroll');
  if (!container) return;

  const isBn = state.language === 'bn';
  container.innerHTML = categories.map(cat => {
    const count = cat.id === 'all' 
      ? productsData.length 
      : productsData.filter(p => p.category === cat.id).length;
    const name = isBn ? cat.name_bn : cat.name_en;
    const activeClass = state.activeCategory === cat.id ? 'active' : '';

    return `
      <button class="category-tab-btn ${activeClass}" onclick="setCategory('${cat.id}')">
        <i class="fas ${cat.icon}"></i>
        <span>${name}</span>
        <span class="category-count">${count}</span>
      </button>
    `;
  }).join('');
}

window.setCategory = function(catId) {
  state.activeCategory = catId;
  renderCategoryTabs();
  renderProducts();
};

// 5. Sort & Filter Handler
function initSortFilter() {
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }
}

// 6. Product Rendering with Batch Timeline Component
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const isBn = state.language === 'bn';
  let list = [...productsData];

  // Category filter
  if (state.activeCategory !== 'all') {
    list = list.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name_en.toLowerCase().includes(q) || 
      p.name_bn.includes(q) ||
      p.batch.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.origin_bn.includes(q)
    );
  }

  // Sort
  if (state.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'bioactive') {
    list.sort((a, b) => parseFloat(b.bioactive) - parseFloat(a.bioactive));
  } else if (state.sortBy === 'reserved') {
    list.sort((a, b) => b.reserved - a.reserved);
  }

  const moistureLabel = isBn ? 'আর্দ্রতা' : 'Moisture';
  const preOrderLabel = isBn ? 'স্লট প্রি-অর্ডার' : 'Pre-Order Slot';
  const inspectLabel = isBn ? 'ল্যাব তথ্য' : 'Lab Data';
  const reservedText = isBn ? 'বরাদ্দ সংরক্ষিত' : 'Reserved';

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fas fa-seedling" style="font-size: 3rem; color: var(--terracotta-gold); margin-bottom: 1rem;"></i>
        <h3>${isBn ? 'কোনো পণ্য পাওয়া যায়নি' : 'No organic botanicals found'}</h3>
        <p>${isBn ? 'অনুসন্ধানের শব্দ পরিবর্তন করে চেষ্টা করুন।' : 'Try adjusting your search or category filter.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => {
    const title = isBn ? item.name_bn : item.name_en;
    const origin = isBn ? item.origin_bn : item.origin;
    const catName = isBn ? item.category_name_bn : categories.find(c => c.id === item.category)?.name_en || 'Organic';

    return `
      <div class="product-card" id="product-${item.id}">
        <div class="product-media-wrap">
          <img src="${item.image}" alt="${title}" class="product-image" loading="lazy" />
          <div class="product-badge-float">
            <i class="fas fa-shield-alt"></i>
            <span>${item.bioactive} ${isBn ? 'বিশুদ্ধতা' : 'Bio-Active'}</span>
          </div>
          <div class="product-moisture-tag">
            <i class="fas fa-tint"></i> ${moistureLabel}: ${item.moisture}
          </div>
        </div>

        <div class="product-body">
          <span class="product-category-sub">${catName}</span>
          <h4 class="product-title">${title}</h4>
          <span class="product-origin">
            <i class="fas fa-map-marker-alt"></i> ${origin}
          </span>

          <!-- Interactive Batch Timeline Mini-Widget -->
          <div class="product-batch-timeline">
            <div class="mini-timeline-header">
              <span class="mini-timeline-batch">Batch ${item.batch}</span>
              <span class="mini-timeline-alloc">${item.reserved}% ${reservedText}</span>
            </div>
            <div class="mini-timeline-progress">
              <div class="mini-timeline-fill" style="width: ${item.reserved}%;"></div>
            </div>
            <div class="mini-stage-note">
              <i class="fas fa-sun" style="color: var(--terracotta-gold);"></i>
              <span>${isBn ? 'সৌর টানেল ড্রায়ারে প্রস্তুত' : 'Solar Tunnel Dehydrated'}</span>
            </div>
          </div>

          <!-- Price & Action Row -->
          <div class="product-footer-row">
            <div class="product-price-block">
              <span class="product-price-curr">৳${item.price}</span>
              <span class="product-unit-wt">${item.unit}</span>
            </div>
            <div class="product-actions-group">
              <button class="btn-inspect-modal" onclick="openProductModal(${item.id})" title="${inspectLabel}">
                <i class="fas fa-microscope"></i>
              </button>
              <button class="btn-preorder-card" onclick="addToPreOrder(${item.id})">
                <i class="fas fa-lock"></i>
                <span>${preOrderLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 7. Interactive Product Inspector Modal with Lab Certificate
window.openProductModal = function(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const isBn = state.language === 'bn';
  const modal = document.getElementById('productInspectorModal');
  const body = document.getElementById('modalInspectorBody');
  if (!modal || !body) return;

  const title = isBn ? item.name_bn : item.name_en;
  const origin = isBn ? item.origin_bn : item.origin;

  body.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-media-col">
        <img src="${item.image}" alt="${title}" class="modal-main-img" />
        <div class="modal-lab-cert-box">
          <div class="lab-seal-icon"><i class="fas fa-certificate"></i></div>
          <div class="lab-seal-text">
            <h5>${isBn ? 'অনুমোদিত ল্যাব টেস্ট সার্টিফিকেট' : 'Certified Lab Purity Report'}</h5>
            <p>${item.lab_cert}</p>
          </div>
        </div>
      </div>

      <div class="modal-info-col">
        <div class="modal-meta-row">
          <span class="modal-chip">Batch ${item.batch}</span>
          <span class="modal-chip">${item.reserved}% Reserved</span>
          <span class="modal-chip" style="color: var(--forest-green); font-weight: 700;">${item.bioactive} Active</span>
        </div>

        <h3>${title}</h3>
        <p class="modal-desc">${item.desc}</p>

        <!-- Scientific Factsheet Table -->
        <table class="factsheet-table">
          <tr>
            <td>${isBn ? 'উৎপাদন স্থান (Farm Origin)' : 'Farm Cluster'}</td>
            <td>${origin}</td>
          </tr>
          <tr>
            <td>${isBn ? 'সৌর আর্দ্রতা মাত্রা (Moisture)' : 'Solar Moisture Content'}</td>
            <td>${item.moisture} (Below 4.0% Standard)</td>
          </tr>
          <tr>
            <td>${isBn ? 'অ্যান্টিঅক্সিডেন্ট ক্যাপাসিটি (ORAC)' : 'Antioxidant ORAC Rating'}</td>
            <td>${item.orac}</td>
          </tr>
          <tr>
            <td>${isBn ? 'প্যাকেজিং স্ট্যান্ডার্ড' : 'Packaging Standard'}</td>
            <td>${item.unit} (Food-grade, Nitrogen Sealed)</td>
          </tr>
          <tr>
            <td>${isBn ? 'পরবর্তী ব্যাচ রিলিজ' : 'Estimated Dispatch'}</td>
            <td>${state.batchQueue.dispatchDate}</td>
          </tr>
        </table>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.5rem;">
          <div>
            <span style="font-size: 1.6rem; font-weight: 800; color: var(--forest-green);">৳${item.price}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">${isBn ? 'ভ্যাট ও সৌর-প্যাক অন্তর্ভুক্ত' : 'Incl. Solar-Pack VAT'}</span>
          </div>
          <button class="btn-primary-terracotta" onclick="addToPreOrder(${item.id}); closeModal();">
            <i class="fas fa-lock"></i>
            <span>${isBn ? 'এই ব্যাচ প্রি-অর্ডার করুন' : 'Reserve This Batch Slot'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
};

window.closeModal = function() {
  const modal = document.getElementById('productInspectorModal');
  if (modal) modal.classList.remove('active');
};

// 8. Predictive Live Search
function initSearch() {
  const searchToggle = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModalOverlay');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('liveSearchInput');
  const resultsTray = document.getElementById('searchResultsTray');
  const tagsContainer = document.getElementById('searchQuickTags');

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchInput.focus();
      renderQuickTags();
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  // Close on backdrop click
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) searchModal.classList.remove('active');
    });
  }

  function renderQuickTags() {
    if (!tagsContainer) return;
    const tags = i18n[state.language].quickSearchTags;
    tagsContainer.innerHTML = tags.map(t => `
      <span class="search-quick-tag" onclick="fillSearch('${t}')">${t}</span>
    `).join('');
  }

  window.fillSearch = function(tag) {
    if (!searchInput) return;
    searchInput.value = tag;
    handleSearchInput(tag);
  };

  if (searchInput && resultsTray) {
    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  function handleSearchInput(query) {
    const q = query.trim().toLowerCase();
    const isBn = state.language === 'bn';

    if (!q) {
      resultsTray.innerHTML = `<p style="text-align: center; color: var(--text-light); padding: 2rem;">${isBn ? 'অনুসন্ধান করতে টাইপ করুন...' : 'Type to search products & batches...'}</p>`;
      return;
    }

    const matches = productsData.filter(p => 
      p.name_en.toLowerCase().includes(q) || 
      p.name_bn.includes(q) ||
      p.batch.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      resultsTray.innerHTML = `<p style="text-align: center; color: var(--text-light); padding: 2rem;">${isBn ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No matching botanicals found.'}</p>`;
      return;
    }

    resultsTray.innerHTML = matches.map(item => {
      const title = isBn ? item.name_bn : item.name_en;
      return `
        <div class="search-result-item" onclick="openProductModal(${item.id}); document.getElementById('searchModalOverlay').classList.remove('active');">
          <img src="${item.image}" alt="${title}" class="search-thumb" />
          <div class="search-item-info">
            <h5 class="search-item-title">${title}</h5>
            <span class="search-item-meta">
              <span>Batch: ${item.batch}</span> • <span>${item.bioactive} Purity</span>
            </span>
          </div>
          <span class="search-item-price">৳${item.price}</span>
        </div>
      `;
    }).join('');
  }
}

// 9. Glass Checkout & Pre-Order Drawer Logic
function initDrawer() {
  const drawerBtn = document.getElementById('cartDrawerOpenBtn');
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  const drawerClose = document.getElementById('drawerCloseBtn');

  if (drawerBtn && drawerOverlay) {
    drawerBtn.addEventListener('click', () => {
      drawerOverlay.classList.add('active');
      updateDrawerUI();
    });
  }

  if (drawerClose && drawerOverlay) {
    drawerClose.addEventListener('click', () => {
      drawerOverlay.classList.remove('active');
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) drawerOverlay.classList.remove('active');
    });
  }
}

window.addToPreOrder = function(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const existing = state.cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name_en: item.name_en,
      name_bn: item.name_bn,
      price: item.price,
      unit: item.unit,
      batch: item.batch,
      image: item.image,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`${state.language === 'bn' ? 'স্লট সংরক্ষিত হয়েছে!' : 'Batch slot reserved!'} 🌿`);

  // Open drawer automatically
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  if (drawerOverlay) {
    drawerOverlay.classList.add('active');
    updateDrawerUI();
  }
};

window.updateCartQty = function(productId, delta) {
  const item = state.cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.id !== productId);
  }

  saveCart();
  updateCartBadge();
  updateDrawerUI();
};

function saveCart() {
  localStorage.setItem('nobori_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge-count');
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badges.forEach(b => {
    b.textContent = totalCount;
  });
}

function updateDrawerUI() {
  const listContainer = document.getElementById('drawerItemsList');
  const subtotalEl = document.getElementById('drawerSubtotalVal');
  const totalEl = document.getElementById('drawerTotalVal');
  if (!listContainer) return;

  const isBn = state.language === 'bn';
  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const delivery = subtotal > 0 ? 80 : 0;
  const total = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = `৳${subtotal}`;
  if (totalEl) totalEl.textContent = `৳${total}`;

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div class="drawer-empty-state">
        <i class="fas fa-leaf"></i>
        <h4>${isBn ? 'আপনার ঝুড়ি খালি' : 'No Batch Reserved'}</h4>
        <p>${i18n[state.language].emptyCart}</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = state.cart.map(item => {
    const title = isBn ? item.name_bn : item.name_en;
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${title}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <h5 class="cart-item-name">${title}</h5>
          <span class="cart-item-batch">Batch: ${item.batch}</span>
          <span class="cart-item-price">৳${item.price * item.qty}</span>
        </div>
        <div class="cart-qty-ctrls">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700; padding: 0 4px;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');
}

// 10. Checkout Flow & Modal
function initCheckout() {
  const openCheckoutBtn = document.getElementById('openCheckoutModalBtn');
  const checkoutModal = document.getElementById('checkoutModalOverlay');
  const checkoutClose = document.getElementById('checkoutCloseBtn');
  const checkoutForm = document.getElementById('noboriPreOrderForm');

  if (openCheckoutBtn && checkoutModal) {
    openCheckoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast(state.language === 'bn' ? 'অনুগ্রহ করে প্রথমে পণ্য যুক্ত করুন' : 'Please add items before checkout');
        return;
      }
      document.getElementById('cartDrawerOverlay').classList.remove('active');
      checkoutModal.classList.add('active');
    });
  }

  if (checkoutClose && checkoutModal) {
    checkoutClose.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
    });
  }

  // Payment Radio selection
  document.querySelectorAll('.pay-radio-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.pay-radio-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${state.language === 'bn' ? 'ব্যাচ স্লট বুকিং হচ্ছে...' : 'Locking Batch Reservation...'}`;
      submitBtn.disabled = true;

      const customerName = document.getElementById('custName')?.value || 'Valued Patron';
      const customerPhone = document.getElementById('custPhone')?.value || '';
      const customerAddress = document.getElementById('custAddress')?.value || 'Dhaka';
      const orderId = `NB-${Date.now().toString().slice(-6)}`;

      // Post to Vercel Leads Serverless API
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: customerName,
            phone: customerPhone,
            address: customerAddress,
            orderId: orderId,
            items: state.cart,
            batch: state.batchQueue.batchNumber,
            scope: "Nobori Agro Batch Pre-Order Reservation"
          })
        });
      } catch (err) {
        console.log("Offline mode fallback sync");
      }

      // Show Success Modal
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        document.getElementById('checkoutModalOverlay').classList.remove('active');
        showOrderSuccess(orderId, customerName, customerPhone);

        // Clear cart
        state.cart = [];
        saveCart();
        updateCartBadge();
        updateDrawerUI();
      }, 1200);
    });
  }
}

function showOrderSuccess(orderId, name, phone) {
  const modal = document.getElementById('productInspectorModal');
  const body = document.getElementById('modalInspectorBody');
  if (!modal || !body) return;

  const isBn = state.language === 'bn';

  body.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1.5rem;">
      <div style="width: 72px; height: 72px; background: var(--forest-green-light); color: var(--forest-green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem;">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3 style="color: var(--forest-green); font-size: 1.85rem; margin-bottom: 0.5rem;">
        ${isBn ? 'ব্যাচ প্রি-অর্ডার নিশ্চিত হয়েছে!' : 'Batch Reservation Confirmed!'}
      </h3>
      <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem; font-size: 0.95rem;">
        ${isBn 
          ? `ধন্যবাদ <strong>${name}</strong>। আপনার ব্যাচ স্লট <strong>#${orderId}</strong> সংরক্ষিত হয়েছে। নাইট্রোজেন প্যাকেজিং সম্পন্ন হলে <strong>${phone}</strong> নম্বরে নোটিফিকেশন পাঠানো হবে।`
          : `Thank you <strong>${name}</strong>. Your batch slot <strong>#${orderId}</strong> has been secured. You will receive real-time SMS updates on <strong>${phone}</strong>.`
        }
      </p>

      <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 1.25rem; max-width: 420px; margin: 0 auto 2rem; text-align: left; border: 1px dashed var(--terracotta-gold);">
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
          <span>Batch Reference:</span>
          <strong>${state.batchQueue.batchNumber}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
          <span>Solar Processing:</span>
          <strong style="color: var(--terracotta-gold);">Stage 2 (38°C Low-Temp)</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
          <span>Estimated Dispatch:</span>
          <strong>${state.batchQueue.dispatchDate}</strong>
        </div>
      </div>

      <button class="btn-primary-terracotta" onclick="closeModal()">
        <i class="fas fa-arrow-left"></i>
        <span>${isBn ? 'ওয়েবসাইটে ফিরে যান' : 'Back to Pure Catalog'}</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// 11. Toast Utility
function showToast(message) {
  let toast = document.getElementById('noboriToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'noboriToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '2rem';
    toast.style.right = '2rem';
    toast.style.background = 'var(--forest-green)';
    toast.style.color = '#FFF';
    toast.style.padding = '0.75rem 1.4rem';
    toast.style.borderRadius = 'var(--radius-pill)';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '700';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    toast.style.zIndex = '999';
    toast.style.transition = 'all 300ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 2800);
}
