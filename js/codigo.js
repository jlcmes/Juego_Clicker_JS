// Defino variable de contador que al principio vale 0
var contador = 0;

function incrementarContador(){
    //Incremento el contador
    contador++;

    //Actualizo los puntos y muestro el botonReset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "block";
}

function resetearContador() {
    //Pongo el contador a 0
    contador = 0;

    //Actualizo los puntos y oculto botonReset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "none";
}
