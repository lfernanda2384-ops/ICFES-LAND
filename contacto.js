(() => {
  const WELCOME_MESSAGE = `🎉 ¡Bienvenido(a) a ICFES LAND! 🚀

Nos alegra darte la bienvenida a nuestra comunidad de estudiantes que han decidido prepararse para alcanzar un excelente puntaje en el examen ICFES.

✅ Tu inscripción ha sido realizada con éxito.

A partir de este momento, formarás parte de un proceso de preparación diseñado para ayudarte a fortalecer tus conocimientos, mejorar tus habilidades y acercarte a tus metas académicas.

📲 Te invitamos a estar muy pendiente de este medio, ya que en las próximas horas recibirás información importante, como:

• 📅 Horarios de clases.
• 👨‍🏫 Asignación de tu grupo.
• 📚 Material de estudio.
• 📝 Instrucciones para iniciar tu preparación.
• 🔔 Avisos y novedades de ICFES LAND.

Recuerda que este es el primer paso para construir el futuro que deseas.

¡Seamos excelentes! ⭐
Aprende y Avanza.

Equipo ICFES LAND`;

  const form = document.getElementById("enrollForm");
  const errorEl = document.getElementById("formError");
  const successPanel = document.getElementById("successPanel");
  const btnSubmit = document.getElementById("btnSubmit");

  if (!form) return;

  function cleanPhone(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function setError(msg) {
    if (!errorEl) return;
    errorEl.hidden = !msg;
    errorEl.textContent = msg || "";
  }

  function markInvalid(el, invalid) {
    el.classList.toggle("is-invalid", invalid);
  }

  function validate() {
    const nombre = form.nombre.value.trim();
    const edad = Number(form.edad.value);
    const docTipo = form.docTipo.value;
    const docNumero = form.docNumero.value.trim();
    const correo = form.correo.value.trim();
    const nacimiento = form.nacimiento.value;
    const programa = form.programa.value;
    const celular = cleanPhone(form.celular.value);

    [
      form.nombre, form.edad, form.docTipo, form.docNumero,
      form.correo, form.nacimiento, form.programa, form.celular
    ].forEach((el) => markInvalid(el, false));

    if (!nombre) {
      markInvalid(form.nombre, true);
      return "Escribe tu nombre completo.";
    }
    if (!edad || edad < 12 || edad > 25) {
      markInvalid(form.edad, true);
      return "Indica una edad válida (12 a 25).";
    }
    if (!docTipo) {
      markInvalid(form.docTipo, true);
      return "Selecciona TI o CC.";
    }
    if (!/^\d{5,12}$/.test(docNumero)) {
      markInvalid(form.docNumero, true);
      return "El número de documento debe tener entre 5 y 12 dígitos.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      markInvalid(form.correo, true);
      return "Ingresa un correo electrónico válido.";
    }
    if (!nacimiento) {
      markInvalid(form.nacimiento, true);
      return "Selecciona tu fecha de nacimiento.";
    }
    if (!programa) {
      markInvalid(form.programa, true);
      return "Selecciona el curso o programa de interés.";
    }
    if (!/^\d{10}$/.test(celular)) {
      markInvalid(form.celular, true);
      return "El celular debe tener 10 dígitos (ej. 3183874973).";
    }

    return null;
  }

  function buildWhatsAppUrl(phone10) {
    const text = encodeURIComponent(WELCOME_MESSAGE);
    return `https://wa.me/57${phone10}?text=${text}`;
  }

  function buildMailtoUrl(email) {
    const subject = encodeURIComponent("¡Bienvenido(a) a ICFES LAND!");
    const body = encodeURIComponent(WELCOME_MESSAGE);
    return `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
  }

  function buildSmsUrl(phone10) {
    const body = encodeURIComponent(WELCOME_MESSAGE);
    return `sms:+57${phone10}?&body=${body}`;
  }

  function sendWelcome(phone10, email) {
    const wa = buildWhatsAppUrl(phone10);
    const mail = buildMailtoUrl(email);
    const sms = buildSmsUrl(phone10);

    /* WhatsApp (celular) */
    window.open(wa, "_blank", "noopener,noreferrer");

    /* Correo — ligera demora para no perder el popup de WhatsApp */
    setTimeout(() => {
      window.location.href = mail;
    }, 700);

    /* En móvil también preparar SMS como respaldo del canal telefónico */
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => {
        window.open(sms, "_blank");
      }, 1400);
    }

    return { wa, mail, sms };
  }

  function showSuccess(data, links) {
    form.hidden = true;
    successPanel.hidden = false;

    document.getElementById("successIntro").textContent =
      `${data.nombre}, tu inscripción al programa “${data.programa}” quedó registrada. ` +
      `Te estamos contactando ahora mismo por celular y correo.`;

    document.getElementById("successPhone").textContent = `+57 ${data.celular}`;
    document.getElementById("successEmail").textContent = data.correo;
    document.getElementById("welcomePreview").textContent = WELCOME_MESSAGE;

    const retryWa = document.getElementById("retryWhatsApp");
    const retryMail = document.getElementById("retryEmail");
    if (retryWa) retryWa.href = links.wa;
    if (retryMail) retryMail.href = links.mail;

    successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setError("");

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const data = {
      nombre: form.nombre.value.trim(),
      edad: form.edad.value,
      docTipo: form.docTipo.value,
      docNumero: form.docNumero.value.trim(),
      correo: form.correo.value.trim(),
      nacimiento: form.nacimiento.value,
      programa: form.programa.value,
      celular: cleanPhone(form.celular.value)
    };

    try {
      const prev = JSON.parse(localStorage.getItem("icfesland_matriculas") || "[]");
      prev.push({ ...data, fechaRegistro: new Date().toISOString() });
      localStorage.setItem("icfesland_matriculas", JSON.stringify(prev));
    } catch (_) {
      /* ignore storage errors */
    }

    btnSubmit.disabled = true;
    btnSubmit.textContent = "Enviando...";

    const links = sendWelcome(data.celular, data.correo);
    showSuccess(data, links);

    btnSubmit.disabled = false;
    btnSubmit.textContent = "Inscribirme";
  });

  document.getElementById("btnNewEnroll")?.addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    successPanel.hidden = true;
    setError("");
    window.scrollTo({ top: form.offsetTop - 100, behavior: "smooth" });
  });
})();
