# Documentação ágil - DerivaMente

| Campo | Valor |
|---|---|
| Projeto | DerivaMente |
| Produto | Jogo educacional de Cálculo 1 |
| Método de referência | Scrum Guide 2020, versão em português |
| Contexto | Projeto acadêmico aplicado |
| Status | Draft |
| Data | 2026-05-05 |

## 1. Scrum Team

O Scrum Team atua como uma unidade pequena, multifuncional e
autogerenciável. No contexto acadêmico, o time entrega incrementos úteis do
jogo a cada Sprint e usa inspeção e adaptação para melhorar o produto, o
processo e a aprendizagem da equipe.

Neste projeto, o Scrum Team é composto por **Roger Quinelato**, que acumula os
papéis de Product Owner, Scrum Master e Developer por se tratar de um trabalho
individual. Essa adaptação preserva os eventos, artefatos e compromissos do
Scrum, mas concentra a responsabilidade de decisão, execução e inspeção em uma
única pessoa.

### Product Owner

O Product Owner maximiza o valor acadêmico e pedagógico do DerivaMente. Essa
pessoa representa as necessidades dos estudantes, do professor orientador, da
disciplina de Cálculo 1 e dos critérios do Projeto Aplicado.

Responsabilidades:

- Comunicar a Meta do Produto de forma clara.
- Ordenar o Product Backlog por valor educacional, risco e dependência.
- Garantir que os itens do Product Backlog sejam visíveis e compreensíveis.
- Validar se cada incremento contribui para a aprendizagem de Cálculo 1.
- Negociar escopo quando a Sprint revelar novas restrições ou descobertas.

No contexto acadêmico deste projeto, **Roger Quinelato** exerce o papel de
Product Owner com apoio do professor orientador. A decisão final sobre
prioridade permanece centralizada para manter foco, coerência e rastreabilidade.

### Scrum Master

O Scrum Master garante que a equipe compreenda e use Scrum de forma coerente.
Seu foco é proteger a cadência de trabalho, remover impedimentos e manter os
eventos objetivos.

Responsabilidades:

- Facilitar Sprint Planning, Daily Scrum, Sprint Review e Retrospectiva.
- Ajudar o time a manter foco na Meta da Sprint.
- Remover impedimentos técnicos, acadêmicos ou organizacionais.
- Incentivar melhoria contínua sem transformar Scrum em burocracia.
- Verificar se o time usa a Definição de Pronto antes de apresentar entregas.

No contexto acadêmico, o Scrum Master também ajuda a equilibrar prazos da
disciplina, disponibilidade dos integrantes e qualidade mínima do incremento.
Neste projeto individual, **Roger Quinelato** também exerce esse papel e usa os
eventos Scrum como mecanismo de organização, inspeção e melhoria contínua.

### Developers

Developers são os integrantes que criam qualquer parte do incremento do jogo.
No DerivaMente, isso inclui pesquisa pedagógica, design de jogo, interface,
conteúdo matemático, regras, testes, documentação e apresentação.

Neste projeto, **Roger Quinelato** atua como Developer responsável por todos os
aspectos do incremento, incluindo implementação, validação, documentação e
preparação da apresentação.

Responsabilidades:

- Criar o Sprint Backlog durante a Sprint Planning.
- Decompor itens grandes em tarefas menores e executáveis.
- Adaptar o plano diariamente conforme o time aprende.
- Construir incrementos que atendam à Definição de Pronto.
- Assumir responsabilidade conjunta pela qualidade do produto.

Papéis práticos dentro dos Developers:

| Frente | Responsabilidade |
|---|---|
| Design de jogo | Define mecânicas, progressão, feedback e experiência do jogador. |
| Conteúdo matemático | Cria questões, alternativas, dicas e explicações de Cálculo 1. |
| Desenvolvimento | Implementa interface, fluxo de jogo, estado, pontuação e dados. |
| Qualidade | Testa regras, usabilidade, clareza pedagógica e consistência visual. |
| Documentação | Mantém registros de decisões, backlog, Sprint, DoD e retrospectivas. |

### Stakeholders acadêmicos

Stakeholders não fazem parte do Scrum Team, mas influenciam o valor do produto.

| Stakeholder | Interesse no projeto |
|---|---|
| Professor orientador | Avalia aderência acadêmica, coerência metodológica e entrega final. |
| Estudantes de Cálculo 1 | Usam o jogo para praticar limites, derivadas e integrais. |
| Banca ou avaliadores | Inspecionam produto, documentação, processo e resultados. |
| Instituição | Observa o valor educacional e a aplicabilidade do projeto. |

## 2. Meta do Produto

Criar um jogo educacional single-player que ajude estudantes iniciantes de
Cálculo 1 a praticar limites, derivadas e integrais por meio de desafios
curtos, feedback imediato, progressão de dificuldade e métricas simples de
desempenho.

O produto atinge sua meta quando entrega uma experiência jogável na qual o
estudante:

- Resolve problemas de Cálculo 1 em rodadas com regras claras.
- Recebe feedback que explica o raciocínio correto após acertos e erros.
- Avança por níveis temáticos com dificuldade progressiva.
- Visualiza pontuação, energia, combo e resultado final da sessão.
- Identifica tópicos que precisa revisar após jogar.

## 3. Product Backlog

O Product Backlog é a fonte única de trabalho do produto. O Product Owner
ordena os itens por valor, dependência, risco e contribuição para a Meta do
Produto. Os Developers estimam tamanho em P, M ou G.

Critério de tamanho:

| Tamanho | Interpretação |
|---|---|
| P | Item pequeno, claro e viável em até 1 dia de trabalho da equipe. |
| M | Item médio, exige coordenação entre duas frentes ou 2 a 3 dias. |
| G | Item grande, precisa de decomposição ou atravessa várias frentes. |

### Backlog detalhado

| ID | Item | Tamanho | Prioridade | Critérios de aceitação |
|---|---|---:|---:|---|
| PB-01 | Definir identidade do produto e público-alvo | P | Alta | O documento descreve nome, objetivo, público, contexto acadêmico e valor educacional do DerivaMente. |
| PB-02 | Modelar regras centrais do jogo | M | Alta | O jogo possui regras documentadas para rodada, acerto, erro, timeout, energia, pontuação, combo, dica e fim de jogo. |
| PB-03 | Criar banco inicial de questões de limites | M | Alta | O banco contém ao menos 12 questões de limites com enunciado, alternativas, resposta correta, dica e explicação. |
| PB-04 | Criar banco inicial de questões de derivadas | M | Alta | O banco contém ao menos 12 questões de derivadas com enunciado, alternativas, resposta correta, dica e explicação. |
| PB-05 | Criar banco inicial de questões de integrais | M | Média | O banco contém ao menos 12 questões de integrais com enunciado, alternativas, resposta correta, dica e explicação. |
| PB-06 | Projetar tela principal da rodada | M | Alta | A tela exibe enunciado, alternativas, cronômetro, energia, pontuação, combo e botão de dica sem sobreposição visual. |
| PB-07 | Implementar fluxo jogável de uma rodada | G | Alta | O jogador inicia uma questão, escolhe resposta, recebe feedback, vê pontuação atualizada e avança para a próxima questão. |
| PB-08 | Implementar sistema de pontuação e energia | M | Alta | Acertos somam pontos, erros reduzem energia, timeout conta como erro, combo altera multiplicador e dica aplica penalidade. |
| PB-09 | Implementar progressão por níveis | G | Média | O jogo agrupa questões por tópico, controla nível atual e libera próximo nível quando o jogador conclui o anterior com energia restante. |
| PB-10 | Criar feedback pedagógico pós-resposta | M | Alta | Cada resposta mostra se o jogador acertou, apresenta a alternativa correta e explica o conceito usado no problema. |
| PB-11 | Criar relatório final da sessão | M | Média | O relatório mostra pontuação final, acertos, erros, uso de dicas, tempo médio e recomendação de revisão por tópico. |
| PB-12 | Validar conteúdo matemático | M | Alta | Todas as questões selecionadas para entrega passam por revisão de resposta correta, distratores e explicação. |
| PB-13 | Testar usabilidade com usuários acadêmicos | M | Média | Ao menos 3 participantes executam uma sessão curta e registram dificuldades, dúvidas e sugestões. |
| PB-14 | Preparar apresentação e documentação final | G | Média | A equipe entrega documentação ágil, TDD, design do jogo, evidências de teste e roteiro de demonstração. |
| PB-15 | Refinar balanceamento de tempo e dificuldade | M | Baixa | A equipe ajusta cronômetro, energia e sequência de questões com base em testes e dados observados. |

## 4. Sprint Planning

Esta Sprint Planning inicia a Sprint 1 do projeto. O plano responde às três
perguntas recomendadas pelo Scrum Guide: por que a Sprint é valiosa, o que
pode ser feito nela e como o trabalho escolhido será realizado.

### Dados da Sprint

| Campo | Definição |
|---|---|
| Sprint | Sprint 1 |
| Duração sugerida | 1 semana acadêmica |
| Objetivo da Sprint | Entregar o primeiro incremento jogável do DerivaMente com uma rodada completa de limites. |
| Participantes | Roger Quinelato como Product Owner, Scrum Master e Developer; professor orientador como stakeholder convidado. |
| Incremento esperado | Protótipo funcional de uma rodada, regras centrais documentadas e banco inicial de questões de limites revisado. |

### Tópico 1: Por que esta Sprint é valiosa?

Esta Sprint reduz o maior risco do projeto: descobrir tarde demais se a ideia
do jogo funciona como experiência jogável. O time entrega um fluxo mínimo que
permite testar a mecânica central: apresentar questão, receber resposta,
calcular consequência e exibir feedback.

Meta da Sprint:

> Entregar uma rodada jogável de limites que demonstre a mecânica central do
> DerivaMente e permita avaliar clareza, regras e feedback pedagógico.

### Tópico 2: O que pode ser feito nesta Sprint?

Itens selecionados do Product Backlog:

| ID | Item | Motivo da seleção |
|---|---|---|
| PB-01 | Definir identidade do produto e público-alvo | Dá alinhamento para design, documentação e apresentação. |
| PB-02 | Modelar regras centrais do jogo | Sustenta o fluxo jogável e evita decisões implícitas. |
| PB-03 | Criar banco inicial de questões de limites | Fornece conteúdo real para o primeiro incremento. |
| PB-06 | Projetar tela principal da rodada | Permite validar a experiência principal do jogador. |
| PB-07 | Implementar fluxo jogável de uma rodada | Entrega valor inspecionável ao final da Sprint. |
| PB-08 | Implementar sistema de pontuação e energia | Mostra consequência clara para acerto, erro e timeout. |
| PB-10 | Criar feedback pedagógico pós-resposta | Garante que a entrega ensine, não apenas corrija. |
| PB-12 | Validar conteúdo matemático | Reduz risco de erro conceitual na demonstração. |

### Tópico 3: Como o trabalho escolhido será realizado?

Plano de execução:

1. Consolidar regras e critérios de resposta antes de implementar a interface.
2. Criar questões de limites com metadados pedagógicos.
3. Revisar respostas, distratores e explicações.
4. Montar a tela principal da rodada.
5. Conectar fluxo de questão, resposta, feedback, pontuação e energia.
6. Executar teste interno com pelo menos uma sessão completa.
7. Atualizar documentação com decisões, pendências e evidências da Sprint.

### Riscos da Sprint

| Risco | Mitigação |
|---|---|
| O time gastar tempo demais com visual antes do fluxo jogável. | Priorizar funcionalidade mínima antes de polimento visual. |
| Questões de limites ficarem ambíguas. | Revisar cada questão com resposta, dica e explicação antes de usar no protótipo. |
| A pontuação incentivar chute. | Exibir feedback explicativo e aplicar perda de energia em erros e timeout. |
| O escopo crescer durante a Sprint. | Negociar alterações com o Product Owner sem comprometer a Meta da Sprint. |

## 5. Sprint Backlog

O Sprint Backlog combina a Meta da Sprint, os itens selecionados do Product
Backlog e o plano de trabalho dos Developers. Ele deve ficar visível para o
time e mudar conforme a Sprint revela novas informações.

### Meta da Sprint

Entregar uma rodada jogável de limites que demonstre a mecânica central do
DerivaMente e permita avaliar clareza, regras e feedback pedagógico.

### Itens selecionados

| ID | Item | Status inicial |
|---|---|---|
| PB-01 | Definir identidade do produto e público-alvo | A fazer |
| PB-02 | Modelar regras centrais do jogo | A fazer |
| PB-03 | Criar banco inicial de questões de limites | A fazer |
| PB-06 | Projetar tela principal da rodada | A fazer |
| PB-07 | Implementar fluxo jogável de uma rodada | A fazer |
| PB-08 | Implementar sistema de pontuação e energia | A fazer |
| PB-10 | Criar feedback pedagógico pós-resposta | A fazer |
| PB-12 | Validar conteúdo matemático | A fazer |

### Tarefas da Sprint

| Tarefa | Item relacionado | Responsável sugerido | Status |
|---|---|---|---|
| Redigir resumo do produto, público-alvo e valor acadêmico. | PB-01 | Documentação | A fazer |
| Definir estados da rodada: início, resposta, feedback, próxima questão e fim. | PB-02 | Design de jogo | A fazer |
| Definir fórmula inicial de pontuação, energia, combo e penalidade de dica. | PB-02, PB-08 | Design de jogo | A fazer |
| Criar 12 questões de limites com alternativas. | PB-03 | Conteúdo matemático | A fazer |
| Adicionar dica e explicação para cada questão. | PB-03, PB-10 | Conteúdo matemático | A fazer |
| Revisar respostas corretas e distratores. | PB-12 | Qualidade | A fazer |
| Desenhar layout da tela de rodada. | PB-06 | Design de interface | A fazer |
| Implementar exibição de questão e alternativas. | PB-07 | Desenvolvimento | A fazer |
| Implementar seleção de resposta e cálculo de resultado. | PB-07, PB-08 | Desenvolvimento | A fazer |
| Implementar atualização de energia, pontuação e combo. | PB-08 | Desenvolvimento | A fazer |
| Implementar feedback de acerto e erro com explicação. | PB-10 | Desenvolvimento | A fazer |
| Executar teste interno com sessão curta. | PB-07, PB-10, PB-12 | Qualidade | A fazer |
| Registrar decisões, evidências e pendências da Sprint. | Todos | Documentação | A fazer |

### Critério de conclusão da Sprint

A Sprint atinge sua meta quando a equipe demonstra uma rodada completa de
limites com conteúdo revisado, resposta interativa, pontuação, energia e
feedback pedagógico visível.

## 6. Definição de Pronto (DoD)

A Definição de Pronto descreve o estado mínimo de qualidade para considerar um
item parte do incremento. Se um item não atende a DoD, ele retorna ao Product
Backlog para revisão futura.

Um item do Product Backlog está pronto quando:

- Atende aos critérios de aceitação definidos no backlog.
- Contribui diretamente para a Meta da Sprint ou Meta do Produto.
- Possui conteúdo matemático revisado quando envolve questão, dica ou
  explicação.
- Exibe comportamento consistente para acerto, erro, timeout e uso de dica,
  quando aplicável.
- Mantém linguagem clara, ativa e compreensível para estudantes de Cálculo 1.
- Não introduz regra contraditória com o design do jogo.
- Em trabalho individual, foi revisado por Roger Quinelato com checklist de
  qualidade, registro de evidência e, quando possível, validação externa do
  professor ou de um usuário convidado.
- Possui evidência simples de validação, como print, checklist, anotação de
  teste ou registro na documentação.
- Está integrado ao incremento sem quebrar fluxo principal da rodada.
- Pode ser apresentado na Sprint Review sem explicação improvisada para
  compensar lacunas.

Critérios adicionais para itens de documentação:

- Usa títulos hierárquicos e tabelas legíveis.
- Mantém termos consistentes: Product Backlog, Sprint Backlog, Meta da Sprint,
  Meta do Produto, Incremento e Definição de Pronto.
- Registra decisões, critérios e pendências de forma objetiva.

Critérios adicionais para itens de conteúdo matemático:

- Possui enunciado sem ambiguidade.
- Possui apenas uma resposta correta.
- Usa distratores ligados a erros reais de aprendizagem.
- Explica o raciocínio correto em linguagem adequada ao público-alvo.
- Indica tópico, subtópico e dificuldade.

## 7. Template de Retrospectiva

Use este template ao final de cada Sprint. A retrospectiva deve gerar ações
concretas para aumentar qualidade e eficácia na próxima Sprint.

### Identificação

| Campo | Resposta |
|---|---|
| Sprint |  |
| Data |  |
| Facilitador |  |
| Participantes |  |
| Meta da Sprint |  |
| Incremento entregue |  |

### 1. O que deu certo?

Liste práticas, decisões e comportamentos que ajudaram a equipe.

| Observação | Evidência | Manter na próxima Sprint? |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

### 2. O que dificultou o trabalho?

Registre impedimentos, atrasos, ruídos de comunicação ou problemas técnicos.

| Problema | Impacto | Causa provável |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

### 3. O que aprendemos sobre o produto?

Conecte aprendizados a jogo, cálculo, usuários e escopo.

| Aprendizado | Como descobrimos | Decisão sugerida |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

### 4. O que aprendemos sobre o processo?

Avalie comunicação, divisão de trabalho, reuniões, ferramentas e DoD.

| Área | Avaliação | Ajuste necessário |
|---|---|---|
| Comunicação |  |  |
| Planejamento |  |  |
| Qualidade |  |  |
| Documentação |  |  |
| Colaboração |  |  |

### 5. Ações de melhoria

Escolha poucas ações, com responsável e prazo. A equipe deve priorizar as
mudanças mais úteis e levar as principais para o próximo Sprint Backlog.

| Ação | Responsável | Prazo | Como verificar |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

### 6. Checklist final da retrospectiva

- A equipe identificou pelo menos uma melhoria de processo.
- A equipe identificou pelo menos uma melhoria de produto.
- As ações possuem responsável e prazo.
- As ações mais importantes entram no próximo Sprint Backlog.
- A equipe revisou se a Definição de Pronto continua adequada.
