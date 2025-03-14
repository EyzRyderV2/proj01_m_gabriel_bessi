function media_aritimetrica(vetor_numeros) {
  let sum = 0;
  for (let i = 0; i < vetor_numeros.length; i++) {
    sum = sum + vetor_numeros[i];
  }
  return sum/vetor_numeros.length;
}

function classificarMedia(media) {
  if (media < 6) return "Insufuciente";
  else if (media < 7.5) return "Regular";
  else if (media < 8.5) return "Bom";
  else if (media < 9.5) return "Ótimo";
  else if (media <= 10) return "Excelente";
  else return "mentira";
}

function exibirClassificacaoMedia(){
  const notaFinal = media_aritimetrica([
    parseFloat(document.getElementById("p1").value),
    parseFloat(document.getElementById("p2").value),
  ])
  console.log(notaFinal)
  document.getElementById("NFRes").innerText = `Nua Nota Final foi ${notaFinal.toFixed(2)} que ${classificarMedia(notaFinal)}`
}