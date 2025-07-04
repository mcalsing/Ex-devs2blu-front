const converter = (moeda) => {
  const dolar = 5.41;
  const euro = 6.36;
  const libra = 7.38;
  const bitcoin = 594065;

  let valor = parseFloat(document.getElementById('valor').value);
  let resultado = document.getElementById('resultado')

  switch (parseInt(moeda)) {
    case 1:
      resultado.innerText = `Resultado: $ ${(valor / dolar).toFixed(2)}`
      break;
    case 2:
      resultado.innerText = `Resultado: € ${(valor / euro).toFixed(2)}`
      break;
    case 3:
      resultado.innerText = `Resultado: £ ${(valor / libra).toFixed(2)}`
      break;
    case 4:
      resultado.innerText = `Resultado: ₿ ${(valor / bitcoin).toFixed(5)}`
      break;
    default:
      resultado.innerText = 'Valor inválido'
      break;
  }
}