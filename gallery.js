const popup = document.getElementById("popup");
const popupMedia = document.getElementById("popupMedia");
const popupClose = document.getElementById("popupClose");
const popupPrev = document.getElementById("popupPrev");
const popupNext = document.getElementById("popupNext");

const items = Array.from(document.querySelectorAll(".gallery-grid .media-item"));

let currentIndex = -1;
let touchStartX = 0;
let touchEndX = 0;

function openPopup() {
  if (!popup) return;
  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-active");
}

function closePopup() {
  if (!popup || !popupMedia) return;
  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("popup-active");
  popupMedia.innerHTML = "";
  currentIndex = -1;
}

function renderAt(index) {
  if (!items.length || !popupMedia) return;

  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  currentIndex = index;
  popupMedia.innerHTML = "";

  const srcEl = items[currentIndex];
  const tag = srcEl.tagName.toLowerCase();

  if (tag === "img") {
    const img = document.createElement("img");
    img.src = srcEl.src;
    img.alt = srcEl.alt || "Gallery image";
    popupMedia.appendChild(img);
  } else if (tag === "video") {
    const video = document.createElement("video");
    video.src = srcEl.currentSrc || srcEl.src;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "metadata";
    popupMedia.appendChild(video);
  }

  openPopup();
}

function nextItem() {
  if (currentIndex === -1) return;
  renderAt(currentIndex + 1);
}

function prevItem() {
  if (currentIndex === -1) return;
  renderAt(currentIndex - 1);
}

document.querySelectorAll(".media-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    const el = tile.querySelector(".media-item");
    if (!el) return;
    const idx = items.indexOf(el);
    if (idx === -1) return;
    renderAt(idx);
  });
});

popupClose?.addEventListener("click", (e) => {
  e.stopPropagation();
  closePopup();
});

popupNext?.addEventListener("click", (e) => {
  e.stopPropagation();
  nextItem();
});

popupPrev?.addEventListener("click", (e) => {
  e.stopPropagation();
  prevItem();
});

popup?.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

document.addEventListener("keydown", (e) => {
  if (!popup || !popup.classList.contains("open")) return;

  if (e.key === "Escape") closePopup();
  if (e.key === "ArrowRight") nextItem();
  if (e.key === "ArrowLeft") prevItem();
});

popupMedia?.addEventListener("touchstart", (e) => {
  if (!popup || !popup.classList.contains("open")) return;
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

popupMedia?.addEventListener("touchend", (e) => {
  if (!popup || !popup.classList.contains("open")) return;
  touchEndX = e.changedTouches[0].screenX;

  const dx = touchEndX - touchStartX;
  if (Math.abs(dx) < 50) return;

  if (dx < 0) nextItem();
  else prevItem();
}, { passive: true });