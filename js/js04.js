function sortAsc(vetor) {
  vetor.sort((primeiroItem, segundoItem) => {
    if (primeiroItem < segundoItem) return -1;
    if (primeiroItem > segundoItem) return 1;
    return 0;
  });
  return vetor;
}

function namesLiHTML(vector) {
  let htmlLi = "<ul>";
  for (let item of vector) {
    htmlLi += `<li>${item}</li>`;
  }
  htmlLi += "</ul>";
  return htmlLi;
}

function convertStringToArray(value) {
  return value.split(",");
}

function exibirListaDeNomes(){
  const nomesVirgulas = document.getElementById("nomes").value
  const vetorNomes = convertStringToArray(nomesVirgulas)
  document.getElementById("listaNomesRes").innerHTML=namesLiHTML(vetorNomes)
}

function exibirListaDeNomesEmOrdem(){
  const nomesVirgulas = document.getElementById("nomes").value
  const vetorNomes = convertStringToArray(nomesVirgulas)
  document.getElementById("listaNomesRes").innerHTML=namesLiHTML(sortAsc(vetorNomes))
}
