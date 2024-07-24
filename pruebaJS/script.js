
var botonCambiar = document.getElementById("botonCambiar");

botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});

var botonDesaparece = document.getElementById("botonDesaparece");

botonDesaparece.addEventListener("click", function() {
    this.style.display = "none";
});


var meGustaGato = document.getElementById("meGustaGato");

var contadorGato = 0;

meGustaGato.addEventListener("click", function() {
    contadorGato++;
    meGustaGato.textContent = contadorGato + " me gusta";
    alert("Gato Atigrado me gusta");

});

var meGustaGolden = document.getElementById("meGustaGolden");
var contadorGolden = 0;

meGustaGolden.addEventListener("click", function() {
    contadorGolden++;
    meGustaGolden.textContent = contadorGolden + " me gusta";
    alert("Golden Retriever me gusta");
});