const imagem = document.getElementById("imagem");
let aumentando = true;

function pulsar() {
  if (aumentando) {
    imagem.style.width = "100%";
    //  imagem.style.height = "150px";
  } else {
    imagem.style.width = "80%";
    //  imagem.style.height = "100px";
  }
  aumentando = !aumentando;
}

setInterval(pulsar, 500);
