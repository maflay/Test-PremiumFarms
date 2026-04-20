(() => {
  const pais_contacto = document.getElementById("pais_contacto");

  pais_contacto.addEventListener("change", () => {
    if (pais_contacto.value == "OTROS") {
      document.getElementById("_input_otro_pais").style.display = "flex";
    } else {
      document.getElementById("_input_otro_pais").style.display = "none";
    }
  });
})();
