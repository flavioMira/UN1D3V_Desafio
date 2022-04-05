function getCupon(nome) {
    var mensage = "<div id='cupon-text'><h1>Uhuul!!! Ótima escolha. O <span class='destaque'>" + nome + "</span> é um dos mais pedidos! <br> Pegue agora mesmo o seu código promocional!!</h1></div>";
    var cuponCode = "<div id='cupon-code'><div id='cupon-id'></div></div>";
    var buttonExit = "<button type='button' onclick='fechar()'><img src='img/closeIcon.png'></button>";
    var elemento = document.getElementById("cupons-wrapper");
    elemento.style.height = 250 + 'px';
    elemento.innerHTML = mensage + cuponCode + buttonExit;
    codigo(nome);
}

function codigo(nome) {
    var cuponID = document.getElementById("cupon-id");
    var codigo;
        switch (nome) {
            case "BigDev":
                codigo = "#199BD";
                break;
            case "DevChiken":
                codigo = "#990DC";
                break;
            case "DevCheddar":
                codigo = "#199DC";
                break;
            case "DevTasty":
                codigo = "#249DT";
                break;
            case "DevNífico":
                codigo = "#199DN";
                break;
            case "DevSquad":
                codigo = "#199DS";
        
            default:
                codigo: "#ERROR";
                break;
        }
        
    cuponID.innerHTML =  codigo;
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
    elementoFechar.innerHTML = "";
    
    lista = document.getElementsByTagName("li");
    for(i=0;i<lista.length;i++){      
        lista[i].classList.remove("ativo");      
        lista[i].classList.add("inativo");
    }
}