let lista = [
    {id:1, nome:"Alessandro", sobrenome:"Santos", idade:35},
    {id:2, nome:"Maria", sobrenome:"Silva", idade:55},
    {id:3, nome:"Marcos", sobrenome:"Ferreira", idade:45},
    
];

let pessoa = lista.find(function(item){
    return (item.sobrenome === "Ferreira") ? true : false;
})


let res = pessoa;
console.log(res);