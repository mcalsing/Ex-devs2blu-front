const randomNumber = Math.floor(Math.random() * 101);
let numTentativas = 1;

const reiniciar = () => {
  location.reload();
}

const numero = (event) => {
  event.preventDefault();

  let chute = document.getElementById('chute').value;
  let resultado = document.getElementById('resultado');
  let resultadoTent = document.getElementById('resultadoTentativas');

  let diferenca = Math.abs(randomNumber - chute);
  let proximidade;

  if (diferenca > 20) {
    proximidade = "Muito longe!"
    numTentativas++;

  } else if (diferenca > 11 && diferenca <= 20 ) {
    proximidade = "Longe!"
    numTentativas++;

  } else if (diferenca == 0) {
    proximidade = "Você acertou o número!"
    resultadoTent.innerText = `Total de tentativas: ${numTentativas}`;

  } else if (diferenca < 5) {
    proximidade = "Quase!"
    numTentativas++;

  } else {
    proximidade = "Perto!"
    numTentativas++;
  }

  resultado.innerText = proximidade
}