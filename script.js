
const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado: "1. Qual superpoder você escolheria?",
    alternativas: [
      {
        texto: "Tecnologia avançada e inteligência superior",
        afirmacao: "Você confia na ciência e na inovação para resolver problemas.",
      },
      {
        texto: "Força sobre-humana e resistência física",
        afirmacao: "Você acredita que a determinação e a força são fundamentais.",
      },
    ],
  },
  {
    enunciado: "2. Como você prefere enfrentar uma ameaça?",
    alternativas: [
      {
        texto: "Planejamento estratégico e recursos tecnológicos",
        afirmacao: "Você é meticuloso e gosta de estar sempre um passo à frente.",
      },
      {
        texto: "Ação direta e trabalho em equipe",
        afirmacao: "Você prefere a abordagem frontal e valoriza seus companheiros.",
      },
    ],
  },
  {
    enunciado: "3. Qual valor é mais importante para você?",
    alternativas: [
      {
        texto: "Progresso e proteção através da inovação",
        afirmacao: "Você acredita que o futuro deve ser construído com inteligência.",
      },
      {
        texto: "Justiça e proteção dos mais fracos",
        afirmacao: "Você tem um forte senso de moral e responsabilidade social.",
      },
    ],
  },
  {
    enunciado: "4. Onde você se sente mais confortável?",
    alternativas: [
      {
        texto: "Laboratório high-tech ou cobertura moderna",
        afirmacao: "Você aprecia o conforto e as facilidades da tecnologia moderna.",
      },
      {
        texto: "Campo de treinamento ou em meio à natureza",
        afirmacao: "Você se conecta com ambientes mais simples e autênticos.",
      },
    ],
  },
  {
    enunciado: "5. Como você vê a liderança?",
    alternativas: [
      {
        texto: "Liderar através do exemplo e recursos disponíveis",
        afirmacao: "Você acredita que um bom líder deve ter as ferramentas certas.",
      },
      {
        texto: "Inspirar outros através de valores e sacrifício pessoal",
        afirmacao: "Você lidera pelo coração e pela dedicação aos outros.",
      },
    ],
  },
]

let atual = 0
let historiaFinal = ""
let contadorA = 0
let contadorB = 0

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado()
    return
  }
  const perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = ""

  for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
    const alternativa = perguntaAtual.alternativas[i]
    const botao = document.createElement("button")
    botao.textContent = alternativa.texto
    botao.addEventListener("click", () => respostaSelecionada(alternativa, i))
    caixaAlternativas.appendChild(botao)
  }
}

function respostaSelecionada(opcao, indice) {
  historiaFinal += opcao.afirmacao + " "
  if (indice === 0) {
    contadorA++
  } else {
    contadorB++
  }
  atual++
  mostraPergunta()
}

function mostraResultado() {
  caixaPerguntas.textContent = "Seu herói interior:"
  let vingador = ""

  if (contadorA > contadorB) {
    vingador =
      "\n\n🤖 Homem de Ferro – O Gênio Bilionário\nVocê é Tony Stark! Inteligente, inovador e sempre um passo à frente. Usa a tecnologia como sua maior arma e acredita que a ciência pode resolver qualquer problema. Seu estilo é sofisticado, sua mente é brilhante, e você nunca recua diante de um desafio. 'Eu sou o Homem de Ferro!'"
  } else if (contadorB > contadorA) {
    vingador =
      "\n\n🛡️ Capitão América – O Primeiro Vingador\nVocê é Steve Rogers! Corajoso, leal e com um senso de justiça inabalável. Lidera pelo exemplo e nunca abandona um companheiro. Seus valores são sólidos como seu escudo, e você inspira outros a serem melhores. 'Eu posso fazer isso o dia todo!'"
  } else {
    vingador =
      "\n\n⚡ Thor – O Deus do Trovão\nVocê é o Príncipe de Asgard! Poderoso, nobre e com um coração generoso. Combina força bruta com sabedoria, e sua lealdade aos amigos é inquestionável. Você enfrenta qualquer desafio de cabeça erguida e sempre protege aqueles que ama. 'Eu ainda sou digno!'"
  }

  textoResultado.textContent = historiaFinal.trim() + vingador
  caixaAlternativas.textContent = ""
}

mostraPergunta()
