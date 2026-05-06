# Plano de ação cronológico - fechamento do Projeto 1

Este plano organiza as ações restantes para que o repositório atenda aos
requisitos do Projeto 1. Ele considera que o trabalho é individual e que Roger
Quinelato acumula os papéis de Product Owner, Scrum Master e Developer.

## Situação atual

O repositório já contempla a base documental do projeto:

- design do jogo com conceitos de Salen e Zimmerman;
- documentação ágil com Scrum adaptado ao contexto acadêmico;
- ADR para escolha da plataforma Web;
- documento final do PID na estrutura exigida.

As pendências restantes são de evidência: dados reais de hardware, protótipo
jogável, fechamento real da Sprint, atualização do documento final e preparação
da apresentação oral.

## Fase A - Consolidação dos dados reais

**Pendências cobertas:** 1 e 2.

### Objetivo

Substituir placeholders por dados reais do projeto individual e registrar a
infraestrutura de desenvolvimento.

### Ações

1. Inserir Roger Quinelato como Product Owner, Scrum Master e Developer.
2. Levantar a configuração real do notebook:
   - sistema operacional;
   - CPU;
   - RAM;
   - GPU;
   - tipo de armazenamento e espaço livre, se disponível.
3. Atualizar o ADR com a configuração real e a análise de gargalos.
4. Atualizar a documentação Scrum para deixar claro que o projeto é individual.

### Critério de saída

- O ADR não contém placeholders de hardware.
- A documentação ágil identifica Roger Quinelato nos papéis Scrum.
- A análise de gargalo justifica a escolha por HTML, CSS e JavaScript com base
  nos dados reais do notebook.

### Prompt ajustado

```text
Agente, use a skill docs-writer. Edite os arquivos
docs/adr/001-usar-web-html-js-para-o-jogo.md,
documentacao-agil-derivamente.md e documento-final-pid.md.

Considere que o projeto é individual. Roger Quinelato exerce os papéis de
Product Owner, Scrum Master e Developer.

Substitua os placeholders de hardware no ADR pelas seguintes configurações:
SO: [INSERIR]
CPU: [INSERIR]
RAM: [INSERIR]
GPU: [INSERIR]
Armazenamento: [INSERIR]

Revise o texto para manter linguagem acadêmica e coerência terminológica.
```

## Fase B - Execução prática do protótipo MVP

**Pendência coberta:** 3.

### Objetivo

Criar um protótipo jogável mínimo do DerivaMente, suficiente para demonstrar a
mecânica central definida na Fase 1.

### Escopo mínimo do MVP

- Uma tela inicial ou cabeçalho do jogo.
- Uma rodada com questão de Cálculo 1, preferencialmente limites.
- Quatro alternativas de resposta.
- Validação de resposta correta ou incorreta.
- Pontuação.
- Energia de Raciocínio.
- Feedback pedagógico após a resposta.
- Botão para avançar ou reiniciar.

### Critério de saída

- O jogo abre localmente pelo arquivo `index.html`.
- A rodada é interativa.
- O feedback aparece após a resposta.
- Pontuação e energia mudam conforme a ação do jogador.
- O código está organizado em `index.html`, `style.css` e `script.js`.

### Prompt ajustado

```text
Agente, resolva a pendência do protótipo jogável. Crie os arquivos
index.html, style.css e script.js na raiz do projeto.

Desenvolva um MVP funcional do DerivaMente em HTML, CSS e JavaScript. O
protótipo deve demonstrar uma mecânica central: responder uma questão de
limite para ganhar pontos ou perder energia. Inclua quatro alternativas,
cronômetro simples ou estado de rodada, feedback pedagógico, pontuação,
energia e botão de reinício.

Use CSS puro, sem placeholders de imagem. O design deve ser limpo, legível e
adequado ao contexto acadêmico.
```

## Fase C - Fechamento real da Sprint 1

**Pendências cobertas:** 4 e 5.

### Objetivo

Transformar o protótipo em evidência de Incremento e preencher uma
Retrospectiva real da Sprint 1.

### Ações

1. Registrar o Incremento Entregue.
2. Descrever tecnicamente o protótipo MVP.
3. Verificar o protótipo contra a Definição de Pronto.
4. Preencher a Retrospectiva da Sprint 1.
5. Registrar melhorias para a próxima Sprint.

### Critério de saída

- Existe um arquivo de fechamento da Sprint 1 ou uma seção equivalente na
  documentação ágil.
- O Incremento Entregue está descrito.
- A Retrospectiva não está mais vazia.
- Há pelo menos três ações de melhoria para a próxima Sprint.

### Prompt ajustado

```text
Agente, use a skill docs-writer. Agora que temos o protótipo MVP, crie o
arquivo fechamento-sprint1.md.

Inclua:
1. Identificação da Sprint 1;
2. Meta da Sprint;
3. Incremento Entregue, descrevendo index.html, style.css e script.js;
4. Verificação contra a Definição de Pronto;
5. Sprint Retrospective preenchida com base em um cenário realista de trabalho
individual: sucesso em entregar o protótipo rapidamente, limitação inicial de
UI/UX e necessidade de ampliar banco de questões;
6. Ações de melhoria para a próxima Sprint.

Mantenha terminologia do Scrum Guide 2020 e linguagem acadêmica.
```

## Fase D - Atualização do Documento Final (PID)

**Pendência coberta:** 7.

### Objetivo

Atualizar o documento principal para que ele represente o estado real do
projeto após a implementação do MVP.

### Ações

1. Inserir a configuração real de hardware.
2. Confirmar Roger Quinelato nos papéis Scrum.
3. Adicionar evidência textual da entrega do protótipo MVP.
4. Indicar como executar o protótipo.
5. Referenciar o fechamento da Sprint 1.

### Critério de saída

- O documento final menciona o protótipo jogável.
- O documento final informa como testar o jogo localmente.
- O documento final não descreve o projeto apenas como proposta, mas como
  entrega com MVP.

### Prompt ajustado

```text
Agente, use a skill docs-writer para atualizar documento-final-pid.md.

Inclua:
1. A configuração real de hardware no desenvolvimento técnico;
2. Roger Quinelato como Product Owner, Scrum Master e Developer;
3. Um parágrafo evidenciando a entrega do protótipo MVP;
4. A instrução de teste: abrir o arquivo index.html no navegador;
5. Referência ao fechamento da Sprint 1.

Mantenha a estrutura exigida do PID: Introdução, Objetivo, Desenvolvimento
com 3.1 Design de Jogos e 3.2 Metodologia Scrum, e Considerações Finais.
```

## Fase E - Preparação para a defesa oral

**Pendência coberta:** 6.

### Objetivo

Criar um roteiro de apresentação oral de 10 a 15 minutos, adequado à defesa do
Projeto 1.

### Estrutura recomendada

1. Apresentação do projeto e dor educacional.
2. Solução proposta: DerivaMente.
3. Conceitos de design de jogos adotados.
4. Adaptação do Scrum ao trabalho individual.
5. Decisão tecnológica e infraestrutura.
6. Demonstração do protótipo MVP.
7. Conclusão e próximos passos.

### Critério de saída

- Existe um roteiro de apresentação no repositório.
- O roteiro indica falas do apresentador.
- Há um momento claro de demonstração do protótipo.
- A apresentação cobre design de jogos, Scrum e protótipo.

### Prompt ajustado

```text
Agente, use a skill docs-writer para criar roteiro_apresentacao.md.

Crie uma apresentação oral de 10 a 15 minutos para o Projeto 1, considerando
que Roger Quinelato é o apresentador e único integrante do projeto.

Divida em:
1. Apresentação do projeto e dor educacional;
2. Solução DerivaMente;
3. Game Design com Salen e Zimmerman;
4. Scrum adaptado ao trabalho individual;
5. Decisão tecnológica e infraestrutura;
6. Demonstração do protótipo MVP;
7. Conclusão.

Inclua, para cada tópico, o objetivo do slide e um script de fala.
```

## Ordem recomendada de execução

1. Executar Fase A para fechar dados reais e papéis.
2. Executar Fase B para gerar evidência prática.
3. Executar Fase C para documentar Sprint real.
4. Executar Fase D para atualizar o documento final.
5. Executar Fase E para preparar a defesa.

Essa ordem reduz retrabalho: primeiro corrige a base documental, depois cria o
protótipo, em seguida registra o histórico da Sprint e, por fim, consolida a
entrega e a apresentação.
