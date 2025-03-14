let tentativas = 3;
let numeroAleatorio = 0;
let isCorrect = false

genareteRandomNumber();

function genareteRandomNumber(){
  numeroAleatorio= Math.floor(Math.random() * 10) + 1;
}

function exibirResultadoTentativa(){
  const tentativa = parseInt(document.getElementById("tentativa").value)
  --tentativas;

  if(tentativa==numeroAleatorio) {
    isCorrect=true
    alert("assertou")
  }

  if(tentativas<1 || isCorrect){
    document.getElementById("confirmGamba").disabled=true
    document.getElementById("resetGamba").disabled=false

  }
}

function resetarGambling(){
  tentativas=3;
  genareteRandomNumber();
  isCorrect=false;
  document.getElementById("confirmGamba").disabled=false
  document.getElementById("resetGamba").disabled=true
  document.getElementById("tentativa").value = ""
}

function exibirDica(){
  tentativas <3 ?alert(tentativa<numeroAleatorio?"Menor":"Maior"):alert("Faz um chute primeiro")
}
/*
 *
Se acertar na primeira, segunda ou terceira opção,
  altere a cor do respectivo campo e exiba uma mensagem
  de parabéns na página; caso contrário, altere a cor dos
  três campos e exiba uma mensagem de erro junto com
  o número que foi gerado.
  No final do jogo, dê opção para nova jogada e limpeza dos campos.
  Dica: Ao realizar os testes, exiba na console o número gerado!
 */
