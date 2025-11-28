import { comic } from "./bd.jd";
const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))

const miPersoanje = comocc.personajes.find(p => p.idd === id)
console.log("El personaje encontrado es:", miPersoanje)


