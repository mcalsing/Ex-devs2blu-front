const perguntas = [
  ['pergunta1', '1111111', '1111111', '1111111', '1111111' ],
  ['pergunta2', '2222222', '2222222', '2222222', '2222222' ],
  ['pergunta3', '3333333', '3333333', '3333333', '3333333' ],
  ['pergunta4', '4444444', '4444444', '4444444', '4444444' ],
  ['pergunta5', '5555555', '5555555', '5555555', '5555555' ],
  ['pergunta6', '6666666', '6666666', '6666666', '6666666' ],
  ['pergunta7', '7777777', '7777777', '7777777', '7777777' ],
  ['pergunta8', '8888888', '8888888', '8888888', '8888888' ],
  ['pergunta9', '9999999', '9999999', '9999999', '9999999' ],
  ['pergunta10', '0000000', '0000000', '0000000', '0000000' ],
]

const alternativaCorretas = [
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
  'correta',
]

const divPerguntas = document.getElementById('div-perguntas');
const nextButton = document.getElementById('next-button')

// Sortear questões únicas para o quiz
let questoesSorteadas = []
for (j = 0; questoesSorteadas.length < 5; j++) {
  const randomNum = Math.floor(Math.random() * 10);

  // Se o numero sorteado acima não estiver incluido no array, adiciona no array
  if (!questoesSorteadas.includes(randomNum)) {
    questoesSorteadas.push(randomNum)
  }
}

let n = 0
const proxima = () => {
  console.log(perguntas[2])
  console.log(questoesSorteadas[n])
  
  // Remove a questão anterior da tela
  divPerguntas.replaceChildren();

  console.log(n)

  // Desabilita o botão 'próxima' ao ter mostrados as 5 perguntas
  if (n == 4 ) {
    // nextButton.disable = true;
    nextButton.setAttribute('disabled', '');
    nextButton.className="cursor-pointer bg-slate-400 px-5 py-2 rounded-md"
  }

  for (i = 0; i < 5; i++) {
    const questao = document.createElement('div');
    questao.innerText = perguntas[questoesSorteadas[n]][i];
    questao.className="flex flex-col bg-red-500 border-1 border-white px-5 py-1 rounded-lg";
    divPerguntas.appendChild(questao); 
  }
  n = n + 1;
  console.log(questoesSorteadas)

  // Toca audio ao ir para a próxima pergunta
/*   let audio = new Audio('showdomilhao.mp3');
  audio.addEventListener('canplaythrough', function() {
    audio.play();
  }); */
}

proxima();

const mainFunc = () => {

}