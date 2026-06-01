(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const g=[{id:"bhutan",name:"Bhutan",category:"world",subtitle:"Land of the Thunder Dragon",image:"assets/hero_cultural.png",description:"Immerse yourself in a kingdom where happiness is a measure of state. Journey through mystical valleys, ancient monasteries perched on sheer cliffs, and pristine Himalayan forests.",duration:"8 - 12 Days",price:"Custom Luxury Pricing",highlights:["Hike to the legendary Tiger’s Nest Monastery","Attend a colorful local festival (Tshechu)","Explore the majestic Punakha Dzong at the river confluence","Stay in world-class Aman and Six Senses sanctuaries"],itinerary:[{day:"Day 1-2",title:"Arrival in Paro & Thimphu Valley",desc:"Land in the gorgeous Paro valley and drive to the capital city, Thimphu. Visit the giant Buddha Dordenma and explore local heritage craft markets."},{day:"Day 3-4",title:"Punakha Valley Exploration",desc:"Cross the scenic Dochula Pass with stunning panoramic views of the Himalayas. Walk through village fields to visit the Punakha Dzong, the most beautiful palace in Bhutan."},{day:"Day 5-6",title:"The Glacial Phobjikha Valley",desc:"Journey into the pristine conservation valley, home to the rare black-necked cranes. Walk the serene nature trails and enjoy a traditional hot-stone bath."},{day:"Day 7-8",title:"Paro & The Sacred Tiger’s Nest",desc:"Return to Paro for the ultimate hike to Taktsang (Tiger’s Nest), hanging dramatically on a cliff 900 meters above the valley floor."}]},{id:"thailand",name:"Thailand",category:"world",subtitle:"The Land of Refined Smiles",image:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",description:"Beyond the bustling streets lies a world of pristine private beaches, luxury pool villas, Michelin-starred culinary craft, and deeply restorative wellness sanctuaries.",duration:"7 - 10 Days",price:"Custom Luxury Pricing",highlights:["Private luxury yacht charter in Phang Nga Bay","Exquisite culinary tour of Bangkok’s legendary fine dining","Bespoke elephant sanctuary experience in Chiang Mai","Holistic spa retreats in Koh Samui"],itinerary:[{day:"Day 1-3",title:"Bangkok Culinary & Heritage",desc:"Explore historic temples via private water limousine, and enjoy a curated dinner at a multi-Michelin-starred Thai dining restaurant."},{day:"Day 4-6",title:"Cultural Chiang Mai",desc:"Fly north to Chiang Mai. Walk through lush misty tea plantations, feed elephants in a private, ethical rescue sanctuary, and learn private northern culinary secrets."},{day:"Day 7-10",title:"Private Island Bliss",desc:"Fly to Phuket or Koh Samui. Relax in an ultra-luxury pool villa overlooking the Andaman Sea, with a private yacht sailing at sunset."}]},{id:"bali",name:"Bali",category:"world",subtitle:"Island of the Gods",image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",description:"Experience Ubud’s emerald green rice terraces, dramatic cliffside temples in Uluwatu, and private holistic healing retreats tailored meticulously to your spirit.",duration:"8 - 11 Days",price:"Custom Luxury Pricing",highlights:["Private helicopter tour over active volcanic calderas","Personal spiritual purification blessing at Tirta Empul","Sunset dining on a private Uluwatu cliff edge","Stunning beachfront resort suites in Nusa Dua"],itinerary:[{day:"Day 1-4",title:"Ubud’s Spiritual & Creative Heart",desc:"Reside in a private jungle villa. Embark on a private guided spiritual cleansing at holy spring temples and trek Ubud’s scenic ridges."},{day:"Day 5-7",title:"Volcano Safari & Lakes",desc:"Take a private helicopter flight over Mount Batur, followed by a serene luxury cruise on the calm crater waters of Lake Bratan."},{day:"Day 8-11",title:"Uluwatu Coastal Elegance",desc:"Retreat to a clifftop luxury resort. Witness the legendary Kecak dance from reserved VIP seats, followed by an oceanfront candlelight dinner."}]},{id:"sri-lanka",name:"Sri Lanka",category:"world",subtitle:"The Pearl of the Indian Ocean",image:"https://images.unsplash.com/photo-1588598126749-db3f7b2354e1?auto=format&fit=crop&w=1200&q=80",description:"Discover an ancient island where rich heritage ruins meet pristine golden sands, legendary tea plantations, and leopard-filled national parks.",duration:"9 - 13 Days",price:"Custom Luxury Pricing",highlights:["Explore Sigiriya ancient rock fortress with a private historian","Scenic tea country train journey in a private observation parlor","Luxury glamping in Yala National Park for leopard safaris","Relaxing at elegant colonial tea-bungalow estates"],itinerary:[{day:"Day 1-3",title:"Cultural Triangle & Sigiriya",desc:"Land in Colombo and travel to the Cultural Triangle. Climb Sigiriya Rock Fortress in the early morning breeze with an expert archeologist guide."},{day:"Day 4-6",title:"The Misty Tea Highlands of Nuwara Eliya",desc:"Board the classic mountain train. Stay in a beautifully restored 19th-century colonial tea bungalow. Experience a private tea-tasting masterclass."},{day:"Day 7-9",title:"Wildlife Safari in Yala",desc:"Stay in a high-end luxury safari tent. Set out on private dawn and dusk game drives to spot Sri Lankan leopards and elephants."},{day:"Day 10-13",title:"Galle Fort Heritage & Beach",desc:"Explore the beautifully preserved Galle Dutch Fort, followed by quiet beach luxury in a private villa at Tangalle."}]},{id:"malaysia",name:"Malaysia",category:"world",subtitle:"A Symphony of Rainforests & Skyscrapers",image:"https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80",description:"A striking fusion of futuristic skylines, pristine ancient rainforests, and premium island resorts tucked away in secret archipelagos.",duration:"7 - 10 Days",highlights:["Skyline dining overlooking the Petronas Twin Towers","Private guided canopy walk in the 130-million-year-old Taman Negara","Unwinding at the iconic Ritz-Carlton Reserve in Langkawi"],itinerary:[{day:"Day 1-2",title:"Kuala Lumpur Skyline",desc:"Stay in a high-floor luxury suite. Experience culinary wizardry at a fine dining restaurant overlooking the illuminated twin towers."},{day:"Day 3-5",title:"Wild Borneo or Taman Negara",desc:"Fly to Sarawak/Sabah to visit orangutan rehabilitation centers, or explore pristine jungle ecosystems via private boat guides."},{day:"Day 6-10",title:"Langkawi Island Retreat",desc:"Escape to a secluded beach resort where the ancient rainforest meets the Andaman sea. Indulge in private beach dinners."}]},{id:"singapore",name:"Singapore",category:"world",subtitle:"The Garden City of Tomorrow",image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",description:"Modern luxury, exceptional architectural wonders, and legendary Michelin-starred dining meet lush botanical spaces in this green metropolis.",duration:"4 - 6 Days",highlights:["VIP private tour of Gardens by the Bay dome after hours","Curated cocktail masterclass at the world-renowned Raffles Hotel","Sailing a private catamaran around Singapore’s southern islands"],itinerary:[{day:"Day 1-2",title:"Modern Metropolis & Botanical Wonders",desc:"Arrive and check in at Marina Bay Sands or Capella Singapore. Enjoy a VIP after-hours botanical tour and dine at an award-winning rooftop restaurant."},{day:"Day 3-4",title:"Heritage & Gastronomy",desc:"Embark on a private architectural tour of Katong and Chinatown heritage houses. Spend the evening enjoying a bespoke cocktail flight at Raffles."},{day:"Day 5-6",title:"Sentosa Island Private Yacht",desc:"Relax at a luxury beach villa in Sentosa and embark on a private yacht cruise around the pristine Southern Islands at sunset."}]},{id:"uae",name:"United Arab Emirates",category:"world",subtitle:"Desert Majesty & Modern Wonders",image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",description:"Immerse yourself in high-luxury desert resorts, thrilling dune adventures, iconic modern architecture, and unparalleled premium shopping experiences.",duration:"5 - 8 Days",highlights:["Stay at the royal desert sanctuary Al Maha","Private helicopter flight over the Palm Jumeirah in Dubai","VIP tour of the Louvre Abu Dhabi and Sheikh Zayed Grand Mosque"],itinerary:[{day:"Day 1-3",title:"Dubai Glamour & Icons",desc:"Stay at an ultra-luxury city hotel. Experience the city via a private helicopter tour and dine at a underwater restaurant."},{day:"Day 4-5",title:"Al Maha Desert Sanctuary",desc:"Retreat to a private bedouin-style pool villa nestled in the rolling red desert dunes. Enjoy private falconry and archery experiences."},{day:"Day 6-8",title:"Abu Dhabi Art & Culture",desc:"Drive to the capital. Take a private VIP tour of the magnificent Sheikh Zayed Mosque and the striking Louvre Abu Dhabi."}]},{id:"vietnam",name:"Vietnam",category:"world",subtitle:"Timeless Charm & Natural Grandeur",image:"https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",description:"From the spectacular karst peaks of Lan Ha Bay to the historic ancient streets of Hoi An and the vibrant energy of Saigon, explore Vietnam in absolute comfort.",duration:"9 - 14 Days",highlights:["Ultra-luxury private overnight cruise in Halong Bay","Private lantern-making workshop and tailored fashion in Hoi An","Exploring the historic Mekong Delta on a high-end luxury river barge"],itinerary:[{day:"Day 1-3",title:"Hanoi Heritage & Halong Bay Cruise",desc:"Explore Hanoi’s French Quarter with a private guide. Board a magnificent, modern luxury wooden ship for a private overnight cruise in peaceful Lan Ha Bay."},{day:"Day 4-6",title:"Hoi An Imperial History",desc:"Stay at a premium beachside resort in Da Nang. Spend your days wandering the lantern-lit streets of ancient Hoi An with a master artisan."},{day:"Day 7-9",title:"Saigon & Mekong Delta Elegance",desc:"Fly to Ho Chi Minh City. Cruise the winding canals of the Mekong Delta on a privately chartered wooden boat, dining on fine traditional fusion cuisine."}]},{id:"morocco",name:"Morocco",category:"world",subtitle:"A Palette of Spices & Starry Desert Skies",image:"https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80",description:"Wander through vibrant blue towns, historic palatial riads, aromatic spice souks, and sleep in a luxury Berber tent beneath the Sahara stars.",duration:"8 - 12 Days",highlights:["Stay in a private palatial riad in Marrakech","Sleep under the Sahara stars in a premium desert glamping site","Wander the medieval alleys of Fez with a private culinary guide"],itinerary:[{day:"Day 1-3",title:"Marrakech palatial life",desc:"Dwell in a stunning luxury riad. Spend your days exploring the majestic Majorelle Gardens and bustling Jemaa el-Fnaa square with private access."},{day:"Day 4-5",title:"Sahara Desert Dunes",desc:"Fly or drive to the sand dunes of Erg Chebbi. Stay in a luxury Berber encampment with hot showers, king beds, and fireside live music."},{day:"Day 6-8",title:"Fez Medieval Wonders",desc:"Explore the oldest medieval city in the world, learning about leather tanning, ancient tilework, and savoring rich local tagines."}]},{id:"turkey",name:"Turkey",category:"world",subtitle:"Where Continents Embrace",image:"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",description:"Journey through Ottoman palaces, glide in hot air balloons over Cappadocia’s fairy chimneys, and cruise the turquoise Aegean coast in a luxury yacht.",duration:"8 - 11 Days",highlights:["Private hot air balloon flight over Cappadocia at dawn","VIP private after-hours tour of the Basilica Cistern","Sailing a luxury wooden Gulet along the Bodrum Peninsula"],itinerary:[{day:"Day 1-3",title:"Istanbul’s Imperial Splendor",desc:"Stay at a luxury Bosphorus palace hotel. Visit the Hagia Sophia and Topkapi Palace with a private historian, and cruise the Bosphorus on a private yacht."},{day:"Day 4-6",title:"Cappadocia Fairy Chimneys",desc:"Stay in a premium, beautifully designed cave suite. Wake at dawn for a private hot air balloon flight, followed by a champagne breakfast."},{day:"Day 7-10",title:"Bodrum Yachting",desc:"Fly to Bodrum. Sail the dramatic turquoise bays on a private traditional Gulet, dining on fresh Mediterranean catch."}]},{id:"nepal",name:"Nepal",category:"world",subtitle:"The Rooftop of the World",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",description:"Witness spectacular Himalayan peaks from luxury mountain lodges, explore medieval palace squares, and spot rhinos in the dense jungles of Chitwan.",duration:"7 - 10 Days",highlights:["Private helicopter ride to Mount Everest Base Camp for champagne breakfast","Wildlife tracking in Chitwan in a luxury jungle safari lodge","Serene lakeside retreat in Pokhara overlooking Annapurna"],itinerary:[{day:"Day 1-3",title:"Kathmandu Valley Artistry",desc:"Stay in a premium boutique hotel. Explore ancient royal squares in Patan and Bhaktapur with a private heritage specialist."},{day:"Day 4-5",title:"Mount Everest Helicopter Flight",desc:"Embark on a private helicopter flight to Kongde. Enjoy a stunning champagne breakfast facing Mount Everest at 14,000 feet."},{day:"Day 6-8",title:"Chitwan Jungle Safari",desc:"Stay in a luxury wilderness lodge. Track one-horned rhinos on private boat safaris and guided jungle walks."}]},{id:"japan",name:"Japan",category:"world",subtitle:"A Masterpiece of Tradition & Precision",image:"assets/hero_cultural.png",description:"Experience ultra-modern Tokyo skyscrapers, tranquil historic temples in Kyoto, restorative hot springs at premium mountain ryokans, and sublime Kaiseki cuisine.",duration:"9 - 14 Days",highlights:["Private audience with a Kyoto Geisha or Master Tea Artisan","Stay in a traditional luxury Ryokan with private outdoor Onsen baths","Bullet train in premium Green Car class between cities","Bespoke culinary tours of Tokyo’s hidden food alleys"],itinerary:[{day:"Day 1-3",title:"Tokyo Futurist Elegance",desc:"Stay in a high-floor luxury sanctuary. Explore architectural wonders, high-end shopping in Ginza, and enjoy a private sushi counter experience."},{day:"Day 4-5",title:"Mount Fuji & Ryokan Onsen",desc:"Travel to Hakone. Stay in an ultra-luxury Ryokan. Soak in a private open-air hot spring facing serene forests, followed by a multi-course Kaiseki dinner."},{day:"Day 6-9",title:"Kyoto Sacred Heritage",desc:"Explore pristine bamboo forests and golden temples with a private guide. Enjoy a private zen meditation class and a traditional tea ceremony."}]},{id:"south-korea",name:"South Korea",category:"world",subtitle:"Ancient Dynasties & High-Tech Trends",image:"https://images.unsplash.com/photo-1538669715516-b2358f3de18e?auto=format&fit=crop&w=1200&q=80",description:"Discover dynamic modern cities, historic royal palaces, peaceful Buddhist monasteries, and exceptional traditional arts and fine culinary treasures.",duration:"7 - 10 Days",highlights:["Private VIP Hanbok experience in Gyeongbokgung Palace","Staying in a luxury modern Hanok villa in Bukchon","Bespoke K-Beauty consultation and gourmet food tour in Seoul"],itinerary:[{day:"Day 1-3",title:"Seoul Neon & History",desc:"Stay in a luxury tower hotel. Dress in designer traditional Hanbok for a private imperial palace tour, followed by a premium modern Korean tasting menu."},{day:"Day 4-5",title:"Historic Gyeongju Heritage",desc:"Board the premium class bullet train to Gyeongju, the ancient capital. Tour royal burial mounds and historical temples with a private expert guide."},{day:"Day 6-8",title:"Jeju Island Seclusion",desc:"Fly to Jeju. Stay in an oceanfront luxury pool villa. Tour black-sand volcanic shores and dramatic waterfall cliffs in a private vehicle."}]},{id:"kerala",name:"Kerala",category:"india",subtitle:"God’s Own Country",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",description:"Drift past green coconut palms on an ultra-luxury private wooden houseboat, relax in organic Ayurvedic wellness retreats, and breathe the fresh mountain air of tea estates.",duration:"7 - 10 Days",price:"Custom Luxury Pricing",highlights:["Cruise on a privately-chartered air-conditioned premium houseboat","Experience personalized, doctor-guided Ayurvedic wellness treatments","Explore spice hills and tea plantations in Munnar","Stay in serene lake resorts in Kumarakom"],itinerary:[{day:"Day 1-2",title:"Fort Kochi Colonial Heritage",desc:"Stroll past historic Dutch bungalows, spice warehouses, and giant Chinese fishing nets. Stay in a restored colonial heritage hotel."},{day:"Day 3-4",title:"Munnar Tea Country",desc:"Breathe the cool air of Munnar’s endless green hills. Enjoy private trekking through mist-clad valleys and tour a premium tea factory."},{day:"Day 5-6",title:"Houseboat Voyage in Kumarakom",desc:"Board your private luxury houseboat on the tranquil backwaters. Savor fresh, traditional Kuttanadan prawns cooked on-board by your private chef."},{day:"Day 7-10",title:"Ayurvedic Sanctuary on the Coast",desc:"Retreat to a beachfront eco-luxury resort. Enjoy customized, traditional oil therapies, beachside yoga, and organic culinary experiences."}]},{id:"tamil-nadu",name:"Tamil Nadu",category:"india",subtitle:"Land of Majestic Gopurams & Rich Living Heritage",image:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",description:"Immerse yourself in soaring stone temples, carved pillars, classical music, fine silk weaving, and the historic palatial mansions of Chettinad.",duration:"8 - 11 Days",price:"Custom Luxury Pricing",highlights:["VIP temple access with an art and architectural historian","Dine in massive Chettiar mansions on a 25-item banana leaf feast","Stay in beautifully restored heritage houses in Karaikudi","Private bronze-casting workshop in Tanjore"],itinerary:[{day:"Day 1-2",title:"Chennai Art Deco & Shore Temples",desc:"Explore historic Chennai and travel to Mahabalipuram to view the magnificent Shore Temples carved out of solid rock."},{day:"Day 3-5",title:"Tanjore Stone Monuments & Bronze Art",desc:"Visit the majestic Brihadeeswarar Temple. Walk through local workshops where master artisans cast copper and bronze statues using the ancient lost-wax method."},{day:"Day 6-8",title:"The Mansions of Chettinad",desc:"Reside in a sprawling, palatial heritage home built with imported teak, marble, and Belgian glass. Taste authentic, intensely aromatic Chettinad spice cuisine."},{day:"Day 9-11",title:"Madurai Temple Festivity",desc:"Visit the legendary Meenakshi Amman Temple. Experience the magnificent night ceremony where the deity is carried in a procession."}]},{id:"rajasthan",name:"Rajasthan",category:"india",subtitle:"Land of Kings",image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",description:"Live like royalty in magnificent white palaces floating on calm blue lakes, explore dramatic yellow forts, and glamp in style on dunes under starlit skies.",duration:"9 - 14 Days",price:"Custom Luxury Pricing",highlights:["Stay in actual palaces run by the royal families","Private hot air balloon flight over Jaipur’s pink forts","Exclusive dune dining with live desert musicians in Jaisalmer","Curated historic walks of Udaipur’s royal palaces"],itinerary:[{day:"Day 1-3",title:"The Pink City of Jaipur",desc:"Explore the Amber Fort and City Palace. Shop for precious gemstones and luxury home fabrics with a private luxury buyer guide."},{day:"Day 4-6",title:"The Lake Palaces of Udaipur",desc:"Stay at the iconic floating Taj Lake Palace. Enjoy a private boat cruise around Lake Pichola, followed by a romantic terrace dinner."},{day:"Day 7-9",title:"The Blue City of Jodhpur",desc:"Dwell in a stunning heritage haveli. Climb the colossal Mehrangarh Fort and enjoy a private cocktail evening overlooking the blue rooftops."},{day:"Day 10-14",title:"Sahara Glamping in Jaisalmer",desc:"Sleep in a premium safari tent with private plunge pools. Witness dramatic desert sunsets on a camel safari, dining under a canopy of stars."}]},{id:"goa",name:"Goa",category:"india",subtitle:"Coastal Sunshine & Portuguese Elegance",image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",description:"Escape the crowds in beautiful heritage Latin Quarters, private beach villas, custom sundowner yacht charters, and premium fusion dining.",duration:"5 - 7 Days",price:"Custom Luxury Pricing",highlights:["Charter a private luxury yacht for a Mandovi river sunset cruise","Stay in a 400-year-old restored Portuguese villa with a private chef","Curated historic walk through Fontainhas, the colorful Latin Quarter"],itinerary:[{day:"Day 1-2",title:"Portuguese Heritage & Latin Quarters",desc:"Arrive and stay at a restored old Portuguese mansion. Explore the yellow and blue streets of Fontainhas and taste modern Goan-Portuguese fusion."},{day:"Day 3-4",title:"Private Sun-kissed Yachting",desc:"Embark on a private yacht charter, dolphin spotting, and dining on grilled seafood cooked on board by a personal chef."},{day:"Day 5-7",title:"South Goan Secluded Beaches",desc:"Relax at a top-tier luxury resort in South Goa. Unwind with premium beachfront spa rituals and quiet walks on soft, white sands."}]}],S=[{id:"luxury-tours",title:"Luxury Tours",icon:"✨",desc:"Uncompromising style. Elite accommodations, private aviation options, and butler service throughout your custom trip.",image:"assets/hero_resort.png"},{id:"cultural-tours",title:"Cultural Tours",icon:"🏛️",desc:"Bespoke access. Meet local scholars, temple keepers, and master craftsmen in private sessions arranged only for you.",image:"assets/hero_cultural.png"},{id:"wildlife-tours",title:"Wildlife Tours",icon:"🐆",desc:"Raw luxury. Stay in high-end safari tents, track tigers and leopards in private jeeps with seasoned conservation naturalists.",image:"https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80"},{id:"culinary-tours",title:"Culinary Tours",icon:"🍷",desc:"Gastronomy journeys. Dine at exclusive Michelin establishments, go on street food trails with food historians, and blend your own wines.",image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"},{id:"heritage-tours",title:"Heritage Tours",icon:"🕌",desc:"Step into history. Live in authentic royal palaces, explore UNESCO archeology sites before public hours, and trace royal lineages.",image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"},{id:"wellness-tours",title:"Wellness Tours",icon:"🧘",desc:"Rebirth. Holistic, medical-grade Ayurvedic and Zen sanctuaries set in pristine natural landscapes designed for pure restoration.",image:"assets/hero_mountain.png"},{id:"cruises",title:"Cruises",icon:"🚢",desc:"Secluded waters. Sail remote archipelagos on bespoke luxury yachts, traditional wooden gullets, or modern ocean suites.",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"}],T=[{id:"bhutan-group",title:"Sacred Bhutan & Himalayan Heights",destination:"Bhutan",dates:"Oct 12 - Oct 22, 2026",price:"$7,250 per guest",spotsLeft:"4 Spots Available",description:"An intimate, 12-guest maximum journey designed to experience the majestic autumn festivals and sacred valleys of Bhutan in ultimate comfort.",image:"assets/hero_cultural.png"},{id:"rajasthan-group",title:"Palaces of Rajasthan: A Royal Odyssey",destination:"Rajasthan, India",dates:"Nov 05 - Nov 18, 2026",price:"$6,900 per guest",spotsLeft:"6 Spots Available",description:"Journey through the Royal Palaces of India, experiencing exclusive polo match viewings, historic dinners hosted by royals, and luxurious stays.",image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"},{id:"japan-group",title:"Autumn Splendors of Kyoto & Tokyo",destination:"Japan",dates:"Nov 15 - Nov 26, 2026",price:"$9,800 per guest",spotsLeft:"3 Spots Available",description:"Capture the breathtaking red maple foliage of Japan, featuring private Geisha dinners, exclusive temple entry, and top-tier luxury Ryokans.",image:"assets/hero_mountain.png"}],f=[{id:"art-of-slow-travel",title:"The Art of Slow Travel: Why We Craft Experiences, Not Packages",author:"Aditya Vardhan, Founder",date:"May 2026",image:"assets/hero_resort.png",summary:"In an era of hyper-speed and ticking boxes, luxury travel has returned to its truest form: taking time. Explore how slow travel creates lasting transformations.",content:`In an era of hyper-speed and ticking boxes, luxury travel has returned to its truest form: taking time. At TML, we believe a vacation shouldn’t be a rush through a list of sights. It should be an exploration at your own pace, a pause to breathe, and an invitation to immerse yourself in local culture.
    
    When we design tailor-made journeys, we look closely at pacing. Why stay only one night in a historic fortress when spending three nights allows you to see the local marketplace wake up, read a book in a sunlit courtyard, and meet the artisans when they aren't rushed? Slow travel isn’t just about moving slow; it’s about feeling deeply.`},{id:"culinary-secrets-kerala",title:"Flavors of Kerala: A Deep Dive into Spices and Backwater Heritage",author:"Chef Rajesh Nair",date:"April 2026",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",summary:"Explore the culinary alchemy of cardamoms, black peppers, and rich coconut creams aboard a private floating houseboat in the Kerala backwaters.",content:`Kerala’s culinary heritage is a tale shaped by centuries of spice trading. Phoenicians, Romans, and Arabs sailed to these shores in search of 'Black Gold' – pepper. Today, that rich history is expressed in every home-cooked meal and estate kitchen.
    
    Imagine sitting on a gently gliding wooden houseboat as your private chef prepares fresh pearl spot fish marinated in ground ginger, shallots, and green chilies, wrapped in a banana leaf and pan-fried over low coals. Savoring this with red rice while watching the sunset paint the backwaters gold is a sensory memory that stays forever.`},{id:"bhutans-gnh-philosophy",title:"Gross National Happiness: A First-Timer’s Guide to Bhutanese Calm",author:"Pema Wangdi, Bhutan Curator",date:"March 2026",image:"assets/hero_cultural.png",summary:"Understand the ancient values that make Bhutan the happiest place on Earth, and learn how a trip to this mountain kingdom heals the busy mind.",content:`In Bhutan, development is measured not by gross domestic product, but by Gross National Happiness (GNH). This progressive philosophy guides everything from nature conservation to cultural preservation.
    
    When you step foot in Bhutan, you notice a distinct lack of billboards, heavy traffic, and towering skyscrapers. Instead, you hear the wind rustling prayer flags, rivers flowing through wide valleys, and the warm smiles of people who live in deep alignment with nature. A trip here is a profound recalibration for a busy mind.`}],E=[{q:'What does "tailor-made" actually mean?',a:"It means every single detail of your journey is designed specifically for you. We do not sell pre-packaged tours. We start with a blank sheet of paper and plan your destinations, activities, hotels, private vehicles, and guides based entirely on your personal interests, desired pace, and dietary needs."},{q:"Are your tours fully guided or independent?",a:"We offer the perfect balance. You will have private, expert local guides and dedicated drivers in each destination for your planned tours, while also having designated leisure periods to explore at your own pace. Your guides are flexible and can adjust the daily schedule on the fly."},{q:'How does your "Plan My Trip" planner work?',a:"Once you fill out our premium planner with your interests, budget, and travel dates, our system dynamically generates three curated route templates. Then, one of our expert Travel Designers reviews your request and connects with you to refine, book, and deliver a completely bespoke quote."},{q:"What standards do you use to select luxury hotels?",a:"We personally visit and vet every hotel, lodge, and cruise we recommend. We look for high architectural merit, deep local character, exceptional service standards, environmental sustainability, and privacy. We maintain strong personal relationships with hotel general managers to ensure our guests get VIP treatment."},{q:"How do you handle sustainable and responsible travel?",a:"Sustainability is woven into our core identity. We prioritize carbon-offsetting, partner with eco-luxury lodges that employ local communities, minimize plastic waste, and design immersive cultural visits that directly fund local schools, heritage restoration, and wildlife conservation programs."}],b=[{quote:"“TML designed a journey that felt more like a dream than a vacation. Every guide was a storyteller, every hotel was a masterpiece, and we never had to worry about a single detail. It was luxury with pure warmth.”",author:"Elena & Richard Carlton",trip:"Bespoke Bhutan & India, 14 Days"},{quote:"“Our private culinary tour in Japan was spectacular. From dining with a master sushi chef to staying in a hidden Ryokan with our own private hot spring, the attention to detail was exceptional.”",author:"Dr. Kenji Tanaka",trip:"Culinary & Onsen Japan, 10 Days"},{quote:"“We did the Kerala Backwaters tour and were blown away by the level of service. The luxury houseboat was gorgeous, and the private Ayurvedic sessions truly restored our energy.”",author:"Sarah & Marcus Sterling",trip:"Serene Backwaters & Wellness, 8 Days"}],C={"Wellness & Spa":[{title:"Himalayan Sanctuary & Spiritual Awakening",duration:"9 Days",highlights:["Six Senses Bhutan spa stay","Private yoga overlooking Paro","Traditional herbal baths","Zen meditation with senior monks"],pricing:"Premium Custom Quote",desc:"A deeply restorative journey through Bhutan’s spiritual valleys, combining luxury pampering with ancient meditation rituals."},{title:"Ayurveda & Backwater Restoration in Kerala",duration:"8 Days",highlights:["Custom doctor consultation","Daily 4-hand oil massages","Private sunset backwater cruise","Organic culinary menu"],pricing:"Premium Custom Quote",desc:"Deeply detoxify and restore your body at a coastal sanctuary in Kerala, guided by world-class traditional Ayurvedic doctors."},{title:"Zen, Onsens & Forest Bathing in Japan",duration:"10 Days",highlights:["Private hot spring ryokans","Hakone forest walking guides","Organic clean Kaiseki meals","Kyoto temple stays"],pricing:"Premium Custom Quote",desc:"Breathe deep in Hakone’s steaming mountains, experience authentic hot springs, and find stillness in quiet Kyoto gardens."}],"Cultural Immersion":[{title:"Imperial Temples & Craft Artisans of Japan",duration:"11 Days",highlights:["Private tea ceremony masterclass","Kyoto private Geisha dinner","Bullet train in green class","Historical paper crafts"],pricing:"Premium Custom Quote",desc:"Immerse yourself deeply in Japan’s heritage, from historic craftsmen workshops to imperial temple gardens."},{title:"Heritage Palaces & Royal Legacies of Rajasthan",duration:"12 Days",highlights:["Taj Lake Palace stay","Jaipur private fort walk","Dune dining with royal hosts","Bespoke textile shopping"],pricing:"Premium Custom Quote",desc:"Live like royalty in floating palaces, dine in high-sand desert dunes, and learn the majestic living history of Rajasthan."},{title:"Monasteries & Sacred Trails of Bhutan",duration:"8 Days",highlights:["Tiger’s Nest cliff hike","Punakha festival VIP seats","Traditional archery masterclass","Authentic farmhouse lunch"],pricing:"Premium Custom Quote",desc:"Step into a kingdom where traditional heritage is actively lived, attending sacred mask dances and visiting majestic fortresses."}],"Adventure & Landscapes":[{title:"Helicopter Safaris & High Passes of Bhutan",duration:"10 Days",highlights:["Helicopter flight to remote valleys","Private mountain biking","Dochula pass high trekking","Glamping under stars"],pricing:"Premium Custom Quote",desc:"Thrill your senses in high Himalayan altitude with dynamic helicopter drops, hiking, and premium wilderness lodging."},{title:"Scenic Highlands & Wildlife Glamping in Sri Lanka",duration:"11 Days",highlights:["Private leopard tracking in Yala","Nuwara Eliya tea trail walks","Sigiriya rock sunrise climb","Private catamaran charter"],pricing:"Premium Custom Quote",desc:"Explore ancient cliffside ruins, take a private leopard safari, and relax in luxurious colonial tea estates."},{title:"Yacht Sailing & Private Bays in Thailand",duration:"9 Days",highlights:["Phang Nga bay private yacht sailing","Phuket hidden island snorkeling","Chiang Mai mountain safari","Jungle trekking"],pricing:"Premium Custom Quote",desc:"A gorgeous balance of dynamic jungle safaris in the north and ultra-luxury yacht cruising around southern tropical islands."}]},n={carouselIndex:0,carouselTimer:null,plannerStep:1,plannerData:{}},p=document.getElementById("app-content"),L={"":y,"#home":y,"#destinations":A,"#curated-tours":H,"#group-tours":j,"#blogs":W,"#about-us":R,"#contact-us":z};function w(){const a=window.location.hash;clearInterval(n.carouselTimer);const e=document.querySelector(".nav-menu");if(e&&e.classList.contains("active")&&e.classList.remove("active"),B(a),window.scrollTo(0,0),a.startsWith("#destination/")){const t=a.split("/")[1];N(t);return}if(a.startsWith("#blog/")){const t=a.split("/")[1];F(t);return}(L[a]||y)()}function B(a){document.querySelectorAll(".nav-link").forEach(i=>{const t=i.getAttribute("href");t===a||a===""&&t==="#home"?i.classList.add("active"):i.classList.remove("active")})}function m(a,e="✦"){let i=document.getElementById("notification-popup");i||(i=document.createElement("div"),i.id="notification-popup",i.className="notification",document.body.appendChild(i)),i.innerHTML=`
    <span class="notification-icon">${e}</span>
    <span class="notification-message">${a}</span>
  `,i.classList.add("show"),setTimeout(()=>{i.classList.remove("show")},4e3)}function y(){var a,e;p.innerHTML=`
    <!-- Hero Banner Carousel -->
    <section class="hero-carousel">
      <div class="carousel-track">
        <div class="carousel-slide active">
          <img src="assets/hero_resort.png" class="slide-image" alt="Luxury Resort Overwater Villa">
          <div class="slide-overlay"></div>
          <div class="slide-content-wrap">
            <div class="slide-content">
              <span class="slide-subtitle">Tour My Land</span>
              <h1 class="slide-title">Journeys crafted around you.</h1>
              <p class="slide-text">Luxury travel designed around your pace, your interests and the experiences you truly want.</p>
              <div class="slide-buttons">
                <button class="btn btn-accent" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Start Planning</button>
                <a href="#destinations" class="btn btn-white">Explore Destinations</a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <img src="assets/hero_cultural.png" class="slide-image" alt="Serene Temple in Autumn">
          <div class="slide-overlay"></div>
          <div class="slide-content-wrap">
            <div class="slide-content">
              <span class="slide-subtitle">Curated Experiences</span>
              <h1 class="slide-title">Traditions met with elegance.</h1>
              <p class="slide-text">Venture beyond simple itineraries. Taste exquisite local dishes and witness imperial cultures in absolute luxury.</p>
              <div class="slide-buttons">
                <button class="btn btn-accent" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Start Planning</button>
                <a href="#destinations" class="btn btn-white">Explore Destinations</a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <img src="assets/hero_mountain.png" class="slide-image" alt="High-end Mountain Sanctuary">
          <div class="slide-overlay"></div>
          <div class="slide-content-wrap">
            <div class="slide-content">
              <span class="slide-subtitle">Premium Escapes</span>
              <h1 class="slide-title">Find stillness in private.</h1>
              <p class="slide-text">Relax at doctor-guided Ayurvedic spas, hot onsen pools, or high mountain chalets customized to your lifestyle.</p>
              <div class="slide-buttons">
                <button class="btn btn-accent" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Start Planning</button>
                <a href="#destinations" class="btn btn-white">Explore Destinations</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Nav Arrows -->
      <button class="carousel-nav-btn carousel-prev" id="carousel-prev-btn">⟵</button>
      <button class="carousel-nav-btn carousel-next" id="carousel-next-btn">⟶</button>
      
      <!-- Dots -->
      <div class="carousel-indicators" id="carousel-dots-container">
        <span class="indicator-dot active" data-index="0"></span>
        <span class="indicator-dot" data-index="1"></span>
        <span class="indicator-dot" data-index="2"></span>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="section-padding container welcome-grid">
      <div class="welcome-images fade-in">
        <img src="assets/hero_resort.png" class="welcome-img-main" alt="About TML">
        <div class="welcome-badge">
          <h4>100%</h4>
          <p>Tailor-made itineraries designed precisely around your comfort</p>
        </div>
      </div>
      <div class="welcome-content fade-in">
        <span class="section-subtitle">Welcome to TML</span>
        <h2>Why Tour My Land</h2>
        <p style="margin-bottom: 25px; font-size: 1.15rem; line-height: 1.8;">We believe that travel is a deeply personal endeavor. You shouldn’t have to adapt your desires to fit pre-packaged templates. We craft Journeys around your pace, your lifestyle, and the experiences you truly want.</p>
        <p style="margin-bottom: 30px;">Every destination is handpicked, every hotel vetted by our Travel Specialists, and every guide chosen for their storytelling flair. Experience a true warmth in luxury.</p>
        
        <div class="welcome-features">
          <div class="welcome-feature-card">
            <div class="feature-icon-box">✦</div>
            <div>
              <h4>Bespoke Consultations</h4>
              <p>Work 1-on-1 with dedicated destination experts who know every hotel and hideaway.</p>
            </div>
          </div>
          <div class="welcome-feature-card">
            <div class="feature-icon-box">✦</div>
            <div>
              <h4>Artisan Connections</h4>
              <p>Access imperial ceremonies, private yacht charters, and local culinary masters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Preview -->
    <section class="section-padding bg-light">
      <div class="container">
        <span class="section-subtitle text-center">Inspirations</span>
        <h2 class="section-title">Destinations to Explore</h2>
        
        <h3 class="destination-group-title">Tours Around the World</h3>
        <div class="destination-grid">
          ${h("world",3)}
        </div>
        
        <h3 class="destination-group-title">India Tours</h3>
        <div class="destination-grid" style="margin-bottom: 50px;">
          ${h("india",4)}
        </div>
        
        <div class="text-center">
          <a href="#destinations" class="btn btn-primary">View All Destinations</a>
        </div>
      </div>
    </section>

    <!-- Curated Themes -->
    <section class="section-padding container">
      <div class="curated-tours-intro text-center">
        <span class="section-subtitle">Bespoke Themes</span>
        <h2>Curated Luxury Experiences</h2>
        <p>Private trips built from the ground up to fit your special interests. Explore some of our favorite travel modules.</p>
      </div>
      <div class="curated-grid">
        ${x(4)}
      </div>
      <div class="curated-cta-section">
        <h3>Need a Completely Unique Concept?</h3>
        <p>Whether it’s a multi-country exploration, a wedding anniversary, or private aviation requests, our team is at your disposal.</p>
        <button class="btn btn-accent" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Request a Tailor-Made Quote</button>
      </div>
    </section>

    <!-- Interactive Planner -->
    <section class="section-padding bg-light" id="plan-trip">
      <div class="container planner-section">
        <div class="planner-container">
          <div class="planner-header">
            <h3>Plan My Trip</h3>
            <p>Design your custom luxury layout in 2 easy steps</p>
            <div class="planner-progress-bar" id="planner-progress"></div>
          </div>
          <div class="planner-body" id="planner-body-node">
            <!-- Dynamic Planner Content Renders Here -->
          </div>
          <div class="planner-footer" id="planner-footer-node">
            <!-- Buttons render dynamically -->
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding testimonials-section">
      <div class="container">
        <span class="section-subtitle text-center" style="color: var(--color-accent)">Voices</span>
        <h2 class="section-title">The TML Experience</h2>
        <div class="test-carousel">
          <div class="test-track" id="test-track-node">
            ${M()}
          </div>
          <div class="test-dots" id="test-dots-node">
            ${b.map((i,t)=>`<span class="test-dot ${t===0?"active":""}" data-index="${t}"></span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Blogs Excerpt -->
    <section class="section-padding container">
      <div class="text-center" style="margin-bottom: 50px;">
        <span class="section-subtitle">Travel Stories</span>
        <h2>From the Magazine</h2>
        <p style="max-width: 500px; margin: 0 auto;">Refined travel tips, design details, and narratives from our seasoned curators.</p>
      </div>
      <div class="blogs-grid">
        ${k(3)}
      </div>
      <div class="text-center" style="margin-top: 50px;">
        <a href="#blogs" class="btn btn-outline">Read More Stories</a>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <span class="section-subtitle text-center">Inquiries</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-container">
          ${P()}
        </div>
      </div>
    </section>

    <!-- Let's Connect -->
    <section class="section-padding container" id="connect">
      <span class="section-subtitle text-center">Bespoke Inquiries</span>
      <h2 class="section-title">Let’s Connect</h2>
      <div class="contact-grid">
        <div class="contact-info-cards">
          <div class="contact-card">
            <div class="contact-icon">✉</div>
            <div>
              <h4>Email Us</h4>
              <p>Our Travel Directors respond within 24 hours.</p>
              <a href="mailto:concierge@tourmyland.com">concierge@tourmyland.com</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <div>
              <h4>WhatsApp Concierge</h4>
              <p>Instant support for current and planning guests.</p>
              <a href="https://wa.me/1234567890" target="_blank">+1 (800) TML-LAND</a>
            </div>
          </div>
          
          <div class="newsletter-box">
            <h4>Join the Journal</h4>
            <p>Curated monthly travel lists, secret hotel rates, and seasonal itineraries.</p>
            <form class="newsletter-form" id="news-form">
              <input type="email" class="newsletter-input" placeholder="Your Email Address" required>
              <button type="submit" class="btn btn-accent" style="padding: 10px 20px;">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h3 style="margin-bottom: 25px;">Send a Direct Message</h3>
          <form id="direct-msg-form">
            <div class="planner-form-grid" style="grid-template-columns: 1fr 1fr;">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Jane Doe" required>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="jane@example.com" required>
              </div>
              <div class="form-group full-width">
                <label>Phone Number</label>
                <input type="tel" class="form-control" placeholder="+1 (555) 000-0000" required>
              </div>
              <div class="form-group full-width">
                <label>Bespoke Requirements / Notes</label>
                <textarea class="form-control" rows="5" placeholder="Share any specific destinations, travel pace, or luxury hotels you have in mind..." required></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 30px; width: 100%;">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,q(),I(),$(),D(),(a=document.getElementById("news-form"))==null||a.addEventListener("submit",i=>{i.preventDefault(),m("Thank you for subscribing to the TML Journal!","✉"),i.target.reset()}),(e=document.getElementById("direct-msg-form"))==null||e.addEventListener("submit",i=>{i.preventDefault(),m("Message sent! A Travel Concierge will contact you shortly.","✦"),i.target.reset()})}function h(a,e=99){return g.filter(t=>t.category===a).slice(0,e).map(t=>`
    <a href="#destination/${t.id}" class="destination-card fade-in">
      <div class="dest-card-image-wrap">
        <img src="${t.image}" class="dest-card-image" alt="${t.name}" loading="lazy">
        <div class="dest-card-gradient"></div>
        <div class="dest-card-content">
          <span class="dest-card-badge">${t.subtitle}</span>
          <h3 class="dest-card-title">${t.name}</h3>
          <p class="dest-card-desc">${t.description}</p>
          <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </div>
    </a>
  `).join("")}function x(a=99){return S.slice(0,a).map(e=>`
    <div class="curated-card fade-in">
      <div class="curated-card-image-box">
        <img src="${e.image}" class="curated-card-img" alt="${e.title}" loading="lazy">
        <div class="curated-icon-box">${e.icon}</div>
      </div>
      <div class="curated-card-body">
        <h4>${e.title}</h4>
        <p>${e.desc}</p>
        <button class="btn btn-outline" style="width: 100%;" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Request Tailor-Made Details</button>
      </div>
    </div>
  `).join("")}function k(a=99){return f.slice(0,a).map(e=>`
    <article class="blog-card fade-in">
      <div class="blog-card-img-box">
        <img src="${e.image}" class="blog-card-img" alt="${e.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-meta">${e.date} • ${e.author}</span>
        <h4>${e.title}</h4>
        <p>${e.summary}</p>
        <a href="#blog/${e.id}" class="blog-readmore">Read Story ⟶</a>
      </div>
    </article>
  `).join("")}function P(){return E.map(a=>`
    <div class="faq-item">
      <div class="faq-question">
        <h4>${a.q}</h4>
        <span class="faq-chevron">▼</span>
      </div>
      <div class="faq-answer">
        <p>${a.a}</p>
      </div>
    </div>
  `).join("")}function M(){return b.map(a=>`
    <div class="test-slide">
      <p class="test-quote">${a.quote}</p>
      <div class="test-author">${a.author}</div>
      <div class="test-trip">${a.trip}</div>
    </div>
  `).join("")}function q(){const a=document.querySelectorAll(".carousel-slide"),e=document.querySelectorAll(".indicator-dot"),i=document.getElementById("carousel-prev-btn"),t=document.getElementById("carousel-next-btn");if(a.length===0)return;function s(c){a.forEach(u=>u.classList.remove("active")),e.forEach(u=>u.classList.remove("active")),n.carouselIndex=(c+a.length)%a.length,a[n.carouselIndex].classList.add("active");const d=document.querySelector(`.indicator-dot[data-index="${n.carouselIndex}"]`);d&&d.classList.add("active")}i==null||i.addEventListener("click",()=>{s(n.carouselIndex-1),l()}),t==null||t.addEventListener("click",()=>{s(n.carouselIndex+1),l()}),e.forEach(c=>{c.addEventListener("click",d=>{const u=parseInt(d.target.getAttribute("data-index"));s(u),l()})}),r();function r(){n.carouselTimer=setInterval(()=>{s(n.carouselIndex+1)},6e3)}function l(){clearInterval(n.carouselTimer),r()}}function I(){const a=document.getElementById("test-track-node"),e=document.querySelectorAll(".test-dot");!a||e.length===0||e.forEach(i=>{i.addEventListener("click",t=>{e.forEach(r=>r.classList.remove("active"));const s=parseInt(t.target.getAttribute("data-index"));t.target.classList.add("active"),a.style.transform=`translateX(-${s*33.333}%)`})})}function $(){const a=document.querySelectorAll(".faq-item");a.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{const t=e.classList.contains("active");a.forEach(s=>s.classList.remove("active")),t||e.classList.add("active")})})}function D(){n.plannerStep=1,n.plannerData={},v()}function v(){const a=document.getElementById("planner-body-node"),e=document.getElementById("planner-footer-node"),i=document.getElementById("planner-progress");if(!(!a||!e))if(n.plannerStep===1){i.style.width="50%",a.innerHTML=`
      <form id="planner-form-step1">
        <div class="planner-form-grid">
          <div class="form-group">
            <label>Name</label>
            <input type="text" id="p-name" class="form-control" placeholder="Johnathan Doe" required value="${n.plannerData.name||""}">
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" id="p-email" class="form-control" placeholder="john@example.com" required value="${n.plannerData.email||""}">
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" id="p-phone" class="form-control" placeholder="+1 (555) 123-4567" required value="${n.plannerData.phone||""}">
          </div>
          <div class="form-group">
            <label>Country of Residence</label>
            <input type="text" id="p-country" class="form-control" placeholder="United States" required value="${n.plannerData.country||""}">
          </div>
          <div class="form-group">
            <label>Preferred Destination</label>
            <select id="p-dest" class="form-control">
              <option value="Bhutan" ${n.plannerData.destination==="Bhutan"?"selected":""}>Bhutan</option>
              <option value="Kerala" ${n.plannerData.destination==="Kerala"?"selected":""}>Kerala, India</option>
              <option value="Rajasthan" ${n.plannerData.destination==="Rajasthan"?"selected":""}>Rajasthan, India</option>
              <option value="Japan" ${n.plannerData.destination==="Japan"?"selected":""}>Japan</option>
              <option value="Thailand" ${n.plannerData.destination==="Thailand"?"selected":""}>Thailand</option>
              <option value="Bali" ${n.plannerData.destination==="Bali"?"selected":""}>Bali</option>
            </select>
          </div>
          <div class="form-group">
            <label>Travel Dates</label>
            <input type="text" id="p-dates" class="form-control" placeholder="e.g. October 2026 or Fall" required value="${n.plannerData.dates||""}">
          </div>
          <div class="form-group full-width">
            <label>Travel Focus / Main Interest</label>
            <div class="radio-cards-grid">
              <div class="radio-card ${n.plannerData.interest==="Wellness & Spa"?"selected":""}" data-value="Wellness & Spa">
                <h4>🧘 Wellness & Spa</h4>
                <p>Spas, Ayurveda & Yoga</p>
              </div>
              <div class="radio-card ${n.plannerData.interest==="Cultural Immersion"?"selected":n.plannerData.interest?"":"selected"}" data-value="Cultural Immersion">
                <h4>🏛️ Culture & Heritage</h4>
                <p>Monasteries, Palaces & Arts</p>
              </div>
              <div class="radio-card ${n.plannerData.interest==="Adventure & Landscapes"?"selected":""}" data-value="Adventure & Landscapes">
                <h4>🏔️ Mountains & Yachting</h4>
                <p>Sailing, Safaris & Hikes</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    `,e.innerHTML=`
      <div></div>
      <button class="btn btn-primary" id="planner-next-btn">Next Step ⟶</button>
    `;const t=a.querySelectorAll(".radio-card");let s=n.plannerData.interest||"Cultural Immersion";t.forEach(r=>{r.addEventListener("click",()=>{t.forEach(l=>l.classList.remove("selected")),r.classList.add("selected"),s=r.getAttribute("data-value")})}),document.getElementById("planner-next-btn").addEventListener("click",()=>{const r=document.getElementById("p-name").value.trim(),l=document.getElementById("p-email").value.trim(),c=document.getElementById("p-phone").value.trim(),d=document.getElementById("p-country").value.trim(),u=document.getElementById("p-dest").value,o=document.getElementById("p-dates").value.trim();if(!r||!l||!c||!d||!o){m("Please fill in all standard contact fields first.","⚠️");return}n.plannerData={name:r,email:l,phone:c,country:d,destination:u,dates:o,interest:s},n.plannerStep=2,v()})}else n.plannerStep===2&&(i.style.width="100%",a.innerHTML=`
      <div class="suggestion-loading">
        <div class="loading-spinner"></div>
        <h4>Curating Your Premium Itineraries...</h4>
        <p>Our expert database is mapping paths around ${n.plannerData.interest} for you.</p>
      </div>
    `,e.innerHTML="",setTimeout(()=>{const t=C[n.plannerData.interest]||[];a.innerHTML=`
        <div style="text-align: center; margin-bottom: 30px;">
          <h4 style="font-size: 1.8rem; color: var(--color-primary);">Suggested Custom Travel Schemes</h4>
          <p>Hi ${n.plannerData.name}, based on your passion for <strong>${n.plannerData.interest}</strong>, we have prepared 3 exclusive private luxury paths:</p>
        </div>
        <div class="suggestions-grid">
          ${t.map((s,r)=>`
            <div class="suggestion-card fade-in">
              <span class="suggest-duration">${s.duration} • Option ${r+1}</span>
              <h4>${s.title}</h4>
              <p>${s.desc}</p>
              <ul class="suggest-highlights">
                ${s.highlights.map(l=>`<li>${l}</li>`).join("")}
              </ul>
              <button class="btn btn-accent get-quote-btn" style="width: 100%; margin-top: 15px;" data-title="${s.title}">Get a Quote</button>
            </div>
          `).join("")}
        </div>
      `,e.innerHTML=`
        <button class="btn btn-outline" id="planner-back-btn">⟵ Back to Details</button>
        <div></div>
      `,document.getElementById("planner-back-btn").addEventListener("click",()=>{n.plannerStep=1,v()}),a.querySelectorAll(".get-quote-btn").forEach(s=>{s.addEventListener("click",r=>{const l=r.target.getAttribute("data-title");m(`Quote inquiry received for "${l}". Connecting with you shortly!`,"✦"),setTimeout(()=>{D(),document.getElementById("connect").scrollIntoView({behavior:"smooth"})},2e3)})})},1500))}function A(){p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_resort.png" class="inner-hero-img" alt="All Destinations">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Bespoke Collections</span>
        <h1 style="color: var(--color-white)">Journeys Around the World</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Select a curated region to discover tailored local itineraries, handpicked resorts, and exclusive departures.</p>
      </div>
    </section>

    <!-- Search / Filter Component -->
    <section class="container" style="padding-top: 60px;">
      <div style="background-color: var(--color-bg-light); border-radius: 8px; padding: 25px 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; border: 1px solid rgba(15, 34, 61, 0.05);">
        <div>
          <h4 style="font-family: var(--font-sans); font-weight: 600; color: var(--color-primary);">Filter Destinations</h4>
          <p style="font-size: 0.85rem;">Instantly filter by typing country name or region details</p>
        </div>
        <div style="position: relative; display: flex; align-items: center; width: 100%; max-width: 400px;">
          <input type="text" class="form-control" id="dest-search-input" placeholder="Type country (e.g. Bhutan, Thailand, Kerala)..." style="width: 100%; padding-left: 45px; background-color: var(--color-white);">
          <span style="position: absolute; left: 18px; color: var(--color-secondary);">🔍</span>
        </div>
      </div>
    </section>

    <section class="section-padding container">
      <div id="dest-world-wrapper">
        <h3 class="destination-group-title" style="margin-top: 0;">Tours Around the World</h3>
        <div class="destination-grid" id="world-grid-node" style="margin-bottom: 60px;">
          ${h("world")}
        </div>
      </div>

      <div id="dest-india-wrapper">
        <h3 class="destination-group-title">India Tours</h3>
        <div class="destination-grid" id="india-grid-node">
          ${h("india")}
        </div>
      </div>

      <div id="search-no-results" class="text-center" style="display: none; padding: 60px 0;">
        <span style="font-size: 3rem; color: var(--color-accent);">✦</span>
        <h4 style="font-size: 1.8rem; margin: 15px 0;">No Matching Destinations Found</h4>
        <p style="max-width: 500px; margin: 0 auto 30px;">We specialize in customizing journeys worldwide. Share your requested location and we will craft it for you.</p>
        <button class="btn btn-accent" onclick="window.location.hash='#contact-us'">Request Custom Location</button>
      </div>
    </section>
  `;const a=document.getElementById("dest-search-input"),e=document.getElementById("world-grid-node"),i=document.getElementById("india-grid-node"),t=document.getElementById("dest-world-wrapper"),s=document.getElementById("dest-india-wrapper"),r=document.getElementById("search-no-results");a==null||a.addEventListener("input",l=>{const c=l.target.value.toLowerCase().trim();if(!c){t.style.display="block",s.style.display="block",r.style.display="none",e.innerHTML=h("world"),i.innerHTML=h("india");return}const d=g.filter(o=>o.category==="world"&&(o.name.toLowerCase().includes(c)||o.subtitle.toLowerCase().includes(c))),u=g.filter(o=>o.category==="india"&&(o.name.toLowerCase().includes(c)||o.subtitle.toLowerCase().includes(c)));d.length>0?(t.style.display="block",e.innerHTML=d.map(o=>`
        <a href="#destination/${o.id}" class="destination-card fade-in">
          <div class="dest-card-image-wrap">
            <img src="${o.image}" class="dest-card-image" alt="${o.name}" loading="lazy">
            <div class="dest-card-gradient"></div>
            <div class="dest-card-content">
              <span class="dest-card-badge">${o.subtitle}</span>
              <h3 class="dest-card-title">${o.name}</h3>
              <p class="dest-card-desc">${o.description}</p>
              <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
          </div>
        </a>
      `).join("")):t.style.display="none",u.length>0?(s.style.display="block",i.innerHTML=u.map(o=>`
        <a href="#destination/${o.id}" class="destination-card fade-in">
          <div class="dest-card-image-wrap">
            <img src="${o.image}" class="dest-card-image" alt="${o.name}" loading="lazy">
            <div class="dest-card-gradient"></div>
            <div class="dest-card-content">
              <span class="dest-card-badge">${o.subtitle}</span>
              <h3 class="dest-card-title">${o.name}</h3>
              <p class="dest-card-desc">${o.description}</p>
              <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
          </div>
        </a>
      `).join("")):s.style.display="none",d.length===0&&u.length===0?r.style.display="block":r.style.display="none"})}function H(){p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_resort.png" class="inner-hero-img" alt="Curated Themes">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Bespoke Focus</span>
        <h1 style="color: var(--color-white)">Curated Travel Themes</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Select from our premium private interest concepts, specifically organized to offer unparalleled cultural and immersive depth.</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="curated-grid">
        ${x()}
      </div>
      <div class="curated-cta-section" style="margin-top: 80px;">
        <h3>Looking for Multi-Destination Journeys?</h3>
        <p>Combining cultural explorations of Bhutan with the peaceful backwaters of Kerala and premium stopovers in Singapore is our specialty. Speak with our Travel Concierge to map it perfectly.</p>
        <a href="#contact-us" class="btn btn-accent">Initiate Bespoke Consultations</a>
      </div>
    </section>
  `}function j(){p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_cultural.png" class="inner-hero-img" alt="Premium Group Departures">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Intimate Departures</span>
        <h1 style="color: var(--color-white)">Premium Small Group Tours</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Explore the world alongside like-minded travelers in tightly curated groups capped at a maximum of 12 guests.</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="curated-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
        ${T.map(a=>`
          <div class="curated-card fade-in">
            <div class="curated-card-image-box" style="height: 230px;">
              <img src="${a.image}" class="curated-card-img" alt="${a.title}" loading="lazy">
              <span style="position: absolute; top: 15px; right: 15px; background-color: var(--color-primary); color: var(--color-accent); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 6px 12px; border-radius: 4px; box-shadow: var(--shadow-subtle);">${a.spotsLeft}</span>
            </div>
            <div class="curated-card-body">
              <span class="slide-subtitle" style="font-size: 0.75rem; color: var(--color-accent); font-weight: 600; display: block; margin-bottom: 0.3rem;">${a.destination} • ${a.dates}</span>
              <h4 style="font-size: 1.5rem; line-height: 1.25; margin-bottom: 0.8rem;">${a.title}</h4>
              <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${a.description}</p>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--color-bg-light); padding-top: 20px; margin-top: auto;">
                <div>
                  <span style="font-size: 0.75rem; text-transform: uppercase; display: block; color: var(--color-secondary);">Pricing From</span>
                  <strong style="color: var(--color-primary); font-size: 1.1rem;">${a.price}</strong>
                </div>
                <button class="btn btn-accent" style="padding: 10px 20px; font-size: 0.75rem;" onclick="window.location.hash='#contact-us'">Reserve Seat</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `}function W(){p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_resort.png" class="inner-hero-img" alt="Travel Journal">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Bespoke Journal</span>
        <h1 style="color: var(--color-white)">Travel Stories & Narratives</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Read photographic logs, food stories, and philosophical design columns straight from our global travel specialists.</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="blogs-grid">
        ${k()}
      </div>
    </section>
  `}function R(){p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_cultural.png" class="inner-hero-img" alt="About TML">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Our Philosophy</span>
        <h1 style="color: var(--color-white)">About Tour My Land</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Discover the values, creators, and sustainable pledges that drive our custom luxury journeys.</p>
      </div>
    </section>

    <!-- Why TML detailed -->
    <section class="section-padding container about-grid">
      <div>
        <span class="section-subtitle">Core Ethos</span>
        <h2>Luxury Infused with Warmth</h2>
        <p style="font-size: 1.15rem; margin-bottom: 25px;">TML – Tour My Land was founded on a simple insight: luxury has become overly standardized. Five-star hotels feel similar across borders, and tours are increasingly rushed.</p>
        <p style="margin-bottom: 25px;">We set out to change that by designing bespoke journeys that emphasize local character, direct human connection, and slow exploration. Our design combines high-end accommodations with real cultural depth.</p>
        <p>Whether you are sipping tea in a traditional farmhouse in Bhutan, sailing the backwaters on a wooden barge, or dining under starlit sands in Rajasthan, you will experience the handpicked, high-touch luxury that makes TML unique.</p>
      </div>
      <div style="position: relative;">
        <img src="assets/hero_mountain.png" alt="TML Philosophy Sanctuary" style="width: 100%; border-radius: var(--radius-card); box-shadow: var(--shadow-premium);">
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <span class="section-subtitle text-center">The Curators</span>
        <h2 class="section-title">Meet Our Designers</h2>
        <p class="text-center" style="max-width: 500px; margin: 0 auto 50px;">A worldwide collective of writers, hospitality experts, and local historians who build your dream paths.</p>
        
        <div class="team-grid">
          <div class="team-card fade-in">
            <div class="team-image-box">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" class="team-img" alt="Aditya Vardhan">
            </div>
            <h4>Aditya Vardhan</h4>
            <p>Founder & India Curator</p>
          </div>
          <div class="team-card fade-in">
            <div class="team-image-box">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" class="team-img" alt="Pema Wangdi">
            </div>
            <h4>Pema Wangdi</h4>
            <p>Himalayan & Bhutan specialist</p>
          </div>
          <div class="team-card fade-in">
            <div class="team-image-box">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" class="team-img" alt="Yusuf Al-Mansoori">
            </div>
            <h4>Yusuf Al-Mansoori</h4>
            <p>Middle East Expert</p>
          </div>
          <div class="team-card fade-in">
            <div class="team-image-box">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" class="team-img" alt="Elena Rossi">
            </div>
            <h4>Elena Rossi</h4>
            <p>European Departures Specialist</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainable travel -->
    <section class="section-padding container">
      <div class="curated-cta-section" style="background-color: var(--color-primary); color: var(--color-white);">
        <span class="section-subtitle" style="color: var(--color-accent);">Responsible Travel</span>
        <h3 style="color: var(--color-white); margin-top: 10px;">Our Sustainable Promise</h3>
        <p style="max-width: 750px; margin: 20px auto 35px; line-height: 1.8;">We deeply love the lands we showcase. For every booking we receive, TML directly offsets carbon footprints, coordinates direct financial support to local schools in the high passes, and completely bans single-use plastics across our fleet and accommodation partnerships.</p>
        <a href="#contact-us" class="btn btn-accent">Join Our Mission</a>
      </div>
    </section>
  `}function z(){var a;p.innerHTML=`
    <section class="inner-hero">
      <img src="assets/hero_mountain.png" class="inner-hero-img" alt="Contact Us">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content text-center">
        <span class="section-subtitle" style="color: var(--color-accent)">Concierge Service</span>
        <h1 style="color: var(--color-white)">Initiate Your Journey</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px; margin: 0 auto;">Connect with a dedicated Travel Designer today. Let us make your dream vacation a living reality.</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="contact-grid">
        <div class="contact-info-cards">
          <div class="contact-card">
            <div class="contact-icon">✉</div>
            <div>
              <h4>Direct Inquiries</h4>
              <p>Work directly with our central designer suite.</p>
              <a href="mailto:concierge@tourmyland.com">concierge@tourmyland.com</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <div>
              <h4>WhatsApp Concierge</h4>
              <p>Instant support for planning and bookings.</p>
              <a href="https://wa.me/1234567890" target="_blank">+1 (800) TML-LAND</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-icon">📍</div>
            <div>
              <h4>Central Office</h4>
              <p>TML HQ, Royal Chambers</p>
              <span style="font-size: 0.95rem; color: var(--color-primary); font-weight: 500;">Udaipur & New Delhi, India</span>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <h3 style="margin-bottom: 25px;">Bespoke Consultations Form</h3>
          <form id="contact-page-inquiry">
            <div class="planner-form-grid">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="John" required>
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Doe" required>
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="john@example.com" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" class="form-control" placeholder="+1 (555) 000-0000" required>
              </div>
              <div class="form-group">
                <label>Target Destination</label>
                <select class="form-control" id="contact-target-dest">
                  ${g.map(e=>`<option value="${e.name}">${e.name}</option>`).join("")}
                </select>
              </div>
              <div class="form-group">
                <label>Approximate Budget per Guest</label>
                <select class="form-control">
                  <option value="Premium">$5,000 - $7,500</option>
                  <option value="Elite">$7,500 - $12,000</option>
                  <option value="Royal">$12,000+</option>
                </select>
              </div>
              <div class="form-group full-width">
                <label>Detailed Trip Expectations</label>
                <textarea class="form-control" rows="6" placeholder="Describe your dream travel pace, specific landmarks, dietary requests, or flight layouts..." required></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 30px; width: 100%;">Submit Custom Request</button>
          </form>
        </div>
      </div>
    </section>
  `,(a=document.getElementById("contact-page-inquiry"))==null||a.addEventListener("submit",e=>{e.preventDefault(),m("Custom consultation inquiry received! A specialist will contact you shortly.","✦"),e.target.reset()})}function N(a){var i;const e=g.find(t=>t.id===a);if(!e){window.location.hash="";return}p.innerHTML=`
    <section class="inner-hero">
      <img src="${e.image}" class="inner-hero-img" alt="${e.name}">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content">
        <a href="#destinations" style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to Destinations
        </a>
        <span class="section-subtitle" style="color: var(--color-accent)">${e.subtitle}</span>
        <h1 style="color: var(--color-white)">${e.name} Journey</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px;">Duration: ${e.duration} • Customized Private Departures</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="dest-detail-grid">
        <div>
          <span class="section-subtitle">Detailed Experience</span>
          <h2>The Journey Highlights</h2>
          <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 30px;">${e.description}</p>
          
          <div class="welcome-features" style="grid-template-columns: 1fr 1fr; margin-bottom: 50px;">
            ${e.highlights?e.highlights.map(t=>`
              <div class="welcome-feature-card">
                <div class="feature-icon-box">✦</div>
                <div>
                  <p style="color: var(--color-primary); font-weight: 500; font-size: 1rem;">${t}</p>
                </div>
              </div>
            `).join(""):""}
          </div>

          <hr style="border: 0; height: 1px; background-color: var(--color-bg-light); margin-bottom: 50px;">

          <h2 style="margin-bottom: 30px;">Refined Itinerary Path</h2>
          <p>Every TML itinerary is custom-built around your arrival flights and personal focus. Here is a curated outline of what we recommend for a standard ${e.duration} stay:</p>
          
          <div class="itinerary-timeline">
            ${e.itinerary?e.itinerary.map(t=>`
              <div class="itinerary-node">
                <span class="node-day">${t.day}</span>
                <h4 class="node-title">${t.title}</h4>
                <p>${t.desc}</p>
              </div>
            `).join(""):""}
          </div>
        </div>

        <div>
          <div class="dest-sidebar-card">
            <h3>Start Custom Planning</h3>
            <p style="text-align: center; font-size: 0.9rem; margin-bottom: 25px;">Let us draft this itinerary around your personal pace, dates, and interests.</p>
            
            <form id="dest-sidebar-form">
              <div class="form-group" style="margin-bottom: 20px;">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Johnathan Doe" required>
              </div>
              <div class="form-group" style="margin-bottom: 20px;">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="john@example.com" required>
              </div>
              <div class="form-group" style="margin-bottom: 20px;">
                <label>Travel Dates</label>
                <input type="text" class="form-control" placeholder="e.g. October 2026" required>
              </div>
              <div class="form-group" style="margin-bottom: 30px;">
                <label>Party Size</label>
                <select class="form-control">
                  <option value="1">Solo Traveler</option>
                  <option value="2" selected>Couple</option>
                  <option value="Family">Family / Group</option>
                </select>
              </div>
              <button type="submit" class="btn btn-accent" style="width: 100%;">Get Bespoke Itinerary Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,(i=document.getElementById("dest-sidebar-form"))==null||i.addEventListener("submit",t=>{t.preventDefault(),m(`Bespoke inquiry for "${e.name}" received! Connecting with you shortly.`,"✦"),t.target.reset()})}function F(a){const e=f.find(i=>i.id===a);if(!e){window.location.hash="#blogs";return}p.innerHTML=`
    <section class="inner-hero" style="height: 380px;">
      <img src="${e.image}" class="inner-hero-img" alt="${e.title}">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content">
        <a href="#blogs" style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to Journal
        </a>
        <h1 style="color: var(--color-white); font-size: 3rem;">${e.title}</h1>
      </div>
    </section>

    <section class="section-padding container">
      <div class="blog-detail-container">
        <div class="blog-detail-meta">
          <span>Published: <strong>${e.date}</strong></span>
          <span>•</span>
          <span>Written By: <strong>${e.author}</strong></span>
        </div>
        
        <div class="blog-detail-body">
          <p style="font-size: 1.3rem; font-family: var(--font-serif); font-style: italic; color: var(--color-primary); line-height: 1.7; border-left: 3px solid var(--color-accent); padding-left: 20px; margin-bottom: 40px;">
            ${e.summary}
          </p>
          
          ${e.content.split(`

`).map(i=>`<p>${i.trim()}</p>`).join("")}
        </div>
        
        <div style="margin-top: 60px; padding: 40px; background-color: var(--color-bg-light); border-radius: var(--radius-card); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
          <div>
            <h4 style="font-family: var(--font-sans); font-weight: 600; color: var(--color-primary); margin-bottom: 5px;">Inspired to design your own journey?</h4>
            <p style="font-size: 0.85rem;">Let our expert planners craft customized schedules for you.</p>
          </div>
          <button class="btn btn-accent" onclick="window.location.hash='#contact-us'">Speak to a Designer</button>
        </div>
      </div>
    </section>
  `}function J(){const a=document.querySelector(".sticky-header"),e=document.querySelector(".menu-toggle"),i=document.querySelector(".nav-menu"),t=document.querySelector(".search-input");window.addEventListener("scroll",()=>{window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled")}),e==null||e.addEventListener("click",()=>{i.classList.toggle("active")}),t==null||t.addEventListener("keypress",s=>{if(s.key==="Enter"){const r=s.target.value.trim();r&&(window.location.hash="#destinations",setTimeout(()=>{const l=document.getElementById("dest-search-input");l&&(l.value=r,l.dispatchEvent(new Event("input")))},100),s.target.value="")}})}window.addEventListener("hashchange",w);window.addEventListener("DOMContentLoaded",()=>{J(),w()});
