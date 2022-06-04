let telefone = '11949586952';
let digitos = telefone.slice(7,11);
let mascara = digitos.padStart(10,'*') // Cobrindo o ínicio dos números; 

let numeros = '95749-';

console.log(numeros.padEnd(9,'*'));

console.log(telefone)
console.log(digitos);
console.log(mascara);
