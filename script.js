let counter = 0;
function contadorClick(){
    counter++;
    document.getElementById("show").innerHTML = counter;
    if (counter > 0) {
        document.getElementById("resetBtn").style.display = "block";
    } 
}

function resetCounter() {
    counter = '';
    document.getElementById("show").innerHTML = counter;
    document.getElementById("resetBtn").style.display = "none";
}
