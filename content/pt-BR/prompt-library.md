---
title: Biblioteca de prompts
description: Todos os prompts principais do CONAFROEDU 2026 num só lugar, organizados por tarefa (ficha oficial, planejamento, textos para cada fase da campanha, imagens, vídeo, animação, respostas, parcerias, medição, checagem e acessibilidade), cada um com link para o guia de origem.
order: 450
section: extras
icon: 📚
updated: 2026-10-21
---

> [!TIP] Está começando nessas ferramentas?
> Siga primeiro o [passo a passo de configuração](setup-tools.md#starter-stack). Se um botão ou conceito for novo, use o [guia de aprendizagem com IA](learning-with-ai.md) para praticar uma tarefa pequena.

Esta página reúne os melhores prompts do site, para ninguém precisar caçar nos guias no meio de uma semana corrida. Os prompts apontam para os guias de origem; ficha oficial e voz canônicas ficam na fonte, e cada prompt tem um link para a página que explica quando e como usá-lo. Três prompts para momentos que nenhum guia cobria ainda (a virada de 5 de novembro, o FAQ de acesso da última semana e o balanço depois do evento) foram escritos para esta página; eles estão marcados como **novo**.

**O que você vai encontrar nesta página:**

- Os blocos de **ficha oficial** e de **voz da marca**, que vão no início de toda conversa.
- **Prompts prontos para copiar por tarefa** em 11 grupos, com ajuda de configuração e aprendizagem, do planejamento à acessibilidade.
- A **convenção `[CONFIRMAR]`**, explicada uma vez só.
- Uma **checklist de segurança** curta para qualquer resposta da IA.

> [!NOTE]
> Todos os prompts desta página estão em português e pedem textos em português brasileiro. A [versão em inglês](../en/prompt-library.md) traz os mesmos prompts em inglês, para quem da equipe preferir dar as instruções nessa língua.

> [!TIP] Faça hoje: escolha uma tarefa
> Deixe o [plano de seis semanas](conafroedu-sprint.md) aberto. Escolha: (1) [ficha atual](prompting-basics.md), (2) [uma legenda](copywriting.md), (3) [checklist de submissão](replies-inbox.md), (4) [virada do prazo](replies-inbox.md), (5) [convite a parceiro](outreach.md), (6) [kit de palestrante](speaker-partner-kits.md), (7) [texto alternativo da imagem real](ethics-legal.md), (8) [revisão da fila](scheduling-tools.md), (9) [números da semana](measuring-results.md) ou (10) [aprender uma ferramenta](learning-with-ai.md). A biblioteca completa é consulta; você não precisa ler tudo em sequência.

## Como usar esta biblioteca

1. **Abra o seu assistente principal** (Claude, Gemini, ChatGPT; veja [Como escolher ferramentas de IA](choosing-ai-tools.md)), ou o Projeto/Gem/caderno onde vocês salvaram o contexto.
2. **Cole a ficha oficial e o parágrafo de voz** da [seção 1](#1-contexto-a-ficha-oficial-e-a-voz-da-marca), se eles ainda não estiverem salvos ali.
3. **Copie um prompt** com o botão **Copiar** e substitua tudo o que estiver entre `[COLCHETES]`.
4. **Comece por uma mensagem central aprovada; depois adapte.** Prompts em lote são atalhos opcionais; revise cada entrega separadamente. Refine com os pedidos de ajuste da [seção 3](#3-textos-para-cada-fase-da-campanha).
5. **Uma segunda pessoa confere o resultado** com a [checagem de 60 segundos](prompting-basics.md#a-checagem-de-60-segundos) antes de qualquer agendamento.

> [!WARNING]
> Mantenha dados pessoais fora dos prompts, salvo o [fluxo limitado de minibio profissional aprovada](ethics-legal.md). Autorizar publicação não autoriza processamento externo por IA. Nunca cole: nada de lista de inscritos, CPF, telefone, dados de pagamento, conversas privadas, pedidos de acessibilidade ou trabalhos não publicados. Troque identificações por `[PESSOA]` ou `[ESCOLA]` e analise números só de forma agregada ([Ética, políticas e LGPD](ethics-legal.md#4-lgpd-e-mails-números-de-whatsapp-e-dados-de-inscritos)).

## A convenção `[CONFIRMAR]`

Siga a [convenção única em Noções básicas de prompt](prompting-basics.md). Procure **todos os colchetes pendentes e fatos ausentes**, não só o token literal. Substitua por fatos verificados ou retire a afirmação inteira; deixe perguntas fora do texto publicável. Nunca apague uma ressalva para fazer resposta não aprovada parecer final.

## Índice rápido

| # | Tarefa | Prompts | Principais guias de origem |
|---|---|---|---|
| 1 | [Contexto](#1-contexto-a-ficha-oficial-e-a-voz-da-marca) | Ficha oficial, voz, minibio no caderno | [Noções básicas de prompt](prompting-basics.md) |
| 2 | [Planejamento](#2-planejamento-a-semana-e-o-calendário) | Plano da semana, calendário da campanha, revisão de segunda, próxima edição | [Plano de 6 semanas](conafroedu-sprint.md), [Linha do tempo](campaign-timeline.md) |
| 3 | [Textos por fase](#3-textos-para-cada-fase-da-campanha) | Prompt mestre, chamada de trabalhos, autores, palestrantes, virada de lote, 20/11, programação, dias do evento, certificados, balanço, Evento, grupos, WhatsApp | [Copywriting com IA](copywriting.md), [Kits](speaker-partner-kits.md), [Eventos e Grupos](facebook-events-groups.md) |
| 4 | [Imagens](#4-imagens) | Bloco de estilo, receitas, representação, correções | [Livro de receitas de imagem](image-prompts.md), [Representação](representation-bias.md) |
| 5 | [Vídeo](#5-vídeo-e-reels) | Planos, imagem para vídeo, autorizações, cortes, legendas | [Geração de vídeo](video-generation.md), [Reels e cortes](video-repurposing.md) |
| 6 | [Animação](#6-motion-graphics-com-o-claude) | Contagem regressiva, card de palestrante, citação cinética, stop-motion | [Motion graphics com o Claude](motion-graphics-claude.md) |
| 7 | [Respostas e FAQ](#7-respostas-e-faq) | Respostas rápidas, rascunhos com IA, lacunas do FAQ | [Respostas automáticas](replies-inbox.md) |
| 8 | [Parcerias](#8-divulgação-e-parcerias) | Encontrar NEABs, e-mail-convite, pacote do parceiro, embaixadores | [Divulgação e parcerias](outreach.md), [Kits](speaker-partner-kits.md) |
| 9 | [Medição](#9-medição) | Análise semanal, resumo para a comissão, planilha | [Medir resultados](measuring-results.md) |
| 10 | [Revisão e checagem](#10-revisão-e-checagem-de-fatos) | Comparação com a ficha, checagem antes de agendar, auditoria da fila e do calendário, auditoria da Even3, revisão de imagem | Vários |
| 11 | [Acessibilidade](#11-acessibilidade) | Texto alternativo, revisão de acessibilidade | [Ética, políticas e LGPD](ethics-legal.md) |

## 1. Contexto: a ficha oficial e a voz da marca

### 1.1 A ficha oficial (FICHA OFICIAL)

Copie a **FICHA OFICIAL mestra** atual e versionada de [Noções básicas de prompt](prompting-basics.md#a-ficha-oficial-do-conafroedu), mantida pela Coordenação. Confira responsável/conferência, fonte, próxima atualização, prazos separados de inscrição/submissão/vídeo, programação parcial e previsões de certificados/publicacao. Contextos salvos são cópias. No encerramento audite todos os FAQs/contextos; retire pacotes após o fim da venda em 5/11. Esta biblioteca não mantém outra ficha mestra.

### 1.2 O parágrafo de voz da marca (VOZ DA MARCA)

Use o bloco exato **VOZ DA MARCA — CONAFROEDU** de [Noções básicas de prompt](prompting-basics.md#a-voz-da-marca-em-um-parágrafo) nas duas línguas. Ele é a única voz canônica; copywriting e esta biblioteca apontam para ele.

### 1.3 Rascunho do guia de voz e tom de uma página

**Origem:** [Kit de marca](brand-kit.md#peça-à-ia-um-rascunho-do-guia-de-voz).

```prompt
Com base na ficha oficial acima, escreva um "guia de voz e tom" de uma página para o CONAFROEDU 2026, para ser seguido por pessoas voluntárias e por assistentes de IA.
Inclua: (1) com quem falamos (docentes, estudantes de graduação e pós-graduação, pesquisadores, gestores escolares, educadores comunitários); (2) quatro princípios da voz; (3) uma tabela de tom por situação (chamada de trabalhos, lembrete de prazo, mudança de valor, 20 de novembro, respostas de suporte, dias do evento, correções) com uma frase de exemplo para cada; (4) 10 palavras/expressões para usar e 10 para evitar, com o motivo; (5) convenções para datas, valores, horários e nome do evento.
O tom deve ser acadêmico, mas acolhedor, respeitoso sobre raça e cultura e honesto (sem urgência falsa nem promessas sobre MEC, Qualis ou progressão na carreira). No máximo 600 palavras.
```

### 1.4 Prompt inicial para um Gemini Notebook (minibio com fontes)

**Uso:** num caderno do Gemini Notebook só com fontes aprovadas. **Origem:** [Noções básicas de prompt](prompting-basics.md#prompt-inicial-para-um-gemini-notebook).

```prompt
Use apenas as fontes selecionadas neste caderno. Prepare uma minibio de 60 palavras de [NOME] para divulgação do CONAFROEDU 2026.
Separe: (1) texto publicável; (2) tabela "fato → fonte/trecho"; (3) dúvidas marcadas como [CONFIRMAR].
Não confunda homônimos, não atualize cargos por inferência e não invente titulação, autodeclaração racial, instituição ou participação confirmada.
```

### 1.5 Escolha o assistente principal: o teste de 20 minutos em pt-BR

**Uso:** uma vez, em dois ou três assistentes, com a ficha colada. **Origem:** [Como escolher ferramentas de IA](choosing-ai-tools.md#teste-você-mesmo-comparação-de-20-minutos-em-pt-br).

```prompt
Usando SOMENTE a ficha oficial acima, escreva em português brasileiro natural:
1. Um convite de 70 palavras para o Facebook sobre o CONAFROEDU 2026.
2. Um gancho de 20 palavras para um Reel.
3. Uma resposta para a pergunta no WhatsApp "Tem certificado?" — sem inventar regras; use [CONFIRMAR] quando necessário.
4. Um e-mail de 120 palavras convidando um programa de pós-graduação em Educação a divulgar a chamada de trabalhos.
Marque qualquer informação que você não encontrou na ficha.
```

## 2. Planejamento: a semana e o calendário

### 2.1 Planeje a semana (toda segunda-feira)

**Origem:** [Plano de 6 semanas](conafroedu-sprint.md#copie-e-cole-planeje-a-semana-com-ia).

```prompt
Você está ajudando uma pequena equipe voluntária a divulgar o CONAFROEDU 2026. Use SOMENTE a ficha oficial acima.
Hoje é [DATA]. Esta é a [SEMANA, ex.: "Semana 3, de 9 a 15/11"]. Nossa disponibilidade: cerca de [X] horas no total.
Funções: Coordenação, Conteúdo/Design, Redes/Comunidade, Parcerias.

Monte o plano desta semana com:
1. 3 publicações para o Facebook (dia, objetivo, público, formato, gancho de uma linha, convite para ação).
2. Quais delas adaptar para Instagram e WhatsApp.
3. A lista de tarefas por função, com estimativa em minutos.
4. Qualquer data da ficha que caia nesta semana e o que ela exige.
Regras: não peça submissões de trabalhos depois de 4/11, a menos que a ficha diga que o prazo foi prorrogado; nada de urgência falsa; tudo o que não estiver na ficha deve ser marcado como [CONFIRMAR].
```

### 2.2 O calendário do CONAFROEDU 2026 (de hoje até 15 de dezembro)

**Origem:** [Linha do tempo e calendário](campaign-timeline.md#2-o-calendário-do-conafroedu-2026-de-hoje-até-15-de-dezembro).

```prompt
Monte um calendário de conteúdo orgânico para o CONAFROEDU — Congresso Nacional de Africanidades na Educação, 100% on-line, em 5 e 6 de dezembro de 2026. Hoje é 21 de outubro de 2026.
Equipe: [número] pessoas, [horas] horas semanais somadas. Canal principal: Facebook. Apoio: Instagram e um Canal do WhatsApp.
Datas confirmadas: submissões e vídeo de apresentação até 04/11 (horário de encerramento: [CONFIRMAR]); avaliação em até 5 dias úteis; lote atual até 15/11, novo lote a partir de 16/11; 20/11 é o feriado nacional do Dia Nacional de Zumbi e da Consciência Negra (sexta-feira); programação oficial até 25/11; inscrições até 06/12; certificados a partir de 06/12; previsão dos anais em 15/12.
Fatos aprovados: [colar a ficha oficial]. Materiais disponíveis: [listar vídeos, fotos, palestrantes que já toparam].

Regras:
- Separe a chamada de trabalhos da inscrição de participantes. Depois de 04/11, só mantenha publicações de submissão se houver prorrogação formal.
- 20/11: contribuição educativa com fontes e pergunta pedagógica. Convite ao congresso só em outro post opcional; sem chamado de venda ou desconto na peça educativa.
- Reutilize C01–C03 em 26/28/30 de outubro (como submeter, checklist de sete dias, Reel de prática); não acrescente outro lembrete em 28/10. Virada de lote: Stories/Canal em 10 e 14/11.
- Roteiros por público exigem sessões confirmadas; a listagem parcial da Even3 não é a grade final.
- Urgência só com datas reais; nada de "últimas vagas" num evento on-line sem limite confirmado.
- No máximo 4 publicações por semana no Facebook, com até 2 vídeos; uma atualização do Evento por semana; 1 ou 2 atualizações do Canal do WhatsApp por semana.
- Não invente datas comemorativas, palestrantes, depoimentos ou disponibilidade.

Entregue uma tabela com: data, horário sugerido (Brasília), objetivo, funil, público, tema, formato, material de origem, gancho, chamado para ação, código utm_content, responsável, revisão, esforço estimado, métrica e hipótese testada. Marque como HIPÓTESE qualquer recomendação sem evidência.
```

### 2.3 Revisão semanal do calendário

**Origem:** [Linha do tempo e calendário](campaign-timeline.md#3-revisão-semanal-toda-segunda-feira).

```prompt
Segue o calendário da semana passada com os resultados (só números agregados, sem dados pessoais) e as linhas planejadas para a próxima semana.
Semana passada: [colar linhas com cliques, perguntas, inscrições/submissões].
Próxima semana: [colar linhas]. Data de hoje: [data]. Fatos aprovados: [colar].

1) Aponte qualquer linha que cite um prazo vencido ou um fato que mudou (por exemplo, submissões depois de 04/11, valores antigos depois de 16/11).
2) Separe observação, hipótese e informação que falta. Não afirme causa e efeito com números pequenos.
3) Proponha no máximo 2 mudanças para a próxima semana, com o tempo que exigem e como vamos avaliá-las.
4) Devolva a tabela da próxima semana corrigida.
```

### 2.4 Um calendário reutilizável para a próxima edição

**Uso:** ao planejar o próximo CONAFROEDU ou outro congresso acadêmico. **Origem:** [Linha do tempo e calendário](campaign-timeline.md#1-calendário-reutilizável-para-uma-próxima-edição).

```prompt
Você é planejador(a) de campanhas de um congresso acadêmico on-line no Brasil (educação, educação antirracista, Africanidades).
Datas do evento: [T]. Prazo de submissão: [data]. Prazo de avaliação: [dias]. Prazo do vídeo de apresentação: [data]. Viradas de lote: [datas]. Publicação da programação: [data]. Encerramento das inscrições: [data].
Equipe: [número] voluntários, [horas] horas semanais somadas. Canal principal: Página e Evento no Facebook. Apoio: Instagram e um Canal do WhatsApp. Sem verba para anúncios.

1) Verifique se as datas têm problemas (por exemplo, prazo do vídeo antes do resultado da avaliação, submissões fechando muito perto do evento) e liste-os primeiro.
2) Monte um plano semana a semana de T−24 semanas a T+6 semanas, com estas fases: fundação, anúncio, chamada de trabalhos, palestrantes, virada de lote, programação, objeções, contagem regressiva, evento ao vivo, balanço, materiais, relacionamento contínuo.
3) Mantenha dois funis separados: autores (submissões) e participantes (inscrições). Depois do prazo de submissão, nenhum chamado para submeter.
4) No máximo 4 publicações por semana no Facebook, com no máximo 2 vídeos. Inclua tempo para respostas e revisão humana.
Entregue uma tabela: semana, datas, fase, funil, publicações no Facebook, atualização do Evento, Instagram, WhatsApp, ação com parceiros, métrica principal. Escreva os ganchos em português natural.
Não invente palestrantes, valores, parceiros, depoimentos ou datas comemorativas. Marque como HIPÓTESE tudo o que não tiver evidência.
```

## 3. Textos para cada fase da campanha

Estes prompts geram as publicações em si. Exemplos de resultado para cada momento, um banco de ganchos e uma checklist de edição estão em [Copywriting com IA](copywriting.md).

> [!TIP] Como funcionam os prompts de "Tarefa:"
> Os prompts desta seção que começam com **"Tarefa:"** vêm de [Copywriting com IA](copywriting.md#o-prompt-mestre-de-legenda). Use-os dentro do prompt mestre de legenda (3.1): troque a linha `Tarefa:` dele pela de baixo, ou cole a tarefa logo depois da ficha oficial e do parágrafo de voz.

### 3.1 O prompt mestre de legenda (qualquer publicação)

**Origem:** [Copywriting com IA](copywriting.md#o-prompt-mestre-de-legenda). Há um prompt parecido, de três legendas, no [Guia orgânico do Facebook](facebook-playbook.md#prompt-três-legendas-para-o-facebook-a-partir-de-fatos-aprovados), e o exemplo comentado está em [Noções básicas de prompt](prompting-basics.md#a-estrutura-de-um-bom-prompt).

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


### 3.2 Pedidos de ajuste que melhoram qualquer rascunho

**Origem:** [Noções básicas de prompt](prompting-basics.md#refine-a-qualidade-aparece-no-segundo-pedido). Envie um de cada vez, na mesma conversa.

```prompt
Mais curto, mesmos fatos. No máximo 40 palavras.
```

```prompt
Menos formal — como uma colega falando, não uma instituição. Mantenha todas as datas e valores exatamente iguais.
```

```prompt
Tire tudo o que soe como promessa que não podemos garantir (horas complementares, reconhecimento do MEC, progressão, vagas limitadas).
```

```prompt
Explique em duas frases simples, para quem nunca submeteu trabalho, a diferença entre fazer a inscrição e fazer a submissão.
```

### 3.3 Deixe o texto da IA humano e acadêmico-acolhedor

**Origem:** [Copywriting com IA](copywriting.md#como-deixar-o-texto-da-ia-humano-e-acadêmico-acolhedor).

```prompt
Revise este texto para soar como português brasileiro escrito por uma equipe de educação: acolhedor, preciso, de educador para educador. Preserve todos os fatos e a intenção; não acrescente argumentos de venda. Retire clichês publicitários, estrangeirismos desnecessários, excesso de exclamações e de emojis e adjetivos vazios. Troque abstrações pelos exemplos concretos que o próprio texto já traz. Entregue: o texto revisado, a lista de mudanças e as ambiguidades a confirmar.
Texto: [cole]
```

### 3.4 Chamada de trabalhos (agora → 4 de novembro)

**Origem:** [Primeira semana, dia 4](quick-start.md#dia-4--as-primeiras-publicações--90-min). Este é autossuficiente e já entrega a versão para o WhatsApp.

```prompt
Usando apenas a ficha oficial e a voz da marca acima, escreva uma publicação para o Facebook com a chamada de trabalhos do CONAFROEDU 2026.
Objetivo: levar professoras, professores, estudantes e pesquisadores a abrir as normas de submissão na Even3.
Inclua: o prazo de 4 de novembro; que o congresso acontece em 5 e 6 de dezembro, 100% on-line; as modalidades listadas na ficha; que a publicação nos anais tem taxa à parte de R$ 16,98 por trabalho; o link da Even3.
Até 110 palavras, um único convite para ação, até 3 hashtags no final. Marque como [CONFIRMAR] tudo o que for incerto.
Depois, me dê uma versão de 40 palavras para o WhatsApp (sem hashtags, link sozinho numa linha).
```

**Ângulo para quem nunca submeteu** (tarefa para o prompt mestre; origem: [Copywriting](copywriting.md#1-chamada-de-trabalhos-agora--4-de-novembro)):

```prompt
Tarefa: post no Facebook para a chamada de trabalhos. Público: professoras e professores que nunca submeteram trabalho a um congresso. Ângulo: uma prática que a pessoa já fez em sala pode virar uma submissão de práticas exitosas/relato de experiência. Mencione: submissões até 4 de novembro de 2026; ler as normas na Even3 antes; quem submete precisa estar inscrito(a); a publicação nos Anais tem taxa à parte de R$ 16,98 por trabalho. Não diga "submissão gratuita" sem explicar os custos de inscrição e de publicação.
```

> [!WARNING]
> Só escreva o lembrete do último dia ("encerram hoje, 4 de novembro, às…") depois que a comissão confirmar o horário-limite exato.

### 3.5 Autores aprovados: "Trabalho aprovado"

**Uso:** conforme os resultados saem (em até 5 dias úteis depois de cada submissão). Nunca publique o nome de uma autora ou um autor sem autorização.

Um modelo para os autores e uma publicação de parabéns da organização (tarefa; origem: [Copywriting](copywriting.md#2-trabalho-aprovado-conforme-saem-os-resultados)):

```prompt
Tarefa: escreva um modelo de legenda curta e calorosa para que a AUTORA ou o AUTOR publique no próprio perfil que o trabalho foi aprovado no CONAFROEDU 2026. Deixe lacunas para [título do trabalho], [modalidade] e [coautoras/es]. Mencione as datas do congresso e o link da Even3 para colegas que queiram participar. Primeira pessoa, com orgulho e sem exagero ("publicação garantida", "Qualis") e sem afirmar nada sobre o formato de apresentação. Escreva também um post de 2 linhas da organização parabenizando "as autoras e os autores aprovados", sem citar nomes.
```

Legendas pessoais para uma autora ou um autor que peça ajuda (origem: [Kits de divulgação](speaker-partner-kits.md#prompt-legendas-personalizadas-para-um-autor)):

```prompt
Você vai ajudar um autor a escrever uma publicação curta e pessoal para redes sociais.
Fatos (não acrescente nada): o trabalho "[TÍTULO]" ([MODALIDADE]) foi aprovado no I CONAFROEDU – Congresso Nacional de Africanidades na Educação, que acontece em 5 e 6 de dezembro de 2026, 100% on-line. Link de inscrição: [LINK RASTREADO]. Hoje é [DATA]; as submissões de trabalhos vão até 4 de novembro de 2026 (só mencione submissões se hoje for até essa data).
Escreva 3 opções de 50 a 90 palavras, em português do Brasil natural e acolhedor, em primeira pessoa, para Facebook/Instagram e Status do WhatsApp:
1) orgulhosa e pessoal; 2) focada em por que o tema importa para a escola; 3) um convite curto para colegas.
Não afirme publicação, DOI, Qualis, horário de apresentação nem carga horária de certificado. Não peça curtidas nem compartilhamentos. Use no máximo 2 hashtags (#CONAFROEDU #EducaçãoAntirracista).
```

### 3.6 A virada de 5 de novembro: submissões encerradas, inscrições abertas (novo)

**Uso:** na quinta-feira, 5 de novembro, a não ser que a comissão tenha prorrogado o prazo oficialmente. **Baseado em:** [Plano de 6 semanas, semana 2](conafroedu-sprint.md#semana-2--seg-2-a-dom-811-fechar-as-submissões-e-virar-a-chave).

```prompt
Usando SOMENTE a ficha oficial acima, escreva em português brasileiro natural:
1. Uma publicação para o Facebook (60 a 100 palavras) que agradeça a todas as pessoas que enviaram trabalhos, informe que as submissões encerraram em 4 de novembro e convide professoras, professores, estudantes e pesquisadores a se inscrever como ouvintes para 5 e 6 de dezembro, 100% on-line. Deixe claro que não é preciso apresentar trabalho para participar. Um único convite para ação, com o link da Even3.
2. Um novo texto para a publicação fixada, só com o essencial atual: o quê, quando, para quem, como se inscrever e contato.
3. Substituições para /prazo e /comosubmeter e auditoria de /inscricao, /valores, /modalidades, /video e /prorrogacao. Encaminhe novas consultas para ouvintes sem sugerir que comprar ingresso reabre submissões. Retire pacotes vencidos no fim da venda.
Não mencione prorrogação, a menos que a ficha mostre uma. Marque como [CONFIRMAR] tudo o que for incerto.
```

### 3.7 Palestrantes: roteiro do vídeo-convite

**Origem:** [Reels, cortes, legendas e dublagem](video-repurposing.md#convites-de-palestrantes-gravados-no-celular). Ofereça como sugestão: cada pessoa fala melhor com as próprias palavras.

```prompt
Escreva um roteiro de vídeo de 20 a 25 segundos, em português do Brasil, para uma palestrante confirmada gravar no celular, convidando o público para o CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação, 5 e 6 de dezembro de 2026, 100% on-line, inscrições pela Even3). Palestrante: [NOME], [CARGO/INSTITUIÇÃO — como aprovado]. Tema da fala: [TEMA APROVADO]. Estrutura: (1) apresentação em uma frase, (2) uma pergunta ou ideia concreta da fala que importe para professoras e professores, (3) convite com "inscrições pela Even3, link na publicação". Linguagem falada e natural, frases curtas, sem exageros e sem promessas sobre certificado além do que está escrito aqui. Dê duas versões: uma mais formal e outra mais calorosa.
```

### 3.8 Palestrantes: minibio a partir de fontes aprovadas

**Origem:** [Kits de divulgação](speaker-partner-kits.md#prompt-minibio-a-partir-de-fontes-aprovadas). Para fazer a minibio dentro de um Gemini Notebook, use o prompt 1.4.

```prompt
Use SOMENTE o texto-fonte abaixo. Escreva duas minibios de [NOME COMPLETO, exatamente como está escrito] para a programação do CONAFROEDU 2026: uma de 60 e outra de 120 palavras, em terceira pessoa, em português do Brasil natural.
Depois, faça uma tabela "informação → frase exata da fonte".
Marque com [CONFIRMAR] tudo o que estiver ambíguo. Não acrescente titulações, cargos, prêmios, instituições, autodeclaração racial ou publicações que não estejam na fonte. Não corrija a grafia de nomes.
Fonte: [COLE SOMENTE MINIBIO PROFISSIONAL MÍNIMA APROVADA PARA ESTE PROCESSAMENTO EXTERNO POR IA; SEM ISSO, PARE E ESCREVA MANUALMENTE]
```

### 3.9 Palestrantes: rascunhos do kit completo

**Origem:** [Kits de divulgação](speaker-partner-kits.md#prompt-rascunhos-do-kit-completo-do-palestrante).

```prompt
Prepare rascunhos de um kit de divulgação para o palestrante confirmado [NOME].
Tema aprovado: [TEMA]. Dados do evento: [COLE A FICHA]. O que realmente sabemos sobre o público dele: [INFORMAÇÃO ou "desconhecido"]. Contrapartidas acordadas: [DESCREVA ou "nenhuma"].
Entregue, em português do Brasil: (1) legenda curta de convite pessoal; (2) legenda construída em torno de uma ideia útil do tema; (3) legenda factual com data e link; (4) roteiro de vídeo vertical de 30 segundos na voz dele; (5) mensagem curta que ele possa encaminhar a um colega ou instituição.
Se houver divulgação em troca de benefício, confira elegibilidade e use o rótulo de parceria paga da Meta com legenda clara; Collab não substitui isso. Não afirme apoio da instituição onde ele trabalha. Não invente credenciais nem citações. Não escreva como se ele já tivesse aprovado. Indique onde entra o link rastreado. Tudo será revisado pela equipe e pelo palestrante.
```

### 3.10 Palestrantes: roteiro de Reel em Collab no Instagram

**Origem:** [Instagram e WhatsApp](instagram-whatsapp.md#roteiro-de-reel-em-collab-com-palestrante).

```prompt
Escreva, em português natural, o roteiro de um vídeo vertical de 45 segundos para uma Collab no Instagram entre o CONAFROEDU e um palestrante confirmado.
Palestrante: [nome, como aprovado]. Tema aprovado: [tema]. Público: [ex.: professores de história].
Estrutura: uma pergunta concreta de sala de aula nos 3 primeiros segundos → uma resposta ou exemplo útil (a maior parte do tempo) → um convite factual de uma linha para o CONAFROEDU (5 e 6 de dezembro, 100% on-line, link na bio).
Não invente titulações, citações ou resultados. Marque as falas que o palestrante precisa aprovar. Inclua o texto das legendas na tela e uma descrição curta do vídeo, no estilo de texto alternativo.
```

### 3.11 Virada de lote: 15 → 16 de novembro

**Uso:** um lembrete por volta de 12/11 e outro curto em 15/11, depois de conferir os valores no checkout da Even3 no mesmo dia. **Origem (tarefa):** [Copywriting](copywriting.md#3-virada-de-lote-15--16-de-novembro).

```prompt
Tarefa: post no Facebook sobre a mudança no valor das inscrições. Fatos: valores atuais válidos até 15 de novembro; a partir de 16 de novembro, mudam. Ouvinte/público geral R$ 55,00 → R$ 60,00; graduação + 1 submissão R$ 55,00 → R$ 60,00; pós-graduação + 1 submissão R$ 60,00 → R$ 65,00; professor(a)/profissional da educação + 1 submissão R$ 70,00 → R$ 75,00. Observação: como as submissões encerraram em 4/11, foque na participação como ouvinte, salvo orientação diferente da comissão. Tom calmo e factual; sem "últimas vagas", sem pressão.
```

### 3.12 Consciência Negra: sexta-feira, 20 de novembro

**Uso:** para uma contribuição educativa com substância, de preferência construída e aprovada pela educadora ou pelo educador negro que a equipe convidou ([plano de 6 semanas, semana 4](conafroedu-sprint.md#semana-4--seg-16-a-dom-2211-novembro-negro-e-20-de-novembro)). Se quiserem convidar para o congresso, façam isso numa publicação separada e curta. **Origem (tarefa):** [Copywriting](copywriting.md#4-consciência-negra-sexta-feira-20-de-novembro).

```prompt
Tarefa: texto de um carrossel para o Facebook (4 cards + legenda) para 20 de novembro. Conteúdo: card 1, a pergunta "20 de novembro no calendário; ERER no cotidiano?"; card 2, o que a Lei nº 10.639/2003 mudou (história e cultura afro-brasileira no currículo e o 20 de novembro no calendário escolar); card 3, a Lei nº 11.645/2008 (inclui a história e a cultura indígena); card 4, uma pergunta prática para a próxima reunião de planejamento. Cite as leis só pelo número, sem estatísticas ou citações inventadas. Legenda: reflexiva e respeitosa, com fontes, crédito e uma pergunta educativa real. Qualquer convite opcional para o congresso fica numa **publicação separada**. Sem desconto, sem urgência, sem chamada de trabalhos.
```

> [!CAUTION]
> Confira cada informação legal nos textos oficiais do Planalto antes de publicar: [Lei 10.639/2003](https://www.planalto.gov.br/ccivil_03/leis/2003/l10.639.htm), [Lei 11.645/2008](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm) e [Lei 14.759/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm), que tornou o 20 de novembro feriado nacional. Para a imagem, veja o [prompt 4.5](#45-arte-do-dia-da-consciência-negra-20-de-novembro).

### 3.13 Divulgação da programação (até 25 de novembro)

**Uso:** só com a programação **oficial**, com os nomes copiados exatamente. **Origem (tarefa):** [Copywriting](copywriting.md#5-divulgação-da-programação-até-25-de-novembro).

```prompt
Tarefa: a partir da programação oficial colada abaixo, escreva 3 posts curtos para o Facebook, cada um com um "roteiro" para um público: (a) professoras e professores da educação básica, (b) estudantes de graduação, (c) gestoras e gestores escolares. Cada roteiro escolhe 2 ou 3 sessões pertinentes, com nomes, títulos e horários exatamente como na programação, em horário de Brasília. Não acrescente sessões, credenciais ou descrições que não estejam na programação. Termine com o link da Even3.
PROGRAMAÇÃO: [cole a programação oficial]
```

### 3.14 A última semana: como participar (novo)

**Uso:** nas publicações de 30/11 a 4/12. Preencha os dados de acesso só depois que a comissão confirmar. **Baseado em:** [Plano de 6 semanas, semana 6](conafroedu-sprint.md#semana-6--seg-3011-a-dom-612-reta-final-e-o-congresso).

```prompt
Usando SOMENTE a ficha oficial acima, escreva em português brasileiro natural um FAQ "Como participar" para quem já está inscrito, em duas versões: um carrossel (5 cards) e uma atualização para o Canal do WhatsApp (até 500 caracteres).
Fale só do que a ficha confirma: datas (5 e 6 de dezembro de 2026), "horário de Brasília", como o acesso é recebido, onde está a programação, contato e horário de atendimento, certificados disponíveis a partir de 6 de dezembro. Para o que não estiver confirmado (plataforma, caminho de acesso, gravações, recursos de acessibilidade), escreva [CONFIRMAR].
Nunca inclua link de reunião nem senha; o acesso vai de forma privada para quem está inscrito.
Lembre que as inscrições ficam abertas até 6 de dezembro — não escreva que as inscrições "acabam em 48 horas".
```

### 3.15 Dias do congresso: 5 e 6 de dezembro

**Uso:** publique à mão, no próprio dia; nunca deixe agendado. **Origem (tarefa):** [Copywriting](copywriting.md#6-dias-do-congresso-5-e-6-de-dezembro).

```prompt
Tarefa: escreva (a) um post de "Bom dia, começamos!" para o Facebook em 5 de dezembro, (b) uma sequência de 3 Stories com os destaques do dia, (c) um modelo curto de aviso de mudança na programação e (d) um post de agradecimento de encerramento em 6 de dezembro. Fatos: horários em horário de Brasília conforme a programação oficial; quem está inscrito acessa as sessões por [CONFIRMAR] — plataforma e como recebe o link; suporte pelo WhatsApp (19) 98816-7751 e pelo e-mail conapsuporte@gmail.com. Não inclua nenhum link privado de acesso. Tom caloroso, animado, mas tranquilo.
```

### 3.16 Certificados (a partir de 6 de dezembro)

**Uso:** depois que a comissão confirmar os critérios e o passo a passo para baixar. **Origem (tarefa):** [Copywriting](copywriting.md#7-certificados-a-partir-de-6-de-dezembro), que também traz a redação cuidadosa do certificado para colar junto.

```prompt
Tarefa: um post curto para o Facebook e um modelo de resposta de WhatsApp explicando como baixar o certificado do CONAFROEDU. Fatos: disponível a partir de 6 de dezembro na Even3; critérios: [CONFIRMAR]; passo a passo: [CONFIRMAR] — com a comissão. Use a redação cuidadosa do certificado fornecida. Não prometa aproveitamento como horas complementares nem para progressão.
```

### 3.17 Depois do evento: balanço e situação dos anais (novo)

**Uso:** entre 7 e 15 de dezembro. **Baseado em:** [Plano de 6 semanas, depois do evento](conafroedu-sprint.md#depois-do-evento--seg-7-a-ter-1512-cumprir-o-prometido) e no [modelo dos anais](copywriting.md#8-anais-até-15-de-dezembro).

```prompt
Usando SOMENTE a ficha oficial acima, escreva em português brasileiro natural:
1. Uma publicação de balanço (80 a 120 palavras) agradecendo a palestrantes, autoras e autores, parceiros e participantes. Cite apenas as pessoas e instituições desta lista, que autorizaram ser nomeadas: [LISTA]. Não invente números de participação nem depoimentos; se eu informar números reais, use exatamente estes: [NÚMEROS ou "nenhum"].
2. Uma atualização sobre os anais: se houver um link real aqui, anuncie: [LINK ou "ainda não publicado"]; se não houver, escreva uma atualização honesta, sem data que a comissão não tenha confirmado. Nunca escreva por conta própria um ISBN, um DOI ou um link.
```

### 3.18 Uma mensagem aprovada, vários formatos

**Origem (tarefa):** [Copywriting](copywriting.md#uma-mensagem-vários-formatos). Para uma versão mais simples, em três canais, veja [Instagram e WhatsApp](instagram-whatsapp.md#adaptar-um-anúncio-aprovado-para-três-canais); para começar de uma linha do calendário, veja o [prompt 4 da linha do tempo](campaign-timeline.md#4-transformar-uma-linha-do-calendário-em-rascunhos-prontos).

```prompt
Tarefa: adapte o texto aprovado abaixo para: (A) um post autossuficiente no Facebook com o link da Even3; (B) um carrossel no Instagram, com o texto de 5 cards de no máximo 15 palavras cada + legenda, indicando o link da bio (link na legenda não é clicável); (C) um roteiro de Reels de 20 segundos com gancho na tela nos 2 primeiros segundos e as frases da legenda embutida; (D) 3 Stories; (E) um resumo para o Canal do WhatsApp com menos de 500 caracteres, sem hashtags; (F) um post de discussão no Evento do Facebook; (G) um parágrafo para e-mail a parceiros. Mantenha datas, valores, nomes e condições exatamente iguais. Depois, entregue uma tabela conferindo cada fato em todas as versões.
Texto aprovado: [cole]
```

### 3.19 Os posts da próxima semana a partir do calendário (sessão em lote)

**Origem:** [Ferramentas de agendamento](scheduling-tools.md#prompt-rascunhar-os-posts-da-próxima-semana-a-partir-do-calendário).

```prompt
Você está ajudando a comissão organizadora voluntária do CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação), um congresso acadêmico 100% on-line nos dias 5 e 6 de dezembro de 2026. Inscrições: https://www.even3.com.br/iconafroedu-764690/

Use SOMENTE a ficha oficial abaixo. Não invente valores, palestrantes, prazos, regras de certificado ou parcerias. Se faltar alguma informação, escreva [CONFIRMAR].

Escreva em português brasileiro natural, com tom acadêmico e acolhedor, tratando o público por "você", sem cara de tradução.

Linhas do calendário da próxima semana:
[cole as linhas: ID, data/hora, objetivo, público, formato, mensagem principal]

Para cada linha, entregue:
1. Uma legenda para o Facebook (60 a 120 palavras), com uma única chamada para ação e o link da Even3 escrito por extenso.
2. Uma versão mais curta para o Instagram (sem link clicável; só diga "link na bio" se confirmarmos que o link está na bio).
3. Texto alternativo só a partir da IMAGEM FINAL anexada ou descrição factual com todo o texto visível. Sem esses dados, escreva AGUARDAR IMAGEM; não invente pessoas, objetos ou texto.
4. Uma lista de todas as informações que você usou, para a revisora ou o revisor conferir.

IMAGENS FINAIS (anexar ou fornecer descrição factual + texto visível): [por linha]
FICHA OFICIAL (versão e data): [cole aqui]
```

### 3.20 A descrição do Evento no Facebook

Para escrever do zero (tarefa; origem: [Copywriting](copywriting.md#a-descrição-do-evento-no-facebook)):

```prompt
Tarefa: escreva a descrição do Evento no Facebook em português brasileiro, com no máximo 250 palavras, fácil de escanear, com intertítulos curtos. Blocos: (1) um parágrafo com objetivo e público; (2) Inscrição: link da Even3 e valores atuais com a data da mudança; (3) Submissões: até 4/11, ou "encerradas" se for depois dessa data; (4) Acesso: como as pessoas inscritas recebem o acesso [CONFIRMAR], lembrando que marcar presença no Evento não é inscrição; (5) Certificado: redação cuidadosa das 40 horas; (6) Dúvidas: WhatsApp e e-mail. Sem palestrantes ou recursos de acessibilidade inventados.
```

Para melhorar uma descrição que já existe (origem: [Eventos e Grupos no Facebook](facebook-events-groups.md#rascunhar-ou-melhorar-a-descrição-do-evento)):

```prompt
Você está ajudando a comissão organizadora de um congresso acadêmico on-line no Brasil.
Reescreva a descrição do Evento do Facebook abaixo para que fique clara no celular: parágrafos curtos, datas principais primeiro, um único link de inscrição.
Mantenha EXATAMENTE todas as datas, valores, nomes e condições. Não acrescente benefícios, palestrantes, recursos de acessibilidade ou regras de certificado que não estejam nos fatos. Onde faltar informação, escreva [CONFIRMAR].
Deixe explícito que clicar em "Vou/Tenho interesse" no Facebook não é inscrição.
Fatos: [colar a ficha oficial]. Descrição atual: [colar].
```

### 3.21 Adapte uma publicação às regras de um grupo

**Origem:** [Eventos e Grupos no Facebook](facebook-events-groups.md#adaptar-uma-publicação-às-regras-de-um-grupo-específico).

```prompt
Faço parte da organização do CONAFROEDU. Abaixo estão as regras de um grupo do Facebook e um resumo das conversas recentes nele.
1) Diga se a divulgação de eventos parece permitida, restrita (dia/publicação específica/aprovação) ou proibida. Cite a regra.
2) Se for permitida, adapte minha publicação a este grupo em pt-BR natural (no máximo 120 palavras): comece com algo útil para o tema do grupo, deixe claro que faço parte da organização, informe que o evento é pago e use um único link.
3) Se não estiver claro, escreva um pedido curto e educado de autorização para a moderação.
Não invente regras. Não sugira formas de driblar a moderação.
Regras do grupo: [colar]. Temas recentes: [colar]. Minha publicação-base: [colar]. Fatos: [colar].
```

### 3.22 Perguntas genuínas para a discussão do Evento

**Origem:** [Eventos e Grupos no Facebook](facebook-events-groups.md#perguntas-semanais-para-a-discussão).

```prompt
Sugira 6 perguntas genuínas, em pt-BR, para a discussão do Evento do CONAFROEDU no Facebook, voltadas a professores e pesquisadores interessados em Africanidades e educação antirracista (ERER). Cada pergunta deve convidar à troca de experiência real, sem respostas de sim/não e sem iscas do tipo "comente SIM". Evite pedir que as pessoas relatem em público casos identificáveis envolvendo crianças ou experiências traumáticas. Ligue cada pergunta a um tema desta lista de sessões confirmadas: [colar sessões confirmadas].
```

### 3.23 Mensagens de WhatsApp (só para quem autorizou)

**Uso:** só para quem pediu para receber avisos ou escreveu primeiro. **Origem (tarefa):** [Copywriting](copywriting.md#mensagens-de-whatsapp-só-para-quem-autorizou).

```prompt
Tarefa: escreva em português brasileiro (a) uma atualização para o Canal do WhatsApp com menos de 500 caracteres anunciando que a programação oficial saiu; (b) uma mensagem direta para alguém que PEDIU para receber lembretes, sobre a mudança de valor em 16/11, com uma linha para deixar de receber; (c) um convite curto que uma professora possa encaminhar a colegas; (d) uma resposta para "Tem certificado?" usando a redação cuidadosa. Sem hashtags, no máximo um emoji em cada, link da Even3 em todas.
```

## 4. Imagens

Ferramentas padrão: ChatGPT Images ou o aplicativo Gemini (gratuitos, com limites) e depois o **Canva gratuito** para colocar todo o texto. Leia [Representar culturas negras e africanas com respeito](representation-bias.md) antes de gerar qualquer imagem de pessoas. O livro de receitas completo, com tamanhos e o texto a colocar no Canva, é o [Livro de receitas de prompts de imagem](image-prompts.md).

### 4.1 O bloco de estilo (cole uma vez por conversa)

**Origem:** [Livro de receitas](image-prompts.md#o-bloco-de-estilo-cole-uma-vez-por-conversa). As cores são uma **paleta de exemplo**, não a paleta oficial do CONAFROEDU; use as cores do seu [kit de marca](brand-kit.md#cores).

```prompt
ESTILO PARA TODAS AS IMAGENS DESTA CONVERSA
Projeto: CONAFROEDU 2026 – Congresso Nacional de Africanidades na Educação (on-line, Brasil), tema "Desenvolvimento, Participação e Educação Antirracista".
Estilo visual: ilustração editorial contemporânea em recortes de papel, textura de papel discreta, composição limpa, acolhedora e profissional.
Paleta: [cor principal, ex.: azul-marinho #17324D], [segunda cor, ex.: verde #3F8F79], [fundo, ex.: creme #F6F2E9], [cor de destaque].
Pessoas (só quando eu pedir): educadoras, educadores e pesquisadores negros brasileiros adultos, com tons de pele, idades, corpos e cabelos variados (crespo, cacheado, tranças, locs, curto), em papéis de autoridade: ensinando, pesquisando, liderando. Rostos diferentes entre si, nunca clones. Iluminação que preserve os detalhes da pele escura.
Sempre: nenhuma palavra, letra, número, logotipo, assinatura ou marca-d'água. Deixe espaço vazio e limpo para o texto que vou inserir depois.
Nunca: símbolos religiosos, orixás, adinkra, kente ou estampas "tribais" genéricas, savana, animais selvagens, cabanas, máscaras, cenas de pobreza ou resgate, local físico ou plateia presencial.
Confirme em uma frase que entendeu e aguarde meu primeiro pedido.
```

### 4.2 Fundo do cartaz do evento

**Tamanho:** 4:5 (1080 × 1350), depois amplie. **Origem:** [Livro de receitas](image-prompts.md#1-cartaz--fundo-do-evento).

```prompt
Seguindo o estilo combinado, crie o fundo principal da campanha do CONAFROEDU 2026. Vertical 4:5. Na metade inferior: uma cena contemporânea de troca de conhecimento entre educadoras e educadores negros brasileiros adultos: uma pessoa apresenta ideias, as outras escutam e anotam, um notebook mostra uma reunião on-line abstrata, sem tela legível. Livros e cadernos sem texto legível. A metade superior deve ficar calma e quase vazia (cor de fundo com poucas formas suaves) para um título. Ilustração conceitual, não fotografia de um evento real. Sem texto, números ou logotipos.
```

**Alternativa sem pessoas (o menor risco):**

```prompt
Seguindo o estilo combinado, crie um fundo abstrato: formas de papel sobrepostas que sugiram conexão, diálogo e crescimento (caminhos que se encontram, livros abertos vistos de cima, círculos que se ligam). Vertical 4:5, metade superior vazia para um título. Sem pessoas, sem texto, sem símbolos com significado cultural ou religioso.
```

### 4.3 Fundo do card de palestrante

**Uso:** com a **foto real e aprovada** da pessoa colocada no Canva. **Origem:** [Livro de receitas](image-prompts.md#2-card-de-palestrante).

```prompt
Seguindo o estilo combinado, crie um fundo para card de palestrante. Vertical 4:5. Deixe uma grande área vazia à esquerda (cerca de 55% da largura), onde vou colocar uma foto real, e uma faixa limpa embaixo para nome e tema. À direita, só formas suaves de papel nas cores da paleta. Sem pessoas, sem rostos, sem texto, sem molduras que pareçam foto.
```

### 4.4 Fundo da contagem regressiva (uma imagem para a série toda)

**Tamanho:** 9:16 (1080 × 1920). **Origem:** [Livro de receitas](image-prompts.md#6-contagem-regressiva).

```prompt
Seguindo o estilo combinado, crie um fundo vertical 9:16 para uma série de contagem regressiva. Uma grande área circular, totalmente vazia, no centro (onde vou colocar um número grande), cercada por formas de papel dispostas como um mostrador de relógio ou um caminho que avança. Mantenha simples os 15% superiores e os 20% inferiores da imagem (os botões do aplicativo cobrem essas áreas). Sem números, sem letras, sem ponteiros, sem pessoas.
```

### 4.5 Arte do Dia da Consciência Negra (20 de novembro)

**Melhor opção:** uma obra encomendada ou licenciada de artista negro brasileiro, ou só tipografia. **Origem:** [Livro de receitas](image-prompts.md#7-arte-do-dia-da-consciência-negra-20-de-novembro).

```prompt
Seguindo o estilo combinado, crie uma ilustração editorial contemporânea para uma reflexão sobre o Dia da Consciência Negra na educação brasileira. Vertical 4:5. Educadoras e educadores negros brasileiros adultos, de idades e tons de pele diferentes, na biblioteca de uma escola atual, escolhendo livros juntos e planejando uma aula; uma pessoa explica, as outras contribuem. Clima de orgulho, estudo e trabalho coletivo. Claramente uma ilustração, não uma fotografia. Terço superior vazio para texto. NÃO inclua: correntes, chicotes, navios negreiros, cenas de sofrimento, retratos de Zumbi ou de outras figuras históricas, orixás ou objetos religiosos, ícone de punho erguido, bandeiras, estampas "africanas" genéricas, savana ou animais. Sem texto.
```

### 4.6 Fundo da capa da retrospectiva

**Uso:** por trás de capturas de tela **reais** e citações aprovadas, nunca de "participantes" gerados. **Origem:** [Livro de receitas](image-prompts.md#11-retrospectiva-7-a-15-de-dezembro).

```prompt
Seguindo o estilo combinado, crie um fundo quadrado 1:1 para a capa de um carrossel de agradecimento e retrospectiva. Formas de papel organizadas como um mosaico de molduras vazias de tamanhos diferentes (onde vou colocar capturas de tela reais), com um brilho suave e acolhedor. Grande faixa vazia para um título. Sem pessoas, sem rostos, sem texto, sem números.
```

### 4.7 Uma cena contemporânea com papéis definidos

**Origem:** [Representação e vieses](representation-bias.md#padrões-de-prompt-que-funcionam-melhor). Papéis específicos mantêm a autoridade com as pessoas certas.

```prompt
Ilustração editorial contemporânea, sem aparência de fotografia documental. Três docentes negros brasileiros adultos discutem juntos um plano de aula de história e cultura afro-brasileira em uma escola brasileira atual. Uma professora de pele retinta apresenta o planejamento e um professor de pele castanha organiza as referências; a terceira docente faz perguntas e anota. Varie os traços faciais e os tons de pele, com iluminação que preserve seus detalhes. Inclua cabelo crespo curto, tranças e cabelo cacheado, desenhados com cuidado; são escolhas destes personagens, não uniformes de uma identidade. Roupas cotidianas, biblioteca e materiais escolares plausíveis, computador utilizado pelos próprios docentes. Composição horizontal com espaço para texto inserido depois. Sem cenário de resgate, pobreza como atalho visual, salvador branco, estampa "tribal" genérica, animal exótico ou objeto religioso. Não associe a cena a participantes reais do CONAFROEDU. Não gere letras, nomes ou logotipos.
```

### 4.8 Preservar a identidade de uma pessoa real

**Checklist manual, não é prompt de edição generativa.** Use o original autorizado num editor comum de recorte/exposição. Preserve rosto, tom de pele, textura do cabelo, idade e marcas; deixe o espaço do nome fora da foto. Compare com o original e pare se a edição mudar a identidade. Não envie retrato real para reconstrução generativa. Siga o [checklist de retrato](representation-bias.md#padrões-de-prompt-que-funcionam-melhor) e as [autorizações](ethics-legal.md).

### 4.9 Uma mesa sobre tradição específica: consulte antes de desenhar

**Origem:** [Representação e vieses](representation-bias.md#padrões-de-prompt-que-funcionam-melhor).

```prompt
Precisamos divulgar uma mesa sobre [tradição/comunidade específica, confirmada pela pessoa convidada]. Antes de sugerir imagens, liste o que perguntar à pessoa responsável: quais termos usa, quais símbolos podem aparecer publicamente, quais referências ela autoriza e quais elementos não devem ser representados. Proponha primeiro uma composição com título, formas simples e retrato autorizado. Não invente orixás, rituais, grafismos, significados de adinkra ou uma "estética africana" genérica. Diferencie o que está confirmado do que depende de consulta.
```

### 4.10 Prompts de correção

**Uso:** na mesma conversa, **um problema por mensagem**. Se duas correções falharem, volte à última versão boa ou use um fundo liso. **Origem:** [Livro de receitas](image-prompts.md#prompts-de-correção-iteração).

Apareceu texto mesmo assim:

```prompt
Recrie exatamente esta imagem, mas remova todas as letras, palavras, números e "pseudotextos", inclusive em livros, telas e cartazes. Mantenha todo o resto igual.
```

Mudar o formato (ampliação):

```prompt
Amplie esta imagem para [9:16 / 16:9 / 1,91:1]. Continue apenas o fundo, as formas e a textura. Não acrescente pessoas, objetos, texto ou logotipos. Não altere nada do que já existe.
```

Rostos parecidos demais:

```prompt
As pessoas estão com rostos muito parecidos. Mantenha a composição e os papéis, mas dê a cada pessoa traços faciais, idade, tipo de corpo e penteado diferentes. Não clareie os tons de pele.
```

A pele foi clareada:

```prompt
Os tons de pele estão mais claros do que o pedido e os rostos perdem detalhes. Mantenha a composição e restaure os tons de pele mais escuros descritos antes, com luz suave que mostre os detalhes do rosto na pele escura. Não altere mais nada.
```

Parece foto de verdade:

```prompt
Deixe a imagem claramente ilustrada: cores mais chapadas, recortes de papel e textura visíveis, menos detalhes fotográficos. Ela não pode ser confundida com a fotografia de um evento real.
```

### 4.11 Um ajuste cuidadoso numa foto autorizada

**Uso:** só para defeitos de fundo sem valor de informação; compare original e edição lado a lado. **Origem:** [Geração de imagens](image-generation.md#como-editar-fotos-reais-palestrantes-lives-e-retrospectivas).

```prompt
A foto 1 é uma fotografia autorizada. Edite SOMENTE a área vazia da parede marcada na máscara, para corrigir uma mancha de iluminação. Preserve todos os pixels fora da área marcada, sempre que a ferramenta permitir. Não altere pessoas, rostos, tom de pele, cabelo, roupas, quantidade de pessoas, placas, logotipos ou objetos. Mantenha o enquadramento e a aparência documental da fotografia.
```

## 5. Vídeo e Reels

A maior parte dos Reels do CONAFROEDU deve vir de **gravações reais**. Gere só inserções curtas, sem texto e sem pessoas. O Sora foi descontinuado em 2026: ignore tutoriais baseados nele ([Geração de vídeo](video-generation.md#o-que-mudou-em-2026-para-tutoriais-antigos-não-te-enganarem)).

### 5.1 O modelo de vídeo de um único plano

**Origem:** [Geração de vídeo](video-generation.md#prompt-plano-a-plano-como-escrever-um-prompt-de-vídeo).

```prompt
Vídeo vertical 9:16, de [5] segundos. [ASSUNTO — simples, sem pessoas identificáveis]. [UMA AÇÃO]. Câmera: [UM MOVIMENTO]. Estilo: [ESTILO], [LUZ]. Cores: [2–3 CORES DA MARCA]. Áudio: [SÓ AMBIENTE / SEM ÁUDIO], sem fala e sem música reconhecível. Sem textos, números, letras, logotipos ou marcas.
```

**Exemplo: inserção conceitual**

```prompt
Vídeo conceitual vertical 9:16, de 5 segundos, para a campanha de um congresso de educação. Uma mesa organizada com cadernos sem texto e formas de papel colorido que se conectam suavemente, simbolizando a colaboração entre professoras e professores. Um único movimento lento de aproximação da câmera. Luz suave, paleta azul-marinho, verde e creme, estética editorial de papel. Preserve a forma dos objetos. Sem pessoas identificáveis, textos, números, marcas ou logotipos. Áudio: apenas um ambiente discreto; sem fala nem música reconhecível.
```

**Peça a um assistente de texto que escreva o plano para você:**

```prompt
Transforme esta ideia num prompt de vídeo de um único plano, nesta estrutura: formato, assunto, uma ação, um movimento de câmera, estilo, paleta, áudio, exclusões. Até 80 palavras. Ideia: [sua ideia].
```

### 5.2 Anime o fundo do cartaz sem texto (imagem para vídeo)

**Uso:** na ilustração **sem** texto nem logotipo; recoloque por cima, no editor, as camadas originais de texto. **Origem:** [Geração de vídeo](video-generation.md#passo-a-passo-2-animar-o-cartaz-imagem-para-vídeo-com-segurança).

```prompt
Use esta ilustração como primeiro quadro. Anime apenas as pequenas formas de papel: elas flutuam lentamente e voltam à posição inicial. Câmera fixa. Mantenha composição, cores, contornos e iluminação. Não crie pessoas, palavras, logotipos ou objetos novos. Movimento muito discreto, sem cortes bruscos.
```

### 5.3 Um storyboard de 15 segundos com tipografia (sem pessoas)

**Origem:** [Representação e vieses](representation-bias.md#padrões-de-prompt-que-funcionam-melhor).

```prompt
Crie um storyboard de 15 segundos para divulgar o CONAFROEDU 2026 a professoras e professores brasileiros. Use tipografia legível e movimento de formas geométricas simples. Fatos: 5 e 6 de dezembro de 2026; 100% on-line; inscrições na Even3. Não invente pessoas, falas, símbolos culturais, imagens de edições anteriores ou apoiadores. Deixe a carga horária e as condições de certificação para inserção após conferência da organização. Entregue o roteiro, a ordem das telas e uma lista dos fatos que precisam de revisão humana.
```

### 5.4 Peça autorização a palestrantes, uso por uso

**Origem:** [Reels, cortes, legendas e dublagem](video-repurposing.md#passo-0-autorizações-antes-de-tudo).

```prompt
Escreva uma mensagem curta e cordial, em português do Brasil, da comissão organizadora do CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação, 5 e 6 de dezembro de 2026, on-line) para uma palestrante confirmada. Peça autorização para cada um destes usos separadamente, para que ela possa responder sim/não a cada um: (1) gravar a palestra, (2) publicar cortes curtos (até 90 segundos) no Facebook, Instagram e WhatsApp do congresso, (3) usar nome, foto e instituição nas publicações, (4) legendas traduzidas. Deixe claro que NÃO usaremos dublagem com IA, clonagem de voz ou avatar sem um pedido à parte. Diga que ela pode revisar os cortes antes da publicação, se quiser. Tom acadêmico, acolhedor e respeitoso. Máximo de 150 palavras.
```

### 5.5 Escolha trechos de uma palestra (sem inventar)

**Uso:** com uma transcrição **corrigida e autorizada**. **Origem:** [Reels, cortes, legendas e dublagem](video-repurposing.md#passo-3--peça-à-ia-que-proponha-trechos-e-não-que-os-invente).

```prompt
Você é editor de conteúdo de um congresso de educação no Brasil (CONAFROEDU 2026, sobre Africanidades e educação antirracista). Use SOMENTE a transcrição abaixo. Selecione até seis trechos que possam virar vídeos verticais de 20 a 60 segundos para professores e pesquisadores. Busque variedade: uma dica prática para a sala de aula, uma ideia surpreendente, uma história curta, um resultado de pesquisa, a resposta a uma pergunta do público e um pensamento final inspirador. Para cada trecho, informe: tempo inicial/final, as palavras exatas, a ideia central, o contexto que o espectador precisa ter, um título curto e fiel (até 8 palavras) e por que ele é útil para esse público. Não invente falas, dados nem tempos. Não corte ressalvas que mudem o sentido. Se os tempos parecerem pouco confiáveis, diga isso. Não dê "pontuação de viralização".

[COLE A TRANSCRIÇÃO CORRIGIDA E AUTORIZADA, COM OS TEMPOS]
```

### 5.6 Legendas para um corte

**Origem:** [Reels, cortes, legendas e dublagem](video-repurposing.md#passo-6--escreva-o-texto-da-publicação).

```prompt
Escreva 3 opções de legenda para Facebook/Instagram, em português do Brasil, para um corte vertical do CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação). Palestrante: [NOME, CARGO E INSTITUIÇÃO APROVADOS]. Resumo do corte: [IDEIA CENTRAL]. Citação exata a destacar (não altere): "[CITAÇÃO]". Fase: [antes do congresso — inscrições abertas na Even3 / depois do congresso — agradecimento + anais]. Cada legenda: 60 a 110 palavras, começa pela ideia do vídeo (não pelo nome do evento), dá crédito à palestrante, tem uma única chamada para ação clara e termina com no máximo 3 hashtags relevantes desta lista: #CONAFROEDU #EducaçãoAntirracista #Africanidades #CongressoOnline #PesquisaEmEducação. Tom acadêmico, natural e acolhedor. Sem exageros, sem "últimas vagas", sem pedir curtidas ou comentários vazios. Marque a citação como literal.
```

Depois, na mesma conversa:

```prompt
Para o mesmo corte, sugira: (1) cinco títulos de capa para aparecer na tela, com no máximo 6 palavras cada, fiéis ao que a palestrante disse; (2) uma descrição curta e acessível do vídeo para o texto da publicação (o que aparece e quem fala), sem presumir raça, religião, deficiência ou emoções de ninguém.
```

## 6. Motion graphics com o Claude

O Claude escreve uma pequena página HTML autocontida que se anima; você grava em MP4 (de graça com o OBS Studio e depois corta no Canva). O passo a passo, os arquivos de exemplo e a solução de problemas estão em [Stop-motion e motion graphics com o Claude](motion-graphics-claude.md).

### 6.1 Contagem regressiva animada "Faltam 7 dias"

**Publicar em:** sábado, 28 de novembro de 2026. Faça um MP4 para cada data e escreva "Falta 1 dia" (no singular) no último ([qual número em qual dia](motion-graphics-claude.md#qual-número-publicar-em-qual-dia)). **Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#2-cole-o-prompt).

```prompt
Crie um Design/Artifact e me entregue um único arquivo HTML autocontido chamado conafroedu-faltam-7-dias.html, exportável como HTML independente.
Não sou programador(a): não me peça para instalar bibliotecas nem editar código.

Formato: vertical 9:16, 1080×1920, ajustado a qualquer janela do navegador sem distorcer. Fundo opaco. Só fontes do sistema. Sem internet, CDN, áudio, React ou dependências externas. Salve com <meta charset="utf-8"> para os acentos aparecerem corretamente.

Estilo: animação de papel recortado, paleta quente (terracota #b4532a, ocre #d99a2b, creme #f5e9d7, marrom-escuro #3a1d12). Só formas geométricas simples, sem símbolos culturais ou religiosos e sem padrões "africanos" genéricos.

Texto exato na tela (não acrescente, não traduza, não altere nada):
"CONAFROEDU 2026"
"Faltam"
"7"
"dias"
"Desenvolvimento, Participação e Educação Antirracista"
"5 e 6 de dezembro de 2026"
"100% on-line"
"Inscreva-se pelo Even3"
"link na legenda"

Tempo: uma animação de 12 segundos e depois congela no último quadro (sem loop). 0–2 s entram as formas e o título; 2–5 s "Faltam 7 dias"; 5–8 s tema, data e "100% on-line"; 8–12 s o convite. Movimento em poses, 8 poses por segundo, como stop-motion. Sem flashes.
Todo o texto dentro de uma área segura: 14% no topo, 22% embaixo e 12% de cada lado, para os botões e a legenda do Reels não cobrirem nada. Recarregar a página reinicia a animação.
Depois de criar, me explique como baixar e abrir o arquivo HTML.
```

> [!NOTE]
> A paleta destes prompts de animação é a dos arquivos de exemplo daquela página. Se a comissão tiver um [kit de marca](brand-kit.md#cores), troque pelos códigos hexadecimais dele.

### 6.2 Card animado de palestrante ou autor(a)

**Uso:** só palestrantes confirmados, com nome, cargo e foto aprovados. **Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#card-animado-de-palestrante-ou-autora).

```prompt
Crie uma animação em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas externas, com <meta charset="utf-8"> e fontes do sistema.
Envio em anexo uma foto autorizada da palestrante. Incorpore a foto dentro do próprio arquivo HTML e não altere, retoque, clareie nem corte o rosto.

Texto exato (não mude nada):
"CONAFROEDU 2026 · Palestra"
"[NOME EXATO, COMO APROVADO]"
"[CARGO / INSTITUIÇÃO APROVADOS]"
"[TÍTULO EXATO DA PALESTRA]"
"[CONFIRMAR] — data da sessão · [CONFIRMAR] — horário (horário de Brasília)"
"Inscrições: Even3 · link na legenda"

12 segundos, toca uma vez e congela no último quadro. A foto entra deslizando de 0 a 2 s; o nome aparece aos 2 s e fica visível por pelo menos 6 segundos; o título aparece aos 5 s; data e convite aos 8 s.
Paleta terracota/ocre/creme, formas de papel recortado, movimento em poses (8 por segundo), sem flashes. Texto dentro da área segura (14% no topo, 22% embaixo, 12% dos lados). Teste com o nome e o título mais longos para nada ser cortado.
```

### 6.3 Tipografia cinética para uma citação conferida

**Uso:** só com texto conferido na fonte (aqui, a própria lei) ou aprovado por quem disse. **Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#tipografia-cinética-para-uma-citação).

```prompt
Crie uma animação de tipografia cinética em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas, com <meta charset="utf-8"> e fontes do sistema.
Fundo terracota #b4532a, texto creme #f5e9d7, destaques em ocre #d99a2b.

Etiqueta pequena no topo: "O QUE DIZ A LEI"
Citação (texto exato, não mude nenhuma palavra nem acento):
"Nos estabelecimentos de ensino fundamental e de ensino médio, públicos e privados, torna-se obrigatório o estudo da história e cultura afro-brasileira e indígena."
Destaque "obrigatório" e "história e cultura afro-brasileira e indígena".
Linha da fonte: texto marrom-escuro sobre painel creme opaco, com contraste mínimo de 4,5:1 no tamanho exibido no celular; mantenha painel e quadro final dentro da área segura. Texto: "LDB (Lei nº 9.394/1996), art. 26-A, com redação dada pela Lei nº 11.645/2008"
Quadro final: "CONAFROEDU 2026 — 5 e 6 de dezembro de 2026 — 100% on-line"

As palavras aparecem uma de cada vez, cerca de 4 por segundo, e continuam na tela. Depois aparece a fonte, depois o quadro final. Total de uns 14 s, toca uma vez e congela no último quadro. Coloque o texto da citação e a velocidade em configurações bem identificadas no topo do arquivo, para eu mudar sem saber programar. Tudo dentro da área segura.
```

### 6.4 Uma sequência de papel em "stop-motion" feita só com código

**Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#uma-sequência-de-papel-em-stop-motion-feita-só-com-código).

```prompt
Crie uma animação em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas, com <meta charset="utf-8">.
Estilo: recortes de papel sobre fundo creme com textura sutil de papel feita em CSS/SVG. Todo movimento acontece em poses visíveis, 8 por segundo (tempo em degraus, sem suavização), e os recortes tremem levemente entre 3 poses, como em stop-motion de verdade.
Cena: um caderno de papel se abre ao longo de 2 segundos; um sol de papel sobe acima dele; depois um card fica parado por 5 segundos com este texto exato:
"CONAFROEDU 2026"
"5 e 6 de dezembro de 2026 · 100% on-line"
"Inscrições no Even3"
Sem pessoas, sem símbolos culturais ou religiosos, sem flashes. Toca uma vez e congela no último quadro. Total de 10 segundos.
```

### 6.5 Stop-motion com quadros gerados: a folha de continuidade

**Uso:** o Claude planeja, um gerador de imagens desenha os quadros e o CapCut ou o Canva montam. Teste primeiro com 8 quadros. **Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#stop-motion-de-verdade-com-quadros-gerados-por-ia).

```prompt
Planeje uma sequência de stop-motion com 24 quadros (0000 a 0023) para uma imagem vertical 9:16. Cena vista de cima: um caderno de papel sobre uma mesa de madeira se abre aos poucos e depois um sol de papel sobe acima dele. Sem pessoas, sem palavras, sem logotipos, sem símbolos culturais ou religiosos. Câmera fixa, mesma luz, mesma textura de papel e mesma direção de sombra em todos os quadros. Para cada quadro, informe: nome do arquivo, a ÚNICA pequena mudança em relação ao anterior e o que deve continuar idêntico. Depois escreva o prompt de imagem do quadro-mestre (0000).
```

Depois, no gerador de imagens, para cada quadro seguinte:

```prompt
Use a imagem aprovada como referência. Próximo quadro da mesma cena: o caderno de papel abre mais 10 graus; todo o restante permanece exatamente na mesma posição. Câmera fixa, iluminação e sombra constantes, mesmo enquadramento e textura. Sem texto novo, sem objetos novos, sem mudança de cenário.
```

### 6.6 Claude Motion (só nos planos Team/Enterprise)

**Origem:** [Motion graphics com o Claude](motion-graphics-claude.md#opção-b-claude-motion-só-teamenterprise).

```prompt
Crie uma animação com o modelo Motion para anunciar uma palestra. Destino: Reels no Facebook, vertical 9:16, de preferência 1080×1920, 12 segundos. Se alguma configuração não estiver disponível, me avise antes de renderizar.
Use a foto autorizada em anexo sem alterar o rosto.
0–2 s: uma pergunta curta sobre [um desafio real de professores].
2–7 s: [NOME EXATO], [CARGO APROVADO], [TÍTULO EXATO DA PALESTRA].
7–10 s: "5 e 6 de dezembro de 2026 • 100% on-line".
10–12 s: "Inscreva-se pelo Even3 • link na legenda".
Texto grande, nada de informação inventada, sem flashes rápidos. Primeiro proponha o roteiro; só renderize depois da minha aprovação.
```

## 7. Respostas e FAQ

As respostas prontas em português (`/datas`, `/valores`, `/prazo`, `/certificado`…) estão no [banco de respostas](replies-inbox.md#banco-de-respostas-do-conafroedu-2026). A IA **rascunha**; quem envia é uma pessoa.

### 7.1 Escreva as respostas rápidas do WhatsApp Business a partir da ficha

**Origem:** [Instagram e WhatsApp](instagram-whatsapp.md#escrever-as-respostas-rápidas-a-partir-da-ficha-oficial).

```prompt
Usando APENAS a ficha oficial abaixo, escreva respostas rápidas do WhatsApp Business em português natural para estes atalhos: /inscricao, /valores, /prazo, /comosubmeter, /datas, /acesso, /certificado, /publicacao, /acessibilidade, /humano.
Cada resposta: até 60 palavras, simpática e clara, no máximo um link. Onde a ficha não responder, escreva [CONFIRMAR] — nunca chute (principalmente sobre critérios do certificado, obrigatoriedade da apresentação e acesso).
Depois do encerramento confirmado em 4/11, revise todas as respostas, especialmente /inscricao, /valores, /prazo, /comosubmeter, /modalidades e /video. Encaminhe novas consultas para ouvintes sem sugerir que um trabalho novo pode ser enviado.
Ficha oficial: [colar].
```

### 7.2 Rascunhe a resposta a uma pergunta incomum (a IA rascunha, uma pessoa aprova)

**Uso:** depois de tirar os dados pessoais da mensagem. **Origem:** [Respostas automáticas](replies-inbox.md#camada-3-a-ia-rascunha-uma-pessoa-aprova).

```prompt
Você ajuda a comissão organizadora do CONAFROEDU 2026 a responder mensagens. Escreva um rascunho de resposta em português brasileiro natural: acolhedor, respeitoso, objetivo, tratando a pessoa por "você".

Regras:
- Use SOMENTE o FAQ aprovado abaixo. Se a resposta não estiver nele, ou se o FAQ disser [CONFIRMAR], escreva uma resposta curta dizendo que a equipe vai confirmar e retornar, e me diga qual pergunta precisa de decisão da comissão.
- Nunca invente prazos, valores, condições de certificado, prorrogações, recursos de acessibilidade ou reconhecimento do MEC/Qualis.
- Se a mensagem for sobre pagamento, reembolso, inscrição já feita, resultado de avaliação, acessibilidade, reclamação ou racismo, NÃO escreva a resposta: responda apenas "ENCAMINHAR PARA HUMANO" e o motivo.
- No máximo 90 palavras. No máximo um link (a página da Even3).

Mensagem recebida (sem dados pessoais): [cole aqui]

FAQ APROVADO (versão/data): [cole aqui]
```

> [!TIP]
> Se alguém da equipe montar o [fluxo no Make que grava rascunhos numa planilha](no-code-automation.md#fluxo-2--registro-de-perguntas--rascunho-da-ia--aprovação-humana), ele usa uma versão mais curta destas mesmas regras. Nunca acrescente a ele uma etapa de "enviar mensagem".

### 7.3 Transforme as perguntas da semana em lacunas do FAQ

**Uso:** com 20 perguntas **anonimizadas** e o FAQ atual. **Origem:** [Agentes de navegador, tarefa E](computer-use-agents.md#tarefa-e--transformar-perguntas-em-lacunas-do-faq).

```prompt
Estas são 20 perguntas anonimizadas recebidas nesta semana sobre o CONAFROEDU 2026, e este é o nosso FAQ aprovado.
1. Agrupe as perguntas por tema e conte quantas há em cada grupo.
2. Indique quais o FAQ já responde (cite o item do FAQ) e quais não responde.
3. Para as perguntas que o FAQ não responde, escreva a pergunta que a comissão precisa decidir. Não invente a resposta.
4. Sinalize para atendimento humano tudo o que for urgente ou sensível (pagamento, acessibilidade, reclamação, racismo).
```

## 8. Divulgação e parcerias

Busque de 10 a 20 conversas excelentes, enviadas uma a uma por uma pessoa, com no máximo um lembrete. Os modelos prontos de e-mail e WhatsApp (M1 a M11) estão em [Divulgação e parcerias](outreach.md#modelos-prontos-para-adaptar).

### 8.1 Encontre NEABs/NEABIs com fontes

**Uso:** num assistente de busca (Perplexity, ou Gemini/ChatGPT/Claude com pesquisa na web). Abra cada fonte você mesma(o). **Origem:** [Divulgação e parcerias](outreach.md#passo-2-encontre-candidatos-com-ia).

```prompt
Localize até 10 NEABs/NEABIs ou grupos de educação antirracista em universidades ou institutos federais do Brasil, usando o diretório CONNEABS/ABPN (https://abpn.org.br/conneabs-2/) e os sites oficiais das próprias instituições.
Para cada um, mostre: instituição, campus/UF, nome exato do núcleo, uma atividade relevante para a ERER ou a formação de professores, a URL exata da fonte, a data da fonte e o contato institucional PUBLICADO (e-mail ou formulário).
Abra cada fonte; não invente e-mails. Separe o contato atual confirmado de entradas antigas do diretório ou de páginas inacessíveis.
Não colete contatos pessoais de membros ou estudantes.
Objetivo: avaliar um convite institucional para divulgar o CONAFROEDU 2026 (on-line, 5 e 6/12/2026). Não presuma parceria ou apoio da instituição. Responda em tabela.
```

> [!NOTE]
> Vai usar um agente de navegador? A versão "somente leitura" desta tarefa para agentes, com "pare depois de 10" e "não faça login, não entre em grupos, não preencha formulários e não envie mensagens", é a [Tarefa A](computer-use-agents.md#tarefa-a--pesquisar-10-contatos-de-neabneabi).

### 8.2 Um e-mail-convite personalizado

**Origem:** [Divulgação e parcerias](outreach.md#passo-5-rascunhe-com-ia-uma-mensagem-por-vez).

```prompt
Escreva um rascunho de e-mail em português brasileiro para [INSTITUIÇÃO / NÚCLEO], com até 120 palavras.
Contexto verificado: [ATIVIDADE], fonte [URL], consultada em [DATA].
Pedido real: [divulgar a chamada de trabalhos na lista de vocês / divulgar o convite para participar / conversar sobre uma possível colaboração].
Fatos aprovados do congresso: [FICHA OFICIAL].
Faça uma conexão específica e honesta entre o trabalho da instituição e o congresso. Não invente relacionamento anterior, apoio, desconto, patrocínio ou interesse da pessoa. Deixe claro que a inscrição é paga e que a publicação tem taxa à parte. Termine com uma pergunta simples e ofereça não enviar novos contatos. Não envie: entregue o rascunho para revisão.
```

**Uma versão mais longa, com texto pronto para encaminhar** (tarefa para o prompt mestre; origem: [Copywriting](copywriting.md#e-mail-a-parceiros-neabis-programas-de-pós-graduação-associações)):

```prompt
Tarefa: um e-mail formal, mas caloroso, em português brasileiro, da comissão organizadora do CONAFROEDU para [NEABI/NEAB da UNIVERSIDADE X / coordenação do PPGE], perguntando se consideram divulgar o congresso à sua comunidade. Personalize com este dado real sobre o trabalho deles: [cole um fato da página pública]. Estrutura: assunto; quem somos (1 frase); por que tem a ver com o trabalho deles; dados do evento (datas, on-line, público, link da Even3); [se for antes de 4/11: prazo de submissão, modalidades, exigência de inscrição e taxa de publicação de R$ 16,98]; um texto de 3 linhas pronto para encaminhar; agradecimento e contato. Não afirme parceria, apoio institucional ou reconhecimento do MEC. Máximo de 220 palavras.
```

### 8.3 Adapte o pacote para cada parceiro

**Origem:** [Kits de divulgação](speaker-partner-kits.md#prompt-adaptar-o-pacote-para-cada-parceiro).

```prompt
Adapte o release aprovado abaixo para [NOME DO PARCEIRO], cujo trabalho real é [ATIVIDADE, com URL da fonte].
Reescreva só a abertura (no máximo 2 frases) para fazer uma conexão honesta com esse trabalho. Mantenha exatamente todas as datas, valores, links e condições. Não afirme parceria, apoio ou relação anterior.
Depois, produza: (a) uma versão para WhatsApp com menos de 400 caracteres e um único link; (b) um assunto de e-mail.
Release aprovado: [COLE]
```

### 8.4 Um guia de uma página para embaixadores voluntários

**Origem:** [Kits de divulgação](speaker-partner-kits.md#prompt-guia-dos-embaixadores).

```prompt
Escreva um guia de uma página, em português do Brasil, para embaixadores voluntários do congresso CONAFROEDU 2026.
Informações: [COLE A FICHA]. Compromisso combinado: [DESCREVA]. Benefícios que recebem: [DESCREVA ou "nenhum"].
Inclua: por que a ajuda deles importa (2 frases), as datas principais, o que compartilhar e onde, 3 exemplos curtos de legenda com tons diferentes, o que NÃO prometer (aproveitamento do certificado, Qualis, progressão na carreira, escassez), como lidar com dúvidas (encaminhar para o WhatsApp oficial (19) 98816-7751 ou conapsuporte@gmail.com) e um lembrete para declarar benefícios, conferir elegibilidade e usar o rótulo de parceria paga da Meta nas divulgações em troca de benefício. Tom acolhedor e claro, sem jargão de marketing.
```

### 8.5 Textos de Status do WhatsApp para embaixadores

**Origem:** [Instagram e WhatsApp](instagram-whatsapp.md#mensagens-de-status-para-embaixadores).

```prompt
Escreva 3 textos curtos para o Status do WhatsApp (até 140 caracteres de texto cada, sem contar a URL fornecida; acrescente a URL sem alterar e informe a contagem total), em português natural, que uma professora poderia publicar para convidar colegas para o CONAFROEDU — pessoais, calorosos, sem cara de propaganda. Cada um deve citar 5 e 6 de dezembro e 100% on-line, e terminar com "link: [link rastreável]". Faça uma versão para professores, uma para estudantes de graduação e uma para pesquisadores. Não invente benefícios; o certificado pode ser citado apenas como "certificado de 40 horas".
```

## 9. Medição

Cole **só números agregados**: contagens por data, categoria, origem e publicação. Nunca cole nomes, e-mails, telefones nem exportações da Even3 ([Medir resultados](measuring-results.md#passo-5-use-ia-para-analisar-os-números-com-segurança)).

### 9.1 Análise semanal

**Origem:** [Medir resultados](measuring-results.md#prompt-análise-semanal).

```prompt
Analise esta tabela agregada, sem nomes, telefones ou e-mails.
Definições: alcance = [definição]; interações = [componentes]; inscrição confirmada = [definição da Even3]; janela = [período].
Dados: [COLE A TABELA]. Calendário do que publicamos e do que os parceiros fizeram: [COLE].
Compare os resultados por objetivo (submissões x inscrições) e por formato. Separe: observação, hipótese e informação ausente. Não afirme causalidade nem significância estatística; as amostras são pequenas. Proponha apenas 2 testes para a próxima semana, com custo de tempo, métrica principal e critério de avaliação. Liste possíveis erros nos dados.
```

### 9.2 Resumo para o grupo de WhatsApp da comissão

**Origem:** [Medir resultados](measuring-results.md#prompt-resumo-para-o-grupo-de-whatsapp-da-comissão).

```prompt
Transforme esta análise semanal numa mensagem curta para o grupo de WhatsApp da nossa comissão organizadora voluntária (no máximo 120 palavras). Estrutura: 1 linha com o principal resultado, 2 tópicos sobre o que funcionou, 1 tópico sobre o que parar de fazer, e as 2 decisões da próxima semana, cada uma com um responsável. Tom amigável e direto, sem jargão. Análise: [COLE]
```

### 9.3 Monte a planilha de acompanhamento (sem dados)

**Origem:** [Medir resultados](measuring-results.md#prompt-montar-a-planilha-sem-dados).

```prompt
Sou voluntária e não tenho experiência com análise de dados. Proponha uma estrutura simples no Google Planilhas para acompanhar uma campanha orgânica de 6 semanas de um congresso acadêmico on-line (Facebook, Instagram, WhatsApp; inscrições na Even3). Preciso de abas para: links rastreados, diário de posts, placar semanal, parceiros e aprendizados. Para cada aba, indique as colunas, uma linha de exemplo com valores fictícios marcados como exemplo e as fórmulas necessárias. Tem que dar para usar em 30 minutos por semana.
```

## 10. Revisão e checagem de fatos

A IA pode ajudar quem revisa, mas nunca é a única checagem: ela pode confirmar o próprio erro com toda a segurança. Uma pessoa sempre compara com a Even3 e com a ficha ([A checagem de 60 segundos](prompting-basics.md#a-checagem-de-60-segundos)).

### 10.1 Compare um rascunho com a ficha oficial

**Origem:** [Noções básicas de prompt](prompting-basics.md#confira-tudo-datas-valores-promessas).

```prompt
Compare o texto abaixo com a ficha oficial. Liste numa tabela toda data, valor, nome, link e promessa que aparece no texto e marque cada item como: CONFERE / DIFERENTE / NÃO ESTÁ NA FICHA. Não corrija nada; apenas liste.

FICHA: [cole a ficha oficial]
TEXTO: [cole o rascunho]
```

### 10.2 Checagem final antes de agendar

**Origem:** [Copywriting com IA](copywriting.md#a-etapa-de-checagem-nunca-pule), uma versão ampliada da checagem do [Guia orgânico do Facebook](facebook-playbook.md#prompt-revisão-final-antes-de-agendar) que também pega chamadas de submissão e de inscrição misturadas e `[CONFIRMAR]` esquecido.

```prompt
Compare a publicação abaixo com a ficha oficial. Não publique nem envie nada; entregue só a revisão.
Verifique: nomes, cargos, datas, dia da semana, fuso (horário de Brasília), valores, prazos, redação do certificado, links, autorização de imagens, português brasileiro e se o post mistura a chamada de trabalhos com a de inscrições.
Sinalize: promessas sem fonte, urgência ou escassez inventadas, isca de engajamento, dados pessoais, [CONFIRMAR] esquecido no texto e informação essencial que só aparece na imagem.
Saída: APROVAR COMO RASCUNHO ou CORRIGIR, com motivos objetivos.
Ficha oficial: [cole] Publicação: [cole]
```

### 10.3 Revise a fila de posts agendados

**Uso:** toda semana, e também na noite de 4/11 e na manhã de 16/11. **Origem:** [Ferramentas de agendamento](scheduling-tools.md#prompt-revisar-a-fila).

```prompt
Abaixo está a lista dos nossos posts agendados (data, hora, texto) e a nossa ficha oficial atualizada. Hoje é [DATA].
Aponte todo post que:
- convide a submeter trabalhos depois de 4 de novembro de 2026 (a menos que a ficha mostre uma prorrogação aprovada);
- mencione valores que estarão desatualizados na data da publicação (o lote muda em 16 de novembro de 2026);
- diga "última chance", "últimas vagas" ou algo parecido sem uma informação da ficha que sustente isso;
- contradiga a ficha em qualquer data, valor, nome, link ou condição de certificado;
- repita a mensagem de outro post num intervalo de 48 horas.
Responda com uma tabela: data do post | problema | sugestão de correção. Não reescreva os posts que não têm problema.

POSTS AGENDADOS: [cole aqui]
FICHA OFICIAL: [cole aqui]
```

### 10.4 Audite o calendário de conteúdo

**Origem:** [Linha do tempo e calendário](campaign-timeline.md#5-auditar-o-calendário-antes-de-agendar).

```prompt
Audite este calendário de conteúdo comparando com a ficha oficial. Não reescreva as publicações; apenas liste os problemas.
Verifique: datas ou dias da semana errados; falta de "horário de Brasília"; chamados para submissão depois de 04/11; valores que não batem com o lote daquela data; urgência ou escassez inventadas; publicações de 20/11 voltadas a venda; publicações que dependem de fatos não confirmados (critérios do certificado, obrigatoriedade de apresentação, palestrantes); publicações duplicadas no mesmo dia em canais diferentes; semanas com mais de 4 publicações no Facebook.
Entregue uma tabela: ID da linha, problema, por que importa, correção sugerida.
Calendário: [colar]. Ficha oficial: [colar].
```

### 10.5 Compare a página pública da Even3 com a ficha

**Uso:** somente leitura, num agente de navegador ou colando o texto da página num chat gratuito. Qualquer alteração na Even3 é feita por alguém da comissão. **Origem:** [Agentes de navegador, tarefa B](computer-use-agents.md#tarefa-b--comparar-a-página-da-even3-com-a-ficha-oficial).

```prompt
Verificação somente leitura. Compare a página pública https://www.even3.com.br/iconafroedu-764690/ (todas as seções: descrição, ingressos, normas de submissão, FAQ, programação e imagens do cronograma, se der para ler) com a ficha oficial abaixo.

Liste toda divergência ou ambiguidade: datas, prazos e horários, valores por categoria e data, modalidades e limites de páginas, obrigatoriedade de apresentação, exigência de vídeo, texto do certificado, taxa de publicação, informações sobre ISBN/DOI, contatos, fuso horário.

Para cada item: o que a página diz (citação + seção), o que a ficha diz e por que isso pode confundir quem vai participar. Se algo não aparece sem login, escreva "não visível publicamente". Não faça login, não compre, não se inscreva e não altere nada.

FICHA OFICIAL: [cole aqui]
```

### 10.6 Apoio à revisão de imagens (nunca quem aprova)

**Origem:** [Representação e vieses](representation-bias.md#padrões-de-prompt-que-funcionam-melhor). A aprovação fica com uma pessoa revisora nomeada, de preferência uma educadora, um educador ou designer negro com poder real de decisão.

```prompt
Analise esta peça como apoio à revisão: quem está no centro, quem ensina, quem escuta e quem usa a tecnologia? Há uniformização dos rostos, associação entre tom de pele e posição de autoridade, elementos culturais sem contexto ou aparência de registro documental? Liste dúvidas e possíveis problemas; não infira raça ou religião de pessoas reais e não declare a peça culturalmente correta. A aprovação é humana.
```

## 11. Acessibilidade

### 11.1 Texto alternativo para um card

**Origem:** [Copywriting com IA](copywriting.md#texto-alternativo-descreva-o-que-está-de-fato-na-imagem) (há um trecho mais curto no [kit de marca](brand-kit.md#parte-5--trechos-de-prompt-reutilizáveis)). Repita na legenda qualquer data ou link que só apareça na imagem.

```prompt
Tarefa: escreva um texto alternativo em português brasileiro (no máximo 2 frases, menos de 250 caracteres) para a imagem descrita abaixo. Transmita a informação que importa (nome do evento, data, convite). Descreva pessoas só pelas ações visíveis e pelo contexto; nunca presuma raça, identidade, deficiência ou emoções, a não ser que a própria pessoa tenha aprovado a descrição. Não comece com "Imagem de".
Imagem: [descreva o que aparece e transcreva todo o texto da imagem]
```

### 11.2 Revisão completa de acessibilidade de uma publicação ou vídeo

**Origem:** [Ética, políticas e LGPD](ethics-legal.md#prompt-texto-alternativo-e-revisão-de-legendas).

```prompt
Prepare uma revisão de acessibilidade desta peça para redes sociais.
Descrição factual da imagem/vídeo e todo o texto visível: [COLE]. Transcrição revisada, se for vídeo: [COLE].
1) Escreva um texto alternativo curto (no máximo 250 caracteres) que transmita a informação importante, sem presumir identidade, raça, deficiência ou emoções de ninguém.
2) Liste as informações que aparecem só na imagem e precisam ser repetidas na legenda (data, fuso, valor, link).
3) Se for vídeo: liste falas, identificação de quem fala e sons que precisam de legenda, além do visual indispensável que precisa de narração ou descrição.
4) Liste o que uma pessoa precisa conferir visualmente antes de publicar (contraste, letras pequenas, bordas).
```

Para cortes de vídeo, o prompt de títulos de capa e descrição da [seção 5.6](#56-legendas-para-um-corte) também gera uma descrição acessível. As legendas em si precisam ser revisadas por uma pessoa ([Legendas automáticas em português](video-repurposing.md#legendas-automáticas-em-português-acessibilidade)).

## Antes de usar qualquer resposta: checklist

- [ ] A ficha colada na conversa é a **versão atual** (os valores mudam em 16 de novembro).
- [ ] Não sobrou nenhum `[CONFIRMAR]` nem outro colchete no texto.
- [ ] Toda data, dia da semana, valor e link bate com a Even3 e com a ficha.
- [ ] Nenhuma chamada de submissão depois de 4/11, a não ser que a comissão tenha prorrogado o prazo oficialmente.
- [ ] Nenhuma promessa sobre MEC, Qualis, horas complementares ou progressão; nada de "últimas vagas".
- [ ] Nomes, cargos e instituições batem com as minibios **aprovadas**; nenhuma citação ou parceria inventada.
- [ ] Imagens e vídeos passaram pela [checklist de representação](representation-bias.md#checklist-de-revisão-antes-de-publicar); mídia realista feita com IA está identificada.
- [ ] Nenhum dado pessoal foi colado na ferramenta de IA.
- [ ] Uma segunda pessoa conferiu com a [checagem de 60 segundos](prompting-basics.md#a-checagem-de-60-segundos).

## Prompts de configuração e aprendizagem

Comece por [Instalar e configurar ferramentas](setup-tools.md); veja o método completo em [Aprender com IA](learning-with-ai.md). Nunca cole senhas, chaves de API, caixas de entrada privadas ou dados de participantes.

```prompt
Ajude a configurar [FERRAMENTA] no [DISPOSITIVO/SISTEMA]. Só usei chatgpt.com ou claude.ai. Use a fonte oficial que forneço: [URL/texto]. Explique um passo por vez, o custo e as permissões pedidas. Pare após cada passo para eu dizer o que vejo. Se minha tela for diferente, pergunte os nomes visíveis; não invente botões. Nunca peça senha, chave de API ou código de login no chat. Comece com teste inofensivo usando fatos públicos do CONAFROEDU.
```

```prompt
Ensine [UMA TAREFA] para eu conseguir fazer sozinho(a). Sou iniciante. Use a fonte oficial [URL/texto] e meu objetivo [TAREFA DO CONAFROEDU]. Primeiro faça uma pergunta diagnóstica; explique com um exemplo pequeno; depois proponha exercício sem a resposta. Confira minha tentativa e explique erros. Separe fatos com fonte de detalhes incertos da interface. Termine com checklist curto para eu usar sem sua ajuda. Responda em português brasileiro.
```

## Próximos passos

- Entenda por que estes prompts são montados assim: [Noções básicas de prompt](prompting-basics.md).
- Legendas, ganchos, e-mails e hashtags em detalhe: [Copywriting com IA](copywriting.md).
- Todas as receitas de imagem, com tamanhos e o texto a colocar no Canva: [Livro de receitas de prompts de imagem](image-prompts.md).
- Quando usar cada prompt: [Plano de 6 semanas do CONAFROEDU 2026](conafroedu-sprint.md) e [Linha do tempo e calendário](campaign-timeline.md).
- Ganhos rápidos: [50 dicas e truques](tips-tricks.md). Termos desconhecidos: [Glossário e recursos](glossary-resources.md).
