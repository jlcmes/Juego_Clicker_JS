// Defino variables para el contador y el tiempo
var contador;
var tiempo;
var enJuego; 
resetearContador(); // Resetear todo al principio. El juego esta parado hasta hacer el primer click

//Crea la cuenta atrás, cada segundo revisa si está en juego y si queda tiempo o no.
var cuentaAtras = setInterval(function(){
     
    console.log(tiempo); //Para mostrar por consola el valor del tiempo

    //Si el juego empezó...
    if (enJuego == true)
    {
        //Si ya se pasó el tiempo...
        if (tiempo <= 0){

            //Mostramos el resultado al usuario
            alert("Juego terminado, le hiciste "+contador+" clicks.");    
            
            //Reinicio contadores y variables de estado
            resetearContador(); 
        }
        else
        {
            //Actualizo el tiempo y el crono
            document.getElementById("crono").innerHTML = tiempo;
            tiempo--;
        }
    }

}, 1000); //Revisa el tiempo cada segundo (1000ms)

function incrementarContador(){
    //Incremento el contador
    contador++;

    //Actualizo los puntos
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("crono").innerHTML = tiempo;
    document.getElementById("botonReset").style.display = "block";

    if (enJuego == false) enJuego = true; //Empieza el juego!
}

function resetearContador(){
    //Reseteamos todos los contadores
    contador = 0;
    tiempo = 10;
    enJuego = false;

    //Refrescamos los valores en pantalla
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("crono").innerHTML = tiempo;
    document.getElementById("botonReset").style.display = "none";
}
