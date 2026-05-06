# Plano Sprint 2 — DerivaMente
## Fechando as Lacunas: de Quiz Funcional a Jogo Educacional

| Campo | Valor |
|---|---|
| Sprint | Sprint 2 |
| Data de início prevista | Após aprovação deste plano |
| Duração sugerida | 1 semana acadêmica |
| Contexto | Projeto Aplicado 6 — UnDF |
| Referência de Design | Salen & Zimmerman (2012). *Regras do Jogo*, Vol. 1 |

---

## Diagnóstico das Lacunas (Ponto de Partida)

A avaliação do MVP entregue na Sprint 1 identificou **5 lacunas críticas** entre o protótipo atual e o design completo documentado em `fase1_design_do_jogo.md`. O quadro abaixo mapeia cada lacuna à sua origem no design e à sua ausência no código:

| # | Lacuna | Previsto no Design | Estado atual no código |
|---|---|---|---|
| L1 | **Cronômetro por questão** | `tempo_base` por nível, urgência visual, timeout = erro | Ausente em `script.js` e `index.html` |
| L2 | **Sistema de Combo** | Multiplicador ×1 a ×3, bônus de +50pts a cada 3 acertos | Ausente; pontuação é sempre +100 fixo |
| L3 | **Sistema de Dica** | Auxílio contextual, custo −10pts, incentivo à autonomia | Ausente na interface e na lógica |
| L4 | **Progressão por Níveis** | 7 níveis, 3 tópicos, desbloqueio, seleção inicial de tópico | Ausente; sessão linear de 5 questões fixas |
| L5 | **Relatório Final Diagnóstico** | Taxa de acerto por tópico, tempo médio, uso de dicas | Ausente; exibe só pontuação e energia final |

> **Impacto no Círculo Mágico (Salen & Zimmerman, p. 95):** Sem cronômetro, combo e dica, o jogo carece de conflito temporal e de decisões de trade-off reais. O jogador não precisa gerenciar recursos — apenas clicar. Isso reduz a experiência a um quiz linear em vez de um espaço lúdico com regras próprias de significado.

---

## Meta da Sprint 2

> Transformar o protótipo MVP em um jogo educacional completo, implementando cronômetro, combo, dica com penalidade, progressão por níveis/tópicos e relatório diagnóstico final — fechando o alinhamento entre o código e o design documentado no PID.

---

## Itens do Product Backlog Ativados nesta Sprint

| ID Backlog | Item | Tamanho | Lacuna que fecha |
|---|---|---:|---|
| PB-08 (revisão) | Completar sistema de pontuação: combo e bônus de velocidade | M | L2 |
| PB-09 | Implementar progressão por níveis e seleção de tópico | G | L4 |
| PB-11 | Criar relatório final diagnóstico da sessão | M | L5 |
| PB-15 | Refinar balanceamento de tempo e dificuldade | M | L1 |
| **PB-NEW-01** | Implementar cronômetro visual por questão | M | L1 |
| **PB-NEW-02** | Implementar sistema de dica com penalidade | M | L3 |
| **PB-NEW-03** | Expandir banco de questões (≥12 por tópico, com metadados) | G | L4, L5 |

---

## Sprint Backlog Detalhado

### L1 — Cronômetro por Questão

**Critério de aceitação:**
- Uma barra de progresso ou contador numérico visível conta regressivamente durante cada questão.
- O tempo varia por nível: `tempo_base = max(15s, 45s − (nivel × 5s))`.
- Ao zerar sem resposta, o sistema registra como erro (−1 energia, combo zerado) sem interação do jogador.
- A barra muda de cor: verde → amarelo → vermelho conforme o tempo diminui.
- O cronômetro para imediatamente quando o jogador seleciona uma alternativa.

**Tarefas técnicas:**

| Tarefa | Arquivo | Estimativa |
|---|---|---|
| Adicionar elemento `<div id="timerBar">` e `<span id="timerCount">` no `index.html` | `index.html` | 0,5h |
| Estilizar barra de tempo com transição de cor via CSS custom property `--timer-pct` | `style.css` | 0,5h |
| Implementar função `startTimer(segundos)` que usa `setInterval` e atualiza a barra | `script.js` | 1h |
| Implementar `clearTimer()` chamado ao selecionar resposta ou ao mudar questão | `script.js` | 0,5h |
| Implementar lógica de `timeout`: ao zerar, chamar `validateAnswer(null)` como erro automático | `script.js` | 0,5h |
| Adicionar campo `tempoBase` em cada questão do banco; usar valor do nível como fallback | `script.js` | 0,5h |
| Calcular `bonusTempo = Math.floor((tempoRestante / tempoTotal) × 50)` e somar à pontuação | `script.js` | 0,5h |

---

### L2 — Sistema de Combo

**Critério de aceitação:**
- Um contador de combo é visível na zona de status.
- Acertos consecutivos incrementam o combo; qualquer erro ou timeout zera o combo.
- O multiplicador de pontuação segue a tabela: combo 0–2 = ×1,0 | 3–5 = ×1,5 | 6–9 = ×2,0 | 10+ = ×3,0.
- Um indicador visual (badge ou animação) surge ao atingir combo 3, 6 e 10.

**Tarefas técnicas:**

| Tarefa | Arquivo | Estimativa |
|---|---|---|
| Adicionar `<div class="status-item">` para Combo no `index.html` | `index.html` | 0,5h |
| Declarar variável `let combo = 0` e função `getComboMultiplier(combo)` | `script.js` | 0,5h |
| Atualizar `validateAnswer`: incrementar combo no acerto, zerar no erro/timeout | `script.js` | 0,5h |
| Aplicar multiplicador no cálculo de pontuação junto com o bônus de tempo | `script.js` | 0,5h |
| Adicionar classe CSS de animação ao badge de combo ao atingir thresholds | `style.css` + `script.js` | 0,5h |

---

### L3 — Sistema de Dica com Penalidade

**Critério de aceitação:**
- Um botão "💡 Dica (−10 pts)" aparece em cada questão antes de o jogador responder.
- Ao clicar, a dica textual da questão é exibida na zona de feedback.
- O sistema desconta −10 pontos (não pode ir abaixo de 0).
- O botão fica desabilitado após uso (1 dica por questão) e após a resposta.
- O uso de dica é registrado para o relatório final.
- O combo **não** é zerado pelo uso de dica.

**Tarefas técnicas:**

| Tarefa | Arquivo | Estimativa |
|---|---|---|
| Adicionar campo `dica` (string) em cada questão do banco de dados | `script.js` | 1h |
| Adicionar `<button id="hintButton">💡 Dica (−10 pts)</button>` no `index.html` | `index.html` | 0,5h |
| Implementar `useHint()`: exibe `questão.dica`, aplica penalidade, desabilita botão, registra uso | `script.js` | 1h |
| Reiniciar estado do botão de dica (`hintUsed = false`) a cada nova questão | `script.js` | 0,5h |
| Acumular `totalHintsUsed` para o relatório final | `script.js` | 0,5h |

---

### L4 — Progressão por Níveis e Seleção de Tópico

**Critério de aceitação:**
- Uma tela de seleção inicial oferece 3 tópicos: Limites, Derivadas, Integrais.
- Cada tópico tem ao menos 2 níveis (básico e intermediário).
- O banco de questões é organizado por tópico e nível (mínimo 8 questões por nível).
- O jogo apresenta questões do nível atual em ordem aleatória dentro do banco.
- Ao concluir todas as questões de um nível com energia > 0, o próximo nível é desbloqueado.
- O nível atual e o tópico são exibidos na interface durante o jogo.

**Tarefas técnicas:**

| Tarefa | Arquivo | Estimativa |
|---|---|---|
| Criar estrutura de dados `levels[]` com `{id, nome, topico, questoes[], tempoBase}` | `script.js` | 1h |
| Criar banco de questões expandido: ≥8 questões por nível, com campos `{prompt, options, answer, dica, explanation, topico, nivel, dificuldade}` | `script.js` | 3h |
| Criar HTML da tela de seleção de tópico (oculta por padrão, exibida no início) | `index.html` | 1h |
| Implementar lógica de seleção: ao clicar em tópico, carregar o nível 1 do tópico | `script.js` | 1h |
| Implementar variáveis de estado: `currentLevel`, `currentTopic`, `completedLevels[]` | `script.js` | 0,5h |
| Implementar tela de transição de nível: "Nível X concluído! Avançar para o Nível X+1?" | `index.html` + `script.js` | 1h |
| Exibir `topicBadge` e indicador de nível na zona de status durante o jogo | `index.html` + `script.js` | 0,5h |

---

### L5 — Relatório Final Diagnóstico

**Critério de aceitação:**
- Ao finalizar todos os níveis de um tópico (ou ao game over), é exibida uma tela de relatório.
- O relatório mostra: pontuação total, acertos/erros por tópico, taxa de acerto (%), tempo médio por questão, total de dicas usadas e classificação (⭐ a ⭐⭐⭐).
- Há uma recomendação de revisão automática: subtópicos com < 60% de acerto recebem alerta.
- O jogador pode reiniciar a partir do relatório ou escolher outro tópico.

**Tarefas técnicas:**

| Tarefa | Arquivo | Estimativa |
|---|---|---|
| Criar objeto `sessionStats` para acumular: `{respostas[], tempos[], dicasUsadas, acertosPorTopico{}}` | `script.js` | 1h |
| Registrar tempo de resposta por questão (diferença entre `startTimer` e seleção) | `script.js` | 0,5h |
| Acumular acertos e erros por subtópico em cada `validateAnswer` | `script.js` | 0,5h |
| Implementar `showReport()`: calcula métricas, renderiza HTML do relatório | `script.js` | 2h |
| Criar seção HTML `<section id="reportScreen">` com layout de métricas e classificação | `index.html` | 1h |
| Implementar lógica de classificação: ≥80% = ⭐⭐⭐, 60–79% = ⭐⭐, 40–59% = ⭐, <40% = 🔄 | `script.js` | 0,5h |
| Implementar alerta de revisão automática para subtópicos abaixo de 60% | `script.js` | 0,5h |

---

## Estimativa Total de Esforço

| Lacuna | Estimativa |
|---|---:|
| L1 — Cronômetro | ~4h |
| L2 — Combo | ~2,5h |
| L3 — Dica | ~3h |
| L4 — Progressão por Níveis | ~8h |
| L5 — Relatório Diagnóstico | ~6h |
| **Total estimado** | **~23,5h** |

> **Sugestão de priorização para Sprint 2 curta (1 semana):** Se o tempo for limitado, implementar nesta ordem: **L1 (cronômetro) → L2 (combo) → L3 (dica) → L5 (relatório)**, deixando L4 (progressão completa por níveis) para Sprint 3. Essa ordem entrega o maior impacto no círculo mágico primeiro.

---

## Estrutura de Dados Proposta (script.js — Sprint 2)

```javascript
// Banco de questões expandido (exemplo estrutural)
const questionBank = [
  {
    id: "L1-001",
    prompt: "lim x→2 de (x² − 4) / (x − 2)",
    options: ["0", "2", "4", "Não existe"],
    answer: "4",
    dica: "Tente fatorar x² − 4 como produto de dois termos.",
    explanation: "Fatorando: (x−2)(x+2)/(x−2) = x+2. Substituindo x=2: resultado 4.",
    topico: "limites",
    nivel: 1,
    dificuldade: 1,
    tempoBase: 40
  },
  // ... demais questões
];

// Estado da sessão
let sessionStats = {
  acertosPorTopico: {
    limites: { acertos: 0, erros: 0 },
    derivadas: { acertos: 0, erros: 0 },
    integrais: { acertos: 0, erros: 0 }
  },
  temposResposta: [],
  dicasUsadas: 0,
  pontuacaoMaximaPossivel: 0
};

// Estado do jogo
let combo = 0;
let currentLevel = 1;
let currentTopic = null;
let hintUsed = false;
let timerInterval = null;
let tempoRestante = 0;
```

---

## Mapa de Alinhamento: Salen & Zimmerman × Sprint 2

| Conceito S&Z | Lacuna Fechada | Como Sprint 2 implementa |
|---|---|---|
| **Conflito artificial** | L1 — Cronômetro | Pressão temporal que força decisão ativa, não contemplativa |
| **Resultado mensurável** | L2 — Combo, L5 — Relatório | Score granular + diagnóstico por subtópico |
| **Espaço de possibilidades** | L3 — Dica, L4 — Níveis | Trade-off pts×compreensão + progressão de 7 níveis |
| **Feedback negativo** | L1, L2, L3 | Timeout como erro, reset de combo, custo de dica |
| **Magic Circle** | Todos | Jogo com regras próprias de significado, não só quiz |

---

## Definição de Pronto — Sprint 2 (DoD)

Um item está pronto quando:

- [ ] Atende a todos os critérios de aceitação listados neste plano.
- [ ] Não quebra o fluxo existente de pergunta → resposta → feedback.
- [ ] O cronômetro inicia e para corretamente em todos os casos (acerto, erro, dica, timeout).
- [ ] O combo é incrementado/zerado nos momentos corretos e reflete no multiplicador.
- [ ] A dica exibe o texto correto para cada questão e aplica penalidade exatamente uma vez.
- [ ] A tela de seleção de tópico funciona antes da primeira questão.
- [ ] O relatório exibe métricas reais (não estáticas) da sessão jogada.
- [ ] A interface é inspecionável sem explicações improvisadas na Sprint Review.

---

## Ordem de Implementação Recomendada

```
1. Expandir banco de questões com metadados (base para tudo)
   ↓
2. Implementar cronômetro (L1) — maior impacto em Salen & Zimmerman
   ↓
3. Implementar combo (L2) — depende do cronômetro para bônus de tempo
   ↓
4. Implementar dica (L3) — depende do banco de questões expandido
   ↓
5. Implementar progressão por níveis (L4) — depende do banco + estados de jogo
   ↓
6. Implementar relatório diagnóstico (L5) — depende de todos os dados acumulados
   ↓
7. Testes de integração e ajuste de balanceamento
```

---

*Plano elaborado em 2026-05-05. Aguarda aprovação para início da Sprint 2.*
