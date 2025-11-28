// =========================
//  HERO (solo reemplazar textos)
// =========================
import { comic } from "./bd";

const heroTitle = document.querySelector(".hero .copy h1");
const heroDesc = document.querySelector(".hero .copy .lead");

if (heroTitle) heroTitle.textContent = comic.nombreComic;
if (heroDesc) heroDesc.textContent = comic.sinopsis;


// =========================
//  PERSONAJES (sección #personajes)
// =========================

const personajesGrid = document.querySelector("#personajes .plan-grid");
personajesGrid.innerHTML = ""; // Limpiamos lo estático

comic.personajes.forEach(char => {
  const article = document.createElement("article");
  const link = document.createElement("a");
  personajesGrid.classList.add('card')
  article.classList.add("plan");

  article.innerHTML = `
  < a href"./personajes.html?id=${char.id}">
 <h3>${char.nombre}</h3>
 <p><img src="${char.imagen} alt="${char.nombre}"></p>
 <p><strong>Rol:</strong> ${char.rol}</p>
 <p>${char.descripcion}</p>

    <img src="${char.imagen}" alt="${char.nombre}" class="personaje-img" />
    <h3>${char.nombre}</h3>
    <div class="price"></div>
    <ul>
      <li>${char.descripcion}</li>
    </ul>
  `;
  personajesGrid.appendChild(div);
});


// =========================
//  CAPÍTULOS (sección #capitulos)
// =========================

const slidesContainer = document.querySelector(".slides");
slidesContainer.innerHTML = ""; // Limpiar contenido actual

comic.capitulos.forEach(cap => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  slide.innerHTML = `
      <img src="${cap.portada}" alt="${cap.nombre}" />
      <div class="meta">
        <strong>Capítulo ${cap.id}:</strong> ${cap.nombre}
      </div>
  `;

  slidesContainer.appendChild(slide);
});
  
