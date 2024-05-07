let botao = document.querySelectorAll(".botao");

//Botões
let botaoPedra = document.querySelector("#botao-pedra")
let botaoPapel = document.querySelector("#botao-papel")
let botaoTesoura = document.querySelector("#botao-tesoura")

//Nossas Imagens
let imgNossaPedra = document.querySelector("#pedra")
let imgNossoPapel = document.querySelector("#papel")
let imgNossaTesoura = document.querySelector("#tesoura")

let imagensNossa = [imgNossaPedra, imgNossoPapel, imgNossaTesoura]

//Imagens Inimigas
let imgEnemyPedra = document.querySelector("#enemy-pedra");
let imgEnemyTesoura = document.querySelector("#enemy-tesoura");
let imgEnemyPapel = document.querySelector("#enemy-papel");

botao.forEach(element => {
    element.addEventListener("click", () => {
        escolherArma(element.id);
        inimigo();
        checarQuemGanhou();
    })
})

function escolherArma(id) {
    if (id == "botao-pedra") {
        imgNossaPedra.style.display = "flex";
        imgNossoPapel.style.display = "none";
        imgNossaTesoura.style.display = "none";
    }
    if (id == "botao-papel") {
        imgNossoPapel.style.display = "flex";
        imgNossaPedra.style.display = "none";
        imgNossaTesoura.style.display = "none";
    }
    if (id == "botao-tesoura") {
        imgNossaTesoura.style.display = "flex";
        imgNossaPedra.style.display = "none";
        imgNossoPapel.style.display = "none";
    }
}

function inimigo() {
    let numero = parseInt((Math.random() * 3) + 1) 
    if (numero == 1) {
        imgEnemyPedra.style.display = "flex";
        imgEnemyPapel.style.display = "none";
        imgEnemyTesoura.style.display = "none";
    }
    if (numero == 2) {
        imgEnemyPapel.style.display = "flex";
        imgEnemyPedra.style.display = "none";
        imgEnemyTesoura.style.display = "none";
    }
    if (numero == 3) {
        imgEnemyTesoura.style.display = "flex";
        imgEnemyPapel.style.display = "none";
        imgEnemyPedra.style.display = "none";
    }
}

function checarQuemGanhou() {
    if ((imgNossaPedra.style.display == imgEnemyPedra.style.display && imgNossaPedra.style.display == "flex") || (imgNossoPapel.style.display == imgEnemyPapel.style.display && imgNossoPapel.style.display == "flex") || (imgNossaTesoura.style.display == imgEnemyTesoura.style.display && imgNossaTesoura.style.display == "flex")) {
        alert("Você empatou burrão ^-^)")   
    }
    if ((imgNossaPedra.style.display == imgEnemyPapel.style.display && imgNossaPedra.style.display == "flex") || (imgNossoPapel.style.display == imgEnemyTesoura.style.display && imgNossoPapel.style.display == "flex") || (imgNossaTesoura.style.display == imgEnemyPedra.style.display && imgNossaTesoura.style.display == "flex")) {
        alert("Você perdeu :(((((((((((")
    }
    if ((imgNossaPedra.style.display == imgEnemyTesoura.style.display && imgNossaPedra.style.display == "flex") || (imgNossoPapel.style.display == imgEnemyPedra.style.display && imgNossoPapel.style.display == "flex") || (imgNossaTesoura.style.display == imgEnemyPapel.style.display && imgNossaTesoura.style.display == "flex")) {
        alert("Parabéns ´-´)")
    }
}