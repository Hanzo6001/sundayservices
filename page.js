document.addEventListener("DOMContentLoaded", () => {

  /*
    ==========================================================
    SUNDAY SERVICES

    IMPORTANT:
    Paste your existing Discord webhook below.
    ==========================================================
  */

  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1541490795905941584/n23R5Iojb8CdIWpw_0hr5RWuyRdeQKUkjOh5gI2NqBDBvyKQqe2ZrXuYEgb37vddfMI5";


  /*
    ==========================================================
    SERVICE INFORMATION

    These details power the large service popup.
    ==========================================================
  */

  const SERVICE_DETAILS = {

    "Exterior Maintenance Clean": {

      icon: "bx-droplet",

      eyebrow: "EXTERIOR MAINTENANCE",

      title: "Exterior Maintenance Clean",

      summary:
        "A professional exterior refresh for vehicles that are regularly maintained and mainly need a clean, finished appearance.",

      bestFor:
        "Vehicles that are already in reasonable exterior condition and need routine professional upkeep.",

      includes: [
        "Foam pre-treatment",
        "Two-bucket surface wash",
        "Wheel & tire care",
        "Conditioned tire finish",
        "Exterior glass cleaning",
        "Final inspection and finishing touches"
      ],

      notes:
        "If the exterior has heavier contamination, embedded particles, neglected trim, or needs deeper protection, the Exterior Deep Reset may be the better option."

    },


    "Interior Maintenance Clean": {

      icon: "bx-chair",

      eyebrow: "INTERIOR MAINTENANCE",

      title: "Interior Maintenance Clean",

      summary:
        "A professional interior refresh for vehicles that are regularly maintained and need vacuuming, cleaning, glass care, sanitation, and protection.",

      bestFor:
        "Daily-driven vehicles without major stains, excessive pet hair, or heavy interior neglect.",

      includes: [
        "Detailed vacuum",
        "Interior surface cleanse",
        "Dashboard and console cleaning",
        "Interior glass refinement",
        "Light sanitation",
        "Light surface protection",
        "Final interior inspection"
      ],

      notes:
        "For heavy stains, fabric contamination, spills, or a neglected interior, consider the Interior Deep Reset."

    },


    "Interior & Exterior Clean": {

      icon: "bx-car",

      eyebrow: "MAINTENANCE BUNDLE",

      title: "Interior & Exterior Clean",

      summary:
        "A convenient complete maintenance service combining the regular exterior and interior cleaning options.",

      bestFor:
        "Customers who want both the inside and outside professionally refreshed during one appointment.",

      includes: [
        "Complete exterior maintenance service",
        "Complete interior maintenance service",
        "Wheel & tire care",
        "Interior and exterior glass",
        "Door jamb detailing",
        "Final inspection",
        "Finishing touches"
      ],

      notes:
        "This is a maintenance-level bundle. Vehicles requiring heavy extraction, decontamination, or deeper correction may need a Deep Reset service."

    },


    "Exterior Deep Reset": {

      icon: "bx-shield",

      eyebrow: "EXTERIOR DEEP RESET",

      title: "Exterior Deep Reset",

      summary:
        "A deeper exterior treatment focused on removing buildup, improving the overall finish, conditioning exterior surfaces, and adding protection.",

      bestFor:
        "Vehicles with heavier exterior contamination, neglected surfaces, or customers wanting more than a regular maintenance wash.",

      includes: [
        "Foam pre-treatment",
        "Two-bucket surface wash",
        "Wheel & tire deep clean",
        "Iron removal treatment",
        "Exterior decontamination",
        "Trim conditioning",
        "Sealant protection",
        "Final inspection and finishing touches"
      ],

      notes:
        "Final pricing depends on vehicle size, exterior condition, contamination level, and the amount of work required."

    },


    "Interior Deep Reset": {

      icon: "bx-water",

      eyebrow: "INTERIOR DEEP RESET",

      title: "Interior Deep Reset",

      summary:
        "A deeper interior service designed for heavier buildup, fabric contamination, stains, and interiors that need considerably more than maintenance cleaning.",

      bestFor:
        "Vehicles with stains, spills, fabric buildup, neglected carpets, or interiors that need extraction and steam treatment.",

      includes: [
        "Detailed deep vacuum",
        "Deep fabric cleansing",
        "Full seat extraction where applicable",
        "Carpet extraction",
        "Targeted stain treatment",
        "Steam sanitation",
        "Interior surface cleaning",
        "Interior glass refinement",
        "Final inspection"
      ],

      notes:
        "Pet hair removal, unusually heavy contamination, and some specialty treatments may require additional labor."

    },


    "Ultimate Full Reset": {

      icon: "bx-star",

      eyebrow: "COMPLETE RESET",

      title: "Ultimate Full Reset",

      summary:
        "The complete Sunday Services treatment combining both the exterior and interior Deep Reset services into one comprehensive appointment.",

      bestFor:
        "Vehicles that need significant attention both inside and outside or customers wanting the most complete service available.",

      includes: [
        "Complete Exterior Deep Reset",
        "Complete Interior Deep Reset",
        "Full interior extraction & steam",
        "Exterior decontamination",
        "Trim conditioning",
        "3–6 month sealant protection",
        "Final inspection and finishing touches",
        "Complimentary engine bay detail"
      ],

      notes:
        "This is the highest level of service. Exact pricing depends heavily on the size and condition of the vehicle."

    },


    "Pet Hair Removal": {

      icon: "bx-plus-circle",

      eyebrow: "ADD-ON SERVICE",

      title: "Pet Hair Removal",

      summary:
        "Additional labor for removing embedded pet hair from carpets, seats, fabric surfaces, crevices, and other interior areas.",

      bestFor:
        "Vehicles with noticeable or excessive pet hair that cannot be removed through normal vacuuming alone.",

      includes: [
        "Targeted pet hair removal",
        "Fabric and carpet agitation",
        "Detailed vacuuming of affected areas",
        "Crevice and edge cleanup"
      ],

      notes:
        "Pricing depends on the amount of pet hair, how deeply it is embedded, and how much of the vehicle is affected."

    },


    "Heavy Condition Fee": {

      icon: "bx-error-circle",

      eyebrow: "CONDITION ADJUSTMENT",

      title: "Heavy Condition Fee",

      summary:
        "Additional labor may be required when a vehicle is significantly dirtier or more neglected than a standard service normally covers.",

      bestFor:
        "Vehicles with unusually heavy dirt, debris, spills, buildup, trash, staining, or contamination.",

      includes: [
        "Additional labor time",
        "Additional cleaning passes where required",
        "Extra product usage where necessary",
        "More intensive treatment of affected areas"
      ],

      notes:
        "This is not automatically charged. It depends entirely on the actual condition of the vehicle."

    },


    "Headliner Spot Treatment": {

      icon: "bx-brush",

      eyebrow: "ADD-ON SERVICE",

      title: "Headliner Spot Treatment",

      summary:
        "Targeted treatment for specific marks or stains on the vehicle’s headliner.",

      bestFor:
        "Localized spots that need attention without aggressively saturating the headliner material.",

      includes: [
        "Visual inspection of affected area",
        "Targeted low-moisture treatment",
        "Careful stain agitation where appropriate",
        "Final inspection"
      ],

      notes:
        "Headliner materials can be delicate. Some permanent staining or discoloration may not be fully removable."

    },


    "Engine Bay Detail": {

      icon: "bx-cog",

      eyebrow: "ADD-ON SERVICE",

      title: "Engine Bay Detail",

      summary:
        "Careful cleaning and finishing of accessible engine-bay surfaces for a cleaner, more presentable appearance.",

      bestFor:
        "Customers wanting the engine compartment to match the cleanliness of the rest of the vehicle.",

      includes: [
        "Surface-safe engine bay cleaning",
        "Accessible component wipe-down",
        "Removal of loose dirt and buildup",
        "Plastic and rubber surface finishing where appropriate",
        "Final inspection"
      ],

      notes:
        "This is a cosmetic detailing service and not mechanical engine maintenance."

    }

  };


  /*
    ==========================================================
    YEAR
    ==========================================================
  */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /*
    ==========================================================
    MOBILE MENU
    ==========================================================
  */

  const burgerButton =
    document.getElementById("burgerBtn");

  const mobileMenu =
    document.getElementById("mobileMenu");


  function closeMobileMenu() {

    if (!mobileMenu) return;


    mobileMenu.classList.remove(
      "open"
    );


    mobileMenu.setAttribute(
      "aria-hidden",
      "true"
    );


    if (burgerButton) {

      burgerButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }


  if (
    burgerButton &&
    mobileMenu
  ) {

    burgerButton.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileMenu.classList.toggle(
            "open"
          );


        mobileMenu.setAttribute(
          "aria-hidden",
          String(!isOpen)
        );


        burgerButton.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      }
    );


    document.addEventListener(
      "click",
      (event) => {

        const clickedInside =
          mobileMenu.contains(
            event.target
          ) ||
          burgerButton.contains(
            event.target
          );


        if (!clickedInside) {

          closeMobileMenu();

        }

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      });

  }


  /*
    ==========================================================
    SCROLL REVEAL
    ==========================================================
  */

  const revealElements =
    document.querySelectorAll(
      "[data-animate]"
    );


  if (
    revealElements.length &&
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add("in-view");


                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "in-view"
        );

      }
    );

  }


  /*
    ==========================================================
    HERO CAROUSEL
    ==========================================================
  */

  const hero =
    document.getElementById("homeHero");

  const heroSlides =
    document.querySelectorAll(
      ".hero-slide"
    );

  const heroProgressBar =
    document.getElementById(
      "heroProgressBar"
    );

  const heroCurrentSlide =
    document.getElementById(
      "heroCurrentSlide"
    );

  const heroNextButton =
    document.getElementById(
      "heroNext"
    );

  const heroPreviousButton =
    document.getElementById(
      "heroPrevious"
    );


  let heroIndex = 0;
  let heroTimer = null;
  let heroProgressAnimation = null;

  const HERO_DURATION =
    5500;


  function formatSlideNumber(number) {

    return String(number)
      .padStart(2, "0");

  }


  function restartHeroProgress() {

    if (!heroProgressBar) return;


    if (heroProgressAnimation) {

      heroProgressAnimation.cancel();

    }


    heroProgressAnimation =
      heroProgressBar.animate(

        [
          {
            width: "0%"
          },

          {
            width: "100%"
          }
        ],

        {
          duration:
            HERO_DURATION,

          easing:
            "linear",

          fill:
            "forwards"
        }

      );

  }


  function showHeroSlide(
    newIndex
  ) {

    if (!heroSlides.length) return;


    heroIndex =
      (
        newIndex +
        heroSlides.length
      ) %
      heroSlides.length;


    heroSlides.forEach(
      (slide, index) => {

        slide.classList.toggle(
          "active",
          index === heroIndex
        );

      }
    );


    if (heroCurrentSlide) {

      heroCurrentSlide.textContent =
        formatSlideNumber(
          heroIndex + 1
        );

    }


    restartHeroProgress();

  }


  function startHeroTimer() {

    if (!heroSlides.length) return;


    clearInterval(
      heroTimer
    );


    heroTimer =
      setInterval(
        () => {

          showHeroSlide(
            heroIndex + 1
          );

        },
        HERO_DURATION
      );


    restartHeroProgress();

  }


  function nextHeroSlide() {

    showHeroSlide(
      heroIndex + 1
    );

    startHeroTimer();

  }


  function previousHeroSlide() {

    showHeroSlide(
      heroIndex - 1
    );

    startHeroTimer();

  }


  if (
    hero &&
    heroSlides.length
  ) {

    showHeroSlide(0);

    startHeroTimer();


    if (heroNextButton) {

      heroNextButton.addEventListener(
        "click",
        nextHeroSlide
      );

    }


    if (heroPreviousButton) {

      heroPreviousButton.addEventListener(
        "click",
        previousHeroSlide
      );

    }


    let touchStartX =
      0;


    hero.addEventListener(
      "touchstart",
      (event) => {

        touchStartX =
          event.changedTouches[0]
            .screenX;

      },
      {
        passive: true
      }
    );


    hero.addEventListener(
      "touchend",
      (event) => {

        const touchEndX =
          event.changedTouches[0]
            .screenX;


        const distance =
          touchEndX -
          touchStartX;


        if (
          Math.abs(distance) <
          50
        ) {

          return;

        }


        if (distance < 0) {

          nextHeroSlide();

        } else {

          previousHeroSlide();

        }

      },
      {
        passive: true
      }
    );

  }


  /*
    ==========================================================
    BEFORE AFTER
    ==========================================================
  */

  const comparisonRange =
    document.getElementById(
      "comparisonRange"
    );

  const beforeImageWrap =
    document.getElementById(
      "beforeImageWrap"
    );

  const beforeAfterDivider =
    document.getElementById(
      "beforeAfterDivider"
    );


function updateComparison(value) {

  const percentage =
    Number(value);

  if (beforeImageWrap) {

    beforeImageWrap.style.clipPath =
      `inset(0 ${100 - percentage}% 0 0)`;

  }

  if (beforeAfterDivider) {

    beforeAfterDivider.style.left =
      `${percentage}%`;

  }

}


  if (comparisonRange) {

    updateComparison(
      comparisonRange.value
    );


    comparisonRange.addEventListener(
      "input",
      () => {

        updateComparison(
          comparisonRange.value
        );

      }
    );

  }


  /*
    ==========================================================
    COUNTERS
    ==========================================================
  */

  const counters =
    document.querySelectorAll(
      ".counter"
    );


  function animateCounter(
    element
  ) {

    if (
      element.dataset.animated ===
      "true"
    ) {

      return;

    }


    element.dataset.animated =
      "true";


    const target =
      Number(
        element.dataset.target
      );


    const duration =
      1300;


    const startTime =
      performance.now();


    function frame(
      now
    ) {

      const progress =
        Math.min(
          (
            now -
            startTime
          ) /
          duration,
          1
        );


      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      element.textContent =
        Math.floor(
          target *
          eased
        );


      if (progress < 1) {

        requestAnimationFrame(
          frame
        );

      } else {

        element.textContent =
          target;

      }

    }


    requestAnimationFrame(
      frame
    );

  }


  if (
    counters.length &&
    "IntersectionObserver" in window
  ) {

    const counterObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                animateCounter(
                  entry.target
                );


                counterObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.5
        }
      );


    counters.forEach(
      (counter) => {

        counterObserver.observe(
          counter
        );

      }
    );

  }


  /*
    ==========================================================
    TYPEWRITER
    ==========================================================
  */

  const typedTextElement =
    document.getElementById(
      "typedText"
    );


  const typedWords = [
    "PAINT.",
    "INTERIOR.",
    "WHEELS.",
    "TRIM.",
    "VEHICLE."
  ];


  let typedWordIndex = 0;
  let typedCharacterIndex = 0;
  let deleting = false;


  function runTypewriter() {

    if (!typedTextElement) return;


    const word =
      typedWords[
        typedWordIndex
      ];


    if (!deleting) {

      typedCharacterIndex++;


      typedTextElement.textContent =
        word.slice(
          0,
          typedCharacterIndex
        );


      if (
        typedCharacterIndex >=
        word.length
      ) {

        deleting =
          true;


        setTimeout(
          runTypewriter,
          1300
        );


        return;

      }

    } else {

      typedCharacterIndex--;


      typedTextElement.textContent =
        word.slice(
          0,
          typedCharacterIndex
        );


      if (
        typedCharacterIndex <=
        0
      ) {

        deleting =
          false;


        typedWordIndex =
          (
            typedWordIndex +
            1
          ) %
          typedWords.length;

      }

    }


    setTimeout(
      runTypewriter,
      deleting
        ? 55
        : 90
    );

  }


  if (typedTextElement) {

    typedTextElement.textContent =
      "";


    setTimeout(
      runTypewriter,
      500
    );

  }


  /*
    ==========================================================
    SERVICE FILTERS
    ==========================================================
  */

  const serviceFilterButtons =
    document.querySelectorAll(
      ".service-filter"
    );

  const serviceFilterItems =
    document.querySelectorAll(
      ".service-filter-item"
    );


  serviceFilterButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const filter =
            button.dataset.filter;


          serviceFilterButtons.forEach(
            (item) => {

              item.classList.remove(
                "active"
              );

            }
          );


          button.classList.add(
            "active"
          );


          serviceFilterItems.forEach(
            (item) => {

              const category =
                item.dataset.category;


              const show =
                filter === "all" ||
                category === filter;


              item.classList.toggle(
                "service-hidden",
                !show
              );

            }
          );

        }
      );

    }
  );


  /*
    ==========================================================
    SERVICE DETAIL MODAL
    ==========================================================
  */

  let serviceModal =
    null;


  function createServiceModal() {

    if (serviceModal) {

      return;

    }


    serviceModal =
      document.createElement(
        "div"
      );


    serviceModal.className =
      "service-modal-overlay";


    serviceModal.id =
      "serviceDetailModal";


    serviceModal.setAttribute(
      "aria-hidden",
      "true"
    );


    serviceModal.innerHTML = `

      <div
        class="service-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="serviceModalTitle"
      >

        <button
          class="service-modal-close"
          id="serviceModalClose"
          type="button"
          aria-label="Close service details"
        >
          <i class="bx bx-x"></i>
        </button>


        <div class="service-modal-header">

          <div
            class="service-modal-icon"
            id="serviceModalIcon"
          >
            <i class="bx bx-car"></i>
          </div>


          <div>

            <span
              class="section-kicker"
              id="serviceModalEyebrow"
            ></span>

            <h2
              id="serviceModalTitle"
            ></h2>

          </div>

        </div>


        <p
          class="service-modal-summary"
          id="serviceModalSummary"
        ></p>


        <div class="service-modal-info-grid">

          <div class="service-modal-box">

            <span class="service-modal-box-label">
              BEST FOR
            </span>

            <p
              id="serviceModalBestFor"
            ></p>

          </div>


          <div class="service-modal-box">

            <span class="service-modal-box-label">
              GOOD TO KNOW
            </span>

            <p
              id="serviceModalNotes"
            ></p>

          </div>

        </div>


        <div class="service-modal-includes">

          <h3>
            <i class="bx bx-list-check"></i>
            What’s Included
          </h3>

          <ul
            id="serviceModalIncludes"
          ></ul>

        </div>


        <div class="service-modal-actions">

          <a
            class="btn btn-primary btn-large"
            id="serviceModalQuote"
            href="./contact.html"
          >
            <i class="bx bx-receipt"></i>
            Request Full Quote
          </a>

          <a
            class="btn btn-soft"
            href="./services.html"
          >
            <i class="bx bx-grid-alt"></i>
            All Services
          </a>

        </div>

      </div>

    `;


    document.body.appendChild(
      serviceModal
    );


    document
      .getElementById(
        "serviceModalClose"
      )
      .addEventListener(
        "click",
        closeServiceModal
      );


    serviceModal.addEventListener(
      "click",
      (event) => {

        if (
          event.target ===
          serviceModal
        ) {

          closeServiceModal();

        }

      }
    );

  }


  function openServiceModal(
    serviceName
  ) {

    const service =
      SERVICE_DETAILS[
        serviceName
      ];


    if (!service) {

      return;

    }


    createServiceModal();


    const modalIcon =
      document.getElementById(
        "serviceModalIcon"
      );


    modalIcon.innerHTML =
      `<i class="bx ${service.icon}"></i>`;


    document.getElementById(
      "serviceModalEyebrow"
    ).textContent =
      service.eyebrow;


    document.getElementById(
      "serviceModalTitle"
    ).textContent =
      service.title;


    document.getElementById(
      "serviceModalSummary"
    ).textContent =
      service.summary;


    document.getElementById(
      "serviceModalBestFor"
    ).textContent =
      service.bestFor;


    document.getElementById(
      "serviceModalNotes"
    ).textContent =
      service.notes;


    const includesList =
      document.getElementById(
        "serviceModalIncludes"
      );


    includesList.innerHTML =
      "";


    service.includes.forEach(
      (item) => {

        const listItem =
          document.createElement(
            "li"
          );


        listItem.innerHTML =
          `
            <i class="bx bx-check"></i>
            <span>${item}</span>
          `;


        includesList.appendChild(
          listItem
        );

      }
    );


    const quoteLink =
      document.getElementById(
        "serviceModalQuote"
      );


    quoteLink.href =
      `./contact.html?service=${encodeURIComponent(
        serviceName
      )}`;


    serviceModal.classList.add(
      "open"
    );


    serviceModal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "modal-open"
    );

  }


  function closeServiceModal() {

    if (!serviceModal) {

      return;

    }


    serviceModal.classList.remove(
      "open"
    );


    serviceModal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "modal-open"
    );

  }


  document.addEventListener(
    "click",
    (event) => {

      const serviceButton =
        event.target.closest(
          ".js-service-detail"
        );


      if (!serviceButton) {

        return;

      }


      event.preventDefault();


      openServiceModal(
        serviceButton.dataset.serviceDetail
      );

    }
  );


  /*
    ==========================================================
    CONTACT PAGE AUTO SERVICE SELECTION
    ==========================================================
  */

  const fullServiceSelect =
    document.getElementById(
      "fullService"
    );


  if (fullServiceSelect) {

    const urlParameters =
      new URLSearchParams(
        window.location.search
      );


    const selectedService =
      urlParameters.get(
        "service"
      );


    if (selectedService) {

      const matchingOption =
        Array.from(
          fullServiceSelect.options
        ).find(
          (option) =>
            option.value ===
            selectedService
        );


      if (matchingOption) {

        fullServiceSelect.value =
          selectedService;


        const banner =
          document.getElementById(
            "selectedServiceBanner"
          );


        const serviceNameElement =
          document.getElementById(
            "selectedServiceName"
          );


        if (
          banner &&
          serviceNameElement
        ) {

          serviceNameElement.textContent =
            selectedService;


          banner.hidden =
            false;

        }

      }

    }

  }


  /*
    ==========================================================
    QUOTE HELPERS
    ==========================================================
  */

  function cleanText(
    value,
    maxLength = 1000
  ) {

    if (!value) {

      return "";

    }


    return String(value)
      .trim()
      .slice(
        0,
        maxLength
      );

  }


  function discordValue(
    value
  ) {

    const cleaned =
      cleanText(value);


    return cleaned ||
      "Not provided";

  }


  function showStatus(
    element,
    message,
    type
  ) {

    if (!element) return;


    element.textContent =
      message;


    element.className =
      `form-status ${type}`;

  }


  /*
    ==========================================================
    DISCORD SUBMISSION
    ==========================================================
  */

  async function sendQuoteToDiscord(
    form,
    statusElement
  ) {

    if (!form) return;


    const submitButton =
      form.querySelector(
        "[type='submit']"
      );


    const formData =
      new FormData(
        form
      );


    if (
      formData.get(
        "website"
      )
    ) {

      return;

    }


    if (
      !DISCORD_WEBHOOK_URL ||
      DISCORD_WEBHOOK_URL.includes(
        "PASTE_YOUR"
      )
    ) {

      showStatus(
        statusElement,
        "Discord webhook has not been added yet.",
        "error"
      );


      return;

    }


    const source =
      form.dataset.quoteForm ||
      "website";


    const page =
      document.body.dataset.page ||
      "unknown";


    const name =
      cleanText(
        formData.get("name"),
        150
      );


    const phone =
      cleanText(
        formData.get("phone"),
        100
      );


    const email =
      cleanText(
        formData.get("email"),
        200
      );


    const preferredContact =
      cleanText(
        formData.get(
          "preferredContact"
        ),
        100
      );


    const vehicle =
      cleanText(
        formData.get(
          "vehicle"
        ),
        200
      );


    const city =
      cleanText(
        formData.get(
          "city"
        ),
        200
      );


    const service =
      cleanText(
        formData.get(
          "service"
        ),
        200
      );


    const condition =
      cleanText(
        formData.get(
          "condition"
        ),
        200
      );


    const message =
      cleanText(
        formData.get(
          "message"
        ),
        1000
      );


    if (
      !name ||
      !phone ||
      !vehicle ||
      !service
    ) {

      showStatus(
        statusElement,
        "Please complete all required fields.",
        "error"
      );


      return;

    }


    const submittedTime =
      new Date()
        .toLocaleString(
          "en-US",
          {

            timeZone:
              "America/Los_Angeles",

            dateStyle:
              "medium",

            timeStyle:
              "short"

          }
        );


    const discordPayload = {

      username:
        "Sunday Services Quotes",


      embeds: [

        {

          title:
            "🚗 New Sunday Services Quote",


          description:
            "A customer submitted a quote request through sundayservices.net.",


          color:
            13938487,


          fields: [

            {
              name:
                "👤 Customer",

              value:
                discordValue(name),

              inline:
                true
            },

            {
              name:
                "📱 Phone",

              value:
                discordValue(phone),

              inline:
                true
            },

            {
              name:
                "📧 Email",

              value:
                discordValue(email),

              inline:
                true
            },

            {
              name:
                "💬 Preferred Contact",

              value:
                discordValue(
                  preferredContact
                ),

              inline:
                true
            },

            {
              name:
                "🚘 Vehicle",

              value:
                discordValue(vehicle),

              inline:
                true
            },

            {
              name:
                "📍 Service Location",

              value:
                discordValue(city),

              inline:
                true
            },

            {
              name:
                "🧽 Service",

              value:
                discordValue(service),

              inline:
                false
            },

            {
              name:
                "⚠️ Vehicle Condition",

              value:
                discordValue(
                  condition
                ),

              inline:
                false
            },

            {
              name:
                "📝 Customer Notes",

              value:
                discordValue(message),

              inline:
                false
            },

            {
              name:
                "🌐 Submitted From",

              value:
                `${page} page • ${source} form`,

              inline:
                false
            }

          ],


          footer: {

            text:
              `Submitted ${submittedTime}`

          },


          timestamp:
            new Date()
              .toISOString()

        }

      ],


      allowed_mentions: {
        parse: []
      }

    };


    try {

      if (submitButton) {

        submitButton.disabled =
          true;

      }


      showStatus(
        statusElement,
        "Sending your quote request...",
        "loading"
      );


      const discordForm =
        new FormData();


      discordForm.append(
        "payload_json",
        JSON.stringify(
          discordPayload
        )
      );


      await fetch(
        DISCORD_WEBHOOK_URL,
        {

          method:
            "POST",

          mode:
            "no-cors",

          body:
            discordForm

        }
      );


      showStatus(
        statusElement,
        "Quote request sent! Sunday Services will get back to you as soon as possible.",
        "success"
      );


      form.reset();


      if (
        form.dataset.quoteForm ===
        "quick"
      ) {

        setTimeout(
          closeQuoteModal,
          1800
        );

      }

    } catch (error) {

      console.error(
        "Discord webhook error:",
        error
      );


      showStatus(
        statusElement,
        "Something went wrong. Please call or message Sunday Services directly.",
        "error"
      );

    } finally {

      if (submitButton) {

        submitButton.disabled =
          false;

      }

    }

  }


  /*
    ==========================================================
    FULL QUOTE FORM
    ==========================================================
  */

  const fullQuoteForm =
    document.getElementById(
      "fullQuoteForm"
    );


  const fullQuoteStatus =
    document.getElementById(
      "fullQuoteStatus"
    );


  if (fullQuoteForm) {

    fullQuoteForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        sendQuoteToDiscord(
          fullQuoteForm,
          fullQuoteStatus
        );

      }
    );

  }


  /*
    ==========================================================
    QUICK QUOTE MODAL
    ==========================================================
  */

  let quoteModal =
    null;


  function createQuoteModal() {

    if (quoteModal) {

      return;

    }


    quoteModal =
      document.createElement(
        "div"
      );


    quoteModal.className =
      "quote-modal-overlay";


    quoteModal.id =
      "quoteModal";


    quoteModal.setAttribute(
      "aria-hidden",
      "true"
    );


    quoteModal.innerHTML = `

      <div
        class="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quickQuoteTitle"
      >

        <button
          class="quote-modal-close"
          type="button"
          id="quoteModalClose"
          aria-label="Close quote form"
        >
          <i class="bx bx-x"></i>
        </button>


        <div class="quote-modal-head">

          <span class="section-kicker">
            QUICK QUOTE
          </span>

          <h2 id="quickQuoteTitle">
            Tell Us About Your Vehicle
          </h2>

          <p class="muted">
            Send the basic details now. Sunday Services can follow
            up if more information is needed.
          </p>

        </div>


        <form
          class="quote-form"
          id="quickQuoteForm"
          data-quote-form="quick"
        >


          <div class="form-row">


            <div class="field">

              <label for="quickName">
                Name *
              </label>

              <input
                id="quickName"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            <div class="field">

              <label for="quickPhone">
                Phone *
              </label>

              <input
                id="quickPhone"
                name="phone"
                type="tel"
                placeholder="(909) 555-1234"
                required
              />

            </div>

          </div>


          <div class="field">

            <label for="quickVehicle">
              Vehicle *
            </label>

            <input
              id="quickVehicle"
              name="vehicle"
              type="text"
              placeholder="2024 Toyota Camry"
              required
            />

          </div>


          <div class="field">

            <label for="quickService">
              Service *
            </label>

            <select
              id="quickService"
              name="service"
              required
            >

              <option value="">
                Select a service
              </option>

              <option value="Exterior Maintenance Clean">
                Exterior Maintenance Clean
              </option>

              <option value="Interior Maintenance Clean">
                Interior Maintenance Clean
              </option>

              <option value="Interior & Exterior Clean">
                Interior & Exterior Clean
              </option>

              <option value="Exterior Deep Reset">
                Exterior Deep Reset
              </option>

              <option value="Interior Deep Reset">
                Interior Deep Reset
              </option>

              <option value="Ultimate Full Reset">
                Ultimate Full Reset
              </option>

              <option value="Engine Bay Detail">
                Engine Bay Detail
              </option>

              <option value="Not Sure">
                Not Sure — Help Me Choose
              </option>

            </select>

          </div>


          <div class="field">

            <label for="quickMessage">
              Anything We Should Know?
            </label>

            <textarea
              id="quickMessage"
              name="message"
              placeholder="Pet hair, stains, vehicle condition, special requests, etc."
            ></textarea>

          </div>


          <div
            class="honeypot-field"
            aria-hidden="true"
          >

            <input
              name="website"
              type="text"
              tabindex="-1"
              autocomplete="off"
            />

          </div>


          <button
            class="btn-submit"
            type="submit"
          >

            <i class="bx bx-send"></i>
            Send Quick Quote

          </button>


          <div
            class="form-status"
            id="quickQuoteStatus"
            aria-live="polite"
          ></div>


          <a
            class="quote-full-link"
            href="./contact.html"
          >
            Need the full form? Open the Contact page.
          </a>

        </form>

      </div>

    `;


    document.body.appendChild(
      quoteModal
    );


    const closeButton =
      document.getElementById(
        "quoteModalClose"
      );


    const quickForm =
      document.getElementById(
        "quickQuoteForm"
      );


    const quickStatus =
      document.getElementById(
        "quickQuoteStatus"
      );


    closeButton.addEventListener(
      "click",
      closeQuoteModal
    );


    quoteModal.addEventListener(
      "click",
      (event) => {

        if (
          event.target ===
          quoteModal
        ) {

          closeQuoteModal();

        }

      }
    );


    quickForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        sendQuoteToDiscord(
          quickForm,
          quickStatus
        );

      }
    );

  }


  function openQuoteModal(
    preferredService = ""
  ) {

    createQuoteModal();


    const serviceSelect =
      document.getElementById(
        "quickService"
      );


    if (
      preferredService &&
      serviceSelect
    ) {

      serviceSelect.value =
        preferredService;

    }


    quoteModal.classList.add(
      "open"
    );


    quoteModal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "quote-modal-active"
    );

  }


  function closeQuoteModal() {

    if (!quoteModal) return;


    quoteModal.classList.remove(
      "open"
    );


    quoteModal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "quote-modal-active"
    );

  }


  document.addEventListener(
    "click",
    (event) => {

      const quoteButton =
        event.target.closest(
          ".js-open-quote"
        );


      if (!quoteButton) return;


      event.preventDefault();


      openQuoteModal(
        quoteButton.dataset.service ||
        ""
      );

    }
  );


  /*
    ==========================================================
    FLOATING QUICK QUOTE
    ==========================================================
  */

  if (
    document.body.dataset.page !==
    "contact"
  ) {

    const floatingQuoteButton =
      document.createElement(
        "button"
      );


    floatingQuoteButton.type =
      "button";


    floatingQuoteButton.className =
      "floating-quote-btn js-open-quote";


    floatingQuoteButton.setAttribute(
      "aria-label",
      "Open quick quote form"
    );


    floatingQuoteButton.innerHTML = `
      <i class="bx bx-message-detail"></i>
      <span>Quick Quote</span>
    `;


    document.body.appendChild(
      floatingQuoteButton
    );

  }


  /*
    ==========================================================
    ESCAPE KEY
    ==========================================================
  */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeQuoteModal();
        closeServiceModal();

      }

    }
  );

});