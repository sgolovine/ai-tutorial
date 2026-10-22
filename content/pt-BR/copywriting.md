---
title: Copywriting com IA (em português e inglês)
description: Prompts e exemplos prontos para cada momento da campanha do CONAFROEDU (ganchos, legendas, Evento no Facebook, WhatsApp, e-mails a parceiros, texto alternativo, hashtags) e como editar o texto da IA para soar humano, acolhedor e correto.
order: 160
section: create
icon: ✍️
updated: 2026-10-21
---

Assistentes de IA escrevem ótimos primeiros rascunhos e guardam fatos muito mal. Esta página mostra como usar a IA em **todos os textos** da campanha do CONAFROEDU: publicações no Facebook, ganchos de Reels, o Evento no Facebook, mensagens de WhatsApp, e-mails a parceiros e texto alternativo. O resultado deve soar como uma comissão de educadoras e educadores, não como um robô de vendas.

**O que você leva desta página:**

- Uma fórmula de legenda e um banco de ganchos que funcionam para um público acadêmico e de educação antirracista.
- Um prompt mestre para reaproveitar em qualquer publicação.
- Prompts **e exemplos de resultado** para cada momento da campanha: chamada de trabalhos (prazo em 4/11), "trabalho aprovado", virada de lote (15→16/11), Consciência Negra (20/11), divulgação da programação, dias do congresso, certificados e Anais.
- Modelos para a descrição do Evento no Facebook, mensagens de WhatsApp (só para quem autorizou), e-mails a parceiros e texto alternativo.
- Hashtags que fazem sentido de verdade e como transformar uma mensagem em vários formatos.
- Um checklist de edição para o texto da IA soar humano e acadêmico-acolhedor, e a etapa de checagem que protege a credibilidade do congresso.

> [!NOTE]
> **Custos:** tudo aqui funciona nos planos gratuitos do Claude, ChatGPT, Gemini ou Meta AI. Os limites de uso gratuito variam por conta e se renovam com o tempo. Se acabar, espere ou troque de assistente. Para escolher o assistente, veja [Como escolher ferramentas de IA](choosing-ai-tools.md). A versão em inglês desta página está em [EN](../en/copywriting.md), útil quando for preciso divulgar para parceiros de fora do Brasil.

## Antes de escrever: fatos, voz e vocabulário

### 1. Cole a ficha oficial toda vez

Todos os prompts desta página partem do princípio de que você abriu a conversa com a **ficha oficial do CONAFROEDU** de [Noções de prompt](prompting-basics.md#a-ficha-oficial-do-conafroedu). Outra opção é salvá-la uma vez num Projeto do Claude, num Gemini Notebook independente ou no documento compartilhado da ficha. Sem a ficha, a IA inventa local, prazo, "reconhecimento do MEC" e "vagas limitadas".

Fatos principais, como publicados na Even3 em 21/10/2026:

| Fato | Valor |
|---|---|
| Nome | I CONAFROEDU — Congresso Nacional de Africanidades na Educação (1ª edição) |
| Tema | "Desenvolvimento, Participação e Educação Antirracista" |
| Datas | 5 e 6 de dezembro de 2026, 100% on-line |
| Submissões (e vídeo de apresentação) | até **4/11/2026**, horário-limite a confirmar |
| Valores atuais | até **15/11**: R$ 55,00 (ouvinte; graduação + 1 submissão), R$ 60,00 (pós-graduação + 1), R$ 70,00 (professor/profissional + 1) |
| Novos valores | a partir de **16/11**: R$ 60,00 / R$ 60,00 / R$ 65,00 / R$ 75,00 |
| Programação | Já há atividades e alguns palestrantes na Even3; versão final aprovada prevista até **25/11** |
| Certificados | a partir de **6/12** (certificado de 40 horas; critérios a confirmar) |
| Anais | até **15/12**, com ISBN e DOI; taxa de publicação de **R$ 16,98 por trabalho**, à parte da inscrição |
| Inscrições | Para participação, até **6/12**; prazo de submissão e virada de lote são diferentes. https://www.even3.com.br/iconafroedu-764690/ |

> [!WARNING]
> A comissão ainda precisa decidir ou confirmar: se a apresentação é obrigatória, o horário exato do prazo, eventual prorrogação, os critérios do certificado, os recursos de acessibilidade e a plataforma de acesso/transmissão. Até lá, a IA deve escrever `[CONFIRMAR]`, e **nenhuma publicação com `[CONFIRMAR]` vai ao ar**.

### 2. A voz da marca em um parágrafo

Cole o **bloco oficial VOZ DA MARCA** de [Noções básicas de prompt](prompting-basics.md#a-voz-da-marca-em-um-parágrafo) depois da ficha atual. Mantenha o bloco num só lugar; não crie uma segunda versão de voz aqui.

### 3. Acerte o vocabulário

Quem é da academia percebe esses deslizes na hora. Se a IA insistir em misturar os termos, cole esta tabela na ficha.

| Termo | Significa | Não confundir com |
|---|---|---|
| **Inscrição** | Registrar-se para participar do evento | Submeter trabalho |
| **Submissão** | Enviar um trabalho para avaliação | Aceite ou publicação |
| **Chamada de trabalhos** | O convite para enviar trabalhos | *Edital*, que é um documento formal; não chame um post de edital |
| **Avaliação / parecer / carta de aceite** | A avaliação e o seu resultado documentado | Elogio gerado por IA |
| **Artigo completo, resumo expandido, resumo simples, práticas exitosas (relato de experiência)** | Modalidades diferentes | Use os nomes exatos das normas na Even3 |
| **Anais** | A publicação dos trabalhos do evento | Revista ou publicação "Qualis" |
| **Ouvinte / autor(a) / apresentador(a)** | Papéis diferentes de participação | Podem ter requisitos diferentes |
| **Carga horária / certificado de participação** | As horas e condições documentadas | Garantia de horas complementares ou de progressão |
| **Prorrogação / virada de lote** | Mudança real de prazo / de valor | Separe prazos científicos e comerciais |

**Formatos:** no texto corrido, *4 de novembro de 2026*; em calendários compactos, *04/11/2026*; valores, *R$ 55,00*; horários, *19h (horário de Brasília)*.

## A fórmula da legenda

Quase toda boa publicação segue quatro passos:

1. **Abertura específica**: uma pergunta ou um problema real da prática docente. Não o logotipo do evento.
2. **Algo útil**: um exemplo, um dado, uma dica que sirva mesmo para quem não vai se inscrever.
3. **A ligação verificada com o evento**: CONAFROEDU, 5 e 6 de dezembro, on-line, e o que interessa *a essa pessoa*.
4. **Uma única ação clara**: submeter, inscrever-se, ver a programação, tirar uma dúvida. Só uma.

### Banco de ganchos (primeiras linhas)

| Objetivo | Exemplo de abertura |
|---|---|
| Relevância prática | "Como trabalhar a história e a cultura afro-brasileira ao longo do ano, e não só em novembro?" |
| Da prática à pesquisa | "Aquela prática de ERER que deu certo na sua turma pode virar um relato de experiência." |
| Saber de colegas | "O que uma professora aprendeu ao levar autoras negras para a turma do 6º ano?" *(só se for uma história real e autorizada)* |
| Encaixe na programação | "Três conversas da programação para quem trabalha na educação infantil." |
| Dúvida frequente | "Quer participar, mas ainda tem dúvidas sobre o certificado ou o acesso on-line?" |
| Urgência honesta | "O valor da inscrição muda em 16 de novembro." |
| Conversa | "Que desafio aparece quando você planeja uma prática de educação antirracista?" |

> [!CAUTION]
> Nunca apresente um caso ilustrativo como depoimento real. Se a IA escrever "A professora Ana, de Salvador, conta que…" e a Ana não existir, apague.

## O prompt mestre de legenda

Use para qualquer publicação e ajuste a linha da **tarefa**.

Para legenda de Facebook, a faixa abaixo é um ponto de partida. Para gancho de Reel ou uma tela de Story, substitua **80 a 130 palavras** pelo limite curto adequado.

```prompt
Você é redator(a) da comunicação do CONAFROEDU 2026, congresso acadêmico on-line sobre africanidades e educação antirracista no Brasil.
[Cole aqui a ficha oficial do CONAFROEDU e o bloco oficial VOZ DA MARCA]

Use APENAS os fatos aprovados acima. Não invente benefícios, estatísticas, depoimentos, palestrantes, regras de certificado, apoio institucional, recursos de acessibilidade ou escassez. Se faltar algo essencial, escreva [CONFIRMAR] fora do texto publicável.

Tarefa: [ex.: um post no Facebook convidando professoras e professores da educação básica a submeter um relato de práticas exitosas até 4 de novembro]
Público: [segmento específico]
Canal e formato: [post no Facebook / legenda do Instagram / gancho de Reels / sequência de Stories], [tamanho]

Escreva 3 versões em português brasileiro natural (sem cara de tradução), de 80 a 130 palavras cada, com aberturas diferentes:
1) um problema concreto da prática docente; 2) uma pergunta legítima; 3) um benefício comprovado.
Cada uma com um único convite para ação e o link da Even3. Até 3 hashtags pertinentes no fim.
Não peça curtidas, marcações ou compartilhamentos. Depois das versões, liste todos os fatos usados e o que uma pessoa precisa conferir.
```

A faixa de 80 a 130 palavras é um parâmetro para testar, não uma regra do Facebook.

## Legendas para cada momento da campanha

As datas seguem o [sprint de 6 semanas](conafroedu-sprint.md) e o [cronograma da campanha](campaign-timeline.md). Cada momento tem um objetivo próprio: não misture "submeta seu trabalho" com "inscreva-se para participar" na mesma publicação.

### 1. Chamada de trabalhos (agora → 4 de novembro)

**Objetivo:** submissões concluídas. **Público:** pós-graduandas(os), pesquisadoras(es), integrantes de NEABIs, professoras(es) com práticas documentadas. **Precisa dizer:** prazo em 4/11, modalidades, link das normas, que quem submete precisa estar inscrito(a) e a taxa de publicação à parte, de R$ 16,98.

```prompt
Tarefa: post no Facebook para a chamada de trabalhos. Público: professoras e professores que nunca submeteram trabalho a um congresso. Ângulo: uma prática que a pessoa já fez em sala pode virar uma submissão de práticas exitosas/relato de experiência. Mencione: submissões até 4 de novembro de 2026; ler as normas na Even3 antes; quem submete precisa estar inscrito(a); a publicação nos Anais tem taxa à parte de R$ 16,98 por trabalho. Não diga "submissão gratuita" sem explicar os custos de inscrição e de publicação.
```

**Exemplo de resultado (revise antes de usar):**

> Aquela prática de educação antirracista que funcionou na sua turma merece ser compartilhada. 📚
>
> O CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação recebe trabalhos até **4 de novembro**, inclusive relatos de experiência (práticas exitosas). Antes de enviar, confira nas normas a modalidade, o modelo e as condições: a pessoa que submete precisa estar inscrita, e a publicação nos Anais tem taxa de R$ 16,98 por trabalho, à parte da inscrição.
>
> O congresso acontece em 5 e 6 de dezembro, 100% on-line.
>
> Normas e submissão: https://www.even3.com.br/iconafroedu-764690/
>
> #CONAFROEDU #EducaçãoAntirracista #PesquisaEmEducação

**Último lembrete (4/11).** Só depois que a comissão confirmar o horário-limite:

> Último dia para submeter trabalhos ao CONAFROEDU 2026: as submissões encerram hoje, 4 de novembro, às [HORÁRIO CONFIRMADO] (horário de Brasília). Revise o arquivo em PDF, a modalidade escolhida e o e-mail usado na inscrição. Normas: [link]

**Depois de 4/11:** atualize posts fixados, o Evento e os posts agendados para "Submissões encerradas". Só anuncie prorrogação se a comissão aprovar formalmente **e** a Even3 estiver atualizada. Nunca invente o "a pedidos".

### 2. "Trabalho aprovado" (conforme saem os resultados)

O resultado da avaliação sai em até 5 dias úteis após a submissão. Quem tem trabalho aprovado adora compartilhar, então **entregue um kit** em vez de publicar nomes por conta própria. Nunca divulgue nome ou título de autor(a) sem consentimento.

```prompt
Tarefa: escreva um modelo de legenda curta e calorosa para que a AUTORA ou o AUTOR publique no próprio perfil que o trabalho foi aprovado no CONAFROEDU 2026. Deixe lacunas para [título do trabalho], [modalidade] e [coautoras/es]. Mencione as datas do congresso e o link da Even3 para colegas que queiram participar. Primeira pessoa, com orgulho e sem exagero ("publicação garantida", "Qualis") e sem afirmar nada sobre o formato de apresentação. Escreva também um post de 2 linhas da organização parabenizando "as autoras e os autores aprovados", sem citar nomes.
```

**Exemplo de modelo para autoras(es):**

> Feliz em compartilhar que o trabalho "[título do trabalho]", na modalidade [modalidade], foi aprovado para o I CONAFROEDU — Congresso Nacional de Africanidades na Educação. 🌱 Obrigada, [coautoras/es], pela parceria nessa escrita.
>
> O congresso acontece em 5 e 6 de dezembro, 100% on-line. Quem quiser participar como ouvinte: https://www.even3.com.br/iconafroedu-764690/

### 3. Virada de lote: 15 → 16 de novembro

**Objetivo:** inscrições antes da mudança. É um prazo **real**, então pode ser dito com clareza. Nada de "últimas vagas": evento on-line não tem escassez, a não ser que a comissão confirme um limite.

```prompt
Tarefa: o lembrete aprovado para Stories/Canal do WhatsApp em [10 ou 14 de novembro] sobre a mudança no valor das inscrições; não crie um post extra no Feed do Facebook. Fatos: valores atuais válidos até 15 de novembro; a partir de 16 de novembro, mudam. Ouvinte/público geral R$ 55,00 → R$ 60,00; graduação + 1 submissão R$ 55,00 → R$ 60,00; pós-graduação + 1 submissão R$ 60,00 → R$ 65,00; professor(a)/profissional da educação + 1 submissão R$ 70,00 → R$ 75,00. Observação: como as submissões encerraram em 4/11, foque na participação como ouvinte, salvo orientação diferente da comissão. Tom calmo e factual; sem "últimas vagas", sem pressão.
```

**Exemplo de resultado:**

> Vai participar do CONAFROEDU 2026? O valor atual da inscrição vale até **15 de novembro**. A partir do dia 16, a inscrição de ouvinte passa de R$ 55,00 para R$ 60,00.
>
> São dois dias de pesquisa e troca de experiências em educação antirracista, em 5 e 6 de dezembro, 100% on-line, com certificado de 40 horas conforme os critérios da organização.
>
> Inscrições: https://www.even3.com.br/iconafroedu-764690/

> [!IMPORTANT]
> Confira os valores no checkout da Even3 **no dia em que agendar** este post. Os valores da página podem mudar.

### 4. Consciência Negra (sexta-feira, 20 de novembro)

O 20 de novembro é o **Dia Nacional de Zumbi e da Consciência Negra**, feriado nacional desde a Lei nº 14.759/2023. Muitas educadoras e educadores estarão envolvidos em ações na escola e na comunidade nesse dia. Publique **algo com conteúdo**, útil até para quem nunca vai se inscrever. Se quiser convidar, faça isso de forma breve e separada. **Nada de desconto nem de "celebre comprando".**

```prompt
Tarefa: texto de um carrossel para o Facebook (4 cards + legenda) para 20 de novembro. Conteúdo: card 1, a pergunta "20 de novembro no calendário; ERER no cotidiano?"; card 2, o que a Lei nº 10.639/2003 mudou (história e cultura afro-brasileira no currículo e o 20 de novembro no calendário escolar); card 3, a Lei nº 11.645/2008 (inclui a história e a cultura indígena); card 4, uma pergunta prática para a próxima reunião de planejamento. Cite as leis só pelo número, sem estatísticas ou citações inventadas. Legenda: reflexiva e respeitosa, com fontes, crédito e uma pergunta educativa real. Qualquer convite opcional para o congresso fica numa **publicação separada**. Sem desconto, sem urgência, sem chamada de trabalhos.
```

**Exemplo de legenda:**

> Neste 20 de novembro, a valorização das histórias e dos conhecimentos negros também nos chama a olhar para o cotidiano da escola. A Lei nº 10.639/2003 incluiu a história e a cultura afro-brasileira no currículo; a Lei nº 11.645/2008 ampliou esse compromisso para a história e a cultura indígena. Que mudança de currículo, de formação ou de participação a sua escola está construindo ao longo do ano?
>
> #ConsciênciaNegra #EducaçãoAntirracista #CONAFROEDU

> [!TIP]
> O melhor conteúdo de 20 de novembro dá crédito a uma educadora ou um educador negro real: uma prática que usou, um livro que recomenda, uma pergunta que quer ver nas escolas, sempre com aprovação da pessoa. Para imagens, veja [Como representar culturas negras e africanas com respeito](representation-bias.md).

### 5. Divulgação da programação (até 25 de novembro)

A Even3 já lista atividades e alguns palestrantes; não diga que a programação está ausente nem que essa lista é definitiva. Confirme datas, horários e sobreposições com a comissão. Publique roteiros por público só com a programação **final aprovada**. Copie os nomes **exatamente como estão** e nunca deixe a IA "corrigir" um nome incomum. Em vez de um paredão de texto, transforme a programação em roteiros por público.

```prompt
Tarefa: a partir da programação oficial colada abaixo, escreva 3 posts curtos para o Facebook, cada um com um "roteiro" para um público: (a) professoras e professores da educação básica, (b) estudantes de graduação, (c) gestoras e gestores escolares. Cada roteiro escolhe 2 ou 3 sessões pertinentes, com nomes, títulos e horários exatamente como na programação, em horário de Brasília. Não acrescente sessões, credenciais ou descrições que não estejam na programação. Termine com o link da Even3.
PROGRAMAÇÃO: [cole a programação oficial]
```

### 6. Dias do congresso (5 e 6 de dezembro)

Nos dias do evento, a mensagem honesta é **acesso e suporte**, não "compre agora". Quem está inscrito precisa saber aonde ir. Nunca publique link privado de sala ou senha.

```prompt
Tarefa: escreva (a) um post de "Bom dia, começamos!" para o Facebook em 5 de dezembro, (b) uma sequência de 3 Stories com os destaques do dia, (c) um modelo curto de aviso de mudança na programação e (d) um post de agradecimento de encerramento em 6 de dezembro. Fatos: horários em horário de Brasília conforme a programação oficial; quem está inscrito acessa as sessões por [CONFIRMAR] — plataforma e como recebe o link; suporte pelo WhatsApp (19) 98816-7751 e pelo e-mail conapsuporte@gmail.com. Não inclua nenhum link privado de acesso. Tom caloroso, animado, mas tranquilo.
```

**Exemplo (a):**

> Bom dia! Começa hoje o I CONAFROEDU — Congresso Nacional de Africanidades na Educação. 🌅 A programação vai das [HORÁRIO] às [HORÁRIO] (horário de Brasília). Quem está inscrito recebe o acesso por [CONFIRMAR]. Dúvidas ou dificuldade para entrar? Fale com a equipe pelo WhatsApp (19) 98816-7751. Bom congresso a todas e todos!

### 7. Certificados (a partir de 6 de dezembro)

Post de certificado gera muitas perguntas. Seja preciso e use a redação cuidadosa abaixo **quando a comissão confirmar a liberação real e os critérios**:

> Certificado de participação com carga horária de 40 horas, conforme os critérios de participação divulgados pela organização. O aproveitamento para atividades complementares ou progressão depende das regras da instituição de cada participante.

```prompt
Tarefa: um post curto para o Facebook e um modelo de resposta de WhatsApp explicando como baixar o certificado do CONAFROEDU. Previsão: a partir de 6 de dezembro na Even3. Liberação real: [CONFIRMAR]; critérios e passos: [CONFIRMAR] com a comissão. Só escreva instruções de download após confirmar a liberação real; caso contrário, rascunhe uma atualização de status para aprovação da comissão. Use a redação cuidadosa do certificado fornecida. Não prometa aproveitamento como horas complementares nem para progressão.
```

### 8. Anais (até 15 de dezembro)

Só divulgue os Anais quando eles existirem de fato, **com o link e os identificadores reais**. Se atrasar, publique uma atualização honesta. Nunca deixe a IA escrever um ISBN ou DOI, porque ela inventa um número com cara de verdadeiro.

> Os Anais do I CONAFROEDU estão publicados! 📖 Acesse em [LINK REAL]. ISBN: [NÚMERO REAL]. Cada trabalho tem seu DOI individual, informado na página do trabalho. Obrigado a todas as autoras e todos os autores.

## A descrição do Evento no Facebook

Use um único Evento oficial: **"CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação | Online"**. Deixe inscrição, acesso, participação e conteúdo aberto em blocos separados e claros (veja [Eventos e Grupos no Facebook](facebook-events-groups.md)).

```prompt
Tarefa: escreva a descrição do Evento no Facebook em português brasileiro, com no máximo 250 palavras, fácil de escanear, com intertítulos curtos. Blocos: (1) um parágrafo com objetivo e público; (2) Inscrição: link da Even3 e valores atuais com a data da mudança; (3) Submissões: até 4/11, ou "encerradas" se for depois dessa data; (4) Acesso: como as pessoas inscritas recebem o acesso [CONFIRMAR], lembrando que marcar presença no Evento não é inscrição; (5) Certificado: redação cuidadosa das 40 horas; (6) Dúvidas: WhatsApp e e-mail. Sem palestrantes ou recursos de acessibilidade inventados.
```

**Exemplo de resultado (resumido):**

> **CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação**
> Tema: Desenvolvimento, Participação e Educação Antirracista · 5 e 6 de dezembro de 2026 · 100% on-line
>
> Um espaço para professoras e professores da educação básica, estudantes, pesquisadoras, pesquisadores e gestores compartilharem pesquisas e práticas sobre africanidades, relações étnico-raciais e educação antirracista.
>
> **Inscrição:** pela Even3 → https://www.even3.com.br/iconafroedu-764690/ (marcar "Vou" aqui no Facebook não é inscrição). Valores atuais até 15/11.
>
> **Acesso:** as pessoas inscritas recebem as orientações de acesso por [CONFIRMAR].
>
> **Dúvidas:** WhatsApp (19) 98816-7751 · conapsuporte@gmail.com

## Mensagens de WhatsApp (só para quem autorizou)

O WhatsApp é onde as educadoras e os educadores brasileiros realmente leem as mensagens, e é justamente por isso que o abuso queima a confiança rápido. As regras:

- Envie lembretes e novidades só a quem **autorizou esse tipo de mensagem**. Se alguém escrever primeiro, responda à dúvida; antes de enviar divulgação posterior, peça e registre a autorização. Número salvo, participação em grupo ou clique em "Tenho interesse" no Facebook **não** é consentimento ([Política de Mensagens do WhatsApp Business](https://whatsappbusiness.com/policy/)).
- No app gratuito WhatsApp Business, as listas de transmissão só chegam a quem **salvou o seu número**, com até 256 contatos por lista ([Central de Ajuda do WhatsApp](https://faq.whatsapp.com/861663048350950/?cms_platform=iphone&locale=en_US)).
- Ofereça sempre uma forma fácil de sair e atenda **qualquer** pedido claro para parar, não só a palavra "SAIR".
- Para avisos públicos, um **Canal do WhatsApp** é melhor, porque o número de quem segue não aparece. Veja [Instagram e WhatsApp](instagram-whatsapp.md).

```prompt
Tarefa: escreva em português brasileiro (a) uma atualização para o Canal do WhatsApp com menos de 500 caracteres anunciando que a programação oficial saiu; (b) uma mensagem direta para alguém que PEDIU para receber lembretes, sobre a mudança de valor em 16/11, com uma linha para deixar de receber; (c) um convite curto que uma professora possa encaminhar a colegas; (d) uma resposta para "Tem certificado?" usando a redação cuidadosa. Sem hashtags, no máximo um emoji em cada, link da Even3 em todas.
```

**Exemplos de resultado:**

> **(b) Lembrete para quem pediu:** Oi, [nome]! Aqui é [pessoa], da organização do CONAFROEDU. Você pediu para receber lembretes sobre o congresso: o valor atual da inscrição vale até 15/11; a partir de 16/11 ele muda. Detalhes: https://www.even3.com.br/iconafroedu-764690/ Se preferir não receber novos avisos, é só me dizer.

> **(c) Para encaminhar:** CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação. Dias 5 e 6 de dezembro, 100% on-line. Um espaço de pesquisa e troca de experiências em educação antirracista, com certificado de 40 horas conforme os critérios da organização. Inscrições: https://www.even3.com.br/iconafroedu-764690/

Para automatizar respostas (saudação, mensagem de ausência, respostas rápidas), veja [Automação de respostas](replies-inbox.md).

## E-mail a parceiros (NEABIs, programas de pós-graduação, associações)

Escreva **um por vez**, personalizado, para um contato institucional público. Nunca dispare e-mails em massa para endereços coletados. Para encontrar e abordar parceiros, veja [Divulgação e parcerias com IA](outreach.md) e [Kits para palestrantes e parceiros](speaker-partner-kits.md).

```prompt
Tarefa: um e-mail formal, mas caloroso, em português brasileiro, da comissão organizadora do CONAFROEDU para [NEABI/NEAB da UNIVERSIDADE X / coordenação do PPGE], perguntando se consideram divulgar o congresso à sua comunidade. Personalize com este dado real sobre o trabalho deles: [cole um fato da página pública]. Estrutura: assunto; quem somos (1 frase); por que tem a ver com o trabalho deles; dados do evento (datas, on-line, público, link da Even3); [se for antes de 4/11: prazo de submissão, modalidades, exigência de inscrição e taxa de publicação de R$ 16,98]; um texto de 3 linhas pronto para encaminhar; agradecimento e contato. Não afirme parceria, apoio institucional ou reconhecimento do MEC. Máximo de 220 palavras.
```

**Exemplos de assunto:**

- `Chamada de trabalhos | CONAFROEDU 2026 | submissões até 04/11`
- `Convite à divulgação | CONAFROEDU 2026 — 5 e 6/12, on-line`

## Texto alternativo: descreva o que está de fato na imagem

**Texto alternativo** é a descrição da imagem que os leitores de tela leem em voz alta. Facebook e Instagram permitem editar esse texto. Escreva para toda arte e repita na legenda qualquer data ou link que só aparece na imagem.

```prompt
Tarefa: escreva um texto alternativo em português brasileiro (no máximo 2 frases, menos de 250 caracteres) para a imagem descrita abaixo. Transmita a informação que importa (nome do evento, data, convite). Descreva pessoas só pelas ações visíveis e pelo contexto; nunca presuma raça, identidade, deficiência ou emoções, a não ser que a própria pessoa tenha aprovado a descrição. Não comece com "Imagem de".
Imagem: [descreva o que aparece e transcreva todo o texto da imagem]
```

**Exemplo:** "Card em tons de terracota e creme com a contagem regressiva: Faltam 7 dias para o CONAFROEDU 2026, em 5 e 6 de dezembro de 2026, 100% online. Convite para se inscrever pelo Even3."

## Hashtags: poucas e pertinentes

- **Facebook:** hashtags funcionam como etiquetas de assunto clicáveis. Use de **0 a 3** pertinentes e escreva o assunto também no próprio texto. As diretrizes antispam da Meta citam o excesso de hashtags e as legendas sem relação com o conteúdo como comportamentos problemáticos ([Meta, abril de 2025](https://about.fb.com/news/2025/04/cracking-down-spammy-content-facebook/)). Nenhuma hashtag garante alcance.
- **Instagram:** o Instagram vem adotando um limite de **cinco hashtags** por post ou Reels. Confira o que o seu editor permite e esqueça a fórmula antiga das "30 hashtags".
- **WhatsApp:** sem hashtags.

| Uso | Hashtags |
|---|---|
| Padrão | `#CONAFROEDU #EducaçãoAntirracista #Africanidades` |
| Posts para autoras(es)/submissões | `#CONAFROEDU #PesquisaEmEducação #PósGraduação` |
| Conteúdo de novembro com substância | acrescente `#ConsciênciaNegra` |
| Evite | Hashtags em alta sem relação, hashtags de cidade (é um evento nacional on-line), todas as hashtags do evento em todo post |

Antes de adotar uma hashtag, pesquise no Facebook/Instagram e veja se os resultados têm a ver. Use iniciais maiúsculas (#EducaçãoAntirracista): fica mais fácil de ler e melhor para leitores de tela.

## Uma mensagem, vários formatos

Comece de **um texto aprovado** e adapte. Não cole o mesmo texto em todo lugar.

```prompt
Tarefa: adapte o texto aprovado abaixo para: (A) um post autossuficiente no Facebook com o link da Even3; (B) um carrossel no Instagram, com o texto de 5 cards de no máximo 15 palavras cada + legenda, indicando o link da bio (link na legenda não é clicável); (C) um roteiro de Reels de 20 segundos com gancho na tela nos 2 primeiros segundos e as frases da legenda embutida; (D) 3 Stories; (E) um resumo para o Canal do WhatsApp com menos de 500 caracteres, sem hashtags; (F) um post de discussão no Evento do Facebook; (G) um parágrafo para e-mail a parceiros. Mantenha datas, valores, nomes e condições exatamente iguais. Depois, entregue uma tabela conferindo cada fato em todas as versões.
Texto aprovado: [cole]
```

Para versões animadas da mesma mensagem, veja [Motion graphics com o Claude](motion-graphics-claude.md). Para cortes de palestras, veja [Reels, cortes, legendas e dublagem](video-repurposing.md).

## Como deixar o texto da IA humano e acadêmico-acolhedor

O português da IA tem marcas registradas. Quem lê percebe, e uma comunidade acadêmica passa a parecer anúncio. Depois de cada rascunho, revise com esta lista:

| Marca de IA | Troque por |
|---|---|
| "Imperdível!", "Não perca!", "Venha fazer parte dessa jornada" | Um motivo concreto: o que a pessoa vai discutir, aprender ou compartilhar |
| "Em um mundo cada vez mais…", "Você sabia que…?" | Comece pela pergunta ou pelo fato real |
| "Mergulhe", "potencialize", "transformador", "incrível" | Verbos simples: discutir, apresentar, conhecer, compartilhar |
| Decalques do inglês: "aplicar para", "endereçar um problema", "fazer sentido" a cada frase, "performar" | inscrever-se/submeter, tratar/enfrentar, ser coerente, ter desempenho |
| Três adjetivos seguidos ("um evento rico, plural e transformador") | Um adjetivo preciso, ou nenhum |
| Exclamação em toda frase, emoji em toda linha | No máximo uma exclamação; um ou dois emojis com propósito |
| Elogio genérico à "diversidade" | O tema de fato: ERER, Lei nº 10.639/2003, africanidades no currículo |
| Promessas sem ressalva ("certificado válido para progressão") | A redação cuidadosa e condicional |

Depois, rode este prompt de edição:

```prompt
Revise este texto para soar como português brasileiro escrito por uma equipe de educação: acolhedor, preciso, de educador para educador. Preserve todos os fatos e a intenção; não acrescente argumentos de venda. Retire clichês publicitários, estrangeirismos desnecessários, excesso de exclamações e de emojis e adjetivos vazios. Troque abstrações pelos exemplos concretos que o próprio texto já traz. Entregue: o texto revisado, a lista de mudanças e as ambiguidades a confirmar.
Texto: [cole]
```

> [!TIP]
> **Leia em voz alta.** Se soar como algo que você nunca diria a uma colega na sala dos professores, reescreva. Peça também a alguém da equipe que não escreveu o texto para ler.

## Fuja da isca de engajamento

A Meta reduz a distribuição de posts que forçam reações, e a regra vale para o português. Fazer uma pergunta genuína tudo bem; manipular a distribuição, não.

| ❌ Não faça | ✅ Faça assim |
|---|---|
| "Comente SIM se você valoriza a educação antirracista!" | "Que livro de autoria negra você usa em sala? Conta pra gente." |
| "Marque 5 professores para concorrer a uma inscrição" | Compartilhe um recurso útil; faça promoções só depois de checar as regras |
| "Compartilhe para mais pessoas verem!" | Faça um conteúdo que valha compartilhar: um checklist, um resumo da lei, uma pergunta prática |
| "Últimas vagas!" (evento on-line, sem limite) | Uma data verdadeira: "o valor muda em 16/11" |
| Depoimentos ou citações inventados pela IA | Falas reais e autorizadas de participantes e palestrantes |

## A etapa de checagem (nunca pule)

Erro de IA nesta campanha sai caro: prazo errado, valor errado, benefício de certificado prometido. Antes de agendar **qualquer coisa**:

```prompt
Compare a publicação abaixo com a ficha oficial. Não publique nem envie nada; entregue só a revisão.
Verifique: nomes, cargos, datas, dia da semana, fuso (horário de Brasília), valores, prazos, redação do certificado, links, autorização de imagens, português brasileiro e se o post mistura a chamada de trabalhos com a de inscrições.
Sinalize: promessas sem fonte, urgência ou escassez inventadas, isca de engajamento, dados pessoais, [CONFIRMAR] esquecido no texto e informação essencial que só aparece na imagem.
Saída: APROVAR COMO RASCUNHO ou CORRIGIR, com motivos objetivos.
Ficha oficial: [cole] Publicação: [cole]
```

Depois, uma **pessoa** faz a checagem de 60 segundos:

- [ ] Data, dia da semana e fuso estão certos (20/11/2026 é sexta-feira; 5 e 6/12 são sábado e domingo).
- [ ] Os valores batem com o checkout da Even3 de hoje.
- [ ] Só se fala em submissão se as submissões estiverem abertas (ou oficialmente prorrogadas).
- [ ] Nenhum `[CONFIRMAR]`, nenhum palestrante, parceiro, citação ou estatística inventados.
- [ ] O link abre a página certa da Even3 no celular.
- [ ] Os nomes estão escritos exatamente como aprovados, com acentos.
- [ ] Alguém além de quem escreveu leu o texto.

## Checklist do sistema de textos

- [ ] Ficha oficial salva e datada, com uma pessoa responsável pelas atualizações.
- [ ] Parágrafo de voz e tabela de vocabulário compartilhados com todo mundo que escreve.
- [ ] Prompt mestre salvo num Projeto/Notebook/documento compartilhado.
- [ ] Rascunhos separados para submissões (até 4/11) e inscrições.
- [ ] Post da virada de lote agendado para antes de 16/11 e reconferido no dia.
- [ ] Conteúdo de 20/11 preparado com a contribuição aprovada de uma educadora ou um educador negro.
- [ ] Kit "trabalho aprovado" pronto para autoras e autores.
- [ ] Descrição do Evento, modelos de WhatsApp e resposta sobre certificado aprovados pela comissão.
- [ ] Texto alternativo em todas as artes.
- [ ] Prompt de checagem + revisão humana antes de cada post agendado.

Antes de ativar instruções salvas ou instalar/configurar um editor, siga [Configure suas ferramentas](setup-tools.md).

## Próximos passos

- Salve o contexto uma vez só: [Noções de prompt](prompting-basics.md).
- Transforme legendas em cards animados: [Motion graphics com o Claude](motion-graphics-claude.md).
- Coloque tudo no calendário: [Cronograma da campanha](campaign-timeline.md) e [sprint de 6 semanas](conafroedu-sprint.md).
- Agende posts em lote: [Ferramentas de agendamento e publicação](scheduling-tools.md).
- Formatos e frequência no Facebook: [Guia orgânico do Facebook](facebook-playbook.md).
- Consentimento, LGPD e transparência sobre IA: [Ética, políticas e LGPD](ethics-legal.md).
- Todos os prompts num lugar só: [Biblioteca de prompts](prompt-library.md).
