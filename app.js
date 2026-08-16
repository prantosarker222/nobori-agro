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
    "name": "Broiler Chicken Breast Bone Less",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09b8\u09cd\u099f \u09ac\u09cb\u09a8\u09b2\u09c7\u09b8",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 420,
    "unit": "500g",
    "img": "breast_boneless.jpg",
    "badge": "Best Seller",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% tender, skinless, boneless chicken breast fillet. High protein, perfect for steaks, grilling, and stir-fry."
  },
  {
    "id": 2,
    "name": "Broiler Chicken Thai Bone Less",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u09a5\u09be\u0987 \u09ac\u09cb\u09a8\u09b2\u09c7\u09b8",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 460,
    "unit": "500g",
    "img": "thigh_boneless.jpg",
    "badge": "Juiciest Cut",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Succulent boneless chicken thigh meat. Naturally juicy, ideal for Chicken Tikka, Shawarma, and BBQ."
  },
  {
    "id": 3,
    "name": "Broiler Chicken Drumstick",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u09a1\u09cd\u09b0\u09be\u09ae\u09b8\u09cd\u099f\u09bf\u0995",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 380,
    "unit": "500g (4-5 pcs)",
    "img": "drumsticks.jpg",
    "badge": "Kids Favorite",
    "badgeType": "",
    "halal": true,
    "desc": "Plump, skin-on fresh chicken drumsticks. Trimmed and ready for crispy frying, baking, or rich roast."
  },
  {
    "id": 4,
    "name": "Broiler Chicken Wings",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u0989\u0987\u0982\u09b8",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 280,
    "unit": "500g",
    "img": "wings.jpg",
    "badge": "Hot Wings",
    "badgeType": "",
    "halal": true,
    "desc": "Freshly portioned two-joint chicken wings. Great for Buffalo glazed wings, BBQ platters, and snacks."
  },
  {
    "id": 5,
    "name": "Broiler Chicken Full Leg Bone Less",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u09ab\u09c1\u09b2 \u09b2\u09c7\u0997 \u09ac\u09cb\u09a8\u09b2\u09c7\u09b8",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 440,
    "unit": "500g",
    "img": "full_leg_boneless.jpg",
    "badge": "Chef Choice",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Thigh and drumstick combined, deboned and trimmed with precision for gourmet cutlets and Teriyaki."
  },
  {
    "id": 6,
    "name": "Broiler Chicken Full Leg",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u099a\u09bf\u0995\u09c7\u09a8 \u09ab\u09c1\u09b2 \u09b2\u09c7\u0997",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 340,
    "unit": "500g (2 pcs)",
    "img": "full_leg.jpg",
    "badge": "Classic Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Whole chicken leg quarter (thigh + drumstick). Perfect for oven roasting, tandoori, and biryani."
  },
  {
    "id": 7,
    "name": "Chicken Tenderloin Fillet",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u099f\u09c7\u09a8\u09cd\u09a1\u09be\u09b0\u09b2\u09af\u09bc\u09c7\u09a8 \u09ab\u09bf\u09b2\u09c7",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 450,
    "unit": "500g",
    "img": "placeholder.jpg",
    "badge": "Extra Tender",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Ultra-soft inner breast tenderloin fillets. Ideal for kids finger food, tenders, and quick saute."
  },
  {
    "id": 8,
    "name": "Chicken Lollipop Cuts (Trimmed)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b2\u09b2\u09bf\u09aa\u09aa \u0995\u09be\u099f (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 390,
    "unit": "500g (8-10 pcs)",
    "img": "placeholder.jpg",
    "badge": "Appetizer",
    "badgeType": "",
    "halal": true,
    "desc": "Wingettes frenched and shaped into clean meat lollipops. Ready for Indo-Chinese batter frying."
  },
  {
    "id": 9,
    "name": "Chicken Breast Cubes (Tikka Cut)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09b8\u09cd\u099f \u0995\u09bf\u0989\u09ac\u09b8 (\u099f\u09bf\u0995\u09cd\u0995\u09be \u0995\u09be\u099f)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 430,
    "unit": "500g",
    "img": "placeholder.jpg",
    "badge": "Ready-to-Marinate",
    "badgeType": "",
    "halal": true,
    "desc": "Even bite-sized boneless breast cubes. Perfect for skewers, curries, and sizzlers."
  },
  {
    "id": 10,
    "name": "Chicken Mince / Keema (Lean Breast)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u0995\u09bf\u09ae\u09be (\u09ac\u09cd\u09b0\u09c7\u09b8\u09cd\u099f \u09ae\u09bf\u099f)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 440,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "95% Lean",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Fine double-minced pure chicken breast meat. Low fat, perfect for patties, pasta bolognese, and kababs."
  },
  {
    "id": 11,
    "name": "Chicken Mince / Keema (Juicy Thigh)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u0995\u09bf\u09ae\u09be (\u09a5\u09be\u0987 \u09ae\u09bf\u099f)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 460,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Extra Juicy",
    "badgeType": "",
    "halal": true,
    "desc": "Coarse minced succulent dark thigh meat. Maximizes flavor and moisture in dumplings and seekh kababs."
  },
  {
    "id": 12,
    "name": "Chicken Stir-Fry Strips",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u099f\u09be\u09b0-\u09ab\u09cd\u09b0\u09be\u0987 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u09aa\u09b8",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 435,
    "unit": "500g",
    "img": "placeholder.jpg",
    "badge": "Quick Cook",
    "badgeType": "",
    "halal": true,
    "desc": "Precision hand-cut boneless chicken strips. Cooks in under 5 minutes for noodles and fajitas."
  },
  {
    "id": 13,
    "name": "Chicken Curry Cut (Skinless - Medium)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u0995\u09be\u09b0\u09bf \u0995\u09be\u099f (\u09b8\u09cd\u0995\u09bf\u09a8\u09b2\u09c7\u09b8 - \u09ae\u09be\u099d\u09be\u09b0\u09bf \u09aa\u09bf\u09b8)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 280,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Daily Curry",
    "badgeType": "",
    "halal": true,
    "desc": "Skinless broiler chicken portioned into 12-14 curry pieces with bone for rich traditional gravy."
  },
  {
    "id": 14,
    "name": "Chicken Biryani Cut (Large Pieces)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09bf\u09b0\u09bf\u09af\u09bc\u09be\u09a8\u09bf \u0995\u09be\u099f (\u09ac\u09a1\u09bc \u09aa\u09bf\u09b8)",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 290,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Biryani Special",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Large succulent portions (4-6 pieces per kg) crafted specifically for Kacchi and Dum Biryani."
  },
  {
    "id": 15,
    "name": "Chicken Supreme Cut (With Wing Bone)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09c1\u09aa\u09cd\u09b0\u09bf\u09ae \u0995\u09be\u099f",
    "cat": "cuts",
    "catLabel": "Prime Cuts",
    "price": 470,
    "unit": "500g (2 pcs)",
    "img": "placeholder.jpg",
    "badge": "Restaurant Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Bone-in skin-on airline breast cut favored by top continental culinary chefs."
  },
  {
    "id": 16,
    "name": "Broiler Whole Chicken Skin On",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09ae\u09c1\u09b0\u0997\u09bf (\u09b8\u09cd\u0995\u09bf\u09a8 \u09b8\u09b9)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 230,
    "unit": "1 kg (Dressed)",
    "img": "whole_chicken_skin_on.jpg",
    "badge": "Daily Fresh",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% Halal slaughtered farm-fresh broiler chicken with natural skin for moisture."
  },
  {
    "id": 17,
    "name": "Broiler Whole Chicken Skin Less",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09ae\u09c1\u09b0\u0997\u09bf (\u09b8\u09cd\u0995\u09bf\u09a8 \u099b\u09be\u09a1\u09bc\u09be)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 260,
    "unit": "1 kg (Dressed)",
    "img": "whole_chicken_skinless.jpg",
    "badge": "Clean Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Hygienically skinned and dressed whole chicken. Trimmed of excess fat."
  },
  {
    "id": 18,
    "name": "Sonali Chicken (Pakistani) - 5-600gm",
    "nameBn": "\u09b8\u09cb\u09a8\u09be\u09b2\u09bf \u09ae\u09c1\u09b0\u0997\u09bf (\u09aa\u09be\u0995\u09bf\u09b8\u09cd\u09a4\u09be\u09a8\u09bf) - \u09eb-\u09ec\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 320,
    "unit": "500-600g pc",
    "img": "sonali_chicken.jpg",
    "badge": "Heritage Breed",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Firm indigenous crossbreed chicken. Deshi-like aromatic taste for roast and rezala."
  },
  {
    "id": 19,
    "name": "Sonali Chicken (A Grade) - 700-800gm",
    "nameBn": "\u09b8\u09cb\u09a8\u09be\u09b2\u09bf \u09ae\u09c1\u09b0\u0997\u09bf (\u098f \u0997\u09cd\u09b0\u09c7\u09a1) - \u09ed\u09e6\u09e6-\u09ee\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 390,
    "unit": "700-800g pc",
    "img": "placeholder.jpg",
    "badge": "Popular",
    "badgeType": "",
    "halal": true,
    "desc": "Medium mature Sonali bird. Optimum meat-to-bone ratio for family dinner roasts."
  },
  {
    "id": 20,
    "name": "Sonali Chicken (Large) - 900-1000gm",
    "nameBn": "\u09b8\u09cb\u09a8\u09be\u09b2\u09bf \u09ae\u09c1\u09b0\u0997\u09bf (\u09b2\u09be\u09b0\u09cd\u099c) - \u09ef\u09e6\u09e6-\u09e7\u09e6\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 470,
    "unit": "900g-1kg pc",
    "img": "placeholder.jpg",
    "badge": "Family Size",
    "badgeType": "",
    "halal": true,
    "desc": "Fully mature farm-reared Sonali bird. Rich textured meat for slow-cooked curry."
  },
  {
    "id": 21,
    "name": "Deshi Duck - Local",
    "nameBn": "\u09a6\u09c7\u09b6\u09bf \u09b9\u09be\u0981\u09b8 - \u09b2\u09cb\u0995\u09be\u09b2",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 650,
    "unit": "1 pc (~1.2kg)",
    "img": "deshi_duck.jpg",
    "badge": "Village Fresh",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Locally raised farm duck from Haor wetlands. Rich, savory dark meat for bhuna."
  },
  {
    "id": 22,
    "name": "Sylheti Haor Duck (Clean Dressed - 1.4kg)",
    "nameBn": "\u09b8\u09bf\u09b2\u09c7\u099f\u09bf \u09b9\u09be\u0993\u09b0\u09c7\u09b0 \u09b9\u09be\u0981\u09b8 (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09e7.\u09ea \u0995\u09c7\u099c\u09bf)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 780,
    "unit": "1.3-1.4kg pc",
    "img": "placeholder.jpg",
    "badge": "Winter Special",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Wild-foraged large Haor duck with rich natural layer of fat for authentic duck bhuna."
  },
  {
    "id": 23,
    "name": "Roast/Local Chicken (Deshi Free Range)",
    "nameBn": "\u09b0\u09cb\u09b8\u09cd\u099f / \u09a6\u09c7\u09b6\u09bf \u09ae\u09c1\u09b0\u0997\u09bf (\u09ab\u09cd\u09b0\u09bf \u09b0\u09c7\u099e\u09cd\u099c)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 420,
    "unit": "1 pc (~800g)",
    "img": "roast_chicken.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "halal": true,
    "desc": "Free-range local deshi chicken. Highly nutritious with deep natural meat aroma."
  },
  {
    "id": 24,
    "name": "Organic Deshi Chicken (Naturolla Feed)",
    "nameBn": "\u0985\u09b0\u09cd\u0997\u09be\u09a8\u09bf\u0995 \u09a6\u09c7\u09b6\u09bf \u09ae\u09c1\u09b0\u0997\u09bf",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 540,
    "unit": "1 pc (~850g)",
    "img": "placeholder.jpg",
    "badge": "100% Organic",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Raised purely on organic greens, worms, and natural grains. Zero commercial feeds."
  },
  {
    "id": 25,
    "name": "Turkey Whole Bird (Clean Dressed - 3.5kg)",
    "nameBn": "\u099f\u09be\u09b0\u09cd\u0995\u09bf \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09aa\u09be\u0996\u09bf (\u09e9.\u09eb \u0995\u09c7\u099c\u09bf)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 2200,
    "unit": "3.5kg pc",
    "img": "placeholder.jpg",
    "badge": "Feast Special",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Dressed whole turkey for festive oven roasts, Thanksgiving, and celebration feasts."
  },
  {
    "id": 26,
    "name": "Quail Birds / Koel (Pack of 4 Dressed)",
    "nameBn": "\u0995\u09cb\u09af\u09bc\u09c7\u09b2 \u09aa\u09be\u0996\u09bf (\u09ea \u09aa\u09bf\u09b8 \u09aa\u09cd\u09af\u09be\u0995\u09c7\u099f)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 320,
    "unit": "4 pcs pack",
    "img": "placeholder.jpg",
    "badge": "High Protein",
    "badgeType": "",
    "halal": true,
    "desc": "Skinless, fully dressed tender quail birds. Nutrient-dense gourmet delicacy."
  },
  {
    "id": 27,
    "name": "Quail Birds / Koel (Pack of 8 Dressed)",
    "nameBn": "\u0995\u09cb\u09af\u09bc\u09c7\u09b2 \u09aa\u09be\u0996\u09bf (\u09ee \u09aa\u09bf\u09b8 \u09aa\u09cd\u09af\u09be\u0995\u09c7\u099f)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 600,
    "unit": "8 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Value Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Family value pack of 8 cleaned quails. Ideal for spicy deep fry and roast."
  },
  {
    "id": 28,
    "name": "Pigeon / Kobutor (Clean Dressed - Pair)",
    "nameBn": "\u0995\u09ac\u09c1\u09a4\u09b0 (\u09e7 \u099c\u09cb\u09a1\u09bc\u09be \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0)",
    "cat": "whole",
    "catLabel": "Whole Birds",
    "price": 480,
    "unit": "2 pcs pair",
    "img": "placeholder.jpg",
    "badge": "Health Broth",
    "badgeType": "",
    "halal": true,
    "desc": "Clean dressed squab/pigeon pair. Traditional convalescent remedy for post-illness vitality."
  },
  {
    "id": 29,
    "name": "Chicken Bologna (1200gm)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09cb\u09b2\u09cb\u09a8\u09bf\u09af\u09bc\u09be (\u09e7\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 750,
    "unit": "1200g Loaf",
    "img": "chicken_bologna.jpg",
    "badge": "Family Pack",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Premium seasoned chicken cold-cut loaf. Slice thin for breakfast sandwiches and salads."
  },
  {
    "id": 30,
    "name": "Chicken Bologna (Sliced 300g)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09cb\u09b2\u09cb\u09a8\u09bf\u09af\u09bc\u09be \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e9\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 230,
    "unit": "300g pack",
    "img": "placeholder.jpg",
    "badge": "Ready to Eat",
    "badgeType": "",
    "halal": true,
    "desc": "Pre-sliced deli chicken bologna. Quick sandwich filler for morning breakfast."
  },
  {
    "id": 31,
    "name": "Chicken Samosa (10 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09ae\u09c1\u099a\u09be (\u09e7\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 240,
    "unit": "10 pcs pack",
    "img": "chicken_samosa.jpg",
    "badge": "Crispy Snack",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Flaky pastry filled with spiced minced chicken breast, green chilies, and onions."
  },
  {
    "id": 32,
    "name": "Chicken Samosa (20 pcs Family Pack)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09ae\u09c1\u099a\u09be (\u09e8\u09e6 \u09aa\u09bf\u09b8 \u09ab\u09cd\u09af\u09be\u09ae\u09bf\u09b2\u09bf \u09aa\u09cd\u09af\u09be\u0995)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 450,
    "unit": "20 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Save \u09f330",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Mega party pack of 20 crispy chicken samosas. Deep fry or air fry straight from frozen."
  },
  {
    "id": 33,
    "name": "Chicken Spring Roll (10 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u09aa\u09cd\u09b0\u09bf\u0982 \u09b0\u09cb\u09b2 (\u09e7\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 260,
    "unit": "10 pcs pack",
    "img": "chicken_spring_roll.jpg",
    "badge": "Party Hit",
    "badgeType": "",
    "halal": true,
    "desc": "Crispy golden rolls stuffed with shredded chicken and crunchy seasonal vegetables."
  },
  {
    "id": 34,
    "name": "Chicken Spring Roll (20 pcs Family Pack)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u09aa\u09cd\u09b0\u09bf\u0982 \u09b0\u09cb\u09b2 (\u09e8\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 490,
    "unit": "20 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Family Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Value bundle of 20 crunchy chicken spring rolls for evening snacks and iftar."
  },
  {
    "id": 35,
    "name": "Chicken Sausage - Classic Plain (10 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09b8\u09c7\u099c - \u09aa\u09cd\u09b2\u09c7\u0987\u09a8 (\u09e7\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 290,
    "unit": "10 pcs pack",
    "img": "chicken_sausage.jpg",
    "badge": "Breakfast Hit",
    "badgeType": "",
    "halal": true,
    "desc": "Lightly smoked Halal chicken sausage links. Perfect for breakfast platters and hotdogs."
  },
  {
    "id": 36,
    "name": "Chicken Sausage - Cheese Loaded (10 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u099a\u09bf\u099c \u09b8\u09b8\u09c7\u099c (\u09e7\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 360,
    "unit": "10 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Cheese Burst",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Premium chicken sausage infused with melty mozzarella and cheddar cheese chunks."
  },
  {
    "id": 37,
    "name": "Chicken Sausage - Smoked & Spicy (10 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u09ae\u09cb\u0995\u09a1 \u09b8\u09cd\u09aa\u09be\u0987\u09b8\u09bf \u09b8\u09b8\u09c7\u099c (\u09e7\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 320,
    "unit": "10 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Spicy",
    "badgeType": "",
    "halal": true,
    "desc": "Smoky chicken franks spiced with paprika, crushed black pepper, and chili flakes."
  },
  {
    "id": 38,
    "name": "Chicken Nuggets (12 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09a8\u09be\u0997\u09c7\u099f\u09b8 (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 320,
    "unit": "12 pcs pack",
    "img": "chicken_nuggets.jpg",
    "badge": "Crispy Golden",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% pure chicken breast in golden seasoned breadcrumb coating. Ready in 4 minutes."
  },
  {
    "id": 39,
    "name": "Chicken Nuggets (24 pcs Jumbo Pack)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09a8\u09be\u0997\u09c7\u099f\u09b8 (\u09e8\u09ea \u09aa\u09bf\u09b8 \u099c\u09be\u09ae\u09cd\u09ac\u09cb \u09aa\u09cd\u09af\u09be\u0995)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 590,
    "unit": "24 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Best Value",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Mega box of 24 chicken nuggets. Perfect for kids tiffin and game night snacks."
  },
  {
    "id": 40,
    "name": "Chicken Meat Ball (20 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ae\u09bf\u099f \u09ac\u09b2 (\u09e8\u09e6 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 310,
    "unit": "20 pcs pack",
    "img": "chicken_meatball.jpg",
    "badge": "Gourmet",
    "badgeType": "",
    "halal": true,
    "desc": "Juicy seasoned chicken meatballs. Great for pasta, soup, and sweet-sour glaze."
  },
  {
    "id": 41,
    "name": "Chicken Meat Ball (40 pcs Jumbo)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ae\u09bf\u099f \u09ac\u09b2 (\u09ea\u09e6 \u09aa\u09bf\u09b8 \u099c\u09be\u09ae\u09cd\u09ac\u09cb)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 580,
    "unit": "40 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Value Pack",
    "badgeType": "",
    "halal": true,
    "desc": "Economy pack of 40 savory chicken meatballs. Versatile freezer essential."
  },
  {
    "id": 42,
    "name": "Chicken Popcorn (400g Pack)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09aa\u09aa\u0995\u09b0\u09cd\u09a8 (\u09ea\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 340,
    "unit": "400g pack",
    "img": "placeholder.jpg",
    "badge": "Crunchy",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Bite-sized chicken breast chunks coated in ultra-crispy southern spiced batter."
  },
  {
    "id": 43,
    "name": "Chicken Burger Patty (6 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09be\u09b0\u09cd\u0997\u09be\u09b0 \u09aa\u09cd\u09af\u09be\u099f\u09bf (\u09ec \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 350,
    "unit": "6 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Jumbo Size",
    "badgeType": "",
    "halal": true,
    "desc": "Thick juicy seasoned minced chicken patties. Pan-fry in 3 minutes for cafe burgers."
  },
  {
    "id": 44,
    "name": "Chicken Burger Patty (12 pcs Jumbo Box)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09be\u09b0\u09cd\u0997\u09be\u09b0 \u09aa\u09cd\u09af\u09be\u099f\u09bf (\u09e7\u09e8 \u09aa\u09bf\u09b8 \u09ac\u0995\u09cd\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 660,
    "unit": "12 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Bulk Saver",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "12-patty bulk pack for burger lovers. Consistent thickness and rich seasoning."
  },
  {
    "id": 45,
    "name": "Chicken Shami Kabab (6 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b6\u09be\u09ae\u09bf \u0995\u09be\u09ac\u09be\u09ac (\u09ec \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 280,
    "unit": "6 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Traditional",
    "badgeType": "",
    "halal": true,
    "desc": "Slow-cooked shredded chicken with chana daal and aromatic spices. Egg-dip & fry."
  },
  {
    "id": 46,
    "name": "Chicken Seekh Kabab (6 pcs Skewers)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09bf\u0996 \u0995\u09be\u09ac\u09be\u09ac (\u09ec \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 340,
    "unit": "6 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Mughlai",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Minced chicken skewers blended with mint, coriander, ginger, and roasted spices."
  },
  {
    "id": 47,
    "name": "Chicken Reshmi Kabab (6 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b0\u09c7\u09b6\u09ae\u09bf \u0995\u09be\u09ac\u09be\u09ac (\u09ec \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 360,
    "unit": "6 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Silky Tender",
    "badgeType": "",
    "halal": true,
    "desc": "Rich and creamy chicken kababs made with cream, cashews, and mild white pepper."
  },
  {
    "id": 48,
    "name": "Crispy Fried Chicken Strips (500g)",
    "nameBn": "\u0995\u09cd\u09b0\u09bf\u09b8\u09cd\u09aa\u09bf \u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u099f\u09cd\u09b0\u09bf\u09aa\u09b8 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 410,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Hot & Crispy",
    "badgeType": "",
    "halal": true,
    "desc": "Golden battered whole breast tenders. Restaurant-style crunch at home."
  },
  {
    "id": 49,
    "name": "Chicken Wontons (12 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u0993\u09a8\u099f\u09a8 (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 270,
    "unit": "12 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Soup & Fry",
    "badgeType": "",
    "halal": true,
    "desc": "Thin delicate pastry pouches packed with minced chicken and scallions. Boil or fry."
  },
  {
    "id": 50,
    "name": "Chicken Steamed Momos / Dumplings (12 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ae\u09cb\u09ae\u09cb / \u09a1\u09be\u09ae\u09cd\u09aa\u09b2\u09bf\u0982 (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 290,
    "unit": "12 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Tibetan Style",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Juicy chicken momos folded in translucent dough. Steam for 6 mins."
  },
  {
    "id": 51,
    "name": "Chicken Cheese Balls (12 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u099a\u09bf\u099c \u09ac\u09b2 (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 380,
    "unit": "12 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Cheese Ooze",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Minced chicken balls stuffed with gooey molten cheese center and panko crust."
  },
  {
    "id": 52,
    "name": "Chicken Drumstick Crispy Batter Coated (4 pcs)",
    "nameBn": "\u0995\u09cd\u09b0\u09bf\u09b8\u09cd\u09aa\u09bf \u09ac\u09cd\u09af\u09be\u099f\u09be\u09b0 \u09a1\u09cd\u09b0\u09be\u09ae\u09b8\u09cd\u099f\u09bf\u0995 (\u09ea \u09aa\u09bf\u09b8)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 420,
    "unit": "4 pcs pack",
    "img": "placeholder.jpg",
    "badge": "KFC Style",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Marinated drumsticks coated in ultra-flaky crunchy breading. Ready to deep fry."
  },
  {
    "id": 53,
    "name": "Chicken Kiev (Garlic Herb Butter - 2 pcs)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u0995\u09bf\u09ad (\u0997\u09be\u09b0\u09cd\u09b2\u09bf\u0995 \u09ac\u09be\u099f\u09be\u09b0 \u09ab\u09bf\u09b2\u09cd\u09a1)",
    "cat": "snacks",
    "catLabel": "Ready to Cook",
    "price": 450,
    "unit": "2 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Gourmet Entree",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Classic chicken breast fillet stuffed with seasoned herb-garlic butter that bursts on slicing."
  },
  {
    "id": 54,
    "name": "Marinated BBQ Chicken Wings (Hot & Spicy - 500g)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09b9\u099f \u09ac\u09bf\u09ac\u09bf\u0995\u09bf\u0989 \u0989\u0987\u0982\u09b8 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 340,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Spicy Glaze",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Wings pre-marinated in smoky chili-tomato BBQ sauce. Bake, air fry, or charcoal grill."
  },
  {
    "id": 55,
    "name": "Marinated BBQ Chicken Wings (Honey Mustard - 500g)",
    "nameBn": "\u09b9\u09be\u09a8\u09bf \u09ae\u09be\u09b8\u09cd\u099f\u09be\u09b0\u09cd\u09a1 \u09ac\u09bf\u09ac\u09bf\u0995\u09bf\u0989 \u0989\u0987\u0982\u09b8 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 360,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Sweet & Tangy",
    "badgeType": "",
    "halal": true,
    "desc": "Tender wings steeped in sweet honey, mustard seed paste, and aromatic herbs."
  },
  {
    "id": 56,
    "name": "Marinated Chicken Tikka (500g Skewer Ready)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u099a\u09bf\u0995\u09c7\u09a8 \u099f\u09bf\u0995\u09cd\u0995\u09be (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 470,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Smoky Tikka",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Boneless thigh cubes steeped in mustard oil, hung curd, Kashmiri red chili, and kasuri methi."
  },
  {
    "id": 57,
    "name": "Marinated Chicken Tandoori Quarter (2 pcs)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09a4\u09a8\u09cd\u09a6\u09c1\u09b0\u09bf \u09b2\u09c7\u0997 \u0995\u09cb\u09af\u09bc\u09be\u09b0\u09cd\u099f\u09be\u09b0 (\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 380,
    "unit": "2 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Authentic",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Deeply scored chicken leg quarters infused with Punjabi tandoori spice marinade."
  },
  {
    "id": 58,
    "name": "Marinated Chicken Malai Tikka (500g)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09ae\u09be\u09b2\u09be\u0987 \u099f\u09bf\u0995\u09cd\u0995\u09be (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 490,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Rich Cream",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Boneless breast cubes marinated with fresh clotted cream, green cardamom, and cashew paste."
  },
  {
    "id": 59,
    "name": "Marinated Chicken Hariyali Boti (500g)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09b9\u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09bf \u09ac\u09cb\u099f\u09bf (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 460,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Mint & Herbs",
    "badgeType": "",
    "halal": true,
    "desc": "Chicken cubes in vibrant fresh mint, cilantro, green chili, and yogurt marinade."
  },
  {
    "id": 60,
    "name": "Marinated Peri Peri Chicken Leg Quarter (2 pcs)",
    "nameBn": "\u09aa\u09c7\u09b0\u09bf \u09aa\u09c7\u09b0\u09bf \u09b2\u09c7\u0997 \u0995\u09cb\u09af\u09bc\u09be\u09b0\u09cd\u099f\u09be\u09b0 (\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 390,
    "unit": "2 pcs pack",
    "img": "placeholder.jpg",
    "badge": "African Heat",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Marinated in zesty African bird's eye chili, crushed garlic, and fresh lemon zest."
  },
  {
    "id": 61,
    "name": "Marinated Whole Chicken (Grill / Roast Ready)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u0986\u09b8\u09cd\u09a4 \u099a\u09bf\u0995\u09c7\u09a8 (\u0997\u09cd\u09b0\u09bf\u09b2 \u09b0\u09c7\u09a1\u09bf)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 360,
    "unit": "1 kg whole",
    "img": "placeholder.jpg",
    "badge": "Ready to Roast",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Whole cleaned broiler butterfly cut and seasoned for charcoal rotisserie or oven roasting."
  },
  {
    "id": 62,
    "name": "Marinated Chicken Shawarma Slices (500g)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09b6\u09be\u0993\u09af\u09bc\u09be\u09b0\u09ae\u09be \u09ae\u09bf\u099f (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 480,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Middle Eastern",
    "badgeType": "",
    "halal": true,
    "desc": "Thinly sliced thigh fillets spiced with cumin, sumac, coriander, and garlic vinegar."
  },
  {
    "id": 63,
    "name": "Marinated Shish Tawook Skewers (4 Skewers)",
    "nameBn": "\u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u099f\u09c7\u09a1 \u09b6\u09c0\u09b6 \u09a4\u09be\u0989\u0995 \u09b8\u09cd\u0995\u09bf\u0989\u09af\u09bc\u09be\u09b0\u09cd\u09b8",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 420,
    "unit": "4 skewers pack",
    "img": "placeholder.jpg",
    "badge": "Lebanese",
    "badgeType": "",
    "halal": true,
    "desc": "Skewered chicken cubes, bell peppers, and onions in garlic-lemon olive oil marinade."
  },
  {
    "id": 64,
    "name": "Marinated Herb Garlic Chicken Breast (500g)",
    "nameBn": "\u09b9\u09be\u09b0\u09cd\u09ac \u0997\u09be\u09b0\u09cd\u09b2\u09bf\u0995 \u099a\u09bf\u0995\u09c7\u09a8 \u09ac\u09cd\u09b0\u09c7\u09b8\u09cd\u099f (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 460,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Diet Special",
    "badgeType": "",
    "halal": true,
    "desc": "Lean breast steaks steeped in extra virgin olive oil, rosemary, thyme, and minced garlic."
  },
  {
    "id": 65,
    "name": "Marinated Lemon Pepper Drumsticks (500g)",
    "nameBn": "\u09b2\u09c7\u09ae\u09a8 \u09aa\u09c7\u09aa\u09be\u09b0 \u09a1\u09cd\u09b0\u09be\u09ae\u09b8\u09cd\u099f\u09bf\u0995 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "marinated",
    "catLabel": "Marinated BBQ",
    "price": 410,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Zesty Kick",
    "badgeType": "",
    "halal": true,
    "desc": "Plump drumsticks seasoned with cracked tellicherry peppercorns and fresh squeezed lemon."
  },
  {
    "id": 66,
    "name": "Premium Beef Curry Cut (Bone In - 1kg)",
    "nameBn": "\u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0997\u09b0\u09c1\u09b0 \u09ae\u09be\u0982\u09b8 (\u09b9\u09be\u09a1\u09bc \u09b8\u09b9 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 780,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Fresh Halal",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Tender grass-fed beef cut with proportioned bone and light fat for rich thick curry gravy."
  },
  {
    "id": 67,
    "name": "Premium Beef Boneless (1kg)",
    "nameBn": "\u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u0997\u09b0\u09c1\u09b0 \u09ae\u09be\u0982\u09b8 (\u09ac\u09cb\u09a8\u09b2\u09c7\u09b8 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 950,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "100% Solid Meat",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "100% pure boneless prime beef cuts. Ideal for beef bhuna, beef rezala, and boti kabab."
  },
  {
    "id": 68,
    "name": "Beef Ribs / Chaap Cut (1kg)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u099a\u09be\u09aa\u09c7\u09b0 \u09ae\u09be\u0982\u09b8 / \u09b0\u09bf\u09ac\u09b8 (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 820,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Chaap Special",
    "badgeType": "",
    "halal": true,
    "desc": "Flat rib slices suited for pan-frying Old Dhaka style beef chaap and slow grilling."
  },
  {
    "id": 69,
    "name": "Beef Shin Shank / Nehari Cut (1kg)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u09a8\u09c7\u09b9\u09be\u09b0\u09bf\u09b0 \u09ae\u09be\u0982\u09b8 / \u09a8\u09b2\u09cd\u09b2\u09bf \u09b8\u09b9 (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 850,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Nehari Cut",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Marrow bone center shank cuts loaded with collagen for rich, gelatinous Nehari stew."
  },
  {
    "id": 70,
    "name": "Beef Minced / Keema (Lean - 500g)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u0995\u09bf\u09ae\u09be (\u09b2\u09bf\u09a8 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 490,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Double Ground",
    "badgeType": "",
    "halal": true,
    "desc": "High quality lean beef minced fresh. Perfect for beef burger patties, lasagna, and kababs."
  },
  {
    "id": 71,
    "name": "Beef Steak Cuts (Ribeye / Sirloin - 500g)",
    "nameBn": "\u09ac\u09bf\u09ab \u09b8\u09cd\u099f\u09c7\u0995 \u0995\u09be\u099f (\u09b0\u09bf\u09ac\u0986\u0987 / \u09b8\u09be\u09b0\u09b2\u09af\u09bc\u09c7\u09a8)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 620,
    "unit": "500g (2 steaks)",
    "img": "placeholder.jpg",
    "badge": "Steakhouse Grade",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Thick marbled beef steaks aged for tenderness. Sear on cast iron pan for gourmet dinner."
  },
  {
    "id": 72,
    "name": "Beef Liver / Kolija (Clean Cut - 500g)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u0995\u09b2\u09bf\u099c\u09be (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 380,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Iron Rich",
    "badgeType": "",
    "halal": true,
    "desc": "Fresh nutrient-dense beef liver cleaned of outer membrane and cubed for spicy kolija bhuna."
  },
  {
    "id": 73,
    "name": "Beef Brain / Mogoj (Fresh Cleaned - 1 pc)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u09ae\u0997\u099c (\u09e7 \u09aa\u09bf\u09b8 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 340,
    "unit": "1 pc pack",
    "img": "placeholder.jpg",
    "badge": "Delicacy",
    "badgeType": "",
    "halal": true,
    "desc": "Intact, fresh cleaned beef brain ready for delicate spicy mogoj bhuna."
  },
  {
    "id": 74,
    "name": "Khashi / Mutton Curry Cut (1kg)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u09ae\u09be\u0982\u09b8 (\u0995\u09be\u09b0\u09bf \u0995\u09be\u099f - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 1150,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "100% Khashi",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Authentic young male castrated goat (Khashi). Mild aroma, succulent meat for rezala."
  },
  {
    "id": 75,
    "name": "Khashi / Mutton Boneless (1kg)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u09ae\u09be\u0982\u09b8 (\u09ac\u09cb\u09a8\u09b2\u09c7\u09b8 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 1450,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Solid Khashi",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Pure deboned mutton pieces. Perfect for Mutton Biryani, Korma, and Haleem."
  },
  {
    "id": 76,
    "name": "Khashi / Mutton Leg Whole (Clean Dressed - 1.5kg)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u0986\u09b8\u09cd\u09a4 \u09b0\u09be\u09a8 (\u09e7.\u09eb \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 1750,
    "unit": "1.5kg pc",
    "img": "placeholder.jpg",
    "badge": "Raan Roast",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Whole goat leg quarter trimmed and scored for traditional slow roasted Raan Mussallam."
  },
  {
    "id": 77,
    "name": "Khashi / Mutton Chops / Chaap (1kg)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u099a\u09be\u09aa / \u099a\u09aa\u09b8 (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 1250,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Mutton Chops",
    "badgeType": "",
    "halal": true,
    "desc": "Rib chop cuts with tender meat and rib bone. Marinate and pan sear with spices."
  },
  {
    "id": 78,
    "name": "Khashi / Mutton Minced / Keema (500g)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u0995\u09bf\u09ae\u09be (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 680,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Mutton Keema",
    "badgeType": "",
    "halal": true,
    "desc": "Fine minced fresh goat meat. Unbeatable rich aroma for keema matar and kofta."
  },
  {
    "id": 79,
    "name": "Khashi / Mutton Liver & Kidney Mix (500g)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u0995\u09b2\u09bf\u099c\u09be \u0993 \u0997\u09c1\u09b0\u09cd\u09a6\u09be (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "redmeat",
    "catLabel": "Beef & Mutton",
    "price": 550,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Gurda-Kolija",
    "badgeType": "",
    "halal": true,
    "desc": "Mutton liver and kidney combo washed and cut into small pieces for Gurda Kolija fry."
  },
  {
    "id": 80,
    "name": "Rui Fish (Clean Sliced - 1kg Net)",
    "nameBn": "\u09b0\u09c1\u0987 \u09ae\u09be\u099b (\u0995\u09be\u099f\u09be \u0993 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 420,
    "unit": "1 kg (Net Slices)",
    "img": "placeholder.jpg",
    "badge": "River Sweet",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Large river Rui fish scaled, gutted, and sliced into clean curry pieces with head."
  },
  {
    "id": 81,
    "name": "Katla Fish (Clean Sliced - 1kg Net)",
    "nameBn": "\u0995\u09be\u09a4\u09b2\u09be \u09ae\u09be\u099b (\u0995\u09be\u099f\u09be \u0993 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 460,
    "unit": "1 kg (Net Slices)",
    "img": "placeholder.jpg",
    "badge": "Large Petti",
    "badgeType": "",
    "halal": true,
    "desc": "Fatty belly Katla fish portioned into thick pieces. Sweet and flaky river catch."
  },
  {
    "id": 82,
    "name": "Pabda Fish (Clean Dressed - 500g)",
    "nameBn": "\u09aa\u09be\u09ac\u09a6\u09be \u09ae\u09be\u099b (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 480,
    "unit": "500g (8-10 pcs)",
    "img": "placeholder.jpg",
    "badge": "Sweet River",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Silky, delicate Pabda fish cleaned and ready for mustard oil shorshe curry."
  },
  {
    "id": 83,
    "name": "Tengra Fish (Clean Dressed - 500g)",
    "nameBn": "\u099f\u09c7\u0982\u09b0\u09be \u09ae\u09be\u099b (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 420,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Haor Fresh",
    "badgeType": "",
    "halal": true,
    "desc": "Freshwater small river Tengra. Ideal for potato-tomato spicy jhol."
  },
  {
    "id": 84,
    "name": "Shing Fish (Clean & Descaled - 500g)",
    "nameBn": "\u09b6\u09bf\u0982 \u09ae\u09be\u099b (\u099c\u09c0\u09ac\u09a8\u09cd\u09a4 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 580,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Blood Enriching",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Naturally nutritious live catfish dressed clean. Highly recommended health broth fish."
  },
  {
    "id": 85,
    "name": "Magur Fish (Clean Dressed - 500g)",
    "nameBn": "\u09ae\u09be\u0997\u09c1\u09b0 \u09ae\u09be\u099b (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 620,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Native Catch",
    "badgeType": "",
    "halal": true,
    "desc": "Deshi wild Magur catfish cleaned and portioned for nourishing light stew."
  },
  {
    "id": 86,
    "name": "Koi Fish (Deshi Farm Clean - 500g)",
    "nameBn": "\u0995\u09c8 \u09ae\u09be\u099b (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 380,
    "unit": "500g (5-6 pcs)",
    "img": "placeholder.jpg",
    "badge": "Tel Koi Cut",
    "badgeType": "",
    "halal": true,
    "desc": "Fat climbing perch Koi fish scaled and cleaned for traditional Tel Koi bhuna."
  },
  {
    "id": 87,
    "name": "Basa Fish Fillet (Boneless Skinless - 1kg)",
    "nameBn": "\u09ac\u09be\u09b8\u09be \u09ab\u09bf\u09b6 \u09ab\u09bf\u09b2\u09c7 (\u09ac\u09cb\u09a8\u09b2\u09c7\u09b8 - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 490,
    "unit": "1 kg (4-5 fillets)",
    "img": "placeholder.jpg",
    "badge": "Zero Bone",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Pure white boneless fish fillets. Ideal for fish & chips, fish fingers, and baking."
  },
  {
    "id": 88,
    "name": "Hilsha / Ilish Fish (Padma River Grade A - 1kg)",
    "nameBn": "\u09aa\u09a6\u09cd\u09ae\u09be\u09b0 \u0987\u09b2\u09bf\u09b6 (\u0997\u09cd\u09b0\u09c7\u09a1 \u098f - \u09e7 \u0995\u09c7\u099c\u09bf \u09b8\u09be\u0987\u099c)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 1650,
    "unit": "1 pc (approx 1kg)",
    "img": "placeholder.jpg",
    "badge": "Padma King",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Authentic silver Padma river Ilish. Maximum natural oil content and supreme aroma."
  },
  {
    "id": 89,
    "name": "Hilsha / Ilish Slices (Cut & Cleaned - 800g)",
    "nameBn": "\u0987\u09b2\u09bf\u09b6 \u09ae\u09be\u099b\u09c7\u09b0 \u099f\u09c1\u0995\u09b0\u09cb (\u0995\u09be\u099f\u09be \u0993 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 1450,
    "unit": "800g (6-8 pieces)",
    "img": "placeholder.jpg",
    "badge": "Ready to Fry",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Convenient pre-cut thick Ilish slices ready for Shorshe Ilish and Bhaja."
  },
  {
    "id": 90,
    "name": "Bagda Prawns (Cleaned & Deveined - 500g)",
    "nameBn": "\u09ac\u09be\u0997\u09a6\u09be \u099a\u09bf\u0982\u09a1\u09bc\u09bf (\u0996\u09cb\u09b8\u09be \u099b\u09be\u09a1\u09bc\u09be\u09a8\u09cb - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 680,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Peeled & Cleaned",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Brine water black tiger prawns peeled, deveined with tail on for malaikari."
  },
  {
    "id": 91,
    "name": "Galda Prawns (Jumbo Head-On - 1kg)",
    "nameBn": "\u0997\u09b2\u09a6\u09be \u099a\u09bf\u0982\u09a1\u09bc\u09bf (\u099c\u09be\u09ae\u09cd\u09ac\u09cb \u09b8\u09be\u0987\u099c - \u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 1250,
    "unit": "1 kg (6-8 large)",
    "img": "placeholder.jpg",
    "badge": "Jumbo Feast",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Giant freshwater river prawns with rich head fat for Royal Chingri Malaikari."
  },
  {
    "id": 92,
    "name": "Tiger Shrimp (Peeled & Deveined - 400g)",
    "nameBn": "\u099f\u09be\u0987\u0997\u09be\u09b0 \u09b6\u09cd\u09b0\u09bf\u09ae\u09cd\u09aa (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09ea\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 540,
    "unit": "400g pack",
    "img": "placeholder.jpg",
    "badge": "Quick Stir-fry",
    "badgeType": "",
    "halal": true,
    "desc": "Tender medium sea shrimps. Ideal for fried rice, pasta, and tempura."
  },
  {
    "id": 93,
    "name": "Squid Rings / Calamari (Clean Dressed - 500g)",
    "nameBn": "\u09b8\u09cd\u0995\u09c1\u0987\u09a1 \u09b0\u09bf\u0982\u09b8 / \u0995\u09be\u09b2\u09be\u09ae\u09be\u09b0\u09bf (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 460,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Seafood Special",
    "badgeType": "",
    "halal": true,
    "desc": "Bay of Bengal fresh squid cleaned, deskinned, and cut into tender calamari rings."
  },
  {
    "id": 94,
    "name": "Mud Crabs (Cleaned & Pre-cracked - 500g)",
    "nameBn": "\u0995\u09be\u0981\u0995\u09a1\u09bc\u09be (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 \u0993 \u09aa\u09cd\u09b0\u09bf\u0995\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09a1 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "seafood",
    "catLabel": "Fish & Seafood",
    "price": 520,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Coastal Catch",
    "badgeType": "",
    "halal": true,
    "desc": "Coastal mangrove mud crabs cleaned, halved with pre-cracked claws for chili crab."
  },
  {
    "id": 95,
    "name": "Fresh Brown Farm Eggs (Layer - Pack of 12)",
    "nameBn": "\u09ab\u09be\u09b0\u09cd\u09ae\u09c7\u09b0 \u09b2\u09be\u09b2 \u09a1\u09bf\u09ae (\u09e7\u09e8 \u09aa\u09bf\u09b8 \u09aa\u09cd\u09af\u09be\u0995)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 145,
    "unit": "12 pcs box",
    "img": "placeholder.jpg",
    "badge": "Daily Fresh",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Clean, graded fresh brown farm eggs. Collected daily from bio-secure farms."
  },
  {
    "id": 96,
    "name": "Fresh Brown Farm Eggs (Layer - Pack of 30 Tray)",
    "nameBn": "\u09ab\u09be\u09b0\u09cd\u09ae\u09c7\u09b0 \u09b2\u09be\u09b2 \u09a1\u09bf\u09ae (\u09e9\u09e6 \u09aa\u09bf\u09b8 \u0995\u09c7\u09b8/\u099f\u09cd\u09b0\u09c7)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 350,
    "unit": "30 pcs tray",
    "img": "placeholder.jpg",
    "badge": "Tray Saver",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Full monthly tray of 30 farm-fresh Grade A eggs in protective pulp packaging."
  },
  {
    "id": 97,
    "name": "Organic Deshi Chicken Eggs (Free Range - 12 pcs)",
    "nameBn": "\u0985\u09b0\u09cd\u0997\u09be\u09a8\u09bf\u0995 \u09a6\u09c7\u09b6\u09bf \u09ae\u09c1\u09b0\u0997\u09bf\u09b0 \u09a1\u09bf\u09ae (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 240,
    "unit": "12 pcs box",
    "img": "placeholder.jpg",
    "badge": "100% Deshi",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Authentic free-range deshi chicken eggs with vibrant golden orange yolks."
  },
  {
    "id": 98,
    "name": "Sonali Chicken Eggs (Pack of 12)",
    "nameBn": "\u09b8\u09cb\u09a8\u09be\u09b2\u09bf \u09ae\u09c1\u09b0\u0997\u09bf\u09b0 \u09a1\u09bf\u09ae (\u09e7\u09e8 \u09aa\u09bf\u09b8)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 190,
    "unit": "12 pcs box",
    "img": "placeholder.jpg",
    "badge": "Farm Fresh",
    "badgeType": "",
    "halal": true,
    "desc": "Nutritious medium-sized eggs from grain-fed Sonali heritage breed hens."
  },
  {
    "id": 99,
    "name": "Deshi Duck Eggs (Haor Wetland - 12 pcs)",
    "nameBn": "\u09b9\u09be\u0981\u09b8\u09c7\u09b0 \u09a1\u09bf\u09ae (\u09e7\u09e8 \u09aa\u09bf\u09b8 \u09aa\u09cd\u09af\u09be\u0995)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 220,
    "unit": "12 pcs box",
    "img": "placeholder.jpg",
    "badge": "Haor Fresh",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Large rich duck eggs with thick creamy yolk. Great for baking and boiling."
  },
  {
    "id": 100,
    "name": "Quail Eggs (Pack of 30 Eggs)",
    "nameBn": "\u0995\u09cb\u09af\u09bc\u09c7\u09b2\u09c7\u09b0 \u09a1\u09bf\u09ae (\u09e9\u09e6 \u09aa\u09bf\u09b8 \u09aa\u09cd\u09af\u09be\u0995)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 160,
    "unit": "30 pcs box",
    "img": "placeholder.jpg",
    "badge": "Superfood",
    "badgeType": "",
    "halal": true,
    "desc": "Bite-sized nutrient-dense speckled quail eggs loaded with vitamin B12."
  },
  {
    "id": 101,
    "name": "Pure Cow Milk (Pasteurized Cold Chilled - 1L)",
    "nameBn": "\u0996\u09be\u0981\u099f\u09bf \u09a4\u09b0\u09b2 \u0997\u09b0\u09c1\u09b0 \u09a6\u09c1\u09a7 (\u09e7 \u09b2\u09bf\u099f\u09be\u09b0)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 110,
    "unit": "1 Liter bottle",
    "img": "placeholder.jpg",
    "badge": "Farm Bottled",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "100% pure whole cow milk from grass-fed dairy cattle. Zero added water or powder."
  },
  {
    "id": 102,
    "name": "Artisanal Deshi Ghee (Grass Fed - 500g)",
    "nameBn": "\u0996\u09be\u0981\u099f\u09bf \u0997\u09be\u0993\u09af\u09bc\u09be \u0998\u09bf (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 680,
    "unit": "500g jar",
    "img": "placeholder.jpg",
    "badge": "Aromatic Ghee",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Slow-simmered traditional bilona cow milk ghee with granular texture and aroma."
  },
  {
    "id": 103,
    "name": "Fresh Cottage Cheese / Paneer (500g Block)",
    "nameBn": "\u09ab\u09cd\u09b0\u09c7\u09b6 \u09aa\u09a8\u09bf\u09b0 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae \u09ac\u09cd\u09b2\u0995)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 380,
    "unit": "500g block",
    "img": "placeholder.jpg",
    "badge": "High Protein",
    "badgeType": "",
    "halal": true,
    "desc": "Fresh soft cow milk paneer block. Holds shape perfectly when cubed and grilled."
  },
  {
    "id": 104,
    "name": "Pure Buffalo Ghee (Traditional - 400g)",
    "nameBn": "\u09ae\u09b9\u09bf\u09b7\u09c7\u09b0 \u0996\u09be\u0981\u099f\u09bf \u0998\u09bf (\u09ea\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 590,
    "unit": "400g jar",
    "img": "placeholder.jpg",
    "badge": "Rich Texture",
    "badgeType": "",
    "halal": true,
    "desc": "Traditional creamy white buffalo butter ghee for rich halwa, biryani, and sweets."
  },
  {
    "id": 105,
    "name": "Salted Table Butter (200g Block)",
    "nameBn": "\u09b8\u09b2\u09cd\u099f\u09c7\u09a1 \u099f\u09c7\u09ac\u09bf\u09b2 \u09ac\u09be\u099f\u09be\u09b0 (\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "dairy",
    "catLabel": "Eggs & Dairy",
    "price": 180,
    "unit": "200g block",
    "img": "placeholder.jpg",
    "badge": "Creamy",
    "badgeType": "",
    "halal": true,
    "desc": "Creamy churned salted butter for morning toast, baking, and basting steaks."
  },
  {
    "id": 106,
    "name": "Broiler Chicken Liver-Gizzard (500g)",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u09ae\u09c1\u09b0\u0997\u09bf\u09b0 \u0995\u09b2\u09bf\u099c\u09be \u0993 \u0997\u09bf\u09b2\u09be (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 190,
    "unit": "500g pack",
    "img": "liver_gizzard.jpg",
    "badge": "Cleaned",
    "badgeType": "",
    "halal": true,
    "desc": "Meticulously washed and cleaned fresh chicken liver and gizzard. High iron."
  },
  {
    "id": 107,
    "name": "Broiler Chicken Feet (Clean - 500g)",
    "nameBn": "\u09ac\u09cd\u09b0\u09af\u09bc\u09b2\u09be\u09b0 \u09ae\u09c1\u09b0\u0997\u09bf\u09b0 \u09aa\u09be (\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 - \u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 150,
    "unit": "500g pack",
    "img": "chicken_feet.jpg",
    "badge": "Collagen Rich",
    "badgeType": "",
    "halal": true,
    "desc": "Deeply cleansed and peeled chicken feet. Ideal for rich natural bone broth."
  },
  {
    "id": 108,
    "name": "Chicken Soup Bones / Back & Neck (1kg)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09cd\u09af\u09c1\u09aa\u09c7\u09b0 \u09b9\u09be\u09a1\u09bc (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 140,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Stock & Broth",
    "badgeType": "",
    "halal": true,
    "desc": "Meaty chicken back and neck bones for clear broth, ramen stock, and baby food."
  },
  {
    "id": 109,
    "name": "Chicken Heart & Gizzard Mix (500g)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b9\u09be\u09b0\u09cd\u099f \u0993 \u0997\u09bf\u09b2\u09be \u09ae\u09bf\u0995\u09cd\u09b8 (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 210,
    "unit": "500g pack",
    "img": "placeholder.jpg",
    "badge": "Nutrient Dense",
    "badgeType": "",
    "halal": true,
    "desc": "Cleaned chicken hearts and firm gizzards for spicy skewered yakitori or bhuna."
  },
  {
    "id": 110,
    "name": "Beef Bone Marrow / Nalli Bone (1kg)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u09a8\u09be\u09b2\u09cd\u09b2\u09bf / \u09ae\u09cd\u09af\u09be\u09b0\u09cb \u09ac\u09cb\u09a8 (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 380,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Marrow Rich",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Center cut beef marrow bones loaded with luscious marrow. Roast or stew for biryani."
  },
  {
    "id": 111,
    "name": "Beef Paya / Trotters (Clean Sliced - 4 Pcs)",
    "nameBn": "\u0997\u09b0\u09c1\u09b0 \u09aa\u09be\u09af\u09bc\u09be / \u0996\u09c1\u09b0 (\u09ea \u09aa\u09bf\u09b8 \u0995\u09be\u099f\u09be)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 650,
    "unit": "4 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Nehari / Paya",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Burnt, scraped, and precision cut beef trotters for slow-cooked gelatinous soup."
  },
  {
    "id": 112,
    "name": "Mutton Paya / Trotters (Clean Sliced - 4 Pcs)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u09aa\u09be\u09af\u09bc\u09be (\u09ea \u09aa\u09bf\u09b8 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 550,
    "unit": "4 pcs pack",
    "img": "placeholder.jpg",
    "badge": "Khashi Paya",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Carefully dressed young goat trotters for winter morning paya and naan."
  },
  {
    "id": 113,
    "name": "Mutton Bone Marrow Broth Bones (1kg)",
    "nameBn": "\u0996\u09be\u09b8\u09bf\u09b0 \u09b8\u09cd\u09af\u09c1\u09aa\u09c7\u09b0 \u09b9\u09be\u09a1\u09bc (\u09e7 \u0995\u09c7\u099c\u09bf)",
    "cat": "specialties",
    "catLabel": "Offal & Soup",
    "price": 320,
    "unit": "1 kg pack",
    "img": "placeholder.jpg",
    "badge": "Soup Bones",
    "badgeType": "",
    "halal": true,
    "desc": "Nutrient rich mutton marrow bones for aromatic bone broths and haleem."
  },
  {
    "id": 114,
    "name": "Smoked Chicken Ham Slices (250g)",
    "nameBn": "\u09b8\u09cd\u09ae\u09cb\u0995\u09a1 \u099a\u09bf\u0995\u09c7\u09a8 \u09b9\u09cd\u09af\u09be\u09ae \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e8\u09eb\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 320,
    "unit": "250g pack",
    "img": "placeholder.jpg",
    "badge": "Hickory Smoked",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Natural wood smoked chicken breast deli slices. High protein salad and sub topper."
  },
  {
    "id": 115,
    "name": "Chicken Pepperoni Slices (200g)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09aa\u09c7\u09aa\u09c7\u09b0\u09a8\u09bf \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 290,
    "unit": "200g pack",
    "img": "placeholder.jpg",
    "badge": "Pizza Favorite",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Cured chicken pepperoni with smoked paprika and fennel. Crisps up on baked pizza."
  },
  {
    "id": 116,
    "name": "Chicken Mortadella with Olives (300g)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ae\u09cb\u09b0\u099f\u09be\u09a1\u09c7\u09b2\u09be \u0985\u09b2\u09bf\u09ad \u09b8\u09b9 (\u09e9\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 360,
    "unit": "300g pack",
    "img": "placeholder.jpg",
    "badge": "Italian Style",
    "badgeType": "",
    "halal": true,
    "desc": "Smooth chicken mortadella studded with green Spanish olives and pistachio."
  },
  {
    "id": 117,
    "name": "Chicken Salami Slices (200g)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09b8\u09be\u09b2\u09be\u09ae\u09bf \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 270,
    "unit": "200g pack",
    "img": "placeholder.jpg",
    "badge": "Sandwich Ready",
    "badgeType": "",
    "halal": true,
    "desc": "Finely cured chicken salami flavored with garlic and whole black peppercorns."
  },
  {
    "id": 118,
    "name": "Beef Salami Slices (200g)",
    "nameBn": "\u09ac\u09bf\u09ab \u09b8\u09be\u09b2\u09be\u09ae\u09bf \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 380,
    "unit": "200g pack",
    "img": "placeholder.jpg",
    "badge": "Gourmet Beef",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Dry-cured Halal beef salami slices. Rich deep flavor for charcuterie boards."
  },
  {
    "id": 119,
    "name": "Beef Pepperoni Slices (200g)",
    "nameBn": "\u09ac\u09bf\u09ab \u09aa\u09c7\u09aa\u09c7\u09b0\u09a8\u09bf \u09b8\u09cd\u09b2\u09be\u0987\u09b8 (\u09e8\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 390,
    "unit": "200g pack",
    "img": "placeholder.jpg",
    "badge": "Pizza Classic",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Spicy cured beef pepperoni rounds that cup and crisp with melted mozzarella."
  },
  {
    "id": 120,
    "name": "Chicken Frankfurters (8 Jumbo Links)",
    "nameBn": "\u099a\u09bf\u0995\u09c7\u09a8 \u09ab\u09cd\u09b0\u09be\u0999\u09cd\u0995\u09ab\u09c1\u09b0\u09cd\u099f\u09be\u09b0\u09cd\u09b8 (\u09ee \u09aa\u09bf\u09b8 \u099c\u09be\u09ae\u09cd\u09ac\u09cb)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 340,
    "unit": "8 links pack",
    "img": "placeholder.jpg",
    "badge": "Jumbo Franks",
    "badgeType": "",
    "halal": true,
    "desc": "Plump chicken hot dog frankfurters in natural casing with a juicy snap."
  },
  {
    "id": 121,
    "name": "Cheese Cocktail Sausages (250g)",
    "nameBn": "\u099a\u09bf\u099c \u0995\u0995\u099f\u09c7\u09b2 \u09b8\u09b8\u09c7\u099c (\u09e8\u09eb\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "deli",
    "catLabel": "Cold Cuts & Deli",
    "price": 310,
    "unit": "250g pack",
    "img": "placeholder.jpg",
    "badge": "Party Bites",
    "badgeType": "",
    "halal": true,
    "desc": "Mini bite-sized cocktail sausages injected with molten cheddar cheese."
  },
  {
    "id": 122,
    "name": "Nobori Signature Biryani Masala (100g)",
    "nameBn": "\u09a8\u09cb\u09ac\u09cb\u09b0\u09bf \u09ac\u09bf\u09b0\u09bf\u09af\u09bc\u09be\u09a8\u09bf \u09ae\u09b8\u09b2\u09be (\u09e7\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 140,
    "unit": "100g jar",
    "img": "placeholder.jpg",
    "badge": "Secret Blend",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Stone-ground whole spices with jaiphal, javitri, shahi jeera, and star anise."
  },
  {
    "id": 123,
    "name": "Nobori Authentic Chicken Roast Masala (100g)",
    "nameBn": "\u09a8\u09cb\u09ac\u09cb\u09b0\u09bf \u099a\u09bf\u0995\u09c7\u09a8 \u09b0\u09cb\u09b8\u09cd\u099f \u09ae\u09b8\u09b2\u09be (\u09e7\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 130,
    "unit": "100g jar",
    "img": "placeholder.jpg",
    "badge": "Biye Bari Roast",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "Authentic wedding-style aromatic roast spice powder for rich brown chicken roast."
  },
  {
    "id": 124,
    "name": "Nobori BBQ Dry Rub Seasoning (150g)",
    "nameBn": "\u09a8\u09cb\u09ac\u09cb\u09b0\u09bf \u09ac\u09bf\u09ac\u09bf\u0995\u09bf\u0989 \u09a1\u09cd\u09b0\u09be\u0987 \u09b0\u09be\u09ac (\u09e7\u09eb\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 180,
    "unit": "150g shaker",
    "img": "placeholder.jpg",
    "badge": "BBQ Rub",
    "badgeType": "",
    "halal": true,
    "desc": "Smoky brown sugar, smoked paprika, garlic, onion, and chili rub for grilled meats."
  },
  {
    "id": 125,
    "name": "Nobori Tandoori Marinade Paste (250g Jar)",
    "nameBn": "\u09a8\u09cb\u09ac\u09cb\u09b0\u09bf \u09a4\u09a8\u09cd\u09a6\u09c1\u09b0\u09bf \u09ae\u09c7\u09b0\u09bf\u09a8\u09c7\u09a1 \u09aa\u09c7\u09b8\u09cd\u099f (\u09e8\u09eb\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 220,
    "unit": "250g jar",
    "img": "placeholder.jpg",
    "badge": "Instant Tandoori",
    "badgeType": "badge-gold",
    "halal": true,
    "desc": "Ready-to-use tandoori paste. Just mix with curd and coat chicken for instant BBQ."
  },
  {
    "id": 126,
    "name": "Pure Mustard Oil (Cold Pressed Ghani - 1L)",
    "nameBn": "\u0996\u09be\u0981\u099f\u09bf \u0995\u09be\u09a0\u09c7\u09b0 \u0998\u09be\u09a8\u09bf\u09b0 \u09b8\u09b0\u09bf\u09b7\u09be\u09b0 \u09a4\u09c7\u09b2 (\u09e7 \u09b2\u09bf\u099f\u09be\u09b0)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 290,
    "unit": "1 Liter bottle",
    "img": "placeholder.jpg",
    "badge": "Pungent Jhaajh",
    "badgeType": "badge-accent",
    "halal": true,
    "desc": "First press cold-extracted wooden ghani mustard oil for authentic fish fry and bhuna."
  },
  {
    "id": 127,
    "name": "Himalayan Pink Rock Salt (500g Shaker)",
    "nameBn": "\u09b9\u09bf\u09ae\u09be\u09b2\u09af\u09bc\u09be\u09a8 \u09aa\u09bf\u0982\u0995 \u09b8\u09b2\u09cd\u099f (\u09eb\u09e6\u09e6 \u0997\u09cd\u09b0\u09be\u09ae)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 120,
    "unit": "500g shaker",
    "img": "placeholder.jpg",
    "badge": "Mineral Rich",
    "badgeType": "",
    "halal": true,
    "desc": "100% natural unrefined mineral pink rock salt for seasoning steaks and salads."
  },
  {
    "id": 128,
    "name": "Garlic Ginger Puree Paste (350g Jar)",
    "nameBn": "\u0986\u09a6\u09be-\u09b0\u09b8\u09c1\u09a8 \u09aa\u09c7\u09b8\u09cd\u099f (\u09e9\u09eb\u09e6 \u0997\u09cd\u09b0\u09be\u09ae \u099c\u09be\u09b0)",
    "cat": "spices",
    "catLabel": "Spices & Marinades",
    "price": 160,
    "unit": "350g jar",
    "img": "placeholder.jpg",
    "badge": "Kitchen Prep",
    "badgeType": "",
    "halal": true,
    "desc": "Freshly crushed 50:50 ginger-garlic blend in vinegar preservative. No artificial color."
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
