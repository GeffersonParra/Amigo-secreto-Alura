var input = document.getElementById("amigo");
var listaAmigos = document.getElementById("listaAmigos");
var resultado = document.getElementById("resultado");
var amigos = [];
function agregarAmigo() {
    if (input.value == "" || input.value == null) {
        alert("Debes ingresar un nombre")
    } else {
        amigos.push(input.value);
        input.value = "";
        listaAmigos.textContent = amigos.join(", ");
    }
}

function sortearAmigo(){
    var selected = parseInt(Math.random() * amigos.length)
    resultado.textContent = `El amigo secreto seleccionado es: ${amigos[selected]}`;
}