import { comic } from "./bd.js";

/* ESPERAR A QUE CARGUE EL DOM */
document.addEventListener("DOMContentLoaded", () => {

  /* CARRUSEL */
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  if (images.length > 0) {
    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 4000);
  }

  /* TEXTO HERO */
  const titulo = document.getElementById("tituloComic");
  const sinopsis = document.getElementById("sinopsisComic");

  if (titulo && sinopsis) {
    titulo.textContent = comic.nombreComic;
    sinopsis.textContent = comic.sinopsis;
  }

  /* PERSONAJES HOME */
  const personajesHome = document.getElementById("personajesHome");

  if (personajesHome) {
    comic.personajes.forEach(p => {
      personajesHome.innerHTML += `
        <a href="personajes.html?id=${p.id}" class="home-card">
          <img src="${p.imagen}" alt="${p.nombre}">
          <h3>${p.nombre}</h3>
        </a>
      `;
    });
  }

  /* CAPÍTULOS HOME */
  const capitulosHome = document.getElementById("capitulosHome");

  if (capitulosHome) {
    comic.capitulos.forEach(c => {
      capitulosHome.innerHTML += `
        <a href="capitulos.html?id=${c.id}" class="home-card">
          <img src="${c.imagen}" alt="${c.titulo}">
          <h3>${c.titulo}</h3>
        </a>
      `;
    });
  }

});
