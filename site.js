document.addEventListener("DOMContentLoaded", () => {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (href && !href.startsWith("http") && href === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animated = document.querySelectorAll(
    ".reveal, .research-section, .publication-item, .package-card, .talk-item"
  );

  if (reduced || !("IntersectionObserver" in window)) {
    animated.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  animated.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 45}ms`;
    observer.observe(el);
  });
});
