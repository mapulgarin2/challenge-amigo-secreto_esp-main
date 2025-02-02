// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear una lista donde se ingresen los nombre
let amigos = [];
let listaOrdenada = document.getElementById("listaAmigos");



function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;;
    if (nombre == "") {
        alert("Po favor ingrese un nombre valido");
    }else{
        amigos.push(nombre);
        nombre = document.getElementById("amigo").value = "";
        listaOrdenada.innerHTML = '';
        
        amigos.forEach(nombre =>{
            let li = document.createElement("li");
            li.textContent = nombre
            listaOrdenada.appendChild(li); 
            
        });
        console.log(amigos);
          

        
    }
}
agregarAmigo();