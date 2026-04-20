function sliderhome() {
  const track = document.getElementById("sliderTrackC");
  const radios = document.querySelectorAll('input[name="slider-radioC"]');
  const labels = document.querySelectorAll(".slider-controlsC label");
  const prevBtnh = document.getElementById("prevBtnC");
  const nextBtnh = document.getElementById("nextBtnC");

  let currentIndex = 0;
  const totalSlides = radios.length;
  let interval;
  let startX = 0;
  let deltaX = 0;
  let isDragging = false;

  function goToSlide(index) {
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * 100}%)`;
    radios[index].checked = true;
    currentIndex = index;
  }

  function nextSlide() {
    const index = (currentIndex + 1) % totalSlides;
    goToSlide(index);
  }

  function prevSlide() {
    const index = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(index);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 11000);
  }

  nextBtnh.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtnh.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  labels.forEach((label, index) => {
    label.addEventListener("click", () => {
      goToSlide(index);
      resetInterval();
    });
  });

  interval = setInterval(nextSlide, 11000);

  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    deltaX = 0;
    track.style.transition = "none";
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    deltaX = e.pageX - startX;
    track.style.transform = `translateX(calc(-${
      currentIndex * 100
    }% + ${deltaX}px))`;
  });

  track.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 0.5s ease";
    handleSwipe();
  });

  track.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = "transform 0.5s ease";
      handleSwipe();
    }
  });

  track.addEventListener(
    "touchstart",
    (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      deltaX = 0;
      track.style.transition = "none";
    },
    { passive: true },
  );

  track.addEventListener(
    "touchmove", 
    (e) => {
      if (!isDragging) return;
      deltaX = e.touches[0].clientX - startX;
      track.style.transform = `translateX(calc(-${
        currentIndex * 100
      }vw + ${deltaX}px))`;
    },
    { passive: true },
  );

  track.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 0.5s ease";
    handleSwipe();
  });

  function handleSwipe() {
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    } else {
      goToSlide(currentIndex);
    }
    resetInterval();
  }

  goToSlide(currentIndex);
}

sliderhome();

//  <div class="seccion_info">
//             <h2>PREMIUM FARMS</h2>
//             <section class="sliderC">
//                 <div class="slider-wrapperC" id="sliderTrackC">
//                     <div class="slideC bg1C">
//                         <div class="content-slide">
//                             <div class="item content_info_productos container">
//                                 <div class="info_box_1">
//                                     <img title="MarcoPolo" src="/assets/furta_dragon.png" alt="Farms">
//                                 </div>
//                                 <br />
//                                 <div class="info_box_2">
//                                     <h2>Selenicereus megalanthus (Fruta Dragon)</h2>
//                                     <br />
//                                     <ul>
//                                         <li>Apariencia externa</li>
//                                         <li>Pulpa</li>
//                                         <li>Tamaño</li>
//                                         <li>Dulzura intensa</li>
//                                         <li>Perfil de sabor</li>
//                                         <li>Salud Digestiva</li>
//                                         <li>Antioxidantes</li>
//                                         <li>Minerales</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="slideC bg2C">
//                         <div class="content-slide">
//                             <div class="item content_info_productos container">
//                                 <div class="info_box_1">
//                                     <img title="MarcoPolo" src="/assets/banano_farms.png" alt="Farms">
//                                 </div>
//                                 <br />
//                                 <div class="info_box_2">
//                                     <h2>Solara Bananas</h2>
//                                     <br />
//                                     <ul>
//                                         <li>Genoma AAA</li>
//                                         <li>Apariencia externa</li>
//                                         <li>Sabor</li>
//                                         <li>Tamaño</li>
//                                         <li>Estructura</li>
//                                         <li>Productividad</li>
//                                         <li>Ciclo de Vida</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div style="display: none;" class="slider-controlsC">
//                     <input type="radio" name="slider-radioC" id="trigger1" checked>
//                     <label for="trigger1"></label>
//                     <input type="radio" name="slider-radioC" id="trigger2">
//                     <label for="trigger2"></label>
//                 </div>

//             </section>

//             <div class="controls-sliderC" style="gap: 30px;">
//                 <button class="arrowC arrowC-left" id="prevBtnC">&#8249;</button>
//                 <button class="arrowC arrowC-right" id="nextBtnC">&#8250;</button>
//             </div>
//         </div>
