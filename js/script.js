function getCupon(nome) {
    var mensage = "<div id='cupon-text'><h1>Uhuul!!! Ótima escolha. O " + nome + " é um dos mais pedidos! <br> Pegue agora mesmo o seu código promocional!!</h1><div>";
    var cuponCode = "<div id='cupon-code'></div>";
    var elemento = document.getElementById("cupons-wrapper");
    elemento.style.height = 250 + 'px';
    elemento.innerHTML = mensage + cuponCode;
}

function makeActive(tag){
    lista = document.getElementsByTagName("li");
    for(i=0;i<lista.length;i++){      
        lista[i].style.background = "#fed8b5";
    }
    tag.style.background = "#FE9738";
}