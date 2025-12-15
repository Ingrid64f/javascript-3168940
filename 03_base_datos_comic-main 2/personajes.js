import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); // 👈 CONVERSIÓN CLAVE
const contenedor = document.getElementById("contenedor");

// 🔹 LISTA DE PERSONAJES
if (isNaN(id)) {
  comic.personajes.forEach(personaje => {
    contenedor.innerHTML += `
      <a href="personajes.html?id=${personaje.id}" class="card">
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h2>${personaje.nombre}</h2>
        <p>${personaje.rol}</p>
      </a>
    `;
  });
} 
// 🔹 DETALLE DE PERSONAJE
else {
  // 👉 COMPARAR ID DE URL CON ID DE BD
  const personaje = comic.personajes.find(p => p.id === id);

  if (!personaje) {
    window.location.href = "index.html";
  }

  contenedor.innerHTML = `
    <div class="detalle">
      <img src="${personaje.imagen}" alt="${personaje.nombre}">
      <div>
        <h2>${personaje.nombre}</h2>
        <p><strong>Rol:</strong> ${personaje.rol}</p>
        <p><strong>Edad:</strong> ${personaje.años}</p>
        <p>${personaje.biografia}</p>
        <blockquote>"${personaje.frase}"</blockquote>
      </div>
    </div>
  `;
}
