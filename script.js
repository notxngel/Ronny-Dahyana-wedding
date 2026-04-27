/** 0. CONFIGURACIÓN: Fecha y Elementos Base **/

// Fecha de la boda: 11 de Julio de 2026
const weddingDate = new Date("2026-07-11T18:00:00");

const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  container: document.getElementById("countdown")
};

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownElements.days?.replaceChildren(document.createTextNode(String(days)));
    countdownElements.hours?.replaceChildren(document.createTextNode(String(hours)));
    countdownElements.minutes?.replaceChildren(document.createTextNode(String(minutes)));
    countdownElements.seconds?.replaceChildren(document.createTextNode(String(seconds)));
  } else {
    if (countdownElements.container) {
        countdownElements.container.innerHTML = `
        <div style="font-family: var(--font-serif); font-size: 1.6rem; letter-spacing: 0.1em; color: var(--color-accent); font-style: italic;">
            ${t("countdown_passed")}
        </div>
        `;
    }
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

/** 1. CARRUSEL: Lógica de navegación del álbum **/
(function initCarousel() {
  const track = document.getElementById("albumTrack");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  
  if (!track || !btnPrev || !btnNext) return;

  const getScrollAmount = () => {
    const polaroid = track.querySelector(".polaroid");
    if (!polaroid) return 0;
    return polaroid.offsetWidth + 40; 
  };

  btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });
})();

/** 2. ANIMACIONES: Intersection Observer **/
(function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".fade-in, .bounce-in").forEach(el => {
    observer.observe(el);
  });
})();

/** 2.1 FAQ: Lógica de acordeón **/
window.toggleFAQ = function(button) {
  const item = button.parentElement;
  const answer = item.querySelector(".faq__answer");
  const isOpen = item.classList.contains("active");

  document.querySelectorAll(".faq__item").forEach((otherItem) => {
    if (otherItem !== item) {
      otherItem.classList.remove("active");
      otherItem.querySelector(".faq__question").setAttribute("aria-expanded", "false");
      otherItem.querySelector(".faq__answer").style.maxHeight = null;
    }
  });

  if (isOpen) {
    item.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
    answer.style.maxHeight = null;
  } else {
    item.classList.add("active");
    button.setAttribute("aria-expanded", "true");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
};

/** 3. NAVBAR: Lógica de visibilidad y menú móvil **/
(function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  const heroSection = document.getElementById("home");
  const links = document.querySelectorAll(".navbar__link");

  if (!navbar) return;

  if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("is-open");
        const isOpen = navbar.classList.contains("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target)) {
            navbar.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
  }

  if (heroSection) {
    let isTicking = false;
    window.addEventListener("scroll", () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroBottom = heroSection.offsetHeight - 80;
          
          if (scrollY >= heroBottom) {
            navbar.classList.add("is-visible");
          } else if (scrollY < 100) {
            navbar.classList.remove("is-visible");
            navbar.classList.remove("is-open");
          }
          isTicking = false;
        });
        isTicking = true;
      }
    });
  }
})();

/** 4. MODAL & RSVP LOGIC **/
window.openRSVP = function() {
  const modal = document.getElementById("rsvpModal");
  if (modal) {
    if (localStorage.getItem('rsvpStatus') === 'sent') {
        mostrarExito();
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeRSVP = function(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal__close')) return;
  const modal = document.getElementById("rsvpModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

/** 5. FORM: Dynamic Inputs Based on ?c= **/
(function generateDynamicInputs() {
  const container = document.getElementById("guestNamesContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let cupos = parseInt(urlParams.get("c")) || 1;
  cupos = Math.min(Math.max(cupos, 1), CONFIG.maxCupos);

  container.innerHTML = "";

  for (let i = 1; i <= cupos; i++) {
    const isTitular = i === 1;
    const labelText = isTitular ? t("form_name") : `${t("form_companion")} ${i - 1}`;
    const placeholder = isTitular ? t("form_name_placeholder") : t("form_companion_placeholder");
    const requiredAttr = isTitular ? "required" : "";

    const formGroup = document.createElement("div");
    formGroup.className = "form__group";
    formGroup.innerHTML = `
      <label class="form__label" for="guest${i}">${labelText}</label>
      <input type="text" class="form__input" id="guest${i}" name="guest${i}" placeholder="${placeholder}" ${requiredAttr}>
      <span class="form__error" id="error-guest${i}" style="color: #D9534F; font-size: 0.8rem; display: none; margin-top: 0.5rem;"></span>
    `;
    container.appendChild(formGroup);
  }
})();

/** 6. FORM: Validation and Submission **/
const rsvpForm = document.getElementById("rsvpForm");
let _lastSubmit = 0;

function setInvalid(input, errorMsg) {
  input.classList.add("is-invalid");
  const errorEl = document.getElementById(`error-${input.id}`);
  if (errorEl) {
    errorEl.textContent = errorMsg;
    errorEl.style.display = "block";
  }
}

function clearValidation() {
  const inputs = rsvpForm.querySelectorAll(".is-invalid");
  inputs.forEach(input => input.classList.remove("is-invalid"));
  const errors = rsvpForm.querySelectorAll(".form__error");
  errors.forEach(error => {
    error.textContent = "";
    error.style.display = "none";
  });
}

function handleValidation() {
  clearValidation();
  let isValid = true;
  let firstInvalidInput = null;

  const requiredInputs = rsvpForm.querySelectorAll("input[required]");
  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      const msg = input.id === "phone" ? t("val_phone") : t("val_name");
      setInvalid(input, msg);
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = input;
    }
  });

  if (!isValid) {
    firstInvalidInput.focus();
  }
  return isValid;
}

function toggleSubmitState(isSubmitting) {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;
  
  if (isSubmitting) {
    submitBtn.dataset.originalText = submitBtn.textContent;
    submitBtn.innerHTML = 'Enviando...';
    submitBtn.disabled = true;
  } else {
    submitBtn.innerHTML = submitBtn.dataset.originalText || "Enviar Confirmación";
    submitBtn.disabled = false;
  }
}

function extractGuestData() {
  const nameInput = document.getElementById("guest1");
  const titular = nameInput ? nameInput.value.trim() : "";

  const inputs = Array.from(document.querySelectorAll('input[id^="guest"]'));
  const todosLosNombres = inputs
    .map((input) => input.value.trim())
    .filter((val) => val !== "");

  const acompanantes = todosLosNombres.filter((val) => val !== titular && val !== "");

  const formData = new FormData(rsvpForm);
  const mensajeUsuario = formData.get("message") || "";
  const telefono = formData.get("phone") || "";

  const data = {
    nombre: titular,
    title: titular,
    telefono: telefono,
    invitados: todosLosNombres.length,
    asistencia: formData.get("attendance"),
    token: CONFIG.securityToken,
    mensaje: acompanantes.length > 0
        ? `Acompañantes: ${acompanantes.join(", ")}${mensajeUsuario ? "\n\nMensaje: " + mensajeUsuario : ""}`
        : mensajeUsuario,
  };

  return data;
}

async function sendDataToMake(data) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CONFIG.fetchTimeoutMs);

  try {
    const response = await fetch(CONFIG.webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (response.ok) {
      localStorage.setItem('rsvpStatus', 'sent');
      _lastSubmit = Date.now();
      mostrarExito();
    } else {
      throw new Error(`Error del servidor: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al enviar:", error);
    if (error.name === 'AbortError') {
      alert(t("error_timeout"));
    } else {
      alert(t("error_default"));
    }
  }
}

rsvpForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const honeypot = document.getElementById("website");
  if (honeypot && honeypot.value !== "") return;

  const now = Date.now();
  if (now - _lastSubmit < CONFIG.rateLimitMs) {
    alert(t("val_rate_limit"));
    return;
  }

  if (!handleValidation()) return;

  toggleSubmitState(true);
  
  const guestData = extractGuestData();
  await sendDataToMake(guestData);
  
  if (localStorage.getItem('rsvpStatus') !== 'sent') {
    toggleSubmitState(false);
  }
});

function mostrarExito() {
  const modalContent = document.querySelector(".modal__content");

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isMac = /Macintosh/.test(userAgent);
  const isApple = isIOS || isMac;

  let calendarButtonsHTML = '';
  if (isApple) {
      calendarButtonsHTML = `
            <div style="margin-top: 2rem;">
                <a href="#" class="btn btn--dark" style="width: 100%;">
                    ${t("success_apple_cal")}
                </a>
            </div>
      `;
  } else {
      calendarButtonsHTML = `
            <div style="margin-top: 2rem;">
                <a href="#" target="_blank" rel="noopener" class="btn btn--dark" style="width: 100%;">
                    ${t("success_google_cal")}
                </a>
            </div>
      `;
  }

  modalContent.innerHTML = `
        <div style="text-align: center;">
            <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 0.5rem;">
                ${t("success_title")}
            </h2>
            <p style="color: var(--color-accent); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.1em; margin-bottom: 1.5rem;">
                ${t("success_subtitle")}
            </p>
            <p style="color: var(--color-text-muted); line-height: 1.6;">
                ${t("success_text")}
            </p>
            
            ${calendarButtonsHTML}

            <button
                class="btn"
                style="margin-top: 1.5rem; color: var(--color-text-muted); text-decoration: underline;"
                onclick="window.closeRSVP(); setTimeout(() => location.reload(), 400);"
            >
                ${t("success_close")}
            </button>
        </div>
    `;
}
