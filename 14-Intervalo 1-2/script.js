let timer;


function rodar() {
    timer = setTimeout(function() {
    document.querySelector('.relogio').innerHTML = "Rodou!!!"
}, 2000);
}

function parar(){
    clearTimeout(timer);
}