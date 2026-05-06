# Relatório de Fechamento - Sprint 2
## Projeto: DerivaMente - Jogo Educacional de Cálculo 1

**Data de Fechamento:** 05 de Maio de 2026
**Objetivo da Sprint:** Evoluir o protótipo (MVP) para um sistema de jogo completo, implementando os conceitos de *Meaningful Play* (Interação Lúdica Significativa) de Katie Salen e Eric Zimmerman, e suprindo as lacunas mecânicas e pedagógicas mapeadas.

---

### 1. Entregas Realizadas

Todos os itens do Backlog da Sprint 2 foram concluídos com sucesso e integrados ao repositório:

1. **Expansão do Banco de Questões (Base de Dados):**
   - Inserção de 24 questões abrangendo Limites, Derivadas e Integrais.
   - Adição de metadados cruciais para as lógicas de jogo: `dica`, `topico`, `nivel`, `dificuldade` e `tempoBase`.

2. **Conflito Temporal - Cronômetro Visual (L1):**
   - Implementação de barra de progresso regressiva com feedback em tempo real (verde, amarelo e vermelho).
   - O esgotamento do tempo aciona perda automática de energia, adicionando a urgência característica do modelo de jogo arcade (*time pressure*).

3. **Mecânica de Recompensa - Sistema de Combo (L2):**
   - Criação de multiplicadores de pontuação baseados em acertos consecutivos (1.0x a 3.0x).
   - Feedback visual com a animação `combo-glow`. O erro zera o combo, criando a tensão de "arriscar sua sorte" descrita na teoria de jogos.

4. **Scaffolding Pedagógico - Sistema de Dicas (L3):**
   - Introdução do botão de dica com penalidade de -10 pontos no placar.
   - Ajuda a manter os alunos na "zona de fluxo", evitando que travem definitivamente em uma questão, equilibrando o nível de desafio com a habilidade.

5. **Estrutura de *Single Page Application* e Níveis (L4 e Menu):**
   - Navegação assíncrona entre o Menu Principal (`topicScreen`), o Jogo (`gameScreen`) e a Transição de Nível (`levelScreen`).
   - Progressão lógica onde o jogador precisa sobreviver a um conjunto de questões para avançar ao próximo estágio.

6. **Resultado Quantificável - Relatório Diagnóstico (L5):**
   - Criação do feedback final da sessão, permitindo que o aluno veja a sua eficiência e as dicas utilizadas. Isso cumpre o pilar da teoria de Salen & Zimmerman, onde o jogo deve ter um desfecho claro e significativo.

---

### 2. Alinhamento com o Game Design (Salen & Zimmerman)

O desenvolvimento técnico desta Sprint seguiu rigorosamente os preceitos do livro *Rules of Play: Game Design Fundamentals*:

*   **Meaningful Play:** As escolhas dos jogadores agora têm resultados **discerníveis** (mudanças imediatas na interface através de CSS e atualizações de UI) e **integrados** (decisões sobre usar ou não dicas e pressa contra o relógio afetam o score final e a vida útil no jogo).
*   **Sistemas e Regras:** O código foi arquitetado separando nitidamente a matriz de dados (regras formais matemáticas) da interação na tela (regras operacionais), constituindo um **Sistema Fechado** bem delimitado.
*   **O Círculo Mágico:** Através da interface imersiva, do `viewport-fit=cover` para mobile e das telas dedicadas de transição, delimitou-se claramente a entrada e a saída do "espaço de jogo", separando a atividade lúdica do mundo real.

---

### 3. Testes e Qualidade

Foram executados testes de integração verificando os ciclos (loops) do jogo:
*   As trocas de matérias e o retorno ao menu não geram vazamento de memória ou cronômetros rodando em *background*.
*   O sistema de pontuação soma os valores do tempo, da questão e do multiplicador do combo sem falhas matemáticas.
*   A aplicação está totalmente responsiva e acessível em dispositivos móveis.

---

### 4. Próximos Passos (Sprint 3 / Fechamento do Projeto)

Com o software em estado de *Release Candidate*, o foco final consistirá em:
1.  Revisar e atualizar o Documento de Iniciação do Projeto (PID) para refletir o produto final entregue.
2.  Preparar a documentação de defesa e os slides de apresentação para a UC de Projeto Aplicado.
3.  Avaliar a necessidade de polimento extra de *front-end* e validação final de usabilidade.
