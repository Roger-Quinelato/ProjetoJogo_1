# Fechamento da Sprint 2 - DerivaMente

| Campo | Valor |
|---|---|
| Sprint | Sprint 2 |
| Data de Fechamento | 2026-05-05 |
| Participantes | Roger Quinelato (Product Owner, Scrum Master e Developer) |
| Contexto | Projeto academico aplicado - evolucao do MVP para jogo educacional completo |

## 1. Meta da Sprint 2

Transformar o prototipo MVP do DerivaMente em uma experiencia jogavel mais completa, fechando as principais lacunas identificadas na Sprint 1: conflito temporal, combo, dica com custo, progressao por niveis e relatorio diagnostico final.

## 2. Incremento Entregue

A Sprint 2 entregou os cinco sistemas centrais previstos para aproximar o codigo do design documentado no PID:

1. **Cronometro por questao:** cada questao usa `tempoBase`, com 40s no nivel 1 e 35s no nivel 2. O timeout registra erro automaticamente, reduz energia, zera combo e exibe feedback.
2. **Sistema de combo e multiplicador:** acertos consecutivos aumentam o combo; erro ou timeout zeram a sequencia. O multiplicador passa para 1.5 a partir de 3 acertos, 2.0 a partir de 6 e 3.0 a partir de 10.
3. **Sistema de dica:** cada questao possui uma dica curta, com uso opcional, custo de 10 pontos e limite de uma dica por questao. O uso de dica nao zera o combo.
4. **Progressao por topico e nivel:** a tela inicial permite escolher Limites, Derivadas ou Integrais. Cada topico possui nivel 1 e nivel 2, com questoes filtradas e embaralhadas.
5. **Relatorio diagnostico final:** ao concluir o nivel 2 ou chegar a game over, o jogo apresenta taxa de acerto, tempo medio, dicas usadas, desempenho por nivel, classificacao e recomendacao de revisao.

Como base para esses sistemas, o banco de questoes foi expandido para 24 questoes com metadados de topico, nivel, dificuldade, dica, explicacao e tempo-base.

## 3. Verificacao DoD

- [x] O fluxo principal funciona da tela de topico ate o relatorio final.
- [x] As questoes carregam filtradas por topico e nivel.
- [x] O cronometro inicia, para ao responder e trata timeout como erro.
- [x] A energia diminui em erros e timeout.
- [x] O combo incrementa em acertos, zera em erro e persiste entre niveis do mesmo topico.
- [x] A dica desconta 10 pontos, aparece uma vez por questao e nao interfere no combo.
- [x] O relatorio usa dados reais acumulados da sessao.
- [x] O botao de retorno do relatorio volta para a tela inicial com estado resetado.
- [x] A sintaxe JavaScript foi validada com `node --check script.js`.
- [x] Testes simulados de integracao cobriram fluxo feliz, timeout, game over, dica e combo.

## 4. Bugs Encontrados e Correcoes Aplicadas

| Bug | Impacto | Correcao |
|---|---|---|
| `loadLevel()` zerava o combo ao avancar do nivel 1 para o nivel 2. | O multiplicador 10+ ficava inalcançavel, contrariando o balanceamento cross-nivel. | `loadLevel()` passou a preservar combo entre niveis; o combo so zera ao trocar de topico, reiniciar ou errar. |
| `loadLevel()` tambem reiniciava energia e pontuacao ao avancar de nivel. | Com apenas 4 questoes por nivel, nao era possivel chegar ao game over por 5 erros consecutivos. | Pontuacao, energia e combo passaram a ser recursos da sessao do topico, preservados entre niveis. |

## 5. Retrospectiva

### O que deu certo?

A evolucao incremental funcionou bem. A arquitetura simples em HTML, CSS e JavaScript permitiu implementar sistemas de jogo sem dependencias externas. O banco com metadados facilitou a progressao por topico, o relatorio e o balanceamento.

### O que dificultou?

Algumas regras de sessao estavam implicitas. No MVP inicial, pontuacao, energia e combo eram tratados como variaveis da rodada; na Sprint 2 ficou claro que esses recursos precisam representar a sessao completa do topico.

### O que aprendemos sobre o produto?

O DerivaMente deixou de ser apenas um quiz e passou a ter decisoes de jogo: responder rapido, preservar energia, manter combo e decidir se vale usar dica. Isso fortalece o conflito artificial e o resultado mensuravel previstos no design.

### O que aprendemos sobre o processo?

Testes de integracao sao essenciais quando sistemas pequenos passam a interagir. Cronometro, combo, dica, progressao e relatorio funcionam isoladamente, mas os bugs apareceram principalmente nas transicoes entre nivel, game over e relatorio.

## 6. Acoes para Sprint 3

1. Criar testes automatizados permanentes para o fluxo do jogo, evitando regressao em cronometro, combo, dica e relatorio.
2. Ampliar o banco para mais questoes por nivel, reduzindo repeticao e aumentando a durabilidade da experiencia.
3. Melhorar o relatorio com diagnostico por subtópico quando o banco passar a ter esse metadado.
4. Realizar teste de usabilidade com estudantes ou colegas para validar clareza, tempo de resposta e dificuldade.
5. Revisar acessibilidade visual e navegacao por teclado antes da entrega final.
