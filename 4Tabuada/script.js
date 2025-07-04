const tabuada = (event) => {
  event.preventDefault();
  const divPai = document.getElementById('resultado');
  const numero = document.getElementById('num').value;

  // tabela da tabuada
  const tabela = document.createElement('div');

  // cria divs contendo os numeros da tabuada dentro da div 'tabela'
  for (i = 1; i <= 10; i++) {
    const divNumeros = document.createElement('div');
    if (i < 10) {
      divNumeros.innerText = `${numero} x 0${i} = ${numero*i}`;
    } else {
      divNumeros.innerText = `${numero} x ${i} = ${numero*i}`;
    }
    tabela.appendChild(divNumeros);
  }
  // define a div 'tabela' como filha da div do html. Possibilita a criação de várias tabuadas uma do lado da outra.
  divPai.appendChild(tabela);

}