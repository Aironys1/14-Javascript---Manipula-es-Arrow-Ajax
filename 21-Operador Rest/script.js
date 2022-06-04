 
 /*
 function adicionar(...numeros){
    console.log(numeros);
    
 }
 adicionar(10,25,36,52,10,05);




 function adcionar2(...nomes){
    console.log(nomes);
 }

 adcionar2('Aironys','Maria', 'Santos', "Salvador",'Garrido');

 */



function adcionar(nomes, ...novosNomes){
   let novoConjunto = [
      ...nomes,
      ...novosNomes
   ];
   return novoConjunto;
}

let nomes = ["Aironys", "Maria"];

let outros = adcionar(nomes, "Fernando", "Viviane" );

console.log(outros);


