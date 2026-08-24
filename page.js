document.addEventListener("DOMContentLoaded", () => {
  /*
    =========================================================
    SUNDAY SERVICES
    WEBSITE -> DISCORD QUOTE SYSTEM
    =========================================================

    This website sends quote requests directly to a Discord
    webhook.

    No Heroku.
    No backend.
    No Discord bot.
    =========================================================
  */

  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1541490795905941584/n23R5Iojb8CdIWpw_0hr5RWuyRdeQKUkjOh5gI2NqBDBvyKQqe2ZrXuYEgb37vddfMI5";

  /*
    =========================================================
    YEAR
    =========================================================
  */

  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /*
    =========================================================
    MOBILE MENU
    =========================================================
  */

  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMobileMenu = () => {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");

    mobileMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    if (burgerBtn) {
      burgerBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  };

  if (burgerBtn && mobileMenu) {

    burgerBtn.addEventListener(
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

        burgerBtn.setAttribute(
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
          burgerBtn.contains(
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
    =========================================================
    SCROLL REVEAL
    =========================================================
  */

  const revealEls =
    document.querySelectorAll(
      "[data-animate]"
    );

  if (
    revealEls.length &&
    "IntersectionObserver" in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "in-view"
                );

                observer.unobserve(
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

    revealEls.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

  } else {

    revealEls.forEach(
      (element) => {
        element.classList.add(
          "in-view"
        );
      }
    );
  }

  /*
    =========================================================
    CLEAN TEXT
    =========================================================
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
      .slice(0, maxLength);
  }

  function discordValue(value) {
    const cleaned =
      cleanText(value);

    return cleaned ||
      "Not provided";
  }

  /*
    =========================================================
    SEND QUOTE TO DISCORD
    =========================================================
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
      new FormData(form);

    /*
      Honeypot spam protection.

      Humans never see this field.
    */

    if (
      formData.get("website")
    ) {
      return;
    }

    /*
      Make sure the webhook has actually
      been added.
    */

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

    /*
      Gather customer information.
    */

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
        formData.get("vehicle"),
        200
      );

    const city =
      cleanText(
        formData.get("city"),
        200
      );

    const service =
      cleanText(
        formData.get("service"),
        200
      );

    const condition =
      cleanText(
        formData.get("condition"),
        200
      );

    const message =
      cleanText(
        formData.get("message"),
        1000
      );

    /*
      Extra safety check.

      These fields should already be
      required by the HTML.
    */

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

    /*
      California time for the Discord message.
    */

    const submittedTime =
      new Date().toLocaleString(
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

    /*
      =======================================================
      DISCORD EMBED

      This determines exactly what Julio sees
      inside Discord.
      =======================================================
    */

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
            new Date().toISOString()
        }
      ],

      /*
        Prevent customers from inserting
        @everyone or other Discord mentions.
      */

      allowed_mentions: {
        parse: []
      }
    };

    try {

      if (submitButton) {

        submitButton.disabled =
          true;

        submitButton.classList.add(
          "is-loading"
        );
      }

      showStatus(
        statusElement,
        "Sending your quote request...",
        "loading"
      );

      /*
        =====================================================
        DIRECT DISCORD REQUEST

        FormData + no-cors lets the static GitHub website
        send directly to the Discord webhook.
        =====================================================
      */

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

      /*
        Because this uses no-cors, the browser
        cannot read Discord's response.

        If the request itself was dispatched
        without throwing an error, show success.
      */

      showStatus(
        statusElement,
        "Quote request sent! Sunday Services will get back to you as soon as possible.",
        "success"
      );

      form.reset();

      /*
        Close Quick Quote popup after
        successful submission.
      */

      if (
        form.dataset.quoteForm ===
        "quick"
      ) {

        setTimeout(
          () => {
            closeQuoteModal();
          },
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

        submitButton.classList.remove(
          "is-loading"
        );
      }
    }
  }

  /*
    =========================================================
    STATUS MESSAGE
    =========================================================
  */

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
    =========================================================
    FULL CONTACT PAGE FORM
    =========================================================
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
    =========================================================
    QUICK QUOTE MODAL
    =========================================================
  */

  let quoteModal = null;

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

          <span class="badge">
            <i class="bx bx-message-detail"></i>
            Quick Quote
          </span>

          <h2 id="quickQuoteTitle">
            Tell Us About Your Vehicle
          </h2>

          <p class="muted">
            Send the basic details now.
            Sunday Services can follow up
            if more information is needed.
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
                autocomplete="name"
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
                autocomplete="tel"
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

            <label for="quickWebsite">
              Website
            </label>

            <input
              id="quickWebsite"
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
            Need the full form?
            Open the Contact page.
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

  /*
    =========================================================
    OPEN QUICK QUOTE
    =========================================================
  */

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

    setTimeout(
      () => {

        const firstInput =
          document.getElementById(
            "quickName"
          );

        if (firstInput) {
          firstInput.focus();
        }
      },
      100
    );
  }

  /*
    =========================================================
    CLOSE QUICK QUOTE
    =========================================================
  */

  function closeQuoteModal() {

    if (!quoteModal) {
      return;
    }

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

  /*
    =========================================================
    QUICK QUOTE BUTTONS
    =========================================================
  */

  document.addEventListener(
    "click",
    (event) => {

      const quoteButton =
        event.target.closest(
          ".js-open-quote"
        );

      if (!quoteButton) {
        return;
      }

      event.preventDefault();

      const service =
        quoteButton.dataset.service ||
        "";

      openQuoteModal(
        service
      );
    }
  );

  /*
    =========================================================
    FLOATING QUICK QUOTE BUTTON
    =========================================================

    Contact already has the full form,
    so don't show the floating button there.
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
    =========================================================
    ESC KEY
    =========================================================
  */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {
        closeQuoteModal();
      }
    }
  );
});