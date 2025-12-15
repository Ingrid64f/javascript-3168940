import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); // 👈 CONVERSIÓN CLAVE
const contenedor = document.getElementById("contenedor");

if (!contenedor) {
  console.error("No existe el contenedor");
} else {

  // 🔹 LISTA DE CAPÍTULOS
  if (isNaN(id)) {
    comic.capitulos.forEach(capitulo => {
      contenedor.innerHTML += `
        <a href="capitulos.html?id=${capitulo.id}" class="card">
          <img src="${capitulo.imagen}" alt="${capitulo.titulo}">
          <div class="info">
            <h3>${capitulo.titulo}</h3>
            <p>${capitulo.descripcion}</p>
            <small>Duración: ${capitulo.duracion}</small>
          </div>
        </a>
      `;
    });
  } 
  // 🔹 DETALLE DE CAPÍTULO
  else {
    // 👉 COMPARAR ID DE URL CON ID DE BD
    const capitulo = comic.capitulos.find(c => c.id === id);

    if (!capitulo) {
      window.location.href = "index.html";
    }

    contenedor.innerHTML = `
      <div class="detalle">
        <h2>${capitulo.titulo}</h2>

        <video controls>
          <source src="${capitulo.video}" type="video/mp4">
          Tu navegador no soporta video.
        </video>

        <p class="descripcion-corta">${capitulo.descripcion}</p>

        <div class="descripcion-larga">
          ${capitulo.descripcionLarga}
        </div>
      </div>
    `;
  }
}

