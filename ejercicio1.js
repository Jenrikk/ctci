function palindromo(texto){
    let invertido = texto.split('').reverse().join('');
    return invertido == texto;
   
    
}

console.log(palindromo('oso'));