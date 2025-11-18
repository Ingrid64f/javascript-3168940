const info = document.querySelector(".info")

console.log(infoComic)

info.innerHTML = `

<h1>${comic.nombreComic}</h1>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
<a>${comic.verAhora}</a >

`
console.log(comic.personajes)

comic.personajes.forEach(char => {

const div = document.createElement("div")
div.classList.add("personaje")


    console.log(char.nombre)
    document.body.innerHTML = `<img src="${char.imagen}" width"200">`


}); 

