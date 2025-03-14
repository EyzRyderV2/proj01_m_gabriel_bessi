const hoje = new Date();
console.log(hoje);
const outra_data = new Date("Jun 13 2024");

/*
 Com base nas informações anteriores, exiba uma saída respondendo:
Quantos dias faltam para as nossas férias?
Quantos dias faltam para o seu aniversário?
Dica: Transforme os milissegundos até chegar em dias e arredonde o valor.
 */

function calcularAteNiverExibir() {
  const hoje = new Date();

  const birthday = new Date(
    document.getElementById("birthdate").value + "T00:00:00",
  );
  const nextBirthdate = new Date(
    hoje.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
  );
  console.log(birthday.getDate());

  if (
    hoje.getMonth() == birthday.getMonth() &&
    hoje.getDate() == birthday.getDate()
  ) {
    exibirFelizNiver();
    return;
  }

  if (nextBirthdate < hoje) {
    nextBirthdate.setFullYear(hoje.getFullYear() + 1);
  }

  const diferenca = nextBirthdate - hoje;
  const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

  exibirDiasAteNiver(diasRestantes);
}

function exibirDiasAteNiver(diasRestantes) {
  document.getElementById("resultado").textContent =
    `Faltam ${diasRestantes} dias para o seu próximo aniversário!`;
}

function exibirFelizNiver() {
  document.getElementById("resultado").textContent = `Feliz aniversário ^^ !`;
}
