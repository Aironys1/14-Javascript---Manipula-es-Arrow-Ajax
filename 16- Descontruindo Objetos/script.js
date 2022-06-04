let pessoa = {
    nome: "Aironys",
    sobrenome:"Garrido de Macedo",
    idade:31,
    social:{
        facebook:'aironysgarrido',
        instagram:'garrrido_aironn'
    },

    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);


console.log(pessoa.nomeCompleto());



let{nome:pessoaNome, sobrenome, idade} = pessoa;

console.log(pessoaNome, sobrenome, idade);
