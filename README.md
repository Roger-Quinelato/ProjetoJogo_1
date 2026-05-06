# DerivaMente

DerivaMente é um MVP de jogo educacional para apoiar o estudo de Cálculo 1. O jogador escolhe um tópico, responde questões de múltipla escolha e acompanha sua pontuação, energia, combo, nível e XP ao longo da sessão.

## Objetivo do projeto

O projeto foi desenvolvido como uma experiência gamificada de aprendizagem, com foco em tornar a prática de conteúdos de Cálculo 1 mais interativa. A proposta é apresentar perguntas curtas, feedback imediato, dicas e um relatório final de desempenho para apoiar a revisão dos conteúdos.

## Funcionalidades

- Escolha de tópicos: Limites, Derivadas e Integrais.
- Banco de questões organizado por tópico, nível e dificuldade.
- Sistema de pontuação com bônus por tempo restante.
- Sistema de combo para recompensar sequências de acertos.
- Energia do jogador, reduzida a cada erro ou tempo esgotado.
- Dicas com custo de pontuação.
- Temporizador por questão.
- Progressão entre níveis dentro da sessão.
- XP e nível de estudante durante a sessão.
- Relatório final com taxa de acerto, tempo médio, dicas usadas, XP ganho e recomendação de revisão.
- Nova sessão limpa sempre que o `index.html` é aberto.

## Como executar

Não é necessário instalar dependências.

1. Abra a pasta do projeto.
2. Dê duplo clique no arquivo `index.html`.
3. Escolha um tópico e inicie a sessão.

Também é possível abrir o projeto pelo navegador usando o caminho do arquivo:

```text
index.html
```

## Estrutura do projeto

```text
Projeto_1/
├── index.html
├── style.css
├── script.js
├── README.md
├── acompanhamento_projeto/
└── PDFs de apoio do projeto
```

## Arquivos principais

- `index.html`: estrutura das telas do jogo.
- `style.css`: estilos visuais, layout e responsividade.
- `script.js`: banco de questões, regras do jogo, pontuação, níveis, XP, timer e relatório.
- `acompanhamento_projeto/`: registros de acompanhamento e documentação do desenvolvimento.

## Regras básicas do jogo

O jogador inicia escolhendo um tópico. Cada sessão começa no nível 1, com pontuação 0, energia 5 e combo 0. Ao responder corretamente, ganha pontos e pode aumentar o combo. Ao errar ou deixar o tempo acabar, perde energia. Ao final, o jogo mostra um relatório com o desempenho da sessão.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Status

MVP funcional para apresentação, com fluxo completo de início, jogo, progressão de nível e relatório final.
