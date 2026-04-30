(() => {
  const currentHash = window.location.hash;

  if (!currentHash) return;

  const cardLinks = document.querySelectorAll("._card_products_text_ > a");

  cardLinks.forEach((link) => {
    const linkHash = link.getAttribute("href");

    if (linkHash === currentHash) {
      const promoSection = link.closest("._card_products_");
      document.getElementById("title_productos").textContent = "Otros Productos";
      
      if (promoSection) {
        promoSection.style.display = "none";
      }
    }
  });
})();