var Do = new Audio("1Do.wav");
var Re = new Audio("2Re.wav");
var Mi = new Audio("3Mi.wav");
var Fa = new Audio("4Fa.wav");
var Sol = new Audio("5Sol.wav");
var La = new Audio("6La.wav");
var Si = new Audio("7Si.wav");
var Doo = new Audio("8Doo.wav");

var playSound = audio => {
    var clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8),400)
    setTimeout(() => (clone.volume = 0.6),800)
    setTimeout(() => (clone.volume = 0.4),1200)
    setTimeout(() => (clone.volume = 0.2),1600)
    setTimeout(() => (clone.volume = 0),2000)
};

// Do
var DoKey = document.querySelector(".do-key");
var playDo = () => {
    playSound(Do);
    DoKey.classList.add("active");
    setTimeout(() => DoKey.classList.remove("active"),200);
};
DoKey.addEventListener("click", playDo);

// Re
var ReKey = document.querySelector(".re-key");
var playRe = () => {
    playSound(Re);
    ReKey.classList.add("active");
    setTimeout(() => ReKey.classList.remove("active"),200);
};
ReKey.addEventListener("click", playRe);

// Mi
var MiKey = document.querySelector(".mi-key");
var playMi = () => {
    playSound(Mi);
    MiKey.classList.add("active");
    setTimeout(() => MiKey.classList.remove("active"),200);
};
MiKey.addEventListener("click", playMi);

// Fa
var FaKey = document.querySelector(".fa-key");
var playFa = () => {
    playSound(Fa);
    FaKey.classList.add("active");
    setTimeout(() => FaKey.classList.remove("active"),200);
};
FaKey.addEventListener("click", playFa);

// Sol
var SolKey = document.querySelector(".sol-key");
var playSol = () => {
    playSound(Sol);
    SolKey.classList.add("active");
    setTimeout(() => SolKey.classList.remove("active"),200);
};
SolKey.addEventListener("click", playSol);

// La
var LaKey = document.querySelector(".la-key");
var playLa = () => {
    playSound(La);
    LaKey.classList.add("active");
    setTimeout(() => LaKey.classList.remove("active"),200);
};
LaKey.addEventListener("click", playLa);

// Si
var SiKey = document.querySelector(".si-key");
var playSi = () => {
    playSound(Si);
    SiKey.classList.add("active");
    setTimeout(() => SiKey.classList.remove("active"),200);
};
SiKey.addEventListener("click", playSi);

// Doo
var DooKey = document.querySelector(".doo-key");
var playDoo = () => {
    playSound(Doo);
    DooKey.classList.add("active");
    setTimeout(() => DooKey.classList.remove("active"),200);
};
DooKey.addEventListener("click", playDoo);

window.addEventListener("keydown", ({keyCode}) => {
    // Key 'a'
    if (keyCode === 65) {
        return playDo();
    }
     // Key 's'
     if (keyCode === 83) {
        return playRe();
    }
     // Key 'd'
     if (keyCode === 68) {
        return playMi();
    }
     // Key 'f'
     if (keyCode === 70) {
        return playFa();
    }
     // Key 'g'
     if (keyCode === 71) {
        return playSol();
    }
     // Key 'h'
     if (keyCode === 72) {
        return playLa();
    }
     // Key 'j'
     if (keyCode === 74) {
        return playSi();
    }
     // Key 'k'
     if (keyCode === 75) {
        return playDoo();
    }
});