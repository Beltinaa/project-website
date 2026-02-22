document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  const setHeaderState = () => {
    if (!header) return;
    if (header.dataset.solid === "true") {
      header.classList.add("scrolled");
      return;
    }
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const menuToggle = document.querySelector(".nav-toggle");
  const navOverlay = document.querySelector(".nav-overlay");
  const navDrawer = document.querySelector(".nav-drawer");

  const closeMenu = () => {
    if (!header) return;
    header.classList.remove("menu-open");
    document.body.classList.remove("no-scroll");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    if (navDrawer) navDrawer.setAttribute("aria-hidden", "true");
  };

  if (menuToggle && header && navDrawer) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      document.body.classList.toggle("no-scroll", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      navDrawer.setAttribute("aria-hidden", String(!isOpen));
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  if (navDrawer) {
    navDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  const track = document.querySelector(".testimonial-track");
  if (track) {
    const slides = Array.from(track.children);
    let index = 0;
    let timer;

    const startSlider = () => {
      timer = setInterval(() => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
      }, 6000);
    };

    const stopSlider = () => {
      if (timer) clearInterval(timer);
    };

    startSlider();

    const slider = track.parentElement;
    if (slider) {
      slider.addEventListener("mouseenter", stopSlider);
      slider.addEventListener("mouseleave", startSlider);
      slider.addEventListener("focusin", stopSlider);
      slider.addEventListener("focusout", startSlider);
    }
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        galleryItems.forEach((item) => {
          const categories = item.dataset.category.split(" ");
          const shouldShow = filter === "all" || categories.includes(filter);
          item.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const openers = Array.from(document.querySelectorAll("[data-lightbox]") );
    const closeBtn = lightbox.querySelector(".close-btn");
    const prevBtn = lightbox.querySelector(".prev-btn");
    const nextBtn = lightbox.querySelector(".next-btn");
    let currentIndex = 0;

    const updateLightbox = () => {
      const item = openers[currentIndex];
      if (!item) return;
      const src = item.dataset.full || item.querySelector("img").src;
      const alt = item.querySelector("img").alt || "Project image";
      lightboxImage.src = src;
      lightboxImage.alt = alt;
    };

    const openLightbox = (index) => {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
    };

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      document.body.classList.remove("no-scroll");
    };

    openers.forEach((item, index) => {
      item.addEventListener("click", () => openLightbox(index));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(index);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + openers.length) % openers.length;
        updateLightbox();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % openers.length;
        updateLightbox();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("open")) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + openers.length) % openers.length;
        updateLightbox();
      }
      if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % openers.length;
        updateLightbox();
      }
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  const beforeAfterBlocks = document.querySelectorAll("[data-before-after]");
  if (beforeAfterBlocks.length) {
    beforeAfterBlocks.forEach((block) => {
      const range = block.querySelector("input[type='range']");
      if (!range) return;
      const update = () => {
        block.style.setProperty("--position", `${range.value}%`);
      };
      range.addEventListener("input", update);
      update();
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    const setError = (name, message) => {
      const error = form.querySelector(`[data-error-for="${name}"]`);
      if (error) error.textContent = message;
    };

    const clearErrors = () => {
      form.querySelectorAll(".field-error").forEach((el) => {
        el.textContent = "";
      });
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();
      let hasError = false;

      const name = form.querySelector("#name");
      const phone = form.querySelector("#phone");
      const email = form.querySelector("#email");
      const service = form.querySelector("#service");
      const message = form.querySelector("#message");
      const submitBtn = form.querySelector("button[type='submit']");

      if (!name.value.trim() || name.value.trim().length < 3) {
        setError("name", "Please enter your full name.");
        hasError = true;
      }

      const phoneValue = phone.value.trim();
      if (!/^[0-9+()\s-]{7,}$/.test(phoneValue)) {
        setError("phone", "Please enter a valid phone number.");
        hasError = true;
      }

      const emailValue = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        setError("email", "Please enter a valid email address.");
        hasError = true;
      }

      if (!service.value) {
        setError("service", "Please select a service.");
        hasError = true;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        setError("message", "Please tell us a little about your project.");
        hasError = true;
      }

      if (hasError) return;

      const success = document.querySelector("#form-success");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        if (success) {
          success.textContent =
            "Thank you. Your enquiry has been received and our team will respond within one business day.";
        }
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 900);
    });
  }
});
