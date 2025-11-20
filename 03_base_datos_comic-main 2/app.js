const infoComic = document.querySelector(".info-comic")
const cardPersonajes = document.querySelector(".card-personajes")

console.log(infoComic)

infoComic.innerHTML = `

<small>${comic.year}</small>
<h3>${comic.nombreComic}</h3>
<a>${comic.verAhora}</a>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
`
console.log(comic.Personajes)

comic.Personajes.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("personaje")
    div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
    `
    
    cardPersonajes.appendChild(div)
});

comic.Personajes.forEach(char => {
   const card = document.createElement("article");
   card.classList.add("card");


   card.innerHTML = `
       <div class="card__thumb">
           <img src="${char.imagen}" alt="Imagen de ${char.nombre}" class="personaje-img">
       </div>
      
       <div class="card__body">
           <h3 class="card__title">${char.nombre}</h3>
           <p class="card__text">${char.descripcion}</p>
       </div>
   `;


   scrollerPersonajes.appendChild(card);
});




// --- 3. SECCIÓN DE CAPÍTULOS ---


// Usamos el ID específico para el scroller de capítulos
const scrollerCapitulos = document.querySelector("#scroller-capitulos");
scrollerCapitulos.innerHTML = ''; // Limpiamos


comic.capitulos.forEach(capitulo => {
   const card = document.createElement("article");
   card.classList.add("card");


   // Construcción usando background-image para mantener el estilo original de los capítulos
   card.innerHTML = `
       <div class="card__thumb" style="background-image: url('${capitulo.portada}');"></div>
       <div class="card__body">
           <h3 class="card__title">${capitulo.id}. ${capitulo.nombre}</h3>
           <p class="card__text">${capitulo.descripcion}</p>
           <button class="mini">Ver capítulo</button>
       </div>
   `;


   scrollerCapitulos.appendChild(card);
});
