var i = 0;
var contador = document.getElementById('contador');

const mostrarContador = ()=> {
    i++;
    contador.innerHTML = "Has pulsado el botón " + i;

    if(i <= 1) {
        contador.innerHTML += " vez";
    } else {
        contador.innerHTML += " veces";
    }
}

const reiniciarContador = ()=> {
    i = 0;
    contador = document.getElementById('contador');
    contador.innerHTML = "";  
}