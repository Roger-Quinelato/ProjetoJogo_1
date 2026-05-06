# Fechamento da Sprint 1 - DerivaMente

| Campo | Valor |
|---|---|
| Sprint | Sprint 1 |
| Data de Fechamento | 2026-05-05 |
| Participantes | Roger Quinelato (Product Owner, Scrum Master e Developer) |
| Contexto | Projeto acadêmico aplicado - Desenvolvimento individual |

## 1. Meta da Sprint

Entregar uma rodada jogável de limites que demonstre a mecânica central do DerivaMente e permita avaliar clareza, regras e feedback pedagógico. Atingida com sucesso e com **escopo excedido**: durante a Sprint, também foram implementadas questões de derivadas e integrais para cobrir integralmente as exigências do Projeto 1.

## 2. Incremento Entregue

O incremento desta Sprint consistiu na materialização do protótipo MVP jogável, composto pelos seguintes arquivos na raiz do repositório:

- `index.html`: Estrutura principal da tela de rodada, contendo exibição de questão, alternativas, pontuação e Energia de Raciocínio.
- `style.css`: Estilização limpa e acadêmica usando CSS puro, garantindo legibilidade e organização espacial da interface sem uso de bibliotecas externas pesadas.
- `script.js`: Lógica de validação da rodada, controle de fluxo (selecionar resposta, calcular pontuação/energia), apresentação de feedback pedagógico e avanço de questão.

O incremento comprova a viabilidade técnica da decisão por tecnologias Web e torna inspecionável a mecânica central proposta na fase de design de jogos, contemplando simultaneamente questões de limites, derivadas e integrais conforme exigido para a avaliação do projeto acadêmico.

## 3. Verificação contra a Definição de Pronto (DoD)

- [x] O incremento contribui diretamente para a Meta da Sprint e Meta do Produto.
- [x] O conteúdo matemático da rodada inicial foi validado.
- [x] Há comportamento consistente para acerto (soma de pontuação) e erro (perda de energia).
- [x] A linguagem do feedback é clara e compreensível.
- [x] A entrega foi verificada individualmente (checklist de qualidade cumprido por Roger Quinelato).
- [x] Pode ser apresentado na Sprint Review sem necessidade de improvisos.

## 4. Sprint Retrospective

A Retrospectiva da Sprint foi conduzida para avaliar o processo e definir adaptações.

### 4.1 O que deu certo?
A decisão de manter o escopo técnico restrito ao HTML, CSS e JavaScript puros permitiu uma entrega rápida do protótipo MVP. O foco em uma mecânica central (responder questão e receber feedback) evitou desperdício de tempo com recursos que não são essenciais neste momento (como menus complexos ou telas de configuração).

### 4.2 O que dificultou o trabalho?
Trabalhar isoladamente impõe o desafio de validar a usabilidade (UI/UX) da tela principal. A limitação inicial de não ter usuários externos validando o design tornou difícil perceber imediatamente se os botões e os feedbacks estavam visualmente destacados o suficiente.

### 4.3 O que aprendemos sobre o produto?
O feedback pedagógico precisa ser tão claro quanto a própria pergunta. Ao errar uma questão de limite, a explicação torna-se o verdadeiro valor educacional da rodada. A necessidade de ampliar o banco de questões ficou evidente para aumentar a longevidade da sessão.

### 4.4 O que aprendemos sobre o processo?
A adaptação do Scrum para um contexto de desenvolvimento individual foi bem-sucedida, pois os eventos de planejamento e inspeção trouxeram foco. No entanto, testar usabilidade requer envolvimento externo contínuo.

## 5. Ações de melhoria para a próxima Sprint

1. **Ampliar banco de questões:** Expandir a base atual (que já conta com limites, derivadas e integrais) criando dezenas de novas perguntas para testar a progressão completa de dificuldade e níveis. *(Responsável: Roger Quinelato)*
2. **Refinar UI/UX do feedback:** Aumentar o destaque visual entre acertos e erros para tornar a navegação mais intuitiva. *(Responsável: Roger Quinelato)*
3. **Buscar validação externa:** Realizar um teste rápido de usabilidade com pelo menos um colega ou professor para avaliar clareza da interface. *(Responsável: Roger Quinelato)*
