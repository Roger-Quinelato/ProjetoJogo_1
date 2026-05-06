# FASE 1 — DESIGN DO JOGO
## *DerivaMente* — Jogo Educacional de Cálculo 1
### Projeto Aplicado 6 | UnDF | Prof. Alexandre Natã Vicente
**Referência:** Salen, K. & Zimmerman, E. (2012). *Regras do Jogo: Fundamentos do Design de Jogos*, Vol. 1.

---

## 1. DEFINIÇÃO FORMAL DO JOGO

| Elemento Formal | Definição no *DerivaMente* |
|---|---|
| **Jogadores** | 1 jogador (single-player). Não há adversários humanos; o conflito é com o sistema. |
| **Conflito artificial** | O jogador enfrenta questões de Cálculo 1 com limite de tempo decrescente por nível. O conflito é cognitivo: compreender e aplicar corretamente limites, derivadas e integrais para avançar. |
| **Conjunto de regras** | Regras determinísticas e públicas: (a) cada rodada apresenta uma questão de múltipla escolha ou construção de resposta; (b) o jogador tem um cronômetro por rodada; (c) respostas corretas somam pontos e mantêm a "Energia de Raciocínio"; (d) erros reduzem energia; (e) zerar energia = fim de jogo. |
| **Resultado quantificável** | **Pontuação acumulada** (0 a ∞) com ranking de desempenho por sessão. Condição de vitória por nível: completar todas as questões do nível com energia > 0. Condição de derrota: energia = 0 antes de completar o nível. |

> **Justificativa pedagógica:** A definição formal cria um contrato claro entre o jogo e o aluno. O conflito artificial substitui a ansiedade difusa do cálculo por um obstáculo concreto e controlado, tornando o esforço cognitivo mensurável e, portanto, motivador.

---

## 2. SISTEMA E COMPONENTES

### 2.1 Objetos do Sistema (Entidades)

| Entidade | Descrição |
|---|---|
| **Jogador** | O estudante que opera o jogo |
| **Questão** | Problema matemático de Cálculo 1 (limite, derivada ou integral) |
| **Nível** | Conjunto temático de questões com dificuldade progressiva |
| **Cronômetro** | Marcador de tempo por rodada |
| **Energia de Raciocínio** | Recurso vital do jogador (equivale a "vidas") |
| **Pontuação** | Score acumulado da sessão |
| **Dica** | Auxílio contextual opcional (custo: -10 pts) |
| **Combo** | Contador de acertos consecutivos |

### 2.2 Atributos de Cada Entidade

| Entidade | Atributos |
|---|---|
| Jogador | nome, pontuação_atual, energia_atual (max 5), combo_atual, nível_atual |
| Questão | enunciado, alternativas[ ], resposta_correta, dificuldade (1-3), tópico (limite/derivada/integral), tempo_base |
| Nível | id, nome, tópico_principal, lista_questões[ ], mínimo_energia_entrada |
| Cronômetro | tempo_total, tempo_restante, fator_urgência |
| Energia | valor_atual (0-5), penalidade_por_erro (1 energia) |
| Pontuação | base_por_acerto (100), multiplicador_combo, bônus_tempo, penalidade_dica (-10) |
| Dica | texto, disponível (bool), custo |
| Combo | contador, threshold_bônus (3 acertos = +50 pts) |

### 2.3 Relações entre Entidades

```
Jogador ──responde──► Questão
Questão ──pertence──► Nível
Jogador ──consome──► Cronômetro (por rodada)
Resposta_correta ──incrementa──► Pontuação + Combo
Resposta_errada ──decrementa──► Energia
Energia = 0 ──dispara──► Game Over
Combo ≥ 3 ──concede──► Bônus de Pontuação
Dica ──reduz──► Pontuação + desbloqueio contextual
```

### 2.4 Ambiente (Contexto)

O jogo acontece em um **espaço visual** de tela única dividida em zonas:
- **Zona de Questão** (centro): enunciado + alternativas
- **Zona de Status** (topo): energia, cronômetro, score, combo
- **Zona de Feedback** (baixo): resposta + explicação matemática pós-rodada

> **Justificativa pedagógica:** A modelagem sistêmica explicita as relações causais do jogo — exatamente o pensamento sistêmico que Salen & Zimmerman identificam como central ao design. No âmbito pedagógico, ela também modela como conceitos de cálculo se relacionam: derivada como operação sobre função, integral como inverso da derivada.

---

## 3. TIPOS DE REGRAS

### 3.1 Regras Operacionais *(como o jogador age)*

1. O jogador inicia uma sessão selecionando um tópico: **Limites**, **Derivadas** ou **Integrais**.
2. O sistema apresenta uma questão de múltipla escolha com 4 alternativas.
3. O cronômetro começa a contar regressivamente (tempo_base do nível atual).
4. O jogador seleciona uma alternativa antes do tempo esgotar.
5. O sistema exibe feedback imediato: acerto (verde + explicação) ou erro (vermelho + correção).
6. Se acerto: +pontos, +combo. Se erro: -1 energia, combo zerado.
7. Se o tempo esgotar sem resposta: tratado como erro.
8. Ao final de todas as questões do nível com energia > 0: avançar para o próximo nível.
9. Ao zerar energia: Game Over → exibe pontuação final e opção de reiniciar.

### 3.2 Regras Constitutivas *(lógica matemática subjacente)*

**Cálculo de Pontos por Questão:**
```
pontos = (100 × multiplicador_combo) + bônus_tempo - penalidades
```

**Bônus de Tempo:**
```
bônus_tempo = floor((tempo_restante / tempo_total) × 50)
```

**Multiplicador de Combo:**
```
combo 0-2:  × 1.0
combo 3-5:  × 1.5
combo 6-9:  × 2.0
combo 10+:  × 3.0
```

**Condição de Acerto (para questões de construção de resposta):**
```
|resposta_jogador - resposta_correta| ≤ tolerância (tolerância = 0,01 para limites/derivadas)
```

**Progressão de Dificuldade:**
```
tempo_base(nível) = max(15s, 45s - (nível × 5s))
```

### 3.3 Regras Implícitas *(fair play e contexto acadêmico)*

- O jogador não deve consultar materiais externos durante avaliações formais usando o jogo.
- O jogo é ferramenta de aprendizado, não de substituição do estudo teórico.
- O jogador deve tentar raciocinar genuinamente antes de usar a Dica.
- Não há penalidade por reiniciar — o erro faz parte do aprendizado.

> **Justificativa pedagógica:** As regras constitutivas são a espinha dorsal matemática do jogo. O sistema de pontuação não é arbitrário: valoriza velocidade de raciocínio (bônus_tempo) e consistência (multiplicador_combo), mapeando diretamente para as habilidades que o aluno deve desenvolver em Cálculo 1.

---

## 4. MECÂNICA CORE

### ADR — Decisão de Mecânica Central

| | |
|---|---|
| **Contexto** | O jogo precisa de uma ação repetível que force o aluno a raciocinar sobre cálculo a cada rodada, sem ser entediante nem impossível para iniciantes. |
| **Decisão** | A mecânica core é: **"Identifique e selecione o resultado matemático correto dentro do tempo limite."** Para cada rodada, o jogador recebe uma expressão matemática (ex.: `lim(x→2) (x²-4)/(x-2)`) e deve identificar o valor/resultado correto entre 4 opções, sendo que as alternativas erradas são erros típicos de estudantes (ex.: resultado da indeterminação 0/0 sem simplificação, erro de sinal, aplicação incorreta da regra da cadeia). |
| **Consequências** | (+) Força raciocínio ativo, não memorização passiva. (+) Alternativas erradas têm valor diagnóstico pedagógico. (+) Simples de implementar e expandir. (-) Risco de "chute" — mitigado pelo sistema de energia e pelo feedback explicativo pós-resposta. |

**Descrição da Mecânica Core:**

> A cada rodada (*turn*), o jogador recebe um problema de Cálculo 1. Ele deve analisar a expressão, aplicar o conceito adequado mentalmente (limite por substituição direta, fatoração, L'Hôpital; regra de derivação; técnica de integração), e selecionar a resposta correta entre 4 alternativas — tudo dentro do tempo limite. Esta ação é **fundamental e repetível**: é o que o jogador faz em cada rodada, do primeiro ao último nível.

> **Justificativa pedagógica:** A mecânica força a **recuperação ativa** (*active recall*), estratégia com ampla evidência na literatura de psicologia educacional (Roediger & Karpicke, 2006) como superior à releitura passiva. Cada rodada é um mini-teste formativo.

---

## 5. ESPAÇO DE POSSIBILIDADES

### Estrutura de Níveis e Tópicos

| Nível | Tópico | Subtópicos Cobertos | Nº Questões | Tempo/Questão |
|---|---|---|---|---|
| 1 | Limites — Básico | Substituição direta, limites laterais | 8 | 40s |
| 2 | Limites — Intermediário | Indeterminações, fatoração, L'Hôpital | 8 | 35s |
| 3 | Derivadas — Básico | Regras de potência, soma, constante | 8 | 35s |
| 4 | Derivadas — Intermediário | Regra do produto, quociente, cadeia | 8 | 30s |
| 5 | Integrais — Básico | Antiderivadas, integração por potência | 8 | 35s |
| 6 | Integrais — Intermediário | Substituição de variável, integrais definidas | 8 | 30s |
| 7 | Boss Level | Misto — uma questão de cada tópico com tempo reduzido | 6 | 20s |

**Total de questões no banco:** ≥ 60 questões (mínimo 10 por subtópico) para garantir variação.

**Estados possíveis por rodada:**
- *(acerto com combo alto + bônus de tempo)* → máximo de pontos
- *(acerto sem combo + sem bônus)* → pontos base
- *(erro)* → -1 energia, combo zerado
- *(tempo esgotado)* → tratado como erro
- *(uso de dica + acerto)* → pontos base -10

**Range de decisão:** O jogador decide: (a) qual alternativa escolher, (b) se usa a Dica (trade-off pts × compreensão), (c) quão rápido responde (trade-off segurança × bônus).

> **Justificativa pedagógica:** O espaço de possibilidades é suficientemente amplo (7 níveis × múltiplos subtópicos) para sustentar a progressão do aluno ao longo de um semestre, sem ser arbitrário — cada decisão tem consequências claras e proporcionais.

---

## 6. SISTEMAS DE FEEDBACK

### 6.1 Feedback Positivo *(amplificador de desempenho)*

| Mecanismo | Comportamento | Efeito |
|---|---|---|
| **Multiplicador de Combo** | Acertos consecutivos aumentam o multiplicador (×1 → ×3) | Incentiva consistência; recompensa domínio real |
| **Bônus de Velocidade** | Responder rápido concede até +50 pts extras | Incentiva raciocínio ágil |
| **Animação de Acerto** | Partículas visuais + som positivo ao acertar | Reforço imediato da resposta correta |
| **Desbloqueio de Nível** | Avançar de nível mostra progresso visual na trilha | Sensação de conquista e avanço |

### 6.2 Feedback Negativo *(equilíbrio do sistema)*

| Mecanismo | Comportamento | Efeito |
|---|---|---|
| **Perda de Energia** | Erro remove 1 ponto de energia (max 5) | Torna cada erro custoso sem ser punitivo demais |
| **Reset de Combo** | Qualquer erro zera o combo | Incentiva consistência real, não sorte parcial |
| **Cronômetro visual** | Barra que encolhe + muda de cor (verde→amarelo→vermelho) | Cria urgência crescente proporcional ao tempo restante |
| **Custo da Dica** | Usar dica = -10 pts | Penaliza dependência, incentiva autonomia |
| **Explicação pós-erro** | Exibe a resolução correta após erro | Transforma o erro em aprendizado imediato |

> **Justificativa pedagógica:** O equilíbrio entre feedback positivo (combo) e negativo (energia) cria a tensão que Salen & Zimmerman chamam de *meaningful play* — cada decisão importa e tem consequências visíveis. Crucialmente, o feedback negativo não é frustrante: a explicação pós-erro converte cada falha em uma microaula de cálculo.

---

## 7. OBJETIVOS E CONFLITO

### Objetivo Imediato (por rodada)
> Selecionar a resposta matematicamente correta antes que o cronômetro expire, maximizando pontos através de velocidade e consistência.

### Objetivo de Nível
> Completar todas as questões do nível mantendo energia > 0.

### Objetivo Final (vitória)
> Completar todos os 7 níveis com a maior pontuação possível, demonstrando domínio de limites, derivadas e integrais.

### Conflito Central

O conflito de *DerivaMente* é **tripartido**:

1. **Conflito cognitivo**: O jogador luta contra sua própria lacuna de conhecimento em Cálculo 1. Cada questão incorreta revela um conceito mal compreendido.
2. **Conflito temporal**: O cronômetro impõe pressão que força decisões sob tempo limitado — exatamente o contexto de provas.
3. **Conflito de recursos**: A Energia de Raciocínio é finita. Errar custa energia; usar dica custa pontos. O jogador gerencia recursos cognitivos e de jogo simultaneamente.

> **Justificativa pedagógica:** O conflito triplo mapeia diretamente para os desafios reais do aluno: domínio conceitual, desempenho sob pressão e gestão de estratégias de resolução.

---

## 8. MAGIC CIRCLE

> *"O magic circle é a fronteira entre o mundo do jogo e o mundo ordinário."* — Salen & Zimmerman, p. 95

### Como *DerivaMente* cria seu Magic Circle

**Separação estética:** O jogo usa uma identidade visual própria — paleta de cores contrastante (fundo escuro, neons frios), tipografia específica, trilha sonora de fundo — que sinaliza ao aluno que ele entrou em um "espaço diferente" da aula expositiva.

**Regras próprias de significado:** Dentro do jogo, `lim(x→2) (x²-4)/(x-2) = 4` não é apenas "a resposta certa da prova" — é o valor que derrota o obstáculo atual e aciona o multiplicador de combo. O significado matemático é recontextualizado como significado lúdico.

**Voluntariedade e agência:** O aluno escolhe jogar, escolhe o tópico, escolhe quando usar a dica. Essa agência é a diferença fundamental entre assistir a uma aula e jogar — ela ativa o engajamento.

**Consequências contidas:** Zerar energia no jogo não reprova o aluno. O magic circle permite falhar com segurança, repetidamente, até dominar o conceito — algo impossível em provas tradicionais.

**Imersão progressiva:** A progressão de 7 níveis com dificuldade crescente mantém o aluno no estado de *flow* (Csikszentmihalyi): desafio ligeiramente acima da competência atual, nem entediante nem avassalador.

> **Justificativa pedagógica:** O Magic Circle transforma a ansiedade de provas de cálculo em motivação de jogo. O aluno pratica os mesmos problemas que encontraria numa avaliação, mas dentro de um espaço de baixo risco e alta recompensa simbólica.

---

## 9. RESULTADO MENSURÁVEL

### Fórmula de Pontuação (transparente e pública)

```
Pontuação_Final = Σ(pontos_por_questão) - Σ(penalidades_dica)

pontos_por_questão = {
  se acerto:  100 × multiplicador_combo + bônus_tempo
  se erro:    0
  se timeout: 0
}

bônus_tempo = floor((tempo_restante / tempo_total) × 50)

multiplicador_combo:
  combo 0-2:  1.0
  combo 3-5:  1.5
  combo 6-9:  2.0
  combo 10+:  3.0

penalidade_dica = 10 por uso
```

### Ranking de Desempenho por Sessão

| Faixa de Score | Classificação | Significado Pedagógico |
|---|---|---|
| ≥ 80% do máximo possível | ⭐⭐⭐ Excelência | Domínio sólido do tópico |
| 60–79% | ⭐⭐ Proficiência | Compreensão adequada, gaps pontuais |
| 40–59% | ⭐ Desenvolvimento | Conceitos básicos assimilados, aprofundamento necessário |
| < 40% | 🔄 Revisão | Retornar ao material teórico antes de avançar |

> **Justificativa pedagógica:** O sistema de pontuação é rastreável passo a passo pelo aluno. A transparência é pedagógica: o estudante pode analisar *por que* sua pontuação foi X, identificando se perdeu pontos por velocidade (raciocínio lento), por erros (lacunas conceituais) ou por dependência de dicas (compreensão superficial). Esta granularidade transforma o score num diagnóstico de aprendizagem.

---

## SÍNTESE PEDAGÓGICA — Mapa Conceito × Aprendizagem

| Conceito de Salen & Zimmerman | Implementação em *DerivaMente* | Benefício Pedagógico |
|---|---|---|
| Definição Formal | Sistema de regras, energia, pontuação claros | Reduz ambiguidade; foco no conteúdo |
| Sistema e Componentes | Entidades bem definidas (questão, nível, combo) | Modelagem sistêmica do conhecimento |
| Tipos de Regras | Operacional + Constitutivo + Implícito | Estrutura o aprendizado em camadas |
| Mecânica Core | Resolução ativa de problemas a cada rodada | Active recall: superior à releitura passiva |
| Espaço de Possibilidades | 7 níveis, 60+ questões, 3 tópicos | Cobertura completa do Cálculo 1 |
| Feedback Positivo | Combo, bônus de velocidade | Reforça comportamentos corretos |
| Feedback Negativo | Energia, custo da dica, explicação pós-erro | Corrige erros como aprendizado, não punição |
| Objetivos e Conflito | Conflito triplo: cognitivo + temporal + recursos | Prepara para ambiente real de provas |
| Magic Circle | Identidade visual própria, regras próprias, segurança para errar | Reduz ansiedade; aumenta tentativas |
| Resultado Mensurável | Fórmula pública, ranking diagnóstico | Autoavaliação formativa |

---

*Fase 1 concluída. Aguarda confirmação para iniciar a Fase 2 — Scrum.*
