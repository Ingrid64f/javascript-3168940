import { comic } from "./bd.jd";
const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))

const miPersonaje = comic.personajes.find(p => p.idd === id)


//console.log("El personaje encontrado es:", miPersoanje);

const containerPersonaje = document.querySelector('.contenido-personaje')
console.log(containerPersonaje)
containerPersonaje.innerHTML = `

<section class="plans" id="personajes">
    <h2>${miPersonaje.nombre}</h2>
    <div class="plan-grid">
      
      <article class="plan">
        <img src="Generated Image November 12, 2025 - 4_35PM (1).png" alt="La Abuela" class="personaje-img" />
        <h3>La Abuela</h3>
        <div class="price">Lleva el legado del su ritmo familiar</div>
        <ul>
          <li>Recuerda los tiempos dorados de la música.</li>
          <li>Inicia el viaje con su misteriosa frase.</li>
        </ul>
      </article>

      <article class="plan">
        <img src="Generated Image November 12, 2025 - 4_35PM (3).png" alt="Reportero" class="personaje-img" />
        <h3>Reportero</h3>
        <div class="price">Narrador secundario</div>
        <ul>
          <li>Testigo de la historia y la demolición del museo.</li>
        </ul>
      </article>

      <article class="plan">
        <img src="Generated Image November 12, 2025 - 4_35PM.png" alt="Raizura" class="personaje-img" />
        <h3>Raizura</h3>
        <div class="price">El protagonista</div>
        <ul>
          <li>Un joven curioso que busca respuestas.</li>
          <li>Despierta el espíritu de Fruko al tocar el piano.</li>
        </ul>
      </article>

      <article class="plan">
         <img src="Generated Image November 12, 2025 - 4_35PM (2).png" alt="Raizura" class="personaje-img" />
        <h3>Fruko</h3>
        <div class="price">El fantasma de la sabrosura</div>
        <ul>
          <li>Guía espiritual y musical de Raizura.</li>
          <li>Encarnación del legado musical.</li>
        </ul>
      </article>

      <article class="plan">
         <img src="Generated Image November 12, 2025 - 4_44PM.png" alt="Constructores" class="personaje-img" />
        <h3>Constructores</h3>
        <div class="price">Agentes del cambio</div>
        <ul>
          <li>Simbolizan la modernidad que borra el pasado.</li>
        </ul>
      </article>

    </div>
  </section> `
