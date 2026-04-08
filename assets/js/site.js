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

  const filters = document.querySelectorAll("[data-filter-group]");
  filters.forEach((group) => {
    const input = group.querySelector("[data-filter-input]");
    const clear = group.querySelector("[data-filter-clear]");
    const count = group.querySelector("[data-filter-count]");
    const targets = Array.from(group.querySelectorAll("[data-filter-target]"));

    if (!input || !count || targets.length === 0) {
      return;
    }

    const applyFilter = () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;

      targets.forEach((node) => {
        const text = node.textContent.toLowerCase();
        const show = q.length === 0 || text.includes(q);
        node.classList.toggle("is-hidden", !show);
        if (show) {
          visible += 1;
        }
      });

      count.textContent = `${visible} section${visible === 1 ? "" : "s"} shown`;
    };

    input.addEventListener("input", applyFilter);
    clear?.addEventListener("click", () => {
      input.value = "";
      applyFilter();
      input.focus();
    });

    applyFilter();
  });
})();
