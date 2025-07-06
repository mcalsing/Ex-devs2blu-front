const calcular = (event) => {
  event.preventDefault();
  
  let altura = parseFloat(document.getElementById('altura').value);
  let peso = document.getElementById('peso').value;

  const resultado = document.getElementById('resultado');
  const valorImc = document.getElementById('valor-imc');

  let imc = peso / (altura * altura);
  let situacao;

  if (imc < 18.5) {
    situacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    situacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    situacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    situacao = "Obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    situacao = "Obesidade grau 2";
  } else {
    situacao = "Obesidade grau 3";
  }

  valorImc.innerText = `IMC: ${imc.toFixed(2)}`;
  resultado.innerText = `Situação: ${situacao}`;
}