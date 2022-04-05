function getCupon(nome) {
    var mensage = "<div id='cupon-text'><h1>Uhuul!!! Ótima escolha. O <span class='destaque'>" + nome + "</span> é um dos mais pedidos! <br> Pegue agora mesmo o seu código promocional!!</h1><div>";
    var cuponCode = "<div id='cupon-code'></div>";
    var buttonExit = "<button type='button' onclick='fechar()'><img src='img/closeIcon.png'></button>";
    var elemento = document.getElementById("cupons-wrapper");
    elemento.style.height = 250 + 'px';
    elemento.innerHTML = mensage + cuponCode + buttonExit;
}

function makeActive(tag){
    lista = document.getElementsByTagName("li");
    for(i=0;i<lista.length;i++){      
        lista[i].classList.remove("ativo");      
        lista[i].classList.add("inativo");
    }
    tag.classList.remove("inativo");
    tag.classList.add("ativo");
}

function fechar(){
    var elementoFechar = document.getElementById("cupons-wrapper");
    elementoFechar.style.height = 0 + 'px';
    elementoFechar.style.transition = "height 1s";
    
    lista = document.getElementsByTagName("li");
    for(i=0;i<lista.length;i++){      
        lista[i].classList.remove("ativo");      
        lista[i].classList.add("inativo");
    }
}