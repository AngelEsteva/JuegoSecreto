let numeroSecreto = 0;
let intentos = 0;
let NumeroMaximo = 3;
let listaNumerosSorteados = [];

condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    //"Juego del número secreto actualizado"
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log("numero secreto: " + numeroSecreto);
    console.log("intento: " + intentos);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste al numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', "El numero secreto es menor");
        } else {
            asignarTextoElemento('p', "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "¡Juego del número secreto!");
    asignarTextoElemento('p', "Indica un numero del 1 al "+ NumeroMaximo);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    listaNumerosSorteados.sort();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return;
}

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    console.log("numero secreto: " + numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    console.log("***Numero secreto generado: "+ numeroGenerado+" ***");
    console.log("***Lista: "+ listaNumerosSorteados+" ***");
    
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        if(listaNumerosSorteados.length < NumeroMaximo){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.splice(0,NumeroMaximo);
            return generarNumeroSecreto();
        }
      
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

