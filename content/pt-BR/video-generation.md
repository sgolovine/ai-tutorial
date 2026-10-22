---
title: "Geração de vídeo com IA: modelos e fluxos de trabalho"
description: Quais modelos de vídeo com IA estão em uso em outubro de 2026, quanto custam, como escrever prompts "plano a plano", como animar o cartaz com segurança e quando um vídeo de celular vale mais que IA no CONAFROEDU 2026.
order: 130
section: create
icon: 🎬
updated: 2026-10-21
---

**O que você vai encontrar nesta página:** um mapa em linguagem simples dos geradores de vídeo com IA que estão realmente disponíveis em outubro de 2026; uma comparação do que cada um faz bem, quanto custa e se há opção gratuita; um jeito simples de escrever prompts de vídeo "plano a plano"; dois passo a passos (um clipe conceitual curto e um cartaz animado); e uma seção honesta sobre quando **não** usar vídeo gerado. O exemplo de sempre é o **CONAFROEDU 2026** — 5 e 6 de dezembro, 100% online.

> [!IMPORTANT] A frase mais útil desta página
> Num congresso acadêmico, **uma pessoa real falando para a câmera do celular vale mais do que qualquer vídeo de IA.** Use vídeo gerado para pequenas inserções abstratas e movimentos suaves sobre artes. Para tudo que envolve pessoas, palestrantes, depoimentos ou informações factuais, use gravações reais e autorizadas.

## Resumo rápido

1. **Você provavelmente precisa de menos vídeo gerado do que imagina.** A maior parte dos Reels do CONAFROEDU deve ser convite gravado por palestrantes, trechos de falas e cards animados simples. Veja [Reels, cortes, legendas e dublagem](video-repurposing.md).
2. **Quando for gerar,** faça "B-roll" (imagens de apoio) de 5 a 10 segundos, sem texto e sem pessoas: formas de papel se conectando, livros sobre a mesa, luz passando sobre uma textura. Coloque todas as palavras, datas e o logo depois, no Canva ou no CapCut.
3. **Escreva um plano por vez:** um assunto, uma ação, um movimento de câmera, um clima. Não peça uma história inteira num único prompt.
4. **Os planos gratuitos são limitados e mudam com frequência.** Defina um número pequeno de tentativas por plano e, se não der certo, volte para uma imagem parada com movimento simples.
5. **O Sora acabou.** A OpenAI encerrou o aplicativo do Sora em abril de 2026 e retirou a API em setembro de 2026. Ignore tutoriais que ainda o recomendam.
6. **Sinalize vídeo e áudio realistas feitos com IA** usando o rótulo de IA da Meta, e revise cada clipe em busca de estereótipos antes de publicar (veja [Representar pessoas negras e culturas africanas com respeito](representation-bias.md)).

## Termos importantes, sem complicação

| Termo | O que significa |
|---|---|
| **Texto para vídeo (T2V)** | Você descreve em texto e o modelo cria o clipe do zero. |
| **Imagem para vídeo (I2V)** | Você envia uma imagem parada (por exemplo, o fundo do cartaz) e o modelo a anima. Mais controle, menos surpresas. |
| **Áudio nativo** | O modelo cria o som (ambiente, efeitos e, às vezes, fala) junto com a imagem. Nem todo modelo faz isso. |
| **Extensão** | Pedir ao modelo que continue um clipe. Cada extensão custa mais e pode "derivar" (rostos, cores e objetos vão mudando aos poucos). |
| **Créditos** | A "moeda" de muitas ferramentas. Um crédito não é um segundo de vídeo — cada modelo gasta créditos num ritmo diferente. |
| **9:16** | Formato vertical de tela cheia para Reels e Stories (1080 × 1920 pixels). |
| **B-roll** | Imagens de apoio que passam por baixo de uma narração ou de um texto — o "recheio bonito" entre os conteúdos reais. |
| **4K por upscaling** | Um clipe de resolução menor ampliado por software. Não é a mesma coisa que vídeo gerado em 4K. |

## Você precisa mesmo de vídeo gerado? (Quando NÃO usar)

Antes de abrir qualquer ferramenta de vídeo com IA, passe por esta tabela. No CONAFROEDU, quase todas as linhas apontam para gravações reais.

| O que você quer publicar | Melhor escolha | Por quê |
|---|---|---|
| Palestrante convidando o público | **Peça para a pessoa gravar 15–20 segundos no celular** | Um convite real gera confiança. Um palestrante sintético não — mesmo com rótulo. |
| Autor ou autora falando do próprio trabalho | Gravação real, com autorização | O público acadêmico valoriza pesquisa real e vozes reais. |
| Imagens "da edição passada" | **Nada** — esta é a 1ª edição | Nunca gere nem sugira um CONAFROEDU anterior, uma plateia ou um local físico. O evento é 100% online. |
| Teaser com datas e link da Even3 | Cards animados no Canva/CapCut (grátis) | Texto exato, sem erro de digitação, R$ 0. Veja [Stop-motion e motion graphics com o Claude](motion-graphics-claude.md). |
| Reflexão para o 20 de novembro (Consciência Negra) | Voz de uma educadora ou educador real, falas de palestrantes, tipografia | Uma data tão significativa pede pessoas reais, não sintéticas. |
| Abertura abstrata de 5 segundos (formas, luz, livros) | ✅ Vídeo com IA pode ajudar | Sem pessoas e sem fatos — risco baixo. |
| Dar um movimento suave ao fundo do cartaz | ✅ Imagem para vídeo pode ajudar | Você controla a imagem de partida. |
| Traduzir o vídeo de um convidado que fala inglês | Legendas primeiro; dublagem com IA só com aprovação | Veja [o guia de reaproveitamento](video-repurposing.md#dublagem-e-tradução-com-ia-use-com-cuidado). |

> [!WARNING] Prova falsa é um risco real
> Não gere plateias, depoimentos, salas de aula "do congresso", certificados, palestrantes ou instituições parceiras. Tudo o que alguém possa entender como prova de que algo aconteceu precisa ser real.

## O que mudou em 2026 (para tutoriais antigos não te enganarem)

- **O Sora, da OpenAI, foi descontinuado.** O site e o aplicativo fecharam em 26 de abril de 2026, e os modelos Sora 2 saíram da API em 24 de setembro de 2026 ([ajuda da OpenAI](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)). Cuidado com sites sem relação com a OpenAI que ainda usam o nome Sora.
- **O Google agora recomenda o Gemini Omni Flash** como modelo de vídeo padrão. O Veo 3.1 continua sendo a versão mais recente do Veo, mas seus endpoints de *pré-visualização* na API do Gemini (para desenvolvedores) tinham desligamento previsto para 22 de outubro de 2026 ([guia do Veo](https://ai.google.dev/gemini-api/docs/veo)). Isso não significa que todo produto Veo vai sumir — confira o que aparece no seu app Gemini ou no Flow.
- **Novas versões chegaram no meio e no fim de 2026:** Kling 4.0 (lançado em 15 de outubro de 2026), Seedance 2.5, MiniMax H3 (o modelo por trás do Hailuo), Luma Ray3.2, Runway Gen-4.5 e Wan 3.0. Os rankings mudam todo mês — não confie em listas de "melhor IA de vídeo" de 2025.

## Os modelos atuais comparados (outubro de 2026)

"Bom para" abaixo quer dizer **vale a pena testar para este caso**, não "vencedor absoluto". Não fizemos testes práticos para este guia; a tabela resume a documentação oficial.

| Modelo | Bom para | Duração, áudio e vertical | O que saber |
|---|---|---|---|
| **Google Gemini Omni Flash** (app Gemini / Flow / API) | Criar e editar conversando: "agora deixe a luz mais quente" | 9:16 e 16:9; áudio; continua em etapas de 3–10 s | O 4K é ampliado (upscaling). O Google só avaliou diálogos em inglês — fala em português não foi testada. [Guia](https://ai.google.dev/gemini-api/docs/omni) |
| **Google Veo 3.1** (Fast / Lite) | Cenas cinematográficas com som, controle de primeiro/último quadro | Clipes de 8 s; vertical ou horizontal | Endpoints de pré-visualização para desenvolvedores sendo desligados; confira o menu de modelos do seu app. |
| **Kling 4.0** | Movimento de câmera, ação, planos narrativos mais longos | Até 30 s nativos; extensões até 2 min | Acabou de ser lançado. Algumas resoluções foram anunciadas como "serão suportadas". Preços atuais não confirmados. [Lançamento](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-officially-launches-next-generation-kling-40-raising/) |
| **Runway Gen-4.5** | Cenas curtas e controladas, direção de câmera clara, imagem para vídeo | 2–10 s, 720p; 9:16 disponível em imagem para vídeo | Gen-4.5 só nos planos pagos. Use áudio separado, a menos que a tela mostre áudio nativo. [Guia](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5) |
| **Luma Ray3.2** | Reenquadrar e modificar vídeos existentes; controle por quadros-chave | 5 ou 10 s; aceita 9:16 | **Não gera áudio** em clipes novos (Modify/Reframe mantêm o som original). |
| **MiniMax H3** (via Hailuo) | Movimento realista, imagens de referência, clipes curtos com som | 4–15 s; 9:16; áudio estéreo | Os pesos para download têm uma licença confusa; use o app/API hospedado e leia os termos. |
| **Seedance 2.5** (ByteDance) | Vídeos promocionais de até 30 s com várias referências | 30 s de uma vez | Enviar foto de pessoas reais tem restrições de permissão/verificação. |
| **Wan 3.0** (Alibaba, hospedado) | Conceitos de 15–30 s com som | 480p–1080p, até 30 s | Lidera um ranking de preferência humana para vídeo com áudio (out/2026). |
| **Grok Imagine Video 1.5** | Clipes curtos com áudio nativo e fala sincronizada | 1–15 s; 9:16 | Qualidade da fala em português não verificada. |
| **FLUX 3 Video** (Black Forest Labs) | Clipes pagos por segundo, com som opcional | 5–20 s; 9:16 | Sem assinatura (pague pelo uso). |
| **Pika 2.5** | Efeitos e transformações divertidas | — | Planos Free **e** Starter **não têm licença comercial**. |
| **Meta Vibes / Muse Video** | Experimentos de remix social dentro da Meta AI | — | Disponibilidade no Brasil, limites e direitos não confirmados. Trate como brincadeira opcional. |
| ~~OpenAI Sora~~ | — | — | **Descontinuado em 2026.** |

> [!NOTE]
> Rankings (como o Artificial Analysis) medem quais clipes as pessoas preferiram num conjunto de testes. Eles não dizem nada sobre pronúncia em português, licenças, custo por clipe aproveitável ou como o modelo retrata pessoas negras brasileiras.

## Custos e planos gratuitos

Preços conferidos em **21 de outubro de 2026**, em dólar (US$), salvo indicação. Sempre confira a página de planos antes de pagar — e, para uma campanha de seis semanas, prefira cobrança mensal à anual.

| Ferramenta | Opção gratuita | Caminho pago mais barato | Uso comercial? |
|---|---|---|---|
| **App Gemini / Flow** | Cota grátis de vídeo não verificada — confira na sua conta | Google AI Plus **R$ 24,99/mês** (200 créditos do Flow); AI Pro **R$ 96,99/mês** (1.000 créditos) — [planos no Brasil](https://gemini.google/br/subscriptions/?hl=pt-BR) | Confira os termos do app; créditos ≠ segundos |
| **Runway** | **125 créditos únicos**, com marca d'água | Standard **US$ 15/mês** (625 créditos); o Gen-4.5 gasta 12 créditos/segundo ≈ 52 s de rascunhos — [preços](https://runway.com/pricing) | Sim ([direitos de uso](https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights)) |
| **Luma** | Nenhum plano gratuito confiável verificado | Plus **US$ 30/mês** — [preços](https://lumalabs.ai/pricing) | Incluído no Plus |
| **Kling** | Não verificado | Preço atual do 4.0 não verificado | Membros pagantes: sim ([termos](https://kling.ai/docs/payment-policy)) |
| **Hailuo / MiniMax H3** | Não verificado | API por volta de US$ 0,08/s em 768p (condições de beta) | Confira os termos atuais |
| **Wan 3.0** | Pequena cota de teste regional (com condições) | API de US$ 0,05/s (480p) a US$ 0,20/s (1080p) | Confira os termos do serviço |
| **FLUX 3 Video** | — | A partir de US$ 0,06/s (rascunho) — 5 s em HD ≈ US$ 0,85 — [preços](https://bfl.ai/pricing) | Sim, nos termos para desenvolvedores |
| **Grok Imagine Video** | Não verificado | API US$ 0,14/s em 720p | App para consumidor: sim; API à parte |
| **Pika** | 0 créditos mensais | Creator US$ 35/mês (primeiro plano com licença comercial) — [preços](https://pika.art/pricing) | **Não** no Free/Starter |

> [!TIP] Um orçamento realista
> Três planos de 5 segundos × três tentativas cada no FLUX 3 em HD padrão = 3 × 5 × 3 × US$ 0,17 = **US$ 7,65**. É só conta, não promessa de que três tentativas bastam. Defina o limite de tentativas **antes** de começar (por exemplo: três tentativas por plano e, depois disso, imagem parada).

**Caminho de publicação sem orçamento:** imagem parada ou arte aprovada com movimento simples no Canva/CapCut. Créditos gratuitos de geradores servem para **teste** até verificar modelo exato, direitos promocionais, tamanho de exportação e marca d’água exigida na conta. Os 125 créditos de teste do Runway **não incluem acesso ao Gen-4.5 pago**. Preserve marcas obrigatórias; sem exportação gratuita adequada, publique a versão com imagem parada. Siga a [configuração das ferramentas/editores](setup-tools.md#capcut).

## Prompt plano a plano: como escrever um prompt de vídeo

Modelos de vídeo funcionam melhor quando você descreve **um único plano**, como uma diretora falando com o operador de câmera. Siga esta ordem:

1. **Formato** — "Vertical 9:16, 5 segundos."
2. **Assunto** — o que aparece (simples; evite pessoas identificáveis).
3. **Ação** — **um** movimento principal.
4. **Câmera** — **um** movimento: aproximação lenta, câmera fixa, panorâmica suave para a esquerda.
5. **Estilo e luz** — "estética editorial de papel recortado, luz natural suave."
6. **Paleta** — as cores da sua marca (veja [Monte seu kit de marca](brand-kit.md)).
7. **Áudio** — "apenas som ambiente discreto, sem fala, sem música" (ou "sem áudio").
8. **Exclusões** — "sem texto, sem números, sem logotipos, sem pessoas identificáveis."

**Modelo:**

```prompt
Vídeo vertical 9:16, de [5] segundos. [ASSUNTO — simples, sem pessoas identificáveis]. [UMA AÇÃO]. Câmera: [UM MOVIMENTO]. Estilo: [ESTILO], [LUZ]. Cores: [2–3 CORES DA MARCA]. Áudio: [SÓ AMBIENTE / SEM ÁUDIO], sem fala e sem música reconhecível. Sem textos, números, letras, logotipos ou marcas.
```

**Exemplo — B-roll conceitual para o CONAFROEDU:**

```prompt
Vídeo conceitual vertical 9:16, de 5 segundos, para a campanha de um congresso de educação. Uma mesa organizada com cadernos sem texto e formas de papel colorido que se conectam suavemente, simbolizando a colaboração entre professoras e professores. Um único movimento lento de aproximação da câmera. Luz suave, paleta azul-marinho, verde e creme, estética editorial de papel. Preserve a forma dos objetos. Sem pessoas identificáveis, textos, números, marcas ou logotipos. Áudio: apenas um ambiente discreto; sem fala nem música reconhecível.
```

A maioria dos modelos aceita prompts em português. Se algum entender mal, você pode escrever a descrição da cena em inglês — mas qualquer frase que deva aparecer ou ser falada em português precisa ficar exatamente em português.

**Ajuste uma coisa de cada vez.** Se a câmera tremer, mude só a linha da câmera ("câmera totalmente fixa"). Se os objetos "derreterem", simplifique o assunto. Não reescreva o prompt inteiro a cada tentativa — senão você não descobre o que resolveu.

> [!TIP] Peça ajuda ao seu assistente de texto
> Cole sua ideia no ChatGPT, no Claude ou no Gemini: *"Transforme esta ideia num prompt de vídeo de um único plano, nesta estrutura: formato, assunto, uma ação, um movimento de câmera, estilo, paleta, áudio, exclusões. Até 80 palavras. Ideia: [sua ideia]."* Veja [Noções básicas de prompt](prompting-basics.md).

## Passo a passo 1: uma inserção abstrata de 5 segundos

Tempo: cerca de 30–45 minutos. Custo: **rascunhos** gratuitos quando houver cota; publicar também exige direitos promocionais e condições adequadas de exportação. Sem confirmação, use a alternativa de imagem parada.

1. **Decida onde ela entra.** Exemplo: os primeiros 3–5 segundos de um teaser de 24 segundos, antes de imagens reais de palestrantes e de um card com a data.
2. **Escreva um único plano** usando o modelo acima. Sem pessoas, sem palavras.
3. **Escolha a ferramenta por critérios práticos:** sua conta tem cota gratuita? Exporta em **9:16**? O plano permite uso comercial? (O Runway Free tem marca d'água; o Pika Free/Starter não tem licença comercial.)
4. **Gere um rascunho barato** (menor qualidade/menor duração).
5. **Revise em tela cheia no celular:** objetos derretendo, tremulações, letras ou símbolos que surgiram sem querer, mãos estranhas se algo humano aparecer, e o áudio (som gerado pode conter palavras murmuradas).
6. **Corrija uma instrução** e gere de novo. Pare ao atingir seu limite de tentativas.
7. **Baixe** a melhor versão e importe no CapCut ou no Canva, num projeto de 1080 × 1920.
8. **Acrescente tudo o que é informação no editor:** "CONAFROEDU 2026", "5 e 6 de dezembro · 100% on-line", o logo verdadeiro, as legendas e a chamada "Inscreva-se pelo Even3".
9. **Exporte** em MP4, 1080 × 1920, 30 FPS (quadros por segundo).
10. **Na hora de publicar,** ative o rótulo de IA da Meta se o clipe parecer fotorrealista (veja [Transparência](#transparência-o-rótulo-de-ia-da-meta-e-o-texto-da-publicação)).

## Passo a passo 2: animar o cartaz (imagem para vídeo) com segurança

O cartaz tem texto exato em português, datas e logo. Modelos de vídeo **redesenham cada quadro** e podem estragar acentos ("Educacão"), datas e logos sem você perceber. Por isso:

**Opção A — o jeito seguro e gratuito (recomendado):** anime as *camadas* no Canva ou no CapCut. Um zoom lento no fundo, o título entrando deslizando, o card de data parado por 3 segundos. Nada é redesenhado, então nada quebra. Veja [motion graphics com o Claude](motion-graphics-claude.md) para contagens regressivas animadas.

**Opção B — imagem para vídeo só no fundo:**

1. Exporte o cartaz **sem nenhum texto ou logo** — só a ilustração (veja [Geração de imagens](image-generation.md) para criar fundos sem texto).
2. Envie só o fundo isolado para uma ferramenta elegível (**Gen-4.5 exige acesso pago no Runway**; outras têm condições por plano/modelo). Siga a [configuração](setup-tools.md#capcut); sem exportação adequada, mantenha a Opção A.
3. Use um prompt **só de movimento** (a imagem já define a cena — descreva apenas como as coisas se movem):

```prompt
Use esta ilustração como primeiro quadro. Anime apenas as pequenas formas de papel: elas flutuam lentamente e voltam à posição inicial. Câmera fixa. Mantenha composição, cores, contornos e iluminação. Não crie pessoas, palavras, logotipos ou objetos novos. Movimento muito discreto, sem cortes bruscos.
```

4. Confira se as cores e as formas continuam iguais do primeiro ao último quadro.
5. No editor, coloque as **camadas originais de texto e logo por cima** do fundo animado.
6. Mantenha **paradas as fotos de palestrantes reais**. Animar o rosto de alguém (piscar, sorrir, falar) exige autorização explícita da pessoa — e, mesmo com ela, raramente ajuda uma mensagem acadêmica.

> [!WARNING]
> Nunca envie um cartaz pronto, cheio de texto, e publique o que sair. Ou você confere cada letra de cada quadro, ou — muito mais fácil — não deixa o modelo tocar no texto.

## Áudio: som nativo, vozes e música

- **Áudio nativo não é sinônimo de áudio bom.** O som ambiente gerado pode trazer "falas" murmuradas ou ruídos estranhos. Escute com fone antes de publicar.
- **A fala em português é o ponto fraco.** O guia do Omni, do Google, diz que só diálogos em inglês foram avaliados; os outros fornecedores não publicam resultados em português brasileiro. Sotaque, entonação e sincronia labial podem sair errados. Se quiser testar, comece com uma frase curta:

```prompt
Uma apresentadora virtual adulta, claramente identificada como personagem de IA, olha para a câmera em um fundo simples. Plano médio estável, 8 segundos, 9:16. Ela diz em português brasileiro, com voz natural e ritmo calmo: "Vamos conversar sobre o futuro da educação?" Não acrescente outras falas nem gere legendas dentro do vídeo.
```

- **Opção melhor:** grave uma narração real, com alguém da organização, no celular, e coloque por baixo do B-roll. É de graça e tem a cara da sua comunidade.
- **Música:** para Facebook/Instagram, confira primeiro a **Coleção de Sons da Meta (Sound Collection)**. Não presuma que os sons "comerciais" do CapCut ou as músicas em alta estão liberados para divulgar no Facebook. Detalhes em [licenciamento de música](video-repurposing.md#música-o-que-você-pode-usar-legalmente).

## Reels em 9:16: configurações técnicas

| Configuração | Use | Fonte |
|---|---|---|
| Tamanho | **1080 × 1920** (9:16) | Padrão de trabalho; o Instagram aceita de 1,91:1 a 9:16 ([ajuda da Meta](https://www.facebook.com/help/instagram/1038071743007909)) |
| Taxa de quadros | **30 FPS** | O Instagram pede no mínimo 30 FPS; o Facebook recomenda 30 FPS ou menos — 30 atende aos dois |
| Arquivo | MP4, vídeo H.264, áudio AAC | [Formatos de vídeo do Facebook](https://www.facebook.com/help/218673814818907) |
| Duração | Meta editorial de 15–60 s para peças geradas | O Facebook não aplica mais a antiga regra de "Reel de no máximo 90 segundos" ([Meta, junho de 2025](https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/)) — confira no seu publicador |
| Posição do texto | Afaste o texto das bordas inferior e direita | Os botões do app e a legenda do post cobrem essas áreas; pré-visualize antes de publicar |

## Limitações realistas (o que vai dar errado)

- **Clipes curtos.** A maioria dos modelos gera 5–15 segundos por vez. Um Reel de 30 segundos normalmente é a junção de vários clipes no editor.
- **Deriva.** Rostos, tom de pele, cabelo, roupas e cores mudam entre quadros e entre extensões.
- **Texto dentro do vídeo não é confiável.** Espere acentos errados e letras embaralhadas. Coloque o texto sempre no editor.
- **Física e mãos.** Objetos se fundem, mãos ganham dedos, o papel dobra de um jeito estranho.
- **Vozes em português** podem soar estrangeiras ou caricatas.
- **O custo por clipe *aproveitável*** é várias vezes o preço de uma geração.
- **A realidade de cada conta é diferente.** Cotas gratuitas, menus de modelos e preços em reais variam por conta e mudam sem aviso. Tudo aqui foi conferido em 21 de outubro de 2026 — confira de novo antes de pagar.
- **Fotos de pessoas reais** podem ser recusadas por algumas ferramentas (o Seedance tem regras de verificação) e, de todo modo, só devem ser usadas com consentimento.

## Cuidados com representação

Vídeos com IA podem estereotipar pessoas negras e culturas africanas, e o vídeo traz falhas novas: **tom de pele clareando ou mudando entre quadros, textura do cabelo se alterando, rostos que "derivam", ou uma voz que vira caricatura.** Nenhum modelo atual foi comprovado como o melhor ou livre de viés para retratar pessoas negras brasileiras.

No CONAFROEDU:

- **Prefira gravações reais e autorizadas de educadoras, educadores e palestrantes**, e trabalhos de fotógrafos e designers negros brasileiros.
- Se um clipe gerado tiver pessoas, descreva-as de forma concreta e respeitosa (educadoras e educadores negros brasileiros contemporâneos, com idades, tons de pele e cabelos variados — crespo, cacheado, tranças, locs), em papéis de autoridade e conhecimento — e, mesmo assim, revise cada quadro.
- **Não use Adinkra, Kente, orixás ou imagens sagradas como enfeite.** Use um símbolo só quando a organização conhecer seu significado e contexto.
- Recuse savanas, cabanas, trajes "tribais" ou cenas de pobreza como atalho para "Africanidades".
- **Assista ao clipe inteiro com som** antes de aprovar.

Checklist completa e orientações de prompt: [Representar pessoas negras e culturas africanas com respeito na IA](representation-bias.md).

## Transparência: o rótulo de IA da Meta e o texto da publicação

A Meta exige que você use a **ferramenta de divulgação de IA** ao publicar conteúdo orgânico com **vídeo fotorrealista ou áudio com som realista** criado ou alterado digitalmente — e avisa que pode haver penalidades se você não fizer isso ([Meta, 2026](https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/); [abordagem de rotulagem](https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/)).

1. Na hora de publicar, procure a opção de rótulo de IA / "Informações de IA" ("AI info") no criador de publicações (o nome exato pode variar conforme o app e o idioma — confira na tela final).
2. Ative para clipes sintéticos realistas, dublagens com IA e avatares.
3. Para inserções abstratas ou ilustradas, acrescente uma nota curta no texto da publicação quando alguém puder se confundir, por exemplo: *"Vídeo de abertura criado com IA (ilustração conceitual)."*
4. Não remova os metadados de procedência dos arquivos de IA (os termos do Canva proíbem isso).
5. O rótulo não torna aceitável um conteúdo enganoso — e não há evidência de que o rótulo, por si só, reduza o alcance.

Mais em [Ética, políticas e LGPD](ethics-legal.md).

## Checklist antes de publicar

- [ ] Um vídeo real de celular faria esse trabalho melhor? (Se sim, use-o.)
- [ ] Nenhuma pessoa gerada apresentada como palestrante, participante, plateia ou edição anterior.
- [ ] Todos os textos, datas, nomes e o logo foram colocados no editor e revisados por uma segunda pessoa (ç, ã, é, ê).
- [ ] O plano/ferramenta usado permite uso comercial/promocional; preservar marcas d’água exigidas e sinalizar uso de IA.
- [ ] Assistido em tela cheia no celular, com som e sem som.
- [ ] Representação revisada com a [checklist](representation-bias.md); nenhum símbolo usado como enfeite.
- [ ] Música liberada para Facebook/Instagram (ou sem música).
- [ ] Exportado em 1080 × 1920, 30 FPS, MP4; texto longe dos botões do app.
- [ ] Rótulo de IA da Meta ativado quando exigido; texto da publicação explica a imagem conceitual feita com IA.
- [ ] Link da Even3 no texto da publicação: https://www.even3.com.br/iconafroedu-764690/
- [ ] Arquivo do projeto, prompt, nome da ferramenta/modelo e data salvos para reaproveitar.

## Próximos passos

- Transforme falas reais em Reels: [Reels, cortes, legendas e dublagem](video-repurposing.md)
- Cards animados e contagens regressivas grátis: [Stop-motion e motion graphics com o Claude](motion-graphics-claude.md)
- Crie os fundos sem texto que você vai animar: [Geração de imagens](image-generation.md) e [Receitas de prompts de imagem](image-prompts.md)
- Revise pessoas e cultura em cada peça: [Representar pessoas negras e culturas africanas com respeito](representation-bias.md)
- Onde os Reels entram no plano: [Manual orgânico do Facebook](facebook-playbook.md) e [CONAFROEDU: plano de 6 semanas](conafroedu-sprint.md)
- Rótulos, consentimento e LGPD: [Ética, políticas e LGPD](ethics-legal.md)
