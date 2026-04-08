(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  const yearTargets = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  yearTargets.forEach((node) => {
    node.textContent = String(year);
  });

  const links = document.querySelectorAll("[data-nav] a");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }
    if (href.endsWith(current)) {
      link.classList.add("active");
    }
  });
})();
