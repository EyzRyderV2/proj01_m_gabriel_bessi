let tentativas = 0;
let numeroAleatorio = 0;
let isCorrect = false

genareteRandomNumber();

function genareteRandomNumber(){
  numeroAleatorio= Math.floor(Math.random() * 10) + 1;
}

function exibirResultadoTentativa(){
  const tentativa = parseInt(document.getElementById("tentativa").value)
  ++tentativas;


  if(tentativa==numeroAleatorio) {
    isCorrect=true
    alert("assertou")
  }
  const listHTML = document.createElement("li")
  listHTML.classList.add(isCorrect ? "acertouu" : "errouu")
  listHTML.innerText=`Tentativa ${tentativas}`
  document.getElementById("tentativasRestante").append(listHTML)

  if(tentativas>2 || isCorrect){
    document.getElementById("confirmGamba").disabled=true
    document.getElementById("resetGamba").disabled=false
    document.getElementById("js06res").innerHTML = `O resultado é ${numeroAleatorio} `

  }
}

function resetarGambling(){
  tentativas=0;
  genareteRandomNumber();
  isCorrect=false;
  document.getElementById("confirmGamba").disabled=false
  document.getElementById("resetGamba").disabled=true
  document.getElementById("tentativa").value = ""
  document.getElementById("tentativasRestante").innerHTML = ``
  document.getElementById("js06res").innerHTML = ""

}

function exibirDica() {
  if (tentativas >= 1) {
    alert(tentativa.value < numeroAleatorio ? "Maior" : "Menor")
  } else {
    alert("Faz um chute primeiro")
  }
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
