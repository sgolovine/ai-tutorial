---
title: Noções básicas de prompt para divulgação
description: Como escrever prompts que geram textos corretos e em português natural para o CONAFROEDU — com ficha oficial reutilizável, voz da marca, refinamento e checagem de fatos.
order: 30
section: start
icon: 💬
updated: 2026-10-21
---

**Prompt** é a mensagem que você escreve para um assistente de IA (Claude, ChatGPT, Gemini, Meta AI…). A qualidade da resposta depende menos de "palavras mágicas" e mais de duas coisas: **os fatos que você entrega** e **a clareza do pedido**.

**O que você vai encontrar nesta página:**

- Uma estrutura simples para qualquer prompt de divulgação.
- A **ficha oficial do CONAFROEDU** — um bloco pronto para colar no início de toda conversa, para que a IA pare de "chutar" datas e valores.
- Como conseguir um português brasileiro natural (e não com cara de tradução).
- Como salvar o contexto (Projetos, skills e Gemini Notebook) e manter cada cópia atualizada.
- Uma checklist para pegar os erros mais perigosos da IA: datas, valores e promessas inventadas.

> [!NOTE]
> Todas as ferramentas citadas têm versão gratuita. Os nomes de recursos mudam com frequência; os menus abaixo foram conferidos nas páginas oficiais de ajuda em 21 de outubro de 2026. Se algo estiver diferente na sua conta, procure o equivalente mais próximo. Para escolher o assistente, veja [Como escolher ferramentas de IA](choosing-ai-tools.md).

## Por que o prompt importa para uma equipe pequena

Um assistente de IA é um redator de rascunhos muito rápido que **nunca ouviu falar do CONAFROEDU**. Se você pedir "escreva um post sobre nosso congresso", ele vai preencher as lacunas com invenções plausíveis: um auditório em São Paulo, prazo até 30 de novembro, "certificado reconhecido pelo MEC", "vagas limitadas". Tudo isso seria falso — e, depois de publicado, custa a confiança de professoras, professores e pesquisadores.

A solução não é deixar de usar IA. É **sempre entregar os fatos, dizer o que não pode ser inventado e ter uma pessoa revisando o resultado**.

## A estrutura de um bom prompt

Pense no prompt como a orientação que você daria a uma pessoa voluntária que acabou de chegar. São até sete partes. Nem sempre você vai precisar de todas, mas as quatro primeiras fazem a maior diferença.

| Parte | O que significa | Exemplo no CONAFROEDU |
|---|---|---|
| 1. **Papel** | Quem a IA deve ser | "Você é assistente de comunicação de um congresso acadêmico de educação no Brasil." |
| 2. **Contexto** | Os fatos que ela deve usar (e só eles) | Cole a ficha oficial do CONAFROEDU (abaixo). |
| 3. **Tarefa** | Exatamente o que você quer | "Escreva uma publicação para o Facebook convidando professores a submeter um relato de prática." |
| 4. **Público** | Quem vai ler | "Docentes da educação básica que nunca apresentaram trabalho em congresso." |
| 5. **Formato** | Tamanho, estrutura, canal | "Até 80 palavras, um único convite para ação, 0 a 3 hashtags no final." |
| 6. **Restrições** | O que ela *não* pode fazer | "Não invente valores, prazos, palestrantes ou regras do certificado. Use [CONFIRMAR] quando faltar informação." |
| 7. **Checagem** | Peça que ela aponte os próprios riscos | "No final, liste todos os fatos que uma pessoa precisa conferir." |

Um prompt fraco:

```prompt
Escreva um post sobre nosso congresso.
```

Um prompt forte:

```prompt
Você é assistente de comunicação do CONAFROEDU 2026, congresso acadêmico on-line sobre Africanidades e educação antirracista no Brasil.

Use SOMENTE os fatos da ficha oficial abaixo. Escreva em português brasileiro natural — acolhedor, profissional, de educadora para educador — sem tom de tradução.

Tarefa: uma publicação para o Facebook convidando docentes da educação básica a transformar uma prática que já realizaram em sala de aula em uma submissão na modalidade "práticas exitosas".
Público: professoras e professores que nunca submeteram trabalho a um congresso.
Formato: até 80 palavras, um único convite para ação com o link da Even3, até 3 hashtags no final.
Não invente valores, prazos, palestrantes, recursos de acessibilidade ou regras do certificado. Se faltar algo, escreva [CONFIRMAR].
Depois do texto, liste todos os fatos que uma pessoa precisa conferir antes de publicar.

[COLE AQUI A FICHA OFICIAL DO CONAFROEDU]
```

> [!TIP]
> Peça uma coisa por vez e sempre diga o canal (Facebook, Instagram, WhatsApp, e-mail). Um texto bom para o Facebook raramente funciona igual no WhatsApp.

## A ficha oficial do CONAFROEDU

Este é o item mais importante desta página: uma **ficha de fatos** curta, aprovada e escrita para a IA ler. Cole no início de toda conversa (ou salve uma vez — veja [Salve o contexto para não colar toda vez](#salve-o-contexto-para-não-colar-toda-vez)).

Regras da ficha:

1. **Uma pessoa responsável.** Quem está na Coordenação guarda a versão oficial num documento compartilhado e atualiza a data da "versão" sempre que um fato mudar.
2. **Indique a fonte de cada fato.** Use a Even3 e o anúncio da organização (fonte das 40 horas divulgadas). Decisões registradas da comissão resolvem as lacunas. Confira preços e datas antes da campanha; não trate a lista parcial de atividades como programação final.
3. **Use o marcador literal `[CONFIRMAR]` para o que falta saber.** Ponha a descrição depois do marcador. No texto do guia, use “confirmar com a comissão”; em rascunhos, separe perguntas do texto publicável. Antes de publicar, confira **todos os colchetes e fatos ausentes**, não só esse marcador. Substitua por fato confirmado ou retire a afirmação inteira sem respaldo.
4. **Em português.** A equipe publica em português, então a ficha já usa a redação oficial.

```prompt
FICHA OFICIAL — CONAFROEDU 2026
Versão: 21/10/2026 (conferir na Even3 antes de publicar preços ou prazos)
Responsável pela ficha: [CONFIRMAR] — nome da pessoa da Coordenação
Conferido por: [CONFIRMAR] — nome e data
Fontes: página da Even3 e anúncio oficial da organização; decisões registradas pela comissão
Próxima atualização obrigatória: encerramento confirmado das submissões em 4/11

EVENTO
- Nome: I CONAFROEDU — Congresso Nacional de Africanidades na Educação (1ª edição; não existem edições anteriores)
- Tema: "Desenvolvimento, Participação e Educação Antirracista"
- Datas: 5 e 6 de dezembro de 2026 (sábado e domingo), 100% on-line
- Horários das sessões: [CONFIRMAR] — sempre informar "horário de Brasília"
- Plataforma de transmissão e forma de acesso: [CONFIRMAR]
- Inscrições, normas e submissões: https://www.even3.com.br/iconafroedu-764690/
- Inscrições para participação: até 6/12/2026; não confundir com o prazo de submissão nem com a virada de lote
- Para submeter: a pessoa responsável precisa estar inscrita; use o mesmo e-mail na inscrição e na submissão

PÚBLICO
- Professoras e professores da educação básica, estudantes de graduação e pós-graduação, pesquisadoras e pesquisadores, gestoras e gestores escolares e demais profissionais da educação; alcance nacional.

O QUE O EVENTO OFERECE (como divulgado)
- Apresentação de trabalhos
- Publicação nos Anais com ISBN e DOI (após avaliação; taxa de publicação de R$ 16,98 por trabalho, à parte da inscrição)
- Certificado de 40 horas, conforme anúncio da organização (critérios para receber: [CONFIRMAR])
- Modalidades: artigo completo, resumo expandido, práticas exitosas (as normas na Even3 também citam resumo simples — [CONFIRMAR])

DATAS IMPORTANTES
- Submissões de trabalhos: até 4/11/2026 — horário-limite [CONFIRMAR]
- Vídeo para quem pretende apresentar: prazo anunciado de 4/11/2026; procedimento e obrigatoriedade [CONFIRMAR]. Consulte a comissão agora; não presuma que pode esperar o parecer para preparar/enviar o vídeo
- Resultado da avaliação: em até 5 dias úteis após a submissão
- Pacotes com 2 ou 3 submissões: disponíveis até 5/11/2026
- Valor atual das inscrições: até 15/11/2026; novo valor a partir de 16/11/2026
- Programação: a Even3 já mostra atividades e alguns nomes; versão final e horários [CONFIRMAR]. Divulgação final prevista até 25/11/2026; não apresentar listagem parcial como programação definitiva
- Congresso: 5 e 6/12/2026
- Certificados: previstos a partir de 6/12/2026, conforme critérios confirmados
- Anais: previstos até 15/12/2026

VALORES EXIBIDOS NA EVEN3 EM 21/10/2026 (até 15/11 → a partir de 16/11)
- Ouvinte/público geral: R$ 55,00 → R$ 60,00
- Graduação + 1 submissão: R$ 55,00 → R$ 60,00
- Pós-graduação + 1 submissão: R$ 60,00 → R$ 65,00
- Professor(a)/profissional da educação + 1 submissão: R$ 70,00 → R$ 75,00
- Inscrição + 2 submissões: R$ 99,00 / + 3 submissões: R$ 150,00 (até 5/11)

CONTATO
- WhatsApp da Comissão Organizadora: (19) 98816-7751
- E-mail: conapsuporte@gmail.com
- Instagram: @congressosnacionais_online
- Página/Evento no Facebook: [CONFIRMAR] — URL oficial

HASHTAGS PRINCIPAIS
#CONAFROEDU #EducaçãoAntirracista #Africanidades

NÃO AFIRMAR (ainda sem decisão da comissão)
- Se a apresentação é obrigatória ou opcional
- Prorrogação de prazo de submissão
- Regras detalhadas do certificado de 40 horas
- Recursos de acessibilidade (Libras, legendas), gravações, local físico (o evento é on-line)
- Reconhecimento pelo MEC, Qualis, pontuação em progressão ou "vagas limitadas"
```

> [!WARNING]
> A ficha traz o WhatsApp e o e-mail públicos que já constam no anúncio oficial — isso pode. **Nunca** coloque dados pessoais nela: nada de listas de inscritos, CPF, dados de pagamento, conversas privadas ou trabalhos ainda não publicados. Isso não deve entrar em assistentes de IA públicos (veja [Ética, políticas e LGPD](ethics-legal.md)).

### Mantenha a ficha atualizada

- [ ] Depois de **4 de novembro**, troque a linha de submissões por "Submissões encerradas em 4/11" (a não ser que a comissão aprove oficialmente uma prorrogação).
- [ ] No encerramento das submissões, revise **todas** as respostas rápidas, saudações, publicações agendadas e contextos salvos. A inscrição continua aberta para participação; um ingresso “+ 1 submissão” não reabre o prazo. Encaminhe exceções de autores já inscritos à comissão.
- [ ] Depois de **5 de novembro**, retire os pacotes de 2/3 submissões das ofertas atuais e respostas salvas; guarde histórico apenas em “encerrado — não oferecer”.
- [ ] Depois de **15 de novembro**, apague os preços antigos e mantenha só os valores atuais de participação, conferidos no checkout.
- [ ] Quando a programação aprovada estiver disponível (previsão: **até 25 de novembro**), substitua dados provisórios por datas, horários e palestrantes confirmados.
- [ ] Depois do evento, inclua como baixar o certificado e, quando existir, o link real dos anais.

## A voz da marca em um parágrafo

Só com fatos, o texto sai correto, mas sem graça. Acrescente um parágrafo de **voz** para que qualquer assistente "fale como o CONAFROEDU". O guia completo de voz e tom está em [Monte seu kit de marca](brand-kit.md); esta é a versão compacta para colar logo depois da ficha:

```prompt
VOZ DA MARCA — CONAFROEDU
Tom acadêmico, mas acolhedor: de educadora para educador. Português brasileiro natural, com "você". Frases curtas e concretas; explique siglas na primeira menção (ex.: ERER — Educação para as Relações Étnico-Raciais). Valorize a experiência de quem está na escola e na pesquisa. Linguagem respeitosa sobre pessoas negras e culturas afro-brasileiras; nunca use "moreno(a)" como eufemismo. Use "professoras e professores" ou outra forma inclusiva que soe natural. Evite: urgência falsa ("últimas vagas"), promessas ("garanta sua progressão"), exageros ("evento imperdível!!!"), excesso de emojis (no máximo 2) e clichês de marketing traduzidos do inglês. Um único convite para ação por publicação.
```

## Como conseguir um português brasileiro natural

Os modelos de IA escrevem bem em português, mas costumam escorregar em três pontos: **formas do português europeu**, **marketing "traduzido" do inglês** e **formalidade acadêmica engessada**. Peça explicitamente o que você quer:

| Peça | Em vez de |
|---|---|
| "português brasileiro natural, com 'você'" | Não especificar (pode vir "vós", "telemóvel", "registo") |
| "tom de conversa entre colegas educadores" | "tom profissional" (costuma gerar jargão corporativo) |
| Datas como **4 de novembro de 2026** no texto e **04/11** em artes | Ordem americana "11/04" — uma ambiguidade perigosa |
| Valores como **R$ 55,00** | "R$55" ou "BRL 55" |
| Horário como **"às [CONFIRMAR], horário de Brasília"**, preenchido só após confirmação | "meia-noite" sem data nem fuso (o Brasil tem vários fusos) |
| **"inscrição"** (participar) e **"submissão"** (enviar trabalho) bem separadas | Misturar os dois — são etapas diferentes, com prazos diferentes |
| **"certificado de 40 horas"** | "40h de aulas ao vivo" (não está documentado) |

Vocabulário que vale incluir no prompt para a IA usar os termos acadêmicos certos: *chamada de trabalhos, submissão, parecer, carta de aceite, anais, eixos temáticos, relato de experiência, carga horária, ouvinte, prorrogação de prazo, virada de lote*.

> [!TIP]
> Teste rápido de naturalidade: leia o rascunho em voz alta. Se parecer filme dublado, peça: *"Reescreva como uma professora brasileira falaria com colegas no grupo da escola. Mantenha os fatos exatamente iguais."*

## Refine: a qualidade aparece no segundo pedido

Não aceite o primeiro rascunho e nem comece do zero. Trate a conversa como um trabalho com um editor. Mude **uma coisa por vez**:

1. **Peça opções.** "Me dê 3 versões com aberturas diferentes: uma pergunta, um dado, uma situação de sala de aula."
2. **Escolha e ajuste.** "Use a versão 2. Deixe mais curta (até 50 palavras) e troque a última frase por um convite mais claro."
3. **Adapte o canal.** "Agora adapte para o WhatsApp: sem hashtags, texto simples, link sozinho numa linha."
4. **Mude o público.** "Agora uma versão para quem está na pós-graduação, com foco na publicação nos anais com ISBN e DOI."
5. **Peça crítica.** "Leia como uma professora desconfiada. O que está confuso, exagerado ou faltando?"

Pedidos de ajuste que funcionam bem:

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

> [!NOTE]
> Em conversas muito longas, os assistentes começam a "esquecer" as instruções do início. Se a qualidade cair, abra uma conversa nova e cole de novo a ficha + a voz com o seu melhor rascunho.

## Salve o contexto para não colar toda vez

Os principais assistentes permitem salvar instruções e documentos uma única vez. Os nomes mudam bastante — veja o que cada um oferece em outubro de 2026:

| Ferramenta | Recurso | O que fazer | É grátis? |
|---|---|---|---|
| **Claude** | **Projetos** (Projects) — espaço com instruções e arquivos salvos | Crie o projeto "CONAFROEDU 2026", cole a ficha + a voz nas instruções do projeto e suba documentos aprovados (anúncio oficial, minibios aprovadas). Toda conversa dentro do projeto usa esse material. | O plano gratuito do Claude inclui até **cinco Projetos**; os menus podem variar. [Planos do Claude](https://claude.com/pricing) |
| **Gemini** | **Skills**; Gems antigos estão em transição | Salve ficha e voz como instruções reutilizáveis. A transição dos Gems em contas pessoais começa em **novembro de 2026**; siga a [configuração](setup-tools.md#gems) disponível na conta. | Skills exigem **18 anos ou mais**, conta pessoal e **Manter atividade ativado**; não exigem assinatura Google AI. [Requisitos](https://support.google.com/gemini/answer/17094296?hl=en) · [Transição](https://support.google.com/gemini/answer/18560919?hl=en) |
| **Gemini Notebook** (que muita gente conhece como **NotebookLM**) | Um caderno que responde **só com base nas fontes que você enviar**, com citações | Suba a ficha, as normas e as minibios aprovadas. Peça FAQs e minibios — cada resposta aponta o trecho da fonte. O plano gratuito lista 100 cadernos e 50 fontes por caderno. | Sim. [Planos e limites](https://support.google.com/gemininotebook/answer/16213268?hl=en) · [Ajuda em português](https://support.google.com/gemininotebook/answer/16206563?hl=pt-BR) |
| **ChatGPT** | Ficha compartilhada; migração de GPT existente, se necessário | Cole a ficha atual + a voz numa conversa nova. Contas pessoais Free/Go/Plus/Pro não podem criar novos GPTs. Os existentes têm encerramento previsto para **11 de dezembro de 2026**; migração e acesso a plugins dependem do aviso da conta. | Não é preciso assinar para colar a ficha no chat. [Regras de criação](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts) · [FAQ de encerramento](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq) |
| **Qualquer assistente** | **Alternativa universal** | Guarde a ficha num Google Docs/Word compartilhado chamado "FICHA OFICIAL — versão DD/MM" e cole no topo de cada conversa nova. | Sempre funciona |

> [!WARNING]
> Um projeto ou Gem salvo **não se atualiza sozinho**. Quando um fato mudar (por exemplo, o valor da inscrição a partir de 16/11), atualize o documento oficial **e** todos os projetos/Gems/GPTs. Anote onde existem cópias, para não deixar um preço antigo rodando em algum deles.

Para o FAQ baseado só em fontes aprovadas, abra a **interface independente do Gemini Notebook**, não a conversa do caderno dentro do Gemini comum. No painel de fontes, selecione apenas ficha, normas e minibios aprovadas; não use conversas sincronizadas do Gemini nem respostas anteriores de IA como fonte oficial. Abra cada citação e confira o trecho. O Google [explica a diferença entre as interfaces](https://support.google.com/gemininotebook/answer/17003757?hl=en). Siga a [configuração das ferramentas](setup-tools.md) antes de criar Projetos, skills ou cadernos.

### Prompt inicial para um Gemini Notebook

```prompt
Use apenas as fontes selecionadas neste caderno. Prepare uma minibio de 60 palavras de [NOME] para divulgação do CONAFROEDU 2026.
Separe: (1) texto publicável; (2) tabela "fato → fonte/trecho"; (3) dúvidas marcadas como [CONFIRMAR].
Não confunda homônimos, não atualize cargos por inferência e não invente titulação, autodeclaração racial, instituição ou participação confirmada.
```

Depois, envie a minibio para a pessoa aprovar antes de publicar. Mais sobre isso em [Kits de divulgação para palestrantes e parceiros](speaker-partner-kits.md).

## Confira tudo: datas, valores, promessas

Assistentes de IA **"alucinam"** — produzem frases fluentes, seguras e falsas. Na divulgação de eventos, as alucinações caras são quase sempre dos mesmos cinco tipos. Confira todas, sempre.

| Tipo de erro | Exemplos que a IA pode produzir | Fato correto |
|---|---|---|
| **Datas** | "Submissões até 30 de novembro"; "dia 5/12, segunda-feira"; "Lei 10.639 faz aniversário em novembro" | Submissões até **4/11**; 5/12/2026 é **sábado**; a Lei 10.639 é de **9 de janeiro de 2003** |
| **Valores** | "Inscrição gratuita"; "R$ 49,50" (número dos metadados escondidos da Even3, não o preço exibido); "publicação incluída" | Valores exibidos de R$ 55 a R$ 70 até 15/11; a taxa de publicação de **R$ 16,98 por trabalho** é à parte |
| **Promessas** | "Certificado reconhecido pelo MEC"; "Anais Qualis A"; "garante pontos na progressão" | Nada disso está estabelecido. O aproveitamento do certificado depende das regras de cada instituição |
| **Local e formato** | "Em Campinas"; "auditório da universidade" | **100% on-line**; não há local físico (não deduza cidade pelo DDD do WhatsApp) |
| **Pessoas e histórico** | Palestrante inventado, citação inventada, "3ª edição", depoimento falso | 1ª edição. Só palestrantes confirmados com minibio aprovada; nenhuma citação inventada |

### A checagem de 60 segundos

Antes de qualquer texto feito com IA ir para o agendamento, uma segunda pessoa confere:

- [ ] Toda **data** bate com a ficha (inclusive o dia da semana).
- [ ] Todo **valor** bate com o que a Even3 mostra hoje.
- [ ] O **link** abre a página do CONAFROEDU na Even3.
- [ ] Nenhuma promessa sobre **MEC, Qualis, horas complementares ou progressão**.
- [ ] Nenhuma **escassez** ("últimas vagas") ou **urgência** que não seja uma data real.
- [ ] Nomes, cargos e instituições batem com as minibios **aprovadas**.
- [ ] O texto não pede **submissões depois de 4/11** (a não ser que exista prorrogação oficial).
- [ ] Acentos corretos: *Educação, Participação, Antirracista, Africanidades, Consciência*.
- [ ] Nada diz ou sugere que uma instituição é parceira ou apoiadora sem acordo por escrito.

A IA pode ajudar a conferir — mas nunca como única checagem:

```prompt
Compare o texto abaixo com a ficha oficial. Liste numa tabela toda data, valor, nome, link e promessa que aparece no texto e marque cada item como: CONFERE / DIFERENTE / NÃO ESTÁ NA FICHA. Não corrija nada; apenas liste.

FICHA: [cole a ficha oficial]
TEXTO: [cole o rascunho]
```

## Erros comuns (e como corrigir)

| Erro | Por que atrapalha | Correção |
|---|---|---|
| Pedir sem dar os fatos | A IA inventa detalhes plausíveis | Cole sempre a ficha oficial |
| "Faça viralizar" | Gera caça-clique, urgência falsa e hashtags de spam | Peça um objetivo concreto: "levar professores a abrir as normas de submissão" |
| Aceitar o primeiro rascunho | Texto genérico, às vezes errado | Peça 3 opções, escolha uma, refine |
| Pedir tudo de uma vez (post + roteiro de Reel + e-mail + WhatsApp) | A qualidade cai e os fatos mudam entre as versões | Uma entrega por mensagem; depois adapte |
| Colar dados pessoais | Risco de LGPD; o fornecedor pode armazenar | Anonimize: "uma professora perguntou se…" |
| Enviar trabalhos não publicados | Os autores não autorizaram | Nunca suba submissões em IA pública |
| Deixar a IA "conferir" a si mesma | Ela pode confirmar o próprio erro com segurança | Uma pessoa confere com a Even3 e a ficha |
| Traduzir do inglês palavra por palavra | Soa estrangeiro e perde o calor | Peça uma versão original em pt-BR a partir dos fatos |
| Gerar imagens de pessoas ou símbolos "africanos" sem revisão | Estereótipos e erros culturais | Siga [Representação e vieses](representation-bias.md) |
| Copiar todas as hashtags em todo post | A Meta trata hashtags em excesso ou sem relação como spam | De 0 a 3 hashtags relevantes no Facebook; veja o [kit de marca](brand-kit.md#conjunto-de-hashtags) |

## Exercício prático (15 minutos)

1. Abra um assistente gratuito (Claude, Gemini ou ChatGPT).
2. Cole a ficha oficial e o parágrafo de voz.
3. Rode este prompt:

```prompt
Usando apenas a ficha oficial e a voz da marca acima, escreva:
1. Um convite de 70 palavras para o Facebook chamando professoras e professores a submeter um relato de "práticas exitosas" até 4 de novembro.
2. Um gancho de 20 palavras para um Reel.
3. Uma resposta para a pergunta no WhatsApp "Tem certificado?" — sem inventar regras (use [CONFIRMAR] quando necessário).
4. Um e-mail de 120 palavras para um programa de pós-graduação em Educação pedindo que divulguem a chamada de trabalhos.
Depois, liste todos os fatos que precisam de verificação humana.
```

4. Rode o mesmo prompt num segundo assistente e compare. Qual precisou de menos correção? Essa comparação vale mais do que qualquer ranking da internet — veja [Como escolher ferramentas de IA](choosing-ai-tools.md#teste-você-mesmo-comparação-de-20-minutos-em-pt-br).

## Próximos passos

- Transforme o parágrafo de voz num guia completo: [Monte seu kit de marca](brand-kit.md).
- Use os prompts em publicações reais: [Redação com IA](copywriting.md).
- Prompts prontos por tarefa: [Biblioteca de prompts](prompt-library.md).
- Veja o que publicar nesta semana: [Plano de 6 semanas do CONAFROEDU 2026](conafroedu-sprint.md).
- Antes de gerar qualquer imagem de pessoas: [Representação respeitosa de pessoas negras e culturas africanas](representation-bias.md).
