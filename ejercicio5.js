// Dibujar un cuadrado hueco con asteriscos

function dibujarCuadrado(num){
    let cua = '';
    for (let i = 0; i < num; i++){
        cua += ' *';
    }
    
    cua += '\n';
    for (let j = 2; j < num; j++) {
        cua += ' *';
        for (let k = 2; k < num; k++) {
            cua += '  '
        }
        cua += ' * \n';
    }

    for (let i = 1; i <= num; i++){
        cua += ' *';
    }

    console.log(cua);

}
 



dibujarCuadrado(6);