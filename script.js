let contador = 0;

function badTime(goodTime) {
  let botaoOculto = document.getElementById("botaoOculto");

  if (contador == 0) {
    botaoOculto.style.visibility = "visible";
    contador++;
    console.log(contador);
  } else {
    botaoOculto.style.visibility = "hidden";
    contador--;
  }
  tempoBotao();
  tempoMaisUm();
  tempoMeuCanal();
  tempoTchau();
  tempoStickman();
  tempoRoblox();
}

function tempoBotao() {
  let botaoTiky2 = setTimeout(function tiky() {
    let botaoTiky = document.getElementById("botaoTiky");
    botaoTiky.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 10000);
}

function tempoMaisUm() {
  let maisUm2 = setTimeout(function maisUm() {
    let maisUm = document.getElementById("maisUm");
    maisUm.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 3000);
}

function tempoMeuCanal() {
  let meuCanal2 = setTimeout(function meuCanal() {
    let meuCanal = document.getElementById("meuCanal");
    meuCanal.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 1000);
}

function tempoTchau() {
  let tchau2 = setTimeout(function tchau() {
    let tchau = document.getElementById("tchau");
    tchau.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 500);
}

function tempoStickman() {
  let botaoStickman2 = setTimeout(function stickman() {
    let botaoStickman = document.getElementById("stickman");
    botaoStickman.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 20000);
}

function tempoRoblox() {
  let botaoRoblox2 = setTimeout(function roblox() {
    let botaoRoblox = document.getElementById("roblox");
    botaoRoblox.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 25000);
}

function Gaster() {
  window.open("https://www.youtube.com/watch?v=M2Y-3VB_ZqA");
}

function Tiky() {
  window.open("https://gertrudeso9.github.io/Tricky-segredo/");
}

function maisUm() {
  window.open("https://fecha-esta-guia-agora!");
}

function meuCanal() {
  window.open("https://www.youtube.com/channel/UCGiapjg1bZsGy3PlYTYBElg");
}

function tchau() {
  alert("certeza que quer fechar?, sê quer, aperta o X");
}

function stickman() {
  window.open("https://www.youtube.com/watch?v=Xf5WkVmwvaY");
}

function roblox() {
  window.open("https://www.roblox.com/users/1718562858/profile");
}