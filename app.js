/**
 * Main Application Logic - Tinder Swipe Discovery, Virtual Ceremony Livestream, Deep Profiles & Dual Mode
 * The Serendipity Chapel - Global Open Weddings
 */

// 6 Diverse Global Weddings with Full Profiles, Culinary Menus & Smart Recommendation Tags
const COUNTRY_LIST = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "American Samoa",
  "Anguilla",
  "Aruba",
  "Bermuda",
  "Cayman Islands",
  "Falkland Islands",
  "French Polynesia",
  "Greenland",
  "Guam",
  "Hong Kong",
  "Macau",
  "Martinique",
  "Mayotte",
  "Puerto Rico",
  "Reunion",
  "Svalbard and Jan Mayen",
  "Turks and Caicos Islands",
  "Virgin Islands",
  "Western Sahara",
];

const INITIAL_WEDDINGS = [
  {
    id: "julian-eleanor",
    names: "Julian & Eleanor",
    passcode: "KYOTO2026",
    date: "Saturday, Oct 24, 2026",
    time: "04:30 PM JST (Sunset Gala)",
    month: "October",
    quarter: "q4-2026",
    setting: "indoor",
    noCamera: true,
    veganFriendly: true,
    smallCeremony: true,
    musicLive: false,
    petPolicy: "pet-friendly",
    agePolicy: "kids-welcome",
    venue: "The Glasshouse Conservatory",
    city: "Higashiyama, Kyoto, Japan",
    story:
      "Met in an indie bookstore during a sudden summer rainstorm in Kyoto.",
    fullStory:
      "Five years ago, Eleanor ducked into a quiet antiquarian bookshop in Kyoto to escape a sudden summer downpour. Julian, who was hand-binding a 19th-century poetry volume, offered her a cup of roasted barley tea. What began as a conversation about Japanese woodblock prints blossomed into years of wandering bamboo groves, studying seasonal botanicals, and hand-crafting art together.",
    bride: {
      name: "Eleanor Vance",
      age: 27,
      job: "Landscape Architect & Botanist",
      hobbies: "Watercolor painting, Japanese teaware, forest bathing",
      quote: "Plants teach us that true love blooms in its own patient season.",
    },
    groom: {
      name: "Julian Thorne",
      age: 29,
      job: "Antiquarian Bookbinder",
      hobbies:
        "Collecting vintage vinyl jazz, calligraphy ink-making, Kamo River walks",
      quote: "Every great love story is an unwritten masterpiece.",
    },
    highlights: [
      {
        icon: "flute",
        title: "Shakuhachi Flute Welcome",
        desc: "Acoustic bamboo melodies as guests step into the conservatory.",
      },
      {
        icon: "leaf",
        title: "Maple Leaf Vow Blessing",
        desc: "Guests write one-word blessings onto autumn maple leaves.",
      },
      {
        icon: "sparkles",
        title: "Night Lantern Floating",
        desc: "Floating handmade paper lanterns on the garden lotus pond.",
      },
    ],
    menu: {
      starter:
        "Seasonal Kyoto Kaiseki with Yuzu-glazed Gingko Nuts & Matsutake Wild Mushroom Broth",
      main: "Miso-marinated Black Cod with Steamed Bamboo Rice & Roasted Lotus Root",
      dessert: "Uji Matcha Mousse Tart with Gold Leaf & Sakura Blossom Tea",
      cocktail:
        '"Kyoto Petrichor" (Craft Gin, Umeshu Plum Liqueur, Shiso Leaf & Sparkling Tonic)',
    },
    recommendedIds: ["arthur-chloe", "kenji-aoi"],
    dressCode: "Sage Green & Champagne Gold",
    dressCodeColors: ["#8A9A86", "#E8D8C8", "#D4AF37", "#F4F1EA"],
    totalSlots: 6,
    slotsAvailable: 2,
    ringConfig: {
      ringTitle: "Rose Gold & Imperial Jade Solitaire",
      metalColor: 0xe8a598,
      metalness: 0.85,
      roughness: 0.22,
      gemColor: 0x00a86b,
      gemOpacity: 0.95,
      particleColor: 0x8a9a86,
      sparkleLightColor: 0x98fb98,
    },
    rsvps: [
      {
        id: "rsvp-1",
        name: "Dr. Hiroshi Tanaka",
        contact: "hiroshi.t@kyoto-u.ac.jp",
        note: "I am a retired botanist living in Kyoto, would love to bring a handmade mini-bonsai gift!",
        status: "Approved",
        date: "Oct 12, 2026",
      },
      {
        id: "rsvp-2",
        name: "Clara Oswald",
        contact: "@clara_traveler",
        note: "Solo traveler exploring Japan, would be deeply honored to witness your vows and take 35mm film photos for you!",
        status: "Pending",
        date: "Oct 15, 2026",
      },
    ],
  },
  {
    id: "hoanglong-minhanh",
    names: "Hoang Long & Minh Anh",
    passcode: "DANANG2026",
    date: "Sunday, Nov 15, 2026",
    time: "05:00 PM ICT (Golden Hour)",
    month: "November",
    quarter: "q4-2026",
    setting: "outdoor",
    noCamera: false,
    veganFriendly: false,
    smallCeremony: false,
    musicLive: true,
    petPolicy: "pet-friendly",
    agePolicy: "kids-welcome",
    venue: "Sunset Cliff Villa",
    city: "Son Tra Peninsula, Da Nang, Vietnam",
    story:
      "High school sweethearts who spent 7 years traversing long distances before reuniting.",
    fullStory:
      "Long and Anh met in a 10th-grade high school library in Da Nang. When university scholarships sent Long to Melbourne and Anh to Singapore, they spent 7 long years navigating flight layovers, 2:00 AM video calls, and hundreds of written postcards. Today, they celebrate their return to the coast where their journey began, proving that distance only sharpens true devotion.",
    bride: {
      name: "Nguyen Minh Anh",
      age: 26,
      job: "UI/UX Designer",
      hobbies:
        "Sunset ocean surfing, 35mm film photography, specialty cold brew",
      quote:
        "Home is not a place on a map; it is the person you fly 5,000 miles to see.",
    },
    groom: {
      name: "Tran Hoang Long",
      age: 27,
      job: "Software Engineer & Distance Runner",
      hobbies:
        "Acoustic guitar fingerpicking, marathon training, cooking spicy noodle bowls",
      quote:
        "We counted down 2,550 days apart, and I would wait them all over again.",
    },
    highlights: [
      {
        icon: "sunset",
        title: "Barefoot Cliffside Vows",
        desc: "Overlooking the turquoise sea as the golden sun melts into the horizon.",
      },
      {
        icon: "music",
        title: "Acoustic Guitar Duet",
        desc: "Long performing their favorite indie ballads under fairy lights.",
      },
      {
        icon: "flame",
        title: "Midnight Beach Bonfire",
        desc: "Toasting marshmallows and strumming folk songs with strangers and friends.",
      },
    ],
    menu: {
      starter:
        "Cham Island Scallop Carpaccio with Passionfruit Chili Vinaigrette & Crispy Shallots",
      main: "Grilled Tamarind Tiger Prawns & Lemongrass Glazed Sea Bass over Fragrant Saffron Jasmine Rice",
      dessert:
        "Fresh Coconut Sorbet with Caramelized Da Nang Mango & Pandan Crêpe",
      cocktail:
        '"Son Tra Sunset" (Phu Quoc Dark Rum, Fresh Dragonfruit, Lychee Juice & Star Anise Mist)',
    },
    recommendedIds: ["mateo-camila", "arthur-chloe"],
    dressCode: "Sunset Rose & Terracotta",
    dressCodeColors: ["#E8A598", "#C46D5E", "#8C3B4A", "#FFF1E6"],
    totalSlots: 8,
    slotsAvailable: 4,
    ringConfig: {
      ringTitle: "Classic 24K Yellow Gold & Solitaire Diamond",
      metalColor: 0xd4af37,
      metalness: 0.92,
      roughness: 0.15,
      gemColor: 0xffffff,
      gemOpacity: 0.98,
      particleColor: 0xe8a598,
      sparkleLightColor: 0xfff8dc,
    },
    rsvps: [
      {
        id: "rsvp-3",
        name: "Maya Lin",
        contact: "maya.backpack@gmail.com",
        note: "Backpacking across Vietnam. Your 7-year long distance journey inspired me profoundly!",
        status: "Approved",
        date: "Oct 18, 2026",
      },
    ],
  },
  {
    id: "liam-sophia",
    names: "Liam & Sophia",
    passcode: "FLORENCE2026",
    date: "Saturday, Dec 19, 2026",
    time: "06:00 PM CET (Candlelight Gala)",
    month: "December",
    quarter: "q4-2026",
    setting: "indoor",
    noCamera: false,
    veganFriendly: false,
    smallCeremony: true,
    musicLive: true,
    petPolicy: "no-pets",
    agePolicy: "adults-only",
    venue: "St. Clair Heritage Manor",
    city: "Tuscan Countryside, Florence, Italy",
    story:
      "Bonded over jazz vinyl records and late-night architectural sketching along the River Arno.",
    fullStory:
      "Sophia was curating an exhibition of Renaissance blueprints in Florence when Liam, a visiting architectural restorer, struck up an argument over the arch geometry of the Ponte Vecchio. That heated debate turned into an espresso at midnight, followed by endless evenings listening to vintage jazz vinyl records in Liam’s drafting studio surrounded by antique stone.",
    bride: {
      name: "Sophia Rossi",
      age: 28,
      job: "Art Curator & Renaissance Historian",
      hobbies:
        "Classical opera, vintage parchment collecting, bittersweet dark chocolate",
      quote:
        "Beauty endures when crafted with passion, patience, and devotion.",
    },
    groom: {
      name: "Liam O'Connor",
      age: 30,
      job: "Historical Restoration Architect",
      hobbies:
        "Espresso roasting, playing the cello, restoring vintage Italian roadsters",
      quote: "The strongest structures are founded on gentle harmony.",
    },
    highlights: [
      {
        icon: "music",
        title: "Courtyard String Quartet",
        desc: "Playing romantic arrangements of Chopin and Miles Davis.",
      },
      {
        icon: "wine",
        title: "Tuscan Wine Cellar Tasting",
        desc: "Private tasting of reserve Chianti Classico from the estate vines.",
      },
      {
        icon: "sparkles",
        title: "500-Candle Twilight Ball",
        desc: "Dancing under golden chandeliers in the 16th-century ballroom.",
      },
    ],
    menu: {
      starter:
        "Tuscan Burrata with Roasted Black Figs, Prosciutto di Parma & White Truffle Honey",
      main: "Handcrafted Pappardelle al Cinghiale (Braised Wild Boar) with 36-Month Parmigiano Reggiano",
      dessert:
        "Tuscan Espresso Tiramisu with Amaretto Crumble & Gold Dusted Hazelnut Macarons",
      cocktail:
        '"Florentine Twilight" (Campari, Sweet Vermouth, Blood Orange & Smoked Rosemary)',
    },
    recommendedIds: ["kenji-aoi", "julian-eleanor"],
    dressCode: "Velvet Wine & Midnight Gold",
    dressCodeColors: ["#8C3B4A", "#D4AF37", "#1E1B26", "#E8A598"],
    totalSlots: 4,
    slotsAvailable: 0,
    ringConfig: {
      ringTitle: "Platinum White Gold & Royal Midnight Sapphire",
      metalColor: 0xe5e4e2,
      metalness: 0.95,
      roughness: 0.12,
      gemColor: 0x0f52ba,
      gemOpacity: 0.92,
      particleColor: 0x8c3b4a,
      sparkleLightColor: 0xadd8e6,
    },
    rsvps: [
      {
        id: "rsvp-4",
        name: "Antonio Rossi",
        contact: "antonio@jazzflorence.it",
        note: "Local jazz bassist from Florence, would love to perform a quiet toast tune for your entrance.",
        status: "Approved",
        date: "Oct 05, 2026",
      },
      {
        id: "rsvp-5",
        name: "Sarah Jenkins",
        contact: "sarah.j@nycart.org",
        note: "Art historian on sabbatical in Tuscany. Deeply touched by your love for architecture!",
        status: "Approved",
        date: "Oct 08, 2026",
      },
    ],
  },
  {
    id: "mateo-camila",
    names: "Mateo & Camila",
    passcode: "BARCELONA2026",
    date: "Friday, Oct 30, 2026",
    time: "05:30 PM CEST (Breeze Gala)",
    month: "October",
    quarter: "q4-2026",
    setting: "outdoor",
    noCamera: false,
    veganFriendly: true,
    smallCeremony: false,
    musicLive: true,
    petPolicy: "pet-friendly",
    agePolicy: "kids-welcome",
    venue: "Mar Bella Seafront Garden",
    city: "Poblenou, Barcelona, Spain",
    story:
      "Met at a beachfront flamenco workshop and bonded over Mediterranean paella.",
    fullStory:
      "Camila was teaching an open-air flamenco rhythm class along the Barceloneta boardwalk when Mateo, returning from a coral reef marine diving survey, awkwardly tried clapping along to the Bulerías cadence. Camila burst into laughter, showed him the proper footwork, and within three hours they were sharing tapas and discovering their shared dream of ocean conservation and vibrant dance.",
    bride: {
      name: "Camila Perez",
      age: 27,
      job: "Flamenco Choreographer & Studio Founder",
      hobbies:
        "Mediterranean coastal road trips, pottery making, barefoot beach yoga",
      quote:
        "Life should be danced with fiery passion, open hands, and no regrets.",
    },
    groom: {
      name: "Mateo Silva",
      age: 28,
      job: "Marine Biologist & Coral Conservationist",
      hobbies:
        "Scuba diving, acoustic Spanish guitar, slow-cooking seafood paella",
      quote: "The ocean is vast, but my anchor will forever be with her.",
    },
    highlights: [
      {
        icon: "music",
        title: "Spanish Guitar & Cajón",
        desc: "Fiery and uplifting live Spanish guitar under palm trees.",
      },
      {
        icon: "sun",
        title: "Open-Air Giant Paella Station",
        desc: "Cooked live over fragrant wood fires right before guests.",
      },
      {
        icon: "sparkles",
        title: "Golden Sea Breeze Toast",
        desc: "Cava champagne toast as waves crash softly against the sand.",
      },
    ],
    menu: {
      starter:
        "Crispy Jamón Ibérico Croquetas with Smoked Paprika Aioli & Blistered Padrón Peppers",
      main: "Artisanal Seafood Paella with Mediterranean Tiger Prawns, Sea Scallops & Saffron Calasparra Rice",
      dessert:
        "San Sebastián Basque Burnt Cheesecake with Wild Berry & Thyme Compote",
      cocktail:
        '"Costa Brava Sangria" (Aged Tempranillo, Sparkling Cava, White Peaches & Cinnamon)',
    },
    recommendedIds: ["hoanglong-minhanh", "arthur-chloe"],
    dressCode: "Cobalt Blue & Golden Sand",
    dressCodeColors: ["#1E3A8A", "#F59E0B", "#93C5FD", "#FEF3C7"],
    totalSlots: 6,
    slotsAvailable: 3,
    ringConfig: {
      ringTitle: "Dual Rose & Yellow Gold Ocean Weave with Aquamarine",
      metalColor: 0xcd7f32,
      metalness: 0.86,
      roughness: 0.2,
      gemColor: 0x40e0d0,
      gemOpacity: 0.9,
      particleColor: 0x93c5fd,
      sparkleLightColor: 0xe0ffff,
    },
    rsvps: [
      {
        id: "rsvp-6",
        name: "Elena Sanchez",
        contact: "@elena_dancer",
        note: "Fellow flamenco enthusiast! Would love to clap in rhythm for your first dance by the sea!",
        status: "Approved",
        date: "Oct 19, 2026",
      },
    ],
  },
  {
    id: "arthur-chloe",
    names: "Arthur & Chloe",
    passcode: "COTSWOLDS2026",
    date: "Saturday, Nov 28, 2026",
    time: "02:00 PM GMT (Meadow Noon)",
    month: "November",
    quarter: "q4-2026",
    setting: "outdoor",
    noCamera: false,
    veganFriendly: true,
    smallCeremony: false,
    musicLive: true,
    petPolicy: "pet-friendly",
    agePolicy: "kids-welcome",
    venue: "Foxglove Meadow Estate",
    city: "Castle Combe, Cotswolds, UK",
    story:
      "Wildlife photographers who fell in love under rainy skies and misty English moors.",
    fullStory:
      "Trapped together inside a wooden bird-watching hide during a torrential rainstorm in the Cotswolds hills, Arthur and Chloe discovered they were both tracking the same elusive barn owl. While waiting for the storm to pass, they shared a thermos of hot Earl Grey tea and Arthur’s lemon biscuits. Four years and thirty thousand photographs later, they are exchanging vows in the very meadow where they met.",
    bride: {
      name: "Chloe Bennett",
      age: 26,
      job: "Children's Book Illustrator & Naturalist",
      hobbies:
        "Botanical foraging, watercolor flora painting, warm tea with lavender honey",
      quote:
        "Magic exists in quiet meadows and in the kindness we share with others.",
    },
    groom: {
      name: "Arthur Pendelton",
      age: 28,
      job: "Wildlife Photographer",
      hobbies:
        "Misty moorland hiking, vintage Land Rover mechanics, bird sound recording",
      quote: "Patience reveals the purest wonders of the world.",
    },
    highlights: [
      {
        icon: "dog",
        title: "Golden Retriever Ring Bearer",
        desc: "Their dog Barnaby trotting down the aisle wearing an ivy wreath.",
      },
      {
        icon: "music",
        title: "Acoustic British Folk Trio",
        desc: "Fiddle, acoustic guitar, and banjo playing cozy campfire tunes.",
      },
      {
        icon: "flower",
        title: "Wildflower Seed Favors",
        desc: "Every guest receives Cotswolds wildflower seeds to plant at home.",
      },
    ],
    menu: {
      starter:
        "Velvety Roasted Butternut Squash Soup with Crispy Sage, Pumpkin Seed Oil & Warm Sourdough",
      main: "Slow-Braised Cotswolds Lamb Shank with Rosemary Potato Mash & Honey Glazed Heritage Carrots",
      dessert:
        "Warm Blackberry & Bramley Apple Crumble served with Clotted Devonshire Cream",
      cocktail:
        '"Meadow Breeze" (Cotswolds Dry Gin, St. Germain Elderflower, Cloudy Apple & Thyme)',
    },
    recommendedIds: ["julian-eleanor", "mateo-camila"],
    dressCode: "Forest Olive & Autumn Tweed",
    dressCodeColors: ["#4D533C", "#C2A649", "#E6DEC8", "#8B5A2B"],
    totalSlots: 5,
    slotsAvailable: 1,
    ringConfig: {
      ringTitle: "Engraved Ivy Leaf Gold Band with Peridot Gem",
      metalColor: 0xdaa520,
      metalness: 0.82,
      roughness: 0.28,
      gemColor: 0x9acd32,
      gemOpacity: 0.94,
      particleColor: 0x8fbc8f,
      sparkleLightColor: 0x90ee90,
    },
    rsvps: [
      {
        id: "rsvp-7",
        name: "George Davies",
        contact: "george@cotswoldramblers.co.uk",
        note: "Local birdwatcher. Bringing our well-behaved golden retriever in a floral bow!",
        status: "Approved",
        date: "Oct 14, 2026",
      },
    ],
  },
  {
    id: "kenji-aoi",
    names: "Kenji & Aoi",
    passcode: "NISEKO2026",
    date: "Monday, Dec 28, 2026",
    time: "05:00 PM JST (Winter Fireside)",
    month: "December",
    quarter: "q4-2026",
    setting: "indoor",
    noCamera: true,
    veganFriendly: false,
    smallCeremony: true,
    musicLive: false,
    petPolicy: "no-pets",
    agePolicy: "kids-welcome",
    venue: "Snow Crystal Lodge",
    city: "Mount Annupuri, Niseko, Hokkaido, Japan",
    story:
      "Ski instructors who raced down snowy powder and promised each other forever beside a hearth.",
    fullStory:
      "During a whiteout blizzard on Mount Annupuri, Kenji and Aoi guided a stranded group of beginner skiers safely back to the warmth of the lodge. Over hot ginger tea and freshly baked Hokkaido melon bread in the snowed-in chalet, they bonded over their mutual reverence for the mountains, quiet winter evenings, and dreams of building a cozy alpine bakery.",
    bride: {
      name: "Aoi Takahashi",
      age: 27,
      job: "Pastry Chef & Alpine Ski Instructor",
      hobbies:
        "French pastry baking, winter landscape photography, knitting cozy wool scarves",
      quote:
        "Winter teaches us to cherish warmth, tenderness, and sweet company.",
    },
    groom: {
      name: "Kenji Sato",
      age: 29,
      job: "Mountain Guide & Woodcraft Artisan",
      hobbies:
        "Carving cedar furniture, pour-over specialty coffee, vinyl lo-fi beats",
      quote:
        "The fiercest blizzard cannot extinguish the hearth in our hearts.",
    },
    highlights: [
      {
        icon: "flame",
        title: "Grand Hearthside Vows",
        desc: "Exchanging rings by a roaring stone fireplace surrounded by pine boughs.",
      },
      {
        icon: "sparkles",
        title: "Alpine Sparkler Send-Off",
        desc: "Guests holding giant gold sparklers against the nighttime snowy pines.",
      },
      {
        icon: "coffee",
        title: "Hot Spiced Cocoa & Sake Bar",
        desc: "Warm artisanal treats and local sake to melt the winter chill.",
      },
    ],
    menu: {
      starter:
        "Hokkaido Smoked Salmon Tartare with Wasabi Crème Fraîche & Crispy Lotus Chips",
      main: "A5 Shiraoi Wagyu Beef Sukiyaki Hot Pot with Winter Mushrooms & Truffle Onsen Egg",
      dessert:
        "Warm Uji Matcha Lava Fondant Cake with Hokkaido Fresh Milk Vanilla Gelato",
      cocktail:
        '"Niseko Powder" (Warm Spiced Junmai Sake, Cinnamon, Yuzu Liqueur & Star Anise)',
    },
    recommendedIds: ["liam-sophia", "julian-eleanor"],
    dressCode: "Frost Silver & Glacier Blue",
    dressCodeColors: ["#E2E8F0", "#38BDF8", "#0F172A", "#BAE6FD"],
    totalSlots: 6,
    slotsAvailable: 3,
    ringConfig: {
      ringTitle: "Frosted Titanium Band & Ice-Blue Diamond Cluster",
      metalColor: 0xcbd5e1,
      metalness: 0.96,
      roughness: 0.1,
      gemColor: 0x7dd3fc,
      gemOpacity: 0.96,
      particleColor: 0xe0f2fe,
      sparkleLightColor: 0xf0f9ff,
    },
    rsvps: [
      {
        id: "rsvp-8",
        name: "Lukas Meyer",
        contact: "lukas@snowboarding.at",
        note: "Austrian ski coach visiting Hokkaido! Wishing you crisp snowy skies and warm fireside joy!",
        status: "Approved",
        date: "Oct 17, 2026",
      },
    ],
  },
];

// Initial Seed Wishes
const SEED_WISHES = [
  {
    id: "seed-1",
    weddingId: "julian-eleanor",
    coupleNames: "Julian & Eleanor",
    name: "A rainy cafe coder",
    isAnonymous: false,
    location: "Seattle, USA",
    content:
      "Stumbled across your open wedding while debugging code late at night. Seeing your story made my whole week softer. May your life together be as tranquil as a Kyoto garden! ☕🎋",
    drawing: null,
    time: "Just now",
    aiReply:
      "Dear Seattle friend, your kindness reached us right through our screens! Thank you for pausing your busy night to bring such peace into our day. May all your dreams compile beautifully!",
  },
  {
    id: "seed-2",
    weddingId: "julian-eleanor",
    coupleNames: "Julian & Eleanor",
    name: "A Kind Soul in the Shadows 🕵️",
    isAnonymous: true,
    location: "Secret Coordinates",
    content:
      "Sending quiet blessings from afar. May you always find solace in quiet bookstores and each other's embrace. Stay happy forever.",
    drawing: null,
    time: "12 minutes ago",
    aiReply:
      "To our mysterious secret friend in the shadows: your gentle words brought smiles to both of our faces. Thank you for leaving light where you tread!",
  },
  {
    id: "seed-3",
    weddingId: "hoanglong-minhanh",
    coupleNames: "Hoang Long & Minh Anh",
    name: "Commuter on the evening tram",
    isAnonymous: false,
    location: "Melbourne, Australia",
    content:
      "As someone currently in a long-distance relationship, hearing that you spent 7 years across oceans before today gives me immense hope. Wishing you both a lifetime of golden seaside sunsets! 🌊🌅",
    drawing: null,
    time: "25 minutes ago",
    aiReply:
      "From one believer in love to another: hold on tight, because true love bridges any ocean. Thank you with all our hearts for celebrating with us from Melbourne!",
  },
  {
    id: "seed-4",
    weddingId: "liam-sophia",
    coupleNames: "Liam & Sophia",
    name: "Vintage vinyl lover",
    isAnonymous: false,
    location: "Montreal, Canada",
    content:
      "Tuscan winter and jazz records? You two have immaculate taste! Playing some Bill Evans on the turntable right now in your honor. Congratulations Liam & Sophia! 🎷🍷",
    drawing: null,
    time: "42 minutes ago",
    aiReply:
      "What an exquisite tribute! Bill Evans is playing in our manor right now as well. Thank you for this magical synchronicity across the world!",
  },
];

class SerendipityApp {
  constructor() {
    this.viewMode = "guest"; // 'guest' or 'couple'
    this.discoveryMode = "grid";
    this.activeFilters = new Set();
    this.guestbookFilter = "all";
    this.countryFilter = "";
    this.selectedRegions = new Set();
    this.destinationRegions = [];
    this.destinationPage = 1;
    this.weddingPage = 1;
    this.weddingPageCount = 1;
    this.activeWeddingId = "julian-eleanor";
    this.activeTone = "romantic";
    this.authenticatedCoupleId = null;
    this.showCurrentCelebration = false;

    this.weddings = [];
    this.wishes = [];

    // Tinder deck state
    this.tinderDeck = [];
    this.currentTinderIndex = 0;
    this.isDraggingCard = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.dragCurrentX = 0;

    // Livestream state
    this.liveViewers = 1842;
    this.liveTimer = null;

    this.clinkCount = 148;
    this.heartCount = 324;

    this.init();
  }

  init() {
    this.loadState();
    this.initFallingPetals();
    this.initDanmaku();
    this.populateCoupleSelects();
    this.initFilterPanel();
    this.renderDestinationFilters();
    this.renderWeddingCards();
    this.updateActiveWeddingUI();
    this.updateHostDashboardUI();
    this.bindDOMEvents();
    this.renderWishes();
    this.syncCelebrationVisibility();
  }

  // --- LocalStorage State Management ---
  loadState() {
    const savedWeddings = localStorage.getItem("serendipity_weddings_v6");
    if (savedWeddings) {
      try {
        this.weddings = JSON.parse(savedWeddings);
      } catch (e) {
        this.weddings = [...INITIAL_WEDDINGS];
      }
    } else {
      this.weddings = [...INITIAL_WEDDINGS];
      this.saveWeddings();
    }

    const savedWishes = localStorage.getItem("serendipity_wishes_v6");
    if (savedWishes) {
      try {
        this.wishes = JSON.parse(savedWishes);
      } catch (e) {
        this.wishes = [...SEED_WISHES];
      }
    } else {
      this.wishes = [...SEED_WISHES];
      this.saveWishes();
    }

    this.updateGlobalCounters();
  }

  saveWeddings() {
    localStorage.setItem(
      "serendipity_weddings_v6",
      JSON.stringify(this.weddings),
    );
    this.updateGlobalCounters();
  }

  saveWishes() {
    localStorage.setItem("serendipity_wishes_v6", JSON.stringify(this.wishes));
    this.updateGlobalCounters();
  }

  updateGlobalCounters() {
    const totalWishes = this.wishes.length;
    const globalCountEl = document.getElementById("global-wish-count");
    if (globalCountEl) {
      globalCountEl.innerHTML = `Celebrating <strong>${this.weddings.length}</strong> weddings • <strong>${totalWishes}</strong> blessings sent`;
    }
    const countAllEl = document.getElementById("count-all");
    if (countAllEl) {
      countAllEl.textContent = totalWishes;
    }

    let totalPending = 0;
    this.weddings.forEach((w) => {
      totalPending += w.rsvps.filter((r) => r.status === "Pending").length;
    });
    const badge = document.getElementById("pending-rsvp-badge");
    if (badge) {
      badge.classList.toggle("hidden", totalPending === 0);
    }
  }

  getActiveWedding() {
    return (
      this.weddings.find((w) => w.id === this.activeWeddingId) ||
      this.weddings[0]
    );
  }

  getWeddingCountry(wedding) {
    if (wedding.country) return wedding.country;
    const parts = (wedding.city || "")
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    return parts[parts.length - 1] || "Unknown";
  }

  getWeddingCity(wedding) {
    if (wedding.cityName) return wedding.cityName;
    const parts = (wedding.city || "")
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    if (parts.length <= 1) return parts[0] || "Unknown";
    if (parts.length === 2) return parts[0];

    const candidateList = parts.slice(0, -1);
    const filtered = candidateList.filter(
      (part) =>
        !/(Peninsula|Countryside|District|Region|Higashiyama|Castle|Mount|Mountain|Annupuri|Valley)/i.test(
          part,
        ),
    );
    return (
      filtered[filtered.length - 1] ||
      candidateList[candidateList.length - 1] ||
      "Unknown"
    );
  }

  populateCoupleSelects() {
    const hostSelect = document.getElementById("host-couple-select");
    const authSelect = document.getElementById("auth-couple-select");

    const optionsHTML = this.weddings
      .map(
        (w) => `
      <option value="${w.id}">${w.names} (${w.city.split(",")[0].trim()})</option>
    `,
      )
      .join("");

    if (hostSelect) hostSelect.innerHTML = optionsHTML;
    if (authSelect) authSelect.innerHTML = optionsHTML;
  }

  selectWedding(weddingId) {
    this.activeWeddingId = weddingId;
    this.showCurrentCelebration = true;
    this.renderWeddingCards();
    this.updateActiveWeddingUI();
    this.updateHostDashboardUI();

    if (this.guestbookFilter === "current") {
      this.renderWishes();
    }

    const couple = this.getActiveWedding();
    this.showToast(`Now celebrating with ${couple.names}!`, "💍");
    this.syncCelebrationVisibility();
  }

  renderDestinationFilters() {
    const countrySelect = document.getElementById("country-filter-select");
    const regionList = document.getElementById("destination-region-list");
    const pagination = document.getElementById("destination-region-pagination");
    const matchedCount = document.getElementById("matched-count-badge");
    const matchesList = document.getElementById("matching-weddings-list");
    if (!countrySelect || !regionList) return;

    countrySelect.innerHTML =
      '<option value="">All countries</option>' +
      COUNTRY_LIST.map(
        (country) => `
      <option value="${this.escapeHTML(country)}">${this.escapeHTML(country)}</option>
    `,
      ).join("");
    countrySelect.value = this.countryFilter || "";

    const pageSize = 8;
    const pageCount = Math.max(
      1,
      Math.ceil(this.destinationRegions.length / pageSize),
    );
    this.destinationPage = Math.min(this.destinationPage, pageCount);
    const pageRegions = this.destinationRegions.slice(
      (this.destinationPage - 1) * pageSize,
      this.destinationPage * pageSize,
    );

    if (!this.countryFilter) {
      regionList.innerHTML =
        '<p class="text-[11px] text-gray-400 italic">Choose a country to browse its provinces and cities.</p>';
    } else if (this.isLoadingDestinationRegions) {
      regionList.innerHTML =
        '<p class="text-[11px] text-gray-500">Loading provinces and cities...</p>';
    } else if (this.destinationRegionsError) {
      regionList.innerHTML = `<p class="text-[11px] text-rose-700">${this.escapeHTML(this.destinationRegionsError)}</p>`;
    } else if (this.destinationRegions.length === 0) {
      regionList.innerHTML =
        '<p class="text-[11px] text-gray-400 italic">No province or city list is available for this country.</p>';
    } else {
      regionList.innerHTML = pageRegions
        .map(
          (region) => `
            <label class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-gray-700 hover:bg-wedding-blush/70 cursor-pointer">
              <input type="checkbox" class="destination-region-checkbox h-4 w-4 rounded border-gray-300 text-wedding-wine focus:ring-wedding-rose" value="${this.escapeHTML(region)}" ${this.selectedRegions.has(region) ? "checked" : ""} />
              <span>${this.escapeHTML(region)}</span>
            </label>
          `,
        )
        .join("");
    }

    if (pagination) {
      pagination.innerHTML =
        this.destinationRegions.length > pageSize
          ? `
          <button type="button" class="destination-page-btn rounded-lg border border-gray-200 px-2.5 py-1 text-[10px] font-semibold text-gray-600 disabled:opacity-40" data-page="${this.destinationPage - 1}" ${this.destinationPage === 1 ? "disabled" : ""}>Previous</button>
          <span class="text-[10px] text-gray-500">Page ${this.destinationPage} of ${pageCount}</span>
          <button type="button" class="destination-page-btn rounded-lg border border-gray-200 px-2.5 py-1 text-[10px] font-semibold text-gray-600 disabled:opacity-40" data-page="${this.destinationPage + 1}" ${this.destinationPage === pageCount ? "disabled" : ""}>Next</button>
        `
          : "";
      pagination.querySelectorAll(".destination-page-btn").forEach((button) => {
        button.addEventListener("click", () => {
          this.destinationPage = Number(button.dataset.page);
          this.renderDestinationFilters();
        });
      });
    }

    const matchedWeddings = this.weddings.filter((w) => {
      const countryMatch =
        !this.countryFilter || this.getWeddingCountry(w) === this.countryFilter;
      const regionMatch =
        this.selectedRegions.size === 0 ||
        [...this.selectedRegions].some(
          (region) =>
            this.normalizeLocation(this.getWeddingCity(w)) ===
            this.normalizeLocation(region),
        );
      return countryMatch && regionMatch;
    });

    const regionPageCount = this.selectedRegions.size
      ? Math.max(
          ...[...this.selectedRegions].map((region) =>
            this.getDestinationPageCount(this.countryFilter, region),
          ),
        )
      : 1;
    if (matchedCount) {
      matchedCount.textContent = String(
        this.selectedRegions.size
          ? Math.max(regionPageCount * 6, matchedWeddings.length)
          : matchedWeddings.length,
      );
    }

    if (matchesList) {
      if (!matchedWeddings.length) {
        matchesList.innerHTML = this.selectedRegions.size
          ? '<p class="text-[11px] text-gray-500 italic">Sample listings are shown in the wedding grid.</p>'
          : '<p class="text-[11px] text-gray-400 italic">No weddings match this destination yet.</p>';
      } else {
        matchesList.innerHTML = matchedWeddings
          .map(
            (w) => `
          <button type="button" class="match-item-btn w-full text-left rounded-xl border border-gray-200 bg-gray-50 hover:border-wedding-wine hover:bg-wedding-blush px-2.5 py-2 transition" data-match-id="${w.id}">
            <div class="flex items-center justify-between gap-2">
              <span class="font-serif text-sm font-bold text-wedding-wine">${this.escapeHTML(w.names)}</span>
              <span class="text-[10px] text-wedding-wine bg-white rounded-full px-2 py-0.5 border border-wedding-rose/20">${this.escapeHTML(this.getWeddingCity(w))}</span>
            </div>
            <p class="text-[10px] text-gray-500 mt-1">${this.escapeHTML(w.venue)}</p>
          </button>
        `,
          )
          .join("");

        matchesList.querySelectorAll(".match-item-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-match-id");
            if (id) this.selectWedding(id);
          });
        });
      }
    }
  }

  async loadDestinationRegions(country) {
    const requestId = (this.destinationRequestId || 0) + 1;
    this.destinationRequestId = requestId;
    this.destinationRegions = [];
    this.destinationRegionsError = "";
    this.isLoadingDestinationRegions = Boolean(country);
    this.destinationPage = 1;
    this.renderDestinationFilters();
    if (!country) return;

    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country }),
        },
      );
      if (!response.ok) throw new Error("Could not load destinations.");
      const result = await response.json();
      if (requestId !== this.destinationRequestId) return;
      if (result.error || !Array.isArray(result.data?.states)) {
        throw new Error(
          "No province or city list is available for this country.",
        );
      }
      this.destinationRegions = result.data.states
        .map((region) => (typeof region === "string" ? region : region.name))
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
    } catch (error) {
      if (requestId !== this.destinationRequestId) return;
      this.destinationRegionsError =
        error.message || "Could not load destinations.";
    } finally {
      if (requestId !== this.destinationRequestId) return;
      this.isLoadingDestinationRegions = false;
      this.renderDestinationFilters();
    }
  }

  normalizeLocation(location) {
    return String(location || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  getDestinationPageCount(country, region) {
    const key = `${country}:${region}`.toLowerCase();
    let hash = 2166136261;
    for (let index = 0; index < key.length; index++) {
      hash = Math.imul(hash ^ key.charCodeAt(index), 16777619) >>> 0;
    }
    return (hash % 8) + 1;
  }

  weddingMatchesFilters(wedding) {
    const checks = {
      outdoor: wedding.setting === "outdoor",
      indoor: wedding.setting === "indoor",
      "pet-friendly": wedding.petPolicy === "pet-friendly",
      "no-pets": wedding.petPolicy === "no-pets",
      "kids-welcome": wedding.agePolicy === "kids-welcome",
      "adults-only": wedding.agePolicy === "adults-only",
      "has-slots": wedding.slotsAvailable > 0,
      "no-camera": wedding.noCamera === true,
      "vegan-friendly": wedding.veganFriendly === true,
      "small-ceremony": wedding.smallCeremony === true,
      "live-music": wedding.musicLive === true,
    };
    return [...this.activeFilters].every((filter) => checks[filter]);
  }

  createDemoWedding(country, region, index) {
    const key = `${country}:${region}:${index}`;
    let seed = 0;
    for (let position = 0; position < key.length; position++) {
      seed = (seed * 31 + key.charCodeAt(position)) >>> 0;
    }

    const firstNames = [
      "Avery",
      "Morgan",
      "Riley",
      "Jordan",
      "Casey",
      "Taylor",
      "Jamie",
      "Skyler",
      "Quinn",
      "Robin",
      "Cameron",
      "Drew",
      "Parker",
      "Reese",
      "Sage",
      "Alex",
    ];
    const stories = [
      "A small gathering shaped by family, music, and the place they call home.",
      "A joyful celebration bringing their favorite people together for one day.",
      "An intimate ceremony filled with local flowers, warm wishes, and good food.",
      "A relaxed celebration inspired by the landscapes and traditions of the region.",
      "A heartfelt day planned around the little moments they love most.",
      "A gathering of friends and family with a simple promise at its center.",
    ];
    const months = [
      "March",
      "May",
      "June",
      "August",
      "September",
      "October",
      "December",
    ];
    const venues = [
      "Garden Pavilion",
      "Riverside House",
      "Old Town Courtyard",
      "Hilltop Conservatory",
    ];
    const hasOutdoor = this.activeFilters.has("outdoor");
    const hasIndoor = this.activeFilters.has("indoor");
    const hasPetFriendly = this.activeFilters.has("pet-friendly");
    const hasNoPets = this.activeFilters.has("no-pets");
    const hasKidsWelcome = this.activeFilters.has("kids-welcome");
    const hasAdultsOnly = this.activeFilters.has("adults-only");

    return {
      id: `sample-${seed}-${index}`,
      names: `${firstNames[seed % firstNames.length]} & ${firstNames[Math.floor(seed / 7) % firstNames.length]}`,
      date: `Saturday, ${months[seed % months.length]} ${(seed % 27) + 1}, 2027`,
      city: `${region}, ${country}`,
      venue: `${region} ${venues[Math.floor(seed / 11) % venues.length]}`,
      story: stories[Math.floor(seed / 13) % stories.length],
      setting: hasOutdoor
        ? "outdoor"
        : hasIndoor
          ? "indoor"
          : seed % 2
            ? "outdoor"
            : "indoor",
      petPolicy: hasPetFriendly
        ? "pet-friendly"
        : hasNoPets
          ? "no-pets"
          : seed % 2
            ? "pet-friendly"
            : "no-pets",
      agePolicy: hasKidsWelcome
        ? "kids-welcome"
        : hasAdultsOnly
          ? "adults-only"
          : seed % 2
            ? "kids-welcome"
            : "adults-only",
      slotsAvailable: this.activeFilters.has("has-slots")
        ? (seed % 6) + 1
        : seed % 7,
      noCamera: this.activeFilters.has("no-camera") || seed % 3 === 0,
      veganFriendly: this.activeFilters.has("vegan-friendly") || seed % 2 === 0,
      smallCeremony: this.activeFilters.has("small-ceremony") || seed % 3 === 1,
      musicLive: this.activeFilters.has("live-music") || seed % 2 === 1,
      isDemo: true,
    };
  }

  applyLocationSelection() {
    this.weddingPage = 1;
    this.filterTinderDeck();
    this.renderDestinationFilters();
    this.renderTinderStack();
    this.renderWeddingCards();
    this.syncCelebrationVisibility();

    const selectedMatches = this.weddings.filter((w) => {
      const countryMatch = this.getWeddingCountry(w) === this.countryFilter;
      const regionMatch = [...this.selectedRegions].some(
        (region) =>
          this.normalizeLocation(this.getWeddingCity(w)) ===
          this.normalizeLocation(region),
      );
      return countryMatch && regionMatch;
    });

    if (selectedMatches.length > 0) {
      this.activeWeddingId = selectedMatches[0].id;
      this.showCurrentCelebration = true;
      this.updateActiveWeddingUI();
      this.syncCelebrationVisibility();
      this.showToast(
        `Showing weddings in ${[...this.selectedRegions].join(", ")} ✨`,
        "📍",
      );
    } else {
      this.showCurrentCelebration = false;
      this.syncCelebrationVisibility();
      this.showToast(
        "No wedding matches this destination yet. Try another country or city.",
        "📍",
      );
    }

    if (this.guestbookFilter === "current") this.renderWishes();
  }

  syncCelebrationVisibility() {
    const celebrationSection = document.getElementById(
      "active-celebration-section",
    );
    if (!celebrationSection) return;
    celebrationSection.classList.toggle("hidden", !this.showCurrentCelebration);
  }

  // --- Filter Panel Logic ---
  initFilterPanel() {
    const toggleBtn = document.getElementById("filter-panel-toggle");
    const panel = document.getElementById("filter-panel-dropdown");
    if (!toggleBtn || !panel) return;

    const filterContainer = toggleBtn.parentElement;
    const filterSlot = document.getElementById("destination-wedding-filters");
    if (filterContainer && filterSlot) filterSlot.appendChild(filterContainer);

    document.querySelectorAll(".filter-checkbox-input").forEach((input) => {
      input.addEventListener("change", () => {
        const filterKey = input.getAttribute("data-filter");
        if (input.checked) {
          this.activeFilters.add(filterKey);
        } else {
          this.activeFilters.delete(filterKey);
        }
        this.weddingPage = 1;
        this.updateFilterBadge();
        this.renderWeddingCards();
      });
    });

    const clearBtn = document.getElementById("filter-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        this.activeFilters.clear();
        document
          .querySelectorAll(".filter-checkbox-input")
          .forEach((i) => (i.checked = false));
        this.weddingPage = 1;
        this.updateFilterBadge();
        this.renderWeddingCards();
      });
    }
  }

  updateFilterBadge() {
    const badge = document.getElementById("filter-active-count");
    const toggleBtn = document.getElementById("filter-panel-toggle");
    if (!badge) return;
    const count = this.activeFilters.size;
    badge.textContent = count;
    badge.classList.toggle("hidden", count === 0);
    if (toggleBtn) {
      toggleBtn.classList.toggle("ring-2", count > 0);
      toggleBtn.classList.toggle("ring-wedding-wine", count > 0);
    }
  }

  // --- Tinder Swipe Discovery Deck ---
  initTinderDeck() {
    this.filterTinderDeck();
    this.renderTinderStack();
  }

  filterTinderDeck() {
    let filtered = [...this.weddings];

    if (this.selectedRegions.size > 0) {
      filtered = filtered.filter(
        (w) =>
          this.getWeddingCountry(w) === this.countryFilter &&
          [...this.selectedRegions].some(
            (region) =>
              this.normalizeLocation(this.getWeddingCity(w)) ===
              this.normalizeLocation(region),
          ),
      );
    }

    if (this.activeFilters.has("outdoor"))
      filtered = filtered.filter((w) => w.setting === "outdoor");
    if (this.activeFilters.has("indoor"))
      filtered = filtered.filter((w) => w.setting === "indoor");
    if (this.activeFilters.has("pet-friendly"))
      filtered = filtered.filter((w) => w.petPolicy === "pet-friendly");
    if (this.activeFilters.has("no-pets"))
      filtered = filtered.filter((w) => w.petPolicy === "no-pets");
    if (this.activeFilters.has("kids-welcome"))
      filtered = filtered.filter((w) => w.agePolicy === "kids-welcome");
    if (this.activeFilters.has("adults-only"))
      filtered = filtered.filter((w) => w.agePolicy === "adults-only");
    if (this.activeFilters.has("has-slots"))
      filtered = filtered.filter((w) => w.slotsAvailable > 0);
    if (this.activeFilters.has("no-camera"))
      filtered = filtered.filter((w) => w.noCamera === true);
    if (this.activeFilters.has("vegan-friendly"))
      filtered = filtered.filter((w) => w.veganFriendly === true);
    if (this.activeFilters.has("small-ceremony"))
      filtered = filtered.filter((w) => w.smallCeremony === true);
    if (this.activeFilters.has("live-music"))
      filtered = filtered.filter((w) => w.musicLive === true);

    this.tinderDeck = filtered;
    this.currentTinderIndex = 0;
  }

  renderTinderStack() {
    const container = document.getElementById("tinder-cards-stack");
    if (!container) return;

    if (this.currentTinderIndex >= this.tinderDeck.length) {
      container.innerHTML = `
        <div class="w-full h-full rounded-3xl bg-white border border-wedding-gold/30 shadow-lg p-6 flex flex-col items-center justify-center text-center space-y-4">
          <span class="text-5xl animate-bounce">🕊️</span>
          <h3 class="font-serif text-2xl font-bold text-wedding-wine">You've Discovered All Ceremonies!</h3>
          <p class="text-xs text-gray-500 max-w-xs leading-relaxed">
            Ready to explore them again or jump straight to celebrating?
          </p>
          <button id="reset-deck-btn" class="px-5 py-2.5 rounded-full bg-wedding-wine text-white text-xs font-semibold hover:bg-wedding-wine/90 transition shadow">
            Reset Swipe Deck 🔄
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-deck-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          this.currentTinderIndex = 0;
          this.renderTinderStack();
        });
      }
      return;
    }

    const visibleCouples = this.tinderDeck.slice(
      this.currentTinderIndex,
      this.currentTinderIndex + 3,
    );

    // Gradient themes per wedding
    const gradients = {
      "julian-eleanor":
        "from-emerald-900/80 via-wedding-wine/60 to-wedding-blush/40",
      "hoanglong-minhanh": "from-orange-900/80 via-rose-700/60 to-amber-300/40",
      "liam-sophia": "from-indigo-900/80 via-purple-800/60 to-wedding-rose/40",
      "mateo-camila": "from-blue-900/80 via-blue-600/60 to-amber-300/40",
      "arthur-chloe": "from-stone-800/80 via-amber-800/60 to-yellow-200/40",
      "kenji-aoi": "from-slate-800/80 via-sky-700/60 to-blue-200/40",
    };
    const emojis = {
      "julian-eleanor": "🌿📚",
      "hoanglong-minhanh": "🌊🌅",
      "liam-sophia": "🕯️🎼",
      "mateo-camila": "🌊💃",
      "arthur-chloe": "🌾🐕",
      "kenji-aoi": "❄️🏔️",
    };

    container.innerHTML = visibleCouples
      .map((wedding, i) => {
        const isTop = i === 0;
        const scale = 1 - i * 0.04;
        const translateY = i * 14;
        const zIndex = 30 - i;
        const hasSlots = wedding.slotsAvailable > 0;
        const gradient =
          gradients[wedding.id] ||
          "from-wedding-wine/80 via-wedding-rose/60 to-wedding-blush/40";
        const emojiArt = emojis[wedding.id] || "💍💒";

        const extraBadges = [];
        if (wedding.noCamera) extraBadges.push("📵 No Camera");
        if (wedding.veganFriendly) extraBadges.push("🥗 Vegan Options");
        if (wedding.smallCeremony) extraBadges.push("✨ Intimate");
        if (wedding.musicLive) extraBadges.push("🎶 Live Music");

        return `
        <div
          class="tinder-card"
          id="${isTop ? "top-tinder-card" : ""}"
          style="transform: scale(${scale}) translateY(${translateY}px); z-index: ${zIndex};"
          data-wedding-id="${wedding.id}"
        >
          <!-- Like/Nope Badges -->
          <div class="tinder-badge-like">LOVE IT 💖</div>
          <div class="tinder-badge-nope">PASS ✕</div>

          <!-- Hero Header -->
          <div class="tinder-card-header bg-gradient-to-br ${gradient} relative flex flex-col justify-end p-5" style="min-height:170px;">
            <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-30 pointer-events-none select-none">${emojiArt}</div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] font-cinzel font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
                  ${wedding.city.split(",")[0].trim()}
                </span>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${hasSlots ? "bg-emerald-400/90 text-white" : "bg-white/20 text-white/80"} backdrop-blur-sm border border-white/20">
                  ${hasSlots ? `🎫 ${wedding.slotsAvailable} Seats Open` : "🔒 Seats Filled"}
                </span>
              </div>
              <h3 class="font-serif text-3xl font-bold text-white leading-tight drop-shadow-md">${this.escapeHTML(wedding.names)}</h3>
              <p class="text-xs text-white/80 font-cinzel font-semibold mt-0.5 drop-shadow-sm">${wedding.date} · ${wedding.venue}</p>
            </div>
          </div>

          <!-- Body: Couple Info + Story -->
          <div class="flex flex-col flex-1 p-4 gap-2.5 overflow-hidden">
            <!-- Mini Couple Strip -->
            <div class="flex items-center gap-3 border-b border-gray-100 pb-2.5">
              <div class="flex items-center gap-1.5">
                <span class="text-base">👰</span>
                <div>
                  <p class="text-[11px] font-bold text-wedding-wine leading-none">${this.escapeHTML(wedding.bride.name.split(" ")[0])}</p>
                  <p class="text-[10px] text-gray-400">${wedding.bride.age} · ${this.escapeHTML(wedding.bride.job.split("&")[0].trim().split(" ").slice(0, 2).join(" "))}</p>
                </div>
              </div>
              <span class="text-wedding-gold text-base font-script flex-shrink-0">♥</span>
              <div class="flex items-center gap-1.5">
                <span class="text-base">🤵</span>
                <div>
                  <p class="text-[11px] font-bold text-wedding-wine leading-none">${this.escapeHTML(wedding.groom.name.split(" ")[0])}</p>
                  <p class="text-[10px] text-gray-400">${wedding.groom.age} · ${this.escapeHTML(wedding.groom.job.split("&")[0].trim().split(" ").slice(0, 2).join(" "))}</p>
                </div>
              </div>
            </div>

            <!-- Story Snippet -->
            <p class="text-xs text-gray-600 italic leading-relaxed line-clamp-2">"${this.escapeHTML(wedding.story)}"</p>

            <!-- Atmosphere Badges -->
            <div class="flex flex-wrap items-center gap-1">
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${wedding.setting === "outdoor" ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"}">
                ${wedding.setting === "outdoor" ? "🌿 Outdoor" : "🏛️ Indoor"}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${wedding.petPolicy === "pet-friendly" ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-gray-100 text-gray-500 border border-gray-200"}">
                ${wedding.petPolicy === "pet-friendly" ? "🐾 Pets OK" : "🚫 No Pets"}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${wedding.agePolicy === "kids-welcome" ? "bg-purple-50 text-purple-700 border border-purple-200" : "bg-rose-50 text-rose-800 border border-rose-200"}">
                ${wedding.agePolicy === "kids-welcome" ? "👶 Kids OK" : "🍸 Adults Only"}
              </span>
              ${extraBadges.map((b) => `<span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-wedding-blush text-wedding-wine border border-wedding-rose/30">${b}</span>`).join("")}
            </div>

            <!-- Bottom Row: Palette + Read More -->
            <div class="flex items-center justify-between pt-1 border-t border-gray-100 mt-auto">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] text-gray-400 font-cinzel uppercase">Dress:</span>
                ${wedding.dressCodeColors.map((c) => `<span class="w-3 h-3 rounded-full border border-black/10 shadow-sm" style="background:${c};"></span>`).join("")}
                <span class="text-[10px] text-gray-500 ml-0.5">${this.escapeHTML(wedding.dressCode.split("&")[0].trim())}</span>
              </div>
              <button class="tinder-read-more-btn text-[11px] font-semibold text-wedding-wine hover:underline flex items-center gap-0.5" data-id="${wedding.id}">
                Full Story ↗
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    this.bindTopCardGesture();

    // Bind "Full Story" buttons on all visible cards
    container.querySelectorAll(".tinder-read-more-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.openCoupleDetailModal(btn.getAttribute("data-id"));
      });
    });

    lucide.createIcons();
  }

  bindTopCardGesture() {
    const card = document.getElementById("top-tinder-card");
    if (!card) return;

    const likeBadge = card.querySelector(".tinder-badge-like");
    const nopeBadge = card.querySelector(".tinder-badge-nope");

    let currentX = 0;
    let currentY = 0;

    const onPointerDown = (e) => {
      this.isDraggingCard = true;
      this.dragStartX = e.clientX || (e.touches && e.touches[0].clientX);
      this.dragStartY = e.clientY || (e.touches && e.touches[0].clientY);
      card.style.transition = "none";
    };

    const onPointerMove = (e) => {
      if (!this.isDraggingCard) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      currentX = clientX - this.dragStartX;
      currentY = clientY - this.dragStartY;

      const rotate = currentX * 0.08;
      card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotate}deg)`;

      if (currentX > 30) {
        likeBadge.style.opacity = Math.min(1, (currentX - 30) / 70);
        nopeBadge.style.opacity = 0;
      } else if (currentX < -30) {
        nopeBadge.style.opacity = Math.min(1, (-currentX - 30) / 70);
        likeBadge.style.opacity = 0;
      } else {
        likeBadge.style.opacity = 0;
        nopeBadge.style.opacity = 0;
      }
    };

    const onPointerUp = () => {
      if (!this.isDraggingCard) return;
      this.isDraggingCard = false;

      if (currentX > 100) {
        this.swipeTinderRight();
      } else if (currentX < -100) {
        this.swipeTinderLeft();
      } else {
        // Reset card
        card.style.transition =
          "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        card.style.transform = "scale(1) translateY(0px)";
        if (likeBadge) likeBadge.style.opacity = 0;
        if (nopeBadge) nopeBadge.style.opacity = 0;
      }
    };

    card.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    card.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);
  }

  swipeTinderRight() {
    const card = document.getElementById("top-tinder-card");
    if (!card) return;

    card.style.transition = "transform 0.35s ease, opacity 0.35s ease";
    card.style.transform = "translate(400px, 40px) rotate(25deg)";
    card.style.opacity = "0";

    const weddingId = card.getAttribute("data-wedding-id");
    setTimeout(() => {
      this.selectWedding(weddingId);
      this.fireHeartConfetti();
      window.weddingAudio.playHarpChime();
      this.currentTinderIndex++;
      this.renderTinderStack();
    }, 280);
  }

  swipeTinderLeft() {
    const card = document.getElementById("top-tinder-card");
    if (!card) return;

    card.style.transition = "transform 0.35s ease, opacity 0.35s ease";
    card.style.transform = "translate(-400px, 40px) rotate(-25deg)";
    card.style.opacity = "0";

    setTimeout(() => {
      this.currentTinderIndex++;
      this.renderTinderStack();
    }, 280);
  }

  // --- Virtual Ceremony Livestream Modal (Attend Online) ---
  openLivestreamModal() {
    const couple = this.getActiveWedding();
    const modal = document.getElementById("livestream-modal");
    if (!modal || !couple) return;

    document.getElementById("livestream-title").textContent =
      `${couple.names}'s Open Wedding Ceremony`;
    document.getElementById("livestream-couple-names").textContent =
      couple.names;
    document.getElementById("livestream-venue-text").textContent =
      `Live from ${couple.venue} • ${couple.city}`;

    // Start fluctuating viewer counter
    this.liveViewers = Math.floor(Math.random() * 400) + 1600;
    document.getElementById("livestream-viewers-count").textContent =
      this.liveViewers.toLocaleString();

    if (this.liveTimer) clearInterval(this.liveTimer);
    this.liveTimer = setInterval(() => {
      this.liveViewers += Math.floor(Math.random() * 7) - 3;
      const countEl = document.getElementById("livestream-viewers-count");
      if (countEl) countEl.textContent = this.liveViewers.toLocaleString();
    }, 3500);

    // Initial celebratory audio
    window.weddingAudio.playHarpChime();
    this.openModal(modal);
  }

  closeLivestreamModal() {
    const modal = document.getElementById("livestream-modal");
    if (modal) this.closeModal(modal);
    if (this.liveTimer) {
      clearInterval(this.liveTimer);
      this.liveTimer = null;
    }
  }

  spawnStreamCheer(symbol, text = "") {
    const container = document.getElementById("livestream-danmaku");
    if (!container) return;

    const cheerEl = document.createElement("div");
    cheerEl.className =
      "absolute text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-wedding-blush border border-wedding-gold/40 flex items-center gap-1.5 shadow-lg";
    cheerEl.style.left = `${Math.floor(Math.random() * 60) + 15}%`;
    cheerEl.style.bottom = "10px";
    cheerEl.style.transition = "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)";
    cheerEl.innerHTML = `<span>${symbol}</span> <span>${this.escapeHTML(text)}</span>`;

    container.appendChild(cheerEl);

    requestAnimationFrame(() => {
      cheerEl.style.bottom = `${Math.floor(Math.random() * 180) + 80}px`;
      cheerEl.style.opacity = "0";
    });

    setTimeout(() => {
      cheerEl.remove();
    }, 2600);
  }

  // --- Dual View & Authentication Gate ---
  handleCouplePortalClick() {
    if (this.authenticatedCoupleId) {
      this.switchViewMode("couple");
    } else {
      this.openAuthModal();
    }
  }

  openAuthModal() {
    const modal = document.getElementById("auth-modal");
    const select = document.getElementById("auth-couple-select");
    const passcode = document.getElementById("auth-passcode");
    const err = document.getElementById("auth-error-msg");

    if (!modal) return;
    if (select) select.value = this.activeWeddingId;
    if (passcode) passcode.value = "";
    if (err) err.classList.add("hidden");

    this.openModal(modal);
  }

  authenticateCouple(coupleId, inputPasscode) {
    const couple = this.weddings.find((w) => w.id === coupleId);
    if (!couple) return false;

    if (inputPasscode.trim().toUpperCase() === couple.passcode.toUpperCase()) {
      this.authenticatedCoupleId = couple.id;
      this.activeWeddingId = couple.id;
      this.updateActiveWeddingUI();
      this.updateHostDashboardUI();
      this.closeModal(document.getElementById("auth-modal"));
      this.switchViewMode("couple");

      const icon = document.getElementById("couple-mode-icon");
      if (icon) icon.setAttribute("data-lucide", "unlock");
      lucide.createIcons();

      window.weddingAudio.playHarpChime();
      this.showToast(`Verified as ${couple.names}! 👑`);
      return true;
    }
    return false;
  }

  switchViewMode(mode) {
    this.viewMode = mode;
    const guestView = document.getElementById("guest-view");
    const coupleView = document.getElementById("couple-view");
    const guestBtn = document.getElementById("mode-guest-btn");
    const coupleBtn = document.getElementById("mode-couple-btn");

    if (mode === "guest") {
      guestView.classList.remove("hidden");
      coupleView.classList.add("hidden");

      guestBtn.className =
        "px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 bg-wedding-wine text-white shadow";
      coupleBtn.className =
        "px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 text-wedding-wine hover:text-wedding-wine/80";
      this.showToast("Switched to Kind Stranger View 🕊️");
    } else {
      guestView.classList.add("hidden");
      coupleView.classList.remove("hidden");

      coupleBtn.className =
        "px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 bg-wedding-wine text-white shadow";
      guestBtn.className =
        "px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 text-wedding-wine hover:text-wedding-wine/80";
      this.updateHostDashboardUI();
    }
  }

  logoutHost() {
    this.authenticatedCoupleId = null;
    const icon = document.getElementById("couple-mode-icon");
    if (icon) icon.setAttribute("data-lucide", "lock");
    lucide.createIcons();
    this.switchViewMode("guest");
    this.showToast("Exited and locked Host Portal.");
  }

  // --- Render Wedding Registry Showcase Cards (Alternative Compact Grid) ---
  renderWeddingCards() {
    const container = document.getElementById("wedding-cards-grid");
    if (!container) return;

    const selectedRegions = [...this.selectedRegions];
    const matchingWeddings = this.weddings.filter((wedding) => {
      if (
        this.countryFilter &&
        this.getWeddingCountry(wedding) !== this.countryFilter
      ) {
        return false;
      }
      if (
        selectedRegions.length &&
        !selectedRegions.some(
          (region) =>
            this.normalizeLocation(this.getWeddingCity(wedding)) ===
            this.normalizeLocation(region),
        )
      ) {
        return false;
      }
      return this.weddingMatchesFilters(wedding);
    });

    const hasConflictingFilters =
      (this.activeFilters.has("outdoor") && this.activeFilters.has("indoor")) ||
      (this.activeFilters.has("pet-friendly") &&
        this.activeFilters.has("no-pets")) ||
      (this.activeFilters.has("kids-welcome") &&
        this.activeFilters.has("adults-only"));

    this.weddingPageCount = selectedRegions.length
      ? Math.min(
          8,
          Math.max(
            ...selectedRegions.map((region) =>
              this.getDestinationPageCount(this.countryFilter, region),
            ),
          ),
        )
      : 1;
    this.weddingPage = Math.min(
      Math.max(1, this.weddingPage),
      this.weddingPageCount,
    );

    const pageSize = 6;
    let pageWeddings = selectedRegions.length
      ? this.weddingPage === 1
        ? matchingWeddings.slice(0, pageSize)
        : []
      : matchingWeddings.slice(
          (this.weddingPage - 1) * pageSize,
          this.weddingPage * pageSize,
        );

    if (selectedRegions.length && !hasConflictingFilters) {
      let candidateIndex = (this.weddingPage - 1) * pageSize;
      let attempts = 0;
      while (pageWeddings.length < pageSize && attempts < pageSize * 4) {
        const region = selectedRegions[candidateIndex % selectedRegions.length];
        const sample = this.createDemoWedding(
          this.countryFilter,
          region,
          candidateIndex,
        );
        if (
          !matchingWeddings.some((wedding) => wedding.id === sample.id) &&
          this.weddingMatchesFilters(sample)
        ) {
          pageWeddings.push(sample);
        }
        candidateIndex++;
        attempts++;
      }
    }

    const pagination = document.getElementById("wedding-cards-pagination");
    if (pagination) {
      pagination.innerHTML =
        this.weddingPageCount > 1
          ? `
          <button type="button" class="wedding-page-btn rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-600 disabled:opacity-40" data-page="${this.weddingPage - 1}" ${this.weddingPage === 1 ? "disabled" : ""}>Previous</button>
          <span class="px-2 text-sm font-semibold text-wedding-wine">Page ${this.weddingPage} of ${this.weddingPageCount}</span>
          <button type="button" class="wedding-page-btn rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-600 disabled:opacity-40" data-page="${this.weddingPage + 1}" ${this.weddingPage === this.weddingPageCount ? "disabled" : ""}>Next</button>
        `
          : "";
      pagination.querySelectorAll(".wedding-page-btn").forEach((button) => {
        button.addEventListener("click", () => {
          this.weddingPage = Number(button.dataset.page);
          this.renderWeddingCards();
          document.getElementById("weddings-directory")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    }

    if (pageWeddings.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-400 text-xs italic">
          No weddings match this location and filter combination.
        </div>
      `;
      return;
    }

    container.innerHTML = pageWeddings
      .map((wedding) => {
        const isActive = wedding.id === this.activeWeddingId;
        const hasSlots = wedding.slotsAvailable > 0;
        const isOutdoor = wedding.setting === "outdoor";
        const isPetFriendly = wedding.petPolicy === "pet-friendly";
        const isKidsWelcome = wedding.agePolicy === "kids-welcome";
        const isDemo = wedding.isDemo === true;

        return `
        <article 
          class="wedding-card bg-white rounded-3xl p-5 border ${isActive ? "active-couple" : "border-wedding-gold/25"} shadow-sm relative flex flex-col justify-between"
          data-wedding-id="${wedding.id}"
          data-demo="${isDemo}"
        >
          <div class="space-y-3.5">
            <div class="flex items-center justify-between gap-1">
              <span class="text-[10px] font-cinzel font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${isDemo ? "bg-amber-50 text-amber-800" : isActive ? "bg-wedding-wine text-white" : "bg-wedding-blush text-wedding-wine"}">
                ${isDemo ? "Sample listing" : isActive ? "Active" : "Ceremony"}
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${hasSlots ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-gray-100 text-gray-500"}">
                ${hasSlots ? `🎫 ${wedding.slotsAvailable} Seats Open` : "🔒 Seats Filled"}
              </span>
            </div>

            <div>
              <h3 class="font-serif text-2xl font-bold text-wedding-wine leading-tight">${this.escapeHTML(wedding.names)}</h3>
              <p class="text-xs text-wedding-darkgold font-cinzel font-semibold mt-0.5">${this.escapeHTML(wedding.date)}</p>
              <p class="text-xs text-gray-500 mt-1 italic line-clamp-2">${this.escapeHTML(wedding.story)}</p>
            </div>

            <div class="flex flex-wrap items-center gap-1.5 pt-1">
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${isOutdoor ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"}">
                ${isOutdoor ? "🌿 Outdoor" : "🏛️ Indoor"}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${isPetFriendly ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-gray-100 text-gray-600"}">
                ${isPetFriendly ? "🐾 Pet-Friendly" : "🚫 No Pets"}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full ${isKidsWelcome ? "bg-purple-50 text-purple-700 border border-purple-200" : "bg-rose-50 text-rose-800 border border-rose-200"}">
                ${isKidsWelcome ? "👶 Kids Welcome" : "🍸 Adults Only"}
              </span>
            </div>
          </div>

          <div class="pt-4 mt-3 space-y-2 border-t border-gray-100">
            ${
              isDemo
                ? `
            <p class="text-center text-xs text-gray-500">Illustrative sample, not a real wedding post.</p>
            `
                : `<button 
              type="button" 
              class="open-detail-card-btn w-full py-2 rounded-xl text-xs font-semibold tracking-wider bg-wedding-blush hover:bg-wedding-wine hover:text-white text-wedding-wine border border-wedding-rose/40 transition-all flex items-center justify-center gap-2 shadow-sm"
              data-wedding-id="${wedding.id}"
            >
              <i data-lucide="book-heart" class="w-3.5 h-3.5"></i>
              <span>Story & Banquet Menu</span>
            </button>

            <button 
              type="button" 
              class="select-card-action-btn w-full py-2 rounded-xl text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 ${isActive ? "bg-wedding-wine text-white shadow" : "bg-gray-50 hover:bg-wedding-wine hover:text-white text-gray-700 border border-gray-200"}"
            >
              <i data-lucide="${isActive ? "heart-handshake" : "arrow-right"}" class="w-3.5 h-3.5"></i>
              <span>${isActive ? "Selected Couple" : "Celebrate This Couple"}</span>
            </button>`
            }
          </div>
        </article>
      `;
      })
      .join("");

    container.querySelectorAll(".wedding-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (card.dataset.demo === "true") return;
        if (e.target.closest(".open-detail-card-btn")) return;
        const id = card.getAttribute("data-wedding-id");
        if (id) this.selectWedding(id);
      });
    });

    container.querySelectorAll(".open-detail-card-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-wedding-id");
        if (id) this.openCoupleDetailModal(id);
      });
    });

    lucide.createIcons();
  }

  // --- Deep Dive Couple Detail & Banquet Modal ---
  openCoupleDetailModal(weddingId) {
    const couple =
      this.weddings.find((w) => w.id === weddingId) || this.getActiveWedding();
    const modal = document.getElementById("couple-detail-modal");
    if (!modal || !couple) return;

    document.getElementById("modal-detail-names").textContent = couple.names;
    document.getElementById("modal-detail-subtitle").textContent =
      `${couple.date} • ${couple.venue}, ${couple.city}`;

    // Bride Profile
    document.getElementById("detail-bride-name").textContent =
      couple.bride.name;
    document.getElementById("detail-bride-age").textContent = couple.bride.age;
    document.getElementById("detail-bride-job").textContent = couple.bride.job;
    document.getElementById("detail-bride-hobbies").textContent =
      couple.bride.hobbies;
    document.getElementById("detail-bride-quote").textContent =
      couple.bride.quote;

    // Groom Profile
    document.getElementById("detail-groom-name").textContent =
      couple.groom.name;
    document.getElementById("detail-groom-age").textContent = couple.groom.age;
    document.getElementById("detail-groom-job").textContent = couple.groom.job;
    document.getElementById("detail-groom-hobbies").textContent =
      couple.groom.hobbies;
    document.getElementById("detail-groom-quote").textContent =
      couple.groom.quote;

    // Full Story
    document.getElementById("detail-full-story").textContent = couple.fullStory;

    // Ceremony Highlights
    const highlightsContainer = document.getElementById("detail-highlights");
    if (highlightsContainer) {
      highlightsContainer.innerHTML = couple.highlights
        .map(
          (h) => `
        <div class="bg-wedding-cream/60 p-3 rounded-xl border border-wedding-gold/20 space-y-1">
          <p class="font-bold text-wedding-wine flex items-center gap-1.5 font-cinzel">
            <span>✨</span>
            <span>${this.escapeHTML(h.title)}</span>
          </p>
          <p class="text-gray-600 text-[11px] leading-relaxed">${this.escapeHTML(h.desc)}</p>
        </div>
      `,
        )
        .join("");
    }

    // Banquet Culinary Menu
    const menuContainer = document.getElementById("detail-menu-grid");
    if (menuContainer) {
      menuContainer.innerHTML = `
        <div class="bg-white p-3 rounded-xl border border-gray-100 space-y-1 shadow-sm">
          <span class="text-[10px] font-cinzel font-bold text-wedding-darkgold uppercase tracking-wider flex items-center gap-1">
            🥗 Starter Course
          </span>
          <p class="text-gray-800 font-serif leading-snug">${this.escapeHTML(couple.menu.starter)}</p>
        </div>

        <div class="bg-white p-3 rounded-xl border border-gray-100 space-y-1 shadow-sm">
          <span class="text-[10px] font-cinzel font-bold text-wedding-darkgold uppercase tracking-wider flex items-center gap-1">
            🥩 Principal Main
          </span>
          <p class="text-gray-800 font-serif leading-snug">${this.escapeHTML(couple.menu.main)}</p>
        </div>

        <div class="bg-white p-3 rounded-xl border border-gray-100 space-y-1 shadow-sm">
          <span class="text-[10px] font-cinzel font-bold text-wedding-darkgold uppercase tracking-wider flex items-center gap-1">
            🍰 Confection & Dessert
          </span>
          <p class="text-gray-800 font-serif leading-snug">${this.escapeHTML(couple.menu.dessert)}</p>
        </div>

        <div class="bg-white p-3 rounded-xl border border-gray-100 space-y-1 shadow-sm">
          <span class="text-[10px] font-cinzel font-bold text-wedding-darkgold uppercase tracking-wider flex items-center gap-1">
            🍸 Signature Cocktail
          </span>
          <p class="text-gray-800 font-serif leading-snug">${this.escapeHTML(couple.menu.cocktail)}</p>
        </div>
      `;
    }

    // Curated Recommendations
    const recsContainer = document.getElementById("modal-recommendations-grid");
    if (recsContainer) {
      const recs = this.weddings.filter((w) =>
        couple.recommendedIds.includes(w.id),
      );
      recsContainer.innerHTML = recs
        .map(
          (rec) => `
        <div class="bg-wedding-cream/60 p-3.5 rounded-2xl border border-wedding-rose/25 flex flex-col justify-between space-y-2.5">
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <h5 class="font-serif font-bold text-wedding-wine text-sm">${this.escapeHTML(rec.names)}</h5>
              <span class="text-[10px] text-gray-500">${this.escapeHTML(rec.city.split(",")[0])}</span>
            </div>
            <p class="text-[11px] text-gray-600 line-clamp-2 italic">"${this.escapeHTML(rec.story)}"</p>
            <div class="flex items-center gap-1.5 pt-0.5">
              <span class="text-[9px] bg-white px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">
                ${rec.setting === "outdoor" ? "🌿 Outdoor" : "🏛️ Indoor"}
              </span>
              <span class="text-[9px] bg-white px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">
                ${rec.petPolicy === "pet-friendly" ? "🐾 Pets OK" : "🚫 No Pets"}
              </span>
            </div>
          </div>

          <button 
            type="button" 
            class="jump-to-rec-btn w-full py-1.5 rounded-xl bg-wedding-wine/10 hover:bg-wedding-wine hover:text-white text-wedding-wine text-[11px] font-semibold transition"
            data-rec-id="${rec.id}"
          >
            Celebrate ${this.escapeHTML(rec.names.split("&")[0])} Instead →
          </button>
        </div>
      `,
        )
        .join("");

      recsContainer.querySelectorAll(".jump-to-rec-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetId = btn.getAttribute("data-rec-id");
          if (targetId) {
            this.selectWedding(targetId);
            this.closeModal(modal);
          }
        });
      });
    }

    const reserveBtn = document.getElementById("modal-reserve-btn");
    if (reserveBtn) {
      reserveBtn.onclick = () => {
        this.activeWeddingId = couple.id;
        this.updateActiveWeddingUI();
        this.closeModal(modal);
        this.openRsvpModal();
      };
    }

    this.openModal(modal);
    lucide.createIcons();
  }

  // --- Update Spotlight UI for Active Wedding & 3D Ring ---
  updateActiveWeddingUI() {
    const couple = this.getActiveWedding();
    if (!couple) return;

    document.getElementById("active-couple-name").textContent = couple.names;
    document.getElementById("active-couple-story").textContent =
      `"${couple.story}"`;
    document.getElementById("active-couple-date").textContent = couple.date;
    document.getElementById("active-couple-time").textContent = couple.time;
    document.getElementById("active-couple-venue").textContent = couple.venue;
    document.getElementById("active-couple-city").textContent = couple.city;
    document.getElementById("active-couple-dresscode").textContent =
      couple.dressCode;
    document.getElementById("wish-target-name").textContent = couple.names;

    const ringTagEl = document.getElementById("active-ring-title");
    if (ringTagEl) {
      ringTagEl.textContent = `💍 ${couple.ringConfig.ringTitle}`;
    }

    if (typeof window.update3DRingTheme === "function") {
      window.update3DRingTheme(couple.ringConfig);
    }

    const badgesRow = document.getElementById("active-couple-badges");
    if (badgesRow) {
      const isOutdoor = couple.setting === "outdoor";
      const isPetFriendly = couple.petPolicy === "pet-friendly";
      const isKidsWelcome = couple.agePolicy === "kids-welcome";

      badgesRow.innerHTML = `
        <span class="text-[11px] font-medium px-3 py-1 rounded-full ${isOutdoor ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"}">
          ${isOutdoor ? "🌿 Outdoor Ceremony" : "🏛️ Indoor Venue"}
        </span>
        <span class="text-[11px] font-medium px-3 py-1 rounded-full ${isPetFriendly ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-gray-100 text-gray-600"}">
          ${isPetFriendly ? "🐾 Pet-Friendly" : "🚫 No Pets"}
        </span>
        <span class="text-[11px] font-medium px-3 py-1 rounded-full ${isKidsWelcome ? "bg-purple-50 text-purple-700 border border-purple-200" : "bg-rose-50 text-rose-800 border border-rose-200"}">
          ${isKidsWelcome ? "👶 Kids Welcome" : "🍸 Adults Only"}
        </span>
      `;
    }

    const slotBadge = document.getElementById("active-couple-slot-badge");
    if (slotBadge) {
      if (couple.slotsAvailable > 0) {
        slotBadge.textContent = `${couple.slotsAvailable} Stranger Seats Available`;
        slotBadge.className =
          "text-[11px] font-bold bg-emerald-700 text-white px-2.5 py-0.5 rounded-full";
      } else {
        slotBadge.textContent = "Stranger Seats Filled";
        slotBadge.className =
          "text-[11px] font-bold bg-gray-600 text-white px-2.5 py-0.5 rounded-full";
      }
    }

    const paletteContainer = document.getElementById("active-couple-palette");
    if (paletteContainer) {
      paletteContainer.innerHTML =
        couple.dressCodeColors
          .map(
            (c) => `
        <span class="w-4 h-4 rounded-full border border-black/15 shadow-inner" style="background-color: ${c};" title="${c}"></span>
      `,
          )
          .join("") +
        `<span class="text-[10px] text-gray-400 ml-1">Palette</span>`;
    }

    lucide.createIcons();
  }

  // --- Couple Portal & Host Dashboard UI ---
  updateHostDashboardUI() {
    const couple = this.getActiveWedding();
    if (!couple) return;

    const titleEl = document.getElementById("host-couple-title");
    const selectEl = document.getElementById("host-couple-select");
    if (titleEl) titleEl.textContent = `${couple.names}'s Reception`;
    if (selectEl) selectEl.value = couple.id;

    const approvedCount = couple.rsvps.filter(
      (r) => r.status === "Approved",
    ).length;
    document.getElementById("stat-total-slots").textContent =
      `${couple.totalSlots} Seats`;
    document.getElementById("stat-approved-guests").textContent =
      `${approvedCount} Guests`;
    document.getElementById("stat-remaining-slots").textContent =
      `${couple.slotsAvailable} Available`;

    const lettersCount = this.wishes.filter(
      (w) => w.weddingId === couple.id,
    ).length;
    document.getElementById("stat-total-letters").textContent =
      `${lettersCount} Letters`;

    // Render In-Person RSVP list
    const rsvpListContainer = document.getElementById("host-rsvp-list");
    if (rsvpListContainer) {
      if (couple.rsvps.length === 0) {
        rsvpListContainer.innerHTML = `
          <div class="py-8 text-center text-gray-400 text-xs italic">
            No stranger seat requests yet for this ceremony.
          </div>
        `;
      } else {
        rsvpListContainer.innerHTML = couple.rsvps
          .map((rsvp) => {
            const isApproved = rsvp.status === "Approved";
            const legitBadge = rsvp.isLegit
              ? '<span class="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-pink-100 text-pink-700">❤ Legit</span>'
              : '<span class="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Not verified</span>';
            return `
            <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <h4 class="font-bold text-gray-800 text-sm">${this.escapeHTML(rsvp.name)}</h4>
                  ${legitBadge}
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${isApproved ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}">
                    ${rsvp.status}
                  </span>
                  <span class="text-[10px] text-gray-400">• Applied on ${rsvp.date}</span>
                </div>
                <p class="text-gray-500 font-mono text-[11px]">${this.escapeHTML(rsvp.contact)}</p>
                <p class="text-gray-700 italic">"${this.escapeHTML(rsvp.note)}"</p>
              </div>

              <div class="flex items-center gap-2 shrink-0 flex-wrap">
                <button
                  class="view-bio-btn px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-wedding-blush text-gray-700 font-medium text-xs transition"
                  data-rsvp-id="${rsvp.id}"
                >
                  View Bio
                </button>
                ${
                  !isApproved
                    ? `
                  <button 
                    class="approve-rsvp-btn px-3 py-1.5 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold text-xs transition flex items-center gap-1 shadow-sm"
                    data-rsvp-id="${rsvp.id}"
                  >
                    <i data-lucide="check" class="w-3.5 h-3.5"></i>
                    <span>Approve Seat</span>
                  </button>
                `
                    : `
                  <span class="text-xs text-green-700 font-semibold flex items-center gap-1">
                    <i data-lucide="badge-check" class="w-4 h-4"></i> Seat Reserved
                  </span>
                `
                }
                <button 
                  class="decline-rsvp-btn px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-red-50 hover:text-red-600 text-gray-600 font-medium text-xs transition"
                  data-rsvp-id="${rsvp.id}"
                >
                  Remove
                </button>
              </div>
            </div>
          `;
          })
          .join("");

        rsvpListContainer.querySelectorAll(".view-bio-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-rsvp-id");
            this.openGuestBioModal(id);
          });
        });

        rsvpListContainer
          .querySelectorAll(".approve-rsvp-btn")
          .forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = btn.getAttribute("data-rsvp-id");
              this.approveRsvp(id);
            });
          });

        rsvpListContainer
          .querySelectorAll(".decline-rsvp-btn")
          .forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = btn.getAttribute("data-rsvp-id");
              this.declineRsvp(id);
            });
          });
      }
    }

    // Render Digital Mailbox
    const mailboxContainer = document.getElementById("host-mailbox-grid");
    if (mailboxContainer) {
      const coupleWishes = this.wishes.filter((w) => w.weddingId === couple.id);
      if (coupleWishes.length === 0) {
        mailboxContainer.innerHTML = `
          <div class="col-span-full py-8 text-center text-gray-400 text-xs italic">
            No digital love letters received yet for ${couple.names}.
          </div>
        `;
      } else {
        mailboxContainer.innerHTML = coupleWishes
          .map(
            (w) => `
          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 space-y-2 text-xs">
            <div class="flex items-center justify-between border-b border-gray-200 pb-2">
              <div class="flex items-center gap-2">
                <span class="font-bold text-wedding-wine">${this.escapeHTML(w.name)}</span>
                ${w.isAnonymous ? `<span class="bg-purple-100 text-purple-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">🕵️ Anonymous Note</span>` : ""}
              </div>
              <span class="text-[10px] text-gray-400">${w.time}</span>
            </div>

            <p class="text-gray-700 leading-relaxed italic">"${this.escapeHTML(w.content)}"</p>

            ${
              w.drawing
                ? `
              <div class="p-2 bg-white rounded-xl border border-dashed border-gray-300">
                <p class="text-[10px] text-gray-500 font-semibold mb-1">Attached Hand-drawn Note:</p>
                <img src="${w.drawing}" alt="Handwritten note" class="max-h-20 mx-auto object-contain">
              </div>
            `
                : ""
            }
          </div>
        `,
          )
          .join("");
      }
    }

    lucide.createIcons();
  }

  openGuestBioModal(rsvpId) {
    const couple = this.getActiveWedding();
    const rsvp = couple.rsvps.find((r) => r.id === rsvpId);
    if (!rsvp) return;

    const modal = document.getElementById("guest-bio-modal");
    const nameEl = document.getElementById("guest-bio-name");
    const contentEl = document.getElementById("guest-bio-content");
    const approveBtn = document.getElementById("guest-bio-approve-btn");
    const declineBtn = document.getElementById("guest-bio-decline-btn");

    if (!modal || !contentEl || !nameEl) return;

    nameEl.textContent = rsvp.name;
    contentEl.innerHTML = `
      <div class="rounded-2xl bg-white p-4 border border-gray-200 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-[10px] px-2 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold">${rsvp.isLegit ? "❤ Verified / Legit" : "No pink badge yet"}</span>
          <span class="text-[10px] px-2 py-1 rounded-full ${rsvp.status === "Approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-800"} font-semibold">${rsvp.status}</span>
        </div>
        <p><strong>Contact:</strong> ${this.escapeHTML(rsvp.contact)}</p>
        <p><strong>Personality:</strong> ${this.escapeHTML(rsvp.bio?.personality || "Warm and kind-hearted")}</p>
        <p><strong>Interests:</strong> ${this.escapeHTML(rsvp.bio?.interests || "Travel, music, and meaningful experiences")}</p>
        <p><strong>Why they want to celebrate:</strong> ${this.escapeHTML(rsvp.note)}</p>
      </div>
      <div class="rounded-2xl bg-wedding-blush/60 p-4 border border-wedding-rose/20">
        <p class="font-cinzel text-[10px] uppercase tracking-widest text-wedding-darkgold font-bold">Short decision note</p>
        <p class="mt-2 text-gray-700">${rsvp.isLegit ? "This guest has a legit verification badge, making them easy to trust for an in-person seat." : "This guest is still unverified; review their note and personality before approving."}</p>
      </div>
    `;

    if (approveBtn) {
      approveBtn.onclick = () => {
        this.approveRsvp(rsvp.id);
        this.closeModal(modal);
      };
    }

    if (declineBtn) {
      declineBtn.onclick = () => {
        this.declineRsvp(rsvp.id);
        this.closeModal(modal);
      };
    }

    this.openModal(modal);
  }

  approveRsvp(rsvpId) {
    const couple = this.getActiveWedding();
    const rsvp = couple.rsvps.find((r) => r.id === rsvpId);
    if (!rsvp) return;

    if (couple.slotsAvailable <= 0) {
      alert(
        "No stranger slots left to approve! Please add more slots in the dashboard.",
      );
      return;
    }

    rsvp.status = "Approved";
    rsvp.notification = `Your request to celebrate with ${couple.names} was approved. Please keep your contact details handy for further coordination.`;
    rsvp.noteSent = true;
    couple.slotsAvailable = Math.max(0, couple.slotsAvailable - 1);
    this.saveWeddings();
    this.updateHostDashboardUI();
    this.renderWeddingCards();
    this.updateActiveWeddingUI();

    window.weddingAudio.playHarpChime();
    this.showToast(`Approved stranger guest: ${rsvp.name}! 🎟️`);
    this.showToast(`Approval notice sent to ${rsvp.contact} ✅`, "📬");
  }

  declineRsvp(rsvpId) {
    const couple = this.getActiveWedding();
    const idx = couple.rsvps.findIndex((r) => r.id === rsvpId);
    if (idx === -1) return;

    const rsvp = couple.rsvps[idx];
    if (rsvp.status === "Approved") {
      couple.slotsAvailable = Math.min(
        couple.totalSlots,
        couple.slotsAvailable + 1,
      );
    }
    couple.rsvps.splice(idx, 1);

    this.saveWeddings();
    this.updateHostDashboardUI();
    this.renderWeddingCards();
    this.updateActiveWeddingUI();
    this.showToast("Removed stranger RSVP request.");
  }

  adjustSlots(delta) {
    const couple = this.getActiveWedding();
    const newTotal = couple.totalSlots + delta;
    if (newTotal < 1) return;

    couple.totalSlots = newTotal;
    couple.slotsAvailable = Math.max(0, couple.slotsAvailable + delta);

    this.saveWeddings();
    this.updateHostDashboardUI();
    this.renderWeddingCards();
    this.updateActiveWeddingUI();
    this.showToast(`Updated stranger seats to ${couple.totalSlots}!`);
  }

  // --- Falling Petals Canvas Animation ---
  initFallingPetals() {
    const canvas = document.getElementById("petals-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petalColors = ["#FCEEE9", "#E8A598", "#F5D0C5", "#FFD1DC", "#E8D8C8"];
    const petals = [];
    const petalCount = 24;

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 8 + 6,
        d: Math.random() * petalCount,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleInc: Math.random() * 0.05 + 0.03,
        tiltAngle: 0,
        opacity: Math.random() * 0.45 + 0.25,
      });
    }

    function renderPetals() {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.d) + 1.2 + p.r / 7) / 2;
        p.x += Math.sin(p.d);
        p.tilt = Math.sin(p.tiltAngle - p.d / 3) * 12;

        if (p.y > height) {
          p.x = Math.random() * width;
          p.y = -20;
        }

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.ellipse(
          p.x,
          p.y,
          p.r,
          p.r / 2,
          (p.tilt * Math.PI) / 180,
          0,
          2 * Math.PI,
        );
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      requestAnimationFrame(renderPetals);
    }

    renderPetals();
  }

  // --- Danmaku Bullet Screen ---
  initDanmaku() {
    const container = document.getElementById("danmaku-container");
    if (!container) return;

    setInterval(() => {
      if (this.wishes.length > 0) {
        const randomWish =
          this.wishes[Math.floor(Math.random() * this.wishes.length)];
        this.spawnDanmakuItem(
          randomWish.name,
          randomWish.content,
          randomWish.coupleNames,
        );
      }
    }, 4500);
  }

  spawnDanmakuItem(sender, text, coupleNames = "", isUrgent = false) {
    const container = document.getElementById("danmaku-container");
    if (!container) return;

    const item = document.createElement("div");
    item.className = "danmaku-item";
    if (isUrgent) {
      item.style.borderColor = "#8C3B4A";
      item.style.backgroundColor = "#FFF5F5";
      item.style.boxShadow = "0 6px 20px rgba(140, 59, 74, 0.25)";
    }

    const topOffset = Math.floor(Math.random() * 120) + 10;
    item.style.top = `${topOffset}px`;

    const duration = isUrgent ? 8 : Math.random() * 5 + 10;
    item.style.animationDuration = `${duration}s`;

    const displaySnippet = text.length > 50 ? text.slice(0, 50) + "..." : text;
    const coupleTag = coupleNames
      ? `<span class="text-[11px] text-gray-400">to ${this.escapeHTML(coupleNames)}:</span> `
      : "";

    item.innerHTML = `<span class="text-wedding-gold font-bold">✨ ${this.escapeHTML(sender)}</span> ${coupleTag}<span>${this.escapeHTML(displaySnippet)}</span>`;

    container.appendChild(item);

    setTimeout(
      () => {
        item.remove();
      },
      duration * 1000 + 500,
    );
  }

  // --- Event Bindings ---
  bindDOMEvents() {
    // Mode Switcher Buttons
    const modeGuestBtn = document.getElementById("mode-guest-btn");
    const modeCoupleBtn = document.getElementById("mode-couple-btn");

    if (modeGuestBtn) {
      modeGuestBtn.addEventListener("click", () =>
        this.switchViewMode("guest"),
      );
    }
    if (modeCoupleBtn) {
      modeCoupleBtn.addEventListener("click", () =>
        this.handleCouplePortalClick(),
      );
    }

    // Livestream Modal Triggers
    const openLiveBtn = document.getElementById("open-livestream-btn");
    const closeLiveBtn = document.getElementById("close-livestream-btn");
    if (openLiveBtn) {
      openLiveBtn.addEventListener("click", () => this.openLivestreamModal());
    }
    if (closeLiveBtn) {
      closeLiveBtn.addEventListener("click", () => this.closeLivestreamModal());
    }

    // Livestream Reactions Buttons
    const streamPetalsBtn = document.getElementById("stream-petals-btn");
    const streamClinkBtn = document.getElementById("stream-clink-btn");
    const streamCandleBtn = document.getElementById("stream-candle-btn");
    const streamCheerBtn = document.getElementById("stream-cheer-btn");
    const streamChatForm = document.getElementById("stream-chat-form");

    if (streamPetalsBtn) {
      streamPetalsBtn.addEventListener("click", () => {
        this.spawnStreamCheer("🌸", "Tossed fragrant petals");
        this.fireMiniConfetti(streamPetalsBtn);
      });
    }
    if (streamClinkBtn) {
      streamClinkBtn.addEventListener("click", () => {
        this.spawnStreamCheer("🥂", "Clinked virtual champagne");
        window.weddingAudio.playGlassClink();
      });
    }
    if (streamCandleBtn) {
      streamCandleBtn.addEventListener("click", () => {
        this.spawnStreamCheer("🕯️", "Lit an eternal candle");
        window.weddingAudio.playHarpChime();
      });
    }
    if (streamCheerBtn) {
      streamCheerBtn.addEventListener("click", () => {
        this.spawnStreamCheer("💖", "Sent boundless warmth");
        this.fireHeartConfetti();
      });
    }
    if (streamChatForm) {
      streamChatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("stream-chat-input");
        if (input && input.value.trim()) {
          this.spawnStreamCheer("✨", input.value.trim());
          input.value = "";
        }
      });
    }

    // Host Logout Button
    const logoutBtn = document.getElementById("logout-host-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => this.logoutHost());
    }

    // Host Couple Selector Dropdown
    const hostSelect = document.getElementById("host-couple-select");
    if (hostSelect) {
      hostSelect.addEventListener("change", (e) => {
        this.selectWedding(e.target.value);
      });
    }

    // Host Capacity Slot Buttons (+ and -)
    const addSlotBtn = document.getElementById("add-slot-btn");
    const subSlotBtn = document.getElementById("sub-slot-btn");
    if (addSlotBtn) {
      addSlotBtn.addEventListener("click", () => this.adjustSlots(1));
    }
    if (subSlotBtn) {
      subSlotBtn.addEventListener("click", () => this.adjustSlots(-1));
    }
    // View Active Couple Detail Button
    const viewActiveDetailBtn = document.getElementById(
      "view-active-detail-btn",
    );
    if (viewActiveDetailBtn) {
      viewActiveDetailBtn.addEventListener("click", () => {
        this.openCoupleDetailModal(this.activeWeddingId);
      });
    }

    // Close Detail Modal Button
    const closeDetailModalBtn = document.getElementById(
      "close-detail-modal-btn",
    );
    const detailModal = document.getElementById("couple-detail-modal");
    if (closeDetailModalBtn && detailModal) {
      closeDetailModalBtn.addEventListener("click", () => {
        this.closeModal(detailModal);
      });
    }

    // Quick Interactive Buttons
    const clinkBtn = document.getElementById("quick-clink-btn");
    const heartBtn = document.getElementById("quick-heart-btn");
    const confettiBtn = document.getElementById("quick-confetti-btn");
    const openRsvpBtn = document.getElementById("open-rsvp-modal-btn");

    if (clinkBtn) {
      clinkBtn.addEventListener("click", () => {
        this.clinkCount++;
        document.getElementById("clink-count").textContent = this.clinkCount;
        window.weddingAudio.playGlassClink();
        this.fireMiniConfetti(clinkBtn);
        this.showToast(
          `Raised a champagne glass for ${this.getActiveWedding().names}! 🥂`,
        );
      });
    }

    if (heartBtn) {
      heartBtn.addEventListener("click", () => {
        this.heartCount++;
        document.getElementById("heart-count").textContent = this.heartCount;
        window.weddingAudio.playHarpChime();
        this.fireHeartConfetti();
        this.showToast(`Sent warm love to the newlyweds! 💖`);
      });
    }

    if (confettiBtn) {
      confettiBtn.addEventListener("click", () => {
        window.weddingAudio.playFirework();
        this.fireFullFireworks();
        this.showToast(`Grand fireworks launched across the chapel! 🎆`);
      });
    }

    if (openRsvpBtn) {
      openRsvpBtn.addEventListener("click", () => this.openRsvpModal());
    }

    // Music Toggle
    const musicBtn = document.getElementById("toggle-music-btn");
    const musicText = document.getElementById("music-status-text");
    if (musicBtn && musicText) {
      musicBtn.addEventListener("click", () => {
        const isPlaying = window.weddingAudio.toggleMusic();
        musicText.textContent = isPlaying
          ? "Lofi Music: On"
          : "Lofi Music: Off";
        musicBtn.classList.toggle("text-green-700", isPlaying);
        this.showToast(
          isPlaying
            ? "🎵 Playing ambient procedural lofi chords"
            : "🔇 Music muted",
        );
      });
    }

    // AI Tone Selector Chips
    const toneChips = document.querySelectorAll(".ai-tone-chip");
    toneChips.forEach((chip) => {
      if (chip.getAttribute("data-tone") === this.activeTone) {
        chip.classList.add("active");
      }
      chip.addEventListener("click", () => {
        toneChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        this.activeTone = chip.getAttribute("data-tone") || "romantic";
      });
    });

    // AI Generate Wish Button
    const aiGenBtn = document.getElementById("generate-ai-wish-btn");
    const aiGenText = document.getElementById("ai-generate-text");
    const wishContentInput = document.getElementById("wish-content");
    const senderNameInput = document.getElementById("sender-name");
    const senderLocationInput = document.getElementById("sender-location");
    const anonCheckbox = document.getElementById("anonymous-checkbox");

    if (aiGenBtn) {
      aiGenBtn.addEventListener("click", async () => {
        const originalText = aiGenText.textContent;
        aiGenText.textContent = "AI is composing your blessing...";
        aiGenBtn.disabled = true;

        const couple = this.getActiveWedding();
        const effectiveName = anonCheckbox.checked
          ? "A Secret Well-Wisher"
          : senderNameInput.value.trim();

        try {
          const generated = await window.weddingAI.generateWish(
            this.activeTone,
            effectiveName,
            senderLocationInput.value.trim(),
            couple.names,
            `${couple.venue}, ${couple.city}`,
          );
          wishContentInput.value = generated;
          window.weddingAudio.playHarpChime();
          this.showToast("✨ AI crafted a tailored blessing for you!");
        } catch (e) {
          console.error(e);
        } finally {
          aiGenText.textContent = originalText;
          aiGenBtn.disabled = false;
        }
      });
    }

    // Submit Wish Form
    const wishForm = document.getElementById("wish-form");
    if (wishForm) {
      wishForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        await this.handleWishSubmit();
      });
    }

    // Submit RSVP Form
    const rsvpForm = document.getElementById("rsvp-form");
    if (rsvpForm) {
      rsvpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleRsvpSubmit();
      });
    }

    const countryFilterSelect = document.getElementById(
      "country-filter-select",
    );
    const regionList = document.getElementById("destination-region-list");
    const clearLocationBtn = document.getElementById(
      "clear-location-filter-btn",
    );

    if (countryFilterSelect) {
      countryFilterSelect.addEventListener("change", async () => {
        this.countryFilter = countryFilterSelect.value || "";
        this.selectedRegions.clear();
        this.weddingPage = 1;
        this.renderWeddingCards();
        await this.loadDestinationRegions(this.countryFilter);
      });
    }

    if (regionList) {
      regionList.addEventListener("change", (event) => {
        const checkbox = event.target.closest(".destination-region-checkbox");
        if (!checkbox) return;
        if (checkbox.checked) this.selectedRegions.add(checkbox.value);
        else this.selectedRegions.delete(checkbox.value);
        this.applyLocationSelection();
      });
    }

    if (clearLocationBtn) {
      clearLocationBtn.addEventListener("click", () => {
        this.destinationRequestId = (this.destinationRequestId || 0) + 1;
        this.countryFilter = "";
        this.selectedRegions.clear();
        this.weddingPage = 1;
        this.destinationRegions = [];
        this.destinationRegionsError = "";
        this.isLoadingDestinationRegions = false;
        this.showCurrentCelebration = false;
        this.renderDestinationFilters();
        this.renderWeddingCards();
        this.syncCelebrationVisibility();
        this.showToast("Destination filters cleared ✨");
      });
    }

    // Submit Auth Gate Form
    const authForm = document.getElementById("auth-form");
    if (authForm) {
      authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const coupleId = document.getElementById("auth-couple-select").value;
        const pass = document.getElementById("auth-passcode").value;
        const success = this.authenticateCouple(coupleId, pass);
        if (!success) {
          const err = document.getElementById("auth-error-msg");
          if (err) err.classList.remove("hidden");
        }
      });
    }

    // Auto-fill demo passcode button
    const fillDemoBtn = document.getElementById("fill-demo-passcode-btn");
    if (fillDemoBtn) {
      fillDemoBtn.addEventListener("click", () => {
        const coupleId = document.getElementById("auth-couple-select").value;
        const couple = this.weddings.find((w) => w.id === coupleId);
        if (couple) {
          document.getElementById("auth-passcode").value = couple.passcode;
          this.showToast(`Auto-filled passcode: ${couple.passcode}`);
        }
      });
    }

    // Guestbook Filters
    const filterAllBtn = document.getElementById("filter-all-btn");
    const filterCurrentBtn = document.getElementById("filter-current-btn");
    const filterDrawingsBtn = document.getElementById("filter-drawings-btn");
    const filterAnonBtn = document.getElementById("filter-anonymous-btn");

    const updateFilterStyles = (activeBtn) => {
      [
        filterAllBtn,
        filterCurrentBtn,
        filterDrawingsBtn,
        filterAnonBtn,
      ].forEach((b) => {
        if (!b) return;
        if (b === activeBtn) {
          b.className =
            "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-wedding-wine text-white transition";
        } else {
          b.className =
            "px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 hover:text-wedding-wine border border-gray-200 transition";
        }
      });
    };

    if (filterAllBtn) {
      filterAllBtn.addEventListener("click", () => {
        this.guestbookFilter = "all";
        updateFilterStyles(filterAllBtn);
        this.renderWishes();
      });
    }

    if (filterCurrentBtn) {
      filterCurrentBtn.addEventListener("click", () => {
        this.guestbookFilter = "current";
        updateFilterStyles(filterCurrentBtn);
        this.renderWishes();
      });
    }

    if (filterDrawingsBtn) {
      filterDrawingsBtn.addEventListener("click", () => {
        this.guestbookFilter = "drawings";
        updateFilterStyles(filterDrawingsBtn);
        this.renderWishes();
      });
    }

    if (filterAnonBtn) {
      filterAnonBtn.addEventListener("click", () => {
        this.guestbookFilter = "anonymous";
        updateFilterStyles(filterAnonBtn);
        this.renderWishes();
      });
    }

    // Reset default wishes
    const clearLocalBtn = document.getElementById("clear-local-btn");
    if (clearLocalBtn) {
      clearLocalBtn.addEventListener("click", () => {
        if (confirm("Reset guestbook wall to sample blessings?")) {
          this.wishes = [...SEED_WISHES];
          this.saveWishes();
          this.renderWishes();
          this.showToast("Restored sample blessings!");
        }
      });
    }

    this.setupModals();
  }

  // --- Stranger Seat RSVP Request Flow ---
  openRsvpModal() {
    const couple = this.getActiveWedding();
    const modal = document.getElementById("rsvp-modal");
    const coupleSpan = document.getElementById("rsvp-modal-couple");
    const dresscodeP = document.getElementById("rsvp-modal-dresscode");

    if (!modal) return;
    if (coupleSpan) coupleSpan.textContent = couple.names;
    if (dresscodeP)
      dresscodeP.textContent = `${couple.dressCode} (Venue: ${couple.venue}, ${couple.city})`;

    this.openModal(modal);
  }

  handleRsvpSubmit() {
    const couple = this.getActiveWedding();
    const nameInput = document.getElementById("rsvp-name");
    const contactInput = document.getElementById("rsvp-contact");
    const noteInput = document.getElementById("rsvp-note");
    const personalityInput = document.getElementById("rsvp-personality");
    const interestsInput = document.getElementById("rsvp-interests");
    const legitCheckbox = document.getElementById("rsvp-legit-checkbox");
    const modal = document.getElementById("rsvp-modal");

    const name = nameInput.value.trim();
    const contact = contactInput.value.trim();
    const note = noteInput.value.trim();

    if (!name || !contact) return;

    const newRsvp = {
      id: "rsvp-" + Date.now(),
      name: name,
      contact: contact,
      note: note,
      status: "Pending",
      date: "Just now",
      isLegit: !!(legitCheckbox && legitCheckbox.checked),
      bio: {
        personality: personalityInput
          ? personalityInput.value.trim() || "Warm, curious, grounded"
          : "Warm, curious, grounded",
        interests: interestsInput
          ? interestsInput.value.trim() ||
            "Travel, food, music, and good company"
          : "Travel, food, music, and good company",
        location: "Worldwide traveler",
        verified: !!(legitCheckbox && legitCheckbox.checked),
      },
      noteSent: false,
    };

    couple.rsvps.unshift(newRsvp);
    this.saveWeddings();
    this.updateHostDashboardUI();
    this.renderWeddingCards();

    window.weddingAudio.playGlassClink();
    this.fireMiniConfetti(document.body);

    nameInput.value = "";
    contactInput.value = "";
    noteInput.value = "";
    if (personalityInput) personalityInput.value = "";
    if (interestsInput) interestsInput.value = "";
    if (legitCheckbox) legitCheckbox.checked = false;
    this.closeModal(modal);

    this.showToast(`RSVP request submitted to ${couple.names}! 🎟️`);
  }

  // --- Wish Submission & AI Response Flow ---
  async handleWishSubmit() {
    const nameInput = document.getElementById("sender-name");
    const locInput = document.getElementById("sender-location");
    const contentInput = document.getElementById("wish-content");
    const submitBtn = document.getElementById("submit-wish-btn");
    const anonCheckbox = document.getElementById("anonymous-checkbox");

    const rawName = nameInput.value.trim();
    const loc = locInput.value.trim();
    const content = contentInput.value.trim();
    const isAnonymous = anonCheckbox ? anonCheckbox.checked : false;
    const displayName = isAnonymous ? "A Kind Soul in the Shadows 🕵️" : rawName;
    const drawingData = window.weddingDoodle
      ? window.weddingDoodle.getDrawingDataUrl()
      : null;

    if (!rawName || !content) {
      alert("Please enter your name and a short blessing message!");
      return;
    }

    const couple = this.getActiveWedding();

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Delivering letter & receiving couple's thank-you...</span>`;

    window.weddingAudio.playHarpChime();
    this.fireFullFireworks();

    let aiResponse = "";
    try {
      aiResponse = await window.weddingAI.generateBrideGroomResponse(
        isAnonymous ? "our anonymous friend" : rawName,
        loc,
        content,
        couple.names,
        couple.city,
      );
    } catch (e) {
      aiResponse = window.weddingAI.getLocalFallbackResponse(
        isAnonymous ? "our secret friend" : rawName,
        couple.names,
      );
    }

    const newWish = {
      id: "wish-" + Date.now(),
      weddingId: couple.id,
      coupleNames: couple.names,
      name: displayName,
      isAnonymous: isAnonymous,
      location: loc,
      content: content,
      drawing: drawingData,
      time: "Just now",
      aiReply: aiResponse,
    };

    this.wishes.unshift(newWish);
    this.saveWishes();
    this.renderWishes();
    this.updateHostDashboardUI();

    this.spawnDanmakuItem(displayName, content, couple.names, true);

    nameInput.value = "";
    locInput.value = "";
    contentInput.value = "";
    if (anonCheckbox) anonCheckbox.checked = false;
    if (window.weddingDoodle) window.weddingDoodle.clear();

    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <i data-lucide="send" class="w-5 h-5"></i>
      <span>Send Love Letter to the Couple 💌</span>
    `;
    lucide.createIcons();

    this.openLetterModal(displayName, couple.names, aiResponse);
  }

  // --- Render Wishes Grid (Guestbook Wall) ---
  renderWishes() {
    const grid = document.getElementById("wishes-grid");
    if (!grid) return;

    let displayList = this.wishes;

    if (this.guestbookFilter === "current") {
      displayList = this.wishes.filter(
        (w) => w.weddingId === this.activeWeddingId,
      );
    } else if (this.guestbookFilter === "drawings") {
      displayList = this.wishes.filter((w) => !!w.drawing);
    } else if (this.guestbookFilter === "anonymous") {
      displayList = this.wishes.filter((w) => !!w.isAnonymous);
    }

    if (displayList.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-400 text-sm italic">
          No blessings found in this view yet. Be the first kind stranger to send love!
        </div>
      `;
      return;
    }

    grid.innerHTML = displayList
      .map((wish, idx) => {
        const rot = (idx % 2 === 0 ? 1 : -1) * ((idx % 3) * 0.7);
        return `
        <article class="wish-card bg-white rounded-3xl p-5 border border-wedding-gold/30 shadow-md flex flex-col justify-between space-y-4 relative" style="transform: rotate(${rot}deg);">
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2 border-b border-gray-100 pb-2.5">
              <div>
                <h4 class="font-serif font-bold text-wedding-wine text-base flex items-center gap-1.5">
                  ${this.escapeHTML(wish.name)}
                </h4>
                <div class="flex items-center gap-2 mt-0.5">
                  ${wish.location ? `<span class="text-[11px] text-gray-400 flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3 text-wedding-rose"></i> ${this.escapeHTML(wish.location)}</span>` : ""}
                  <span class="text-[10px] font-cinzel font-semibold text-wedding-darkgold bg-wedding-blush px-2 py-0.5 rounded-full">
                    to ${this.escapeHTML(wish.coupleNames || "Newlyweds")}
                  </span>
                </div>
              </div>
              <span class="text-[10px] text-gray-400 font-medium">${wish.time}</span>
            </div>

            <p class="text-sm text-gray-700 leading-relaxed font-sans">${this.escapeHTML(wish.content)}</p>

            ${
              wish.drawing
                ? `
              <div class="mt-2 p-1.5 bg-wedding-cream/60 rounded-2xl border border-dashed border-wedding-rose/40">
                <p class="text-[10px] text-wedding-rose font-semibold mb-1 flex items-center gap-1 font-cinzel">
                  <i data-lucide="palette" class="w-3 h-3"></i> Handwritten Digital Stamp:
                </p>
                <img src="${wish.drawing}" alt="Handwritten sketch" class="max-h-24 mx-auto object-contain">
              </div>
            `
                : ""
            }
          </div>

          ${
            wish.aiReply
              ? `
            <div class="bg-wedding-blush/40 rounded-2xl p-3.5 border border-wedding-rose/25 text-xs space-y-1">
              <span class="font-cinzel text-[10px] font-bold text-wedding-wine uppercase tracking-wider flex items-center gap-1">
                <i data-lucide="heart" class="w-3 h-3 text-wedding-rose fill-wedding-rose"></i>
                Gratitude Note from ${this.escapeHTML(wish.coupleNames || "the Couple")}
              </span>
              <p class="text-gray-600 italic font-serif leading-snug">"${this.escapeHTML(wish.aiReply)}"</p>
            </div>
          `
              : ""
          }
        </article>
      `;
      })
      .join("");

    lucide.createIcons();
  }

  // --- Confetti helpers ---
  fireMiniConfetti(elem) {
    if (typeof confetti === "undefined") return;
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#8C3B4A", "#E8A598", "#8A9A86"],
    });
  }

  fireHeartConfetti() {
    if (typeof confetti === "undefined") return;
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#E8A598", "#8C3B4A", "#FFD1DC"],
    });
  }

  fireFullFireworks() {
    if (typeof confetti === "undefined") return;
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        }),
      );
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60, colors: ["#D4AF37", "#8C3B4A"] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ["#E8A598", "#8A9A86", "#FFFFFF"],
    });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }

  // --- Modal Helpers ---
  setupModals() {
    const openAssignBtn = document.getElementById("open-assignment-info-btn");
    const closeAssignBtn = document.getElementById("close-assignment-btn");
    const assignModal = document.getElementById("assignment-modal");

    if (openAssignBtn && assignModal) {
      openAssignBtn.addEventListener("click", () =>
        this.openModal(assignModal),
      );
    }
    if (closeAssignBtn && assignModal) {
      closeAssignBtn.addEventListener("click", () =>
        this.closeModal(assignModal),
      );
    }

    const closeRsvpBtn = document.getElementById("close-rsvp-modal-btn");
    const rsvpModal = document.getElementById("rsvp-modal");
    if (closeRsvpBtn && rsvpModal) {
      closeRsvpBtn.addEventListener("click", () => this.closeModal(rsvpModal));
    }

    const closeGuestBioBtn = document.getElementById("close-guest-bio-btn");
    const guestBioModal = document.getElementById("guest-bio-modal");
    if (closeGuestBioBtn && guestBioModal) {
      closeGuestBioBtn.addEventListener("click", () =>
        this.closeModal(guestBioModal),
      );
    }

    const closeAuthBtn = document.getElementById("close-auth-modal-btn");
    const authModal = document.getElementById("auth-modal");
    if (closeAuthBtn && authModal) {
      closeAuthBtn.addEventListener("click", () => this.closeModal(authModal));
    }

    const letterModal = document.getElementById("ai-letter-modal");
    const closeLetterBtn = document.getElementById("close-letter-btn");
    if (closeLetterBtn && letterModal) {
      closeLetterBtn.addEventListener("click", () =>
        this.closeModal(letterModal),
      );
    }

    const openApiBtn = document.getElementById("open-api-settings-btn");
    const closeApiBtn = document.getElementById("close-api-btn");
    const apiModal = document.getElementById("api-modal");
    const saveApiBtn = document.getElementById("save-api-settings-btn");
    const keyInput = document.getElementById("openrouter-key-input");
    const modelInput = document.getElementById("openrouter-model-input");

    if (openApiBtn && apiModal) {
      openApiBtn.addEventListener("click", () => {
        keyInput.value = window.weddingAI.apiKey;
        modelInput.value = window.weddingAI.model;
        this.openModal(apiModal);
      });
    }
    if (closeApiBtn && apiModal) {
      closeApiBtn.addEventListener("click", () => this.closeModal(apiModal));
    }
    if (saveApiBtn && apiModal) {
      saveApiBtn.addEventListener("click", () => {
        window.weddingAI.saveConfig(keyInput.value, modelInput.value);
        this.closeModal(apiModal);
        this.showToast("Saved OpenRouter AI settings!");
      });
    }
  }

  openLetterModal(senderName, coupleNames, replyText) {
    const modal = document.getElementById("ai-letter-modal");
    const salutation = document.getElementById("ai-letter-salutation");
    const body = document.getElementById("ai-letter-body");
    const sig = document.getElementById("ai-letter-signature");

    if (!modal) return;
    salutation.textContent = `Dearest ${senderName || "Wandering Friend"},`;
    body.textContent = replyText;
    if (sig) sig.textContent = coupleNames;

    this.openModal(modal);
  }

  openModal(modal) {
    modal.classList.remove("hidden");
    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0");
      const box = modal.querySelector("div");
      if (box) box.classList.remove("scale-95");
    });
  }

  closeModal(modal) {
    modal.classList.add("opacity-0");
    const box = modal.querySelector("div");
    if (box) box.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 200);
  }

  showToast(message, icon = "✨") {
    const toast = document.getElementById("toast");
    const msgEl = document.getElementById("toast-message");
    const iconEl = document.getElementById("toast-icon");

    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    iconEl.textContent = icon;

    toast.classList.remove("translate-x-full");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add("translate-x-full");
    }, 3200);
  }

  escapeHTML(str) {
    if (!str) return "";
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[tag] || tag,
    );
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new SerendipityApp();
});
