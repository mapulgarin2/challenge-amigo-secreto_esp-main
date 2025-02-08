// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear una lista donde se ingresen los nombre
let amigos = [];
let listaOrdenada = document.getElementById("listaAmigos");
let mensajeAmigoSecreto = document.getElementById("resultado")
let campoTexto = document.getElementById("amigo");
//Funcion para agregar los nombres en una lista.
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;;
    if (nombre == "") {
        alert("Po favor ingrese un nombre valido");
    }else{
        amigos.push(nombre);
        actualizarListaAmigos();
        //
        campoTexto.focus();
        console.log(amigos);      
    }
}
//Funcion para actualizar la lista de los amigos
function actualizarListaAmigos(){
    nombre = document.getElementById("amigo").value = "";
    listaOrdenada.innerHTML = '';
    mostrarListaOrdenada();
    
    
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
    ocultarListaOrdenada();
    // limpia la lista
    amigos = [];
}

//funcion que aculta la lista de amigos y aparece el mensaje del resultado del sorteo.
function ocultarListaOrdenada(){
    listaOrdenada.style.display= 'none';
    mensajeAmigoSecreto.style.display= "block";
}

//funcion que aparece la lista de los amigos y desaparece el mensaje del sorteo.
function mostrarListaOrdenada(){
    listaOrdenada.style.display= 'block';
    mensajeAmigoSecreto.style.display= "none";
}