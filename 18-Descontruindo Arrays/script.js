/*let info = ['Aironys Garrido', 'Macedo', '@aironn','aironys1'];



let [nomeCompleto, , email] = info;


console.log(nomeCompleto, email);*/


/*let [nome, sobrenome, idade=31] = ["Garrido", "Macedo"];

console.log(nome, sobrenome, idade);*/



/*/
function criar(){

    return [1,2,3];

}
criar();

console.log(criar);

*/

function criar(){
    let a = [1,2,3];


    return a;

}



let [a,b,c] = criar();

console.log(a,b,c)
