
export let comic = {
  nombreComic: "El Eco Olvidado",
  numeroEpisodios: 3,
  genero: "Fantasía, drama",
  sinopsis:
    "Un joven de 17 años decide ir a un museo abandonado donde encuentra un peculiar mentor del pasado.",
  autores: ["Santiago", "Ingrid", "Luis"],
  portadaComic: "./img/portada.jpg",
  year: 2025,

  personajes: [
    {
      id: 1,
      nombre: "Fruko Ernesto Estrada",
      descripcion: "Es el guía espiritual de Raizura.",
      imagen: "Generated Image November 12, 2025 - 4_35PM.png",
    },
    { 
      id: 2,
      nombre: "Reportero",
      descripcion: "Encargado de anunciar y narrar los sucesos.",
      imagen: "Generated Image November 12, 2025 - 4_35PM (3).png",
    },
    {
      id: 3,
      nombre: "Abuela",
      descripcion: "Lleva el legado musical familiar.",
      imagen: "Generated Image November 12, 2025 - 4_35PM (1).png",
    },
    {
      id: 4,
      nombre: "Constructores",
      descripcion: "Agentes que buscan demoler el museo.",
      imagen: "Generated Image November 12, 2025 - 4_44PM.png",
    },
    {
      id: 5,
      nombre: "Raizura",
      descripcion: "Joven de 17 años amante de la música.",
      imagen: "Generated Image November 12, 2025 - 4_35PM.png",
    }
  ],

  capitulos: [
    {
      id: 1,
      nombre: "El eco olvidado",
      personajes: ["Raizura", "Abuela", "Reportero", "Constructores"],
      portada: "./img/portadas/cap1.jpg",
      descripcion:
        "Conocemos a Raizura, un joven lleno de curiosidad que decide investigar un museo de música.",
    },
    {
      id: 2,
      nombre: "El fantasma de la sabrosura",
      personajes: ["Raizura", "Fruko"],
      portada: "./img/portadas/cap2.jpg",
      descripcion:
        "Raizura conoce a Fruko, un fantasma que decide ayudarlo a revivir su música.",
    },
    {
      id: 3,
      nombre: "El primer y último concierto",
      personajes: ["Raizura", "Fruko", "Abuela", "Constructores", "Ciudadanos"],
      portada: "./img/portadas/cap3.jpg",
      descripcion:
        "Raizura decide hacer un concierto para evitar una tragedia.",
    }
  ]
};
