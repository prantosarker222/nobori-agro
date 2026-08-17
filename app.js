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
    "name": "Bombay Sweets Chanachur - Mega Family Pack (500g)",
    "nameBn": "বোম্বে সুইটস চানাচুর - মেগা ফ্যামিলি প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 140,
    "unit": "500g pack",
    "img": "chanachur.jpg",
    "badge": "Family Pack",
    "badgeType": "badge-accent",
    "desc": "Crispy, crunchy spicy traditional Chanachur with fried peanuts, yellow lentils, and seasoned sev noodles.",
    "sku": "NA-SNK-001"
  },
  {
    "id": 2,
    "name": "Pran Special Jhal Chanachur - Family Pack (500g)",
    "nameBn": "প্রাণ স্পেশাল ঝাল চানাচুর - ফ্যামিলি প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 135,
    "unit": "500g pack",
    "img": "chanachur.jpg",
    "badge": "Extra Spicy",
    "badgeType": "badge-accent",
    "desc": "Mustard-oil infused spicy chanachur blend packed with roasted peanuts and hot chili crunch.",
    "sku": "NA-SNK-002"
  },
  {
    "id": 3,
    "name": "Ruchi BBQ Chanachur - Twin Pack (2 x 300g = 600g)",
    "nameBn": "রুচি বিবিকিউ চানাচুর - টুইন প্যাক (৬০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 180,
    "unit": "600g (2 packs)",
    "img": "chanachur.jpg",
    "badge": "Twin Saver",
    "badgeType": "badge-gold",
    "desc": "Smoky BBQ flavored modern chanachur snack with zesty seasoning in a double bundle pack.",
    "sku": "NA-SNK-003"
  },
  {
    "id": 4,
    "name": "Radhuni Special Chanachur - Mega Value Pack (500g)",
    "nameBn": "রাঁধুনী স্পেশাল চানাচুর - মেগা প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 145,
    "unit": "500g pack",
    "img": "chanachur.jpg",
    "badge": "Mega Pack",
    "badgeType": "",
    "desc": "Authentic aroma and crunchy lentil nuggets with fried cashews and peanuts.",
    "sku": "NA-SNK-004"
  },
  {
    "id": 5,
    "name": "Pran Tok-Jhal-Misti Chanachur - Family Pack (500g)",
    "nameBn": "প্রাণ টক-ঝাল-মিষ্টি চানাচুর - ফ্যামিলি প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 135,
    "unit": "500g pack",
    "img": "chanachur.jpg",
    "badge": "Sweet & Sour",
    "badgeType": "badge-gold",
    "desc": "Tangy tamarind, sweet raisins, and spicy crunchy chickpea flour sev for family tea time.",
    "sku": "NA-SNK-005"
  },
  {
    "id": 6,
    "name": "Bombay Sweets Alooz Potato Chips - Party Box (6 x 50g = 300g)",
    "nameBn": "আলুজ টমেটো চিপস - পার্টি বক্স (৬ প্যাকেট = ৩০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 180,
    "unit": "Box of 6 packs",
    "img": "potato_chips.jpg",
    "badge": "Party Box",
    "badgeType": "badge-accent",
    "desc": "Multipack box of 6 crispy golden potato crinkle chips tossed with tangy tomato seasoning.",
    "sku": "NA-SNK-006"
  },
  {
    "id": 7,
    "name": "Sun Chips Sour Cream & Onion - Party Bundle (4 x 75g = 300g)",
    "nameBn": "সান চিপস সাওয়ার ক্রিম - পার্টি বান্ডিল (৪ প্যাকেট)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 180,
    "unit": "Pack of 4",
    "img": "potato_chips.jpg",
    "badge": "Multipack",
    "badgeType": "badge-accent",
    "desc": "Gourmet wave potato chips seasoned with creamy sour cream and chives in a value 4-pack.",
    "sku": "NA-SNK-007"
  },
  {
    "id": 8,
    "name": "Lays Classic Salted Potato Chips - Multipack (4 x 50g = 200g)",
    "nameBn": "লেয়স ক্লাসিক সল্টেড চিপস - মাল্টিপ্যাক (৪ প্যাকেট)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 160,
    "unit": "Pack of 4",
    "img": "potato_chips.jpg",
    "badge": "Classic Salt",
    "badgeType": "",
    "desc": "Pure sliced thin farm potato crisps sprinkled with fine sea salt in a convenient multi-bundle.",
    "sku": "NA-SNK-008"
  },
  {
    "id": 9,
    "name": "Doritos Nacho Cheese Tortilla Chips - Party Pack (2 x 80g = 160g)",
    "nameBn": "ডরিটোস নাচো চিজ চিপস - টুইন প্যাক (১৬০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 130,
    "unit": "Pack of 2",
    "img": "nacho_chips.jpg",
    "badge": "Nacho Cheese",
    "badgeType": "badge-gold",
    "desc": "Crunchy corn tortilla chips loaded with savory melted nacho cheese seasoning.",
    "sku": "NA-SNK-009"
  },
  {
    "id": 10,
    "name": "Olympic Energy Toast Biscuits - Giant Family Box (700g)",
    "nameBn": "অলিম্পিক এনার্জি টোস্ট বিস্কুট - জায়ান্ট বক্স (৭০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 150,
    "unit": "700g Giant Box",
    "img": "toast_biscuits.jpg",
    "badge": "Giant Saver",
    "badgeType": "badge-accent",
    "desc": "Crisp twice-baked toast biscuits flavored with aromatic cardamom and sesame seeds.",
    "sku": "NA-SNK-010"
  },
  {
    "id": 11,
    "name": "Olympic Dry Cake Rusk - Large Bakery Pack (600g)",
    "nameBn": "অলিম্পিক ড্রাই কেক - লার্জ বেকারি প্যাক (৬০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 175,
    "unit": "600g Box",
    "img": "dry_cake.jpg",
    "badge": "Bakery Grade",
    "badgeType": "",
    "desc": "Sweet golden crunchy dry cake slices baked with vanilla butter flavor for evening tea.",
    "sku": "NA-SNK-011"
  },
  {
    "id": 12,
    "name": "Olympic Nutty Peanut Cookies - Twin Box (2 x 300g = 600g)",
    "nameBn": "অলিম্পিক নাটি কুকিজ - টুইন বক্স (৬০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 170,
    "unit": "600g (2 Boxes)",
    "img": "butter_cookies.jpg",
    "badge": "Twin Pack",
    "badgeType": "",
    "desc": "Rich bakery cookies packed with roasted chopped peanut chunks in a twin value box.",
    "sku": "NA-SNK-012"
  },
  {
    "id": 13,
    "name": "Danish Lexing Butter Cookies - Royal Gift Tin (400g)",
    "nameBn": "ড্যানিশ বাটার কুকিজ টিন (৪০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 420,
    "unit": "400g Royal Tin",
    "img": "butter_cookies.jpg",
    "badge": "Pure Butter",
    "badgeType": "badge-gold",
    "desc": "Assorted Danish butter cookies in a reusable royal blue embossed gift tin.",
    "sku": "NA-SNK-013"
  },
  {
    "id": 14,
    "name": "Pran Potata Spicy Potato Biscuits - Value Box (6 x 100g = 600g)",
    "nameBn": "প্রাণ পটাটা স্পাইসি বিস্কুট - বক্স (৬ প্যাকেট = ৬০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 210,
    "unit": "Box of 6 packs",
    "img": "potato_chips.jpg",
    "badge": "Viral Favorite",
    "badgeType": "badge-accent",
    "desc": "Ultra-thin, paper-crisp potato crackers sprinkled with fiery spices in a wholesale box.",
    "sku": "NA-SNK-014"
  },
  {
    "id": 15,
    "name": "Britannia Good Day Butter Cookies - Family Bundle (4 x 200g = 800g)",
    "nameBn": "ব্রিটানিয়া গুড ডে বাটার কুকিজ - মেগা বান্ডিল (৮০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 240,
    "unit": "Bundle of 4 packs",
    "img": "butter_cookies.jpg",
    "badge": "Family Bundle",
    "badgeType": "badge-accent",
    "desc": "Rich, melt-in-the-mouth butter cookies with signature smile design in an 800g bundle.",
    "sku": "NA-SNK-015"
  },
  {
    "id": 16,
    "name": "Oreo Vanilla Cream Cookies - Party Multipack (4 x 120g = 480g)",
    "nameBn": "ওরিও ভ্যানিলা ক্রিম কুকিজ - পার্টি প্যাক (৪ প্যাকেট)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 200,
    "unit": "Pack of 4",
    "img": "chocolate_biscuits.jpg",
    "badge": "Party Pack",
    "badgeType": "",
    "desc": "Rich dark cocoa biscuits filled with smooth vanilla cream in a 4-piece multipack.",
    "sku": "NA-SNK-016"
  },
  {
    "id": 17,
    "name": "Crispy Fried Salted Peanuts / Badam - Large Jar (500g)",
    "nameBn": "ভাজা চিনাবাদাম সল্টেড - ফ্যামিলি জার (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 150,
    "unit": "500g Jar",
    "img": "roasted_peanuts.jpg",
    "badge": "Fresh Roast",
    "badgeType": "",
    "desc": "Crispy fried golden peanuts tossed with fine salt in a reusable airtight 500g jar.",
    "sku": "NA-SNK-017"
  },
  {
    "id": 18,
    "name": "Masala Spiced Roasted Peanuts - Large Jar (500g)",
    "nameBn": "মশলা চিনা বাদাম - ফ্যামিলি জার (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 165,
    "unit": "500g Jar",
    "img": "roasted_peanuts.jpg",
    "badge": "Chatpata",
    "badgeType": "badge-accent",
    "desc": "Crunchy roasted peanuts coated in tangy chaat masala and chili in an airtight jar.",
    "sku": "NA-SNK-018"
  },
  {
    "id": 19,
    "name": "Fried Green Peas / Motor Bhaja - Family Pack (400g)",
    "nameBn": "মুচমুচে মটর ভাজা - ফ্যামিলি প্যাক (৪০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 120,
    "unit": "400g pack",
    "img": "fried_peas.jpg",
    "badge": "Super Crunchy",
    "badgeType": "",
    "desc": "Deep fried crispy whole green peas dusted with salt and hot spices.",
    "sku": "NA-SNK-019"
  },
  {
    "id": 20,
    "name": "Spicy Dal Mut / Dal Bhaja - Mega Pack (500g)",
    "nameBn": "ডাল ভাজা / ডাল মুট - মেগা প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 125,
    "unit": "500g pack",
    "img": "dal_bhaja.jpg",
    "badge": "Crispy Dal",
    "badgeType": "",
    "desc": "Fried crunchy yellow lentils seasoned with black salt and red pepper.",
    "sku": "NA-SNK-020"
  },
  {
    "id": 21,
    "name": "Traditional Crunchy Crispy Nimki - Bakery Jar (500g)",
    "nameBn": "মুচমুচে নিমকি - বেকারি জার (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 120,
    "unit": "500g Jar",
    "img": "nimki.jpg",
    "badge": "Home Style",
    "badgeType": "badge-gold",
    "desc": "Flaky triangular flour crisps flavored with black cumin seeds (kalo jeere).",
    "sku": "NA-SNK-021"
  },
  {
    "id": 22,
    "name": "Sweet & Salty Ghee Khaja - Special Box (500g)",
    "nameBn": "ঘি ভাজা মিষ্টি খাজা - স্পেশাল বক্স (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 180,
    "unit": "500g Box",
    "img": "nimki.jpg",
    "badge": "Artisanal",
    "badgeType": "",
    "desc": "Layered crisp puff pastry dipped in light sugar syrup and ghee.",
    "sku": "NA-SNK-022"
  },
  {
    "id": 23,
    "name": "Roasted Spiced Kaju Almond Mix - Gourmet Jar (300g)",
    "nameBn": "স্পাইসি কাজু ও কাঠবাদাম মিক্স (৩০০ গ্রাম জার)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 480,
    "unit": "300g Jar",
    "img": "roasted_peanuts.jpg",
    "badge": "Gourmet Nuts",
    "badgeType": "badge-gold",
    "desc": "Slow-roasted whole cashews and California almonds with pink rock salt.",
    "sku": "NA-SNK-023"
  },
  {
    "id": 24,
    "name": "Hand-Roasted Deshi Muri / Puffed Rice - Mega Sack (1kg Bag)",
    "nameBn": "হাতে ভাজা দেশি মুড়ি - মেগা ব্যাগ (১ কেজি)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 110,
    "unit": "1 kg Bag",
    "img": "puffed_rice.jpg",
    "badge": "100% Urea Free",
    "badgeType": "badge-accent",
    "desc": "Naturally hand-roasted white puffed rice from village country paddy. 100% chemical free.",
    "sku": "NA-SNK-024"
  },
  {
    "id": 25,
    "name": "Chira Bhaja Spiced Crispy Flattened Rice - Family Jar (500g)",
    "nameBn": "মুচমুচে চিড়া ভাজা - ফ্যামিলি জার (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 100,
    "unit": "500g Jar",
    "img": "puffed_rice.jpg",
    "badge": "Crispy Chira",
    "badgeType": "",
    "desc": "Deep fried crispy flattened rice tossed with peanuts, curry leaves, and green chili.",
    "sku": "NA-SNK-025"
  },
  {
    "id": 26,
    "name": "Olympic Tip Top Salted Crackers - Twin Value Pack (2 x 250g = 500g)",
    "nameBn": "টিপ টপ সল্টেড বিস্কুট - টুইন প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 120,
    "unit": "500g (2 packs)",
    "img": "toast_biscuits.jpg",
    "badge": "Twin Pack",
    "badgeType": "",
    "desc": "Light, airy salted square biscuits perfect for tea-time and cheese dips.",
    "sku": "NA-SNK-026"
  },
  {
    "id": 27,
    "name": "Kurkure Masala Munch - Multipack of 4 (4 x 90g = 360g)",
    "nameBn": "কুরকুরে মশলা মাঞ্চ - ৪ প্যাকেট বান্ডিল (৩৬০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 160,
    "unit": "Pack of 4",
    "img": "nacho_chips.jpg",
    "badge": "Spicy Munch",
    "badgeType": "badge-accent",
    "desc": "Crunchy kurkure puff twists with chatpata masala in a 4-pack party bundle.",
    "sku": "NA-SNK-027"
  },
  {
    "id": 28,
    "name": "Special Jhal Muri Ready Mix - Family Pack (500g)",
    "nameBn": "ঝাল মুড়ি রেডি মিক্স - ফ্যামিলি প্যাক (৫০০ গ্রাম)",
    "cat": "snacks_dry",
    "catLabel": "Snacks & Dry Foods",
    "price": 100,
    "unit": "500g pack",
    "img": "jhal_muri.jpg",
    "badge": "Street Snack",
    "badgeType": "",
    "desc": "Puffed rice blended with chanachur, spices, and fried peanuts. Just add oil and onions.",
    "sku": "NA-SNK-028"
  },
  {
    "id": 29,
    "name": "Fresh River Rui Fish - Clean Sliced (1kg Net Weight)",
    "nameBn": "তাজা রুই মাছ - কাটা ও পরিষ্কার (১ কেজি নেট)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 420,
    "unit": "1 kg (Net Slices)",
    "img": "rui_fish.jpg",
    "badge": "Daily Catch",
    "badgeType": "badge-accent",
    "desc": "Fresh large river Rui scaled, gutted, and portioned into 1kg net clean curry slices.",
    "sku": "NA-FSH-029"
  },
  {
    "id": 30,
    "name": "Fresh Katla Fish - Clean Sliced (1kg Net Weight)",
    "nameBn": "কাতলা মাছ - কাটা ও পরিষ্কার (১ কেজি নেট)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 460,
    "unit": "1 kg (Net Slices)",
    "img": "katla_fish.jpg",
    "badge": "Fatty Petti",
    "badgeType": "",
    "desc": "Rich Katla belly portions sliced for traditional Bengali fish kalia.",
    "sku": "NA-FSH-030"
  },
  {
    "id": 31,
    "name": "River Pabda Fish - Clean Dressed (500g Net, 8-10 pcs)",
    "nameBn": "পাবদা মাছ - পরিষ্কার (৫০০ গ্রাম, ৮-১০ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 480,
    "unit": "500g pack",
    "img": "pabda_fish.jpg",
    "badge": "Sweet River",
    "badgeType": "badge-gold",
    "desc": "Silky, delicate Pabda fish dressed and ready for mustard oil shorshe jhol.",
    "sku": "NA-FSH-031"
  },
  {
    "id": 32,
    "name": "Freshwater Tengra Fish - Clean Dressed (500g Net)",
    "nameBn": "টেংরা মাছ - পরিষ্কার (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 420,
    "unit": "500g pack",
    "img": "tengra_fish.jpg",
    "badge": "Haor Fresh",
    "badgeType": "",
    "desc": "Small freshwater Tengra fish cleaned for potato and tomato curry.",
    "sku": "NA-FSH-032"
  },
  {
    "id": 33,
    "name": "Live Shing Catfish - Clean & Descaled (500g Net)",
    "nameBn": "শিং মাছ - জীবন্ত পরিষ্কার (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 580,
    "unit": "500g pack",
    "img": "shing_fish.jpg",
    "badge": "Nutritious",
    "badgeType": "badge-accent",
    "desc": "Naturally wholesome live catfish dressed clean. Highly recommended health broth fish.",
    "sku": "NA-FSH-033"
  },
  {
    "id": 34,
    "name": "Fresh Magur Fish - Clean Dressed (500g Net)",
    "nameBn": "মাগুর মাছ - পরিষ্কার (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 620,
    "unit": "500g pack",
    "img": "magur_fish.jpg",
    "badge": "Native Catch",
    "badgeType": "",
    "desc": "Cleaned native Magur catfish portioned for nourishing light stew.",
    "sku": "NA-FSH-034"
  },
  {
    "id": 35,
    "name": "Deshi Farm Koi Fish - Cleaned (500g Net, 5-6 pcs)",
    "nameBn": "কৈ মাছ - পরিষ্কার (৫০০ গ্রাম, ৫-৬ পিস)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 380,
    "unit": "500g pack",
    "img": "koi_fish.jpg",
    "badge": "Tel Koi Cut",
    "badgeType": "",
    "desc": "Fat climbing perch Koi fish scaled and cleaned for traditional Tel Koi bhuna.",
    "sku": "NA-FSH-035"
  },
  {
    "id": 36,
    "name": "Padma River Hilsha / Ilish - Grade A Whole (1kg Whole Fish)",
    "nameBn": "পদ্মার ইলিশ - গ্রেড এ (১ কেজি আস্ত)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1650,
    "unit": "1 pc (~1kg)",
    "img": "ilish_fish.jpg",
    "badge": "Padma King",
    "badgeType": "badge-gold",
    "desc": "Authentic silver Padma river Ilish with maximum natural oil content and supreme aroma.",
    "sku": "NA-FSH-036"
  },
  {
    "id": 37,
    "name": "Padma Hilsha / Ilish Slices - Cut & Cleaned (800g Net)",
    "nameBn": "ইলিশের টুকরো - কাটা ও পরিষ্কার (৮০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1450,
    "unit": "800g (6-8 pieces)",
    "img": "ilish_fish.jpg",
    "badge": "Ready to Cook",
    "badgeType": "badge-gold",
    "desc": "Convenient pre-cut thick Ilish slices ready for Shorshe Ilish and Bhaja.",
    "sku": "NA-FSH-037"
  },
  {
    "id": 38,
    "name": "Bagda Tiger Prawns - Cleaned & Deveined (500g Net)",
    "nameBn": "বাগদা চিংড়ি - পরিষ্কার (৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 680,
    "unit": "500g pack",
    "img": "prawns.jpg",
    "badge": "Deveined",
    "badgeType": "badge-accent",
    "desc": "Black tiger sea prawns peeled, deveined with tail on for Chingri Malaikari.",
    "sku": "NA-FSH-038"
  },
  {
    "id": 39,
    "name": "Jumbo Galda River Prawns - Head-On Grade A (1kg Net)",
    "nameBn": "গলদা চিংড়ি - জাম্বো (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 1250,
    "unit": "1 kg (6-8 large)",
    "img": "jumbo_prawns.jpg",
    "badge": "Jumbo River",
    "badgeType": "badge-gold",
    "desc": "Giant freshwater river prawns with rich head fat for royal roasts.",
    "sku": "NA-FSH-039"
  },
  {
    "id": 40,
    "name": "Basa Fish Fillet - Skinless Boneless (1kg Family Pack)",
    "nameBn": "বাসা ফিশ ফিলে - বোনলেস (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 490,
    "unit": "1 kg (4-5 fillets)",
    "img": "fish_fillet.jpg",
    "badge": "100% Boneless",
    "badgeType": "",
    "desc": "Pure white boneless fish fillets. Ideal for fish fry, fish fingers, and baking.",
    "sku": "NA-FSH-040"
  },
  {
    "id": 41,
    "name": "Fresh Red Potatoes / Lal Alu - Kitchen Sack (3kg Bag)",
    "nameBn": "দেশি লাল গোল আলু - কিচেন বস্তা (৩ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 135,
    "unit": "3 kg bag",
    "img": "potatoes.jpg",
    "badge": "3kg Value",
    "badgeType": "",
    "desc": "Firm red soil farm potatoes for rich curry gravies and aloo bhorta.",
    "sku": "NA-VEG-041"
  },
  {
    "id": 42,
    "name": "Fresh Diamond White Potatoes - Value Bag (5kg Sack)",
    "nameBn": "ডায়মন্ড সাদা আলু - ভ্যালু বস্তা (৫ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 195,
    "unit": "5 kg sack",
    "img": "potatoes.jpg",
    "badge": "5kg Wholesale",
    "badgeType": "badge-accent",
    "desc": "Large smooth skin baking and frying white potatoes in an economical 5kg sack.",
    "sku": "NA-VEG-042"
  },
  {
    "id": 43,
    "name": "Fresh Local Red Onions / Deshi Piaj - Kitchen Bag (2kg Bag)",
    "nameBn": "দেশি লাল পেঁয়াজ - কিচেন ব্যাগ (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 170,
    "unit": "2 kg bag",
    "img": "onions.jpg",
    "badge": "2kg Deshi",
    "badgeType": "badge-accent",
    "desc": "Pungent, thin-skinned local red onions with intense natural aroma in a 2kg pack.",
    "sku": "NA-VEG-043"
  },
  {
    "id": 44,
    "name": "Fresh Ripe Red Tomatoes - Fresh Farm Box (2kg Box)",
    "nameBn": "পাকা লাল টমেটো - ফার্ম বক্স (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 120,
    "unit": "2 kg box",
    "img": "tomatoes.jpg",
    "badge": "2kg Farm Fresh",
    "badgeType": "",
    "desc": "Juicy garden fresh red tomatoes for salads and rich curries in a 2kg family box.",
    "sku": "NA-VEG-044"
  },
  {
    "id": 45,
    "name": "Fresh Ginger & Garlic Combo Pack (500g Ginger + 500g Garlic = 1kg)",
    "nameBn": "আদা ও রসুন কম্বো প্যাক (৫০০ গ্রাম আদা + ৫০০ গ্রাম রসুন)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 230,
    "unit": "1 kg Combo",
    "img": "garlic.jpg",
    "badge": "Kitchen Essential",
    "badgeType": "badge-accent",
    "desc": "Fresh Deshi garlic and juicy ginger root combination for seamless cooking.",
    "sku": "NA-VEG-045"
  },
  {
    "id": 46,
    "name": "Fresh Spicy Green Chilies & Garlic Kitchen Combo (500g + 500g)",
    "nameBn": "কাঁচা মরিচ ও রসুন কম্বো (৫০০ গ্রাম + ৫০০ গ্রাম)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 150,
    "unit": "1 kg Combo",
    "img": "green_chilies.jpg",
    "badge": "Spicy Combo",
    "badgeType": "",
    "desc": "Crisp green chilies paired with aromatic garlic cloves for daily tempering.",
    "sku": "NA-VEG-046"
  },
  {
    "id": 47,
    "name": "Fresh Whole Cauliflower - Twin Pack (2 Large Heads, ~2kg)",
    "nameBn": "তাজা ফুলকপি - টুইন প্যাক (২ পিস = ২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 100,
    "unit": "2 Large Heads",
    "img": "cauliflower.jpg",
    "badge": "Twin Heads",
    "badgeType": "",
    "desc": "Clean, tight white curd cauliflower freshly harvested in a twin bundle.",
    "sku": "NA-VEG-047"
  },
  {
    "id": 48,
    "name": "Fresh Green Cabbage - Twin Pack (2 Large Heads, ~2.5kg)",
    "nameBn": "তাজা বাঁধাকপি - টুইন প্যাক (২ পিস = ২.৫ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 90,
    "unit": "2 Large Heads",
    "img": "cabbage.jpg",
    "badge": "Twin Pack",
    "badgeType": "",
    "desc": "Dense, crisp green cabbage for bhaji, salads, and rolls in a value 2-pack.",
    "sku": "NA-VEG-048"
  },
  {
    "id": 49,
    "name": "Fresh Long Purple Eggplant / Begun - Family Pack (2kg Bag)",
    "nameBn": "লম্বা বেগুন - ফ্যামিলি প্যাক (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 120,
    "unit": "2 kg bag",
    "img": "eggplant.jpg",
    "badge": "2kg Begun",
    "badgeType": "",
    "desc": "Glossy purple long eggplants ideal for Begun Bhaja and shutki jhol.",
    "sku": "NA-VEG-049"
  },
  {
    "id": 50,
    "name": "Fresh Crunchy Carrots - Family Pack (2kg Bag)",
    "nameBn": "তাজা গাজর - ফ্যামিলি প্যাক (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 140,
    "unit": "2 kg bag",
    "img": "carrots.jpg",
    "badge": "2kg Crunch",
    "badgeType": "",
    "desc": "Sweet, vibrant orange farm carrots for salads, halwa, and stews.",
    "sku": "NA-VEG-050"
  },
  {
    "id": 51,
    "name": "Fresh Crisp Green Cucumbers / Shosha - Salad Pack (2kg Bag)",
    "nameBn": "তাজা দেশি শসা - সালাদ প্যাক (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 100,
    "unit": "2 kg bag",
    "img": "cucumbers.jpg",
    "badge": "2kg Salad",
    "badgeType": "",
    "desc": "Crisp local green cucumbers packed with refreshing moisture.",
    "sku": "NA-VEG-051"
  },
  {
    "id": 52,
    "name": "Tender Green Bottle Gourd / Lau - Large Kitchen Grade (2 pcs, ~3kg)",
    "nameBn": "কচি লাউ - কিচেন গ্রেড (২ পিস = ৩ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 120,
    "unit": "2 Large pcs",
    "img": "bottle_gourd.jpg",
    "badge": "Twin Lau",
    "badgeType": "badge-accent",
    "desc": "Tender young bottle gourd for Chingri Lau and light fish stews in a 2-piece set.",
    "sku": "NA-VEG-052"
  },
  {
    "id": 53,
    "name": "Fresh Green Raw Papaya / Pepe - Twin Pack (2 pcs, ~2.5kg)",
    "nameBn": "কাঁচা পেঁপে - টুইন প্যাক (২ পিস = ২.৫ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 80,
    "unit": "2 pcs (~2.5kg)",
    "img": "raw_papaya.jpg",
    "badge": "Twin Pepe",
    "badgeType": "",
    "desc": "Nutritious raw green papaya for curries, tenderizing meat, and salads.",
    "sku": "NA-VEG-053"
  },
  {
    "id": 54,
    "name": "Fresh Green Pointed Gourd / Potol - Fresh Bag (2kg Bag)",
    "nameBn": "তাজা পটল - ফ্রেশ ব্যাগ (২ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 120,
    "unit": "2 kg bag",
    "img": "bottle_gourd.jpg",
    "badge": "2kg Potol",
    "badgeType": "",
    "desc": "Young pointed gourds for potol bhaja and potol dorma.",
    "sku": "NA-VEG-054"
  },
  {
    "id": 55,
    "name": "Fresh Bitter Gourd / Korola - Family Pack (1kg Bag)",
    "nameBn": "তাজা করোলা - ফ্যামিলি প্যাক (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 90,
    "unit": "1 kg bag",
    "img": "bitter_gourd.jpg",
    "badge": "1kg Korola",
    "badgeType": "",
    "desc": "Small crisp bitter gourds for crunchy potato bhaji and health juicing.",
    "sku": "NA-VEG-055"
  },
  {
    "id": 56,
    "name": "Fresh Green Okra / Dherosh - Family Pack (1kg Bag)",
    "nameBn": "তাজা ঢেঁড়শ - ফ্যামিলি প্যাক (১ কেজি)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 80,
    "unit": "1 kg bag",
    "img": "okra.jpg",
    "badge": "1kg Dherosh",
    "badgeType": "",
    "desc": "Young tender ladyfingers for crispy bhaji and mustard fish curry.",
    "sku": "NA-VEG-056"
  },
  {
    "id": 57,
    "name": "Fresh Green Spinach & Red Amaranth Shak Bundle (6 Bunches Assorted)",
    "nameBn": "তাজা শাকের মেগা বান্ডিল (৬ আঁটি পালং ও লাল শাক)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 110,
    "unit": "6 Bunches",
    "img": "spinach.jpg",
    "badge": "6 Bunches",
    "badgeType": "badge-accent",
    "desc": "Tender green spinach and vibrant red amaranth leaves in a wholesome 6-bunch family bundle.",
    "sku": "NA-VEG-057"
  },
  {
    "id": 58,
    "name": "Daily Herb & Citrus Essentials Pack (250g Coriander + 250g Chilies + 8 Lemons)",
    "nameBn": "দৈনিক ধনেপাতা, মরিচ ও লেবু প্যাক",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 110,
    "unit": "Fresh Combo Pack",
    "img": "lemons.jpg",
    "badge": "Daily Fresh",
    "badgeType": "",
    "desc": "Aromatic green coriander leaves, fresh green chilies, and juicy Kagoji lemons in one set.",
    "sku": "NA-VEG-058"
  },
  {
    "id": 59,
    "name": "Complete Daily Veggies Basket (2kg Potato + 1kg Onion + 1kg Tomato + 500g Carrots)",
    "nameBn": "দৈনিক কিচেন সবজি বাস্কেট (৪.৫ কেজি মোট)",
    "cat": "fish_veg",
    "catLabel": "Fish & Vegetables",
    "price": 260,
    "unit": "4.5kg Veggie Basket",
    "img": "tomatoes.jpg",
    "badge": "All-in-One",
    "badgeType": "badge-gold",
    "desc": "Hand-picked essential daily cooking vegetables bundled together for family savings.",
    "sku": "NA-VEG-059"
  },
  {
    "id": 60,
    "name": "Broiler Chicken Breast Bone Less (500g Fillet Pack)",
    "nameBn": "ব্রয়লার চিকেন ব্রেস্ট বোনলেস (৫০০ গ্রাম ফিলে)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 420,
    "unit": "500g Fillet Pack",
    "img": "breast_boneless.jpg",
    "badge": "Best Seller",
    "badgeType": "badge-accent",
    "desc": "100% tender, skinless, boneless chicken breast fillet. High protein, frozen sealed.",
    "sku": "NA-PLT-060"
  },
  {
    "id": 61,
    "name": "Broiler Chicken Thai Bone Less (500g Fillet Pack)",
    "nameBn": "ব্রয়লার চিকেন থাই বোনলেস (৫০০ গ্রাম ফিলে)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 460,
    "unit": "500g Fillet Pack",
    "img": "thigh_boneless.jpg",
    "badge": "Juiciest Cut",
    "badgeType": "badge-gold",
    "desc": "Succulent boneless chicken thigh meat. Naturally tender and juicy.",
    "sku": "NA-PLT-061"
  },
  {
    "id": 62,
    "name": "Broiler Chicken Drumsticks (1kg Family Pack, 8-10 pcs)",
    "nameBn": "ব্রয়লার চিকেন ড্রামস্টিক (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 750,
    "unit": "1 kg (8-10 pcs)",
    "img": "drumsticks.jpg",
    "badge": "1kg Family Pack",
    "badgeType": "",
    "desc": "Plump, skin-on fresh chicken drumsticks in an economical 1kg pack for frying and roasting.",
    "sku": "NA-PLT-062"
  },
  {
    "id": 63,
    "name": "Broiler Chicken Wings (1kg Family Pack)",
    "nameBn": "ব্রয়লার চিকেন উইংস (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 550,
    "unit": "1 kg pack",
    "img": "wings.jpg",
    "badge": "1kg Wings",
    "badgeType": "",
    "desc": "Freshly portioned two-joint chicken wings. Great for glazed wings and BBQ platters.",
    "sku": "NA-PLT-063"
  },
  {
    "id": 64,
    "name": "Broiler Chicken Full Leg Bone Less (500g Fillet Pack)",
    "nameBn": "ব্রয়লার চিকেন ফুল লেগ বোনলেস (৫০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 440,
    "unit": "500g Fillet Pack",
    "img": "full_leg_boneless.jpg",
    "badge": "Chef Choice",
    "badgeType": "badge-gold",
    "desc": "Thigh and drumstick combined, deboned and trimmed with precision for steaks.",
    "sku": "NA-PLT-064"
  },
  {
    "id": 65,
    "name": "Broiler Chicken Full Leg Quarter (1kg Pack, 4 pcs)",
    "nameBn": "ব্রয়লার চিকেন ফুল লেগ (১ কেজি, ৪ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 670,
    "unit": "1 kg (4 pcs)",
    "img": "full_leg.jpg",
    "badge": "Classic Cut",
    "badgeType": "",
    "desc": "Whole chicken leg quarters (thigh + drumstick). Perfect for oven roasting and biryani.",
    "sku": "NA-PLT-065"
  },
  {
    "id": 66,
    "name": "Broiler Whole Chicken Skin On - Twin Pack (2 x 1kg = 2kg)",
    "nameBn": "ব্রয়লার সম্পূর্ণ মুরগি (২ পিস = ২ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 450,
    "unit": "2 kg (2 Birds)",
    "img": "whole_broiler.jpg",
    "badge": "Twin Birds",
    "badgeType": "badge-accent",
    "desc": "Farm-fresh cleaned broiler chicken with natural skin for enhanced moisture during cooking.",
    "sku": "NA-PLT-066"
  },
  {
    "id": 67,
    "name": "Broiler Whole Chicken Skin Less - Twin Pack (2 x 1kg = 2kg)",
    "nameBn": "ব্রয়লার স্কিনলেস মুরগি (২ পিস = ২ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 510,
    "unit": "2 kg (2 Birds)",
    "img": "whole_chicken_skinless.jpg",
    "badge": "Clean Cut",
    "badgeType": "",
    "desc": "Hygienically skinned and dressed whole chickens. Trimmed of excess fat.",
    "sku": "NA-PLT-067"
  },
  {
    "id": 68,
    "name": "Sonali Heritage Chicken - Twin Pack (2 Birds, ~1.4kg Dressed)",
    "nameBn": "সোনালি মুরগি - টুইন প্যাক (২ পিস = ১.৪ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 760,
    "unit": "2 Birds (~1.4kg)",
    "img": "sonali_chicken.jpg",
    "badge": "Heritage Breed",
    "badgeType": "badge-gold",
    "desc": "Firm indigenous crossbreed chicken. Deshi-like aromatic taste for roast and rezala.",
    "sku": "NA-PLT-068"
  },
  {
    "id": 69,
    "name": "Sonali Heritage Chicken - Large Feast (2 Birds, ~1.9kg Dressed)",
    "nameBn": "সোনালি মুরগি লার্জ - টুইন প্যাক (২ পিস = ১.৯ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 920,
    "unit": "2 Birds (~1.9kg)",
    "img": "sonali_chicken.jpg",
    "badge": "Family Feast",
    "badgeType": "",
    "desc": "Fully mature farm-reared Sonali birds for rich slow-cooked curry feasts.",
    "sku": "NA-PLT-069"
  },
  {
    "id": 70,
    "name": "Deshi Duck - Local Haor (1 pc, ~1.2kg Dressed)",
    "nameBn": "দেশি হাঁস - লোকাল (১.২ কেজি আস্ত)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 650,
    "unit": "1 pc (~1.2kg)",
    "img": "deshi_duck.jpg",
    "badge": "Village Fresh",
    "badgeType": "badge-gold",
    "desc": "Locally raised farm duck from Haor wetlands. Rich, savory dark meat for bhuna.",
    "sku": "NA-PLT-070"
  },
  {
    "id": 71,
    "name": "Sylheti Haor Duck - Large Prime (1 pc, ~1.4kg Dressed)",
    "nameBn": "সিলেটি হাওরের হাঁস (১.৪ কেজি পরিষ্কার)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 780,
    "unit": "1.3-1.4kg pc",
    "img": "deshi_duck.jpg",
    "badge": "Winter Special",
    "badgeType": "badge-accent",
    "desc": "Large Haor duck with rich natural fat layer for authentic duck bhuna.",
    "sku": "NA-PLT-071"
  },
  {
    "id": 72,
    "name": "Roast/Local Deshi Chicken - Free Range (2 Birds, ~1.6kg Dressed)",
    "nameBn": "রোস্ট / দেশি মুরগি - টুইন প্যাক (২ পিস = ১.৬ কেজি)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 820,
    "unit": "2 Birds (~1.6kg)",
    "img": "deshi_chicken.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "desc": "Free-range local deshi chickens with deep natural meat aroma for home-style broth.",
    "sku": "NA-PLT-072"
  },
  {
    "id": 73,
    "name": "Organic Deshi Chicken - Naturolla Fed (1 pc, ~850g Dressed)",
    "nameBn": "অর্গানিক দেশি মুরগি (৮৫০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 540,
    "unit": "1 pc (~850g)",
    "img": "deshi_chicken.jpg",
    "badge": "100% Organic",
    "badgeType": "badge-accent",
    "desc": "Raised purely on organic greens and natural grains. Zero commercial feeds.",
    "sku": "NA-PLT-073"
  },
  {
    "id": 74,
    "name": "Quail Birds / Koel - Party Pack (8 pcs Clean Dressed)",
    "nameBn": "কোয়েল পাখি - পার্টি প্যাক (৮ পিস প্যাকেট)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 600,
    "unit": "8 pcs pack",
    "img": "quail.jpg",
    "badge": "8 pcs Value",
    "badgeType": "",
    "desc": "Family value pack of 8 skinless, fully dressed tender quail birds. Nutrient-dense delicacy.",
    "sku": "NA-PLT-074"
  },
  {
    "id": 75,
    "name": "Pigeon / Kobutor - Pair Pack (2 Pairs / 4 pcs Clean Dressed)",
    "nameBn": "কবুতর - ৪ পিস প্যাক (২ জোড়া পরিষ্কার)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 950,
    "unit": "4 pcs (2 Pairs)",
    "img": "pigeon.jpg",
    "badge": "Health Broth",
    "badgeType": "",
    "desc": "Clean dressed squab/pigeon pack of 4 birds for vitality and traditional healing broths.",
    "sku": "NA-PLT-075"
  },
  {
    "id": 76,
    "name": "Broiler Chicken Liver-Gizzard (1kg Mega Pack)",
    "nameBn": "ব্রয়লার মুরগির কলিজা ও গিলা (১ কেজি মেগা প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 370,
    "unit": "1 kg pack",
    "img": "liver.jpg",
    "badge": "Cleaned",
    "badgeType": "",
    "desc": "Washed and cleaned fresh chicken liver and gizzard. High iron.",
    "sku": "NA-PLT-076"
  },
  {
    "id": 77,
    "name": "Broiler Chicken Cleaned Feet (1kg Mega Pack)",
    "nameBn": "ব্রয়লার মুরগির পা পরিষ্কার (১ কেজি মেগা প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 290,
    "unit": "1 kg pack",
    "img": "chicken_feet.jpg",
    "badge": "Collagen Rich",
    "badgeType": "",
    "desc": "Cleaned and peeled chicken feet for rich natural bone broth.",
    "sku": "NA-PLT-077"
  },
  {
    "id": 78,
    "name": "Chicken Soup Bones / Neck & Back (2kg Broth Pack)",
    "nameBn": "চিকেন স্যুপের হাড় (২ কেজি ব্রথ প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 270,
    "unit": "2 kg pack",
    "img": "chicken_broth.jpg",
    "badge": "2kg Stock",
    "badgeType": "",
    "desc": "Chicken back and neck bones for clear broth, ramen stock, and baby food.",
    "sku": "NA-PLT-078"
  },
  {
    "id": 79,
    "name": "Chicken Bologna Loaf (1200g Jumbo Loaf)",
    "nameBn": "চিকেন বোলোনিয়া লোফ (১২০০ গ্রাম জাম্বো)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 750,
    "unit": "1200g Loaf",
    "img": "bologna.jpg",
    "badge": "Jumbo Loaf",
    "badgeType": "badge-gold",
    "desc": "Premium seasoned chicken cold-cut loaf. Slice thin for sandwiches.",
    "sku": "NA-FRZ-079"
  },
  {
    "id": 80,
    "name": "Chicken Samosa - Family Party Box (20 pcs Pack)",
    "nameBn": "চিকেন সমুচা - ফ্যামিলি বক্স (২০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 450,
    "unit": "20 pcs pack",
    "img": "samosa.jpg",
    "badge": "Save ৳30",
    "badgeType": "badge-accent",
    "desc": "Party pack of 20 crispy chicken samosas. Deep fry or air fry straight from frozen.",
    "sku": "NA-FRZ-080"
  },
  {
    "id": 81,
    "name": "Chicken Spring Roll - Family Party Box (20 pcs Pack)",
    "nameBn": "চিকেন স্প্রিং রোল - ফ্যামিলি বক্স (২০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 490,
    "unit": "20 pcs pack",
    "img": "spring_roll.jpg",
    "badge": "Family Pack",
    "badgeType": "",
    "desc": "Value bundle of 20 crunchy chicken spring rolls for evening snacks.",
    "sku": "NA-FRZ-081"
  },
  {
    "id": 82,
    "name": "Chicken Sausage - Plain Jumbo Pack (20 pcs Pack)",
    "nameBn": "চিকেন সসেজ প্লেইন - জাম্বো প্যাক (২০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 560,
    "unit": "20 pcs pack",
    "img": "sausage.jpg",
    "badge": "20 pcs Jumbo",
    "badgeType": "",
    "desc": "Lightly smoked chicken sausage links in a 20-piece family breakfast pack.",
    "sku": "NA-FRZ-082"
  },
  {
    "id": 83,
    "name": "Chicken Sausage - Cheese Loaded (10 pcs Pack)",
    "nameBn": "চিকেন চিজ সসেজ (১০ পিস প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 360,
    "unit": "10 pcs pack",
    "img": "sausage.jpg",
    "badge": "Cheese Burst",
    "badgeType": "badge-gold",
    "desc": "Chicken sausage infused with melty mozzarella and cheddar cheese chunks.",
    "sku": "NA-FRZ-083"
  },
  {
    "id": 84,
    "name": "Chicken Nuggets - Mega Box (24 pcs Pack)",
    "nameBn": "চিকেন নাগেটস - মেগা বক্স (২৪ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 590,
    "unit": "24 pcs pack",
    "img": "nuggets.jpg",
    "badge": "Best Value",
    "badgeType": "badge-accent",
    "desc": "Mega box of 24 chicken nuggets. 100% pure chicken breast in golden breadcrumbs.",
    "sku": "NA-FRZ-084"
  },
  {
    "id": 85,
    "name": "Chicken Meat Ball - Jumbo Pack (40 pcs Pack)",
    "nameBn": "চিকেন মিট বল - জাম্বো প্যাক (৪০ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 580,
    "unit": "40 pcs pack",
    "img": "meatball.jpg",
    "badge": "40 pcs Value",
    "badgeType": "",
    "desc": "Juicy seasoned chicken meatballs for pasta, soup, and sweet-sour glaze.",
    "sku": "NA-FRZ-085"
  },
  {
    "id": 86,
    "name": "Chicken Popcorn - Crispy Party Pack (800g Twin Pack)",
    "nameBn": "চিকেন পপকর্ন - টুইন প্যাক (৮০০ গ্রাম)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 650,
    "unit": "800g (2 packs)",
    "img": "chicken_popcorn.jpg",
    "badge": "Crunchy",
    "badgeType": "badge-accent",
    "desc": "Bite-sized chicken breast chunks in ultra-crispy southern spiced batter.",
    "sku": "NA-FRZ-086"
  },
  {
    "id": 87,
    "name": "Chicken Burger Patty - Jumbo Box (12 pcs Pack)",
    "nameBn": "চিকেন বার্গার প্যাটি - জাম্বো বক্স (১২ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 660,
    "unit": "12 pcs pack",
    "img": "burger_patty.jpg",
    "badge": "12 Patties",
    "badgeType": "badge-gold",
    "desc": "Thick juicy seasoned minced chicken patties. Pan-fry in 3 minutes for burgers.",
    "sku": "NA-FRZ-087"
  },
  {
    "id": 88,
    "name": "Chicken Shami Kabab - Family Pack (12 pcs Pack)",
    "nameBn": "চিকেন শামি কাবাব - ফ্যামিলি প্যাক (১২ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 540,
    "unit": "12 pcs pack",
    "img": "shami_kabab.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "desc": "Slow-cooked shredded chicken with chana daal and aromatic spices in a 12-pack.",
    "sku": "NA-FRZ-088"
  },
  {
    "id": 89,
    "name": "Chicken Seekh Kabab - Gourmet Pack (12 pcs Skewers)",
    "nameBn": "চিকেন সিখ কাবাব - গুরমে প্যাক (১২ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 660,
    "unit": "12 skewers pack",
    "img": "seekh_kabab.jpg",
    "badge": "Mughlai",
    "badgeType": "badge-gold",
    "desc": "Minced chicken skewers blended with mint, coriander, and roasted spices.",
    "sku": "NA-FRZ-089"
  },
  {
    "id": 90,
    "name": "Chicken Steamed Momos / Dumplings - Party Box (24 pcs Pack)",
    "nameBn": "চিকেন মোমো / ডাম্পলিং - পার্টি বক্স (২৪ পিস)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 560,
    "unit": "24 pcs pack",
    "img": "momos.jpg",
    "badge": "Tibetan Style",
    "badgeType": "badge-accent",
    "desc": "Juicy chicken momos folded in translucent dough. Steam for 6 mins.",
    "sku": "NA-FRZ-090"
  },
  {
    "id": 91,
    "name": "Frozen Green Sweet Peas / Matar (1kg Family Pack)",
    "nameBn": "ফ্রোজেন সবুজ মিষ্টি মটরশুঁটি (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 270,
    "unit": "1 kg pack",
    "img": "frozen_peas.jpg",
    "badge": "1kg IQF Sweet",
    "badgeType": "badge-accent",
    "desc": "Individually quick frozen tender green sweet peas. Ready to cook in 2 minutes.",
    "sku": "NA-FRZ-091"
  },
  {
    "id": 92,
    "name": "Frozen Sweet Corn Kernels (1kg Family Pack)",
    "nameBn": "ফ্রোজেন সুইট কর্ন (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 290,
    "unit": "1 kg pack",
    "img": "sweet_corn.jpg",
    "badge": "1kg Golden Corn",
    "badgeType": "badge-gold",
    "desc": "Juicy golden sweet corn kernels for salads, soups, and butter corn in a 1kg pack.",
    "sku": "NA-FRZ-092"
  },
  {
    "id": 93,
    "name": "Frozen Mixed Vegetables (1kg Family Pack)",
    "nameBn": "ফ্রোজেন মিক্সড ভেজিটেবল (১ কেজি ফ্যামিলি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 310,
    "unit": "1 kg pack",
    "img": "mixed_veg.jpg",
    "badge": "1kg Healthy Mix",
    "badgeType": "",
    "desc": "Diced carrots, sweet corn, green peas, and green beans flash-frozen for fried rice.",
    "sku": "NA-FRZ-093"
  },
  {
    "id": 94,
    "name": "Frozen Crinkle Cut French Fries (2kg Jumbo Pack)",
    "nameBn": "ফ্রোজেন ফ্রেঞ্চ ফ্রাইজ (২ কেজি জাম্বো প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 540,
    "unit": "2 kg pack",
    "img": "french_fries.jpg",
    "badge": "2kg Jumbo Fries",
    "badgeType": "badge-accent",
    "desc": "Crispy crinkle cut potato fries. Fry straight from freezer for 3 minutes.",
    "sku": "NA-FRZ-094"
  },
  {
    "id": 95,
    "name": "Frozen Crispy Hash Browns (12 pcs Pack)",
    "nameBn": "ফ্রোজেন হ্যাশ ব্রাউন (১২ পিস প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 420,
    "unit": "12 pcs pack",
    "img": "hash_browns.jpg",
    "badge": "12 pcs Breakfast",
    "badgeType": "",
    "desc": "Shredded potato patties seasoned for golden pan-frying in a 12-piece pack.",
    "sku": "NA-FRZ-095"
  },
  {
    "id": 96,
    "name": "Khashi / Mutton Curry Cut (1kg Pack)",
    "nameBn": "খাসির মাংস - কারি কাট (১ কেজি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1150,
    "unit": "1 kg pack",
    "img": "mutton_curry_cut.jpg",
    "badge": "100% Khashi",
    "badgeType": "badge-accent",
    "desc": "Authentic young male castrated goat (Khashi). Mild aroma, succulent meat for rezala.",
    "sku": "NA-MTN-096"
  },
  {
    "id": 97,
    "name": "Khashi / Mutton Boneless (1kg Pack)",
    "nameBn": "খাসির মাংস - বোনলেস (১ কেজি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1450,
    "unit": "1 kg pack",
    "img": "mutton_boneless.jpg",
    "badge": "Solid Khashi",
    "badgeType": "badge-gold",
    "desc": "Pure deboned mutton pieces. Perfect for Mutton Biryani, Korma, and Haleem.",
    "sku": "NA-MTN-097"
  },
  {
    "id": 98,
    "name": "Khashi / Mutton Leg Whole Raan (1.5kg Whole Cut)",
    "nameBn": "খাসির আস্ত রান (১.৫ কেজি আস্ত)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1750,
    "unit": "1.5kg pc",
    "img": "mutton_leg_raan.jpg",
    "badge": "Raan Roast",
    "badgeType": "badge-gold",
    "desc": "Whole goat leg quarter trimmed and scored for traditional slow roasted Raan Mussallam.",
    "sku": "NA-MTN-098"
  },
  {
    "id": 99,
    "name": "Khashi / Mutton Chops / Chaap (1kg Pack)",
    "nameBn": "খাসির চাপ / চপস (১ কেজি প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1250,
    "unit": "1 kg pack",
    "img": "mutton_chops.jpg",
    "badge": "Mutton Chops",
    "badgeType": "",
    "desc": "Rib chop cuts with tender meat and rib bone. Marinate and pan sear with spices.",
    "sku": "NA-MTN-099"
  },
  {
    "id": 100,
    "name": "Khashi / Mutton Keema / Mince (1kg Pack)",
    "nameBn": "খাসির কিমা - ১ কেজি প্যাক",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1340,
    "unit": "1 kg pack",
    "img": "mutton_keema.jpg",
    "badge": "Mutton Keema",
    "badgeType": "",
    "desc": "Fine minced fresh goat meat. Unbeatable rich aroma for keema matar and kofta.",
    "sku": "NA-MTN-100"
  },
  {
    "id": 101,
    "name": "Khashi / Mutton Paya / Trotters (8 pcs Clean Cut Pack)",
    "nameBn": "খাসির পায়া (৮ পিস পরিষ্কার প্যাক)",
    "cat": "frozen_meat",
    "catLabel": "Frozen & Poultry",
    "price": 1050,
    "unit": "8 pcs pack",
    "img": "mutton_paya.jpg",
    "badge": "Khashi Paya",
    "badgeType": "badge-gold",
    "desc": "Carefully dressed young goat trotters for winter morning paya and naan in an 8-pack.",
    "sku": "NA-MTN-101"
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
        <p style="font-size: 0.88rem;">Try searching for "Chanachur", "Fish", "Potato", "Chicken", or reset filters.</p>
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
          <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='placeholder.jpg';">
          ${item.badge ? `<span class="card-badge-tag ${item.badgeType}">${item.badge}</span>` : ''}
          <span class="card-fresh-stamp"><i class="fas fa-check-circle"></i> Fresh</span>
        </div>

        <div class="product-body-info">
          <div class="product-header-meta"><span class="product-cat-label">${item.catLabel}</span><span class="product-sku-badge">${item.sku}</span></div>
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
      <img src="${item.img}" alt="${item.name}" class="drawer-item-img" onerror="this.onerror=null;this.src='placeholder.jpg';">
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
        <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='placeholder.jpg';">
      </div>
      <div class="modal-details-block">
        <span class="product-cat-label">${p.catLabel}</span>
        <h2>${isBangla ? p.nameBn : p.name}</h2>
        <div class="modal-price-tag">৳${p.price} <span>/ ${p.unit}</span></div>
        <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.55;">${p.desc}</p>
        
        <div class="modal-specs-list">
          <div class="modal-spec-row"><i class="fas fa-shield-halved"></i> <strong>Fresh:</strong>&nbsp; 100% Hand-Slaughtered</div>
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

  const categories = [
    { key: 'snacks_dry', label: '🍿 1. Snacks & Dry Foods' },
    { key: 'fish_veg', label: '🐟 2. Fish & Fresh Vegetables' },
    { key: 'frozen_meat', label: '🍗 3. Frozen Food, Poultry & Mutton' }
  ];

  container.innerHTML = categories.map(cat => {
    const catProducts = PRODUCTS.filter(p => p.cat === cat.key);
    return `
      <div class="product-selector-group">
        <div class="product-selector-group-title">${cat.label}</div>
        <div class="product-selector-group-items">
          ${catProducts.map(p => `
            <label class="product-check-item">
              <input type="checkbox" name="orderItems" value="${p.name} (৳${p.price})">
              <span>${p.name} — <strong>৳${p.price}</strong></span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
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
