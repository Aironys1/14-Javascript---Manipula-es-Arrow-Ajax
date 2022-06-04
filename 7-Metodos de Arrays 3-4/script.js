let lista = [45,4,9,16,25];
let lista2 = [];
/*
lista2 = lista.map(function(item){
return item *2;

});
*/

/*
for(let i in lista){
    lista2.push(lista[i] + 100);
}
*/

/*
lista2 = lista.filter(function(item){
    if(item<30){
        return true;
    }else{
        return false;
    }
});
*/
/*
lista2 = lista.every(function(item){
    if(item<40){
        return true;
    }else{
        return false;
    }
});

*/

lista2 = lista.some(function(item){
    if(item<40){
        return true;
    }else{
        return false;
    }
});



document.write("Resultado:"+lista2);

let res = lista2;
console.log(res);

