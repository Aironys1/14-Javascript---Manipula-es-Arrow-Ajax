let nome = "Aironys Garrido de Macedo";
let resultado = profissao = "Desenvolvedor da Web";


console.log("A quantidade de letras na palavra é:"+nome.length);
console.log("A quantidade de letras na palavra é:"+ resultado.length);
 
console.log(resultado.indexOf("Web"));  // IndexOf é para localizar a posição da palavra. Podemos achar palavras, letras, números e espaços, de acordo com suas posições.
console.log(resultado.indexOf("Desenvolvedor"));

if(nome.indexOf("Macedo") && (nome.indexOf("Aironys")) > -1){
    console.log("- Achou !!!");
}else{
    console.log("Não Achou !!!");
}

let empresa = "Aironn Dev";
let localizacao = "São Paulo";
let fundacao = "20/04/2022";
let resultado2 = " ";


console.log(fundacao);
resultado2 = empresa.indexOf("Dev");
console.log(resultado2);

console.log(localizacao.indexOf("u")); 
// Letra "u", posição 6