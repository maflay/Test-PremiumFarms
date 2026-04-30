(() => {
  const container_img_big = document.getElementById("content_img_big");
  const imgs_change = document.querySelectorAll(".img_change_show");

  imgs_change.forEach((img) => {
    img.addEventListener("click", () => {
      container_img_big.src = img.src;
    });
  });
})();
(() => {
  if (document.getElementById("seccion_productos")) {
    fetch("/components/frutas/frutas_desc/productos_view/productos_view.html")
      .then((res) => res.text())
      .then((html) => {
        const contenedor = document.getElementById("seccion_productos");
        contenedor.innerHTML = html;

        const estilo = document.createElement("link");
        estilo.rel = "stylesheet";
        estilo.href =
          "/components/frutas/frutas_desc/productos_view/productos_view.css";
        document.head.appendChild(estilo);
        // Cargar script dinámicamente
        const script = document.createElement("script");
        script.src =
          "/components/frutas/frutas_desc/productos_view/productos_view.js";
        document.body.appendChild(script);
      });
  }
})();
(() => {
  if (document.getElementById("seccion_productos")) {
    fetch("/components/frutas/frutas_desc/productos_view/productos_view.html")
      .then((res) => res.text())
      .then((html) => {
        const contenedor = document.getElementById("seccion_productos");
        contenedor.innerHTML = html;

        const estilo = document.createElement("link");
        estilo.rel = "stylesheet";
        estilo.href =
          "/components/frutas/frutas_desc/productos_view/productos_view.css";
        document.head.appendChild(estilo);
        // Cargar script dinámicamente
        const script = document.createElement("script");
        script.src =
          "/components/frutas/frutas_desc/productos_view/productos_view.js";
        document.body.appendChild(script);
      });
  }
})();
