function ClassificacaoDeIMC(imc) {
  if (imc < 18.5) return "Abaixo doo peso";
  else if (imc < 24.9) return "Peso Ideal";
  else if (imc < 29.9) return "Levemente acima do peso";
  else if (imc < 34.9) return "Obesidade grau 1";
  else if (imc < 39.9) return "Obesidade grau 2 (servera)";
  else return "Obesidade grau 3 (mórbida)";
}

function CalcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function exibirClassificacaoIMC() {
  const imc = CalcularIMC(
    parseFloat(document.getElementById("peso").value),
    parseFloat(document.getElementById("altura").value) / 100,
  );
  document.getElementById("imcRes").innerText = `Seu imc é ${imc.toFixed(2)}: ${ClassificacaoDeIMC(imc)}`;
}
