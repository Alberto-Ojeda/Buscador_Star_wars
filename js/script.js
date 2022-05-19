const characters = JSON.parse(file)

console.log(characters.results)

function boton_buscar() {
  let personaje = buscar_personaje()
  let iniciales = "";
  for(let i=0; i<2; i++){
    iniciales=iniciales+personaje.name[i];
  }
  console.log(iniciales);
  let section= document.getElementById("card_"+iniciales);
      section.style.display='block';
  let card = document.getElementById("card_personaje"+iniciales)
  
  card.innerHTML = `
    <p>Nombre: ${personaje.name}</p>
    <p>Año de nacimiento: ${personaje.birth_year}</p>
    <p>Género: ${personaje.gender}</p>
  `
}

function personajsinAparecer(){
  let nombre_personaje = document.getElementById("nombre_personaje").value
  let sinAparecer=[];
  let iniciales = "";
  // console.log(nombre_personaje)
  
  for(let i=0; i<characters.results.length;i++) {
    if(characters.results[i].name != nombre_personaje) {
      sinAparecer.push(characters.results[i].name);
      
    }
  }
  return sinAparecer;
}

function borrar(){
  let sinAparecer2=personajsinAparecer();
  let nombre_personaje = document.getElementById("nombre_personaje").value
  let iniciales2="";
  let iniciales3="";
  if(nombre_personaje!=""){
    for(let i=0; i<sinAparecer2.length; i++){
      iniciales2=sinAparecer2[i];
      console.log(iniciales2)
      for(let i=0; i<2; i++){
        iniciales3=iniciales3+iniciales2[i];
      }
      console.log(iniciales3)     
      let section= document.getElementById("card_"+iniciales3);
      section.style.display='none';
      iniciales3="";
    }
    }

  

  
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

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue=inputBox.value;
    listData="<li>${userValue}</li>"
  }else{
    listData=list.join("");
  }
  suggBox.innerHTML=listData;
}

