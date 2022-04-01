var inputAdultos = window.document.getElementById("adt");
var inputCriancas = window.document.getElementById("kid");
var inputDuracao = window.document.getElementById("hrs");
var resultado = window.document.getElementById("res");
var btnClear = document.getElementById("btn-clear");
var btnCalc = document.getElementById("btn-calc");

btnCalc.addEventListener("click", calc);

function calc() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  if (adultos.length == 0 || criancas.length == 0 || duracao.length == 0) {
    alert("Por favor complete as informações");
  } else {
    let qtdTotalCarne =
      carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

    let qtdTotalCerveja = cervejaPP(duracao) * adultos;

    let qtdTotalRefri =
      refriPP(duracao) * adultos + (refriPP(duracao) / 2) * criancas;

    resultado.innerHTML = ` Você vai precisar de: <br> 
    \u{1F969}${qtdTotalCarne / 1000} Kg de carne <br> 
    <img src="./assets/lata-de-cerveja.png" class="result"> 
    ${Math.ceil(qtdTotalCerveja / 250)} Latas de cerveja de 250ml<br>
    <img src="./assets/refrigerantes.png" class="result"> 
    ${Math.ceil(qtdTotalRefri / 2000)} Refrigerantes de 2 L `;
  }
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function refriPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

btnClear.addEventListener("click", () => {
  resultado.innerHTML = "";
  inputAdultos.value = "";
  inputCriancas.value = "";
  inputDuracao.value = "";
  inputAdultos.focus();
});
