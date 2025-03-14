function formatDate() {
  const weeks = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'

  ]
  const today = new Date();

  const diaSemana = weeks[today.getDay()];
  const day = String(today.getDate()).padStart(2, "0");
  const month =months[today.getMonth()]
  const year = today.getFullYear();

  const hours = String(today.getHours()).padStart(2, "0");
  const minuts = String(today.getMinutes()).padStart(2, "0");

  let msg;
  if (hours >= 0 && hours < 12) {
    msg = "Bom dia";
  } else if (hours >= 12 && hours < 18) {
    msg = "Boa tarde";
  } else {
    msg = "Boa noite";
  }

  const dataFormatada = `${msg}! Hoje é ${diaSemana}, ${day} de ${month} de ${year} – ${hours}:${minuts}hs.`;

  document.getElementById("saudacoes").innerText=dataFormatada
}
formatDate()