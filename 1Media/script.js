const calcular = (event) => {
  event.preventDefault();
  
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);
  
  let media = ((nota1+nota2+nota3)/3);
  let situacao;

  const notaEl = document.getElementById('nota');
  const situacaoEl = document.getElementById('situacao');

  if (media >= 7) {
    situacao = "Aprovado!";
    notaEl.className = "text-green-600 font-bold text-2xl";
    situacaoEl.className = "text-green-600 font-bold text-2xl";
  } else if (media < 5) {
    situacao = "Reprovado";
    notaEl.className = "text-red-500 font-bold text-2xl";
    situacaoEl.className = "text-red-500 font-bold text-2xl";
  } else {
    situacao = "Recuperação";
    notaEl.className = "text-orange-500 font-bold text-2xl";
    situacaoEl.className = "text-orange-500 font-bold text-2xl";
  }

  notaEl.innerText = `Média: ${media}`;
  situacaoEl.innerText = `Situação: ${situacao}`;
}