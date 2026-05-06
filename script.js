// Sprint 2 — Banco expandido
const questionBank = [
  {
    id: "L1-001",
    prompt: "lim x -> 3 de (2x + 1)",
    options: ["3", "6", "7", "9"],
    answer: "7",
    dica: "Como a expressão é polinomial, teste a substituição direta.",
    explanation:
      "Polinômios são contínuos, então basta substituir x por 3. Assim, 2 · 3 + 1 = 7.",
    topico: "limites",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "L1-002",
    prompt: "lim x -> -1 de (x² + 2x)",
    options: ["1", "-1", "0", "Não existe"],
    answer: "-1",
    dica: "Para polinômios, substitua o valor de aproximação no lugar de x.",
    explanation:
      "A função x² + 2x é polinomial e contínua. Substituindo x = -1, temos (-1)² + 2(-1) = 1 - 2 = -1.",
    topico: "limites",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "L1-003",
    prompt: "lim x -> 4 de sqrt(x)",
    options: ["2", "4", "8", "Não existe"],
    answer: "2",
    dica: "A raiz quadrada é contínua para valores positivos.",
    explanation:
      "Como sqrt(x) é contínua em x = 4, calculamos diretamente sqrt(4), que é igual a 2.",
    topico: "limites",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "L1-004",
    prompt: "lim x -> 0 de sen(x) / x",
    options: ["0", "1", "Infinito", "-1"],
    answer: "1",
    dica: "Lembre-se do limite fundamental envolvendo seno.",
    explanation:
      "Este é um limite fundamental: quando x se aproxima de 0, a razão sen(x) / x se aproxima de 1.",
    topico: "limites",
    nivel: 1,
    dificuldade: 2,
    tempoBase: 40,
  },
  {
    id: "L2-005",
    prompt: "lim x -> 2 de (x² - 4) / (x - 2)",
    options: ["0", "2", "4", "Não existe"],
    answer: "4",
    dica: "Tente fatorar x² - 4 antes de substituir.",
    explanation:
      "A substituição direta gera 0/0. Fatorando x² - 4 como (x - 2)(x + 2), simplificamos a fração para x + 2. Substituindo x = 2, o limite vale 4.",
    topico: "limites",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "L2-006",
    prompt: "lim x -> 3 de (x² - 9) / (x - 3)",
    options: ["0", "3", "6", "Não existe"],
    answer: "6",
    dica: "Reconheça uma diferença de quadrados no numerador.",
    explanation:
      "A substituição direta gera 0/0. Fatorando x² - 9 como (x - 3)(x + 3), cancelamos x - 3 e obtemos x + 3. Para x = 3, o limite é 6.",
    topico: "limites",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "L2-007",
    prompt: "lim x -> 2 de (x² - 5x + 6) / (x - 2)",
    options: ["0", "-1", "1", "Não existe"],
    answer: "-1",
    dica: "Fatore o trinômio procurando dois números que multiplicam 6 e somam -5.",
    explanation:
      "O numerador fatora como (x - 2)(x - 3). Após cancelar x - 2, sobra x - 3. Substituindo x = 2, obtemos -1.",
    topico: "limites",
    nivel: 2,
    dificuldade: 3,
    tempoBase: 35,
  },
  {
    id: "L2-008",
    prompt: "lim x -> 0 de (e^x - 1) / x",
    options: ["0", "1", "e", "Não existe"],
    answer: "1",
    dica: "Use o limite fundamental associado à função exponencial.",
    explanation:
      "O limite fundamental da exponencial diz que (e^x - 1) / x tende a 1 quando x tende a 0.",
    topico: "limites",
    nivel: 2,
    dificuldade: 3,
    tempoBase: 35,
  },
  {
    id: "D1-001",
    prompt: "Qual é a derivada de f(x) = x³ + 2x?",
    options: ["3x² + 2x", "3x² + 2", "x² + 2", "3x³ + 2"],
    answer: "3x² + 2",
    dica: "Aplique a regra da potência termo a termo.",
    explanation:
      "A derivada de x³ é 3x², e a derivada de 2x é 2. Portanto, f'(x) = 3x² + 2.",
    topico: "derivadas",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "D1-002",
    prompt: "Qual é a derivada de f(x) = 5x⁴?",
    options: ["5x³", "20x³", "20x⁴", "x⁵"],
    answer: "20x³",
    dica: "Multiplique o coeficiente pelo expoente e reduza o expoente em 1.",
    explanation:
      "Pela regra da potência, a derivada de 5x⁴ é 5 · 4x³, ou seja, 20x³.",
    topico: "derivadas",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "D1-003",
    prompt: "Qual é a derivada de f(x) = 7?",
    options: ["7", "0", "1", "7x"],
    answer: "0",
    dica: "Pense na derivada de uma função constante.",
    explanation:
      "Uma função constante não varia quando x muda. Por isso, a derivada de f(x) = 7 é 0.",
    topico: "derivadas",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "D1-004",
    prompt: "Qual é a derivada de f(x) = sqrt(x)?",
    options: ["1 / (2sqrt(x))", "1 / sqrt(x)", "sqrt(x) / 2", "2sqrt(x)"],
    answer: "1 / (2sqrt(x))",
    dica: "Reescreva sqrt(x) como x^(1/2).",
    explanation:
      "Como sqrt(x) = x^(1/2), pela regra da potência a derivada é (1/2)x^(-1/2), que equivale a 1 / (2sqrt(x)).",
    topico: "derivadas",
    nivel: 1,
    dificuldade: 2,
    tempoBase: 40,
  },
  {
    id: "D2-005",
    prompt: "Qual é a derivada de f(x) = (x² + 1)(x³ - 2)?",
    options: [
      "5x⁴ + 3x² - 4x",
      "2x + 3x²",
      "5x⁴ - 4x",
      "x⁵ + x³ - 2x² - 2",
    ],
    answer: "5x⁴ + 3x² - 4x",
    dica: "Use a regra do produto: derive uma parte por vez.",
    explanation:
      "Pela regra do produto: f'(x) = 2x(x³ - 2) + (x² + 1)3x². Expandindo, obtemos 2x⁴ - 4x + 3x⁴ + 3x² = 5x⁴ + 3x² - 4x.",
    topico: "derivadas",
    nivel: 2,
    dificuldade: 3,
    tempoBase: 35,
  },
  {
    id: "D2-006",
    prompt: "Qual é a derivada de f(x) = (x² + 1) / x?",
    options: ["1 - 1/x²", "2x / x", "x² - 1", "1 + 1/x²"],
    answer: "1 - 1/x²",
    dica: "Você pode simplificar a função antes de derivar.",
    explanation:
      "Podemos escrever (x² + 1) / x como x + 1/x. Derivando termo a termo, obtemos 1 - 1/x².",
    topico: "derivadas",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "D2-007",
    prompt: "Qual é a derivada de f(x) = sen(3x)?",
    options: ["cos(3x)", "3cos(3x)", "-3cos(3x)", "3sen(3x)"],
    answer: "3cos(3x)",
    dica: "Aplique a regra da cadeia: derive o argumento interno.",
    explanation:
      "A derivada de sen(u) é cos(u) · u'. Como u = 3x, temos u' = 3. Logo, f'(x) = 3cos(3x).",
    topico: "derivadas",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "D2-008",
    prompt: "Qual é a derivada de f(x) = ln(x² + 1)?",
    options: ["1 / (x² + 1)", "2x / (x² + 1)", "2x ln(x)", "ln(2x)"],
    answer: "2x / (x² + 1)",
    dica: "Use a derivada de ln(u) combinada com a regra da cadeia.",
    explanation:
      "Para f(x) = ln(u), temos f'(x) = u'/u. Como u = x² + 1 e u' = 2x, a derivada é 2x / (x² + 1).",
    topico: "derivadas",
    nivel: 2,
    dificuldade: 3,
    tempoBase: 35,
  },
  {
    id: "I1-001",
    prompt: "Qual é a integral indefinida de f(x) = 2x?",
    options: ["x² + C", "2x² + C", "x + C", "x²"],
    answer: "x² + C",
    dica: "Aumente o expoente em 1 e divida pelo novo expoente.",
    explanation:
      "A integral de 2x é 2 · x²/2 = x². Como é uma integral indefinida, somamos a constante C.",
    topico: "integrais",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "I1-002",
    prompt: "Qual é a integral indefinida de f(x) = 3x²?",
    options: ["x³ + C", "6x + C", "3x³ + C", "x² + C"],
    answer: "x³ + C",
    dica: "Use a regra da potência para integrais.",
    explanation:
      "A integral de 3x² é 3 · x³/3 = x³. Portanto, a resposta é x³ + C.",
    topico: "integrais",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "I1-003",
    prompt: "Qual é a integral indefinida de f(x) = 5?",
    options: ["5 + C", "5x + C", "x⁵ + C", "0"],
    answer: "5x + C",
    dica: "A integral de uma constante vira uma função linear.",
    explanation:
      "A integral de uma constante a é ax + C. Assim, a integral de 5 é 5x + C.",
    topico: "integrais",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40,
  },
  {
    id: "I1-004",
    prompt: "Qual é a integral indefinida de f(x) = cos(x)?",
    options: ["sen(x) + C", "-sen(x) + C", "-cos(x) + C", "cos(x) + C"],
    answer: "sen(x) + C",
    dica: "Procure uma função cuja derivada seja cos(x).",
    explanation:
      "Como a derivada de sen(x) é cos(x), a integral de cos(x) é sen(x) + C.",
    topico: "integrais",
    nivel: 1,
    dificuldade: 2,
    tempoBase: 40,
  },
  {
    id: "I2-005",
    prompt: "Qual é a integral indefinida de f(x) = 1 / x?",
    options: ["ln|x| + C", "x ln|x| + C", "-1/x² + C", "1/x² + C"],
    answer: "ln|x| + C",
    dica: "Lembre-se da primitiva da função recíproca.",
    explanation:
      "A integral de 1/x é ln|x| + C, pois a derivada de ln|x| é 1/x para x diferente de zero.",
    topico: "integrais",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "I2-006",
    prompt: "Qual é a integral indefinida de f(x) = e^(2x)?",
    options: ["e^(2x) + C", "2e^(2x) + C", "e^(2x) / 2 + C", "e^x / 2 + C"],
    answer: "e^(2x) / 2 + C",
    dica: "Ajuste pela derivada do expoente interno.",
    explanation:
      "Como a derivada de 2x é 2, a primitiva de e^(2x) precisa compensar esse fator. Assim, a integral é e^(2x) / 2 + C.",
    topico: "integrais",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "I2-007",
    prompt: "Qual é a integral definida de 0 a 1 de 2x dx?",
    options: ["0", "1", "2", "1/2"],
    answer: "1",
    dica: "Encontre a primitiva e depois aplique o Teorema Fundamental do Cálculo.",
    explanation:
      "A primitiva de 2x é x². Avaliando de 0 a 1, temos 1² - 0² = 1.",
    topico: "integrais",
    nivel: 2,
    dificuldade: 2,
    tempoBase: 35,
  },
  {
    id: "I2-008",
    prompt: "Qual é a integral indefinida de f(x) = 2x cos(x²)?",
    options: ["sen(x²) + C", "cos(x²) + C", "2sen(x²) + C", "-sen(x²) + C"],
    answer: "sen(x²) + C",
    dica: "Use substituição com u = x².",
    explanation:
      "Tomando u = x², temos du = 2x dx. A integral vira integral de cos(u) du, que é sen(u) + C. Voltando para x, obtemos sen(x²) + C.",
    topico: "integrais",
    nivel: 2,
    dificuldade: 3,
    tempoBase: 35,
  },
];

let questions = questionBank;

const scoreValue = document.querySelector("#scoreValue");
const energyValue = document.querySelector("#energyValue");
const questionCounter = document.querySelector("#questionCounter");
const questionText = document.querySelector("#questionText");
const questionLabel = document.querySelector(".question-label");
const answersGrid = document.querySelector("#answersGrid");
const feedbackBox = document.querySelector("#feedbackBox");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const timerCount = document.querySelector("#timerCount");
const timerFill = document.querySelector("#timerFill");
const comboValue = document.querySelector("#comboValue");
const hintButton = document.querySelector("#hintButton");
const topicScreen = document.querySelector("#topicScreen");
const gameScreen = document.querySelector("#gameScreen");
const levelScreen = document.querySelector("#levelScreen");
const levelTitle = document.querySelector("#levelTitle");
const levelMessage = document.querySelector("#levelMessage");
const nextLevelButton = document.querySelector("#nextLevelButton");
const topicBadge = document.querySelector("#topicBadge");
const topicCards = document.querySelectorAll(".topic-card");
const backToMenuBtn = document.querySelector("#backToMenuBtn");
const levelMenuBtn = document.querySelector("#levelMenuBtn");
const reportScreen = document.querySelector("#reportScreen");
const reportContent = document.querySelector("#reportContent");
const reportRestartButton = document.querySelector("#reportRestartButton");
const playerLevelTag = document.querySelector("#playerLevelTag");
const xpFill = document.querySelector("#xpFill");
const xpText = document.querySelector("#xpText");

let currentQuestionIndex = 0;
let score = 0;
let energy = 5;
let hasAnswered = false;
let timerInterval = null;
let tempoRestante = 0;
let tempoTotal = 0;
let combo = 0;
let hintUsed = false;
let totalHintsUsed = 0;
let currentTopic = null;
let currentLevel = 1;
let levelQuestions = [];
let sessionStats = createEmptySessionStats();
const PLAYER_DATA_KEY = "derivamente_player_data";
const XP_PER_LEVEL = 300;
let playerData = loadPlayerData();
let sessionXPAwarded = false;
let lastSessionXPGained = 0;

const topicLabels = {
  limites: "Limites",
  derivadas: "Derivadas",
  integrais: "Integrais",
};

function getDefaultPlayerData() {
  return {
    totalXP: 0,
    playerLevel: 1,
  };
}

function getStorage() {
  try {
    return typeof localStorage === "undefined" ? null : localStorage;
  } catch {
    return null;
  }
}

function getPlayerLevelFromXP(totalXP) {
  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

function normalizePlayerData(data) {
  const totalXP = Math.max(0, Number(data?.totalXP) || 0);

  return {
    totalXP,
    playerLevel: getPlayerLevelFromXP(totalXP),
  };
}

function loadPlayerData() {
  const storage = getStorage();

  if (!storage) {
    return getDefaultPlayerData();
  }

  try {
    const savedData = JSON.parse(storage.getItem(PLAYER_DATA_KEY));
    return normalizePlayerData(savedData);
  } catch {
    return getDefaultPlayerData();
  }
}

function savePlayerData(data) {
  playerData = normalizePlayerData(data);
  const storage = getStorage();

  if (storage) {
    storage.setItem(PLAYER_DATA_KEY, JSON.stringify(playerData));
  }

  return playerData;
}

function getLevelProgress(data = playerData) {
  const currentLevelStart = (data.playerLevel - 1) * XP_PER_LEVEL;
  const nextLevelXP = data.playerLevel * XP_PER_LEVEL;
  const currentLevelXP = data.totalXP - currentLevelStart;
  const percent = Math.min(100, (currentLevelXP / XP_PER_LEVEL) * 100);

  return {
    currentLevelXP,
    nextLevelXP,
    percent,
  };
}

function updateGlobalXP(pontosGanhos) {
  const xpGanho = Math.max(0, Math.round(Number(pontosGanhos) || 0));
  const updatedData = savePlayerData({
    totalXP: playerData.totalXP + xpGanho,
    playerLevel: playerData.playerLevel,
  });

  renderPlayerStatus();
  return {
    xpGanho,
    playerData: updatedData,
  };
}

function renderPlayerStatus() {
  const progress = getLevelProgress(playerData);

  playerLevelTag.textContent = `Nível de Estudante: ${playerData.playerLevel}`;
  xpFill.style.width = `${progress.percent}%`;
  xpText.textContent = `${playerData.totalXP} / ${progress.nextLevelXP} XP`;
}

function createEmptySessionStats() {
  return {
    totalAcertos: 0,
    totalErros: 0,
    totalDicas: 0,
    temposResposta: [],
    acertosPorNivel: {
      1: { acertos: 0, total: 0 },
      2: { acertos: 0, total: 0 },
    },
  };
}

function getComboMultiplier(comboCount) {
  if (comboCount >= 10) return 3.0;
  if (comboCount >= 6) return 2.0;
  if (comboCount >= 3) return 1.5;
  return 1.0;
}

function getQuestionsForLevel(topico, nivel) {
  const filteredQuestions = questionBank.filter(
    (question) => question.topico === topico && question.nivel === nivel
  );

  for (let i = filteredQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQuestions[i], filteredQuestions[j]] = [
      filteredQuestions[j],
      filteredQuestions[i],
    ];
  }

  return filteredQuestions;
}

function startTopic(topico) {
  currentTopic = topico;
  currentLevel = 1;
  currentQuestionIndex = 0;
  score = 0;
  energy = 5;
  combo = 0;
  totalHintsUsed = 0;
  sessionStats = createEmptySessionStats();
  sessionXPAwarded = false;
  lastSessionXPGained = 0;
  loadLevel();
}

function loadLevel() {
  levelQuestions = getQuestionsForLevel(currentTopic, currentLevel);
  questions = levelQuestions;
  currentQuestionIndex = 0;
  hintUsed = false;

  topicBadge.textContent = `${topicLabels[currentTopic]} - Nível ${currentLevel}`;
  topicScreen.classList.add("hidden");
  levelScreen.classList.add("hidden");
  reportScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  updateStatus();
  renderQuestion();
}

function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerFill.style.width = "100%";
  timerFill.className = "timer-ok";
}

function startTimer(segundos) {
  tempoTotal = segundos;
  tempoRestante = segundos;
  timerCount.textContent = tempoRestante;
  timerFill.style.width = "100%";
  timerFill.className = "timer-ok";

  timerInterval = setInterval(() => {
    tempoRestante--;
    timerCount.textContent = tempoRestante;
    
    const percent = (tempoRestante / tempoTotal) * 100;
    timerFill.style.width = `${percent}%`;

    if (percent <= 25) {
      timerFill.className = "timer-danger";
    } else if (percent <= 50) {
      timerFill.className = "timer-warn";
    } else {
      timerFill.className = "timer-ok";
    }

    if (tempoRestante <= 0) {
      clearTimer();
      validateAnswer(null, null);
    }
  }, 1000);
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  clearTimer();
  startTimer(currentQuestion.tempoBase || 40);

  hasAnswered = false;
  hintUsed = false;
  hintButton.disabled = false;
  questionLabel.textContent = `Resolva: ${topicLabels[currentQuestion.topico]}`;
  questionText.textContent = currentQuestion.prompt;
  questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  nextButton.disabled = true;
  nextButton.textContent =
    currentQuestionIndex === questions.length - 1
      ? "Finalizar sessão"
      : "Próxima questão";

  feedbackBox.className = "feedback-box";
  feedbackTitle.textContent = "Escolha uma alternativa para responder.";
  feedbackText.textContent =
    "A explicação aparecerá após a validação da resposta.";

  answersGrid.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => validateAnswer(option, button));
    answersGrid.appendChild(button);
  });
}

function useHint() {
  if (hintUsed || hasAnswered) {
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  hintUsed = true;
  totalHintsUsed++;
  sessionStats.totalDicas++;
  score = Math.max(0, score - 10);
  feedbackBox.className = "feedback-box";
  feedbackTitle.textContent = "💡 Dica";
  feedbackText.textContent = currentQuestion.dica;
  hintButton.disabled = true;
  updateStatus();
}

function validateAnswer(selectedOption, selectedButton) {
  clearTimer();

  if (hasAnswered || energy <= 0) {
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption !== null && selectedOption === currentQuestion.answer;
  const tempoUsado = tempoTotal - tempoRestante;

  hasAnswered = true;
  hintButton.disabled = true;
  nextButton.disabled = false;
  sessionStats.temposResposta.push(tempoUsado);
  sessionStats.acertosPorNivel[currentLevel].total++;

  if (isCorrect) {
    sessionStats.totalAcertos++;
    sessionStats.acertosPorNivel[currentLevel].acertos++;
  } else {
    sessionStats.totalErros++;
  }

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    combo++;
    const bonusTempo = Math.floor((tempoRestante / tempoTotal) * 50);
    const pontos = Math.round(100 * getComboMultiplier(combo)) + bonusTempo;
    score += pontos;
    feedbackBox.classList.add("success");
    feedbackTitle.textContent = "Resposta correta.";
    feedbackText.textContent = currentQuestion.explanation;
  } else {
    combo = 0;
    energy = Math.max(0, energy - 1);
    if (selectedButton) {
      selectedButton.classList.add("incorrect");
    }
    feedbackBox.classList.add("danger");
    feedbackTitle.textContent = selectedOption === null ? "Tempo esgotado." : "Resposta incorreta.";
    feedbackText.textContent = currentQuestion.explanation;
  }

  updateStatus();

  if (energy === 0) {
    nextButton.textContent = "Ver relatório";
  }
}

function updateStatus() {
  scoreValue.textContent = score;
  energyValue.textContent = energy;
  
  if (comboValue) {
    comboValue.classList.remove("combo-glow");
    void comboValue.offsetWidth;
    comboValue.textContent = combo;
    if (combo === 3 || combo === 6 || combo === 10) {
      comboValue.classList.add("combo-glow");
    }
  }
}

function goToNextStep() {
  if (energy === 0) {
    showReport();
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  finishSession();
}

function finishSession() {
  clearTimer();

  if (currentLevel < 2) {
    gameScreen.classList.add("hidden");
    levelScreen.classList.remove("hidden");
    levelTitle.textContent = `Nível ${currentLevel} concluído!`;
    levelMessage.textContent = `Parabéns, você concluiu ${topicLabels[currentTopic]} - Nível ${currentLevel}. Energia restante: ${energy}. Pontuação do nível: ${score}.`;
    return;
  }

  showReport();
}

function showReport() {
  clearTimer();

  if (!sessionXPAwarded) {
    lastSessionXPGained = updateGlobalXP(score).xpGanho;
    sessionXPAwarded = true;
  }

  const totalRespostas = sessionStats.totalAcertos + sessionStats.totalErros;
  const taxaAcerto =
    totalRespostas > 0
      ? ((sessionStats.totalAcertos / totalRespostas) * 100).toFixed(1)
      : "0.0";
  const tempoMedio =
    sessionStats.temposResposta.length > 0
      ? (
          sessionStats.temposResposta.reduce((total, tempo) => total + tempo, 0) /
          sessionStats.temposResposta.length
        ).toFixed(1)
      : "0.0";
  const taxaNumerica = Number(taxaAcerto);
  let classificacao = "🔄 Revisão — retorne ao material teórico";

  if (taxaNumerica >= 80) {
    classificacao = "⭐⭐⭐ Excelência — domínio sólido do tópico";
  } else if (taxaNumerica >= 60) {
    classificacao = "⭐⭐ Proficiência — gaps pontuais identificados";
  } else if (taxaNumerica >= 40) {
    classificacao = "⭐ Desenvolvimento — aprofundamento necessário";
  }

  const taxaNivel = (nivel) => {
    const statsNivel = sessionStats.acertosPorNivel[nivel];
    if (!statsNivel.total) {
      return "0.0";
    }

    return ((statsNivel.acertos / statsNivel.total) * 100).toFixed(1);
  };
  const nivel1Taxa = taxaNivel(1);
  const nivel2Taxa = taxaNivel(2);
  const niveisParaRevisar = [1, 2].filter((nivel) => {
    const statsNivel = sessionStats.acertosPorNivel[nivel];
    return statsNivel.total > 0 && Number(taxaNivel(nivel)) < 60;
  });
  const recomendacaoClasse = niveisParaRevisar.length > 0 ? "report-alert" : "report-ok";
  const recomendacaoTexto =
    niveisParaRevisar.length > 0
      ? `Recomendamos revisar: ${topicLabels[currentTopic]} (${niveisParaRevisar
          .map((nivel) => `Nível ${nivel}`)
          .join(", ")}).`
      : `Bom desempenho em ${topicLabels[currentTopic]}. Continue praticando para consolidar.`;

  gameScreen.classList.add("hidden");
  levelScreen.classList.add("hidden");
  topicScreen.classList.add("hidden");
  reportScreen.classList.remove("hidden");

  reportContent.innerHTML = `
    <span class="report-star">${classificacao}</span>
    <div class="report-metric">
      <span>Taxa de acerto geral</span>
      <strong>${taxaAcerto}%</strong>
    </div>
    <div class="report-metric">
      <span>Tempo médio por questão</span>
      <strong>${tempoMedio}s</strong>
    </div>
    <div class="report-metric">
      <span>Dicas usadas</span>
      <strong>${sessionStats.totalDicas}</strong>
    </div>
    <div class="report-metric">
      <span>XP ganho nesta sessão</span>
      <strong>+${lastSessionXPGained} XP</strong>
    </div>
    <div class="report-metric">
      <span>Nível 1</span>
      <strong>${nivel1Taxa}% (${sessionStats.acertosPorNivel[1].acertos}/${sessionStats.acertosPorNivel[1].total})</strong>
    </div>
    <div class="report-metric">
      <span>Nível 2</span>
      <strong>${nivel2Taxa}% (${sessionStats.acertosPorNivel[2].acertos}/${sessionStats.acertosPorNivel[2].total})</strong>
    </div>
    <div class="${recomendacaoClasse}">
      ${recomendacaoTexto}
    </div>
  `;
}

function advanceLevel() {
  currentLevel++;
  levelScreen.classList.add("hidden");
  loadLevel();
}

// QA Sprint 2: loadLevel preserva score, energia e combo entre niveis.
// Isso corrige o combo cross-nivel e permite game over apos 5 erros consecutivos.

function restartGame() {
  if (!currentTopic) {
    returnToMenu();
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  energy = 5;
  combo = 0;
  totalHintsUsed = 0;
  sessionStats = createEmptySessionStats();
  sessionXPAwarded = false;
  lastSessionXPGained = 0;
  updateStatus();
  renderQuestion();
}

function returnToMenu() {
  clearTimer();
  currentTopic = null;
  currentLevel = 1;
  currentQuestionIndex = 0;
  score = 0;
  energy = 5;
  combo = 0;
  totalHintsUsed = 0;
  hintUsed = false;
  sessionStats = createEmptySessionStats();
  sessionXPAwarded = false;
  lastSessionXPGained = 0;
  topicScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  levelScreen.classList.add("hidden");
  reportScreen.classList.add("hidden");
  updateStatus();
}

nextButton.addEventListener("click", goToNextStep);
restartButton.addEventListener("click", restartGame);
hintButton.addEventListener("click", useHint);
nextLevelButton.addEventListener("click", advanceLevel);
backToMenuBtn.addEventListener("click", returnToMenu);
levelMenuBtn.addEventListener("click", returnToMenu);
reportRestartButton.addEventListener("click", returnToMenu);
topicCards.forEach((button) => {
  button.addEventListener("click", () => startTopic(button.dataset.topic));
});

updateStatus();
renderPlayerStatus();
topicScreen.classList.remove("hidden");
gameScreen.classList.add("hidden");
levelScreen.classList.add("hidden");
reportScreen.classList.add("hidden");
