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

    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInside = mobileMenu.contains(target) || burgerBtn.contains(target);
      if (!clickedInside) closeMobileMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMobileMenu);
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll("[data-animate]");
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  }

  // Optional quote form -> mailto
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const TO_EMAIL = "sundayservicesad@gmail.com";

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