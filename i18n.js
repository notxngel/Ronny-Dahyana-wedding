/** i18n — Soporte bilingüe (ES por defecto, EN con ?lang=en) **/

let LANG = (() => {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") === "en" ? "en" : "es";
})();

const I18N = {
  es: {
    /* ── Navbar ── */
    nav_home: "Inicio",
    nav_details: "Detalles",
    nav_rsvp: "Confirmar",

    /* ── Hero ── */
    hero_eyebrow: "¡NOS CASAMOS!",
    hero_date: "Sábado, 11 de Julio de 2026",
    hero_instruction: "Desliza para descubrir todos los detalles.",
    countdown_days: "Días",
    countdown_hours: "Horas",
    countdown_minutes: "Minutos",
    countdown_seconds: "Segundos",
    countdown_passed: "¡A partir de hoy, somos esposos!",

    /* ── Album ── */
    album_title: "Nuestra Historia",
    album_subtitle: "Los momentos que nos trajeron hasta aquí",
    caption_1: "La propuesta",
    caption_2: "El anillo",
    caption_3: "Nuestra gala",
    caption_4: "Momentos",
    caption_5: "Tú y yo",
    caption_6: "Nuestro amor",

    /* ── Details ── */
    details_title: "Detalles del Evento",
    details_subtitle: "Todo lo que necesitas saber",
    timeline_church: "Ceremonia",
    timeline_church_desc: "6:00 PM — Inicio puntual.",
    timeline_event: "Recepción",
    timeline_desc: "7:00 PM — Inicio puntual; los esperamos para celebrar juntos.",

    /* ── Dress Code ── */
    dress_title: "Código de Vestimenta",
    dress_subtitle: "Formal",
    dress_notice: "Colores no permitidos",
    dress_no_green: "Verde",
    dress_no_white: "Blanco",
    dress_note: "Agradecemos respetar estas indicaciones para mantener la armonía visual del evento.",

    /* ── Info Cards ── */
    gifts_title: "Regalos",
    gifts_desc: "Lluvia de sobres.",
    seats_title: "Cupos",
    seats_desc: "Agradecemos respetar los cupos asignados en su invitación.",

    /* ── FAQ ── */
    faq_q1: "¿Cuándo y dónde es la ceremonia?",
    faq_a1: "Sábado 11 de julio de 2026 a las 6:00 PM. Consulta la sección de ubicación para más detalles.",
    faq_q2: "¿A qué hora es la recepción?",
    faq_a2: "La recepción comienza a las 7:00 PM, justo después de la ceremonia.",
    faq_q3: "¿Cuál es el código de vestimenta?",
    faq_a3: "Formal. Por favor, no usar colores verde ni blanco.",
    faq_q4: "¿Tienen mesa de regalos?",
    faq_a4: "Lluvia de sobres. Tu presencia es el mejor regalo.",
    faq_q5: "¿Cuántos cupos tengo asignados?",
    faq_a5: "Consulta tu invitación personalizada. El número de cupos está indicado en el enlace que recibiste.",

    /* ── Locations ── */
    loc_title: "Ubicación",
    loc_subtitle: "Te esperamos en",
    loc_btn: "Abrir en Google Maps",

    /* ── RSVP ── */
    rsvp_title: "Confirmación",
    rsvp_subtitle: "Será un placer compartir este momento tan especial con ustedes",
    rsvp_card_subtitle: "Esperamos contar con tu presencia",
    rsvp_card_text: "¿Ya revisaste todos los detalles del evento? Asegúrate de leerlos antes de confirmarnos tu asistencia.",
    rsvp_deadline: "Fecha límite: 15 de Junio de 2026",
    rsvp_open_btn: "Confirmar Asistencia",

    /* ── Modal Form ── */
    modal_title: "Confirmación",
    modal_subtitle: "Será un placer contar contigo",
    modal_deadline: "Por favor confirma antes del <strong>15 de Junio de 2026</strong>",
    form_name: "Tu nombre completo",
    form_companion: "Acompañante",
    form_name_placeholder: "Ej: María García",
    form_companion_placeholder: "Nombre completo",
    form_attendance: "¿Asistirás?",
    form_yes: "¡Sí, ahí estaré!",
    form_no: "Lo siento, no podré ir",
    form_phone: "Teléfono Móvil (WhatsApp)",
    form_phone_placeholder: "Ej. +1 809 123 4567",
    form_message: "Mensaje para los novios (Opcional)",
    form_message_placeholder: "Déjanos tus mejores deseos...",
    form_submit: "Enviar Confirmación",

    /* ── Validation ── */
    val_name: "Por favor, ingresa tu nombre.",
    val_phone: "Por favor, ingresa tu teléfono.",
    val_rate_limit: "Por favor espera unos segundos antes de intentar de nuevo.",

    /* ── Success ── */
    success_title: "¡Gracias!",
    success_subtitle: "Tu confirmación fue recibida",
    success_text: "Nos alegra mucho contar contigo en este día tan especial. ¡Nos vemos el 11 de julio!",
    success_apple_cal: "Añadir a Apple Calendar",
    success_google_cal: "Añadir a Google Calendar",
    success_close: "Cerrar",
    success_test: "(Pruebas: Enviar otra respuesta)",

    /* ── Error ── */
    error_default: "Hubo un error. Intenta de nuevo.",
    error_timeout: "Tiempo agotado. Intenta de nuevo.",

    /* ── Songs ── */
    songs_title: "Ponle Ritmo a la Fiesta",
    songs_subtitle: "¿Qué canciones no pueden faltar?",
    songs_song_label: "Nombre de la canción",
    songs_artist_label: "Artista (Opcional)",
    songs_song_placeholder: "Ej: Vivir Mi Vida",
    songs_artist_placeholder: "Ej: Marc Anthony",

    /* ── Footer ── */
    footer_eyebrow: "Con amor y gratitud",
    footer_made: "Hecho con amor para nuestros invitados",
    footer_credits: "Desarrollado por AM dev Studio"
  },

  en: {
    /* ── Navbar ── */
    nav_home: "Home",
    nav_details: "Details",
    nav_rsvp: "RSVP",

    /* ── Hero ── */
    hero_eyebrow: "WE'RE GETTING MARRIED!",
    hero_date: "Saturday, July 11th, 2026",
    hero_instruction: "Scroll down for event details.",
    countdown_days: "Days",
    countdown_hours: "Hours",
    countdown_minutes: "Minutes",
    countdown_seconds: "Seconds",
    countdown_passed: "As of today, we are married!",

    /* ── Album ── */
    album_title: "Our Story",
    album_subtitle: "The moments that brought us here",
    caption_1: "The proposal",
    caption_2: "The ring",
    caption_3: "Our gala",
    caption_4: "Moments",
    caption_5: "You and me",
    caption_6: "Our love",

    /* ── Details ── */
    details_title: "Event Details",
    details_subtitle: "Everything you need to know",
    timeline_church: "Ceremony",
    timeline_church_desc: "6:00 PM — Starts promptly.",
    timeline_event: "Reception",
    timeline_desc: "7:00 PM — Starts promptly; we look forward to celebrating with you.",

    /* ── Dress Code ── */
    dress_title: "Dress Code",
    dress_subtitle: "Formal",
    dress_notice: "Colors not allowed",
    dress_no_green: "Green",
    dress_no_white: "White",
    dress_note: "We appreciate your cooperation in maintaining the visual harmony of the event.",

    /* ── Info Cards ── */
    gifts_title: "Gifts",
    gifts_desc: "Cash gifts are preferred.",
    seats_title: "Seats",
    seats_desc: "Please respect the number of seats assigned in your invitation.",

    /* ── FAQ ── */
    faq_q1: "When and where is the ceremony?",
    faq_a1: "Saturday, July 11th, 2026 at 6:00 PM. Check the location section for details.",
    faq_q2: "What time is the reception?",
    faq_a2: "The reception starts at 7:00 PM, right after the ceremony.",
    faq_q3: "What is the dress code?",
    faq_a3: "Formal. Please do not wear green or white.",
    faq_q4: "Do you have a gift registry?",
    faq_a4: "Cash gifts are preferred. Your presence is the best gift.",
    faq_q5: "How many seats are assigned to me?",
    faq_a5: "Check your personalized invitation. The number of seats is indicated in the link you received.",

    /* ── Locations ── */
    loc_title: "Location",
    loc_subtitle: "We are waiting for you at",
    loc_btn: "Open in Google Maps",

    /* ── RSVP ── */
    rsvp_title: "RSVP",
    rsvp_subtitle: "It will be a pleasure to share this special moment with you",
    rsvp_card_subtitle: "We hope to count on your presence",
    rsvp_card_text: "Have you reviewed all the event details? Make sure to read them before confirming your attendance.",
    rsvp_deadline: "Deadline: June 15th, 2026",
    rsvp_open_btn: "Confirm Attendance",

    /* ── Modal Form ── */
    modal_title: "Confirmation",
    modal_subtitle: "It will be a pleasure to have you",
    modal_deadline: "Please confirm before <strong>June 15th, 2026</strong>",
    form_name: "Your full name",
    form_companion: "Guest",
    form_name_placeholder: "e.g. Jane Doe",
    form_companion_placeholder: "Full name",
    form_attendance: "Will you attend?",
    form_yes: "Yes, I'll be there!",
    form_no: "Sorry, I can't make it",
    form_phone: "Mobile Phone (WhatsApp)",
    form_phone_placeholder: "e.g. +1 809 123 4567",
    form_message: "Message for the couple (Optional)",
    form_message_placeholder: "Send us your best wishes...",
    form_submit: "Send Confirmation",

    /* ── Validation ── */
    val_name: "Please enter your name.",
    val_phone: "Please enter your phone number.",
    val_rate_limit: "Please wait a few seconds before trying again.",

    /* ── Success ── */
    success_title: "Thank you!",
    success_subtitle: "Your RSVP has been received",
    success_text: "We are so happy to have you join us on this special day. See you on July 11th!",
    success_apple_cal: "Add to Apple Calendar",
    success_google_cal: "Add to Google Calendar",
    success_close: "Close",
    success_test: "(Testing: Send another response)",

    /* ── Error ── */
    error_default: "There was an error. Please try again.",
    error_timeout: "Request timed out. Please try again.",

    /* ── Songs ── */
    songs_title: "Set the Mood",
    songs_subtitle: "Which songs can't be missing?",
    songs_song_label: "Song name",
    songs_artist_label: "Artist (Optional)",
    songs_song_placeholder: "e.g. Vivir Mi Vida",
    songs_artist_placeholder: "e.g. Marc Anthony",

    /* ── Footer ── */
    footer_eyebrow: "With love and gratitude",
    footer_made: "Made with love for our guests",
    footer_credits: "Developed by AM dev Studio"
  }
};

/** Función auxiliar: obtener una traducción por clave **/
function t(key) {
  return I18N[LANG]?.[key] ?? I18N.es[key] ?? key;
}

/** Aplicar traducciones a todos los elementos con data-i18n **/
function applyTranslations() {
  document.documentElement.lang = LANG;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[LANG]?.[key] ?? I18N.es[key];
    if (value) {
      if (value.includes("<")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = I18N[LANG]?.[key] ?? I18N.es[key];
    if (value) el.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    const value = I18N[LANG]?.[key] ?? I18N.es[key];
    if (value) el.setAttribute("aria-label", value);
  });

  const label = document.getElementById("langLabel");
  if (label) {
    label.textContent = LANG === "es" ? "ENG" : "ESP";
  }
}

/** Toggle de idioma dinámico **/
function toggleLanguage() {
  LANG = LANG === "es" ? "en" : "es";
  applyTranslations();
}

// Ejecutar traducciones al cargar
applyTranslations();

// Conectar el botón de idioma
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }
});
