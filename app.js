/* ==========================================================================
   NOBORI AGRO — Fresh Poultry & Gourmet Meat Store Engine
   ========================================================================== */

'use strict';

/* ==========================================================================
   19 OFFICIAL NOBORI AGRO PRODUCTS
   ========================================================================== */
const PRODUCTS = [
  {
    "id": 1,
    "name": "Bombay Sweets Chanachur - Classic Spicy (300g)",
    "nameBn": "বোম্বে সুইটস চানাচুর (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 85,
    "unit": "300g pack",
    "img": "chanachur.jpg",
    "badge": "Top Snack",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Crispy, crunchy spicy traditional Chanachur with fried peanuts, lentils, and crispy sev noodles."
  },
  {
    "id": 2,
    "name": "Pran Special Jhal Chanachur (300g)",
    "nameBn": "প্রাণ স্পেশাল ঝাল চানাচুর (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 80,
    "unit": "300g pack",
    "img": "chanachur.jpg",
    "badge": "Extra Jhal",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Spicy mustard oil infused chanachur with roasted peanuts and hot chili flakes."
  },
  {
    "id": 3,
    "name": "Ruchi BBQ Chanachur (250g)",
    "nameBn": "রুচি বিবিকিউ চানাচুর (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 75,
    "unit": "250g pack",
    "img": "chanachur.jpg",
    "badge": "Smoky Flavor",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Smoky BBQ flavored modern chanachur snack with zesty seasoning."
  },
  {
    "id": 4,
    "name": "Ruchi Hot Chanachur (250g)",
    "nameBn": "রুচি হট চানাচুর (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 75,
    "unit": "250g pack",
    "img": "chanachur.jpg",
    "badge": "Hot Crunch",
    "badgeType": "",
    "halal": true,
    "desc": "Fiery hot spicy chanachur blend for tea-time and afternoon munching."
  },
  {
    "id": 5,
    "name": "Radhuni Special Chanachur (300g)",
    "nameBn": "রাঁধুনী স্পেশাল চানাচুর (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 85,
    "unit": "300g pack",
    "img": "chanachur.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "halal": true,
    "desc": "Pure mustard oil aroma and crunchy lentil nuggets with fried cashews and peanuts."
  },
  {
    "id": 6,
    "name": "Pran Tok-Jhal-Misti Chanachur (300g)",
    "nameBn": "প্রাণ টক-ঝাল-মিষ্টি চানাচুর (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 80,
    "unit": "300g pack",
    "img": "chanachur.jpg",
    "badge": "Sweet & Sour",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Perfect harmony of tangy tamarind, sweet raisins, and spicy crunchy chickpea flour sev."
  },
  {
    "id": 7,
    "name": "Bombay Sweets Alooz Potato Chips (Tomato - 50g)",
    "nameBn": "আলুজ টমেটো পটেটো চিপস (৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 30,
    "unit": "50g pack",
    "img": "potato_chips.jpg",
    "badge": "Kids Favorite",
    "badgeType": "",
    "halal": true,
    "desc": "Crispy golden potato crinkle chips tossed with tangy tomato seasoning."
  },
  {
    "id": 8,
    "name": "Bombay Sweets Potato Crackers (50g)",
    "nameBn": "পটেটো ক্র্যাকার্স (৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 25,
    "unit": "50g pack",
    "img": "potato_chips.jpg",
    "badge": "Classic",
    "badgeType": "",
    "halal": true,
    "desc": "Light, melt-in-the-mouth salted potato cracker rings."
  },
  {
    "id": 9,
    "name": "Sun Chips (Sour Cream & Onion - 75g)",
    "nameBn": "সান চিপস সাওয়ার ক্রিম & অনিয়ন (৭৫ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 45,
    "unit": "75g pack",
    "img": "potato_chips.jpg",
    "badge": "Creamy Onion",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Gourmet wave potato chips seasoned with creamy french sour cream and garden chives."
  },
  {
    "id": 10,
    "name": "Lays Classic Salted Potato Chips (50g)",
    "nameBn": "লেয়স ক্লাসিক সল্টেড চিপস (৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 40,
    "unit": "50g pack",
    "img": "potato_chips.jpg",
    "badge": "Classic Salt",
    "badgeType": "",
    "halal": true,
    "desc": "Pure sliced thin farm potato crisps sprinkled with fine sea salt."
  },
  {
    "id": 11,
    "name": "Kurkure Masala Munch (90g)",
    "nameBn": "কুরকুরে মশলা মাঞ্চ (৯০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 40,
    "unit": "90g pack",
    "img": "nacho_chips.jpg",
    "badge": "Spicy Twist",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Crunchy kurkure puff twists with fiery Indian chatpata masala."
  },
  {
    "id": 12,
    "name": "Doritos Nacho Cheese Tortilla Chips (80g)",
    "nameBn": "ডরিটোস নাচো চিজ চিপস (৮০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 65,
    "unit": "80g pack",
    "img": "nacho_chips.jpg",
    "badge": "Nacho Cheese",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Crunchy triangular corn tortilla chips loaded with melted nacho cheddar flavor."
  },
  {
    "id": 13,
    "name": "Olympic Energy Toast Biscuits (350g)",
    "nameBn": "অলিম্পিক এনার্জি টোস্ট বিস্কুট (৩৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 75,
    "unit": "350g pack",
    "img": "toast_biscuits.jpg",
    "badge": "Tea Companion",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Crisp twice-baked toast biscuits flavored with cardamom and sesame seeds."
  },
  {
    "id": 14,
    "name": "Olympic Dry Cake Rusk (300g)",
    "nameBn": "অলিম্পিক ড্রাই কেক (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 90,
    "unit": "300g box",
    "img": "dry_cake.jpg",
    "badge": "Bakery Special",
    "badgeType": "",
    "halal": true,
    "desc": "Sweet golden crunchy dry cake slices baked with vanilla butter flavor."
  },
  {
    "id": 15,
    "name": "Olympic Nutty Peanut Cookies (300g)",
    "nameBn": "অলিম্পিক নাটি কুকিজ (৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 85,
    "unit": "300g pack",
    "img": "butter_cookies.jpg",
    "badge": "Crunchy Nuts",
    "badgeType": "",
    "halal": true,
    "desc": "Rich bakery cookies packed with roasted chopped peanut chunks."
  },
  {
    "id": 16,
    "name": "Olympic Tip Top Salted Crackers (250g)",
    "nameBn": "টিপ টপ সল্টেড বিস্কুট (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 60,
    "unit": "250g pack",
    "img": "toast_biscuits.jpg",
    "badge": "Crispy Crackers",
    "badgeType": "",
    "halal": true,
    "desc": "Light, airy salted square biscuits perfect for tea-time and cheese dips."
  },
  {
    "id": 17,
    "name": "Danish Lexing Butter Cookies (400g Tin)",
    "nameBn": "ড্যানিশ বাটার কুকিজ টিন (৪০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 420,
    "unit": "400g Tin",
    "img": "butter_cookies.jpg",
    "badge": "Pure Butter",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Assorted Danish butter cookies in a reusable royal blue gift tin."
  },
  {
    "id": 18,
    "name": "Pran Potata Spicy Potato Biscuits (100g)",
    "nameBn": "প্রাণ পটাটা স্পাইসি বিস্কুট (১০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 35,
    "unit": "100g pack",
    "img": "potato_chips.jpg",
    "badge": "Viral Hit",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Ultra-thin, paper-crisp potato crackers sprinkled with fiery spices."
  },
  {
    "id": 19,
    "name": "Britannia Good Day Butter Cookies (200g)",
    "nameBn": "ব্রিটানিয়া গুড ডে বাটার বিস্কুট (২০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 60,
    "unit": "200g pack",
    "img": "butter_cookies.jpg",
    "badge": "Smile Cookie",
    "badgeType": "",
    "halal": true,
    "desc": "Rich, melt-in-the-mouth butter cookies with a signature smile design."
  },
  {
    "id": 20,
    "name": "Oreo Original Vanilla Cream Sandwich (120g)",
    "nameBn": "ওরিও ভ্যানিলা ক্রিম বিস্কুট (১২০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 50,
    "unit": "120g pack",
    "img": "chocolate_biscuits.jpg",
    "badge": "Chocolate Biscuit",
    "badgeType": "",
    "halal": true,
    "desc": "Dark cocoa biscuits filled with sweet vanilla cream. Twist, lick, dunk."
  },
  {
    "id": 21,
    "name": "Crispy Fried Salted Peanuts / Badam (200g)",
    "nameBn": "ভাজা চিনাবাদাম সল্টেড (২০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 60,
    "unit": "200g pack",
    "img": "roasted_peanuts.jpg",
    "badge": "Fresh Roast",
    "badgeType": "",
    "halal": true,
    "desc": "Crispy fried golden peanuts tossed with fine salt for snacking."
  },
  {
    "id": 22,
    "name": "Masala Spiced Roasted Peanuts (200g)",
    "nameBn": "মশলা চিনা বাদাম (২০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 65,
    "unit": "200g pack",
    "img": "roasted_peanuts.jpg",
    "badge": "Chatpata",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Crunchy roasted peanuts coated in tangy chaat masala and chili powder."
  },
  {
    "id": 23,
    "name": "Fried Green Peas / Motor Bhaja (150g)",
    "nameBn": "মটর ভাজা স্পাইসি (১৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 45,
    "unit": "150g pack",
    "img": "fried_peas.jpg",
    "badge": "Super Crunchy",
    "badgeType": "",
    "halal": true,
    "desc": "Deep fried crispy whole green peas dusted with salt and hot spices."
  },
  {
    "id": 24,
    "name": "Spicy Dal Mut / Dal Bhaja (200g)",
    "nameBn": "ডাল ভাজা / ডাল মুট (২০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 50,
    "unit": "200g pack",
    "img": "dal_bhaja.jpg",
    "badge": "Crispy Dal",
    "badgeType": "",
    "halal": true,
    "desc": "Fried crunchy yellow lentils seasoned with black salt and red pepper."
  },
  {
    "id": 25,
    "name": "Traditional Crunchy Crispy Nimki (250g)",
    "nameBn": "মুচমুচে নিমকি (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 60,
    "unit": "250g pack",
    "img": "nimki.jpg",
    "badge": "Home Recipe",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Flaky triangular flour crisps flavored with black cumin seeds (kalo jeere)."
  },
  {
    "id": 26,
    "name": "Sweet & Salty Ghee Khaja (250g)",
    "nameBn": "ঘি ভাজা মিষ্টি খাজা (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 90,
    "unit": "250g pack",
    "img": "nimki.jpg",
    "badge": "Artisanal",
    "badgeType": "",
    "halal": true,
    "desc": "Layered crisp puff pastry dipped in light sugar syrup and ghee."
  },
  {
    "id": 27,
    "name": "Roasted Spiced Kaju Almond Mix (150g)",
    "nameBn": "স্পাইসি কাজু ও কাঠবাদাম মিক্স (১৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 240,
    "unit": "150g jar",
    "img": "roasted_peanuts.jpg",
    "badge": "Premium Nuts",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Gourmet slow-roasted whole cashews and California almonds with pink salt."
  },
  {
    "id": 28,
    "name": "Special Jhal Muri Ready Mix (250g)",
    "nameBn": "ঝাল মুড়ি রেডি মিক্স (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 50,
    "unit": "250g pack",
    "img": "jhal_muri.jpg",
    "badge": "Street Snack",
    "badgeType": "",
    "halal": true,
    "desc": "Puffed rice blended with chanachur, spices, and fried peanuts. Just add oil & onions."
  },
  {
    "id": 29,
    "name": "Special Aromatic Muri / Puffed Rice (500g)",
    "nameBn": "হাতে ভাজা দেশি মুড়ি (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 55,
    "unit": "500g pack",
    "img": "puffed_rice.jpg",
    "badge": "100% Urea Free",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Naturally hand-roasted white puffed rice from country paddy. Chemical-free."
  },
  {
    "id": 30,
    "name": "Chira Bhaja Spiced Crispy Flattened Rice (250g)",
    "nameBn": "মুচমুচে চিড়া ভাজা (২৫০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 50,
    "unit": "250g pack",
    "img": "puffed_rice.jpg",
    "badge": "Crispy Chira",
    "badgeType": "",
    "halal": true,
    "desc": "Deep fried crispy flattened rice tossed with peanuts, curry leaves, and green chili."
  },
  {
    "id": 31,
    "name": "Fresh River Rui Fish (Clean Sliced - 1kg Net)",
    "nameBn": "তাজা রুই মাছ (কাটা ও পরিষ্কার - ১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 420,
    "unit": "1 kg (Net Slices)",
    "img": "rui_fish.jpg",
    "badge": "Daily River Catch",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Fresh large river Rui scaled, gutted, and portioned into clean curry slices."
  },
  {
    "id": 32,
    "name": "Fresh Katla Fish (Clean Sliced - 1kg Net)",
    "nameBn": "কাতলা মাছ (কাটা ও পরিষ্কার - ১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 460,
    "unit": "1 kg (Net Slices)",
    "img": "katla_fish.jpg",
    "badge": "Fatty Petti",
    "badgeType": "",
    "halal": true,
    "desc": "Rich Katla belly portions sliced for traditional Bengali fish kalia."
  },
  {
    "id": 33,
    "name": "River Pabda Fish (Clean Dressed - 500g)",
    "nameBn": "পাবদা মাছ (পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 480,
    "unit": "500g (8-10 pcs)",
    "img": "pabda_fish.jpg",
    "badge": "Sweet River",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Silky, delicate Pabda fish dressed and ready for mustard oil shorshe jhol."
  },
  {
    "id": 34,
    "name": "Freshwater Tengra Fish (Clean Dressed - 500g)",
    "nameBn": "টেংরা মাছ (পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 420,
    "unit": "500g pack",
    "img": "tengra_fish.jpg",
    "badge": "Haor Fresh",
    "badgeType": "",
    "halal": true,
    "desc": "Small freshwater Tengra fish cleaned for potato and tomato curry."
  },
  {
    "id": 35,
    "name": "Live Shing Catfish (Clean & Descaled - 500g)",
    "nameBn": "শিং মাছ (জীবন্ত পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 580,
    "unit": "500g pack",
    "img": "shing_fish.jpg",
    "badge": "Nutritious",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Naturally wholesome live catfish dressed clean. Highly recommended health broth fish."
  },
  {
    "id": 36,
    "name": "Fresh Magur Fish (Clean Dressed - 500g)",
    "nameBn": "মাগুর মাছ (পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 620,
    "unit": "500g pack",
    "img": "magur_fish.jpg",
    "badge": "Native Catch",
    "badgeType": "",
    "halal": true,
    "desc": "Cleaned native Magur catfish portioned for nourishing light stew."
  },
  {
    "id": 37,
    "name": "Deshi Farm Koi Fish (Cleaned - 500g)",
    "nameBn": "কৈ মাছ (পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 380,
    "unit": "500g (5-6 pcs)",
    "img": "koi_fish.jpg",
    "badge": "Tel Koi Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Fat climbing perch Koi fish scaled and cleaned for traditional Tel Koi bhuna."
  },
  {
    "id": 38,
    "name": "Padma River Hilsha / Ilish (Grade A - 1kg Whole)",
    "nameBn": "পদ্মার ইলিশ (গ্রেড এ - ১ কেজি আস্ত)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1650,
    "unit": "1 pc (~1kg)",
    "img": "ilish_fish.jpg",
    "badge": "Padma King",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Authentic silver Padma river Ilish with maximum natural oil content and supreme aroma."
  },
  {
    "id": 39,
    "name": "Padma Hilsha / Ilish Slices (Cut & Cleaned - 800g)",
    "nameBn": "ইলিশের টুকরো (কাটা ও পরিষ্কার - ৮০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1450,
    "unit": "800g (6-8 pieces)",
    "img": "ilish_fish.jpg",
    "badge": "Ready to Cook",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Convenient pre-cut thick Ilish slices ready for Shorshe Ilish and Bhaja."
  },
  {
    "id": 40,
    "name": "Bagda Tiger Prawns (Cleaned & Deveined - 500g)",
    "nameBn": "বাগদা চিংড়ি (পরিষ্কার - ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 680,
    "unit": "500g pack",
    "img": "prawns.jpg",
    "badge": "Peeled & Deveined",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Black tiger sea prawns peeled, deveined with tail on for Chingri Malaikari."
  },
  {
    "id": 41,
    "name": "Jumbo Galda River Prawns (Head-On - 1kg)",
    "nameBn": "গলদা চিংড়ি (জাম্বো - ১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1250,
    "unit": "1 kg (6-8 large)",
    "img": "jumbo_prawns.jpg",
    "badge": "Jumbo River",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Giant freshwater river prawns with rich head fat for royal roasts."
  },
  {
    "id": 42,
    "name": "Basa Fish Fillet (Skinless Boneless - 1kg)",
    "nameBn": "বাসা ফিশ ফিলে (বোনলেস - ১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 490,
    "unit": "1 kg (4-5 fillets)",
    "img": "fish_fillet.jpg",
    "badge": "100% Boneless",
    "badgeType": "",
    "halal": true,
    "desc": "Pure white boneless fish fillets. Ideal for fish fry, fish fingers, and baking."
  },
  {
    "id": 43,
    "name": "Fresh Red Potatoes / Lal Alu (1kg)",
    "nameBn": "দেশি লাল গোল আলু (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 45,
    "unit": "1 kg pack",
    "img": "potatoes.jpg",
    "badge": "Deshi Lal",
    "badgeType": "",
    "halal": true,
    "desc": "Firm red soil farm potatoes for rich curry gravies and aloo bhorta."
  },
  {
    "id": 44,
    "name": "Fresh Diamond White Potatoes (2kg Net)",
    "nameBn": "ডায়মন্ড সাদা আলু (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 80,
    "unit": "2 kg bag",
    "img": "potatoes.jpg",
    "badge": "Value Bag",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Large smooth skin baking and frying white potatoes."
  },
  {
    "id": 45,
    "name": "Fresh Local Red Onions / Deshi Piaj (1kg)",
    "nameBn": "দেশি লাল পেঁয়াজ (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 85,
    "unit": "1 kg bag",
    "img": "onions.jpg",
    "badge": "Deshi Aromatic",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Pungent, thin-skinned local red onions with intense natural aroma."
  },
  {
    "id": 46,
    "name": "Fresh Ripe Red Tomatoes (1kg)",
    "nameBn": "পাকা লাল টমেটো (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 60,
    "unit": "1 kg bag",
    "img": "tomatoes.jpg",
    "badge": "Farm Red",
    "badgeType": "",
    "halal": true,
    "desc": "Juicy garden fresh red tomatoes for salads and rich curries."
  },
  {
    "id": 47,
    "name": "Fresh Spicy Green Chilies / Kacha Morich (250g)",
    "nameBn": "কাঁচা মরিচ (২৫০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 40,
    "unit": "250g pack",
    "img": "green_chilies.jpg",
    "badge": "Fresh Spicy",
    "badgeType": "",
    "halal": true,
    "desc": "Crisp, spicy green chilies picked fresh from rural farmland."
  },
  {
    "id": 48,
    "name": "Fresh Garlic Bulbs / Deshi Roshun (500g)",
    "nameBn": "দেশি রসুন (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 110,
    "unit": "500g bag",
    "img": "garlic.jpg",
    "badge": "Pungent",
    "badgeType": "",
    "halal": true,
    "desc": "Aromatic local small garlic cloves rich in allicin."
  },
  {
    "id": 49,
    "name": "Fresh Ginger / Deshi Ada (500g)",
    "nameBn": "দেশি আদা (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 120,
    "unit": "500g bag",
    "img": "ginger.jpg",
    "badge": "Juicy Root",
    "badgeType": "",
    "halal": true,
    "desc": "Firm, juicy ginger roots for daily cooking and morning tea."
  },
  {
    "id": 50,
    "name": "Fresh Cauliflower / Phulkopi (1 pc)",
    "nameBn": "তাজা ফুলকপি (১ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 50,
    "unit": "1 pc (~800g)",
    "img": "cauliflower.jpg",
    "badge": "Winter Crop",
    "badgeType": "",
    "halal": true,
    "desc": "Clean, tight white curd cauliflower freshly harvested."
  },
  {
    "id": 51,
    "name": "Fresh Green Cabbage / Badhakopi (1 pc)",
    "nameBn": "তাজা বাঁধাকপি (১ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 45,
    "unit": "1 pc (~1kg)",
    "img": "cabbage.jpg",
    "badge": "Crisp Leaves",
    "badgeType": "",
    "halal": true,
    "desc": "Dense, crisp green cabbage for bhaji, salads, and rolls."
  },
  {
    "id": 52,
    "name": "Fresh Long Eggplant / Begun (1kg)",
    "nameBn": "লম্বা বেগুন (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 60,
    "unit": "1 kg bag",
    "img": "eggplant.jpg",
    "badge": "Tender",
    "badgeType": "",
    "halal": true,
    "desc": "Glossy purple long eggplants ideal for Begun Bhaja and shutki jhol."
  },
  {
    "id": 53,
    "name": "Fresh Crunchy Carrots / Gajor (1kg)",
    "nameBn": "তাজা গাজর (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 70,
    "unit": "1 kg bag",
    "img": "carrots.jpg",
    "badge": "Sweet Crunch",
    "badgeType": "",
    "halal": true,
    "desc": "Sweet, vibrant orange farm carrots for salads, halwa, and stews."
  },
  {
    "id": 54,
    "name": "Fresh Crisp Green Cucumbers / Shosha (1kg)",
    "nameBn": "তাজা দেশি শসা (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 50,
    "unit": "1 kg bag",
    "img": "cucumbers.jpg",
    "badge": "Hydrating",
    "badgeType": "",
    "halal": true,
    "desc": "Crisp local green cucumbers packed with refreshing moisture."
  },
  {
    "id": 55,
    "name": "Tender Green Bottle Gourd / Lau (1 pc)",
    "nameBn": "কচি লাউ (১ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 60,
    "unit": "1 pc (~1.5kg)",
    "img": "bottle_gourd.jpg",
    "badge": "Kochi Lau",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Tender young bottle gourd for Chingri Lau and light fish stews."
  },
  {
    "id": 56,
    "name": "Fresh Green Raw Papaya / Pepe (1 pc)",
    "nameBn": "কাঁচা পেঁপে (১ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 40,
    "unit": "1 pc (~1kg)",
    "img": "raw_papaya.jpg",
    "badge": "Digestive",
    "badgeType": "",
    "halal": true,
    "desc": "Nutritious raw green papaya for curries, tenderizing meat, and salads."
  },
  {
    "id": 57,
    "name": "Fresh Green Pointed Gourd / Potol (1kg)",
    "nameBn": "তাজা পটল (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 60,
    "unit": "1 kg bag",
    "img": "bottle_gourd.jpg",
    "badge": "Farm Fresh",
    "badgeType": "",
    "halal": true,
    "desc": "Young pointed gourds for potol bhaja and potol dorma."
  },
  {
    "id": 58,
    "name": "Fresh Bitter Gourd / Korola (500g)",
    "nameBn": "তাজা করোলা (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 45,
    "unit": "500g bag",
    "img": "bitter_gourd.jpg",
    "badge": "Health Tonic",
    "badgeType": "",
    "halal": true,
    "desc": "Small crisp bitter gourds for crunchy potato bhaji and health juicing."
  },
  {
    "id": 59,
    "name": "Fresh Green Okra / Dherosh (500g)",
    "nameBn": "তাজা ঢেঁড়শ / ভেন্ডি (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 40,
    "unit": "500g bag",
    "img": "okra.jpg",
    "badge": "Tender Pods",
    "badgeType": "",
    "halal": true,
    "desc": "Young tender ladyfingers for crispy bhaji and mustard fish curry."
  },
  {
    "id": 60,
    "name": "Fresh Spinach / Palong Shak (2 Bunches)",
    "nameBn": "তাজা পালং শাক (২ আঁটি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 40,
    "unit": "2 Bunches",
    "img": "spinach.jpg",
    "badge": "Iron Loaded",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Tender green spinach leaves harvested fresh in the morning."
  },
  {
    "id": 61,
    "name": "Fresh Red Amaranth / Lal Shak (2 Bunches)",
    "nameBn": "তাজা লাল শাক (২ আঁটি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 35,
    "unit": "2 Bunches",
    "img": "red_spinach.jpg",
    "badge": "Deshi Shak",
    "badgeType": "",
    "halal": true,
    "desc": "Vibrant purple-red amaranth leaves for garlic-seasoned bhaji."
  },
  {
    "id": 62,
    "name": "Fresh Coriander Leaves / Dhone Pata (100g)",
    "nameBn": "তাজা ধনে পাতা (১০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 25,
    "unit": "100g bunch",
    "img": "coriander.jpg",
    "badge": "Fresh Herb",
    "badgeType": "",
    "halal": true,
    "desc": "Aromatic green coriander leaves for garnishing curries and chutneys."
  },
  {
    "id": 63,
    "name": "Fresh Juicy Kagoji Lemons (4 pcs)",
    "nameBn": "কাগজি লেবু (৪ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 30,
    "unit": "4 pcs pack",
    "img": "lemons.jpg",
    "badge": "Vitamin C",
    "badgeType": "",
    "halal": true,
    "desc": "Thin-skinned aromatic Kagoji limes loaded with fresh juice."
  },
  {
    "id": 64,
    "name": "Broiler Chicken Breast Bone Less",
    "nameBn": "ব্রয়লার চিকেন ব্রেস্ট বোনলেস",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 420,
    "unit": "500g",
    "img": "breast_boneless.jpg",
    "badge": "Best Seller",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% tender, skinless, boneless chicken breast fillet. High protein, frozen sealed."
  },
  {
    "id": 65,
    "name": "Broiler Chicken Thai Bone Less",
    "nameBn": "ব্রয়লার চিকেন থাই বোনলেস",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 460,
    "unit": "500g",
    "img": "thigh_boneless.jpg",
    "badge": "Juiciest Cut",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Succulent boneless chicken thigh meat. Naturally tender and juicy."
  },
  {
    "id": 66,
    "name": "Broiler Chicken Drumstick",
    "nameBn": "ব্রয়লার চিকেন ড্রামস্টিক",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 380,
    "unit": "500g (4-5 pcs)",
    "img": "drumsticks.jpg",
    "badge": "Kids Favorite",
    "badgeType": "",
    "halal": true,
    "desc": "Plump, skin-on fresh chicken drumsticks. Trimmed and ready for frying or baking."
  },
  {
    "id": 67,
    "name": "Broiler Chicken Wings",
    "nameBn": "ব্রয়লার চিকেন উইংস",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 280,
    "unit": "500g",
    "img": "wings.jpg",
    "badge": "Hot Wings",
    "badgeType": "",
    "halal": true,
    "desc": "Freshly portioned two-joint chicken wings. Great for glazed wings and BBQ."
  },
  {
    "id": 68,
    "name": "Broiler Chicken Full Leg Bone Less",
    "nameBn": "ব্রয়লার চিকেন ফুল লেগ বোনলেস",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 440,
    "unit": "500g",
    "img": "full_leg_boneless.jpg",
    "badge": "Chef Choice",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Thigh and drumstick combined, deboned and trimmed with precision."
  },
  {
    "id": 69,
    "name": "Broiler Chicken Full Leg",
    "nameBn": "ব্রয়লার চিকেন ফুল লেগ",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 340,
    "unit": "500g (2 pcs)",
    "img": "full_leg.jpg",
    "badge": "Classic Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Whole chicken leg quarter (thigh + drumstick). Perfect for oven roasting and biryani."
  },
  {
    "id": 70,
    "name": "Broiler Whole Chicken Skin On",
    "nameBn": "ব্রয়লার সম্পূর্ণ মুরগি (স্কিন সহ)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 230,
    "unit": "1 kg (Dressed)",
    "img": "whole_chicken_skin_on.jpg",
    "badge": "Daily Fresh",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% Halal slaughtered farm-fresh broiler chicken with natural skin."
  },
  {
    "id": 71,
    "name": "Broiler Whole Chicken Skin Less",
    "nameBn": "ব্রয়লার সম্পূর্ণ মুরগি (স্কিন ছাড়া)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 260,
    "unit": "1 kg (Dressed)",
    "img": "whole_chicken_skinless.jpg",
    "badge": "Clean Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Hygienically skinned and dressed whole chicken. Perfectly trimmed."
  },
  {
    "id": 72,
    "name": "Sonali Chicken (Pakistani) - 5-600gm",
    "nameBn": "সোনালি মুরগি (পাকিস্তানি) - ৫-৬০০ গ্রাম",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 320,
    "unit": "500-600g pc",
    "img": "sonali_chicken.jpg",
    "badge": "Heritage Breed",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Firm indigenous crossbreed chicken. Deshi-like aromatic taste for roast."
  },
  {
    "id": 73,
    "name": "Sonali Chicken (A Grade) - 700-800gm",
    "nameBn": "সোনালি মুরগি (এ গ্রেড) - ৭০০-৮০০ গ্রাম",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 390,
    "unit": "700-800g pc",
    "img": "sonali_chicken.jpg",
    "badge": "Popular Size",
    "badgeType": "",
    "halal": true,
    "desc": "Medium mature Sonali bird. Optimum meat-to-bone ratio for family dinner roasts."
  },
  {
    "id": 74,
    "name": "Sonali Chicken (Large) - 900-1000gm",
    "nameBn": "সোনালি মুরগি (লার্জ) - ৯০০-১০০০ গ্রাম",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 470,
    "unit": "900g-1kg pc",
    "img": "sonali_chicken.jpg",
    "badge": "Family Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Fully mature farm-reared Sonali bird for rich slow-cooked curry."
  },
  {
    "id": 75,
    "name": "Deshi Duck - Local",
    "nameBn": "দেশি হাঁস - লোকাল",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 650,
    "unit": "1 pc (~1.2kg)",
    "img": "deshi_duck.jpg",
    "badge": "Village Fresh",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Locally raised farm duck from Haor wetlands. Rich, savory dark meat for bhuna."
  },
  {
    "id": 76,
    "name": "Sylheti Haor Duck (Clean Dressed - 1.4kg)",
    "nameBn": "সিলেটি হাওরের হাঁস (পরিষ্কার - ১.৪ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 780,
    "unit": "1.3-1.4kg pc",
    "img": "deshi_duck.jpg",
    "badge": "Winter Special",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Large Haor duck with rich natural fat layer for authentic duck bhuna."
  },
  {
    "id": 77,
    "name": "Roast/Local Chicken (Deshi Free Range)",
    "nameBn": "রোস্ট / দেশি মুরগি (ফ্রি রেঞ্জ)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 420,
    "unit": "1 pc (~800g)",
    "img": "roast_chicken.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "halal": true,
    "desc": "Free-range local deshi chicken with deep natural meat aroma."
  },
  {
    "id": 78,
    "name": "Organic Deshi Chicken (Naturolla Farm)",
    "nameBn": "অর্গানিক দেশি মুরগি",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 540,
    "unit": "1 pc (~850g)",
    "img": "roast_chicken.jpg",
    "badge": "100% Organic",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Raised purely on organic greens and natural grains. Zero commercial feeds."
  },
  {
    "id": 79,
    "name": "Quail Birds / Koel (Pack of 4 Dressed)",
    "nameBn": "কোয়েল পাখি (৪ পিস প্যাকেট)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 320,
    "unit": "4 pcs pack",
    "img": "roast_chicken.jpg",
    "badge": "High Protein",
    "badgeType": "",
    "halal": true,
    "desc": "Skinless, fully dressed tender quail birds. Nutrient-dense delicacy."
  },
  {
    "id": 80,
    "name": "Quail Birds / Koel (Pack of 8 Dressed)",
    "nameBn": "কোয়েল পাখি (৮ পিস প্যাকেট)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 600,
    "unit": "8 pcs pack",
    "img": "roast_chicken.jpg",
    "badge": "Value Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Family value pack of 8 cleaned quails. Ideal for spicy deep fry and roast."
  },
  {
    "id": 81,
    "name": "Pigeon / Kobutor (Clean Dressed - 1 Pair)",
    "nameBn": "কবুতর (১ জোড়া পরিষ্কার)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 480,
    "unit": "2 pcs pair",
    "img": "roast_chicken.jpg",
    "badge": "Health Broth",
    "badgeType": "",
    "halal": true,
    "desc": "Clean dressed pigeon pair. Traditional convalescent remedy for vitality."
  },
  {
    "id": 82,
    "name": "Broiler Chicken Liver-Gizzard",
    "nameBn": "ব্রয়লার মুরগির কলিজা ও গিলা",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 190,
    "unit": "500g pack",
    "img": "liver_gizzard.jpg",
    "badge": "Cleaned",
    "badgeType": "",
    "halal": true,
    "desc": "Washed and cleaned fresh chicken liver and gizzard. High iron."
  },
  {
    "id": 83,
    "name": "Broiler Chicken Feet (Clean)",
    "nameBn": "ব্রয়লার মুরগির পা (পরিষ্কার)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 150,
    "unit": "500g pack",
    "img": "chicken_feet.jpg",
    "badge": "Collagen Rich",
    "badgeType": "",
    "halal": true,
    "desc": "Cleaned and peeled chicken feet for rich natural bone broth."
  },
  {
    "id": 84,
    "name": "Chicken Soup Bones / Back & Neck (1kg)",
    "nameBn": "চিকেন স্যুপের হাড় (১ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 140,
    "unit": "1 kg pack",
    "img": "drumsticks.jpg",
    "badge": "Stock & Broth",
    "badgeType": "",
    "halal": true,
    "desc": "Chicken back and neck bones for clear broth, ramen stock, and baby food."
  },
  {
    "id": 85,
    "name": "Chicken Bologna (1200gm)",
    "nameBn": "চিকেন বোলোনিয়া (১২০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 750,
    "unit": "1200g Loaf",
    "img": "chicken_bologna.jpg",
    "badge": "Family Pack",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Premium seasoned chicken cold-cut loaf. Slice thin for breakfast sandwiches."
  },
  {
    "id": 86,
    "name": "Chicken Samosa",
    "nameBn": "চিকেন সমুচা (১০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 240,
    "unit": "10 pcs pack",
    "img": "chicken_samosa.jpg",
    "badge": "Crispy Snack",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Flaky pastry filled with spiced minced chicken breast, green chilies, and onions."
  },
  {
    "id": 87,
    "name": "Chicken Samosa (20 pcs Family Pack)",
    "nameBn": "চিকেন সমুচা (২০ পিস ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 450,
    "unit": "20 pcs pack",
    "img": "chicken_samosa.jpg",
    "badge": "Save ৳30",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Party pack of 20 crispy chicken samosas. Deep fry or air fry straight from frozen."
  },
  {
    "id": 88,
    "name": "Chicken Spring Roll",
    "nameBn": "চিকেন স্প্রিং রোল (১০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 260,
    "unit": "10 pcs pack",
    "img": "chicken_spring_roll.jpg",
    "badge": "Party Hit",
    "badgeType": "",
    "halal": true,
    "desc": "Crispy rolls stuffed with shredded tender chicken and crunchy seasonal vegetables."
  },
  {
    "id": 89,
    "name": "Chicken Spring Roll (20 pcs Family Pack)",
    "nameBn": "চিকেন স্প্রিং রোল (২০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 490,
    "unit": "20 pcs pack",
    "img": "chicken_spring_roll.jpg",
    "badge": "Family Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Value bundle of 20 crunchy chicken spring rolls for evening snacks."
  },
  {
    "id": 90,
    "name": "Chicken Sausage",
    "nameBn": "চিকেন সসেজ (১০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 290,
    "unit": "10 pcs pack",
    "img": "chicken_sausage.jpg",
    "badge": "Breakfast Hit",
    "badgeType": "",
    "halal": true,
    "desc": "Lightly smoked Halal chicken sausage links. Perfect for breakfast platters."
  },
  {
    "id": 91,
    "name": "Chicken Sausage - Cheese Loaded (10 pcs)",
    "nameBn": "চিকেন চিজ সসেজ (১০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 360,
    "unit": "10 pcs pack",
    "img": "chicken_sausage.jpg",
    "badge": "Cheese Burst",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Chicken sausage infused with melty mozzarella and cheddar cheese chunks."
  },
  {
    "id": 92,
    "name": "Chicken Nuggets",
    "nameBn": "চিকেন নাগেটস (১২ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 320,
    "unit": "12 pcs pack",
    "img": "chicken_nuggets.jpg",
    "badge": "Crispy Golden",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% pure chicken breast in golden seasoned breadcrumb coating. Ready in 4 minutes."
  },
  {
    "id": 93,
    "name": "Chicken Nuggets (24 pcs Jumbo Pack)",
    "nameBn": "চিকেন নাগেটস (২৪ পিস জাম্বো প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 590,
    "unit": "24 pcs pack",
    "img": "chicken_nuggets.jpg",
    "badge": "Best Value",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Mega box of 24 chicken nuggets. Perfect for kids tiffin and party snacks."
  },
  {
    "id": 94,
    "name": "Chicken Meat Ball",
    "nameBn": "চিকেন মিট বল (২০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 310,
    "unit": "20 pcs pack",
    "img": "chicken_meatball.jpg",
    "badge": "Gourmet",
    "badgeType": "",
    "halal": true,
    "desc": "Juicy seasoned chicken meatballs for pasta, soup, and sweet-sour glaze."
  },
  {
    "id": 95,
    "name": "Chicken Popcorn (400g Crispy Pack)",
    "nameBn": "চিকেন পপকর্ন (৪০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 340,
    "unit": "400g pack",
    "img": "chicken_popcorn.jpg",
    "badge": "Crunchy",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Bite-sized chicken breast chunks in ultra-crispy southern spiced batter."
  },
  {
    "id": 96,
    "name": "Chicken Burger Patty (6 pcs)",
    "nameBn": "চিকেন বার্গার প্যাটি (৬ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 350,
    "unit": "6 pcs pack",
    "img": "burger_patty.jpg",
    "badge": "Jumbo Size",
    "badgeType": "",
    "halal": true,
    "desc": "Thick juicy seasoned minced chicken patties. Pan-fry in 3 minutes for burgers."
  },
  {
    "id": 97,
    "name": "Chicken Shami Kabab (6 pcs)",
    "nameBn": "চিকেন শামি কাবাব (৬ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 280,
    "unit": "6 pcs pack",
    "img": "shami_kabab.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "halal": true,
    "desc": "Slow-cooked shredded chicken with chana daal and aromatic spices."
  },
  {
    "id": 98,
    "name": "Chicken Seekh Kabab (6 pcs Skewers)",
    "nameBn": "চিকেন সিখ কাবাব (৬ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 340,
    "unit": "6 pcs pack",
    "img": "seekh_kabab.jpg",
    "badge": "Mughlai",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Minced chicken skewers blended with mint, coriander, and roasted spices."
  },
  {
    "id": 99,
    "name": "Chicken Steamed Momos / Dumplings (12 pcs)",
    "nameBn": "চিকেন মোমো / ডাম্পলিং (১২ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 290,
    "unit": "12 pcs pack",
    "img": "momos.jpg",
    "badge": "Tibetan Style",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Juicy chicken momos folded in translucent dough. Steam for 6 mins."
  },
  {
    "id": 100,
    "name": "Frozen Green Sweet Peas / Matar (500g pack)",
    "nameBn": "ফ্রোজেন সবুজ মিষ্টি মটরশুঁটি (৫০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 140,
    "unit": "500g pack",
    "img": "frozen_peas.jpg",
    "badge": "IQF Sweet",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Individually quick frozen tender green sweet peas. Ready to cook in 2 minutes."
  },
  {
    "id": 101,
    "name": "Frozen Sweet Corn Kernels (500g pack)",
    "nameBn": "ফ্রোজেন সুইট কর্ন (৫০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 150,
    "unit": "500g pack",
    "img": "sweet_corn.jpg",
    "badge": "Golden Sweet",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Juicy golden sweet corn kernels for salads, soups, and butter corn."
  },
  {
    "id": 102,
    "name": "Frozen Mixed Vegetables (500g pack)",
    "nameBn": "ফ্রোজেন মিক্সড ভেজিটেবল (৫০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 160,
    "unit": "500g pack",
    "img": "mixed_veg.jpg",
    "badge": "Healthy Mix",
    "badgeType": "",
    "halal": true,
    "desc": "Diced carrots, sweet corn, green peas, and green beans flash-frozen for fried rice."
  },
  {
    "id": 103,
    "name": "Frozen Crinkle Cut French Fries (1kg pack)",
    "nameBn": "ফ্রোজেন ফ্রেঞ্চ ফ্রাইজ (১ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 280,
    "unit": "1 kg pack",
    "img": "french_fries.jpg",
    "badge": "Crispy Fries",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Crispy crinkle cut potato fries. Fry straight from freezer for 3 minutes."
  },
  {
    "id": 104,
    "name": "Frozen Crispy Hash Browns (6 pcs pack)",
    "nameBn": "ফ্রোজেন হ্যাশ ব্রাউন (৬ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 220,
    "unit": "6 pcs pack",
    "img": "hash_browns.jpg",
    "badge": "Breakfast Hit",
    "badgeType": "",
    "halal": true,
    "desc": "Shredded potato patties seasoned for golden pan-frying."
  },
  {
    "id": 105,
    "name": "Khashi / Mutton Curry Cut (1kg)",
    "nameBn": "খাসির মাংস (কারি কাট - ১ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1150,
    "unit": "1 kg pack",
    "img": "mutton_curry_cut.jpg",
    "badge": "100% Khashi",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Authentic young male castrated goat (Khashi). Mild aroma, succulent meat for rezala."
  },
  {
    "id": 106,
    "name": "Khashi / Mutton Boneless (1kg)",
    "nameBn": "খাসির মাংস (বোনলেস - ১ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1450,
    "unit": "1 kg pack",
    "img": "mutton_boneless.jpg",
    "badge": "Solid Khashi",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Pure deboned mutton pieces. Perfect for Mutton Biryani, Korma, and Haleem."
  },
  {
    "id": 107,
    "name": "Khashi / Mutton Leg Whole (Raan - 1.5kg)",
    "nameBn": "খাসির আস্ত রান (১.৫ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1750,
    "unit": "1.5kg pc",
    "img": "mutton_leg_raan.jpg",
    "badge": "Raan Roast",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Whole goat leg quarter trimmed and scored for traditional slow roasted Raan Mussallam."
  },
  {
    "id": 108,
    "name": "Khashi / Mutton Chops / Chaap (1kg)",
    "nameBn": "খাসির চাপ / চপস (১ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1250,
    "unit": "1 kg pack",
    "img": "mutton_chops.jpg",
    "badge": "Mutton Chops",
    "badgeType": "",
    "halal": true,
    "desc": "Rib chop cuts with tender meat and rib bone. Marinate and pan sear with spices."
  },
  {
    "id": 109,
    "name": "Khashi / Mutton Minced / Keema (500g)",
    "nameBn": "খাসির কিমা (৫০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 680,
    "unit": "500g pack",
    "img": "mutton_keema.jpg",
    "badge": "Mutton Keema",
    "badgeType": "",
    "halal": true,
    "desc": "Fine minced fresh goat meat. Unbeatable rich aroma for keema matar and kofta."
  },
  {
    "id": 110,
    "name": "Khashi / Mutton Paya / Trotters (Clean - 4 pcs)",
    "nameBn": "খাসির পায়া (৪ পিস পরিষ্কার)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 550,
    "unit": "4 pcs pack",
    "img": "mutton_paya.jpg",
    "badge": "Khashi Paya",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Carefully dressed young goat trotters for winter morning paya and naan."
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
  filterCategory('frozen_meat');
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
  const deliveryFee = subtotal >= 1500 || subtotal === 0 ? 0 : 80;
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
    const activeLangText = isBangla ? 'বাংলা' : 'English';

    if (desktopBtn) {
      const span = desktopBtn.querySelector('span');
      if (span) span.textContent = label;
      desktopBtn.setAttribute('title', `Active: ${activeLangText} (Click to switch)`);
    }
    if (mobileBtn) {
      const span = mobileBtn.querySelector('span');
      if (span) span.textContent = label;
    }
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
