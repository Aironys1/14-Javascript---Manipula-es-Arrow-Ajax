let nome ="Aironys Garrido de Macedo";
let resultado = nome.replace('Aironys','Ans')
console.log(resultado);

// O replace ele paga uma palavra e vc substitui por outra.

let nome2 = "Eu gosto de x";
let resultado2 = nome2.replace(' x',' Estudar');
console.log(resultado2); // Eu substituu uma parte da string por outro texto.


let nome3 = "Vamos deixar as letra Maiusculas";
let resultado3 = nome3.toUpperCase();
console.log(resultado3); // Função para deixar a letra Maiusculas


let nome4 = "Vamos deixar as letra Minusculas";
let resultado4 = nome4.toLowerCase();
console.log(resultado4); // Função para deixar a letra Maiusculas


let nome5 = "Vamos concatenar";
let resultado5 = nome5.concat(': ','Macedo');
console.log(resultado5); // Função para concatenar


let nome6 = "Vamos   remover   espaços";
let resultado6 = nome6.trim().length;
console.log("Removendo "+resultado6); // Removendo espaços das palavras

let nome7 = "SelecionAndo o valor de acordo com sua posição";
let resultado7 = nome7.charAt('8');
console.log(resultado7);   //Como saber o valor  na sua posição, parecido como um Array. 



let nome8 = "Dividir no meio com o split";
let resultado8 = nome8.split(' ');
console.log(resultado8); // Essa função divide todos os valores, por palavras, letras, textos. Da forma que vc específicar. 