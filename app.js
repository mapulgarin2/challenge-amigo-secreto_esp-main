// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear una lista donde se ingresen los nombre
let amigos = [];
let listaOrdenada = document.getElementById("listaAmigos");
let mensajeAmigoSecreto = document.getElementById("resultado");
//Funcion para agregar los nombres en una lista.
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;;
    if (nombre == "") {
        alert("Po favor ingrese un nombre valido");
    }else{
        amigos.push(nombre);
        actualizarListaAmigos();
        console.log(amigos);      
    }
}
//Funcion para actualizar la lista de los amigos
function actualizarListaAmigos(){
    nombre = document.getElementById("amigo").value = "";
    listaOrdenada.innerHTML = '';
    
    amigos.forEach(nombre =>{
        let li = document.createElement("li");
        li.textContent = nombre
        listaOrdenada.appendChild(li); 
        
    });    
}

//funcion para sortear amigo secreto

function sortearAmigo(){
    let maximoIndice = amigos.length - 1;
    let indicegenerado = Math.floor(Math.random()*(maximoIndice + 1));
    console.log(indicegenerado);
    console.log(amigos[indicegenerado]);
    mensajeAmigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigos[indicegenerado]}`;
    listaOrdenada.setAttribute('disable',true);
}