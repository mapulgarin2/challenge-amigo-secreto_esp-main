// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear una lista donde se ingresen los nombre
let amigos = [];
//lugar donde se ve la lista de los nombres ingresados
let listaOrdenada = document.getElementById("listaAmigos");
//lugar donde se muestra el mensaje del amigo secxreto seleccionado
let mensajeAmigoSecreto = document.getElementById("resultado")
//Campo de tesxto donde se ingresan los nombres
let campoTexto = document.getElementById("amigo");
//boton que escoge el nombre del amigo secreto aleatoriamente.
let botonSortearAmigo = document.getElementById("boton_2");

//Funcion para agregar los nombres en una lista.
function agregarAmigo(){
    //Recoge la informacion en el campo de texto
    let nombre = document.getElementById("amigo").value;
    //Pregunta si el campo de texto esta vacio y si no continua en el else
    if (nombre == "") {
        alert("Po favor ingrese un nombre valido");//Mensaje si el campo de texto esta vacio
    }else{        
        amigos.push(nombre);//Agrega los nombres a la lista
        actualizarListaAmigos();//Funcio que actualiza la lista
        campoTexto.focus();//Mantiene el cursor en la caja de texto         
    }
}

//Funcion para actualizar la lista de los amigos
function actualizarListaAmigos(){
    //Limpia el campo de texto
    nombre = document.getElementById("amigo").value = "";
    //Limpia la lista 
    listaOrdenada.innerHTML = '';
    //LLama a la funcion
    mostrarListaOrdenada();
    //Habilita el boton Sortear amigo
    botonSortearAmigo.removeAttribute("disabled");    
    //Reccore la lista y agrega los nombres
    agregaItemListaOrdenada()
}

//Funcion que recorre la lista y agrega los nombres
function agregaItemListaOrdenada(){
    amigos.forEach(nombre =>{
        let li = document.createElement("li");//Crea un elemento li
        li.textContent = nombre//Asigna un nombre al cada elemento li
        listaOrdenada.appendChild(li);//Adiciona cada li a la lista  
        
    });
}

//funcion para sortear amigo secreto
function sortearAmigo(){
    //Informa que se necesitanmas de dos nombres
    if (amigos.length <= 1){
        alert('Ingrese otro nombre valido');        
    }else{
        // cantidad maxima de indices en la lista
        let maximoIndice = amigos.length - 1;
        //Genera el numero aleatorio qeu corresponde al indice en la lista
        let indicegenerado = Math.floor(Math.random()*(maximoIndice + 1));    
        //Mensaje que se muestra en pantallla sobre el amigo secreto seleccionado  
        mensajeAmigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigos[indicegenerado]}`;
        //LLama la funcion
        ocultarListaOrdenada();
        // limpia la lista
        amigos = [];
        //Desabilita el boton Sortear amigo
        botonSortearAmigo.setAttribute("disabled",true);
    }
}

//funcion que aculta la lista de amigos y aparece el mensaje del resultado del sorteo.
function ocultarListaOrdenada(){
    //Oculta la lista en la pantalla
    listaOrdenada.style.display= 'none';
    //Muestra el mensaje en la pantalla
    mensajeAmigoSecreto.style.display= "block";
}

//funcion que aparece la lista de los amigos y desaparece el mensaje del sorteo.
function mostrarListaOrdenada(){
    //Muestra la lista en la pantalla
    listaOrdenada.style.display= 'block';
    //Oculta el mensaje en la pantalla
    mensajeAmigoSecreto.style.display= "none";
}