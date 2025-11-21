// =========================
//  HERO (solo reemplazar textos)
// =========================

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
  article.classList.add("plan");

  article.innerHTML = `
    <img src="${char.imagen}" alt="${char.nombre}" class="personaje-img" />
    <h3>${char.nombre}</h3>
    <div class="price"></div>
    <ul>
      <li>${char.descripcion}</li>
    </ul>
  `;

  personajesGrid.appendChild(article);
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
