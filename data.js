// TML - Tour My Land Luxury Travel CMS Data

export const destinations = [
  // Tours Around the World
  {
    id: 'bhutan',
    name: 'Bhutan',
    category: 'world',
    subtitle: 'Land of the Thunder Dragon',
    image: 'assets/hero_cultural.png',
    description: 'Immerse yourself in a kingdom where happiness is a measure of state. Journey through mystical valleys, ancient monasteries perched on sheer cliffs, and pristine Himalayan forests.',
    duration: '8 - 12 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Hike to the legendary Tiger’s Nest Monastery', 'Attend a colorful local festival (Tshechu)', 'Explore the majestic Punakha Dzong at the river confluence', 'Stay in world-class Aman and Six Senses sanctuaries'],
    itinerary: [
      { day: 'Day 1-2', title: 'Arrival in Paro & Thimphu Valley', desc: 'Land in the gorgeous Paro valley and drive to the capital city, Thimphu. Visit the giant Buddha Dordenma and explore local heritage craft markets.' },
      { day: 'Day 3-4', title: 'Punakha Valley Exploration', desc: 'Cross the scenic Dochula Pass with stunning panoramic views of the Himalayas. Walk through village fields to visit the Punakha Dzong, the most beautiful palace in Bhutan.' },
      { day: 'Day 5-6', title: 'The Glacial Phobjikha Valley', desc: 'Journey into the pristine conservation valley, home to the rare black-necked cranes. Walk the serene nature trails and enjoy a traditional hot-stone bath.' },
      { day: 'Day 7-8', title: 'Paro & The Sacred Tiger’s Nest', desc: 'Return to Paro for the ultimate hike to Taktsang (Tiger’s Nest), hanging dramatically on a cliff 900 meters above the valley floor.' }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    category: 'world',
    subtitle: 'The Land of Refined Smiles',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    description: 'Beyond the bustling streets lies a world of pristine private beaches, luxury pool villas, Michelin-starred culinary craft, and deeply restorative wellness sanctuaries.',
    duration: '7 - 10 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Private luxury yacht charter in Phang Nga Bay', 'Exquisite culinary tour of Bangkok’s legendary fine dining', 'Bespoke elephant sanctuary experience in Chiang Mai', 'Holistic spa retreats in Koh Samui'],
    itinerary: [
      { day: 'Day 1-3', title: 'Bangkok Culinary & Heritage', desc: 'Explore historic temples via private water limousine, and enjoy a curated dinner at a multi-Michelin-starred Thai dining restaurant.' },
      { day: 'Day 4-6', title: 'Cultural Chiang Mai', desc: 'Fly north to Chiang Mai. Walk through lush misty tea plantations, feed elephants in a private, ethical rescue sanctuary, and learn private northern culinary secrets.' },
      { day: 'Day 7-10', title: 'Private Island Bliss', desc: 'Fly to Phuket or Koh Samui. Relax in an ultra-luxury pool villa overlooking the Andaman Sea, with a private yacht sailing at sunset.' }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    category: 'world',
    subtitle: 'Island of the Gods',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Experience Ubud’s emerald green rice terraces, dramatic cliffside temples in Uluwatu, and private holistic healing retreats tailored meticulously to your spirit.',
    duration: '8 - 11 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Private helicopter tour over active volcanic calderas', 'Personal spiritual purification blessing at Tirta Empul', 'Sunset dining on a private Uluwatu cliff edge', 'Stunning beachfront resort suites in Nusa Dua'],
    itinerary: [
      { day: 'Day 1-4', title: 'Ubud’s Spiritual & Creative Heart', desc: 'Reside in a private jungle villa. Embark on a private guided spiritual cleansing at holy spring temples and trek Ubud’s scenic ridges.' },
      { day: 'Day 5-7', title: 'Volcano Safari & Lakes', desc: 'Take a private helicopter flight over Mount Batur, followed by a serene luxury cruise on the calm crater waters of Lake Bratan.' },
      { day: 'Day 8-11', title: 'Uluwatu Coastal Elegance', desc: 'Retreat to a clifftop luxury resort. Witness the legendary Kecak dance from reserved VIP seats, followed by an oceanfront candlelight dinner.' }
    ]
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    category: 'world',
    subtitle: 'The Pearl of the Indian Ocean',
    image: 'https://images.unsplash.com/photo-1588598126749-db3f7b2354e1?auto=format&fit=crop&w=1200&q=80',
    description: 'Discover an ancient island where rich heritage ruins meet pristine golden sands, legendary tea plantations, and leopard-filled national parks.',
    duration: '9 - 13 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Explore Sigiriya ancient rock fortress with a private historian', 'Scenic tea country train journey in a private observation parlor', 'Luxury glamping in Yala National Park for leopard safaris', 'Relaxing at elegant colonial tea-bungalow estates'],
    itinerary: [
      { day: 'Day 1-3', title: 'Cultural Triangle & Sigiriya', desc: 'Land in Colombo and travel to the Cultural Triangle. Climb Sigiriya Rock Fortress in the early morning breeze with an expert archeologist guide.' },
      { day: 'Day 4-6', title: 'The Misty Tea Highlands of Nuwara Eliya', desc: 'Board the classic mountain train. Stay in a beautifully restored 19th-century colonial tea bungalow. Experience a private tea-tasting masterclass.' },
      { day: 'Day 7-9', title: 'Wildlife Safari in Yala', desc: 'Stay in a high-end luxury safari tent. Set out on private dawn and dusk game drives to spot Sri Lankan leopards and elephants.' },
      { day: 'Day 10-13', title: 'Galle Fort Heritage & Beach', desc: 'Explore the beautifully preserved Galle Dutch Fort, followed by quiet beach luxury in a private villa at Tangalle.' }
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    category: 'world',
    subtitle: 'A Symphony of Rainforests & Skyscrapers',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80',
    description: 'A striking fusion of futuristic skylines, pristine ancient rainforests, and premium island resorts tucked away in secret archipelagos.',
    duration: '7 - 10 Days',
    highlights: ['Skyline dining overlooking the Petronas Twin Towers', 'Private guided canopy walk in the 130-million-year-old Taman Negara', 'Unwinding at the iconic Ritz-Carlton Reserve in Langkawi'],
    itinerary: [
      { day: 'Day 1-2', title: 'Kuala Lumpur Skyline', desc: 'Stay in a high-floor luxury suite. Experience culinary wizardry at a fine dining restaurant overlooking the illuminated twin towers.' },
      { day: 'Day 3-5', title: 'Wild Borneo or Taman Negara', desc: 'Fly to Sarawak/Sabah to visit orangutan rehabilitation centers, or explore pristine jungle ecosystems via private boat guides.' },
      { day: 'Day 6-10', title: 'Langkawi Island Retreat', desc: 'Escape to a secluded beach resort where the ancient rainforest meets the Andaman sea. Indulge in private beach dinners.' }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    category: 'world',
    subtitle: 'The Garden City of Tomorrow',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern luxury, exceptional architectural wonders, and legendary Michelin-starred dining meet lush botanical spaces in this green metropolis.',
    duration: '4 - 6 Days',
    highlights: ['VIP private tour of Gardens by the Bay dome after hours', 'Curated cocktail masterclass at the world-renowned Raffles Hotel', 'Sailing a private catamaran around Singapore’s southern islands'],
    itinerary: [
      { day: 'Day 1-2', title: 'Modern Metropolis & Botanical Wonders', desc: 'Arrive and check in at Marina Bay Sands or Capella Singapore. Enjoy a VIP after-hours botanical tour and dine at an award-winning rooftop restaurant.' },
      { day: 'Day 3-4', title: 'Heritage & Gastronomy', desc: 'Embark on a private architectural tour of Katong and Chinatown heritage houses. Spend the evening enjoying a bespoke cocktail flight at Raffles.' },
      { day: 'Day 5-6', title: 'Sentosa Island Private Yacht', desc: 'Relax at a luxury beach villa in Sentosa and embark on a private yacht cruise around the pristine Southern Islands at sunset.' }
    ]
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    category: 'world',
    subtitle: 'Desert Majesty & Modern Wonders',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Immerse yourself in high-luxury desert resorts, thrilling dune adventures, iconic modern architecture, and unparalleled premium shopping experiences.',
    duration: '5 - 8 Days',
    highlights: ['Stay at the royal desert sanctuary Al Maha', 'Private helicopter flight over the Palm Jumeirah in Dubai', 'VIP tour of the Louvre Abu Dhabi and Sheikh Zayed Grand Mosque'],
    itinerary: [
      { day: 'Day 1-3', title: 'Dubai Glamour & Icons', desc: 'Stay at an ultra-luxury city hotel. Experience the city via a private helicopter tour and dine at a underwater restaurant.' },
      { day: 'Day 4-5', title: 'Al Maha Desert Sanctuary', desc: 'Retreat to a private bedouin-style pool villa nestled in the rolling red desert dunes. Enjoy private falconry and archery experiences.' },
      { day: 'Day 6-8', title: 'Abu Dhabi Art & Culture', desc: 'Drive to the capital. Take a private VIP tour of the magnificent Sheikh Zayed Mosque and the striking Louvre Abu Dhabi.' }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    category: 'world',
    subtitle: 'Timeless Charm & Natural Grandeur',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    description: 'From the spectacular karst peaks of Lan Ha Bay to the historic ancient streets of Hoi An and the vibrant energy of Saigon, explore Vietnam in absolute comfort.',
    duration: '9 - 14 Days',
    highlights: ['Ultra-luxury private overnight cruise in Halong Bay', 'Private lantern-making workshop and tailored fashion in Hoi An', 'Exploring the historic Mekong Delta on a high-end luxury river barge'],
    itinerary: [
      { day: 'Day 1-3', title: 'Hanoi Heritage & Halong Bay Cruise', desc: 'Explore Hanoi’s French Quarter with a private guide. Board a magnificent, modern luxury wooden ship for a private overnight cruise in peaceful Lan Ha Bay.' },
      { day: 'Day 4-6', title: 'Hoi An Imperial History', desc: 'Stay at a premium beachside resort in Da Nang. Spend your days wandering the lantern-lit streets of ancient Hoi An with a master artisan.' },
      { day: 'Day 7-9', title: 'Saigon & Mekong Delta Elegance', desc: 'Fly to Ho Chi Minh City. Cruise the winding canals of the Mekong Delta on a privately chartered wooden boat, dining on fine traditional fusion cuisine.' }
    ]
  },
  {
    id: 'morocco',
    name: 'Morocco',
    category: 'world',
    subtitle: 'A Palette of Spices & Starry Desert Skies',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
    description: 'Wander through vibrant blue towns, historic palatial riads, aromatic spice souks, and sleep in a luxury Berber tent beneath the Sahara stars.',
    duration: '8 - 12 Days',
    highlights: ['Stay in a private palatial riad in Marrakech', 'Sleep under the Sahara stars in a premium desert glamping site', 'Wander the medieval alleys of Fez with a private culinary guide'],
    itinerary: [
      { day: 'Day 1-3', title: 'Marrakech palatial life', desc: 'Dwell in a stunning luxury riad. Spend your days exploring the majestic Majorelle Gardens and bustling Jemaa el-Fnaa square with private access.' },
      { day: 'Day 4-5', title: 'Sahara Desert Dunes', desc: 'Fly or drive to the sand dunes of Erg Chebbi. Stay in a luxury Berber encampment with hot showers, king beds, and fireside live music.' },
      { day: 'Day 6-8', title: 'Fez Medieval Wonders', desc: 'Explore the oldest medieval city in the world, learning about leather tanning, ancient tilework, and savoring rich local tagines.' }
    ]
  },
  {
    id: 'turkey',
    name: 'Turkey',
    category: 'world',
    subtitle: 'Where Continents Embrace',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    description: 'Journey through Ottoman palaces, glide in hot air balloons over Cappadocia’s fairy chimneys, and cruise the turquoise Aegean coast in a luxury yacht.',
    duration: '8 - 11 Days',
    highlights: ['Private hot air balloon flight over Cappadocia at dawn', 'VIP private after-hours tour of the Basilica Cistern', 'Sailing a luxury wooden Gulet along the Bodrum Peninsula'],
    itinerary: [
      { day: 'Day 1-3', title: 'Istanbul’s Imperial Splendor', desc: 'Stay at a luxury Bosphorus palace hotel. Visit the Hagia Sophia and Topkapi Palace with a private historian, and cruise the Bosphorus on a private yacht.' },
      { day: 'Day 4-6', title: 'Cappadocia Fairy Chimneys', desc: 'Stay in a premium, beautifully designed cave suite. Wake at dawn for a private hot air balloon flight, followed by a champagne breakfast.' },
      { day: 'Day 7-10', title: 'Bodrum Yachting', desc: 'Fly to Bodrum. Sail the dramatic turquoise bays on a private traditional Gulet, dining on fresh Mediterranean catch.' }
    ]
  },
  {
    id: 'nepal',
    name: 'Nepal',
    category: 'world',
    subtitle: 'The Rooftop of the World',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Witness spectacular Himalayan peaks from luxury mountain lodges, explore medieval palace squares, and spot rhinos in the dense jungles of Chitwan.',
    duration: '7 - 10 Days',
    highlights: ['Private helicopter ride to Mount Everest Base Camp for champagne breakfast', 'Wildlife tracking in Chitwan in a luxury jungle safari lodge', 'Serene lakeside retreat in Pokhara overlooking Annapurna'],
    itinerary: [
      { day: 'Day 1-3', title: 'Kathmandu Valley Artistry', desc: 'Stay in a premium boutique hotel. Explore ancient royal squares in Patan and Bhaktapur with a private heritage specialist.' },
      { day: 'Day 4-5', title: 'Mount Everest Helicopter Flight', desc: 'Embark on a private helicopter flight to Kongde. Enjoy a stunning champagne breakfast facing Mount Everest at 14,000 feet.' },
      { day: 'Day 6-8', title: 'Chitwan Jungle Safari', desc: 'Stay in a luxury wilderness lodge. Track one-horned rhinos on private boat safaris and guided jungle walks.' }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    category: 'world',
    subtitle: 'A Masterpiece of Tradition & Precision',
    image: 'assets/hero_cultural.png',
    description: 'Experience ultra-modern Tokyo skyscrapers, tranquil historic temples in Kyoto, restorative hot springs at premium mountain ryokans, and sublime Kaiseki cuisine.',
    duration: '9 - 14 Days',
    highlights: ['Private audience with a Kyoto Geisha or Master Tea Artisan', 'Stay in a traditional luxury Ryokan with private outdoor Onsen baths', 'Bullet train in premium Green Car class between cities', 'Bespoke culinary tours of Tokyo’s hidden food alleys'],
    itinerary: [
      { day: 'Day 1-3', title: 'Tokyo Futurist Elegance', desc: 'Stay in a high-floor luxury sanctuary. Explore architectural wonders, high-end shopping in Ginza, and enjoy a private sushi counter experience.' },
      { day: 'Day 4-5', title: 'Mount Fuji & Ryokan Onsen', desc: 'Travel to Hakone. Stay in an ultra-luxury Ryokan. Soak in a private open-air hot spring facing serene forests, followed by a multi-course Kaiseki dinner.' },
      { day: 'Day 6-9', title: 'Kyoto Sacred Heritage', desc: 'Explore pristine bamboo forests and golden temples with a private guide. Enjoy a private zen meditation class and a traditional tea ceremony.' }
    ]
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    category: 'world',
    subtitle: 'Ancient Dynasties & High-Tech Trends',
    image: 'https://images.unsplash.com/photo-1538669715516-b2358f3de18e?auto=format&fit=crop&w=1200&q=80',
    description: 'Discover dynamic modern cities, historic royal palaces, peaceful Buddhist monasteries, and exceptional traditional arts and fine culinary treasures.',
    duration: '7 - 10 Days',
    highlights: ['Private VIP Hanbok experience in Gyeongbokgung Palace', 'Staying in a luxury modern Hanok villa in Bukchon', 'Bespoke K-Beauty consultation and gourmet food tour in Seoul'],
    itinerary: [
      { day: 'Day 1-3', title: 'Seoul Neon & History', desc: 'Stay in a luxury tower hotel. Dress in designer traditional Hanbok for a private imperial palace tour, followed by a premium modern Korean tasting menu.' },
      { day: 'Day 4-5', title: 'Historic Gyeongju Heritage', desc: 'Board the premium class bullet train to Gyeongju, the ancient capital. Tour royal burial mounds and historical temples with a private expert guide.' },
      { day: 'Day 6-8', title: 'Jeju Island Seclusion', desc: 'Fly to Jeju. Stay in an oceanfront luxury pool villa. Tour black-sand volcanic shores and dramatic waterfall cliffs in a private vehicle.' }
    ]
  },

  // India Tours
  {
    id: 'kerala',
    name: 'Kerala',
    category: 'india',
    subtitle: 'God’s Own Country',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // We can also use high-res images
    description: 'Drift past green coconut palms on an ultra-luxury private wooden houseboat, relax in organic Ayurvedic wellness retreats, and breathe the fresh mountain air of tea estates.',
    duration: '7 - 10 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Cruise on a privately-chartered air-conditioned premium houseboat', 'Experience personalized, doctor-guided Ayurvedic wellness treatments', 'Explore spice hills and tea plantations in Munnar', 'Stay in serene lake resorts in Kumarakom'],
    itinerary: [
      { day: 'Day 1-2', title: 'Fort Kochi Colonial Heritage', desc: 'Stroll past historic Dutch bungalows, spice warehouses, and giant Chinese fishing nets. Stay in a restored colonial heritage hotel.' },
      { day: 'Day 3-4', title: 'Munnar Tea Country', desc: 'Breathe the cool air of Munnar’s endless green hills. Enjoy private trekking through mist-clad valleys and tour a premium tea factory.' },
      { day: 'Day 5-6', title: 'Houseboat Voyage in Kumarakom', desc: 'Board your private luxury houseboat on the tranquil backwaters. Savor fresh, traditional Kuttanadan prawns cooked on-board by your private chef.' },
      { day: 'Day 7-10', title: 'Ayurvedic Sanctuary on the Coast', desc: 'Retreat to a beachfront eco-luxury resort. Enjoy customized, traditional oil therapies, beachside yoga, and organic culinary experiences.' }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    category: 'india',
    subtitle: 'Land of Majestic Gopurams & Rich Living Heritage',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    description: 'Immerse yourself in soaring stone temples, carved pillars, classical music, fine silk weaving, and the historic palatial mansions of Chettinad.',
    duration: '8 - 11 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['VIP temple access with an art and architectural historian', 'Dine in massive Chettiar mansions on a 25-item banana leaf feast', 'Stay in beautifully restored heritage houses in Karaikudi', 'Private bronze-casting workshop in Tanjore'],
    itinerary: [
      { day: 'Day 1-2', title: 'Chennai Art Deco & Shore Temples', desc: 'Explore historic Chennai and travel to Mahabalipuram to view the magnificent Shore Temples carved out of solid rock.' },
      { day: 'Day 3-5', title: 'Tanjore Stone Monuments & Bronze Art', desc: 'Visit the majestic Brihadeeswarar Temple. Walk through local workshops where master artisans cast copper and bronze statues using the ancient lost-wax method.' },
      { day: 'Day 6-8', title: 'The Mansions of Chettinad', desc: 'Reside in a sprawling, palatial heritage home built with imported teak, marble, and Belgian glass. Taste authentic, intensely aromatic Chettinad spice cuisine.' },
      { day: 'Day 9-11', title: 'Madurai Temple Festivity', desc: 'Visit the legendary Meenakshi Amman Temple. Experience the magnificent night ceremony where the deity is carried in a procession.' }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    category: 'india',
    subtitle: 'Land of Kings',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    description: 'Live like royalty in magnificent white palaces floating on calm blue lakes, explore dramatic yellow forts, and glamp in style on dunes under starlit skies.',
    duration: '9 - 14 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Stay in actual palaces run by the royal families', 'Private hot air balloon flight over Jaipur’s pink forts', 'Exclusive dune dining with live desert musicians in Jaisalmer', 'Curated historic walks of Udaipur’s royal palaces'],
    itinerary: [
      { day: 'Day 1-3', title: 'The Pink City of Jaipur', desc: 'Explore the Amber Fort and City Palace. Shop for precious gemstones and luxury home fabrics with a private luxury buyer guide.' },
      { day: 'Day 4-6', title: 'The Lake Palaces of Udaipur', desc: 'Stay at the iconic floating Taj Lake Palace. Enjoy a private boat cruise around Lake Pichola, followed by a romantic terrace dinner.' },
      { day: 'Day 7-9', title: 'The Blue City of Jodhpur', desc: 'Dwell in a stunning heritage haveli. Climb the colossal Mehrangarh Fort and enjoy a private cocktail evening overlooking the blue rooftops.' },
      { day: 'Day 10-14', title: 'Sahara Glamping in Jaisalmer', desc: 'Sleep in a premium safari tent with private plunge pools. Witness dramatic desert sunsets on a camel safari, dining under a canopy of stars.' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    category: 'india',
    subtitle: 'Coastal Sunshine & Portuguese Elegance',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    description: 'Escape the crowds in beautiful heritage Latin Quarters, private beach villas, custom sundowner yacht charters, and premium fusion dining.',
    duration: '5 - 7 Days',
    price: 'Custom Luxury Pricing',
    highlights: ['Charter a private luxury yacht for a Mandovi river sunset cruise', 'Stay in a 400-year-old restored Portuguese villa with a private chef', 'Curated historic walk through Fontainhas, the colorful Latin Quarter'],
    itinerary: [
      { day: 'Day 1-2', title: 'Portuguese Heritage & Latin Quarters', desc: 'Arrive and stay at a restored old Portuguese mansion. Explore the yellow and blue streets of Fontainhas and taste modern Goan-Portuguese fusion.' },
      { day: 'Day 3-4', title: 'Private Sun-kissed Yachting', desc: 'Embark on a private yacht charter, dolphin spotting, and dining on grilled seafood cooked on board by a personal chef.' },
      { day: 'Day 5-7', title: 'South Goan Secluded Beaches', desc: 'Relax at a top-tier luxury resort in South Goa. Unwind with premium beachfront spa rituals and quiet walks on soft, white sands.' }
    ]
  }
];

export const curatedTours = [
  {
    id: 'luxury-tours',
    title: 'Luxury Tours',
    icon: '✨',
    desc: 'Uncompromising style. Elite accommodations, private aviation options, and butler service throughout your custom trip.',
    image: 'assets/hero_resort.png'
  },
  {
    id: 'cultural-tours',
    title: 'Cultural Tours',
    icon: '🏛️',
    desc: 'Bespoke access. Meet local scholars, temple keepers, and master craftsmen in private sessions arranged only for you.',
    image: 'assets/hero_cultural.png'
  },
  {
    id: 'wildlife-tours',
    title: 'Wildlife Tours',
    icon: '🐆',
    desc: 'Raw luxury. Stay in high-end safari tents, track tigers and leopards in private jeeps with seasoned conservation naturalists.',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'culinary-tours',
    title: 'Culinary Tours',
    icon: '🍷',
    desc: 'Gastronomy journeys. Dine at exclusive Michelin establishments, go on street food trails with food historians, and blend your own wines.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'heritage-tours',
    title: 'Heritage Tours',
    icon: '🕌',
    desc: 'Step into history. Live in authentic royal palaces, explore UNESCO archeology sites before public hours, and trace royal lineages.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wellness-tours',
    title: 'Wellness Tours',
    icon: '🧘',
    desc: 'Rebirth. Holistic, medical-grade Ayurvedic and Zen sanctuaries set in pristine natural landscapes designed for pure restoration.',
    image: 'assets/hero_mountain.png'
  },
  {
    id: 'cruises',
    title: 'Cruises',
    icon: '🚢',
    desc: 'Secluded waters. Sail remote archipelagos on bespoke luxury yachts, traditional wooden gullets, or modern ocean suites.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const groupTours = [
  {
    id: 'bhutan-group',
    title: 'Sacred Bhutan & Himalayan Heights',
    destination: 'Bhutan',
    dates: 'Oct 12 - Oct 22, 2026',
    price: '$7,250 per guest',
    spotsLeft: '4 Spots Available',
    description: 'An intimate, 12-guest maximum journey designed to experience the majestic autumn festivals and sacred valleys of Bhutan in ultimate comfort.',
    image: 'assets/hero_cultural.png'
  },
  {
    id: 'rajasthan-group',
    title: 'Palaces of Rajasthan: A Royal Odyssey',
    destination: 'Rajasthan, India',
    dates: 'Nov 05 - Nov 18, 2026',
    price: '$6,900 per guest',
    spotsLeft: '6 Spots Available',
    description: 'Journey through the Royal Palaces of India, experiencing exclusive polo match viewings, historic dinners hosted by royals, and luxurious stays.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'japan-group',
    title: 'Autumn Splendors of Kyoto & Tokyo',
    destination: 'Japan',
    dates: 'Nov 15 - Nov 26, 2026',
    price: '$9,800 per guest',
    spotsLeft: '3 Spots Available',
    description: 'Capture the breathtaking red maple foliage of Japan, featuring private Geisha dinners, exclusive temple entry, and top-tier luxury Ryokans.',
    image: 'assets/hero_mountain.png'
  }
];

export const blogs = [
  {
    id: 'art-of-slow-travel',
    title: 'The Art of Slow Travel: Why We Craft Experiences, Not Packages',
    author: 'Aditya Vardhan, Founder',
    date: 'May 2026',
    image: 'assets/hero_resort.png',
    summary: 'In an era of hyper-speed and ticking boxes, luxury travel has returned to its truest form: taking time. Explore how slow travel creates lasting transformations.',
    content: `In an era of hyper-speed and ticking boxes, luxury travel has returned to its truest form: taking time. At TML, we believe a vacation shouldn’t be a rush through a list of sights. It should be an exploration at your own pace, a pause to breathe, and an invitation to immerse yourself in local culture.
    
    When we design tailor-made journeys, we look closely at pacing. Why stay only one night in a historic fortress when spending three nights allows you to see the local marketplace wake up, read a book in a sunlit courtyard, and meet the artisans when they aren't rushed? Slow travel isn’t just about moving slow; it’s about feeling deeply.`
  },
  {
    id: 'culinary-secrets-kerala',
    title: 'Flavors of Kerala: A Deep Dive into Spices and Backwater Heritage',
    author: 'Chef Rajesh Nair',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    summary: 'Explore the culinary alchemy of cardamoms, black peppers, and rich coconut creams aboard a private floating houseboat in the Kerala backwaters.',
    content: `Kerala’s culinary heritage is a tale shaped by centuries of spice trading. Phoenicians, Romans, and Arabs sailed to these shores in search of 'Black Gold' – pepper. Today, that rich history is expressed in every home-cooked meal and estate kitchen.
    
    Imagine sitting on a gently gliding wooden houseboat as your private chef prepares fresh pearl spot fish marinated in ground ginger, shallots, and green chilies, wrapped in a banana leaf and pan-fried over low coals. Savoring this with red rice while watching the sunset paint the backwaters gold is a sensory memory that stays forever.`
  },
  {
    id: 'bhutans-gnh-philosophy',
    title: 'Gross National Happiness: A First-Timer’s Guide to Bhutanese Calm',
    author: 'Pema Wangdi, Bhutan Curator',
    date: 'March 2026',
    image: 'assets/hero_cultural.png',
    summary: 'Understand the ancient values that make Bhutan the happiest place on Earth, and learn how a trip to this mountain kingdom heals the busy mind.',
    content: `In Bhutan, development is measured not by gross domestic product, but by Gross National Happiness (GNH). This progressive philosophy guides everything from nature conservation to cultural preservation.
    
    When you step foot in Bhutan, you notice a distinct lack of billboards, heavy traffic, and towering skyscrapers. Instead, you hear the wind rustling prayer flags, rivers flowing through wide valleys, and the warm smiles of people who live in deep alignment with nature. A trip here is a profound recalibration for a busy mind.`
  }
];

export const faqs = [
  {
    q: 'What does "tailor-made" actually mean?',
    a: 'It means every single detail of your journey is designed specifically for you. We do not sell pre-packaged tours. We start with a blank sheet of paper and plan your destinations, activities, hotels, private vehicles, and guides based entirely on your personal interests, desired pace, and dietary needs.'
  },
  {
    q: 'Are your tours fully guided or independent?',
    a: 'We offer the perfect balance. You will have private, expert local guides and dedicated drivers in each destination for your planned tours, while also having designated leisure periods to explore at your own pace. Your guides are flexible and can adjust the daily schedule on the fly.'
  },
  {
    q: 'How does your "Plan My Trip" planner work?',
    a: 'Once you fill out our premium planner with your interests, budget, and travel dates, our system dynamically generates three curated route templates. Then, one of our expert Travel Designers reviews your request and connects with you to refine, book, and deliver a completely bespoke quote.'
  },
  {
    q: 'What standards do you use to select luxury hotels?',
    a: 'We personally visit and vet every hotel, lodge, and cruise we recommend. We look for high architectural merit, deep local character, exceptional service standards, environmental sustainability, and privacy. We maintain strong personal relationships with hotel general managers to ensure our guests get VIP treatment.'
  },
  {
    q: 'How do you handle sustainable and responsible travel?',
    a: 'Sustainability is woven into our core identity. We prioritize carbon-offsetting, partner with eco-luxury lodges that employ local communities, minimize plastic waste, and design immersive cultural visits that directly fund local schools, heritage restoration, and wildlife conservation programs.'
  }
];

export const testimonials = [
  {
    quote: "“TML designed a journey that felt more like a dream than a vacation. Every guide was a storyteller, every hotel was a masterpiece, and we never had to worry about a single detail. It was luxury with pure warmth.”",
    author: "Elena & Richard Carlton",
    trip: "Bespoke Bhutan & India, 14 Days"
  },
  {
    quote: "“Our private culinary tour in Japan was spectacular. From dining with a master sushi chef to staying in a hidden Ryokan with our own private hot spring, the attention to detail was exceptional.”",
    author: "Dr. Kenji Tanaka",
    trip: "Culinary & Onsen Japan, 10 Days"
  },
  {
    quote: "“We did the Kerala Backwaters tour and were blown away by the level of service. The luxury houseboat was gorgeous, and the private Ayurvedic sessions truly restored our energy.”",
    author: "Sarah & Marcus Sterling",
    trip: "Serene Backwaters & Wellness, 8 Days"
  }
];

// Interactive Planner Suggested Itineraries Database
export const suggestedItineraries = {
  'Wellness & Spa': [
    {
      title: 'Himalayan Sanctuary & Spiritual Awakening',
      duration: '9 Days',
      highlights: ['Six Senses Bhutan spa stay', 'Private yoga overlooking Paro', 'Traditional herbal baths', 'Zen meditation with senior monks'],
      pricing: 'Premium Custom Quote',
      desc: 'A deeply restorative journey through Bhutan’s spiritual valleys, combining luxury pampering with ancient meditation rituals.'
    },
    {
      title: 'Ayurveda & Backwater Restoration in Kerala',
      duration: '8 Days',
      highlights: ['Custom doctor consultation', 'Daily 4-hand oil massages', 'Private sunset backwater cruise', 'Organic culinary menu'],
      pricing: 'Premium Custom Quote',
      desc: 'Deeply detoxify and restore your body at a coastal sanctuary in Kerala, guided by world-class traditional Ayurvedic doctors.'
    },
    {
      title: 'Zen, Onsens & Forest Bathing in Japan',
      duration: '10 Days',
      highlights: ['Private hot spring ryokans', 'Hakone forest walking guides', 'Organic clean Kaiseki meals', 'Kyoto temple stays'],
      pricing: 'Premium Custom Quote',
      desc: 'Breathe deep in Hakone’s steaming mountains, experience authentic hot springs, and find stillness in quiet Kyoto gardens.'
    }
  ],
  'Cultural Immersion': [
    {
      title: 'Imperial Temples & Craft Artisans of Japan',
      duration: '11 Days',
      highlights: ['Private tea ceremony masterclass', 'Kyoto private Geisha dinner', 'Bullet train in green class', 'Historical paper crafts'],
      pricing: 'Premium Custom Quote',
      desc: 'Immerse yourself deeply in Japan’s heritage, from historic craftsmen workshops to imperial temple gardens.'
    },
    {
      title: 'Heritage Palaces & Royal Legacies of Rajasthan',
      duration: '12 Days',
      highlights: ['Taj Lake Palace stay', 'Jaipur private fort walk', 'Dune dining with royal hosts', 'Bespoke textile shopping'],
      pricing: 'Premium Custom Quote',
      desc: 'Live like royalty in floating palaces, dine in high-sand desert dunes, and learn the majestic living history of Rajasthan.'
    },
    {
      title: 'Monasteries & Sacred Trails of Bhutan',
      duration: '8 Days',
      highlights: ['Tiger’s Nest cliff hike', 'Punakha festival VIP seats', 'Traditional archery masterclass', 'Authentic farmhouse lunch'],
      pricing: 'Premium Custom Quote',
      desc: 'Step into a kingdom where traditional heritage is actively lived, attending sacred mask dances and visiting majestic fortresses.'
    }
  ],
  'Adventure & Landscapes': [
    {
      title: 'Helicopter Safaris & High Passes of Bhutan',
      duration: '10 Days',
      highlights: ['Helicopter flight to remote valleys', 'Private mountain biking', 'Dochula pass high trekking', 'Glamping under stars'],
      pricing: 'Premium Custom Quote',
      desc: 'Thrill your senses in high Himalayan altitude with dynamic helicopter drops, hiking, and premium wilderness lodging.'
    },
    {
      title: 'Scenic Highlands & Wildlife Glamping in Sri Lanka',
      duration: '11 Days',
      highlights: ['Private leopard tracking in Yala', 'Nuwara Eliya tea trail walks', 'Sigiriya rock sunrise climb', 'Private catamaran charter'],
      pricing: 'Premium Custom Quote',
      desc: 'Explore ancient cliffside ruins, take a private leopard safari, and relax in luxurious colonial tea estates.'
    },
    {
      title: 'Yacht Sailing & Private Bays in Thailand',
      duration: '9 Days',
      highlights: ['Phang Nga bay private yacht sailing', 'Phuket hidden island snorkeling', 'Chiang Mai mountain safari', 'Jungle trekking'],
      pricing: 'Premium Custom Quote',
      desc: 'A gorgeous balance of dynamic jungle safaris in the north and ultra-luxury yacht cruising around southern tropical islands.'
    }
  ]
};
