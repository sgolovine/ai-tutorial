---
title: Automações sem código (n8n, Make, Zapier)
description: Cinco automações concretas nos planos gratuitos para o CONAFROEDU, de formulários de consentimento a respostas rascunhadas por IA, cada uma com diagrama em texto, passo a passo e regras de segurança, seguindo o modelo "a IA rascunha, uma pessoa aprova".
order: 340
section: automate
icon: ⚙️
updated: 2026-10-21
---

> [!TIP] Está começando nessas ferramentas?
> Siga primeiro o [passo a passo de configuração](setup-tools.md#ai-studio). Se um botão ou conceito for novo, use o [guia de aprendizagem com IA](learning-with-ai.md) para praticar uma tarefa pequena.

**O que você vai encontrar nesta página:** uma introdução para iniciantes às ferramentas de automação sem código (Zapier, Make, n8n), o que os planos gratuitos realmente incluem e **cinco receitas para configurar e testar** para o CONAFROEDU. Cada fluxo vem com um diagrama simples, passos numerados, uma alternativa "sem ferramenta nenhuma" e os cuidados que evitam que uma automação faça vocês passarem vergonha. Todos seguem o mesmo modelo: **a IA rascunha, uma pessoa aprova.**

> [!IMPORTANT]
> Só automatize uma tarefa depois de fazê-la algumas vezes à mão e saber exatamente como é o resultado "certo". Com seis semanas pela frente, uma planilha compartilhada e duas passagens diárias de 15 minutos pelo atendimento valem mais do que uma automação pela metade. Monte no máximo **um ou dois** dos fluxos abaixo, e só se alguém da comissão gostar desse tipo de trabalho.

## Palavras-chave em linguagem simples

| Termo | O que significa |
|---|---|
| **Automação / fluxo** | Uma sequência de passos que a ferramenta executa por você: "quando X acontecer, faça Y". O Zapier chama de *Zap*, o Make de *cenário* (*scenario*) e o n8n de *workflow*. |
| **Gatilho (trigger)** | O acontecimento que dispara o fluxo: uma resposta nova num formulário, uma linha nova na planilha, um horário do dia. |
| **Ação** | O que a ferramenta faz em seguida: enviar um e-mail, criar uma linha, criar um evento na agenda. |
| **Conector / integração** | A ligação pronta entre a ferramenta de automação e outro aplicativo (Planilhas Google, Gmail…). |
| **Chave de API** | Um código, parecido com uma senha, que permite a uma ferramenta usar um serviço (por exemplo, um modelo de IA) em seu nome. Normalmente é **cobrada à parte**. |
| **Webhook** | Um endereço na internet que um aplicativo "chama" na hora em que algo acontece, como uma campainha para automações. |
| **Tarefa / crédito / execução** | A unidade que cada ferramenta usa para contar o uso e cobrar. *Não* é a mesma coisa de uma ferramenta para outra. |

## Planos gratuitos: o que vem de verdade (conferido em 21/10/2026)

| Ferramenta | Opção gratuita | Plano pago de entrada | Fique de olho |
|---|---|---|---|
| **Zapier** | **100 tarefas/mês**, **Zaps de dois passos** (um gatilho + uma ação), Zaps ilimitados ([preços](https://zapier.com/pricing)) | Professional a partir de cerca de **US$ 19,99/mês** (valor no plano anual) | Fluxos com vários passos (IA → aprovação → envio) geralmente exigem plano pago. |
| **Make** | **1.000 créditos/mês**, **no máximo 2 cenários ativos**, além de limites pequenos de dados e arquivos (cerca de 5 MB por arquivo) ([preços](https://www.make.com/en/pricing), [Make Academy](https://academy-content.make.com/courses/make-foundation-operations-credits/01-introduction-to-operations-and-credits/)) | Core por cerca de **US$ 12/mês**, com 10.000 créditos | A maioria dos passos gasta 1 crédito, mas passos de IA podem gastar mais. Não serve para transportar vídeos. Confira na sua conta o intervalo mínimo de agendamento. |
| **n8n** | **Gratuito se vocês mesmos hospedarem** (edição Community, sob a "Sustainable Use License", que permite uso interno próprio) ([FAQ da licença](https://support.n8n.io/article/can-i-use-your-license-for-my-use-case)) | n8n Cloud Starter por cerca de **€ 20/mês** (plano anual), com 2.500 execuções ([preços](https://n8n.io/pricing/)) | Hospedar exige alguém para cuidar do servidor, das atualizações, dos backups e da segurança. Não há plano gratuito permanente na nuvem. |

> [!WARNING]
> **Uma assinatura de chat não inclui automaticamente API.** As APIs da OpenAI e da Anthropic normalmente exigem cobrança separada. A [API do Gemini tem cota gratuita para modelos elegíveis](https://ai.google.dev/gemini-api/docs/billing); confira limites e tratamento de dados. Mantenha dados de participantes fora deste fluxo de rascunho.
>
> [O Make conta cada consulta do gatilho](https://help.make.com/operations), mesmo sem linhas novas. [No Zapier, gatilhos/consultas e ações com erro não gastam tarefas](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier); ações bem-sucedidas, inclusive as repetidas numa reexecução, podem contar. Confira separadamente as regras de execução do n8n.

**Regra simples para o CONAFROEDU:** use o **Zapier gratuito** para uma notificação simples de dois passos, ou o **Make gratuito** se precisar de mais alguns passos. Use o n8n só se alguém técnico da comissão já trabalhar com ele.

## O modelo central: a IA rascunha, uma pessoa aprova

Todos os fluxos desta página seguem o mesmo modelo de segurança: a automação prepara o trabalho, uma pessoa decide, e só depois disso alguma coisa sai.

```text
 [Gatilho]  →  [Coletar + limpar dados]  →  [IA rascunha]  →  [Planilha: "em revisão"]
                                                                      │
                                                         Uma pessoa lê e ajusta
                                                                      │
                                     ┌──────── aprovado ──────────────┴─── recusado ──┐
                                     ▼                                                ▼
                     Uma pessoa envia / agenda                     Anotar o motivo; melhorar o FAQ
                                     │
                     Registro: enviado / data / por quem
```

| Etapa | Quem | Regra |
|---|---|---|
| Coletar | Automação | Só os dados mínimos necessários. Sem CPF, sem dados de pagamento. |
| Rascunhar | IA | Só a partir da ficha oficial / FAQ aprovado. Lacunas marcadas com `[CONFIRMAR]`. |
| Revisar | Pessoa | Confere informações, tom e se aquilo é adequado. |
| Enviar/publicar | Pessoa (ou ferramenta de agendamento nativa, depois da aprovação) | Nada vai a público ou a participantes sem alguém com nome aprovando. |
| Registrar | Automação ou pessoa | O que foi enviado, quando e por quem. |

## Fluxo 1 — Formulário "quero receber avisos" → alerta para a comissão

**Problema que resolve:** chegam pedidos como "me avisa quando sair a programação?". Vocês precisam registrar a **autorização** da pessoa, e alguém precisa dar retorno.

```text
Formulário Google (consentimento afirmativo obrigatório; um canal escolhido)
        │  nova resposta
        ▼
Planilha Google "Avisos – opt-in"   ←── guarda resposta + texto do consentimento + data/hora
        │  nova linha (gatilho no Zapier)
        ▼
E-mail para a caixa da comissão: "Novo opt-in: [primeiro nome], canal: [WhatsApp/e-mail]"
        │
        ▼
Uma pessoa confere consentimento, canal e registro de não contato antes de incluir
```

**Versão sem ferramenta:** o próprio Formulários Google pode avisar por e-mail quando chegam respostas novas (na aba Respostas). Para um evento pequeno, isso pode bastar, e o Zapier nem é necessário.

**Montando no Zapier gratuito (cerca de 30 minutos):**

1. Use este formulário **somente para assinar avisos**. Peça primeiro nome, um canal preferido e seu contato. Crie uma opção afirmativa de consentimento, inicialmente desmarcada, e ative **Obrigatória** ([ajuda](https://support.google.com/docs/answer/2839737?hl=pt-BR)). Identifique responsável/contato e aviso de privacidade; informe finalidade, frequência, data final e cancelamento. Não junte canais.
2. Na aba **Respostas** do formulário, vincule-o a uma nova Planilha Google.
3. No Zapier, clique em **Create → Zap**.
4. **Gatilho:** Google Sheets → *New Spreadsheet Row*. Conecte a conta Google da comissão, escolha a planilha e a aba e clique em **Test**.
5. **Ação:** Gmail → *Send Email* para a comissão. Inclua ID da linha, canal, resposta de consentimento, versão do texto e data. Chame de **pedido de assinatura**. Uma pessoa confere a planilha restrita e o registro de não contato antes de incluir.
6. **Teste antes de publicar:** a autorização afirmativa chega ao alerta; a opção desmarcada deve impedir o envio do formulário e nunca incluir contato. Teste o canal escolhido e um contato com pedido de não contato. Se não assinantes também puderem enviar, use filtro de consentimento verificado antes da inclusão: é outro fluxo.
7. Uma ação de e-mail bem-sucedida gasta uma tarefa por linha nova. Conte testes também; 100 tarefas/mês podem bastar para uma lista pequena.

**Limite do remetente alternativo:** a ação do Email by Zapier é **Send Outbound Email**, com **5 e-mails/dia no Free/Trial** ([integração oficial](https://zapier.com/apps/email/integrations)). Não confunda com a cota mensal de 100 tarefas. Se o limite ou a conexão do Gmail impedir o uso, fique com os alertas nativos do Formulários Google e a planilha; não contrate plano só para alertas.

Texto de consentimento (adapte e peça a aprovação da comissão):

```text
[ ] Quero receber pelo [WhatsApp/e-mail] avisos sobre o CONAFROEDU 2026 (programação, prazos e orientações de acesso) até 6 de dezembro de 2026, no máximo [2] mensagens por semana. Posso cancelar a qualquer momento respondendo SAIR. Responsável: Comissão Organizadora do CONAFROEDU – conapsuporte@gmail.com.
```

> [!TIP]
> Guarde na planilha o texto do consentimento, a data e a versão do formulário. Se alguém perguntar depois "por que recebi isso?", vocês mostram exatamente com o que a pessoa concordou. É uma boa prática pela LGPD.

## Fluxo 2 — Registro de perguntas → rascunho da IA → aprovação humana

**Problema que resolve:** as mesmas perguntas incomuns chegam por e-mail e WhatsApp, e escrever boas respostas toma tempo.

```text
Alguém da comissão cola a pergunta (sem dados pessoais) na planilha "Perguntas"
        │  nova linha (Make: Watch New Rows)
        ▼
Módulo de IA rascunha a resposta usando SOMENTE o FAQ aprovado
        │
        ▼
Planilha atualizada: coluna "Rascunho" + status "em revisão"
        │
        ▼
Uma pessoa confere → ajusta → envia pelo WhatsApp/e-mail → marca "enviado"
```

**Versão sem ferramenta:** cole a pergunta num chat de IA gratuito com o prompt da página [Respostas automáticas](replies-inbox.md#camada-3-a-ia-rascunha-uma-pessoa-aprova). Com menos de umas 20 perguntas por dia, isso é mais rápido do que montar o fluxo.

**Montando no Make gratuito (1 a 2 horas, exige chave de API de IA):**

1. Crie uma Planilha Google "Perguntas" com as colunas `ID`, `Data`, `Canal`, `Pergunta (sem dados pessoais)`, `Categoria`, `Rascunho`, `Status`, `Respondido por`.
2. No Make, clique em **Create a new scenario**.
3. Adicione **Google Sheets → Watch New Rows**. Conecte a conta, escolha a planilha e o ponto de partida ("from now on").
4. Adicione o módulo do provedor de IA e sua chave de API; ative cobrança **quando exigida**. No Gemini, escolha modelo com cota gratuita e confira os termos de dados. Os créditos do Make continuam contando.
5. No campo do prompt, cole o texto do FAQ aprovado e as regras de rascunho (abaixo), e insira a coluna "Pergunta".
6. Adicione **Google Sheets → Update a Row**: mapeie o **número da linha** recebido do gatilho para atualizar a mesma linha; grave a resposta em `Rascunho` e mude `Status` para `em revisão`. Teste duas perguntas diferentes para garantir que uma não sobrescreva a outra.
7. Comece com **quatro consultas por dia**: cerca de **120 créditos de gatilho em 30 dias**, mais IA e atualização por pergunta. A cada 15 minutos seriam 2.880 consultas em 30 dias, acima dos 1.000 créditos antes de tratar perguntas. Confira o consumo real.
8. Rode uma vez com uma linha de teste e confira no histórico do Make quantos créditos foram usados.
9. Ative. **Nunca acrescente um passo de "enviar mensagem".** Quem envia é uma pessoa.

```prompt
Você rascunha respostas para a comissão organizadora do CONAFROEDU 2026. Escreva em português brasileiro natural, com no máximo 90 palavras.
Use SOMENTE o FAQ aprovado abaixo. Se o FAQ não responder, ou marcar [CONFIRMAR], escreva: "PRECISA DE DECISÃO DA COMISSÃO: " seguido da pergunta em aberto.
Se a pergunta envolver pagamento, reembolso, inscrição já feita, resultado de avaliação, acessibilidade, reclamação ou racismo, escreva apenas: "ENCAMINHAR PARA HUMANO".
Nunca invente datas, valores, prorrogações, condições de certificado, recursos de acessibilidade ou reconhecimento do MEC/Qualis.
FAQ APROVADO (versão/data): [cole aqui]
PERGUNTA: {{Pergunta}}
```

## Fluxo 3 — Post aprovado para grupo → lembrete na agenda de uma pessoa

**Problema que resolve:** publicações em grupos do Facebook de outras pessoas **precisam** ser feitas à mão (este fluxo usa postagem manual em grupos de outras pessoas; o agendamento nativo continua disponível nos grupos que você administra), e o pessoal esquece.

```text
Aba da planilha "Lembretes – grupos" (uma linha por post aprovado para grupo)
        │  nova linha (gatilho no Zapier)
        ▼
Evento no Google Agenda da pessoa responsável, na data/hora combinada
  título: "Postar no grupo [NOME]" · descrição: texto aprovado + link do grupo + observação sobre as regras
        │
        ▼
A pessoa publica manualmente → cola o link do post de volta na planilha
```

**Montando no Zapier gratuito:**

1. Na planilha de conteúdo, crie a aba **Lembretes – grupos** com `Grupo`, `Link do grupo`, `Regras/observação`, `Texto aprovado`, `Data`, `Hora (Brasília)`, `Responsável (e-mail)`.
2. Só inclua uma linha **depois** que a administração do grupo autorizar o post e o texto estiver aprovado.
3. No Zapier → **Create Zap**. Gatilho: **Google Sheets → New Spreadsheet Row**, nessa aba.
4. Ação: **Google Calendar → Create Detailed Event**. Use as colunas de data e hora, o título `Postar no grupo {{Grupo}}`, a descrição com texto, link e regras, e o e-mail da pessoa responsável como convidada.
5. Teste com uma linha e publique.

Para mapear a agenda, acrescente **Início_BRT** e **Fim_BRT** explícitos na planilha (ex.: `2026-10-28T19:00:00-03:00` e `2026-10-28T19:15:00-03:00`). Mapeie ambos, escolha a agenda da comissão e confira data/hora de Brasília exibidas após o teste. Assim, não dependem de interpretação ambígua de dia/mês nem de outro passo pago de formatação. Use ID único de linha e confira se o lembrete já existe antes de repetir execução bem-sucedida.

**Versão sem ferramenta:** crie os eventos na agenda manualmente. Para 5 a 10 posts em grupos na campanha toda, isso leva dez minutos.

> [!CAUTION]
> Este fluxo cria um **lembrete para uma pessoa**. Nunca troque essa etapa humana por um agente de navegador ou por uma ferramenta de "postagem em grupos". Veja [o que não automatizar](computer-use-agents.md#o-que-não-automatizar).

## Fluxo 4 — Notícias confiáveis de educação → ideias de pauta para revisão

**Problema que resolve:** vocês querem conteúdo útil e atual (por exemplo, perto do 20 de novembro ou quando sai uma novidade sobre política de ERER), e não só "compre seu ingresso".

```text
Feeds RSS de uma lista CURTA de fontes oficiais/institucionais
        │  item novo (Make: RSS → Watch RSS feed items)
        ▼
Ignorar duplicados (o mesmo link já está na planilha)
        │
        ▼
(IA, opcional) resumo de 2 frases em português + por que importa para professores + link/data da fonte
        │
        ▼
Planilha "Ideias de pauta" com status "em revisão"
        │
        ▼
Uma pessoa abre a matéria ORIGINAL, confere direitos e pertinência → a ideia entra no calendário
```

**Passos (Make gratuito):**

1. Escolha **uma** instituição confiável com feed RSS funcionando, conferido no próprio site.
2. Make → novo cenário → **RSS → Watch RSS feed items** como único gatilho. [O gatilho precisa ser o primeiro módulo e só aparece uma vez](https://help.make.com/types-of-modules); um roteador divide dados recebidos e não combina gatilhos Watch independentes.
3. Versão para iniciantes: **Google Sheets → Add a Row** com título, URL original, data e `em revisão`. Deixe resumos por IA como etapa manual opcional.
4. Uma ou duas vezes ao dia, uma pessoa procura URLs já listadas, marca repetições como `duplicada` e aprova só uma cópia. Assim, a receita não depende de ramificação de busca sem resultado ainda não testada.
5. **Defina o orçamento de consultas antes de ativar.** Abra [Schedule settings](https://help.make.com/schedule-a-scenario), substitua o padrão Every 15 minutes por **Daily às 9h e às 17h** e confirme o fuso de Brasília no cenário. São cerca de **60 consultas do gatilho em 30 dias**, mais uma ação Add a Row por item. Some esse consumo ao Fluxo 2 e aos testes; confira as [operações/créditos reais](https://help.make.com/operations) antes de ativar.
6. Teste URL nova, repetida e feed vazio. Não devem surgir linhas vazias nem entradas duplicadas no calendário. Para eliminar duplicadas automaticamente, peça a alguém técnico que configure e teste a continuação de busca vazia primeiro.

**Regras:** leia o original antes de publicar; compartilhe link e comentário em vez de reproduzir matérias. Descarte resumos não verificáveis. Este feed usa um cenário ativo; os Fluxos 2 e 4 juntos usam as duas vagas gratuitas do Make. Cada feed Watch independente adicional exige outro cenário. Respeite vagas e créditos.

## Fluxo 5 — Relatório semanal de resultados (com pessoa no meio do caminho)

**Problema que resolve:** a revisão de segunda-feira demora demais, e ninguém lembra o que funcionou.

```text
Segunda: exportar as métricas da semana da Página/Instagram (CSV) + relatório agregado da Even3
        │  (download manual — sem dados pessoais)
        ▼
Enviar os números AGREGADOS para um assistente de IA com o prompt abaixo
        │
        ▼
Rascunho de resumo: o que foi publicado, cliques no link, perguntas recebidas, tendência das inscrições
        │
        ▼
A comissão escolhe 1 ou 2 mudanças para a semana seguinte (quem decide são pessoas; a IA só descreve)
```

Não precisa de ferramenta de automação: é um ritual de 20 minutos. Alguém técnico *até poderia* automatizar as exportações com o n8n, mas para seis semanas não compensa.

```prompt
Estes são os números agregados da última semana do CONAFROEDU 2026: métricas dos posts do Facebook/Instagram (CSV) e a contagem de inscrições e submissões confirmadas por dia (sem dados pessoais).
1. Liste cada post com objetivo, alcance, cliques no link e compartilhamentos.
2. Descreva os padrões com cautela, mencionando o tamanho das amostras. Não diga que um post "causou" inscrições.
3. Sugira 2 testes pequenos para a próxima semana, coerentes com o nosso calendário.
Responda com uma tabela curta e 5 tópicos.
```

Nunca envie para uma ferramenta de IA planilhas da Even3 com nomes, e-mails ou CPF. Use só contagens. Veja [Medindo resultados de graça](measuring-results.md).

## E conectar direto com a Even3?

A central de ajuda da Even3 lista integrações, incluindo APIs e webhooks ([integrações da Even3](https://ajuda.even3.com.br/hc/pt-br/sections/4404413740955-Integra%C3%A7%C3%B5es)). **Não** conseguimos confirmar quais estão disponíveis na conta do CONAFROEDU. Por enquanto:

- **E-mails de confirmação e comprovantes:** a Even3 já cuida disso. Não duplique.
- **Mensagens para inscritos:** use o recurso da própria Even3 de notificar pessoas, para mensagens de serviço ([ajuda da Even3](https://ajuda.even3.com.br/hc/pt-br/articles/115003452963-Notificar-pessoas-pela-plataforma)). O envio agendado precisa ser habilitado pelo suporte da Even3.
- **Nunca** coloque inscritos em listas de divulgação no WhatsApp só porque compraram a inscrição. Compra não é consentimento para receber divulgação.

Se alguém técnico quiser testar um fluxo com webhook ("nova inscrição paga → rascunho de agradecimento"), ele precisa: conferir se o pagamento foi confirmado; evitar duplicidade pelo número do pedido, para ninguém receber duas mensagens; ter uma pessoa aprovando as primeiras execuções; e enviar só por um canal já autorizado.

## Cuidados obrigatórios em qualquer automação

- [ ] **Limite de aprovação:** nada público ou pessoal sai sem aprovação de alguém com nome definido.
- [ ] **Chave contra duplicidade:** cada item tem um ID, e o fluxo confere esse ID antes de agir.
- [ ] **Botão de desligar:** todo mundo sabe como desativar o cenário/Zap (e quem pode fazer isso).
- [ ] **Responsável:** uma pessoa confere o histórico de execuções duas vezes por semana.
- [ ] **Alertas de cota:** confira o uso (tarefas/créditos) toda semana. Planos gratuitos simplesmente param quando a cota acaba.
- [ ] **Erros visíveis:** falhas vão para um e-mail que alguém lê.
- [ ] **Credenciais protegidas:** chaves de API ficam nas configurações de conexão da ferramenta, nunca num prompt, numa célula da planilha ou num grupo de conversa.
- [ ] **Teste primeiro com as contas da comissão**, depois com um lote real bem pequeno.
- [ ] **Dados mínimos:** sem CPF, sem dados de pagamento, sem informações de saúde ou acessibilidade, sem dados de estudantes.
- [ ] **Atenção à LGPD:** Zapier, Make e provedores de IA processam dados fora do Brasil. Leia os termos antes de colocar listas de contatos neles e mantenha as listas pequenas e com finalidade clara. Veja [Ética, políticas e LGPD](ethics-legal.md).

## Por qual fluxo começar?

| Se o maior problema é… | Monte | Ferramenta |
|---|---|---|
| As pessoas pedem para ser avisadas e vocês perdem o controle | Fluxo 1 | Só o Formulários Google, ou Zapier gratuito |
| Escrever respostas para perguntas incomuns | Fluxo 2 (ou só o prompt) | Make gratuito + chave de API |
| O pessoal esquece os posts manuais em grupos | Fluxo 3 | Zapier gratuito, ou agenda manual |
| Faltam ideias de conteúdo útil | Fluxo 4 | Make gratuito |
| A revisão semanal nunca acontece | Fluxo 5 | Nenhuma ferramenta: ritual + chat com IA |

## Próximos passos

- A rotina de atendimento que esses fluxos apoiam: [Respostas automáticas e gestão da comunidade](replies-inbox.md)
- O lado da publicação: [Ferramentas de agendamento e publicação](scheduling-tools.md)
- Agentes que clicam por você (e os limites deles): [Agentes de navegador e de computador](computer-use-agents.md)
- Controle da divulgação e dos retornos: [Divulgação e parcerias com IA](outreach.md)
- Todos os prompts num só lugar: [Biblioteca de prompts](prompt-library.md)
