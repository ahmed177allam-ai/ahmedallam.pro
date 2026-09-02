// =====================================================================
// أيقونات كل قسم
// =====================================================================
const ICONS = {
  reels: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="13" y="6" width="22" height="36" rx="4"/><line x1="19" y1="36" x2="29" y2="36"/><circle cx="24" cy="13" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  estate: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22 24 9l16 13"/><path d="M12 19v19h24V19"/><rect x="20" y="26" width="8" height="12"/></svg>`,
  podcast: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="6" width="12" height="20" rx="6"/><path d="M12 22a12 12 0 0 0 24 0"/><line x1="24" y1="34" x2="24" y2="41"/><line x1="17" y1="41" x2="31" y2="41"/></svg>`,
  gaming: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 17h20a7 7 0 0 1 7 8l-1 8a4 4 0 0 1-7 2.6L29 31H19l-4 4.6A4 4 0 0 1 8 33l-1-8a7 7 0 0 1 7-8Z"/><line x1="17" y1="22" x2="17" y2="28"/><line x1="14" y1="25" x2="20" y2="25"/><circle cx="31" cy="23" r="1.3" fill="currentColor" stroke="none"/><circle cx="35" cy="27" r="1.3" fill="currentColor" stroke="none"/></svg>`,
  design: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="22" height="22" rx="2"/><path d="M17 31v6h22V15h-6"/></svg>`,
  product: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6 41 15v18L24 42 7 33V15Z"/><path d="M7 15l17 9 17-9"/><line x1="24" y1="24" x2="24" y2="42"/></svg>`,
  ads: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20v8a2 2 0 0 0 2 2h4l19 9V9L12 18H8a2 2 0 0 0-2 2Z"/><path d="M17 30v6a3 3 0 0 0 6 0v-4"/></svg>`,
  content: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="15" width="26" height="20" rx="4"/><circle cx="24" cy="25" r="6"/><path d="M18 15l2.5-4h7l2.5 4"/></svg>`,
};

const SOCIAL_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 4c.4 2.3 2.2 4 4.5 4.2"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="6" width="19" height="12" rx="4"/><path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none"/></svg>`,
  behance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="7" width="8" height="7" rx="1.5"/><path d="M2.5 14h8"/><circle cx="17" cy="12.5" r="4"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h4"/><circle cx="12" cy="12" r="9.5"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7.5" y1="10.5" x2="7.5" y2="16.5"/><circle cx="7.5" cy="7.3" r="1"/><path d="M11.5 16.5V11m0 0c0-1.4 1-2 2.2-2 1.4 0 1.8 1 1.8 2.4v4.6"/></svg>`,
};

const SOCIAL_LABELS = {
  instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube",
  behance: "Behance", facebook: "Facebook", linkedin: "LinkedIn",
};

// =====================================================================
// أدوات مساعدة
// =====================================================================
const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

let currentGalleryImages = [];
let currentGalleryIndex = 0;

// =====================================================================
// شبكة الأقسام (الصفحة الرئيسية)
// =====================================================================
function renderCategoryGrid() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  CATEGORIES.forEach((cat, i) => {
    const card = el("button", "cat-card");
    card.style.setProperty("--i", i);
    card.setAttribute("data-filter", cat.id);
    card.innerHTML = `
      <span class="cat-icon">${ICONS[cat.icon]}</span>
      <span class="cat-ar">${cat.ar}</span>
      <span class="cat-en en">${cat.en}</span>
    `;
    card.addEventListener("click", () => goToWork(cat.id));
    grid.appendChild(card);
  });
}

// =====================================================================
// فلاتر الجاليري
// =====================================================================
function renderFilters() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  const allBtn = el("button", "filter-btn is-active", "الكل");
  allBtn.setAttribute("data-filter", "all");
  bar.appendChild(allBtn);

  CATEGORIES.forEach((cat) => {
    const count = PORTFOLIO_ITEMS.filter((i) => i.category === cat.id).length;
    if (count === 0) return;
    const btn = el("button", "filter-btn", `${cat.ar} <span class="count">${count}</span>`);
    btn.setAttribute("data-filter", cat.id);
    bar.appendChild(btn);
  });

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderGallery(btn.getAttribute("data-filter"));
  });
}

// =====================================================================
// الجاليري
// =====================================================================
function coverMarkup(item, catInfo) {
  if (item.type === "gallery" && item.images && item.images.length) {
    return `<img src="${item.images[0]}" alt="${item.title}" loading="lazy">`;
  }
  if (item.thumbnail) {
    return `<img src="${item.thumbnail}" alt="${item.title}" loading="lazy">`;
  }
  return `<span class="cover-fallback">${ICONS[catInfo ? catInfo.icon : "content"]}</span>`;
}

function renderGallery(filter = "all") {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;
  gallery.innerHTML = "";

  let items = PORTFOLIO_ITEMS.filter((it) => filter === "all" || it.category === filter);
  if (filter === "all") {
    items = [...items].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (items.length === 0) {
    gallery.appendChild(el("p", "gallery-empty", "لسه معملتش رفع أعمال في القسم ده. تقدر تضيفها من ملف js/portfolio-data.js"));
    return;
  }

  items.forEach((item, i) => {
    const catInfo = CATEGORIES.find((c) => c.id === item.category);
    const card = el("div", item.featured ? "work-card is-featured" : "work-card");
    card.style.setProperty("--i", i % 6);

    const isPlayable = item.type === "youtube" || item.type === "vimeo" || item.type === "video";
    const isGallery = item.type === "gallery";

    card.innerHTML = `
      <div class="work-cover">
        ${coverMarkup(item, catInfo)}
        ${isPlayable ? '<span class="play-badge">▶</span>' : ""}
        ${isGallery ? `<span class="gallery-badge">${item.images ? item.images.length : 0} صور</span>` : ""}
      </div>
      <div class="work-meta">
        <h3>${item.title}</h3>
        <span class="work-tag">${catInfo ? catInfo.ar : ""}</span>
      </div>
    `;

    card.addEventListener("click", () => openModal(item));
    gallery.appendChild(card);
  });
}

// =====================================================================
// المودال (معاينة الشغل)
// =====================================================================
function galleryFrame(src) {
  return `
    <div class="lightbox-frame">
      <img src="${src}" alt="">
      <button class="lightbox-nav prev" id="lbPrev" aria-label="السابق">‹</button>
      <button class="lightbox-nav next" id="lbNext" aria-label="التالي">›</button>
    </div>
  `;
}

function bindLightboxNav() {
  const prev = document.getElementById("lbPrev");
  const next = document.getElementById("lbNext");
  if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); stepGallery(-1); });
  if (next) next.addEventListener("click", (e) => { e.stopPropagation(); stepGallery(1); });
}

function stepGallery(dir) {
  if (!currentGalleryImages.length) return;
  currentGalleryIndex = (currentGalleryIndex + dir + currentGalleryImages.length) % currentGalleryImages.length;
  document.getElementById("modalBody").innerHTML = galleryFrame(currentGalleryImages[currentGalleryIndex]);
  bindLightboxNav();
}

function openModal(item) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");
  const caption = document.getElementById("modalCaption");
  body.innerHTML = "";
  currentGalleryImages = [];

  if (item.type === "youtube" && item.src) {
    body.innerHTML = `<iframe src="https://www.youtube.com/embed/${item.src}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  } else if (item.type === "vimeo" && item.src) {
    body.innerHTML = `<iframe src="https://player.vimeo.com/video/${item.src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  } else if (item.type === "video" && item.src) {
    body.innerHTML = `<video src="${item.src}" controls autoplay></video>`;
  } else if (item.type === "image" && item.src) {
    body.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
  } else if (item.type === "gallery" && item.images && item.images.length) {
    currentGalleryImages = item.images;
    currentGalleryIndex = 0;
    body.innerHTML = galleryFrame(currentGalleryImages[0]);
    bindLightboxNav();
  } else {
    body.innerHTML = `<div class="modal-placeholder">لسه معملتش رفع المعاينة دي — أضف اللينك في js/portfolio-data.js</div>`;
  }

  caption.textContent = item.title;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  document.getElementById("modalBody").innerHTML = "";
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  currentGalleryImages = [];
}

// =====================================================================
// التقييمات
// =====================================================================
function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  if (!track || typeof TESTIMONIALS === "undefined") return;
  TESTIMONIALS.forEach((t) => {
    const card = el("div", "testimonial-card");
    card.innerHTML = `
      <span class="quote-mark en">“</span>
      <p>${t.text}</p>
      <div class="testimonial-author">
        <strong>${t.name}</strong>
        <span>${t.role}</span>
      </div>
    `;
    track.appendChild(card);
  });
}

// =====================================================================
// قسم التواصل — يتبني من site-config.js
// =====================================================================
function renderContact() {
  if (typeof SITE_CONFIG === "undefined") return;

  const emailLink = document.getElementById("contactEmailLink");
  const emailText = document.getElementById("contactEmailText");
  if (SITE_CONFIG.email) {
    emailLink.href = `mailto:${SITE_CONFIG.email}`;
    emailText.textContent = SITE_CONFIG.email;
  }

  const waLink = document.getElementById("contactWhatsapp");
  if (SITE_CONFIG.whatsappNumber) {
    waLink.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  }

  const phoneText = document.getElementById("contactPhoneText");
  if (phoneText && SITE_CONFIG.phoneDisplay) phoneText.textContent = SITE_CONFIG.phoneDisplay;

  const locationText = document.getElementById("contactLocation");
  if (locationText && SITE_CONFIG.location) locationText.textContent = SITE_CONFIG.location;

  const responseText = document.getElementById("contactResponse");
  if (responseText && SITE_CONFIG.responseTime) responseText.textContent = SITE_CONFIG.responseTime;

  // أيقونات السوشيال ميديا (الفوتر + قسم التواصل)
  const socialTargets = document.querySelectorAll("[data-social-list]");
  socialTargets.forEach((wrap) => {
    wrap.innerHTML = "";
    Object.entries(SITE_CONFIG.social || {}).forEach(([key, url]) => {
      if (!url) return;
      const a = el("a", "social-link", SOCIAL_ICONS[key] || "");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", SOCIAL_LABELS[key] || key);
      wrap.appendChild(a);
    });
    if (!wrap.children.length) {
      wrap.parentElement.classList.add("is-empty");
    }
  });
}

// =====================================================================
// تنقّل عام
// =====================================================================
function goToWork(filterId) {
  const target = document.getElementById("work");
  target.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const btn = document.querySelector(`.filter-btn[data-filter="${filterId}"]`);
    if (btn) btn.click();
  }, 400);
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    toggle.classList.toggle("is-active");
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-active");
    });
  });
}

function initModalEvents() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("modal").classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") stepGallery(1);
    if (e.key === "ArrowRight") stepGallery(-1);
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryGrid();
  renderFilters();
  renderGallery("all");
  renderTestimonials();
  renderContact();
  initNav();
  initModalEvents();
  initYear();
  initHeaderScroll();
});
