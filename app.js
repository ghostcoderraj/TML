// TML - Tour My Land Luxury Travel Application Controller

import { 
  destinations, 
  curatedTours, 
  groupTours, 
  blogs, 
  faqs, 
  testimonials, 
  suggestedItineraries 
} from './data.js';

// --- State Management ---
const state = {
  currentRoute: '',
  carouselIndex: 0,
  carouselTimer: null,
  testimonialIndex: 0,
  plannerStep: 1,
  plannerData: {}
};

// --- App Shell Mount Nodes ---
const appContent = document.getElementById('app-content');

// --- SPA Router ---
const routes = {
  '': renderHome,
  '#home': renderHome,
  '#destinations': renderDestinations,
  '#curated-tours': renderCuratedTours,
  '#group-tours': renderGroupTours,
  '#blogs': renderBlogs,
  '#about-us': renderAboutUs,
  '#contact-us': renderContactUs
};

function router() {
  const hash = window.location.hash;
  
  // Clear any timers to prevent memory leaks
  clearInterval(state.carouselTimer);
  
  // Close mobile menu if open
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }

  // Update navbar link active states
  updateActiveNavLink(hash);

  // Scroll to top on page change
  window.scrollTo(0, 0);

  // Dynamic Route Handling (e.g. #destination/bhutan)
  if (hash.startsWith('#destination/')) {
    const destId = hash.split('/')[1];
    renderDestinationDetail(destId);
    return;
  }
  
  if (hash.startsWith('#blog/')) {
    const blogId = hash.split('/')[1];
    renderBlogDetail(blogId);
    return;
  }

  // Exact Route Matching
  const handler = routes[hash] || renderHome;
  handler();
}

function updateActiveNavLink(hash) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === hash || (hash === '' && href === '#home')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// --- Notification Popup System ---
function showNotification(message, icon = '✦') {
  let notif = document.getElementById('notification-popup');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'notification-popup';
    notif.className = 'notification';
    document.body.appendChild(notif);
  }
  
  notif.innerHTML = `
    <span class="notification-icon">${icon}</span>
    <span class="notification-message">${message}</span>
  `;
  
  notif.classList.add('show');
  
  setTimeout(() => {
    notif.classList.remove('show');
  }, 4000);
}

// --- Home Render ---
function renderHome() {
  appContent.innerHTML = `
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
          ${renderDestCards('world', 3)}
        </div>
        
        <h3 class="destination-group-title">India Tours</h3>
        <div class="destination-grid" style="margin-bottom: 50px;">
          ${renderDestCards('india', 4)}
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
        ${renderCuratedCards(4)}
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
            ${renderTestimonialSlides()}
          </div>
          <div class="test-dots" id="test-dots-node">
            ${testimonials.map((_, i) => `<span class="test-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
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
        ${renderBlogCards(3)}
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
          ${renderFaqAccordion()}
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
  `;

  // Attach Carousel & UI Event Listeners
  initCarousel();
  initTestimonialSlider();
  initFaqAccordion();
  initPlanner();
  
  // Attach Submit Listeners
  document.getElementById('news-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification("Thank you for subscribing to the TML Journal!", "✉");
    e.target.reset();
  });
  
  document.getElementById('direct-msg-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification("Message sent! A Travel Concierge will contact you shortly.", "✦");
    e.target.reset();
  });
}

// --- Card Render Helpers ---
function renderDestCards(category, limit = 99) {
  const filtered = destinations
    .filter(d => d.category === category)
    .slice(0, limit);
    
  return filtered.map(d => `
    <a href="#destination/${d.id}" class="destination-card fade-in">
      <div class="dest-card-image-wrap">
        <img src="${d.image}" class="dest-card-image" alt="${d.name}" loading="lazy">
        <div class="dest-card-gradient"></div>
        <div class="dest-card-content">
          <span class="dest-card-badge">${d.subtitle}</span>
          <h3 class="dest-card-title">${d.name}</h3>
          <p class="dest-card-desc">${d.description}</p>
          <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </div>
    </a>
  `).join('');
}

function renderCuratedCards(limit = 99) {
  return curatedTours.slice(0, limit).map(c => `
    <div class="curated-card fade-in">
      <div class="curated-card-image-box">
        <img src="${c.image}" class="curated-card-img" alt="${c.title}" loading="lazy">
        <div class="curated-icon-box">${c.icon}</div>
      </div>
      <div class="curated-card-body">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
        <button class="btn btn-outline" style="width: 100%;" onclick="document.getElementById('plan-trip').scrollIntoView({behavior: 'smooth'})">Request Tailor-Made Details</button>
      </div>
    </div>
  `).join('');
}

function renderBlogCards(limit = 99) {
  return blogs.slice(0, limit).map(b => `
    <article class="blog-card fade-in">
      <div class="blog-card-img-box">
        <img src="${b.image}" class="blog-card-img" alt="${b.title}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-meta">${b.date} • ${b.author}</span>
        <h4>${b.title}</h4>
        <p>${b.summary}</p>
        <a href="#blog/${b.id}" class="blog-readmore">Read Story ⟶</a>
      </div>
    </article>
  `).join('');
}

function renderFaqAccordion() {
  return faqs.map(f => `
    <div class="faq-item">
      <div class="faq-question">
        <h4>${f.q}</h4>
        <span class="faq-chevron">▼</span>
      </div>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonialSlides() {
  return testimonials.map(t => `
    <div class="test-slide">
      <p class="test-quote">${t.quote}</p>
      <div class="test-author">${t.author}</div>
      <div class="test-trip">${t.trip}</div>
    </div>
  `).join('');
}

// --- Home Carousel Logic ---
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.indicator-dot');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  
  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    state.carouselIndex = (index + slides.length) % slides.length;
    slides[state.carouselIndex].classList.add('active');
    
    const activeDot = document.querySelector(`.indicator-dot[data-index="${state.carouselIndex}"]`);
    if (activeDot) activeDot.classList.add('active');
  }

  // Event Listeners
  prevBtn?.addEventListener('click', () => {
    showSlide(state.carouselIndex - 1);
    resetCarouselAutoplay();
  });
  
  nextBtn?.addEventListener('click', () => {
    showSlide(state.carouselIndex + 1);
    resetCarouselAutoplay();
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      showSlide(index);
      resetCarouselAutoplay();
    });
  });

  // Autoplay
  startCarouselAutoplay();

  function startCarouselAutoplay() {
    state.carouselTimer = setInterval(() => {
      showSlide(state.carouselIndex + 1);
    }, 6000);
  }

  function resetCarouselAutoplay() {
    clearInterval(state.carouselTimer);
    startCarouselAutoplay();
  }
}

// --- Testimonial Slider ---
function initTestimonialSlider() {
  const track = document.getElementById('test-track-node');
  const dots = document.querySelectorAll('.test-dot');
  
  if (!track || dots.length === 0) return;

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      dots.forEach(d => d.classList.remove('active'));
      const index = parseInt(e.target.getAttribute('data-index'));
      e.target.classList.add('active');
      track.style.transform = `translateX(-${index * 33.333}%)`;
    });
  });
}

// --- FAQ Accordion Logic ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all first
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Toggle
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// --- Plan My Trip (Wizard) Logic ---
function initPlanner() {
  state.plannerStep = 1;
  state.plannerData = {};
  renderPlannerStep();
}

function renderPlannerStep() {
  const bodyNode = document.getElementById('planner-body-node');
  const footerNode = document.getElementById('planner-footer-node');
  const progressBar = document.getElementById('planner-progress');
  
  if (!bodyNode || !footerNode) return;

  if (state.plannerStep === 1) {
    progressBar.style.width = '50%';
    bodyNode.innerHTML = `
      <form id="planner-form-step1">
        <div class="planner-form-grid">
          <div class="form-group">
            <label>Name</label>
            <input type="text" id="p-name" class="form-control" placeholder="Johnathan Doe" required value="${state.plannerData.name || ''}">
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" id="p-email" class="form-control" placeholder="john@example.com" required value="${state.plannerData.email || ''}">
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" id="p-phone" class="form-control" placeholder="+1 (555) 123-4567" required value="${state.plannerData.phone || ''}">
          </div>
          <div class="form-group">
            <label>Country of Residence</label>
            <input type="text" id="p-country" class="form-control" placeholder="United States" required value="${state.plannerData.country || ''}">
          </div>
          <div class="form-group">
            <label>Preferred Destination</label>
            <select id="p-dest" class="form-control">
              <option value="Bhutan" ${state.plannerData.destination === 'Bhutan' ? 'selected' : ''}>Bhutan</option>
              <option value="Kerala" ${state.plannerData.destination === 'Kerala' ? 'selected' : ''}>Kerala, India</option>
              <option value="Rajasthan" ${state.plannerData.destination === 'Rajasthan' ? 'selected' : ''}>Rajasthan, India</option>
              <option value="Japan" ${state.plannerData.destination === 'Japan' ? 'selected' : ''}>Japan</option>
              <option value="Thailand" ${state.plannerData.destination === 'Thailand' ? 'selected' : ''}>Thailand</option>
              <option value="Bali" ${state.plannerData.destination === 'Bali' ? 'selected' : ''}>Bali</option>
            </select>
          </div>
          <div class="form-group">
            <label>Travel Dates</label>
            <input type="text" id="p-dates" class="form-control" placeholder="e.g. October 2026 or Fall" required value="${state.plannerData.dates || ''}">
          </div>
          <div class="form-group full-width">
            <label>Travel Focus / Main Interest</label>
            <div class="radio-cards-grid">
              <div class="radio-card ${state.plannerData.interest === 'Wellness & Spa' ? 'selected' : ''}" data-value="Wellness & Spa">
                <h4>🧘 Wellness & Spa</h4>
                <p>Spas, Ayurveda & Yoga</p>
              </div>
              <div class="radio-card ${state.plannerData.interest === 'Cultural Immersion' ? 'selected' : '' || !state.plannerData.interest ? 'selected' : ''}" data-value="Cultural Immersion">
                <h4>🏛️ Culture & Heritage</h4>
                <p>Monasteries, Palaces & Arts</p>
              </div>
              <div class="radio-card ${state.plannerData.interest === 'Adventure & Landscapes' ? 'selected' : ''}" data-value="Adventure & Landscapes">
                <h4>🏔️ Mountains & Yachting</h4>
                <p>Sailing, Safaris & Hikes</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
    
    footerNode.innerHTML = `
      <div></div>
      <button class="btn btn-primary" id="planner-next-btn">Next Step ⟶</button>
    `;

    // Step 1 Events
    const radioCards = bodyNode.querySelectorAll('.radio-card');
    let selectedInterest = state.plannerData.interest || 'Cultural Immersion';
    
    radioCards.forEach(card => {
      card.addEventListener('click', () => {
        radioCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedInterest = card.getAttribute('data-value');
      });
    });

    document.getElementById('planner-next-btn').addEventListener('click', () => {
      const name = document.getElementById('p-name').value.trim();
      const email = document.getElementById('p-email').value.trim();
      const phone = document.getElementById('p-phone').value.trim();
      const country = document.getElementById('p-country').value.trim();
      const dest = document.getElementById('p-dest').value;
      const dates = document.getElementById('p-dates').value.trim();

      if (!name || !email || !phone || !country || !dates) {
        showNotification("Please fill in all standard contact fields first.", "⚠️");
        return;
      }

      state.plannerData = { name, email, phone, country, destination: dest, dates, interest: selectedInterest };
      state.plannerStep = 2;
      renderPlannerStep();
    });
  }
  else if (state.plannerStep === 2) {
    progressBar.style.width = '100%';
    bodyNode.innerHTML = `
      <div class="suggestion-loading">
        <div class="loading-spinner"></div>
        <h4>Curating Your Premium Itineraries...</h4>
        <p>Our expert database is mapping paths around ${state.plannerData.interest} for you.</p>
      </div>
    `;
    footerNode.innerHTML = ``;

    // Simulate luxury API fetch
    setTimeout(() => {
      const curations = suggestedItineraries[state.plannerData.interest] || [];
      
      bodyNode.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
          <h4 style="font-size: 1.8rem; color: var(--color-primary);">Suggested Custom Travel Schemes</h4>
          <p>Hi ${state.plannerData.name}, based on your passion for <strong>${state.plannerData.interest}</strong>, we have prepared 3 exclusive private luxury paths:</p>
        </div>
        <div class="suggestions-grid">
          ${curations.map((c, i) => `
            <div class="suggestion-card fade-in">
              <span class="suggest-duration">${c.duration} • Option ${i+1}</span>
              <h4>${c.title}</h4>
              <p>${c.desc}</p>
              <ul class="suggest-highlights">
                ${c.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
              <button class="btn btn-accent get-quote-btn" style="width: 100%; margin-top: 15px;" data-title="${c.title}">Get a Quote</button>
            </div>
          `).join('')}
        </div>
      `;

      footerNode.innerHTML = `
        <button class="btn btn-outline" id="planner-back-btn">⟵ Back to Details</button>
        <div></div>
      `;

      // Back Button click
      document.getElementById('planner-back-btn').addEventListener('click', () => {
        state.plannerStep = 1;
        renderPlannerStep();
      });

      // Get Quote Button Clicks
      bodyNode.querySelectorAll('.get-quote-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const tripTitle = e.target.getAttribute('data-title');
          showNotification(`Quote inquiry received for "${tripTitle}". Connecting with you shortly!`, "✦");
          
          // Reset Planner to step 1
          setTimeout(() => {
            initPlanner();
            document.getElementById('connect').scrollIntoView({behavior: 'smooth'});
          }, 2000);
        });
      });

    }, 1500);
  }
}

// --- Destinations Route Render ---
function renderDestinations() {
  appContent.innerHTML = `
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
          ${renderDestCards('world')}
        </div>
      </div>

      <div id="dest-india-wrapper">
        <h3 class="destination-group-title">India Tours</h3>
        <div class="destination-grid" id="india-grid-node">
          ${renderDestCards('india')}
        </div>
      </div>

      <div id="search-no-results" class="text-center" style="display: none; padding: 60px 0;">
        <span style="font-size: 3rem; color: var(--color-accent);">✦</span>
        <h4 style="font-size: 1.8rem; margin: 15px 0;">No Matching Destinations Found</h4>
        <p style="max-width: 500px; margin: 0 auto 30px;">We specialize in customizing journeys worldwide. Share your requested location and we will craft it for you.</p>
        <button class="btn btn-accent" onclick="window.location.hash='#contact-us'">Request Custom Location</button>
      </div>
    </section>
  `;

  // Search filter key events
  const searchInput = document.getElementById('dest-search-input');
  const worldGrid = document.getElementById('world-grid-node');
  const indiaGrid = document.getElementById('india-grid-node');
  const worldWrapper = document.getElementById('dest-world-wrapper');
  const indiaWrapper = document.getElementById('dest-india-wrapper');
  const noResultsNode = document.getElementById('search-no-results');

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
      worldWrapper.style.display = 'block';
      indiaWrapper.style.display = 'block';
      noResultsNode.style.display = 'none';
      worldGrid.innerHTML = renderDestCards('world');
      indiaGrid.innerHTML = renderDestCards('india');
      return;
    }

    const matchedWorld = destinations.filter(d => d.category === 'world' && (d.name.toLowerCase().includes(query) || d.subtitle.toLowerCase().includes(query)));
    const matchedIndia = destinations.filter(d => d.category === 'india' && (d.name.toLowerCase().includes(query) || d.subtitle.toLowerCase().includes(query)));

    // Re-render matching subsets
    if (matchedWorld.length > 0) {
      worldWrapper.style.display = 'block';
      worldGrid.innerHTML = matchedWorld.map(d => `
        <a href="#destination/${d.id}" class="destination-card fade-in">
          <div class="dest-card-image-wrap">
            <img src="${d.image}" class="dest-card-image" alt="${d.name}" loading="lazy">
            <div class="dest-card-gradient"></div>
            <div class="dest-card-content">
              <span class="dest-card-badge">${d.subtitle}</span>
              <h3 class="dest-card-title">${d.name}</h3>
              <p class="dest-card-desc">${d.description}</p>
              <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
          </div>
        </a>
      `).join('');
    } else {
      worldWrapper.style.display = 'none';
    }

    if (matchedIndia.length > 0) {
      indiaWrapper.style.display = 'block';
      indiaGrid.innerHTML = matchedIndia.map(d => `
        <a href="#destination/${d.id}" class="destination-card fade-in">
          <div class="dest-card-image-wrap">
            <img src="${d.image}" class="dest-card-image" alt="${d.name}" loading="lazy">
            <div class="dest-card-gradient"></div>
            <div class="dest-card-content">
              <span class="dest-card-badge">${d.subtitle}</span>
              <h3 class="dest-card-title">${d.name}</h3>
              <p class="dest-card-desc">${d.description}</p>
              <span class="dest-card-btn">Explore Journey <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
          </div>
        </a>
      `).join('');
    } else {
      indiaWrapper.style.display = 'none';
    }

    if (matchedWorld.length === 0 && matchedIndia.length === 0) {
      noResultsNode.style.display = 'block';
    } else {
      noResultsNode.style.display = 'none';
    }
  });
}

// --- Curated Tours Render ---
function renderCuratedTours() {
  appContent.innerHTML = `
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
        ${renderCuratedCards()}
      </div>
      <div class="curated-cta-section" style="margin-top: 80px;">
        <h3>Looking for Multi-Destination Journeys?</h3>
        <p>Combining cultural explorations of Bhutan with the peaceful backwaters of Kerala and premium stopovers in Singapore is our specialty. Speak with our Travel Concierge to map it perfectly.</p>
        <a href="#contact-us" class="btn btn-accent">Initiate Bespoke Consultations</a>
      </div>
    </section>
  `;
}

// --- Group Tours Render ---
function renderGroupTours() {
  appContent.innerHTML = `
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
        ${groupTours.map(g => `
          <div class="curated-card fade-in">
            <div class="curated-card-image-box" style="height: 230px;">
              <img src="${g.image}" class="curated-card-img" alt="${g.title}" loading="lazy">
              <span style="position: absolute; top: 15px; right: 15px; background-color: var(--color-primary); color: var(--color-accent); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 6px 12px; border-radius: 4px; box-shadow: var(--shadow-subtle);">${g.spotsLeft}</span>
            </div>
            <div class="curated-card-body">
              <span class="slide-subtitle" style="font-size: 0.75rem; color: var(--color-accent); font-weight: 600; display: block; margin-bottom: 0.3rem;">${g.destination} • ${g.dates}</span>
              <h4 style="font-size: 1.5rem; line-height: 1.25; margin-bottom: 0.8rem;">${g.title}</h4>
              <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${g.description}</p>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--color-bg-light); padding-top: 20px; margin-top: auto;">
                <div>
                  <span style="font-size: 0.75rem; text-transform: uppercase; display: block; color: var(--color-secondary);">Pricing From</span>
                  <strong style="color: var(--color-primary); font-size: 1.1rem;">${g.price}</strong>
                </div>
                <button class="btn btn-accent" style="padding: 10px 20px; font-size: 0.75rem;" onclick="window.location.hash='#contact-us'">Reserve Seat</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// --- Blogs Render ---
function renderBlogs() {
  appContent.innerHTML = `
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
        ${renderBlogCards()}
      </div>
    </section>
  `;
}

// --- About Us Render ---
function renderAboutUs() {
  appContent.innerHTML = `
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
  `;
}

// --- Contact Us Render ---
function renderContactUs() {
  appContent.innerHTML = `
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
                  ${destinations.map(d => `<option value="${d.name}">${d.name}</option>`).join('')}
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
  `;

  document.getElementById('contact-page-inquiry')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification("Custom consultation inquiry received! A specialist will contact you shortly.", "✦");
    e.target.reset();
  });
}

// --- Destination Detail View ---
function renderDestinationDetail(destId) {
  const dest = destinations.find(d => d.id === destId);
  if (!dest) {
    window.location.hash = '';
    return;
  }

  appContent.innerHTML = `
    <section class="inner-hero">
      <img src="${dest.image}" class="inner-hero-img" alt="${dest.name}">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content">
        <a href="#destinations" style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to Destinations
        </a>
        <span class="section-subtitle" style="color: var(--color-accent)">${dest.subtitle}</span>
        <h1 style="color: var(--color-white)">${dest.name} Journey</h1>
        <p style="color: rgba(255, 255, 255, 0.7); max-width: 600px;">Duration: ${dest.duration} • Customized Private Departures</p>
      </div>
    </section>

    <section class="section-padding container">
      <div class="dest-detail-grid">
        <div>
          <span class="section-subtitle">Detailed Experience</span>
          <h2>The Journey Highlights</h2>
          <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 30px;">${dest.description}</p>
          
          <div class="welcome-features" style="grid-template-columns: 1fr 1fr; margin-bottom: 50px;">
            ${dest.highlights ? dest.highlights.map(h => `
              <div class="welcome-feature-card">
                <div class="feature-icon-box">✦</div>
                <div>
                  <p style="color: var(--color-primary); font-weight: 500; font-size: 1rem;">${h}</p>
                </div>
              </div>
            `).join('') : ''}
          </div>

          <hr style="border: 0; height: 1px; background-color: var(--color-bg-light); margin-bottom: 50px;">

          <h2 style="margin-bottom: 30px;">Refined Itinerary Path</h2>
          <p>Every TML itinerary is custom-built around your arrival flights and personal focus. Here is a curated outline of what we recommend for a standard ${dest.duration} stay:</p>
          
          <div class="itinerary-timeline">
            ${dest.itinerary ? dest.itinerary.map(item => `
              <div class="itinerary-node">
                <span class="node-day">${item.day}</span>
                <h4 class="node-title">${item.title}</h4>
                <p>${item.desc}</p>
              </div>
            `).join('') : ''}
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
  `;

  document.getElementById('dest-sidebar-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification(`Bespoke inquiry for "${dest.name}" received! Connecting with you shortly.`, "✦");
    e.target.reset();
  });
}

// --- Blog Detail View ---
function renderBlogDetail(blogId) {
  const blogObj = blogs.find(b => b.id === blogId);
  if (!blogObj) {
    window.location.hash = '#blogs';
    return;
  }

  appContent.innerHTML = `
    <section class="inner-hero" style="height: 380px;">
      <img src="${blogObj.image}" class="inner-hero-img" alt="${blogObj.title}">
      <div class="inner-hero-overlay"></div>
      <div class="inner-hero-content">
        <a href="#blogs" style="font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Back to Journal
        </a>
        <h1 style="color: var(--color-white); font-size: 3rem;">${blogObj.title}</h1>
      </div>
    </section>

    <section class="section-padding container">
      <div class="blog-detail-container">
        <div class="blog-detail-meta">
          <span>Published: <strong>${blogObj.date}</strong></span>
          <span>•</span>
          <span>Written By: <strong>${blogObj.author}</strong></span>
        </div>
        
        <div class="blog-detail-body">
          <p style="font-size: 1.3rem; font-family: var(--font-serif); font-style: italic; color: var(--color-primary); line-height: 1.7; border-left: 3px solid var(--color-accent); padding-left: 20px; margin-bottom: 40px;">
            ${blogObj.summary}
          </p>
          
          ${blogObj.content.split('\n\n').map(pStr => `<p>${pStr.trim()}</p>`).join('')}
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
  `;
}

// --- App Shell & Nav Control Init ---
function initAppShell() {
  const header = document.querySelector('.sticky-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const searchInput = document.querySelector('.search-input');

  // Sticky navbar shadow scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Global Header Search box redirect
  searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value.trim();
      if (val) {
        window.location.hash = '#destinations';
        // Give destinations view a brief moment to render, then search
        setTimeout(() => {
          const destSearch = document.getElementById('dest-search-input');
          if (destSearch) {
            destSearch.value = val;
            destSearch.dispatchEvent(new Event('input'));
          }
        }, 100);
        e.target.value = '';
      }
    }
  });
}

// --- Router Boot Setup ---
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  initAppShell();
  router();
});
