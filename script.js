const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-musica");
const textoFaixa = document.getElementById("faixa");
const proximaMusica = document.getElementById("proximo");
const musicaAnterior = document.getElementById("anterior");
const qtdMusica = 13;

// Array com os nomes das faixas conforme o seu print
const nomesFaixas = [
    "PRINCESS OF POWER",
    "BUTTERFLY",
    "CUNTISSIMO",
    "ROLLERCOASTER",
    "CUPID'S GIRL",
    "METALLIC STALLION",
    "JE NE SAIS QUOI",
    "DIGITAL FANTASY",
    "EVERYBODY KNOWS I'M ...",
    "HELLO KITTY",
    "I <3 YOU",
    "ADULT GIRL",
    "FINAL BOSS"
];

let musica = 1;

function atualizarTituloFaixa() {
    textoFaixa.innerText = nomesFaixas[musica - 1];
}

function playFeixa() {
    if (audio.paused) {
        audio.play();
        botaoPlayPause.classList.add("tocando");
    } else {
        audio.pause();
        botaoPlayPause.classList.remove("tocando");
    }
}

function proxima() {
    audio.pause();
    if (musica < qtdMusica) {
        musica = musica + 1;
    } else {
        musica = 1;
    }
    audio.src = "./audios/" + musica + ".mp3";
    audio.play();
    atualizarTituloFaixa();
}

function anterior() {
    audio.pause();
    if (musica === 1) {
        musica = qtdMusica;
    } else {
        musica = musica - 1;
    }
    audio.src = "./audios/" + musica + ".mp3";
    audio.play();
    atualizarTituloFaixa();
}

botaoPlayPause.addEventListener("click", playFeixa);
proximaMusica.addEventListener("click", proxima);
musicaAnterior.addEventListener("click", anterior);
