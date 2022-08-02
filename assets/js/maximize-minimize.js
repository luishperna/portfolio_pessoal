// Script para funcionamento dos botões de minimizar e maximizar do terminal - sobre mim

document.getElementById('minimizar').addEventListener('click', 
function () {
    document.getElementById('text-sobre-mim').style.visibility='hidden';
})

document.getElementById('maximizar').addEventListener('click', 
function () {
    document.getElementById('text-sobre-mim').style.visibility='visible';
})