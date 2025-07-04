const calcular = (event) => {
  event.preventDefault();

  num = document.getElementById('numero').value
  result = document.getElementById('result')

  function fatorial(n) {
    if (n == 1) return 1
  
    return n * fatorial (n - 1)
  }

  result.innerText = `O fatorial de ${num} é ${fatorial(num)}`;
}

