// MENÚ MÓVIL
const btnMenu = document.getElementById('btn-menu');
const navMovil = document.getElementById('nav-movil');

btnMenu.addEventListener('click', () => {
  navMovil.classList.toggle('oculto');
});

const enlacesMenu = navMovil.querySelectorAll('a');
enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', () => {
    navMovil.classList.add('oculto');
  });
});



