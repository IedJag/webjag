document.addEventListener("DOMContentLoaded", () => {
  fetch("data/docentes.json")
    .then(response => response.json())
    .then(data => {
      renderSeccion("Directivos", data.directivos, "directivos-container");
      renderSeccion("Administrativos", data.administrativos, "administrativos-container");
      renderDocentesPorSede("Sede A", data.docentes.sedeA, "sede-a-container");
      renderDocentesPorSede("Sede B", data.docentes.sedeB, "sede-b-container");
    })
    .catch(error => console.error("Error cargando JSON:", error));
});

// Crear tarjetas
function crearTarjetaDocente(persona) {
  const card = document.createElement("div");
  card.classList.add("docente-card");

  const img = document.createElement("img");
  img.src = persona.foto && persona.foto.trim() !== "" ? persona.foto : "img/logo-jag.png";
  img.alt = `Foto de ${persona.nombre}`;
  card.appendChild(img);

  const nombre = document.createElement("h3");
  nombre.textContent = persona.nombre;
  card.appendChild(nombre);

  if (persona.cargo) {
    const cargo = document.createElement("p");
    cargo.textContent = persona.cargo;
    card.appendChild(cargo);
  }

  if (persona.materia) {
    const materia = document.createElement("p");
    materia.textContent = persona.materia;
    card.appendChild(materia);
  }

  return card;
}

// Renderizar secciones generales (Directivos, Administrativos)
function renderSeccion(titulo, lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  const header = document.createElement("h2");
  header.textContent = titulo;
  contenedor.appendChild(header);

  const grid = document.createElement("div");
  grid.classList.add("docentes-grid");

  lista.forEach(persona => {
    grid.appendChild(crearTarjetaDocente(persona));
  });

  contenedor.appendChild(grid);
}

// Renderizar docentes organizados por área dentro de cada sede
function renderDocentesPorSede(nombreSede, dataSede, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  const header = document.createElement("h2");
  header.textContent = nombreSede;
  contenedor.appendChild(header);

  Object.keys(dataSede).forEach(area => {
    const areaContainer = document.createElement("div");
    areaContainer.classList.add("area-container");

    const areaTitulo = document.createElement("h3");
    areaTitulo.textContent = area;
    areaContainer.appendChild(areaTitulo);

    const grid = document.createElement("div");
    grid.classList.add("docentes-grid");

    dataSede[area].forEach(docente => {
      grid.appendChild(crearTarjetaDocente(docente));
    });

    areaContainer.appendChild(grid);
    contenedor.appendChild(areaContainer);
  });
}

