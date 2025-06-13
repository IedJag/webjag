window.addEventListener('scroll', function () {
  const bannerContainer = document.querySelector('.banner-container');
  const maxScroll = 150;  // distancia máxima para la animación

  let scrollY = window.scrollY;
  if (scrollY <= maxScroll) {
    const translateY = -scrollY; // sube a medida que se hace scroll
    const opacity = 1 - (scrollY / maxScroll) * 0.3; // baja opacidad hasta 0.7

    bannerContainer.style.transform = `translateY(${translateY}px)`;
    bannerContainer.style.opacity = opacity;
    bannerContainer.style.pointerEvents = 'auto';
  } else {
    bannerContainer.style.transform = `translateY(${-maxScroll}px)`;
    bannerContainer.style.opacity = 0.7;
    bannerContainer.style.pointerEvents = 'none';
  }
});


// SCRIPT CARRUSELES

//CARRUSEL EVENTOS
const slidesEventos = document.querySelectorAll('.evento-slide');
let indiceActivoEventos = 0;

function actualizarCarruselEventos() {
  slidesEventos.forEach((slide, i) => {
    slide.classList.remove('activa');
    if (i === indiceActivoEventos) {
      slide.classList.add('activa');
    }
  });
}

function siguienteEvento() {
  indiceActivoEventos = (indiceActivoEventos + 1) % slidesEventos.length;
  actualizarCarruselEventos();
}

function anteriorEvento() {
  indiceActivoEventos = (indiceActivoEventos - 1 + slidesEventos.length) % slidesEventos.length;
  actualizarCarruselEventos();
}

document.querySelector('.anterior')?.addEventListener('click', anteriorEvento);
document.querySelector('.siguiente')?.addEventListener('click', siguienteEvento);
actualizarCarruselEventos();







// CARRUSEL PRINCIPAL (página de inicio)
const slidesPrincipal = document.querySelectorAll('.principal-slide');
let indiceActivoPrincipal = 0;

function actualizarCarruselPrincipal() {
  slidesPrincipal.forEach((slide, i) => {
    slide.classList.remove('izquierda', 'activa', 'derecha');
    if (i === indiceActivoPrincipal) {
      slide.classList.add('activa');
    } else if (i === (indiceActivoPrincipal - 1 + slidesPrincipal.length) % slidesPrincipal.length) {
      slide.classList.add('izquierda');
    } else if (i === (indiceActivoPrincipal + 1) % slidesPrincipal.length) {
      slide.classList.add('derecha');
    }
  });
}

function siguientePrincipal() {
  indiceActivoPrincipal = (indiceActivoPrincipal + 1) % slidesPrincipal.length;
  actualizarCarruselPrincipal();
}

function anteriorPrincipal() {
  indiceActivoPrincipal = (indiceActivoPrincipal - 1 + slidesPrincipal.length) % slidesPrincipal.length;
  actualizarCarruselPrincipal();
}

document.getElementById('btn-anterior')?.addEventListener('click', anteriorPrincipal);
document.getElementById('btn-siguiente')?.addEventListener('click', siguientePrincipal);
actualizarCarruselPrincipal();







