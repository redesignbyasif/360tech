/* =========================================================
   360Tech Engineering — Interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  var floatingBar = document.getElementById("floatingBar");
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (y > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    /* Floating action bar: show after hero, on mobile widths */
    var mobile = window.matchMedia("(max-width: 767px)").matches;
    if (mobile && floatingBar) {
      if (y > window.innerHeight * 0.7) {
        if (!floatingBar.hidden) return;
        floatingBar.hidden = false;
        document.body.classList.add("floating-bar-visible");
      } else if (!floatingBar.hidden) {
        floatingBar.hidden = true;
        document.body.classList.remove("floating-bar-visible");
      }
    } else if (floatingBar && !floatingBar.hidden) {
      floatingBar.hidden = true;
      document.body.classList.remove("floating-bar-visible");
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var backdrop = document.getElementById("navBackdrop");

  function setNav(open) {
    mainNav.classList.toggle("open", open);
    backdrop.hidden = !open;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (navToggle && mainNav && backdrop) {
    navToggle.addEventListener("click", function () {
      setNav(!mainNav.classList.contains("open"));
    });
    backdrop.addEventListener("click", function () { setNav(false); });

    /* Close after navigating */
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 767px)").matches) setNav(false);
      });
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mainNav.classList.contains("open")) setNav(false);
    });
  }

  /* ---------- Dropdown menus (mobile + desktop) ---------- */
  document.querySelectorAll(".nav-item.has-dropdown > a").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      var item = trigger.closest(".nav-item");
      var isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        /* Prevent jumping: handle as toggle on mobile */
        e.preventDefault();
        e.stopPropagation();
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".nav-item.has-dropdown.open").forEach(function (o) {
          if (o !== item) o.classList.remove("open");
        });
        item.classList.toggle("open", !isOpen);
      } else {
        /* Desktop: click toggles open state without following the link */
        e.preventDefault();
        var wasOpen = item.classList.contains("open");
        document.querySelectorAll(".nav-item.has-dropdown.open").forEach(function (o) {
          o.classList.remove("open");
        });
        if (!wasOpen) item.classList.add("open");
      }
    });
  });

  /* Desktop: hover also opens dropdowns */
  if (window.matchMedia("(min-width: 768px)").matches) {
    document.querySelectorAll(".nav-item.has-dropdown").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        document.querySelectorAll(".nav-item.has-dropdown.open").forEach(function (o) {
          if (o !== item) o.classList.remove("open");
        });
        item.classList.add("open");
      });
    });
  }

  /* Close desktop dropdowns when clicking outside */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item.has-dropdown")) {
      document.querySelectorAll(".nav-item.has-dropdown.open").forEach(function (o) {
        o.classList.remove("open");
      });
    }
  });

  /* ---------- FAQ accordion: single-open behaviour ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Smooth-scroll offset for fixed header ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var headerH = header ? header.offsetHeight : 78;
      var top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
