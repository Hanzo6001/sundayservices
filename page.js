// Sunday Services - interactions (hamburger, scroll reveal, gallery popup, quote email)

document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    if (burgerBtn) burgerBtn.setAttribute("aria-expanded", "false");
  };

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInside = mobileMenu.contains(target) || burgerBtn.contains(target);
      if (!clickedInside) closeMobileMenu();
    });

    // Close after clicking a link
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMobileMenu);
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll("[data-animate]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Active nav link on scroll
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["home", "about", "services", "gallery", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  const sectionIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((sec) => sectionIO.observe(sec));

  // Gallery popup
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupMedia = document.getElementById("popupMedia");
  const popupCaption = document.getElementById("popupCaption");

  const openPopup = (src, caption) => {
    if (!popup || !popupMedia) return;
    popupMedia.innerHTML = `<img src="${src}" alt="${caption || "Gallery image"}" />`;
    if (popupCaption) popupCaption.textContent = caption || "";
    popup.classList.add("open");
    popup.setAttribute("aria-hidden", "false");
    document.body.classList.add("popup-active");
  };

  const closePopup = () => {
    if (!popup) return;
    popup.classList.remove("open");
    popup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("popup-active");
    if (popupMedia) popupMedia.innerHTML = "";
  };

  document.querySelectorAll(".media-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      const src = tile.getAttribute("data-media");
      const cap = tile.getAttribute("data-caption");
      if (src) openPopup(src, cap);
    });
  });

  if (popupClose) popupClose.addEventListener("click", closePopup);
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });

  // Quote form -> mailto (static hosting friendly)
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // IMPORTANT: replace with Julio's real email
      const TO_EMAIL = "sundayservices@example.com";

      const name = document.getElementById("name")?.value?.trim() || "";
      const phone = document.getElementById("phone")?.value?.trim() || "";
      const vehicle = document.getElementById("vehicle")?.value?.trim() || "";
      const pkg = document.getElementById("package")?.value?.trim() || "";
      const message = document.getElementById("message")?.value?.trim() || "";

      const subject = `Quote Request - ${pkg || "Sunday Services"}`;
      const bodyLines = [
        "Sunday Services Quote Request",
        "----------------------------",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Vehicle: ${vehicle}`,
        `Package: ${pkg}`,
        "",
        "Details:",
        message || "(no message)",
        "",
        "Sent from sundayservices.net"
      ];

      const mailto = `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailto;
    });
  }
});