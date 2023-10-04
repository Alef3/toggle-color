// FUNÇÃO ALTERNAR CORES

//cores iniciais
let cor1 = "orange";
let cor2 = "aqua";
let corAux = "";
function toggleElementColor(){

  //let guardaValor = document.getElementById("absolute-1");
  let absolute1 = document.getElementById("absolute-1");
  let absolute2 = document.getElementById("absolute-2");

  corAux = cor1;
  cor1 = cor2;
  cor2 = corAux;

  absolute1.style.backgroundColor = cor1;
  absolute2.style.backgroundColor = cor2;

}

//FIM DA FUNÇÃO ALTERNAR CORES


let btnStart;
let btnStop;
let idInterval;

btnStart = document.getElementById("btn-start").style;
btnStop = document.getElementById("btn-stop").style;

//INICIA TEMPORIZADOR, DESATIVA BOTÃO INICIAR E ATIVA BOTÃO STOP
function buttonStartTimer(){

  idInterval = setInterval(toggleElementColor, 1000);

  btnStart.pointerEvents = "none";
  btnStop.pointerEvents = "all";

}

//ENCERRA TEMPORIZADOR, DESATIVA BOTÃO STOP E ATIVA BOTÃO INICIAR
function buttonStopTimer(){

  clearInterval(idInterval);
  
  btnStop.pointerEvents = "none";
  btnStart.pointerEvents = "all";

}
