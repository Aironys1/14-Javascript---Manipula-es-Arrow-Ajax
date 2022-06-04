let pessoa = {
    nome: "Aironys",
    sobrenome:"Garrido de Macedo",
    idade:31,
    social:{
        facebook:'aironysgarrido',
        instagram:{
            url:'@aironn$',
            seguidores:2500
        }
    },

    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);


console.log(pessoa.nomeCompleto());





/*let {facebook, instagram} = pessoa.social;
console.log(facebook, instagram);*/


/*let {nome, idade, social:{instagram:{url:instagram, seguidores}}} = pessoa;*/


/*
let {nome, idade, social:{instagram}} = pessoa;

console.log(nome, idade, instagram);*/


function pegarNomeCompleto(obj){
    return obj.nome + `${obj.sobrenome}`;


}

  console.log( pegarNomeCompleto(pessoa));

