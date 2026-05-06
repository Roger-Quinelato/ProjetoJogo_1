# Documento Final (PID) - DerivaMente

## 1. Introdução

O presente documento apresenta a consolidação das etapas de concepção,
planejamento e definição tecnológica do projeto *DerivaMente*, um jogo
educacional voltado ao apoio da aprendizagem em Cálculo 1. A proposta foi
desenvolvida no contexto de uma Unidade Curricular de graduação, com foco na
aplicação integrada de fundamentos de design de jogos, metodologia ágil Scrum
e tomada de decisão técnica documentada.

O projeto parte de uma dificuldade recorrente no ensino de Cálculo 1: muitos
estudantes compreendem parcialmente os conceitos em aulas expositivas, mas
encontram obstáculos ao aplicá-los em situações de resolução ativa. Esse
problema aparece, por exemplo, em erros de manipulação algébrica em limites,
uso inadequado de regras de derivação, confusão entre antiderivada e integral
definida, e dificuldade de interpretar o significado dos resultados obtidos.

Nesse cenário, o *DerivaMente* propõe o uso de uma experiência lúdica,
estruturada e mensurável. O jogo transforma exercícios de Cálculo 1 em rodadas
curtas, nas quais o estudante precisa analisar uma questão, selecionar ou
construir uma resposta, receber feedback imediato e acompanhar seu desempenho.
Assim, o erro deixa de ser apenas uma falha avaliativa e passa a funcionar como
informação diagnóstica para orientar a aprendizagem.

A elaboração do projeto foi organizada em três fases complementares. A primeira
fase definiu o design do jogo com base em conceitos de Salen e Zimmerman, como
definição formal, sistema, regras, mecânica central, espaço de possibilidades,
feedback, conflito, círculo mágico e resultado mensurável. A segunda fase
estruturou a gestão ágil do projeto a partir do Scrum Guide 2020, incluindo
Scrum Team, Meta do Produto, Product Backlog, Sprint Planning, Sprint Backlog,
Definição de Pronto e Retrospectiva. A terceira fase registrou, por meio de um
ADR em formato MADR, a decisão arquitetural de desenvolver o jogo com
tecnologias Web, utilizando HTML, CSS e JavaScript.

## 2. Objetivo

O objetivo geral do projeto é desenvolver um jogo educacional de jogador único
que auxilie estudantes iniciantes de Cálculo 1 na prática de limites,
derivadas e integrais, por meio de desafios interativos, feedback pedagógico e
progressão de dificuldade.

Como objetivos específicos, o projeto busca:

- estruturar uma experiência de jogo com regras explícitas, objetivos claros e
  resultado mensurável;
- promover recuperação ativa de conceitos de Cálculo 1 por meio da resolução
  recorrente de problemas;
- oferecer feedback imediato que explique o raciocínio correto após acertos e
  erros;
- utilizar pontuação, energia, sequência de acertos, dicas e níveis como
  recursos de engajamento e diagnóstico;
- organizar o desenvolvimento do produto por meio de Scrum, com entregas
  incrementais e inspeção contínua;
- selecionar uma plataforma tecnológica compatível com a infraestrutura
  disponível, com baixo custo de instalação e boa acessibilidade para
  estudantes e avaliadores.

## 3. Desenvolvimento

### 3.1 Descrever e justificar o uso dos conceitos de design de jogos adotados

O design do *DerivaMente* foi elaborado a partir da compreensão do jogo como
um sistema de regras, decisões e consequências. Segundo essa perspectiva, o
jogo não se limita à apresentação visual de exercícios, mas organiza uma
experiência na qual o estudante interage com problemas matemáticos dentro de
um ambiente controlado, seguro e orientado por objetivos.

Formalmente, o *DerivaMente* é um jogo de jogador único. O jogador é o
estudante, e o conflito principal ocorre entre o estudante e o sistema. Esse
conflito é artificial, pois é produzido pelas regras do jogo, mas representa uma
dificuldade real do processo de aprendizagem: compreender e aplicar conceitos
de Cálculo 1 em tempo limitado, com precisão e consistência. A condição de
progresso depende da resolução correta das questões, enquanto erros e ausência
de resposta afetam a Energia de Raciocínio, recurso que simboliza a
continuidade da sessão.

O sistema do jogo é composto por entidades interdependentes: jogador, questão,
nível, cronômetro, pontuação, energia, dica, sequência de acertos e feedback.
Cada entidade possui função específica na experiência. A questão apresenta o
problema matemático; o cronômetro introduz limite temporal; a pontuação registra o
desempenho; a energia cria consequência para erros; a dica oferece apoio
pedagógico; a sequência de acertos recompensa consistência; e o feedback
transforma cada resposta em oportunidade de aprendizagem.

A mecânica central consiste em analisar uma expressão ou situação de Cálculo 1,
identificar o procedimento adequado e responder corretamente dentro do tempo
disponível. Essa mecânica é adequada ao objetivo pedagógico porque exige
recuperação ativa, tomada de decisão e aplicação de conceitos. Em limites, o
estudante pode precisar reconhecer uma substituição direta, uma indeterminação
ou uma fatoração necessária. Em derivadas, deve escolher regras como potência,
produto, quociente ou cadeia. Em integrais, deve reconhecer antiderivadas,
integrais definidas e procedimentos elementares de substituição.

As regras do jogo foram organizadas em três grupos. As regras operacionais
definem como o estudante joga: iniciar a sessão, selecionar tópico, responder
às questões, usar dicas e avançar de nível. As regras constitutivas definem
como o sistema calcula pontuação, bônus de tempo, sequência de acertos, perda
de energia e progressão. As regras implícitas orientam o uso acadêmico do jogo,
reforçando que a proposta serve como ferramenta de prática formativa, e não como
substituição do estudo teórico ou de avaliações formais.

O espaço de possibilidades foi planejado para cobrir os principais tópicos de
Cálculo 1. A progressão inicial contempla níveis de limites, derivadas e
integrais, com dificuldade crescente e uma fase mista para verificar
transferência de aprendizagem. Essa estrutura evita que o estudante permaneça
apenas em exercícios isolados e favorece uma trajetória gradual de domínio
conceitual.

O feedback ocupa papel central no projeto. Respostas corretas reforçam o
procedimento utilizado, enquanto respostas incorretas apresentam a alternativa
correta e explicam o erro provável. Esse ponto é essencial para a finalidade
educacional do jogo: não basta informar que uma resposta está errada; é
necessário explicitar o raciocínio matemático envolvido. Por exemplo, diante
de um limite com forma indeterminada, o feedback deve indicar que a
substituição direta gerou uma indeterminação e que outro procedimento, como
fatoração, deveria ser aplicado.

O resultado mensurável é composto por pontuação final, taxa de acerto por
tópico, tempo médio, uso de dicas e identificação de erros por subtópico. Essas
métricas permitem que o desempenho seja interpretado pedagogicamente. Um
estudante com muitos acertos, mas alto uso de dicas, apresenta perfil diferente
de outro que erra pouco, mas demora excessivamente para responder. Dessa forma,
o jogo pode funcionar como instrumento de autoavaliação formativa.

Do ponto de vista tecnológico, a decisão registrada para o desenvolvimento foi
o uso de tecnologias Web, com HTML, CSS e JavaScript. Essa escolha foi tomada
após comparação com Unity e Python/Pygame. Unity oferece recursos robustos de
engine, mas apresenta maior custo de instalação, consumo de memória,
dependência de hardware e complexidade para um jogo educacional 2D centrado em
questões e feedback. Python/Pygame é viável para prototipagem local, mas exige
configuração de ambiente e dificulta a distribuição para usuários sem Python
instalado.

A alternativa Web foi considerada a mais adequada porque reduz gargalos de
infraestrutura, funciona em navegadores modernos, facilita demonstrações em
ambiente acadêmico e amplia a acessibilidade. Como o núcleo do *DerivaMente*
envolve interface textual, lógica de rodada, pontuação, cronômetro, feedback e
relatório, a plataforma Web atende às necessidades do produto sem impor uma
carga técnica desnecessária. Além disso, permite evolução futura para
hospedagem online, armazenamento local ou adaptação como aplicação progressiva.

A decisão também considerou a infraestrutura real de desenvolvimento. O
notebook utilizado por Roger Quinelato executa Microsoft Windows 11 Home Single
Language 64 bits, possui processador Intel Core i5-8250U com 4 cores e 8
threads, 7,91 GB de memória RAM, GPU integrada Intel UHD Graphics 620 e SSD de
256 GB, com 45,64 GB livres na unidade principal no momento da coleta. Essa
configuração é suficiente para desenvolvimento Web, testes locais em navegador
e edição de arquivos HTML, CSS e JavaScript. Entretanto, a RAM disponível, a
GPU integrada e o espaço livre limitado tornam menos adequada a adoção de
ambientes mais pesados, como engines completas com editor visual, múltiplos
caches e processos de build. Portanto, a escolha por tecnologias Web mantém a
viabilidade técnica do projeto e reduz riscos de desempenho, instalação e
apresentação em contexto acadêmico.

### 3.2 Itens referentes a Metodologia Scrum

A gestão do projeto foi estruturada com base no Scrum Guide 2020. A escolha de
Scrum se justifica pela natureza incremental do produto e pela necessidade de
inspeção e adaptação constantes. O desenvolvimento de um jogo educacional
envolve incertezas sobre jogabilidade, clareza pedagógica, dificuldade das
questões, balanceamento de tempo e adequação da interface. Por isso, o trabalho
em Sprints permite validar hipóteses gradualmente, em vez de concentrar todos
os riscos no final do projeto.

O Scrum Team foi definido como uma equipe acadêmica individual. Neste projeto,
Roger Quinelato acumula os papéis de Product Owner, Scrum Master e Developer.
Como Product Owner, representa o valor educacional do produto e ordena o
Product Backlog conforme prioridade, dependência e contribuição para a Meta do
Produto. Como Scrum Master, organiza o uso do framework, acompanha impedimentos
e preserva a cadência dos eventos. Como Developer, responsabiliza-se pela
criação do incremento, abrangendo design de jogo, conteúdo matemático,
desenvolvimento, testes, documentação e apresentação.

A Meta do Produto foi definida como a criação de um jogo educacional de
jogador único que apoie estudantes iniciantes de Cálculo 1 na prática de
limites, derivadas e integrais, com desafios curtos, feedback imediato,
progressão de dificuldade e métricas simples de desempenho. Essa meta oferece
direção ao Product Backlog e orienta as decisões de escopo. Recursos que não
contribuem diretamente para essa meta, como modo multiplayer ou conteúdos de
disciplinas posteriores, permanecem fora do escopo inicial.

O Product Backlog contém itens necessários para tornar o produto utilizável e
pedagogicamente coerente. Entre os itens de maior prioridade estão a definição
da identidade do produto, modelagem das regras centrais, criação do banco de
questões, projeto da tela principal da rodada, implementação do fluxo jogável,
sistema de pontuação e energia, feedback pedagógico e validação do conteúdo
matemático. Os itens foram estimados em tamanhos P, M e G, permitindo visão
inicial de complexidade e esforço.

A Sprint Planning da primeira Sprint foi estruturada a partir de três
perguntas: por que a Sprint é valiosa, o que pode ser feito nela e como o
trabalho será realizado. A Meta da Sprint foi entregar uma rodada jogável de
limites que demonstre a mecânica central do *DerivaMente* e permita avaliar
clareza, regras e feedback pedagógico. Essa escolha concentra esforço no maior
risco inicial: verificar se a proposta funciona como experiência interativa
antes de ampliar o banco de questões e a progressão por níveis.

O Sprint Backlog da primeira Sprint inclui itens relacionados à definição da
identidade do produto, modelagem das regras, criação de questões de limites,
prototipação da tela principal, implementação da rodada, cálculo de pontuação
e energia, feedback pós-resposta e validação matemática. As tarefas foram
decompostas em unidades menores, como criar questões, revisar distratores,
implementar seleção de resposta, atualizar pontuação e registrar evidências da
Sprint.

A Definição de Pronto estabelece o padrão mínimo de qualidade para que um item
seja considerado parte do incremento. Um item está pronto quando atende aos
critérios de aceitação, contribui para a Meta da Sprint ou Meta do Produto,
possui conteúdo matemático revisado quando aplicável, apresenta comportamento
consistente para acertos e erros, foi verificado por meio de checklist de
qualidade e pode ser apresentado na Sprint Review sem depender de explicações
improvisadas.
Para itens de conteúdo matemático, exige-se enunciado sem ambiguidade, apenas
uma resposta correta, distratores ligados a erros reais de aprendizagem,
explicação adequada e indicação de tópico, subtópico e dificuldade.

Por fim, o modelo de Retrospectiva foi definido para apoiar a melhoria
contínua do projeto. A equipe deve registrar o que deu certo, o que dificultou
o trabalho, o que foi aprendido sobre o produto, o que foi aprendido sobre o
processo e quais ações serão adotadas na próxima Sprint. Esse registro reforça
a lógica empírica do Scrum, na qual decisões futuras se baseiam em evidências
observadas durante o desenvolvimento.

## 4. Considerações Finais

O projeto *DerivaMente* articula fundamentos de design de jogos, metodologia
ágil e decisão tecnológica de forma coerente com uma proposta acadêmica de
graduação. A concepção do jogo parte de uma necessidade educacional concreta:
apoiar estudantes na prática ativa de Cálculo 1, especialmente nos tópicos de
limites, derivadas e integrais.

A análise de design mostra que o jogo foi concebido como um sistema de regras
e consequências, e não apenas como um conjunto de perguntas digitalizadas. A
presença de objetivos, conflito, feedback, progressão, pontuação e resultado
mensurável contribui para transformar a resolução de exercícios em uma
experiência interativa com valor pedagógico. Ao mesmo tempo, a explicação
pós-resposta preserva o caráter formativo do produto, pois permite que o
estudante compreenda o erro e identifique o conceito que precisa revisar.

A adoção de Scrum fornece uma estrutura adequada para o desenvolvimento
incremental do jogo. O Product Backlog organiza o trabalho, a Meta do Produto
orienta as prioridades, a Sprint Planning define foco de curto prazo, o Sprint
Backlog torna o plano visível e a Definição de Pronto estabelece critérios de
qualidade. A Retrospectiva, por sua vez, cria um espaço formal para avaliação
do processo e melhoria contínua da equipe.

A decisão por tecnologias Web, registrada em ADR, fortalece a viabilidade do
projeto. HTML, CSS e JavaScript oferecem uma plataforma leve, acessível e
compatível com a infraestrutura acadêmica. Essa escolha reduz barreiras de
instalação, facilita testes com estudantes e simplifica a apresentação para
professores e avaliadores. Embora a opção exija disciplina na organização do
código e possa demandar bibliotecas adicionais para notação matemática, seus
benefícios são adequados ao escopo atual do produto.

Conclui-se que o *DerivaMente* apresenta uma proposta tecnicamente viável,
pedagogicamente justificável e metodologicamente organizada. O projeto reúne
prática matemática, feedback formativo, desenvolvimento incremental e escolha
tecnológica compatível com o contexto de execução.

Como principal resultado material, o projeto consolidou a entrega de um
protótipo MVP (Minimum Viable Product) funcional, conforme formalizado
no fechamento da Sprint 1 (`fechamento-sprint1.md`). O protótipo demonstra
a mecânica central implementada, evidenciando o funcionamento da rodada de
questões, a gestão da Energia de Raciocínio, o cálculo de pontuação e o
feedback pedagógico imediato.

Para testar o MVP, basta extrair ou clonar o projeto e abrir o arquivo
`index.html` diretamente em um navegador web moderno (como Chrome, Edge
ou Firefox).

Como passos futuros, recomenda-se ampliar o banco inicial de questões com
revisão matemática, realizar mais testes de usabilidade com usuários finais
(estudantes) e utilizar os resultados obtidos para refinar a dificuldade, o
tempo, o feedback e a progressão de níveis.
