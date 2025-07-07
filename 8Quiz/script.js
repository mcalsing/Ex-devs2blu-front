const perguntas = [
  ['O que significa CSS?', '*Cascading Style Sheets', 'Creative Style System', 'Computer Style Syntax', 'Control Style System', 'Central Styling Sheets'],
  
  ['Qual propriedade CSS é usada para mudar a cor do texto?', 'background-color', '*color', 'font-color', 'text-style', 'text-color'],

  ['Como aplicar uma cor de fundo em um elemento?', 'color: blue;', '*background-color: blue;', 'text-color: blue;', 'bgcolor: blue;', 'font-background: blue;'],

  ['Qual seletor aplica estilo a todos os parágrafos <p>?', '.p', '#p', '*p', 'paragraph', '*p{}'],

  ['Como deixar o texto em negrito com CSS?', '*font-weight: bold;', 'text-decoration: bold;', 'font-style: bold;', 'bold: true;', 'font: bold;'],

  ['Qual valor da propriedade "position" fixa um elemento na tela mesmo com rolagem?', 'relative', 'absolute', '*fixed', 'sticky', 'scroll'],

  ['Qual unidade relativa representa o tamanho da fonte em relação ao elemento pai?', '*em', 'px', '%', 'rem', 'vh'],

  ['Como centralizar horizontalmente um elemento com margin?', '*margin: 0 auto;', 'margin: auto 0;', 'margin: center;', 'align: center;', 'text-align: center;'],

  ['Qual propriedade controla o espaçamento interno de um elemento?', '*padding', 'margin', 'border', 'spacing', 'indent'],

  ['Qual propriedade CSS remove sublinhado de links?', 'text-style: none;', '*text-decoration: none;', 'font-decoration: none;', 'underline: false;', 'link-decoration: none;'],
];

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

  // Desabilita o botão 'próxima' ao ter mostrado as 5 perguntas
  if (n == 4 ) {
    nextButton.setAttribute('disabled', '');
    nextButton.className="cursor-pointer bg-slate-400 px-5 py-2 rounded-md"
  }

  for (i = 0; i <= 5; i++) {
    const questao = document.createElement('div');
    let textoQuestao = perguntas[questoesSorteadas[n]][i];

    // Enunciado
    if (i == 0) {
      questao.innerText = textoQuestao;
      questao.className="w-96 h-20 bg-red-500 border-1 font-bold text-slate-100 border-white px-5 py-1 rounded-lg uppercase";
      // Alternativas
    } else {
      const ehCorreta = textoQuestao.startsWith('*');
      // Remove o * da questão correta
      textoQuestao = ehCorreta ? textoQuestao.slice(1) : textoQuestao;

      questao.innerText = textoQuestao;
      questao.className = "bg-red-500 border-1 border-white text-white px-5 py-1 rounded-lg cursor-pointer hover:bg-red-400";
    
      // Adiciona evento de click em cada questão
      questao.addEventListener('click', () => {
        if (ehCorreta) {
          alert('Resposta correta');
        } else {
          alert('Resposta incorreta');
        }
      });
    }
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