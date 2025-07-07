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

const container = document.getElementById('container');
const divPerguntas = document.getElementById('div-perguntas');
const nextButton = document.getElementById('next-button');
const valorErrar = document.getElementById('valor-errar');
const valorParar = document.getElementById('valor-parar');
const valorAcertar = document.getElementById('valor-acertar');
let somaAcertos = 0;
//let valorReceber = 0;
//let premioTotal = 0

// n itera sobre o array das questões sorteadas
let n = 0

let audio = null;
let audioSuspense = null;
let suspenseTimeout = null; 

// Sortear questões únicas para o quiz
let questoesSorteadas = []
for (j = 0; questoesSorteadas.length < 5; j++) {
  const randomNum = Math.floor(Math.random() * 10);

  // Se o número sorteado acima não estiver incluido no array, adiciona no array
  if (!questoesSorteadas.includes(randomNum)) {
    questoesSorteadas.push(randomNum)
  }
}

// Função para formatar o resultado
const formatarResultado = (somaAcertos) => {
  if (somaAcertos > 1) {
    /* premioTotal = somaAcertos * 3;
    console.log(premioTotal); */
    return `Você acertou ${somaAcertos} questões!`
  } else if (somaAcertos === 1) {
    //console.log(premioTotal);
    return `Você acertou ${somaAcertos} questão.`
  } else {
    console.log(premioTotal);
    return `Você não acertou nenhuma!`
  }
}

const formatarPremioErrar = (n) => {
  //valorReceber = (n+1)*1;
  return `${(n+1)*1} Pila`;
}

const formatarPremioParar = (n) => {
  //valorReceber = (n+1)*2;
  return `${(n+1)*2} Pila`
}

const formatarPremioAcertar = (n) => {
  //valorReceber = (n+1)*3;
  return `${(n+1)*3} Pila`
}

valorErrar.innerText = formatarPremioErrar(n);
valorParar.innerText = formatarPremioParar(n);
valorAcertar.innerText = formatarPremioAcertar(n);

const proxima = () => {

  if (suspenseTimeout) {
    clearTimeout(suspenseTimeout);
    suspenseTimeout = null;
  }

  // Pausa o áudio de suspense se estiver tocando
  if (audioSuspense) {
    audioSuspense.pause();
    audioSuspense.currentTime = 0;
    audioSuspense = null;
  }
  
  // Remove a questão anterior da tela
  divPerguntas.replaceChildren();
  
  for (i = 0; i <= 5; i++) {
    const questao = document.createElement('div');
    // Pega o numero da questão sorteada (n) e itera sobre a pergunta e as alternativas, mostrando na tela
    let textoQuestao = perguntas[questoesSorteadas[n]][i];

    // Enunciado
    if (i == 0) {
      questao.innerText = textoQuestao;
      questao.className="w-96 h-20 bg-red-500 border-2 font-bold text-slate-100 border-white px-5 py-1 rounded-lg uppercase";
      // Alternativas
    } else {
      const ehCorreta = textoQuestao.startsWith('*');
      // Remove o * da questão correta
      textoQuestao = ehCorreta ? textoQuestao.slice(1) : textoQuestao;

      // Adiciona a numeração da questão em um circulo branco
      questao.innerHTML = `
        <span class="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-white text-blue-600 text-xl font-bold">
          ${i}
        </span> ${textoQuestao}
      `;
      // Estiliza a alternativa
      questao.className = "bg-red-500 border-1 border-white text-white px-5 py-1 rounded-lg cursor-pointer hover:bg-red-400";
    
      // Adiciona evento de click em cada questão e contabiliza o resultado do quiz
      questao.addEventListener('click', () => {
        if (ehCorreta) {
          somaAcertos += 1;
          
          // Condição de parada do quiz caso a última alternativa for correta
          if (n == 5 ) {
            container.replaceChildren();
            const resultado = document.createElement('p');
            resultado.innerText = formatarResultado(somaAcertos);
            resultado.className = "text-2xl text-slate-100 ml-12";
            container.appendChild(resultado);

          } else {
            valorErrar.innerText = formatarPremioErrar(n);
            valorParar.innerText = formatarPremioParar(n);
            valorAcertar.innerText = formatarPremioAcertar(n);
            // Ao clicar na alternativa, mostra a questão seguinte
            proxima();
          }
        } else {
          // Condição de parada do quiz caso a última alternativa for errada
          if (n == 5 ) {
            container.replaceChildren();
            const resultado = document.createElement('p');
            resultado.innerText = formatarResultado(somaAcertos);
            resultado.className = "text-2xl text-slate-100 ml-13"
            container.appendChild(resultado);

          } else {
            valorErrar.innerText = formatarPremioErrar(n);
            valorParar.innerText = formatarPremioParar(n);
            valorAcertar.innerText = formatarPremioAcertar(n);
            // Ao clicar na alternativa, mostra a questão seguinte
            proxima();
          }
        }
      });
    }
    divPerguntas.appendChild(questao); 
  }
  n += 1;

  // Toca audio ao ir para a próxima pergunta
  audio = new Audio('showdomilhao.mp3');
  audio.addEventListener('canplaythrough', () => audio.play());
  
  // Se passar 10 segundos e a pergunta não estiver sido respondida, toca a música de suspense
  suspenseTimeout = setTimeout(() => {
    audioSuspense = new Audio('suspenseshowdomilhao.mp3');
    audioSuspense.addEventListener('canplaythrough', () => {
      audioSuspense.play();
    });
  }, 15000);

}

proxima();