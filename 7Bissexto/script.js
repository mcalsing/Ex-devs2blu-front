const calcular = (event) => {
  event.preventDefault();
  
  let ano = parseFloat(document.getElementById('ano').value);
  const resultado = document.getElementById('resultado');
  
  let situacao;

  if ( ano % 4 == 0) {
    if (ano % 400 == 0) {
      situacao = "é ano Bissexto!"
    } else {
      situacao = "não é ano Bissexto"
    }
  } else {
    situacao = "não é ano Bissexto"
  }

  resultado.innerText = `${ano} ${situacao}`;
}