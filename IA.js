(() => {
  const QUESTIONS = [
    {
      id: 1,
      subject: "Lectura Crítica",
      text: "Un editorial afirma: “La educación no es un gasto, es la inversión más rentable que puede hacer un país”. Según el texto, ¿cuál es la intención principal del autor?",
      options: {
        A: "Criticar el presupuesto destinado a infraestructura.",
        B: "Convencer al lector de priorizar la educación como inversión social.",
        C: "Explicar cómo se calcula la rentabilidad de una empresa.",
        D: "Narrar la historia de un sistema educativo extranjero."
      },
      correct: "B",
      errorTypes: {
        A: "Confundiste el tema central con un asunto secundario (infraestructura).",
        C: "Llevaste el mensaje a un contexto económico empresarial que el texto no desarrolla.",
        D: "Interpretaste el texto como narración histórica, cuando es argumentativo."
      },
      justification: "La frase presenta una tesis valorativa: educa a favor de ver la educación como inversión. La intención es persuasiva/argumentativa.",
      concepts: ["Intención del autor", "Texto argumentativo", "Tesis"],
      tips: "Identifica si el texto informa, narra o persuade. Las frases con valoración (“más rentable”) suelen indicar intención argumentativa."
    },
    {
      id: 2,
      subject: "Matemáticas",
      text: "Un estudiante resuelve 3/4 de un simulacro en 90 minutos. Si mantiene el mismo ritmo, ¿cuánto tiempo necesitará aproximadamente para completar el simulacro completo?",
      options: {
        A: "100 minutos",
        B: "110 minutos",
        C: "120 minutos",
        D: "135 minutos"
      },
      correct: "C",
      errorTypes: {
        A: "Sumaste tiempo de forma arbitraria sin usar proporción.",
        B: "Hiciste una estimación cercana, pero no aplicada a la razón correcta.",
        D: "Posiblemente calculaste 90 + 45 o confundiste fracciones."
      },
      justification: "Si 3/4 equivalen a 90 min, entonces 1 completo = 90 ÷ (3/4) = 90 × 4/3 = 120 minutos.",
      concepts: ["Proporcionalidad", "Fracciones", "Regla de tres"],
      tips: "Cuando te den una parte y su tiempo, divide el tiempo entre la fracción para hallar el total."
    },
    {
      id: 3,
      subject: "Ciencias Naturales",
      text: "En un experimento, una planta A recibe luz solar directa y una planta B permanece en penumbra. Tras dos semanas, A crece más. ¿Cuál es la variable independiente del experimento?",
      options: {
        A: "El crecimiento de las plantas.",
        B: "La cantidad de agua usada.",
        C: "La condición de iluminación.",
        D: "El tipo de maceta."
      },
      correct: "C",
      errorTypes: {
        A: "El crecimiento es la variable dependiente (lo que se mide), no la independiente.",
        B: "El agua no es el factor que el experimento está manipulando como contraste principal.",
        D: "La maceta no aparece como factor manipulado en el enunciado."
      },
      justification: "La variable independiente es la que el investigador cambia: aquí, la iluminación (luz vs penumbra).",
      concepts: ["Variable independiente", "Variable dependiente", "Método científico"],
      tips: "Pregúntate: ¿qué factor se está cambiando a propósito? Eso es lo independiente."
    },
    {
      id: 4,
      subject: "Sociales y Ciudadanas",
      text: "La Constitución Política de Colombia de 1991 reconoce a Colombia como un Estado social de derecho. Esto implica, principalmente, que:",
      options: {
        A: "Solo el presidente puede crear las leyes.",
        B: "El Estado debe garantizar derechos fundamentales y condiciones dignas de vida.",
        C: "Los ciudadanos no tienen deberes frente a la sociedad.",
        D: "La economía debe ser exclusivamente privada."
      },
      correct: "B",
      errorTypes: {
        A: "Confundes el Estado social de derecho con un sistema autoritario o monárquico.",
        C: "Olvidas que derechos y deberes coexisten en el marco constitucional.",
        D: "Mezclas el modelo económico con la definición constitucional del Estado."
      },
      justification: "El Estado social de derecho busca proteger derechos fundamentales y promover condiciones de vida dignas, no solo el orden formal.",
      concepts: ["Estado social de derecho", "Derechos fundamentales", "Constitución 1991"],
      tips: "Asocia “social de derecho” con garantía de derechos + dignidad, no solo con separación de poderes."
    },
    {
      id: 5,
      subject: "Inglés",
      text: "Read the sentence: “Although it was raining, the students decided to go to the library.” What is the function of “Although”?",
      options: {
        A: "To show addition of ideas.",
        B: "To express contrast.",
        C: "To indicate a sequence of events.",
        D: "To give an example."
      },
      correct: "B",
      errorTypes: {
        A: "“Although” no suma ideas como “and” o “also”; introduce contraste.",
        C: "No ordena eventos temporales; enfrenta dos situaciones.",
        D: "No introduce ejemplos (eso haría “for example”)."
      },
      justification: "“Although” introduce una idea contrastiva: llovía, pero aun así fueron a la biblioteca.",
      concepts: ["Connectors", "Contrast", "Although / even though"],
      tips: "Si ves “although/even though/but”, busca oposición entre dos ideas."
    },
    {
      id: 6,
      subject: "Matemáticas",
      text: "La media de cinco puntajes ICFES es 320. Si cuatro puntajes son 300, 310, 330 y 340, ¿cuál es el quinto puntaje?",
      options: {
        A: "300",
        B: "310",
        C: "320",
        D: "330"
      },
      correct: "C",
      errorTypes: {
        A: "Elegiste uno de los datos dados en lugar de calcular el faltante.",
        B: "Repetiste un valor conocido sin usar la fórmula de la media.",
        D: "Tomaste otro valor de la lista sin resolver la ecuación."
      },
      justification: "Media = suma/5 = 320 → suma total = 1600. Suma de los cuatro = 1280 → quinto = 1600 − 1280 = 320.",
      concepts: ["Media aritmética", "Suma de datos", "Despeje"],
      tips: "Media × cantidad = suma total. Resta lo conocido para hallar el dato faltante."
    },
    {
      id: 7,
      subject: "Lectura Crítica",
      text: "En un cuento, un personaje repite: “Mañana empiezo”. Al final nunca cambia. El recurso más claro que usa el narrador es:",
      options: {
        A: "Una descripción geográfica detallada.",
        B: "Una ironía sobre la procrastinación del personaje.",
        C: "Una definición científica del tiempo.",
        D: "Una lista de instrucciones técnicas."
      },
      correct: "B",
      errorTypes: {
        A: "No hay indicios de descripción de lugar como eje del sentido.",
        C: "El texto no busca definir el tiempo de forma científica.",
        D: "No se presenta un instructivo; hay repetición con sentido crítico."
      },
      justification: "La repetición de “mañana empiezo” sin cambio genera ironía: se promete acción y no ocurre.",
      concepts: ["Ironía", "Caracterización", "Sentido global"],
      tips: "Cuando hay contraste entre lo dicho y lo que pasa, suele haber ironía o crítica implícita."
    },
    {
      id: 8,
      subject: "Ciencias Naturales",
      text: "Durante la fotosíntesis, las plantas capturan energía lumínica para producir glucosa. ¿Cuál es un producto liberado en este proceso?",
      options: {
        A: "Dióxido de carbono (CO₂)",
        B: "Oxígeno (O₂)",
        C: "Nitrógeno atmosférico (N₂)",
        D: "Metano (CH₄)"
      },
      correct: "B",
      errorTypes: {
        A: "El CO₂ es un reactivo que se consume, no un producto liberado típico.",
        C: "El nitrógeno no es el gas característico liberado en la fotosíntesis.",
        D: "El metano no corresponde al proceso fotosintético estándar."
      },
      justification: "En la fotosíntesis se usa CO₂ y agua, con luz, para formar glucosa y liberar O₂.",
      concepts: ["Fotosíntesis", "Productos y reactivos", "Intercambio de gases"],
      tips: "Recuerda: entra CO₂ + H₂O + luz → sale glucosa + O₂."
    }
  ];

  const state = {
    name: "",
    age: null,
    mode: null,
    question: null,
    selected: null,
    startedAt: 0,
    timerId: null,
    elapsedSec: 0,
    answerChanges: 0,
    firstSelectAt: null,
    usedIds: []
  };

  const $ = (sel) => document.querySelector(sel);
  const screens = {
    welcome: $("#screenWelcome"),
    profile: $("#screenProfile"),
    modes: $("#screenModes"),
    session: $("#screenSession"),
    simulacro: $("#screenSimulacro")
  };

  function showScreen(key) {
    Object.values(screens).forEach((el) => el?.classList.remove("is-active"));
    screens[key]?.classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function startTimer() {
    stopTimer();
    state.startedAt = Date.now();
    state.elapsedSec = 0;
    state.firstSelectAt = null;
    state.answerChanges = 0;
    const chip = $("#timerChip");
    const tick = () => {
      state.elapsedSec = Math.floor((Date.now() - state.startedAt) / 1000);
      const m = String(Math.floor(state.elapsedSec / 60)).padStart(2, "0");
      const s = String(state.elapsedSec % 60).padStart(2, "0");
      if (chip) chip.textContent = `${m}:${s}`;
    };
    tick();
    state.timerId = setInterval(tick, 250);
  }

  function pickQuestion() {
    let pool = QUESTIONS.filter((q) => !state.usedIds.includes(q.id));
    if (!pool.length) {
      state.usedIds = [];
      pool = QUESTIONS.slice();
    }
    const q = pool[Math.floor(Math.random() * pool.length)];
    state.usedIds.push(q.id);
    return q;
  }

  function detectHesitation() {
    const changes = state.answerChanges;
    const time = state.elapsedSec;
    if (changes >= 2) return { yes: true, reason: "Cambiaste de opción varias veces antes de confirmar." };
    if (changes === 1 && time >= 45) return { yes: true, reason: "Hubo un cambio de respuesta tras pensarlo bastante." };
    if (time >= 90) return { yes: true, reason: "Te tomó bastante tiempo; es posible que dudaras en el proceso." };
    if (state.firstSelectAt && time - state.firstSelectAt >= 40 && changes >= 1) {
      return { yes: true, reason: "Seleccionaste, esperaste y luego modificaste la respuesta." };
    }
    return { yes: false, reason: "Tu selección se vio relativamente segura y directa." };
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    if (m <= 0) return `${s} segundo${s === 1 ? "" : "s"}`;
    return `${m} min ${String(s).padStart(2, "0")} s`;
  }

  function renderQuestion() {
    const q = pickQuestion();
    state.question = q;
    state.selected = null;

    $("#sessionModeTitle").textContent =
      state.mode === "coach" ? "Coach ICFES IA" : "Modo Profesor";
    $("#sessionUserLabel").textContent = `${state.name} · ${state.age} años`;
    $("#subjectChip").textContent = q.subject;
    $("#questionText").textContent = q.text;
    $("#btnSubmit").disabled = true;
    $("#feedbackBox").hidden = true;
    $("#feedbackBox").innerHTML = "";
    $("#sessionActions").hidden = true;

    const list = $("#optionsList");
    list.innerHTML = "";
    Object.entries(q.options).forEach(([key, label]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.dataset.key = key;
      btn.innerHTML = `<span class="option-key">${key}</span><span>${label}</span>`;
      btn.addEventListener("click", () => selectOption(key, btn));
      list.appendChild(btn);
    });

    startTimer();
  }

  function selectOption(key, btn) {
    if ($("#feedbackBox") && !$("#feedbackBox").hidden) return;

    if (state.selected && state.selected !== key) {
      state.answerChanges += 1;
    }
    if (!state.firstSelectAt) {
      state.firstSelectAt = state.elapsedSec;
    }
    state.selected = key;

    document.querySelectorAll(".option-btn").forEach((el) => {
      el.classList.toggle("is-selected", el.dataset.key === key);
    });
    $("#btnSubmit").disabled = false;
  }

  function lockOptions() {
    document.querySelectorAll(".option-btn").forEach((el) => {
      el.disabled = true;
    });
    $("#btnSubmit").disabled = true;
  }

  function renderCoachFeedback(isCorrect) {
    const q = state.question;
    const hesitation = detectHesitation();
    const status = isCorrect ? "Respuesta correcta" : "Respuesta incorrecta";
    const statusClass = isCorrect ? "is-ok" : "is-bad";

    let coachLine = isCorrect
      ? `¡Bien, ${state.name}! Acertaste. Ahora revisemos cómo fue tu proceso, no solo el resultado.`
      : `Ey, ${state.name}: no se trata solo de fallar. Vamos a entender por qué pasó.`;

    if (!isCorrect && q.errorTypes[state.selected]) {
      coachLine = q.errorTypes[state.selected];
    } else if (isCorrect && hesitation.yes) {
      coachLine = `Acertaste, pero detecté inseguridad en el camino. ${hesitation.reason} Reforcemos seguridad sin perder precisión.`;
    } else if (isCorrect) {
      coachLine = `Dominas esta competencia en apariencia. ${hesitation.reason} Sigamos subiendo el nivel.`;
    }

    let errorBlock = "";
    if (!isCorrect) {
      const err = q.errorTypes[state.selected] || "Hubo una lectura incompleta del enunciado o de las opciones.";
      errorBlock = `
        <div class="feedback-block">
          <h4>Tipo de error probable</h4>
          <p>${err}</p>
        </div>`;
    }

    $("#feedbackBox").innerHTML = `
      <span class="feedback-status ${statusClass}">${status}</span>
      <h3>${coachLine}</h3>
      <div class="feedback-grid">
        <div class="feedback-metric"><strong>${formatTime(state.elapsedSec)}</strong><span>Tiempo</span></div>
        <div class="feedback-metric"><strong>${hesitation.yes ? "Sí" : "No"}</strong><span>Posible duda</span></div>
        <div class="feedback-metric"><strong>${state.answerChanges}</strong><span>Cambios</span></div>
      </div>
      <div class="feedback-block">
        <h4>Lectura del proceso</h4>
        <p>${hesitation.reason}</p>
      </div>
      ${errorBlock}
      <div class="feedback-block">
        <h4>Respuesta correcta</h4>
        <p><strong>${q.correct}.</strong> ${q.options[q.correct]}</p>
      </div>
    `;
  }

  function renderProfesorFeedback(isCorrect) {
    const q = state.question;
    const status = isCorrect ? "Lo resolviste bien" : "Aún no era esa";
    const statusClass = isCorrect ? "is-ok" : "is-bad";

    $("#feedbackBox").innerHTML = `
      <span class="feedback-status ${statusClass}">${status}</span>
      <h3>${state.name}, ahora te enseño el porqué — como si tú fueras el profesor.</h3>
      <div class="feedback-block">
        <h4>Justificación de la respuesta correcta (${q.correct})</h4>
        <p>${q.justification}</p>
      </div>
      <div class="feedback-block">
        <h4>Conceptos clave</h4>
        <ul>${q.concepts.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div class="feedback-block">
        <h4>Qué debes tener en cuenta para descubrir la respuesta</h4>
        <p>${q.tips}</p>
      </div>
      <div class="feedback-block">
        <h4>Opción correcta</h4>
        <p><strong>${q.correct}.</strong> ${q.options[q.correct]}</p>
      </div>
    `;
  }

  function submitAnswer() {
    if (!state.selected || !state.question) return;
    stopTimer();
    lockOptions();

    const isCorrect = state.selected === state.question.correct;
    if (state.mode === "coach") renderCoachFeedback(isCorrect);
    else renderProfesorFeedback(isCorrect);

    $("#feedbackBox").hidden = false;
    $("#sessionActions").hidden = false;
  }

  /* Events */
  $("#btnStart")?.addEventListener("click", () => showScreen("profile"));

  $("#profileForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#userName").value.trim();
    const age = Number($("#userAge").value);
    if (!name || !age) return;
    state.name = name;
    state.age = age;
    $("#modeGreeting").textContent =
      `Perfecto, ${name}. Tienes ${age} años y estás listo para entrenar. Elige uno de los 3 modos de ICFES LAND IA:`;
    showScreen("modes");
  });

  document.querySelectorAll(".mode-card").forEach((card) => {
    card.addEventListener("click", () => {
      const mode = card.dataset.mode;
      state.mode = mode;

      if (mode === "simulacro") {
        $("#simulacroMsg").textContent =
          `${state.name}, activaste Simulacro Vivo. Para este modo te llevo al canal principal de ICFES LAND en YouTube. Busca los videos donde hay links de simulacros y realízalos ahí. ¡Ese es tu entrenamiento en vivo!`;
        showScreen("simulacro");
        return;
      }

      showScreen("session");
      renderQuestion();
    });
  });

  $("#btnSubmit")?.addEventListener("click", submitAnswer);

  $("#btnAnother")?.addEventListener("click", () => {
    renderQuestion();
  });

  $("#btnChangeMode")?.addEventListener("click", () => {
    stopTimer();
    showScreen("modes");
  });

  $("#btnBackModes")?.addEventListener("click", () => showScreen("modes"));

  /* Auto-open YouTube after short delay when entering simulacro (user still has button) */
  const ytBtn = $("#btnYoutube");
  ytBtn?.addEventListener("click", () => {
    /* link already opens; reinforce message */
  });
})();
