// Script para funcionamento da barra de navegação lateral em smartphones

function abriMenu(){

    let abrirMenu = document.getElementById('barra-menu')

    if (abrirMenu.style.width == "0px"){
        abrirMenu.style.width = "170px";
    }else{
        abrirMenu.style.width = "0px"
    }
}