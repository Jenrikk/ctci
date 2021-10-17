// Saber cuántas veces se repite cada palabra de un array

function contar(array){
    let lowered = array.map(word => word.toLowerCase());
    let map = {};

    for(let p of lowered){
        if (map[p]) {
            map[p]++;             
        }else{
            map[p] = 1;
        }
    }
    return map;
    

}


let array_palabras = ['hola', 'que', 'que', 'Hola', 'cOmo', 'como', 'estas', 'hoy'];

console.log(contar(array_palabras));
