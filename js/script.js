const characters = JSON.parse(file)

console.log(characters.results)

function boton_buscar() {
  let personaje = buscar_personaje()
  let card = document.getElementById("card_personaje")
  
  card.innerHTML = `
    <p>Nombre: ${personaje.name}</p>
    <p>Año de nacimiento: ${personaje.birth_year}</p>
    <p>Género: ${personaje.gender}</p>
  `
}

function buscar_personaje() {
  let nombre_personaje = document.getElementById("nombre_personaje").value
  // console.log(nombre_personaje)
  
  for(let i=0; i<characters.results.length;i++) {
    if(characters.results[i].name == nombre_personaje) {
      return characters.results[i]
    }
  }
}