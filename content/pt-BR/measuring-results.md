---
title: Medir resultados de graça
description: Descubra o que realmente traz submissões e inscrições para o CONAFROEDU 2026 com os dados gratuitos da Meta, um esquema pronto de links UTM, os relatórios da Even3 e uma revisão semanal de 30 minutos, e use IA nos números sem expor ninguém.
order: 420
section: extras
icon: 📊
updated: 2026-10-21
---

> [!TIP] Está começando nessas ferramentas?
> Siga primeiro o [passo a passo de configuração](setup-tools.md#meta-business-suite). Se um botão ou conceito for novo, use o [guia de aprendizagem com IA](learning-with-ai.md) para praticar uma tarefa pequena.

**O que você vai encontrar nesta página:** um jeito de medir a campanha que custa R$ 0 e cabe na rotina de uma equipe voluntária. Você vai ver quais números importam para a **submissão de trabalhos** e quais importam para as **inscrições**, como ler o Meta Business Suite e o Painel profissional e um **esquema pronto de links UTM** para o CONAFROEDU. Também vai ver o que a Even3 consegue mostrar, como fazer uma revisão semanal de 30 minutos numa planilha e como usar IA nos dados sem expor informações pessoais de ninguém.

> [!NOTE]
> Medir não significa virar analista de dados. Numa campanha de seis semanas, o objetivo é simples: **descobrir o que leva as pessoas até a Even3, fazer mais disso e parar de fazer o que toma horas e não traz ninguém.**

## O que medir: dois funis, um resultado de verdade em cada

Um **funil** é o caminho que a pessoa percorre desde que ouve falar do congresso até fazer o que você quer que ela faça. O CONAFROEDU tem dois funis diferentes, com prazos diferentes, e confundir os dois é o erro de medição mais comum.

| | Funil de submissão (autores) | Funil de inscrição (participantes) |
|---|---|---|
| **Caminho** | Vê a chamada → lê as normas → faz a inscrição (obrigatória para o autor responsável) → submete → avaliação → correções → apresentação/publicação | Vê um post → confere programação e condições → se inscreve e paga na Even3 → recebe o acesso → participa |
| **Prazo** | **4/11/2026** (salvo prorrogação formal da comissão) | Inscrições até **6/12**; troca de lote em **16/11** |
| **O resultado que importa** | Submissões concluídas e válidas (por modalidade) | Inscrições confirmadas (por categoria) e, depois, participação efetiva |
| **Sinais intermediários úteis** | Visitas às normas vindas de links rastreados, dúvidas de autores | Visitas rastreadas à Even3, dúvidas sobre valor/certificado/acesso |
| **Sinais que enganam** | Curtidas no cartaz da chamada | Visualizações, curtidas, "Tenho interesse/Vou" no evento do Facebook |

> [!WARNING]
> **Não some os dois funis.** A mesma pessoa pode ser autora *e* ouvinte. E uma inscrição que "inclui uma submissão" não é um trabalho submetido. Conte os trabalhos pelo relatório de submissões, e não pela venda de ingressos.

Depois de 4 de novembro, o funil de submissão fecha. A partir daí, acompanhe de forma interna **resultados das avaliações, correções e preparo dos apresentadores**, e concentre toda a medição pública nas inscrições e na participação.

## Suas ferramentas gratuitas de medição

| Ferramenta | O que mostra | Custo |
|---|---|---|
| **Meta Business Suite** (web + app) | Visualizações, interações e seguidores de Facebook e Instagram; resultado de cada post | App gratuito ([App Store](https://apps.apple.com/br/app/meta-business-suite/id514643583)); existem recursos pagos opcionais da Meta, mas não são necessários |
| **Painel profissional** | Desempenho de posts e Reels, retenção de vídeo quando disponível | Gratuito; os campos variam conforme a conta |
| **Relatórios e exportações da Even3** | Inscrições confirmadas, vendas por categoria e data, submissões, certificados | Incluído no evento |
| **Even3 Analytics** | Origens de visitas marcadas e totais separados de inscrições/pagamentos; ligação entre origem e inscrição exige validação | Incluído; confira o que o painel do seu evento mostra |
| **Links UTM** | Qual post, parceiro ou pessoa trouxe cada visita | Grátis: é só um texto a mais no link |
| **Uma planilha compartilhada** (Google Planilhas ou similar) | Registro de links, diário de posts e placar semanal | Grátis |
| **Google Analytics 4** (opcional) | Tráfego detalhado, se configurado na Even3 | Ferramenta gratuita ([Google](https://marketingplatform.google.com/about/analytics/)), mas exige tempo de configuração e cuidado com cookies e privacidade (veja [ethics-legal](ethics-legal.md)). **Não é necessário** nesta campanha |

> [!IMPORTANT]
> **UTMs identificam origens de visitas, não automaticamente inscrições.** A Even3 documenta tráfego marcado ao lado de totais de vendas; isso não estabelece ligação de cada post com inscrição/submissão concluída. Antes de divulgar conversões, teste dois links diferentes no painel: quais campos de origem/campanha/conteúdo aparecem e uma inscrição de teste permitida ou real aprovada mantém essa origem? Abrir a URL não é esse teste. Até validar, informe separadamente visitas marcadas, total de inscrições, usos de cupom e descoberta autodeclarada. Retire colunas de conversão indisponíveis; não deduza pelo horário.

## Passo 1: crie seus links UTM

### O que é UTM

**UTM** é um conjunto de etiquetas que você acrescenta ao final de um link para que as ferramentas de análise saibam de onde veio o visitante. O link continua levando à mesma página. Por exemplo:

```text
https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=reel_professora_01
```

O Google documenta os três parâmetros principais (`utm_source`, `utm_medium`, `utm_campaign`) e o opcional `utm_content`, e avisa que os valores **diferenciam maiúsculas de minúsculas** ([Ajuda do Google Analytics](https://support.google.com/analytics/answer/10917952)). O [guia de Analytics](https://blog.even3.com.br/como-usar-o-even3-analytics/) da própria Even3 descreve a leitura da origem do tráfego a partir de links de campanha marcados.

### O esquema de nomes do CONAFROEDU

**Regras:** só letras minúsculas, sem espaços, sem acentos, palavras separadas por `_` e **nunca** o nome, o e-mail ou o telefone de alguém no link.

| Parâmetro | Significado | Valores permitidos no CONAFROEDU |
|---|---|---|
| `utm_campaign` | Qual funil | `conafroedu_2026_submissoes` (até 4/11) · `conafroedu_2026_inscricoes` (participação) |
| `utm_source` | Onde o link foi colocado | `facebook` · `instagram` · `whatsapp` · `email` · `even3_email` · `autores` · `palestrante_01`…`palestrante_20` · `parceiro_<código>` (ex.: `parceiro_neabi_01`, `parceiro_ppg_02`) · `embaixador_01`…`embaixador_10` · `qrcode` |
| `utm_medium` | O tipo de canal | `organic_social` (posts, Stories, Reels, bio) · `messaging` (Canal, grupos e Status do WhatsApp) · `email` · `referral` (palestrantes, parceiros, embaixadores, autores) · `print` (QR Code em slides/cartazes) |
| `utm_content` | Qual peça específica | `<formato>_<tema>_<nn>`, ex.: `reel_professora_01`, `card_normas_01`, `story_lote_01`, `event_ticket_link`, `bio_link`, `kit_aprovado`, `release` |

> [!NOTE]
> `messaging` é um rótulo próprio escolhido para este guia. Algumas ferramentas de análise não vão agrupá-lo automaticamente com "redes sociais", e tudo bem: você vai ler origem e mídia diretamente.

### Links prontos

| Onde | Link completo |
|---|---|
| Post no Facebook: normas de submissão (até 4/11) | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_submissoes&utm_content=card_normas_01` |
| Link de ingressos no evento do Facebook | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=event_ticket_link` |
| Bio do Instagram | `https://www.even3.com.br/iconafroedu-764690/?utm_source=instagram&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=bio_link` |
| Story no Instagram sobre a virada de lote de 16/11 | `https://www.even3.com.br/iconafroedu-764690/?utm_source=instagram&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=story_lote_01` |
| Atualização no Canal do WhatsApp | `https://www.even3.com.br/iconafroedu-764690/?utm_source=whatsapp&utm_medium=messaging&utm_campaign=conafroedu_2026_inscricoes&utm_content=canal_programacao_01` |
| Convite opcional separado perto de 20/11 (não a peça educativa) | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=post_20nov_01` |
| Boletim de um NEABI parceiro | `https://www.even3.com.br/iconafroedu-764690/?utm_source=parceiro_neabi_01&utm_medium=referral&utm_campaign=conafroedu_2026_submissoes&utm_content=release` |
| Kit de palestrante | `https://www.even3.com.br/iconafroedu-764690/?utm_source=palestrante_03&utm_medium=referral&utm_campaign=conafroedu_2026_inscricoes&utm_content=kit_palestrante` |

> [!IMPORTANT]
> Não invente um "link direto de submissão". Use a página principal do evento nos dois funis e deixe o `utm_campaign` separar um do outro. Teste se os parâmetros continuam lá quando a pessoa precisa fazer login para submeter.

### Monte os links na planilha (sem ferramenta extra)

Crie uma aba chamada **Links** com estas colunas:

| A: Destino | B: source | C: medium | D: campaign | E: content | F: Link completo | G: Onde foi usado | H: Responsável | I: Criado em | J: Testado? |
|---|---|---|---|---|---|---|---|---|---|

Na célula F2, cole esta fórmula e arraste para baixo:

```text
=A2&"?utm_source="&B2&"&utm_medium="&C2&"&utm_campaign="&D2&"&utm_content="&E2
```

Coloque `https://www.even3.com.br/iconafroedu-764690/` na coluna A. Todo link que a equipe usa sai dessa aba; ninguém digita UTM à mão.

### Teste cada link (2 minutos cada)

1. Abra o link no celular, dentro do navegador do Facebook ou do WhatsApp.
2. Confira se abre a página certa do CONAFROEDU e se o botão de inscrição funciona.
3. Confira se a barra de endereço ainda mostra a parte `utm_` (com encurtador ou QR Code, confira depois do redirecionamento).
4. Marque **Testado? = sim** na aba Links.

> [!CAUTION]
> A atribuição nunca vai ser perfeita. Quando alguém encaminha sua mensagem no WhatsApp, a próxima pessoa chega com o *seu* UTM. E muita gente vê o post no celular e se inscreve depois pelo computador. Trate os números de UTM como **pistas, não verdade absoluta**, e combine com outros sinais (usos de cupom, a pergunta "como ficou sabendo?", conversas).

## Passo 2: leia os dados gratuitos da Meta

### Insights do Meta Business Suite

1. Abra o [business.facebook.com](https://business.facebook.com) ou o app Meta Business Suite e escolha a página do CONAFROEDU (é preciso ter acesso adequado).
2. Vá em **Insights** (o nome pode variar um pouco na interface em português).
3. Selecione um período consistente (por exemplo, 28 dias, se disponível). A ajuda da Meta descreve **Visualizações**, **Interações** e **Seguidores** ([Ajuda da Meta para Empresas](https://www.facebook.com/business/help/4185855074991336)).
4. Abra **Conteúdo** para ver cada post individualmente, e não só o total da conta.
5. Copie os números que interessam para a aba Semanal (Passo 4).

**Como ler:**

- **Visualização não é pessoa.** A Meta define visualização como conteúdo reproduzido ou exibido; repetições contam. Onde houver **alcance**, use-o como estimativa de pessoas únicas.
- **Interações** (reações, comentários, compartilhamentos, salvamentos) mostram interesse, não inscrição. Um post de prazo pode ter poucas curtidas e ser o que mais traz inscrições.
- **Compare o que é comparável:** Reel com Reel, post de prazo com post de prazo, na mesma janela de tempo (por exemplo, 48 horas e 7 dias depois da publicação).
- **Anote o nome exato das métricas que você usou.** Os painéis mudam.

### Painel profissional

Para Reels e vídeos, procure a **retenção** (quanto tempo as pessoas assistiram) e, quando aparecer, o alcance entre **não seguidores**. A Meta já anunciou esses gráficos, mas nem toda conta vê todos os campos: confira o que aparece na sua antes de montar uma rotina em cima disso.

### Respostas ao evento do Facebook

"Vou" e "Tenho interesse" são demonstrações de interesse, **não inscrições**, e o Facebook não garante que todo mundo que respondeu receba lembretes. Registre só como sinal secundário. Nunca copie a lista de quem respondeu para mandar mensagens.

### WhatsApp

Se vocês tiverem um Canal no WhatsApp, anote as visualizações de cada atualização. O sinal mais confiável do WhatsApp são os **cliques rastreados para a Even3** (`utm_source=whatsapp`) e as dúvidas que chegam.

## Passo 3: dados de inscrição e submissão na Even3

É na Even3 que estão os seus *resultados*. Explore o que ela oferece antes de instalar qualquer outra ferramenta.

1. **Relatórios e exportações.** A Central de Ajuda da Even3 documenta exportações de Pessoas, Vendas, Programação, Submissões e Certificados ([Ajuda: relatórios](https://ajuda.even3.com.br/hc/pt-br/articles/360016649591-Acessar-relat%C3%B3rios-com-informa%C3%A7%C3%B5es-sobre-o-meu-evento)). O relatório detalhado de vendas traz horário da compra, e-mail e valores ([Ajuda: exportar vendas](https://ajuda.even3.com.br/hc/pt-br/articles/32877235816219-Exportar-relat%C3%B3rio-de-vendas-do-meu-evento)), e há uma exportação própria para submissões ([Ajuda](https://ajuda.even3.com.br/hc/pt-br/articles/32668621542043-Exportar-relat%C3%B3rio-das-submiss%C3%B5es-do-evento)).
2. **Even3 Analytics.** O [guia](https://blog.even3.com.br/como-usar-o-even3-analytics/) da Even3 descreve um painel com visitas, inscrições/pagamentos e origem do tráfego a partir de links marcados. Confira o que o painel do seu evento realmente mostra.
3. **Separe confirmadas de pendentes.** Conte como resultado só as inscrições confirmadas/pagas. Compras incompletas indicam atrito (valor? forma de pagamento? dúvida sobre o certificado?).
4. **Cupons.** Se a comissão criar cupons por parceiro, o número de usos de cada código é uma das métricas mais confiáveis de parceria (sobrevive a encaminhamentos e troca de aparelho).
5. **"Como você ficou sabendo do evento?"** A Even3 oferece perguntas personalizadas ([recursos oficiais](https://plataforma.even3.com.br/solucoes/divulgacao-de-eventos/)). Teste uma pergunta opcional e sua exportação no painel deste evento; depois inclua uma com opções (Facebook, Instagram, WhatsApp, e-mail, professor(a)/colega, NEABI/universidade, outro) e um campo livre. Ela cobre as lacunas que os UTMs deixam.

### Transforme exportações em números agregados e seguros

As exportações contêm **dados pessoais** (nomes, e-mails, valores). Nunca cole isso numa ferramenta de IA nem numa pasta pública compartilhada. Em vez disso:

1. Salve a exportação numa pasta privada, com acesso restrito.
2. Na planilha, crie uma **tabela dinâmica** (no Google Planilhas: Inserir → Tabela dinâmica) contando inscrições por **data**, **categoria** e, se houver, **origem/cupom**.
3. Copie só essas contagens para a aba Semanal.
4. Apague as cópias de exportações de que você não precisa mais.

## Passo 4: a revisão semanal (30 minutos)

### Abas da planilha

| Aba | Para quê |
|---|---|
| **Links** | Todos os links rastreados (Passo 1) |
| **Posts** | Uma linha por peça publicada: data, horário (Brasília), canal, formato, objetivo (submissões/inscrições/educativo), tema, código do link, resultados em 48 h e em 7 dias |
| **Semanal** | O placar abaixo |
| **Parceiros** | Código do parceiro/palestrante/embaixador, kit enviado (data), o que compartilhou, visitas rastreadas, usos de cupom |
| **Aprendizados** | Uma linha por semana: o que testamos, o que aprendemos, o que vamos mudar |

### O placar semanal

| Semana | Inscrições confirmadas (total / novas) | Novas por categoria | Submissões (até 4/11) | Visitas rastreadas à Even3 | 3 principais origens (UTM/cupom) | Alcance (FB + IG, sem somar como pessoas) | Dúvidas recebidas (temas) | Horas da equipe | Decisões |
|---|---|---|---|---|---|---|---|---|---|
| 26/10–1/11 | | | | | | | | | |
| 2–8/11 | | | | | | | | | |
| 9–15/11 | | | | | | | | | |
| 16–22/11 | | | | | | | | | |
| 23–29/11 | | | | | | | | | |
| 30/11–6/12 | | | | | | | | | |

**Fórmulas úteis** (ajuste as letras das colunas):

- Taxa de engajamento de um post: `=(reacoes+comentarios+compartilhamentos)/alcance*100`. Diga sempre quais componentes você usou e não compare com taxas calculadas de outro jeito.
- Inscrições por hora de trabalho: `=novas_inscricoes/horas_equipe`, um choque de realidade sobre o esforço.
- Conversão das visitas rastreadas: `=inscricoes_confirmadas_da_origem/visitas_da_origem`, somente após validar a ligação origem–inscrição, com janelas e definições compatíveis; sem isso, não use esta fórmula.

### O ritual de 30 minutos

1. **(5 min)** Atualize a linha da semana: números agregados da Even3, dados da Meta, contagem de links e cupons.
2. **(5 min)** Olhe a aba Posts: quais 2 peças trouxeram mais *visitas rastreadas* (inscrições só com atribuição de origem validada), e não curtidas?
3. **(5 min)** Leia as dúvidas que chegaram. Pergunta repetida é sinal de que falta informação na página ou nos posts; corrija isso primeiro.
4. **(5 min)** Confira os parceiros: quem compartilhou? Mande um agradecimento.
5. **(5 min)** Opcional: cole a tabela *agregada* numa IA com o prompt abaixo.
6. **(5 min)** Escolha **duas** mudanças para a semana seguinte e registre na aba Aprendizados.

Na **última quinzena antes de 4/11** e na **última semana antes de 5/12**, faça uma checagem rápida duas vezes por semana.

### Datas que merecem um olhar específico

| Data | O que conferir |
|---|---|
| **4/11** | Total final de submissões por modalidade; em seguida, retirar as chamadas de submissão e atualizar os links |
| **15–16/11** | O lembrete honesto da virada de lote trouxe inscrições? Compare os dias antes e depois |
| **20/11** | O conteúdo da Consciência Negra gerou conversas e compartilhamentos? (É conteúdo educativo antes de tudo; não julgue só pelas vendas) |
| **25/11** | Lançamento da programação: visitas rastreadas e dúvidas |
| **5–6/12** | Participação x inscrições confirmadas; dúvidas de suporte |
| **15/12** | Revisão final: o que repetir nas próximas edições |

## Passo 5: use IA para analisar os números com segurança

Assistentes de IA (ChatGPT, Claude, Gemini, Meta AI; veja [Escolher ferramentas de IA](choosing-ai-tools.md)) são bons para achar padrões numa tabela pequena e transformar tudo num resumo semanal claro. Também são ótimos em inventar explicações que não são verdadeiras.

> [!WARNING]
> **Privacidade em primeiro lugar.** Cole sempre e somente números **agregados**: contagens por data, categoria, origem, post. Nunca cole nomes, e-mails, telefones, CPF, dados de pagamento, mensagens privadas ou pedidos de acessibilidade. Confira as configurações de privacidade da ferramenta (por exemplo, se as conversas são usadas para treinamento) antes de enviar qualquer coisa.

### Prompt: análise semanal

```prompt
Analise esta tabela agregada, sem nomes, telefones ou e-mails.
Definições: alcance = [definição]; interações = [componentes]; inscrição confirmada = [definição da Even3]; janela = [período].
Dados: [COLE A TABELA]. Calendário do que publicamos e do que os parceiros fizeram: [COLE].
Compare os resultados por objetivo (submissões x inscrições) e por formato. Separe: observação, hipótese e informação ausente. Não afirme causalidade nem significância estatística; as amostras são pequenas. Proponha apenas 2 testes para a próxima semana, com custo de tempo, métrica principal e critério de avaliação. Liste possíveis erros nos dados.
```

### Prompt: resumo para o grupo de WhatsApp da comissão

```prompt
Transforme esta análise semanal numa mensagem curta para o grupo de WhatsApp da nossa comissão organizadora voluntária (no máximo 120 palavras). Estrutura: 1 linha com o principal resultado, 2 tópicos sobre o que funcionou, 1 tópico sobre o que parar de fazer, e as 2 decisões da próxima semana, cada uma com um responsável. Tom amigável e direto, sem jargão. Análise: [COLE]
```

### Prompt: montar a planilha (sem dados)

```prompt
Sou voluntária e não tenho experiência com análise de dados. Proponha uma estrutura simples no Google Planilhas para acompanhar uma campanha orgânica de 6 semanas de um congresso acadêmico on-line (Facebook, Instagram, WhatsApp; inscrições na Even3). Preciso de abas para: links rastreados, diário de posts, placar semanal, parceiros e aprendizados. Para cada aba, indique as colunas, uma linha de exemplo com valores fictícios marcados como exemplo e as fórmulas necessárias. Tem que dar para usar em 30 minutos por semana.
```

## Testar sem se enganar

Post orgânico não é experimento científico: o público, o horário e os compartilhamentos de parceiros mudam toda semana. Mesmo assim, dá para aprender:

1. **Mude uma coisa de cada vez:** abertura com pergunta x abertura com benefício; professora falando x organização falando; horário da manhã x da noite.
2. **Escreva a hipótese antes de olhar os números**, por exemplo: "Uma professora explicando uma prática de sala de aula traz mais visitas rastreadas do que um cartaz."
3. **Compare vários posts**, e não um ponto fora da curva.
4. **Julgue pelo objetivo do post.** Lembrete de prazo existe para gerar inscrição, não comentário.
5. **Anote o que mais aconteceu:** um parceiro compartilhou, o prazo estava perto, era feriado.

Horários sugeridos para testar (horário de Brasília; são hipóteses, não regras comprovadas): ter/qui 7h–9h, ter/qua 12h–14h, qua/qui 18h30–20h30. Mais detalhes no [Manual orgânico do Facebook](facebook-playbook.md).

## Qual métrica importa para cada objetivo

| Objetivo | Métrica que importa | Métrica de vaidade (não é meta) |
|---|---|---|
| Mais submissões válidas (até 4/11) | Submissões concluídas por modalidade; visitas rastreadas de posts para autores e de parceiros | Curtidas no cartaz da chamada |
| Mais inscrições | Inscrições confirmadas por categoria e origem; usos de cupom | Seguidores da página, total de visualizações |
| Chegar às pessoas certas | Alcance entre não seguidores em temas relevantes; dúvidas vindas de professores; compartilhamentos de parceiros | Total de impressões |
| Parcerias melhores | Inscrições rastreadas por parceiro, com as ressalvas de atribuição | Número de seguidores do parceiro |
| Participação | Participantes ÷ inscrições confirmadas; dúvidas de acesso resolvidas | Número de "Tenho interesse" |
| Equipe sustentável | Inscrições por hora de trabalho; formatos abandonados | Quantidade de posts publicados |

## Depois do evento: fechando o ciclo

Entre 7 e 15 de dezembro:

- [ ] Inscrições finais por categoria e por origem; participantes ÷ inscritos.
- [ ] Certificados emitidos (relatório de certificados da Even3) e dúvidas sobre eles.
- [ ] Anais: saíram no prazo? Divulgue o link real só quando existir.
- [ ] Contribuição dos parceiros: agradeça a cada um com os resultados (se quiserem saber).
- [ ] Horas da equipe x resultados por formato: o que deixar de fazer na próxima.
- [ ] Aba de Aprendizados transformada num documento de uma página com "o que faríamos diferente" para as próximas edições.
- [ ] Apagar ou arquivar exportações com dados pessoais conforme a regra de retenção definida pela comissão (veja [ethics-legal](ethics-legal.md)).

## Checklist de configuração

- [ ] Planilha criada com as abas Links, Posts, Semanal, Parceiros e Aprendizados.
- [ ] Esquema de UTM combinado; todo link publicado sai da aba Links e foi testado.
- [ ] Acesso ao Meta Business Suite confirmado para pelo menos duas pessoas.
- [ ] Alguém conferiu o que o Even3 Analytics e os relatórios mostram para este evento.
- [ ] Pergunta opcional "como você ficou sabendo?" incluída (se a Even3 permitir).
- [ ] Regra combinada: só dados agregados entram em ferramentas de IA.
- [ ] Horário da revisão semanal na agenda (30 minutos, sempre no mesmo dia).

## Próximos passos

- Monte os kits que esses links vão rastrear: [Kits de divulgação para palestrantes e parceiros](speaker-partner-kits.md)
- Privacidade, cookies e retenção de dados: [Ética, políticas e LGPD](ethics-legal.md)
- Agendar posts e ver resultados num só lugar: [Ferramentas de agendamento e publicação](scheduling-tools.md)
- As semanas da campanha que você vai medir: [CONAFROEDU 2026: plano de 6 semanas](conafroedu-sprint.md)
- Automatizar a parte chata dos relatórios: [Automações sem código](no-code-automation.md)
