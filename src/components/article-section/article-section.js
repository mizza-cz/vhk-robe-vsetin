document.querySelectorAll(".article-section").forEach((section) => {
  const header = section.querySelector(".article-section__header");
  const main = section.querySelector(".article-section__content");

  if (!header || !main) return;

  const updateHeaderHeight = () => {
    const height = Math.ceil(header.offsetHeight);
    main.style.setProperty("--header-height", `${height}px`);
  };

  updateHeaderHeight();

  const resizeObserver = new ResizeObserver(updateHeaderHeight);
  resizeObserver.observe(header);

  window.addEventListener("load", updateHeaderHeight);
  window.addEventListener("resize", updateHeaderHeight);
});
