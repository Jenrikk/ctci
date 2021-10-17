//dar la vuelta a una palabra SOLO usando estructuras de control

function invertir(texto){
    let invertido = "";

    for (let letra of texto) {
        invertido = letra + invertido;
    }

    return invertido;
}

console.log(invertir('Enrique'));