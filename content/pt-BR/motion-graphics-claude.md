---
title: Stop-motion e motion graphics com o Claude
description: Peça ao Claude contagens regressivas animadas, cards de palestrantes e citações em tipografia cinética, exporte em MP4 para o Reels de graça e monte sequências de stop-motion de verdade, sem programar.
order: 150
section: create
icon: 🎞️
updated: 2026-10-21
---

**Motion graphics** são animações curtas feitas de texto, formas e fotos: uma contagem regressiva que "cai" na tela, um card de palestrante que desliza, uma citação que aparece palavra por palavra. Combinam muito bem com um congresso acadêmico, porque mantêm nomes, datas e acentos **exatamente certos**. Os geradores de vídeo com IA costumam errar justamente nisso (veja [Geração de vídeo](video-generation.md)).

O Claude não "filma" nada. O que ele faz é **escrever uma pequena página da web (HTML) que se anima**. Você abre essa página no navegador, grava e tem um MP4 para Reels, Stories ou Status do WhatsApp.

**O que você leva desta página:**

- Dois exemplos prontos do CONAFROEDU (uma contagem regressiva 9:16 e um card de citação) para abrir, reaproveitar e adaptar.
- Prompts para copiar e colar: contagem regressiva, card de palestrante, tipografia cinética e uma sequência em "stop-motion" de papel recortado.
- Um caminho gratuito e sem código para transformar a animação em MP4 (OBS → Canva), além do caminho pago de um clique (Claude Motion) e de quem tem acesso a ele.
- Um fluxo de stop-motion de verdade: quadros consistentes feitos num gerador de imagens e montados no CapCut ou no Canva.
- Soluções para os três problemas clássicos: **animação rápida demais**, **texto cortado no 9:16** e **acentos quebrados**.
- Uma seção opcional para quem tem um pouco de intimidade com tecnologia: Claude Code + Remotion, ou Playwright + ffmpeg (testado para este guia).

> [!NOTE]
> **Custos:** tudo no tutorial principal é gratuito: plano Free do Claude, OBS Studio, HandBrake e Canva gratuito. O Claude Free tem limites de uso que se renovam com o tempo; não existe um número fixo de "N animações por dia". O **Claude Motion**, que exporta MP4 direto, é um recurso beta só dos planos **Team/Enterprise** (Team: US$ 25 por usuário/mês, ou US$ 20 no plano anual). Planos e recursos conferidos em [claude.com/pricing](https://claude.com/pricing) em 21/10/2026.

## Veja o resultado primeiro

As duas animações abaixo foram feitas para este guia exatamente do jeito que vamos ensinar: arquivos HTML autocontidos, que funcionam sem internet, depois exportados em MP4. As duas usam a paleta terracota/ocre e formas geométricas simples de papel, sem símbolos culturais ou religiosos como enfeite.

| Contagem "Faltam 7 dias" (12 s) | Citação em tipografia cinética (14 s) |
|---|---|
| ![Prévia animada: formas de papel caem na tela e o texto "CONAFROEDU 2026 – Faltam 7 dias – 5 e 6 de dezembro de 2026 – 100% online – Inscreva-se pelo Even3" aparece em etapas sobre fundo creme](/images/motion-countdown-preview.gif) | ![Prévia animada: sobre fundo terracota, as palavras do art. 26-A da LDB aparecem uma a uma, com "obrigatório" e "história e cultura afro-brasileira e indígena" destacados em ocre, seguidas da fonte e das datas do CONAFROEDU](/images/motion-quote-preview.gif) |
| [Abrir o HTML](/examples/countdown.html) · [Baixar o MP4](/examples/countdown.mp4) (1080×1920, 0,7 MB) | [Abrir o HTML](/examples/quote.html) · [Baixar o MP4](/examples/quote.mp4) (1080×1920, 0,4 MB) |

Teste a contagem com outros números acrescentando `?dias=` ao endereço: [15 dias](/examples/countdown.html?dias=15), [1 dia](/examples/countdown.html?dias=1). Acrescente `&guias=1` para ver as margens seguras (explicamos em [Problemas comuns](#problemas-comuns-e-soluções)). Aperte <kbd>F5</kbd> para assistir de novo.

> [!TIP]
> O card de citação reproduz **o texto da própria lei**: o art. 26-A da LDB, com a redação da Lei nº 11.645/2008, conferido no [texto oficial do Planalto](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm). Nunca anime uma citação sem conferir na fonte. Se a frase for de uma pessoa, peça autorização a ela. Ferramentas de IA inventam "frases" de grandes pensadores negros com a maior naturalidade.

## Três coisas diferentes que chamam de "vídeo do Claude"

| O quê | O que é de fato | Uso no CONAFROEDU |
|---|---|---|
| **Motion graphics** | O Claude escreve um código que movimenta texto, formas e fotos autorizadas | Contagem regressiva, card de palestrante, destaques da programação, card de citação |
| **Animação com cara de stop-motion** | Movimento em "saltos" visíveis (poses), muitas vezes com visual de papel recortado. Pode ser feita só com código ou com uma série de imagens geradas | Um ar artesanal e leve para teasers e conteúdos do Novembro Negro |
| **Stop-motion físico** | O celular fotografa objetos reais, que você move um pouquinho entre uma foto e outra | Vídeos com letras de papel, livros e recortes, bem no clima de sala de aula |

A própria documentação do Claude Motion diz que ele anima código e **não** gera filmagens realistas nem pessoas ([Central de Ajuda do Claude](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion)). Para vídeo realista, veja [Geração de vídeo](video-generation.md).

## Escolha o seu caminho

| Caminho | Para quem | O que você ganha no fim | Custo |
|---|---|---|---|
| **1. Claude (Free), Artifact/Design → gravação no OBS → Canva** | Qualquer pessoa, sem código | MP4 pronto para o Reels | Gratuito |
| **2. Claude Motion → Exportar → MP4** | Equipes que já usam Claude **Team/Enterprise** com o Motion ativo | MP4 direto do Claude | Plano Team; o Motion não aparece nos planos Free/Pro/Max |
| **3. Quadros de um gerador de imagens → CapCut/Canva** | Quem tem paciência e gosta do visual artesanal | MP4 em stop-motion | Planos gratuitos, mas a cota de imagens varia |
| **4. Claude Code + Remotion, ou Playwright + ffmpeg** | Voluntário(a) que topa instalar programas | MP4s repetíveis, com tempo exato, em lote | Ferramentas gratuitas (o Remotion é grátis para organizações de até 3 pessoas) |

**Comece pelo Caminho 1.** Não assine o Claude Max individual achando que ele libera o Motion: o Motion é um beta dos planos Team/Enterprise.

## Antes de começar: cinco regras que poupam horas

1. **Entregue o texto exato.** Cole todas as palavras que vão aparecer na tela, com acentos, e diga para o Claude não acrescentar nada. Use os dados da [ficha oficial do CONAFROEDU](prompting-basics.md#a-ficha-oficial-do-conafroedu).
2. **Peça 9:16, 1080×1920**, ajustado a qualquer janela sem distorcer. É o formato vertical do Reels e dos Stories.
3. **Peça um arquivo HTML autocontido**: sem internet, sem CDN (biblioteca de código on-line), sem fontes externas. Arquivo que busca coisas na internet costuma abrir em branco depois.
4. **Tocar uma vez e congelar no último quadro.** Nada de loop. Assim fica fácil gravar e cortar.
5. **Nada de enfeite "africano" genérico.** Use tipografia, cores e formas geométricas simples. Símbolos adinkra, padrões kente e orixás têm significados reais e pedem revisão de quem conhece. Leia [Como representar culturas negras e africanas com respeito](representation-bias.md) antes de incluir qualquer imagem cultural ou pessoas geradas por IA.

## Passo a passo: sua primeira contagem regressiva (Claude Free)

**Resultado:** um card vertical, sem som, de 12 segundos com "Faltam 7 dias", para publicar no **sábado, 28 de novembro de 2026**, sete dias antes da abertura do congresso.

**Tempo:** de 45 a 90 minutos na primeira vez e de 15 a 30 minutos nas próximas (estimativa de planejamento).

### 1. Ative a criação de arquivos no Claude

1. Abra o [claude.ai](https://claude.ai) e entre na sua conta (o plano Free serve).
2. Vá em **Settings → Capabilities** (Configurações → Recursos) e ative **Cloud code execution and file creation** (execução de código e criação de arquivos). A ajuda do Claude cita isso como pré-requisito para os Artifacts atuais ([O que são artifacts?](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them)).
3. Abra uma **conversa nova**. Se aparecer a opção de saída **Design**, escolha-a, porque ela exporta HTML independente. Se não aparecer, cole o prompt numa conversa normal mesmo.

> [!NOTE]
> O Claude mudou o sistema de Artifacts em setembro de 2026. Os criados antes de 16 de setembro continuam funcionando, mas os novos usam o sistema novo. Tutoriais antigos que mandam clicar num botão "baixar código" podem não bater com a sua tela. Procure **Export → standalone HTML** (Exportar → HTML independente) ou pergunte ao Claude: "como eu baixo isso como arquivo HTML?".

### 2. Cole o prompt

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
"100% online"
"Inscreva-se pelo Even3"
"link na legenda"

Tempo: uma animação de 12 segundos e depois congela no último quadro (sem loop). 0–2 s entram as formas e o título; 2–5 s "Faltam 7 dias"; 5–8 s tema, data e "100% online"; 8–12 s o convite. Movimento em poses, 8 poses por segundo, como stop-motion. Sem flashes.
Todo o texto dentro de uma área segura: 14% no topo, 22% embaixo e 12% de cada lado, para os botões e a legenda do Reels não cobrirem nada. Recarregar a página reinicia a animação.
Depois de criar, me explique como baixar e abrir o arquivo HTML.
```

### 3. Revise e peça ajustes em português comum

Assista à prévia do começo ao fim e peça mudanças do jeito que você falaria:

- "A data está quebrando em duas linhas. Deixe '5 e 6 de dezembro de 2026' numa linha só."
- "Segure mais o card final: o convite deve aparecer aos 8 s e ficar parado até o fim."
- "Aumente o número e diminua um pouco o texto do tema."

Confira **cada palavra com a ficha oficial**: a grafia de CONAFROEDU, a data, "100% online" e os acentos (ç, ã, é).

### 4. Baixe e abra o arquivo

1. Escolha **Export → standalone HTML**, ou a opção de download que o Claude indicar. Salve numa pasta fácil de achar, por exemplo `Documentos/CONAFROEDU/animacoes`.
2. **Dê dois cliques** no arquivo `.html`. Ele abre no Chrome, Edge ou Firefox.
3. Assista a uma reprodução completa. <kbd>F5</kbd> reinicia.

> [!WARNING]
> Nunca renomeie um arquivo para `.mp4` achando que isso "converte". HTML é uma página da web, não um vídeo. A próxima seção mostra como fazer um MP4 de verdade.

### Qual número publicar em qual dia

A contagem não se atualiza sozinha depois de publicada: faça um MP4 para cada data. A contagem vai até o dia da abertura, **sábado, 5 de dezembro**:

| Publicar em | Texto | Observação |
|---|---|---|
| Qui, 5/11 | Faltam 30 dias | As submissões fecharam em 4/11, então a mensagem é de **inscrição para participar** |
| Sáb, 21/11 | Faltam 14 dias | Dia seguinte ao da Consciência Negra; reserve o 20/11 para conteúdo de fundo |
| Qua, 25/11 | Faltam 10 dias | Data prevista da programação: só fale em "programação disponível" se ela já estiver publicada |
| Sáb, 28/11 | Faltam 7 dias | O exemplo acima |
| Qua, 2/12 | Faltam 3 dias | Inclua na legenda as informações de "como acessar" |
| Sex, 4/12 | Falta 1 dia | No singular! "Falta 1 dia", e não "Faltam 1 dias" |

No nosso arquivo de exemplo, basta mudar o endereço: `countdown.html?dias=14`. Se o Claude fizer o seu, peça: "Coloque o número de dias como uma configuração no topo do arquivo e use 'Falta 1 dia' quando for 1."

## Mais prompts: card de palestrante, citação e sequência de papel

### Card animado de palestrante ou autor(a)

Só palestrantes **confirmados**, com nome, cargo e foto **aprovados**. Nunca deixe a IA "melhorar" um rosto ou tom de pele, e nunca use foto sem autorização.

```prompt
Crie uma animação em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas externas, com <meta charset="utf-8"> e fontes do sistema.
Envio em anexo uma foto autorizada da palestrante. Incorpore a foto dentro do próprio arquivo HTML e não altere, retoque, clareie nem corte o rosto.

Texto exato (não mude nada):
"CONAFROEDU 2026 · Palestra"
"[NOME EXATO, COMO APROVADO]"
"[CARGO / INSTITUIÇÃO APROVADOS]"
"[TÍTULO EXATO DA PALESTRA]"
"5 de dezembro · [HORÁRIO CONFIRMADO PELA COMISSÃO] (horário de Brasília)"
"Inscrições: Even3 · link na legenda"

12 segundos, toca uma vez e congela no último quadro. A foto entra deslizando de 0 a 2 s; o nome aparece aos 2 s e fica visível por pelo menos 6 segundos; o título aparece aos 5 s; data e convite aos 8 s.
Paleta terracota/ocre/creme, formas de papel recortado, movimento em poses (8 por segundo), sem flashes. Texto dentro da área segura (14% no topo, 22% embaixo, 12% dos lados). Teste com o nome e o título mais longos para nada ser cortado.
```

> [!TIP]
> Monte o card **uma vez** com o nome e o título mais longos da programação. Se esses couberem, todos cabem. Depois peça ao Claude para "colocar os dados dos palestrantes numa lista no topo do arquivo" e você só troca o texto.

### Tipografia cinética para uma citação

**Tipografia cinética** é texto que se move ou aparece no ritmo da leitura. Funciona bem com uma frase curta e verificada: um trecho de lei, uma fala aprovada por quem a disse ou o tema do congresso.

```prompt
Crie uma animação de tipografia cinética em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas, com <meta charset="utf-8"> e fontes do sistema.
Fundo terracota #b4532a, texto creme #f5e9d7, destaques em ocre #d99a2b.

Etiqueta pequena no topo: "O QUE DIZ A LEI"
Citação (texto exato, não mude nenhuma palavra nem acento):
"Nos estabelecimentos de ensino fundamental e de ensino médio, públicos e privados, torna-se obrigatório o estudo da história e cultura afro-brasileira e indígena."
Destaque "obrigatório" e "história e cultura afro-brasileira e indígena".
Linha da fonte: "LDB (Lei nº 9.394/1996), art. 26-A, com redação dada pela Lei nº 11.645/2008"
Quadro final: "CONAFROEDU 2026 — 5 e 6 de dezembro de 2026 — 100% online"

As palavras aparecem uma de cada vez, cerca de 4 por segundo, e continuam na tela. Depois aparece a fonte, depois o quadro final. Total de uns 14 s, toca uma vez e congela no último quadro. Coloque o texto da citação e a velocidade em configurações bem identificadas no topo do arquivo, para eu mudar sem saber programar. Tudo dentro da área segura.
```

### Uma sequência de papel em "stop-motion" feita só com código

É o jeito mais fácil de conseguir um visual artesanal de stop-motion, sem gerador de imagens.

```prompt
Crie uma animação em HTML autocontido, 9:16 (1080×1920), sem internet nem bibliotecas, com <meta charset="utf-8">.
Estilo: recortes de papel sobre fundo creme com textura sutil de papel feita em CSS/SVG. Todo movimento acontece em poses visíveis, 8 por segundo (tempo em degraus, sem suavização), e os recortes tremem levemente entre 3 poses, como em stop-motion de verdade.
Cena: um caderno de papel se abre ao longo de 2 segundos; um sol de papel sobe acima dele; depois um card fica parado por 5 segundos com este texto exato:
"CONAFROEDU 2026"
"5 e 6 de dezembro de 2026 · 100% online"
"Inscrições no Even3"
Sem pessoas, sem símbolos culturais ou religiosos, sem flashes. Toca uma vez e congela no último quadro. Total de 10 segundos.
```

## Transforme a animação em MP4 para o Reels

Você tem um arquivo `.html`. Para publicar, precisa de um **arquivo de vídeo (MP4)**.

### Opção A (recomendada e gratuita): a fonte "Navegador" do OBS Studio

O [OBS Studio](https://obsproject.com/kb/quick-start-guide) é um programa gratuito de gravação para Windows, macOS e Linux. A fonte **Navegador** (Browser) toca o seu HTML *dentro do OBS* em 1080×1920, mesmo numa tela de notebook na horizontal. Nenhuma barra do navegador nem outra janela entra na gravação.

1. **Instale o OBS** pelo site oficial e rode o assistente de configuração automática.
2. **Configurações → Vídeo:** coloque **Resolução base** e **Resolução de saída** em `1080x1920`, FPS `30`.
3. **Configurações → Saída:** escolha a pasta de gravação, o formato **MKV** e um codificador **H.264**. Silencie microfone e áudio do computador (o card não tem som).
4. Em **Fontes**, clique em **+ → Navegador**. Marque **Arquivo local** e escolha o seu HTML. Largura `1080`, Altura `1920` e taxa de quadros personalizada `30` ([guia da fonte Navegador do OBS](https://obsproject.com/kb/browser-source)).
5. Clique em **Iniciar gravação**. Depois abra as **Propriedades** da fonte e clique em **Atualizar cache da página atual**. A animação recomeça do zero.
6. Espere o card final ficar parado por 2 ou 3 segundos e clique em **Parar gravação**.
7. Vá em **Arquivo → Remuxar gravações**, escolha o MKV e clique em **Remuxar**. Sai um MP4 com a mesma qualidade, porque só o "contêiner" muda ([guia de gravação do OBS](https://obsproject.com/kb/standard-recording-output-guide)).

> [!TIP]
> Quer ter tempo de clicar em gravar antes de a animação começar? Nossos arquivos de exemplo aceitam `?pausa=3`, que segura uma capa parada por 3 segundos. Peça o mesmo ao Claude: "Adicione uma configuração que espere N segundos antes de a animação começar."

Se a fonte **Navegador** não aparecer no Linux, instale o pacote oficial do OBS, que já vem com ela. Como alternativa, dá para usar **Captura de janela** de um navegador comum, mas aí é preciso cortar as barras do navegador, e a nitidez depende do tamanho da janela na sua tela.

### Corte no Canva gratuito

1. No [Canva](https://www.canva.com), crie um design de **Vídeo para celular** ou **Reels do Instagram** (9:16).
2. **Uploads → Fazer upload de arquivos** → escolha o MP4 e arraste para a linha do tempo.
3. Corte o início e o fim para o vídeo começar no primeiro movimento ([Canva: cortar vídeos](https://www.canva.com/help/trim-videos/)).
4. Se quiser, acrescente uma capa ou música livre de direitos, com recursos seus ou gratuitos. Elementos premium (com coroa) podem gerar cobrança.
5. **Compartilhar → Baixar → Vídeo MP4.**

> [!WARNING]
> Subir o **HTML ou um SVG** no Canva **não** mantém a animação. O Canva importa imagens e vídeos ([formatos aceitos pelo Canva](https://www.canva.com/help/upload-formats-requirements/)). Grave em MP4 antes.

**Ficou com um arquivo WebM ou MOV?** Use o [HandBrake](https://handbrake.fr/docs/en/latest/introduction/quick-start.html) (gratuito e de código aberto): **Open Source** → escolha o arquivo → uma predefinição H.264 → formato **MP4** → **Start Encode**. Confira se as dimensões continuam na vertical (1080×1920), porque algumas predefinições cortam. O Canva também aceita WebM e baixa em MP4.

### Opção B: Claude Motion (só Team/Enterprise)

Se a comissão já usa o Claude **Team** ou **Enterprise**, procure o **Motion**. No Team ele vem ativado; no Enterprise, quem administra decide. O fluxo documentado é: escolher um modelo **Motion** nos Artifacts → descrever a animação → revisar no chat/editor → **Export → MP4** ([Começando com o Claude Motion](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion)). Ele consome a cota de uso. Resolução, duração máxima e controle de orientação não foram verificados para este guia, então peça ao Claude para avisar sobre qualquer configuração indisponível **antes** de renderizar.

```prompt
Crie uma animação com o modelo Motion para anunciar uma palestra. Destino: Reels no Facebook, vertical 9:16, de preferência 1080×1920, 12 segundos. Se alguma configuração não estiver disponível, me avise antes de renderizar.
Use a foto autorizada em anexo sem alterar o rosto.
0–2 s: uma pergunta curta sobre [um desafio real de professores].
2–7 s: [NOME EXATO], [CARGO APROVADO], [TÍTULO EXATO DA PALESTRA].
7–10 s: "5 e 6 de dezembro de 2026 • 100% online".
10–12 s: "Inscreva-se pelo Even3 • link na legenda".
Texto grande, nada de informação inventada, sem flashes rápidos. Primeiro proponha o roteiro; só renderize depois da minha aprovação.
```

### Finalize a publicação

- Assista ao MP4 **no celular**, sem som.
- Repita as informações essenciais na **legenda**, porque nem todo mundo consegue ver o vídeo: CONAFROEDU, 5 e 6 de dezembro, 100% online e o link real `https://www.even3.com.br/iconafroedu-764690/`. No Instagram, link na legenda não é clicável, então indique o link do perfil ou dos Stories.
- Agende no Meta Business Suite na data e no horário certos ([Ferramentas de agendamento](scheduling-tools.md)).

## Stop-motion de verdade com quadros gerados por IA

Aqui um **gerador de imagens** desenha os quadros, como a edição de imagens do Gemini ou a ferramenta de imagens do ChatGPT. **O Claude planeja** e você monta. (O Claude, inclusive o Motion, não gera imagens.)

**A conta:** a **8 poses por segundo**, 24 imagens dão **3 segundos** de movimento. Com um card final de 5 segundos, você tem um Reels de 8 segundos. Aumentar a taxa de quadros só repete poses; não cria poses novas.

**Reserve tempo:** de 1 a 3 horas, mais a espera para a cota gratuita de imagens se renovar (estimativa). **Teste sempre com 8 quadros antes.**

1. **Peça ao Claude uma ficha de continuidade.** Quadros numerados de `0000` a `0023`, uma pequena mudança por quadro, com câmera, luz, textura do papel e direção da sombra fixas.

   ```prompt
   Planeje uma sequência de stop-motion com 24 quadros (0000 a 0023) para uma imagem vertical 9:16. Cena vista de cima: um caderno de papel sobre uma mesa de madeira se abre aos poucos e depois um sol de papel sobe acima dele. Sem pessoas, sem palavras, sem logotipos, sem símbolos culturais ou religiosos. Câmera fixa, mesma luz, mesma textura de papel e mesma direção de sombra em todos os quadros. Para cada quadro, informe: nome do arquivo, a ÚNICA pequena mudança em relação ao anterior e o que deve continuar idêntico. Depois escreva o prompt de imagem do quadro-mestre (0000).
   ```

2. **Gere uma única imagem-mestre** no gerador de imagens, com o prompt que o Claude escreveu. Aprove e guarde separada.
3. **Edite, não gere do zero.** Na **mesma** conversa de edição de imagem, anexe a mestre e o último quadro aprovado e peça a próxima pose:

   ```prompt
   Use a imagem aprovada como referência. Próximo quadro da mesma cena: o caderno de papel abre mais 10 graus; todo o restante permanece exatamente na mesma posição. Câmera fixa, iluminação e sombra constantes, mesmo enquadramento e textura. Sem texto novo, sem objetos novos, sem mudança de cenário.
   ```

   Se um quadro "desandar" (a mesa muda, a sombra pula), refaça esse quadro **a partir da mestre**, em vez de construir em cima do erro. Imagens de referência ajudam, mas **não garantem** consistência.
4. **Confira e numere.** Salve `frame-0000.png` … `frame-0023.png` numa pasta só, sem pular números. Descarte quadros que piscam. Não coloque texto dentro das imagens geradas: o texto do evento entra num card final separado ou como sobreposição no editor.
5. **Monte o vídeo** num dos editores abaixo.

**CapCut (desktop): tempo preciso.** Crie um projeto → **Importar** os PNGs em ordem → **Menu → Configurações → Edição →** defina a duração das imagens em **0,125 s** (8 poses/s) antes de colocar na linha do tempo. Se o CapCut arredondar, use **0,25 s** (4 poses/s, mais lento e "travado") ([guia de stop-motion do CapCut](https://www.capcut.com/resource/what-is-a-stop-animation)). Acrescente um card final de 5 segundos com o texto aprovado e exporte em **MP4, 1080×1920**. Fique de olho em efeitos pagos e avisos de cobrança na exportação.

**Canva: mais simples, mais lento.** Crie um vídeo vertical, adicione cada PNG como **uma cena separada**, em ordem, ajuste a duração de cada cena no ícone de relógio e inclua o card final por 5 segundos. Depois **Baixar → MP4**. O Canva não garante cenas de 0,125 segundo, então conte com uma "sequência de poses" mais lenta e use menos quadros.

> [!TIP]
> **Se a continuidade da IA não der certo**, gere só o fundo. Depois mova os **mesmos** recortes de papel entre os quadros no Canva, ou fotografe objetos de papel de verdade com o celular num suporte fixo. Isso é stop-motion de verdade, e muitas vezes sai mais rápido. Não fotografe estudantes identificáveis sem a devida autorização.

Quadros gerados por IA são imagens sintéticas: siga as orientações de transparência em [Ética, políticas e LGPD](ethics-legal.md) e revise tudo com o [checklist de representação](representation-bias.md).

## Problemas comuns e soluções

### "A animação está rápida demais"

- Regra prática: cada frase deve ficar parada o tempo de alguém **ler em voz alta duas vezes**. O nome de quem palestra precisa de pelo menos 6 segundos na tela.
- Peça ao Claude: "Deixe tudo 50% mais lento e segure o card final por pelo menos 4 segundos. Coloque a velocidade numa configuração no topo do arquivo."
- No nosso exemplo de citação, mude `POR_PALAVRA` (intervalo entre palavras) de `0.25` para `0.4`.
- Prefira **segurar mais** a deixar o movimento mais lento, porque é com o texto parado que a gente lê.

### "O texto fica cortado no 9:16" (ou embaixo dos botões do Reels)

- Peça um palco que **mantenha a proporção 9:16 e dimensione tudo pela largura dele**, não pela janela: "Use aspect-ratio 9/16 e defina o tamanho de todos os textos em unidades do contêiner, para acompanhar o palco."
- Mantenha o texto numa **área segura**: mais ou menos 14% do topo, 22% de baixo e 12% de cada lado. A legenda, o nome do perfil e os botões do Reels cobrem as bordas. Essas margens são um hábito prático, não uma especificação oficial da Meta. Nossos arquivos mostram as guias com `?guias=1`.
- Teste com o texto real **mais longo** e confira o MP4 final no celular.
- Se uma data ou nome quebrar feio, peça: "Deixe '5 e 6 de dezembro de 2026' numa linha só e diminua o tamanho se precisar."

### "Os acentos estão quebrados" (Ã§ no lugar de ç, símbolos �)

- O arquivo precisa declarar **UTF-8**. Peça ao Claude: "Garanta que o HTML tenha `<meta charset="utf-8">` como primeira linha dentro do `<head>` e esteja salvo em UTF-8."
- Não copie o código passando pelo Word ou pelo corpo de um e-mail. Baixe o arquivo direto.
- Se uma letra aparecer como um quadradinho vazio, a fonte não tem aquele caractere. Peça "fontes do sistema com suporte completo ao português (por exemplo Segoe UI, Roboto, Noto Sans, Arial)".
- Confira também o **MP4 exportado**. Revise nomes e acentos quadro a quadro antes de publicar.

### Outros problemas frequentes

| Problema | Solução |
|---|---|
| Página em branco ao abrir o arquivo | Provavelmente ele busca algo na internet. Peça "um arquivo realmente independente, sem CDN, fontes ou imagens externas". |
| Fica em loop para sempre | "Toque uma vez e congele no último quadro." |
| A gravação começa no meio | Clique em Iniciar gravação **antes** de atualizar a página no OBS, ou use um atraso inicial (`?pausa=3`). |
| A gravação engasga | Simplifique os efeitos ou use 720×1280 **tanto** no Claude **quanto** no OBS. Aumentar a resolução depois não recupera detalhe perdido. |
| O Canva pede pagamento na hora de baixar | Tire os elementos premium (com coroa) ou fique com o MP4 do OBS. |
| Funciona no Chrome, mas não no OBS | Peça ao Claude para retirar efeitos incomuns e dependências externas, ou use Captura de janela. |

## Revisão antes de publicar

- [ ] Todos os nomes, datas, valores e links batem com a ficha oficial atual.
- [ ] Os acentos estão certos no **MP4 final** (ç, ã, õ, é, ê, í, ó, ú).
- [ ] Nenhum texto fica embaixo da interface do Reels quando visto no celular.
- [ ] Cada frase fica tempo suficiente na tela; não há efeitos piscando.
- [ ] A mensagem funciona **sem som**, e a legenda repete o essencial.
- [ ] As fotos são autorizadas e sem alteração; fontes e músicas têm licença para esse uso.
- [ ] Nada de símbolos culturais ou religiosos decorativos sem revisão de quem conhece.
- [ ] Há uma versão em imagem parada (o último quadro) para o Feed e para quem tem sensibilidade a movimento.
- [ ] O número da contagem corresponde à data de publicação.

## Para quem tem um pouco de intimidade com tecnologia: exportação exata e repetível

Use estes caminhos quando precisar de **muitos** cards (um por palestrante, um por dia de contagem) ou de tempo exato quadro a quadro, sem gravação de tela.

### Playwright + ffmpeg: o que usamos neste guia (testado)

O método abre o HTML num navegador invisível, **pausa todas as animações CSS e avança o relógio quadro a quadro**, tira uma captura de cada quadro e junta tudo num MP4 H.264. Nenhum quadro se perde, mesmo num computador lento.

**Testado em 21/10/2026**, no Linux, com Node.js 24, Playwright 1.64.1 e ffmpeg-static 5.3.0. Não foi preciso instalar o ffmpeg no sistema: o pacote npm `ffmpeg-static` já traz o seu. A renderização levou de 1 a 2,5 minutos por card de 12 segundos em 1080×1920, e os MP4 acima ficaram com 0,4 a 0,7 MB.

1. Instale uma versão LTS atual do [Node.js](https://nodejs.org) (usamos a 24).
2. Coloque o seu HTML e o nosso script [render-frames.mjs](/examples/render-frames.mjs) numa pasta vazia, abra um terminal nela e rode:

```bash
npm init -y
npm install playwright ffmpeg-static
npx playwright install chromium

# arquivo, segundos, nome de saída
node render-frames.mjs countdown.html 12 countdown
node render-frames.mjs "countdown.html?dias=14" 12 faltam-14
node render-frames.mjs quote.html 14 quote
```

Você recebe `countdown.mp4` (1080×1920, 24 fps, H.264, yuv420p) e um `countdown-preview.gif` pequeno. O coração do script é este laço:

```js
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => {
    for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; }
  }, (i * 1000) / fps);
  await page.screenshot({ path: `frames/frame-${String(i).padStart(4, '0')}.png` });
}
// depois: ffmpeg -framerate 24 -i frames/frame-%04d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an saida.mp4
```

> [!NOTE]
> Isso só funciona com animações feitas em **CSS (animation/transition) ou com a Web Animations API**, que é o que o Claude produz por padrão para esse tipo de card. Animações movidas por temporizadores de JavaScript ou por `<canvas>` não são pausadas por `document.getAnimations()`. Nesse caso, peça ao Claude para reescrever em CSS, ou use o OBS. E mais: `npx playwright install` baixa um navegador de mais de 100 MB e pode apagar versões antigas de navegadores do Playwright que considera sem uso. Versões recentes do npm podem mostrar um aviso sobre scripts de instalação. Se o `ffmpeg-static` ficar sem o binário, siga a sugestão do próprio npm (`npm install-scripts approve ffmpeg-static`) e reinstale.

Também testamos dois comandos da nossa pesquisa com o mesmo binário do `ffmpeg-static`:

```bash
# Montagem de stop-motion: 24 PNGs numerados a 8 poses/s, saída a 24 fps,
# segurando a última pose por mais 5 segundos (resultado: exatamente 8,0 s)
ffmpeg -framerate 8 -start_number 0 -i poses/frame-%04d.png \
  -vf "fps=24,tpad=stop_mode=clone:stop_duration=5" \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an animacao-papel.mp4

# Converter uma gravação de tela em WebM para MP4
ffmpeg -i gravacao.webm -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an reels-evento.mp4
```

(Dentro de um projeto Node, o binário fica em `node_modules/ffmpeg-static/ffmpeg`.) A gravação em tempo real do próprio Playwright (`recordVideo`) também funcionou, mas ela grava o carregamento da página e depende da velocidade da máquina. O método quadro a quadro dá um resultado mais limpo.

### Claude Code + Remotion: cards de palestrantes em lote

O [Remotion](https://www.remotion.dev/docs/ai) é uma ferramenta para criar vídeos com código e tem orientações oficiais para agentes de programação com IA, como o Claude Code. A renderização é feita quadro a quadro, então todos os cards saem com o mesmo tempo. **Licença:** grátis para pessoas físicas e organizações de até **3 pessoas**; a partir de 4, é preciso licença paga ([preços do Remotion](https://www.remotion.dev/docs/license/pricing)). Verifique o que conta como a sua "organização" antes de usar. **Não** executamos esse caminho para este guia; siga a [documentação atual do Remotion](https://www.remotion.dev/docs), porque os comandos mudam.

1. Instale o Node.js e o Claude Code pelas instruções oficiais e confira o plano/cobrança do Claude.
2. Crie o projeto (formato atual do exemplo inicial da documentação do Remotion):

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npx remotion skills add
npm run dev
```

3. Peça ao Claude Code, dentro dessa pasta:

```prompt
Neste projeto Remotion, crie uma composição SpeakerCard vertical, 1080×1920, 12 segundos a 30 fps. Use useCurrentFrame/interpolate para que cada quadro seja determinístico: sem Date.now(), sem temporizadores CSS de tempo real e sem aleatoriedade sem semente. Dados: o CSV em anexo com palestrantes aprovados (nome, cargo, título da palestra). Fotos: a pasta local que eu indicar; não busque imagens de pessoas na web. Visual de papel recortado com poses a 8 por segundo. Mantenha o nome visível por pelo menos 6 segundos. Primeiro renderize um exemplo com o nome e o título mais longos. Mostre onde mudar cores, texto, duração e foto. Entregue um MP4 e um quadro de capa.
```

4. Veja a prévia no Remotion Studio, ajuste primeiro o nome mais longo, renderize um MP4 de rascunho, confira no celular e só depois renderize os demais.

## Próximos passos

- Escreva as legendas que acompanham cada animação: [Copywriting com IA](copywriting.md).
- Crie versões estáticas e cartazes: [Receitas de prompts de imagem](image-prompts.md).
- Transforme gravações de palestras em cortes legendados: [Reels, cortes, legendas e dublagem](video-repurposing.md).
- Planeje qual contagem sai em qual dia: [Cronograma da campanha](campaign-timeline.md) e o [sprint de 6 semanas](conafroedu-sprint.md).
- Revise a representação em qualquer imagem ou vídeo: [Como representar culturas negras e africanas com respeito](representation-bias.md).
- Agende os MP4 prontos: [Ferramentas de agendamento e publicação](scheduling-tools.md).
