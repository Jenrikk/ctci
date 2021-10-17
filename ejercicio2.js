// Saber cuántas veces se repite 1 palabra en particular

function contar(frase, busqueda){
    let frase_limpia = frase.toLowerCase().replace(/[!¡¿?.,;:-]/gi, '');
    let resultado;

    if (frase_limpia.includes(busqueda)) {
        
        let palabras = frase_limpia.split(' ');
        let map = {};

        for(let p of palabras){
            if (map[p]) {
                map[p]++;             
            }else{
                map[p] = 1;
            }
        }
        resultado = map[busqueda];

    }else{
        resultado = 0;
    }

    return resultado;

}


let fraseYpalabra = "hola, soy soy la palabra: palabra, palabra";
let busqueda = "soy";

console.log('numero de coincidencias de: ' , busqueda, contar(fraseYpalabra, busqueda));