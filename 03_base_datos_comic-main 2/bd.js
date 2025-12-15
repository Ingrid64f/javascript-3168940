export const comic = {

  nombreComic: "El eco Olvidado",
  numeroEpisodios: 3,
  genero: "Fantasia, drama",
  sinopsis:  ` En un futuro donde la música se ha convertido en un eco digital,
    un joven llamado Raizura encuentra el último vestigio de la sabrosura
    en un museo olvidado. Allí, el espíritu de Fruko lo guía a redescubrir
    el poder de la música y el legado que vive en su sangre. `,
  autores: ["Santiago", "Salome", "Luis"],
  portadaComic: "portada.jpg",
  year: 2025,

  personajes: [
    {
      id: 1,
      nombre: "Raizura",
      descripcion: "Joven de 17 años amante a la musica",
      imagen: "raizura.jpeg",
      frase: "Pasame la aguapanela",
      biografia: "Raizura escucha una noticia donde un reportero anuncia la destruccion de un museo antiguo de musica del pasado...",
      años: "17",
      estatura: "1,70 cm",
      rol: "Musico en formacion",
      video: "raizuraa.mp4"
    },
    {
      id: 2,
      nombre: "Fruko",
      descripcion: "Un fantasma del pasado que mantiene la salsa viva",
      imagen: "fruko.jpeg",
      frase: "El ritmo sigue vivo",
      biografia: "Julio Ernesto, mas conocido como Fruko, fue un gran cantautor colombiano...",
      años: "60 (antes de su muerte)",
      estatura: "1,77 cm",
      rol: "Fantasma de la salsa",
      video: "raizuraa.mp4"
    },
    {
      id: 3,
      nombre: "Abuela",
      descripcion: "Guia materno del personaje principal",
      imagen: "abuela.jpeg",
      frase: "Confia en tu ritmo",
      biografia: "Es la abuela de Raizura, un pilar fundamental en su desarrollo...",
      años: "60",
      estatura: "1,60 cm",
      rol: "Guia espiritual",
      video: "raizuraa.mp4"
    },
    {
      id: 4,
      nombre: "Reportero",
      descripcion: "Anunciante de las noticias",
      imagen: "reportero.jpeg",
      frase: "En novedades actuales",
      biografia: "Un periodista que busca estar al dia de todas las noticias...",
      años: "34",
      estatura: "1,77 cm",
      rol: "Periodista",
      video: "raizuraa.mp4"
    },
    {
      id: 5,
      nombre: "Constructores",
      descripcion: "Encargados de destruir el museo",
      imagen: "trabajadores.jpeg",
      frase: "¡A trabajar!",
      biografia: "Trabajadores enamorados de su oficio...",
      años: "30",
      estatura: "1,80 cm",
      rol: "Trabajadores",
      video: "raizuraa.mp4"
    }
  ]
};

console.log("BD cargada correctamente", comic);

comic.capitulos = [
  {
    id: 1,
    titulo: "Capítulo 1: El eco olvidado",
    descripcion: "Raizura escucha una noticia que cambiará su destino.",
    descripcionLarga: `En el año 2185, la música en vivo era un recuerdo lejano.
Las melodías eran producidas por inteligencia artificial al instante, y las viejas bandas quedaban relegadas a archivos polvorientos en la red.

En un rincón olvidado de la ciudad, resistía un edificio antiguo: el Museo de Fruko y sus Tesos.
Alguna vez fue un lugar de orgullo, pero ahora estaba casi vacío, y en dos semanas sería demolido para construir un complejo de apartamentos de lujo.

Raizura, un joven de 17 años, escuchó por casualidad a su abuela decir que en su familia “corría un ritmo especial, uno que hacía mover hasta las piedras”.`,
    imagen: "cap1.png",
    video: "ciudad.mp4",
    duracion: "5:20"
  },
  {
    id: 2,
    titulo: "Capítulo 2: El fantasma de la sabrosura",
    descripcion: "El museo abandonado guarda un secreto.",
    descripcionLarga: `Entonces lo vio.
Frente a él, una figura translúcida con traje brillante, gafas oscuras y una sonrisa amplia lo observaba.

No dijo su nombre, pero su voz retumbaba con autoridad y calidez.
Le habló de un tiempo en el que la música no solo se escuchaba, sino que se sentía en la piel.
Dijo que la gente había olvidado bailar, reír y celebrar juntos, y que su misión había sido siempre mantener vivo ese espíritu.

Ahora, atrapado en aquel museo, temía desaparecer junto con el edificio y con el último eco de su música.`,
    imagen: "cap2.png",
    video: "ciudad.mp4",
    duracion: "6:10"
  },
  {
    id: 3,
    titulo: "Capítulo 3: El primer y último concierto",
    descripcion: "Fruko revela su historia y su legado.",
    descripcionLarga: `El día antes de la demolición, Raizura se detuvo frente al museo observando a los obreros instalar las máquinas.
Sintió una punzada en el pecho. Esa música no podía morir allí, enterrada bajo concreto.

Sin decir nada, caminó hasta la plaza del pueblo con el piano viejo que había encontrado y lo colocó en medio de la calle.
Comenzó a tocar y cantar, primero tímidamente, luego con más fuerza, hasta que su voz llenó cada rincón.

Las personas que pasaban se detenían, curiosas, y poco a poco comenzaron a moverse al ritmo, aplaudir y bailar.

En lo alto del museo, tras una ventana polvorienta, el fantasma observaba.
Y entonces, un destello de memoria lo atravesó.

Vio en un parpadeo su juventud:
El día que entró a trabajar a Discos Fuentes, cargando cajas de vinilos.
Las primeras sesiones en estudio, nervioso, pero con hambre de música.`,
    imagen: "cap3.png",
    video: "ciudad.mp4",
    duracion: "7:00"
  }
]; 
