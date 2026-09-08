// EME X Agencia Digital — comportamiento del sitio
(function () {
  "use strict";

  // Año dinámico en el footer
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú móvil
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");

  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cierra el menú móvil al navegar a una sección
    var mobileLinks = document.querySelectorAll("[data-mobile-nav] a");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Formulario de contacto: valida y confirma en pantalla.
  // No hay backend propio: si se conecta un servicio de envío
  // (Formspree, Getform, un endpoint propio, etc.) sustituir
  // este manejador por el envío real hacia ese servicio.
  var form = document.querySelector("[data-contact-form]");
  var note = document.querySelector("[data-form-note]");

  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var nombre = form.querySelector('[name="nombre"]').value.trim();

      note.textContent =
        "Gracias, " + nombre.split(" ")[0] + ". Recibimos su solicitud y responderemos en un máximo de 48 horas hábiles.";

      form.reset();
    });
  }
})();
