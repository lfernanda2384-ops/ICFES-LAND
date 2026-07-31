(() => {
  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  /* Loader */
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader?.classList.add("is-done");
      document.body.classList.add("is-ready");
      revealHeroImmediate();
    }, 650);
  });

  /* Fallback if load already fired */
  if (document.readyState === "complete") {
    setTimeout(() => {
      loader?.classList.add("is-done");
      revealHeroImmediate();
    }, 650);
  }

  function revealHeroImmediate() {
    const heroEls = document.querySelectorAll(".hero [data-reveal], .services-hero [data-reveal]");
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), 120 + i * 110);
    });
  }

  /* Navbar on scroll */
  const onScroll = () => {
    if (!navbar) return;
    if (navbar.classList.contains("is-solid")) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  navToggle?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  /* Scroll reveals (sections below page heroes) */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (!el.closest(".hero") && !el.closest(".services-hero")) observer.observe(el);
  });

  /* Soft parallax on hero media layer */
  const heroMedia = document.querySelector(".hero-media, .services-hero-media");
  if (heroMedia && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroMedia.style.transform = `translateY(${y * 0.22}px)`;
        }
      },
      { passive: true }
    );
  }
})();
