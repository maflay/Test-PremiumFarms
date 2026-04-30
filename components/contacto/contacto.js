(() => {
  const btn_send_contact = document.getElementById("btn_send_contact");
  const nombre = document.getElementById("nombre");
  const pais_contacto = document.getElementById("pais_contacto");
  const _pais_espe = document.getElementById("_pais_espe");
  const telefono = document.getElementById("telefono");
  const indicativo = document.getElementById("indicativo");
  const descripcion_contacto = document.getElementById("descripcion_contacto");
  const loader = document.getElementById("loading");
  // const url =
  //   "https://script.google.com/macros/s/AKfycbwkzzyLkaN1W_j4O6H6K2p_dZKpQqxgIp8oCXY7Qf7KOpMPbCNDzi9aFm-PllTesOWHJg/exec";
  const url =
    "https://script.google.com/macros/s/AKfycbxFN9Lq2PccNu9RPNNKW5o7zWaYM3aV4dsJMGSlYNgKPnB5LvvTnwGH5IhO8l-x7p-k/exec";
  pais_contacto.addEventListener("change", () => {
    if (pais_contacto.value == "OTROS") {
      document.getElementById("_input_otro_pais").style.display = "flex";
    } else {
      document.getElementById("_input_otro_pais").style.display = "none";
    }
  });

  btn_send_contact.onclick = null;
  btn_send_contact.onclick = handleSendContact;

  function handleSendContact() {
    if (
      !pais_contacto.value || pais_contacto.value == "OTROS"
        ? !_pais_espe.value
        : !pais_contacto.value ||
          !nombre.value ||
          !telefono.value ||
          !descripcion_contacto.value
    ) {
      Swal.fire({
        icon: "warning",
        title: "Blank field",
      });
      return;
    }

    const fechaCompleta = new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const [fecha, hora] = fechaCompleta.split(", ");

    let formData = {
      tipo: "contacto",
      Hora: hora,
      Fecha: fecha,
      Nombre: nombre.value,
      Pais:
        pais_contacto.value == "OTROS" ? _pais_espe.value : pais_contacto.value,
      Indicativo: indicativo.value,
      Telefono: telefono.value,
      Descripcion: descripcion_contacto.value,
      Correo: "pruebajfdm@gmail.com",
    };

    loader.style.display = "flex";

    fetch(`${url}?hoja=contacto`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then(() => {
        loader.style.display = "none";
        nombre.value = "";
        pais_contacto.value = "";
        _pais_espe.value = "";
        indicativo.value = "";
        telefono.value = "";
        descripcion_contacto.value = "";
        Swal.fire({
          icon: "success",
          title: "Send success!",
        });
      })
      .catch((msj) => {
        loader.style.display = "none";
        console.error(msj);
        Swal.fire({
          icon: "error",
          title: "Error send",
        });
      });
  }
})();
