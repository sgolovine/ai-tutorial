---
title: Aprenda com IA, seu tutor particular
description: Aprenda as ferramentas da campanha uma tarefa por vez, com perguntas, capturas de tela, modos de estudo e prática. Inclui conferência de fontes, plano curto de aprendizagem e comandos para a equipe do CONAFROEDU.
order: 35
section: start
icon: 🎓
updated: 2026-10-21
---

Você pode pedir a um assistente que ensine a montar uma arte, explique um termo desconhecido, confira uma legenda ou ajude a encontrar o próximo controle na tela. Não precisa se tornar especialista em IA antes de colaborar com o CONAFROEDU.

Este guia traz uma rotina prática, comandos de tutoria, ajuda com capturas de tela, estudo com documentos e formas de conferir se você já consegue executar a tarefa. **Comece pelo assistente gratuito que já utiliza.** Se precisar de aplicativo ou conta, siga [Configuração das ferramentas](setup-tools.md#starter-stack).

> [!NOTE]
> Documentação dos recursos consultada em **21 de outubro de 2026**. Os exercícios e tempos sugeridos são propostas de estudo, não garantias medidas de aprendizagem nem um segundo calendário de publicações. Use o [calendário da campanha](campaign-timeline.md) para prazos e responsabilidades reais.

<span id="first-session"></span>

## Sua primeira sessão: uma tarefa em 20 minutos

Escolha algo pequeno o bastante para concluir: “escrever um convite claro para o Facebook” funciona melhor que “aprender marketing digital”. Deixe abertos uma ficha pública aprovada e um guia relevante.

1. **Cinco minutos: explicar e identificar dúvidas.** Conte ao tutor seu objetivo e o que já sabe. Peça um exemplo curto e uma pergunta.
2. **Cinco minutos: tentativa orientada.** Faça uma tarefa pequena. Se travar, peça uma pista, sem solicitar imediatamente a resposta completa.
3. **Oito minutos: repetir por conta própria.** Feche o exemplo e produza outra versão, com redação diferente ou outra foto autorizada.
4. **Dois minutos: conferir e registrar.** Compare com os fatos originais. Anote o que fez, onde precisou de ajuda e o que praticar depois.

No primeiro exercício, rascunhe uma legenda de Facebook em português anunciando o **I CONAFROEDU, em 5 e 6 de dezembro de 2026, 100% on-line**, com base na [ficha aprovada atual](prompting-basics.md). Mantenha como rascunho. Outra pessoa da equipe deve conseguir identificar evento, datas e próxima ação sem ler a conversa com IA.

<span id="tutor-prompts"></span>

## Peça um tutor que espere sua resposta

Muitos assistentes entregam a solução inteira de uma vez. Para aprender, peça passos curtos e avaliação depois da sua tentativa. Isso costuma ser chamado de **tutoria socrática**: perguntas ajudam você a construir o raciocínio.

```prompt
Seja meu tutor paciente. Sou uma pessoa da educação no Brasil que já usou chatgpt.com ou claude.ai, mas ainda não utiliza ferramentas avançadas.

Objetivo: aprender a escrever um convite orgânico claro para o Facebook do CONAFROEDU, usando a ficha aprovada que vou colar abaixo.
Tempo disponível: 20 minutos. Responda em português brasileiro, com palavras familiares, explicando termos técnicos na primeira menção.

Primeiro pergunte o que já sei e qual parte está difícil. Faça uma pergunta por vez e espere minha resposta. Mostre um exemplo curto e depois proponha uma tarefa parecida. Dê uma pista antes de entregar a solução. Confira fatos no documento fornecido e aponte informações ausentes. Ao final, peça que eu complete um novo exemplo sem ajuda.

[COLE A FICHA APROVADA ATUAL E A VOZ CANÔNICA DE PROMPTING-BASICS]
```

Todo texto para divulgação deve sair em pt-BR; a [versão inglesa deste guia](../en/learning-with-ai.md) também orienta isso. A **VOZ DA MARCA** canônica está em [Como conversar com a IA](prompting-basics.md); reutilize-a, em vez de pedir a cada tutor uma voz diferente.

### Perguntas úteis para continuar

| Quando precisar de… | Peça… |
|---|---|
| Linguagem mais simples | “Explique para uma professora que usa WhatsApp, mas nunca editou vídeo. Depois diga o termo técnico.” |
| Entender a finalidade | “Que problema esse passo resolve? Mostre um exemplo e uma situação em que eu poderia dispensá-lo.” |
| Um próximo passo menor | “Dê só a próxima ação. Espere até eu contar o resultado.” |
| Ajuda sem a solução | “Dê uma pista e deixe que eu tente antes de mostrar a resposta.” |
| Correção honesta | “Confira minha tentativa nesta fonte. Identifique o erro específico e peça que eu corrija.” |
| Aplicar em outra tarefa | “Proponha um exemplo novo, com redação diferente, para eu não conseguir apenas copiar.” |
| Conhecer limites reais | “O que consigo fazer gratuitamente na minha conta? Qual passo depende de assinatura ou recurso que você não verificou?” |

Corrigir o tutor faz parte do trabalho. “Esse botão não está na minha tela” é uma informação útil; deve levar a uma nova observação, não à repetição mais confiante do mesmo caminho.

<span id="study-modes"></span>

## Modos de estudo: escolha um, sem precisar usar todos

| Caminho | Disponibilidade e início | Exercício útil |
|---|---|---|
| **ChatGPT Study / Estudo** | Em todos os planos, inclusive Free; [abra Study](setup-tools.md#study-mode) em **conversa comum**, fora de Projects/GPTs/conversas temporárias | Peça uma pergunta por vez sobre uma checklist pública anexada |
| **Conversa comum no Claude** | Gratuita com limites; [configuração do Claude](setup-tools.md#claude) | Cole o comando de tutoria; isso não ativa um modo institucional especial |
| **Learning mode do Claude for Education** | Oferta educacional institucional documentada; confira com sua instituição | Trabalhe um conceito por perguntas orientadoras |
| **Aprendizado guiado / Guided Learning do Gemini** | Entre no Gemini; caminho web documentado, liberação móvel variável | Entenda um conceito e pratique com exemplos |
| **NotebookLM / Gemini Notebook** | Gratuito com limites; [configuração do caderno](setup-tools.md#notebooklm) | Gere perguntas com base nos documentos aprovados selecionados |

No Gemini pela web: abra [Gemini](https://gemini.google.com/) → controle de adicionar arquivos/ferramentas → **Mais ferramentas → Aprendizado guiado**, escreva o tema e envie. Se não aparecer no celular, tente o site. [Instruções oficiais das ferramentas de aprendizagem](https://support.google.com/gemini/answer/16448384?hl=pt-BR).

O Learning mode institucional do Claude não deve ser prometido como botão de toda conta pessoal Free/Pro. Os estilos **Learning/Explanatory** do Claude Code são recursos separados para aprender programação; não são necessários para estudar marketing. Se você já usa Code, consulte a configuração/ajuda atual e a [instalação](setup-tools.md#claude-code). [Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education), [orientação de aprendizagem no Code](https://support.claude.com/en/articles/14554000-claude-code-power-user-tips).

Um modo de estudo ainda pode errar ou revelar a resposta cedo demais. Diga “Espere minha tentativa primeiro”. Ele não acrescenta cotas de mensagens/arquivos ao seu plano. [Ajuda do Study do ChatGPT](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt).

<span id="screenshots"></span>

## “Estou nesta tela. O que faço agora?”

Você pode receber orientação por imagem sem instalar um agente de navegador. O assistente vê a captura enviada; não acompanha automaticamente sua tela ao vivo nem clica em nada.

1. Abra o aplicativo/página exato em que travou. Anote aparelho, navegador e tipo de conta/plano.
2. Faça uma captura: Windows **Win + Shift + S**; Mac **Shift + Command + 4**. No celular, use o comando de captura do aparelho.
3. Recorte ou cubra nomes, e-mails, telefones, QR codes, listas de inscritos, notificações e abas sem relação com a dúvida. Mantenha botões relevantes e mensagem de erro legíveis.
4. Anexe pelo controle de imagem/arquivo da conversa e explique o resultado pretendido.
5. Peça **um próximo passo visível**, execute você mesma e conte o que aconteceu. Envie outra captura recortada quando a tela mudar.

```prompt
Esta é minha tela atual em [APLICATIVO], no [APARELHO/NAVEGADOR]. Quero [OBJETIVO]. Já tentei [AÇÃO] e obtive [RESULTADO].

Primeiro descreva os controles que você realmente consegue ler nesta captura. Dê um próximo passo reversível e espere. Se o controle necessário não estiver visível, diga qual área abrir ou de qual nova captura precisa. Não invente um botão nem suponha que vê outra aba. Explique em português brasileiro.

Neste exercício, pare antes de publicar, enviar, comprar, migrar contas ou apagar arquivos.
```

**Exemplo:** no Business Suite, o objetivo pode ser “encontrar o rascunho salvo, sem publicar ainda”. Confira Página e destino antes de qualquer clique com consequência. Se o assistente indicar um controle inexistente, avise e peça que compare a imagem com a [configuração atual](setup-tools.md#meta-business-suite).

> [!WARNING]
> Não cole senha, código de verificação de login ou registro completo de diagnóstico na conversa. Uma captura pode revelar as mesmas informações que uma planilha. Use um documento descartável para aprender ações no computador.

<span id="better-questions"></span>

## Faça perguntas melhores e investigue erros

Um pedido útil reúne **objetivo + ambiente + tentativa + resultado observado**. “O vídeo não funciona” é difícil de investigar. “No CapCut do Windows, exportei um arquivo sem som; o original tem som e esta é a tela da faixa de áudio” dá ao tutor algo concreto para examinar.

```prompt
Ajude a investigar sem mudar várias coisas ao mesmo tempo.
Objetivo: [O QUE DEVERIA ACONTECER].
Ferramenta/aparelho/versão/plano, se souber: [DETALHES].
O que fiz: [UM OU DOIS PASSOS].
O que aconteceu: [ERRO EXATO OU OBSERVAÇÃO, SEM DADOS PRIVADOS].

Separe o que consegue observar das possíveis explicações. Faça uma pergunta de esclarecimento se necessário. Sugira a menor verificação reversível, explique o que o resultado mostraria e espere por mim. Pesquise as instruções oficiais atuais se precisar confirmar um recurso ou menu. Não comece sugerindo reinstalar tudo.
```

Para erro de código, envie a mensagem relevante e um trecho pequeno e revisado; retire credenciais e caminhos de arquivos privados. Não execute comandos que você não sabe explicar só porque a resposta tem um bloco de código. Pergunte quais arquivos altera, o que baixa e como desfazer. A [instalação do Node](setup-tools.md#nodejs) é opcional para quem renderizar animações.

<span id="verification"></span>

## Confira as respostas antes de aprender algo errado

Uma **alucinação de IA** é uma resposta plausível, mas falsa ou sem sustentação. Pode ser uma URL inventada, botão inexistente, plano errado ou regra de congresso afirmada com confiança. Escrever português fluente não comprova precisão.

O treinamento do modelo tem uma data de corte; uma ferramenta de busca pode acrescentar material mais recente, mas não torna toda afirmação atual. Não existe uma única data de corte para um produto inteiro que usa vários modelos. Para preços, planos, instalação, menus e políticas, peça evidência oficial atual.

1. **Peça a fonte.** Exija a página oficial exata e a afirmação que ela sustenta. Se o assistente não puder pesquisar, abra a ajuda e forneça o trecho relevante.
2. **Abra fora da conversa.** Confira domínio, título, data e aplicação ao Brasil, plano e aparelho. Um link que abre ainda pode sustentar outra afirmação.
3. **Procure instruções substituídas.** Um anúncio histórico pode manter passos antigos abaixo de um aviso atual de encerramento. Atlas e o antigo ChatGPT agent são exemplos na [Configuração das ferramentas](setup-tools.md#atlas).
4. **Compare os fatos do evento com a ficha original.** Não use memória do modelo para decidir prazos, valores, obrigatoriedade de apresentação ou critérios do certificado. Uma programação parcial com nomes de palestrantes não equivale à versão final; use apenas os detalhes aprovados.
5. **Teste a instrução num rascunho.** Se a interface for diferente, pare e observe em vez de seguir passos imaginários.
6. **Registre a evidência.** Anote afirmação, fonte, data da conferência, conta/aparelho e resultado. Confira novamente antes de publicar algo sujeito a mudança.

```prompt
Confira esta orientação antes de eu usá-la: [COLE A AFIRMAÇÃO].
Localize a fonte primária oficial atual, se houver pesquisa web disponível. Informe título, URL, data ou aviso de atualização e o ponto exato que ela comprova. Separe fatos confirmados, sua inferência e o que não foi estabelecido. Confira restrições de Brasil, plano e aparelho e se um aviso mais recente substitui as instruções. Se não conseguir verificar, diga isso e proponha uma forma segura de conferir manualmente.
```

A concordância de outro assistente ajuda a encontrar objeções, mas **duas respostas iguais não são verificação independente**. Para Africanidades, interpretação histórica e símbolos culturais, consulte pessoas qualificadas e fontes pertinentes; a IA apoia o estudo, sem decidir qual experiência é autêntica. Veja [Representação e vieses](representation-bias.md).

<span id="notebook-study"></span>

## Transforme estes guias em um pequeno tutor de documentos

Siga a [configuração do NotebookLM / Gemini Notebook](setup-tools.md#notebooklm) se quiser um lugar para perguntar sobre alguns documentos. Comece com três: ficha aprovada, este guia e o guia de Facebook. Adicionar todas as páginas de uma vez dificulta perceber qual fonte responde à dúvida.

1. Importe os documentos públicos com título e data de revisão; confira o texto que chegou.
2. Na **interface do Gemini Notebook**, selecione só as fontes aprovadas relevantes. Não trate conversas sincronizadas do Gemini ou rascunhos antigos de IA como fontes oficiais.
3. Escolha **Idioma de saída → Português (Brasil)**.
4. No **Estúdio / Studio**, gere cartões de estudo ou um teste. Personalize assunto/dificuldade se ajudar; responda antes de revelar explicações.
5. Abra as citações e compare a explicação com a fonte real. Se não houver modelo de guia de estudo/relatório, peça o guia na conversa e salve como nota.

O [guia oficial de cartões e testes](https://support.google.com/gemininotebook/answer/16958963?hl=es-419) descreve criação e revisão. Trabalhar com fontes facilita examinar respostas; não transforma uma fonte errada em verdade. Consulte as [diferenças entre Notebook e Gemini comum](https://support.google.com/gemininotebook/answer/17003757?hl=en).

```prompt
Usando somente as fontes aprovadas selecionadas aqui, ensine a diferença entre inscrição no evento e submissão de trabalho. Faça três perguntas, uma por vez, e espere minhas tentativas. Cite a fonte de cada correção. Se houver conflito na regra de apresentação ou faltar critério de certificado, identifique a incerteza e pergunte qual resposta aprovada pela comissão se aplica. Não invente uma solução.
```

Para uma revisão em áudio, configure o idioma de saída e escolha **Resumo em Áudio / Audio Overview** no Estúdio, quando disponível. Ouça e depois explique o tema sem reproduzir novamente. Confira datas, nomes e pronúncia antes de compartilhar; apresentadores sintéticos não são palestrantes reais do congresso. Áudio é opcional, consome cota de geração e não comprova aprendizagem. [Idioma de saída](https://support.google.com/gemininotebook/answer/16261963?hl=pt), [recursos e ajuda do caderno](https://support.google.com/gemininotebook/?hl=pt-BR).

<span id="practice"></span>

## Pratique lembrar, explicar e aplicar em outro exemplo

Ler uma resposta excelente pode dar a sensação de dominar a tarefa. Confira fazendo com menos ajuda. Uma pesquisa em matemática no ensino médio encontrou prejuízo no desempenho posterior sem a ferramenta quando a assistência de IA não tinha salvaguardas pedagógicas; isso não estabelece um efeito universal para esta equipe, mas é motivo para praticar de forma independente. [Bastani e colegas, PNAS](https://doi.org/10.1073/pnas.2422633122).

Experimente esta rotina:

- **Recupere de memória:** feche a conversa e liste três conferências antes de publicar uma arte.
- **Explique de volta:** conte ao tutor por que inscrição e submissão são diferentes e peça correção com base na ficha.
- **Aplique em outro exemplo:** adapte o convite para professores a estudantes de pós-graduação, sem mudar datas nem promessas.
- **Retome depois:** tente novamente amanhã e cerca de uma semana depois. São intervalos práticos de exemplo, não um calendário ótimo universal.
- **Mantenha um registro de erros:** “confundi inscrição com submissão” ajuda; “sou ruim em IA” não.

```prompt
Vou explicar o que aprendi com minhas próprias palavras: [MINHA EXPLICAÇÃO].
Compare com esta referência aprovada: [TEXTO]. Diga o que está correto, identifique uma omissão ou erro importante, se houver, e faça uma nova pergunta para testar minha compreensão. Não elogie uma resposta incorreta nem a reescreva silenciosamente por mim.
```

### Três exercícios do CONAFROEDU

| Tarefa | Tentativa | Uma pessoa confere |
|---|---|---|
| Legenda de Facebook | Até 80 palavras em pt-BR, um convite e link oficial | Datas certas; inscrição/submissão separadas; voz canônica |
| Arte no Canva | Duplique um design aprovado e troque o texto | Acentos, contraste, data legível, imagens autorizadas, nenhuma promessa inventada |
| Resposta de atendimento | Simule alguém perguntando se 40 horas garantem progressão | Sem garantia; regras da instituição/comissão conferidas; encaminhamento humano quando necessário |

Use a [configuração do Canva](setup-tools.md#canva) no exercício de design e [Respostas e caixa de entrada](replies-inbox.md) para o banco de respostas. São rascunhos de treino, não obrigações extras de publicação. Não crie nomes novos de respostas rápidas para o exercício.

<span id="voice-practice"></span>

## Use voz se falar for mais fácil

Em um assistente com voz, abra o controle de microfone/voz e dê acesso ao microfone só quando necessário. Peça português brasileiro e pratique explicar o congresso a uma colega. Se o reconhecimento errar nome, data ou valor, corrija a transcrição ou passe para texto.

No ChatGPT, use aplicativo/site oficial e os controles de voz disponíveis; planos e modos têm limites diferentes. O ditado também pode fornecer uma pergunta ao Study. Não é preciso compartilhar tela nem instalar agente para um exercício falado. [Configuração do ChatGPT](setup-tools.md#chatgpt), [orientação oficial de voz](https://help.openai.com/en/articles/20001274/).

```prompt
Vamos simular uma conversa em português brasileiro. Você é uma professora que nunca ouviu falar do CONAFROEDU. Faça uma pergunta realista por vez. Deixe que eu responda em voz alta usando só os fatos aprovados. Ao final, avalie a clareza e identifique qualquer promessa que eu não consiga comprovar. Não envie nem publique nada.
```

Em computador compartilhado ou sala dos professores, use fones e evite ler dúvidas privadas em voz alta. Treinar por texto é igualmente aceitável se o áudio for inconveniente ou inacessível.

<span id="learning-plan"></span>

## Um plano de aprendizagem que cabe na campanha

Use **cinco sessões de cerca de 20 minutos** como estimativa inicial, separadas do tempo de produção e atendimento. Repita uma sessão quando necessário. Não é promessa de que toda pessoa iniciante aprende todas as ferramentas em 100 minutos.

| Sessão | Aprenda | Resultado observável |
|---|---|---|
| 1 | Instruções e conferência de fatos | Uma legenda corrigida pela ficha aprovada |
| 2 | Edição no Canva | Uma arte de teste exportada e seu original editável |
| 3 | Navegação na Página/rascunhos | Encontrar um rascunho na Página correta sem publicar por engano |
| 4 | Respostas com revisão humana | Responder três perguntas fictícias com o banco canônico |
| 5 | Repetição independente | Executar uma tarefa sem tutor e explicar a conferência a uma colega |

Na sessão 3, providencie antes [acesso autorizado ao Business Suite](setup-tools.md#meta-business-suite). Na sessão 4, não é preciso usar mensagens reais de participantes.

```prompt
Monte um plano de aprendizagem para mim, não um calendário de publicações.
Função: [TEXTO / DESIGN / ATENDIMENTO / COORDENAÇÃO].
Habilidades atuais: [O QUE JÁ CONSIGO FAZER].
Aparelho e ferramentas gratuitas: [DETALHES].
Tempo disponível: 20 minutos por sessão, durante cinco sessões.
Objetivo: [UMA TAREFA OBSERVÁVEL DA CAMPANHA].

Pergunte só o que muda materialmente o plano. Em cada sessão, proponha uma tarefa prática e um jeito de testá-la sem IA. Inclua revisão dos erros anteriores e conferência em fontes oficiais. Deixe ferramentas pagas como opcionais. Use os documentos atuais aprovados do CONAFROEDU e não crie compromissos adicionais de publicação.
```

Ao longo das seis semanas, escolha o estudo conforme o trabalho já previsto: clareza sobre submissões antes de **4 de novembro**; conferência de textos sobre valores antes de **16 de novembro**; conteúdo educativo contextualizado e respeitoso em torno de **20 de novembro**; programação/acesso conforme aprovação dos detalhes finais; treino de gravação/atendimento antes de **5 e 6 de dezembro**. Aprender essas habilidades não autoriza prorrogação nem novas promessas do evento. Siga o [sprint](conafroedu-sprint.md) e as decisões da comissão.

<span id="courses"></span>

## Recursos gratuitos para estudar, com português primeiro

Escolha um recurso para sua necessidade atual; não é preciso concluir um curso antes da primeira publicação aprovada.

| Recurso | Idioma/custo e foco útil |
|---|---|
| [Nova Escola: Inteligência Artificial para professores](https://cursos.novaescola.org.br/curso/12141/inteligencia-artificial-para-professores/resumo) | Português; a página oficial anuncia acesso gratuito e certificado, com foco em profissionais do Ensino Fundamental. Siga os links de matrícula do próprio curso. |
| [Série brasileira do Google para educadores sobre IA](https://edu.google.com.br/intl/ALL_br/learning-center/google-ai-educator-series/) | Percurso em português; escolha uma sessão introdutória relacionada à tarefa necessária agora. Confira acesso e condições de eventuais credenciais em cada sessão. |
| [Microsoft Learn: IA para educadores](https://learn.microsoft.com/pt-br/training/paths/ai-education/) | Estudo autônomo para iniciantes em português, com quatro módulos. Diferencie a trilha autoinstrucional de formações com instrutor oferecidas separadamente. |
| [Claude Academy: AI Fluency](https://academy.claude.com/courses/ai-fluency-framework-foundations) | Materiais em inglês; útil para delegar, avaliar e usar IA com responsabilidade. A disponibilidade integral oficial em pt-BR não foi estabelecida aqui; tradução do navegador não comprova uma edição em português. |

Antes de se matricular em outra plataforma, confira se “gratuito” significa curso completo, prévia do primeiro módulo ou auditoria com prazo, e se o certificado é pago. Não suponha que todo curso Coursera/edX seja integralmente gratuito ou em português. Não confunda certificado de formação com o certificado de 40 horas anunciado pelo CONAFROEDU.

## Confira sua aprendizagem antes de avançar

- [ ] Consigo nomear uma tarefa que agora executo sem tutor.
- [ ] Tentei um exemplo novo, em vez de copiar a demonstração.
- [ ] Consigo explicar de onde vêm os fatos do evento e quem os mantém.
- [ ] Abri a evidência de uma afirmação atual sobre ferramenta.
- [ ] Sei quando consultar a comissão, em vez de pedir um palpite ao modelo.
- [ ] Capturas e documentos de treino não contêm dados privados de participantes.
- [ ] Registrei um erro e uma próxima tarefa de prática.

## Próximos passos

Volte à [Configuração das ferramentas](setup-tools.md) se faltar algum recurso, use [Como conversar com a IA](prompting-basics.md) para os fatos e a voz canônicos e aplique uma habilidade à próxima tarefa aprovada do [sprint do CONAFROEDU](conafroedu-sprint.md). O [guia de Facebook](facebook-playbook.md) mantém o treino no canal principal da equipe.
