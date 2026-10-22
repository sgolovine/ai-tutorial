---
title: Representar culturas negras e africanas com respeito usando IA
description: Como as ferramentas de imagem com IA estereotipam pessoas negras e culturas africanas, por que isso pesa ainda mais num congresso de educação antirracista e um fluxo prático com fotos reais, artistas creditados, prompts cuidadosos e revisão humana.
order: 115
section: create
icon: ✊🏾
updated: 2026-10-21
---

O CONAFROEDU é um congresso nacional sobre **africanidades e educação antirracista**. O público é formado por professoras, pesquisadores e estudantes que estudam, ensinam e vivem essas questões todos os dias. Essas pessoas vão perceber na hora se uma peça de divulgação mostrar pessoas negras de forma estereotipada, misturar símbolos africanos sem relação entre si como enfeite ou colocar imagens sagradas num card de venda. Uma imagem assim não é só "feia". Ela contradiz a proposta do congresso e abala a confiança justamente de quem a comissão mais quer alcançar.

As ferramentas de imagem com IA aumentam esse risco. Elas aprendem com enormes coleções de imagens já existentes, e essas coleções carregam as mesmas hierarquias raciais que a educação antirracista procura desfazer.

**O que você vai encontrar nesta página:**

- O que as pesquisas dizem sobre como os modelos de imagem estereotipam, com as fontes.
- A ordem de preferência para as imagens: **primeiro pessoas reais com autorização e artistas negros brasileiros creditados**; a IA fica por último.
- Onde encontrar imagens autênticas e o que as licenças realmente permitem.
- Padrões de prompt que reduzem (sem eliminar) as falhas mais comuns.
- Como lidar com símbolos religiosos e culturais: candomblé, umbanda, orixás, adinkra, kente, ubuntu.
- Um checklist de revisão antes de publicar e orientações sobre transparência.

> [!IMPORTANT]
> Nenhum prompt elimina o viés. As salvaguardas desta página são **decisões humanas**: quem aparece, quem revisa, quem recebe o crédito e quem pode dizer "não, isso não vamos publicar". Use a IA como apoio, nunca como juíza.

## Por que isso pesa ainda mais no CONAFROEDU

- **As imagens fazem parte da mensagem.** Um congresso sobre ERER (Educação para as Relações Étnico-Raciais) que publica uma imagem estereotipada ensina o contrário do que está na programação.
- **O público é especialista.** Muitas pessoas inscritas pesquisam justamente a representação racial em livros didáticos, na mídia e na escola. Elas vão ler as imagens com olhar crítico.
- **As Leis 10.639/2003 e 11.645/2008** tornaram obrigatório o ensino de história e cultura afro-brasileira (e, desde 2008, indígena) nas escolas. O congresso faz parte desse esforço de trocar estereótipos por conhecimento.
- **O 20 de novembro**, Dia Nacional de Zumbi e da Consciência Negra (feriado nacional desde a Lei 14.759/2023), cai no meio da campanha. É quando uma imagem descuidada fica mais visível e machuca mais.

## O que as pesquisas mostram

Os estudos abaixo testaram modelos e versões específicos. Leia-os como **evidência de padrões, não como notas das ferramentas de hoje**. Nenhum modelo atual foi comprovado como "o melhor" ou livre de vieses para representar pessoas negras brasileiras.

| Estudo | O que encontrou | Atenção |
|---|---|---|
| Luccioni et al., [*Stable Bias*](https://arxiv.org/abs/2303.11408) (NeurIPS 2023) | O DALL·E 2 e o Stable Diffusion sub-representaram identidades marginalizadas em várias profissões | Modelos antigos; categorias dos EUA |
| AlDahoul, Rahwan e Zaki, [*Scientific Reports*](https://doi.org/10.1038/s41598-025-99623-3) (2025) | Rostos gerados por IA reforçaram estereótipos de gênero e **uniformizaram** rostos dentro de grupos raciais; vê-los mudou a percepção das pessoas **mesmo quando as imagens estavam rotuladas como IA** | O rótulo sozinho não desfaz o dano |
| Wilson, Ghosh e Caliskan, [AIES 2024](https://arxiv.org/abs/2508.17465) | O Stable Diffusion associou identidades estigmatizadas a determinados tons de pele; o SDXL produziu tons mais escuros e menor variação de tons de pele nas comparações do estudo | Trata de uniformização dos **tons de pele**, não da forma dos rostos; modelos antigos |
| Wang et al., [*Generative AI So White*](https://journals.sagepub.com/doi/10.1177/10755470261428542) (*Science Communication*, 2026) | Em 9.600 imagens de quatro modelos, a branquitude dominou não só em número, mas em **posição e significado**: quem está no centro, quem tem autoridade | Conte quem está no comando, não só quem aparece |
| Balestri, [*Neutral Prompts, Non-Neutral People*](https://arxiv.org/abs/2602.12133) (preprint de 2026) | Prompts neutros no GPT Image 1.5 e no Gemini 2.5 Flash Image geraram forte tendência a pele clara | São os antecessores dos modelos atuais do ChatGPT e do Gemini |
| [*Social stereotypes in AI text-to-image generation*](https://link.springer.com/article/10.1007/s43681-026-01146-8) (2026) | Midjourney 6.1, Stability Core e DALL·E 3 mostraram estereótipos de profissão, cultura e beleza; prompts mais detalhados reduziram, mas podiam piorar a fidelidade | O prompt ajuda, em parte |
| [*Bias beyond borders*](https://link.springer.com/article/10.1007/s43681-026-01066-7) (2026) | Prompts por nacionalidade, incluindo o Brasil, geraram estereótipos nacionais uniformizados | Só "brasileiro" não basta como instrução |
| Câmara e Silva, [UECE](https://revistas.uece.br/index.php/linguagememfoco/article/view/16028) (2025) | Buscas por beleza e cabelo nos bancos de imagens da Shutterstock, Getty Images e **Canva** privilegiaram mulheres brancas de cabelo liso | É **busca** em banco de imagens, não geração; fotos de banco também precisam de revisão |
| Sun et al., [VEAT](https://arxiv.org/abs/2601.00996) (preprint de 2026) | No modelo de vídeo Sora, prompts explícitos de "remoção de viés" reduziram algumas associações e pioraram outras | Escrever "diverso" pode sair pela culatra |
| Sant'Anna e Fumes, [IFSP/CONICT](https://congressos.ifsp.edu.br/conict/article/view/766) (2025) | Estudo brasileiro: geradores de imagem gratuitos produziram estereótipos raciais e de gênero a partir de descrições neutras | Estudo pequeno |
| Google, [problema nas imagens do Gemini](https://blog.google/products-and-platforms/products/gemini/gemini-image-generation-issue/) (2024) | Um ajuste automático de "diversidade" distorceu imagens históricas e culturais | Corrigir demais também é falhar |

**Perspectivas brasileiras.** O pesquisador **Tarcízio Silva** (*Racismo Algorítmico*, 2022; *Inteligência Artificial Generativa: discriminação e impactos sociais*) mostra que o viés vem de escolhas estruturais ao longo de todo o ciclo da IA, e não de um único prompt mal escrito ([perfil](https://tarciziosilva.com.br/blog/sobre/)). A reportagem de Karla Souza e Luana Miranda na [Revista Afirmativa](https://revistaafirmativa.com.br/ia-generativa-reforca-racismo-algoritmico-e-aprofunda-estigmas-na-representacao-de-pessoas-negras-no-brasil/) (maio de 2026) traz vozes brasileiras para esse debate. A lição para a comissão: pergunte **de quem é o conhecimento usado, quem tem autoridade na imagem, quem revisa e quem arca com o dano** se algo der errado.

## Dez falhas para observar

| Falha | Como aparece | O que fazer |
|---|---|---|
| **Colorismo** | Pessoas de pele mais clara em papéis de prestígio; pessoas retintas só como alunos carentes ou em situações de dificuldade | Revise a campanha inteira junta: quem ensina, lidera, pesquisa? Mostre pessoas negras retintas em papéis de autoridade e do dia a dia |
| **Cabelo e "embelezamento"** | Cachos afrouxados, tranças substituídas, linha do cabelo alterada, pele clareada em retratos "melhorados" | Use as fotos originais aprovadas; compare as edições lado a lado |
| **Rostos uniformizados** | Pessoas "diferentes" com o mesmo rosto, idade e corpo | Confira variação de idade, gênero, corpo, deficiência; rejeite clones |
| **"África" genérica** | Savana, animais, cabanas, máscaras, trajes "tribais" num evento de educação brasileiro | Especifique um contexto real: escola, biblioteca, universidade, sessão on-line no Brasil |
| **Colagem cultural** | Tecidos, escritas, máscaras e objetos religiosos sem relação misturados como "estética africana" | Cada elemento precisa de origem conhecida e de um motivo; senão, fica de fora |
| **Apagamento do conhecimento** | Pessoas negras como quem recebe; pessoas brancas como especialistas ou usuárias de tecnologia | Observe posição, tamanho, olhar, quem segura o microfone, quem explica |
| **Pobreza ou trauma como padrão** | Toda cena com pessoas negras mostra carência, escravidão ou resgate | Mostre estudo, criatividade, alegria, trabalho e vida cotidiana; use a história quando for realmente pertinente |
| **Falso registro** | Salas de aula, plateias ou palestrantes sintéticos que parecem prova real | Nunca use pessoas inventadas como prova social; identifique ilustrações com clareza |
| **Deriva no vídeo** | Pele, rosto, cabelo ou símbolos mudam entre um quadro e outro; a voz vira caricatura | Assista ao vídeo inteiro com som (veja [Geração de vídeo](video-generation.md)) |
| **Invenção histórica** | A IA inventa retrato, citação ou roupa de uma figura histórica e apresenta como acervo | Use fontes de arquivo verificadas; identifique o que é interpretação |

> [!CAUTION]
> Nunca use um modelo de IA ou ferramenta automática para "verificar" a raça, a religião ou a identidade quilombola de uma pessoa real a partir da aparência.

## Ordem de preferência: pessoas reais e artistas negros brasileiros primeiro

Escolha as imagens nesta ordem. Só desça na lista quando a opção de cima não estiver disponível.

1. **Fotos reais, com autorização**, de palestrantes e organizadores, finalizadas com ferramentas comuns de recorte e layout.
2. **Trabalhos de artistas, ilustradoras e fotógrafos negros brasileiros**, encomendados ou licenciados, e creditados.
3. **Imagens autênticas licenciadas**, com origem clara (veja a tabela de fontes abaixo).
4. **Tipografia e design geométrico simples**: muitas vezes a opção mais segura e mais elegante.
5. **Ilustração conceitual gerada por IA**, identificada com clareza e revisada com o checklist abaixo.

### Fotos reais com autorização

Peça a cada palestrante: o arquivo original da foto, o crédito que prefere para quem fotografou, uma legenda aprovada, onde a foto pode ser usada (Facebook, Instagram, WhatsApp, Even3) e **se ela pode ser enviada a uma ferramenta de IA**. A autorização para publicar um retrato não inclui automaticamente a autorização para enviá-lo a um serviço de IA.

### Como encontrar e contratar criativos negros brasileiros

| Caminho | O que verificamos | Como usar |
|---|---|---|
| [PretUX](https://www.pretux.com.br/) | Comunidade de profissionais negros em UX, design e tecnologia; a página ["Quero ajudar"](https://www.pretux.com.br/quero-ajudar/) oferece contratação por meio de um catálogo de designers negros | Use o formulário oficial; diga exatamente o que precisa (ilustração, letreiro, animação). Experiência em UX não é o mesmo que ilustração |
| PretADG / [ADG Brasil](https://adg.org.br/slider/slide-2/) | A página da iniciativa existe (2017) | Pergunte à ADG se há hoje um canal de indicação |
| Portfólios individuais brasileiros, como [Aline Bispo](https://alinebispo.art/perfil/) | Portfólio profissional; esse link sozinho não estabelece autodeclaração racial | Pesquise a obra e a biografia autorizada; não infira raça por nome, foto ou tema do trabalho. Disponibilidade e licença exigem acordo |

> [!WARNING]
> **Nunca peça à IA para imitar o estilo de um artista vivo** ("no estilo de [artista]"). Isso toma o trabalho da pessoa sem consentimento nem pagamento, que é exatamente o tipo de extração que a prática antirracista critica. Contrate a pessoa ou descreva um estilo próprio.

**Uma encomenda pequena e realista:** uma ilustração original (ou um tratamento de letreiro), mais dois recortes combinados e espaço para texto editável. Nada de "uma campanha inteira" sem escopo definido. Combinem por escrito: valor e data de pagamento, arquivos de entrega, edições permitidas, onde e por quanto tempo a obra pode ser usada, a linha de crédito e **se é permitido editar ou animar a obra com IA**. Se não houver orçamento, use imagens licenciadas ou tipografia. Visibilidade não é pagamento.

**Linhas de crédito (adapte ao que a/o artista aprovar):**

- `Ilustração: [nome] (@perfil), encomenda para o CONAFROEDU 2026; uso autorizado.`
- `Foto: [fotógrafa/o] / [acervo], [licença e link]; [alteração, se houver].`

Coloque o crédito na legenda ou visível na imagem, não apenas no texto alternativo.

## Fontes de imagens autênticas e o que as licenças permitem

A licença diz respeito ao *uso*; a autenticidade, a *quem e onde*. Uma pessoa negra num banco de imagens internacional não é prova de que seja brasileira, e nunca deve ser apresentada como participante ou palestrante do CONAFROEDU.

| Fonte | O que oferece | Podemos usar em divulgação? |
|---|---|---|
| **Fotos enviadas por palestrantes e educadores** | Pessoas brasileiras reais e o trabalho de que se fala | Sim, se as autorizações de quem fotografou e de quem aparece cobrirem esse uso |
| **[Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)** | Arquivos com origem documentada, como [Nilma Lino Gomes no Seminário Nacional de Educação Quilombola de 2010](https://commons.wikimedia.org/wiki/File:Nilmalino.jpg) (Eliza Fiúza/ABr, CC BY 3.0 Brasil) | Depende da licença de cada arquivo; a CC BY exige crédito, link da licença e indicação de alterações. Use só em contexto educativo com legenda precisa, sem sugerir que a pessoa é palestrante ou apoiadora |
| **[Nappy](https://nappy.co/license)** | Fotos gratuitas com foco em pessoas negras e pardas (acervo internacional) | Sim: CC0, uso comercial e edição permitidos. Sem sugerir endosso; sem uso degradante. Não é um acervo brasileiro |
| **[Pexels](https://www.pexels.com/license/)** | Fotos e vídeos gratuitos | Sim, uso promocional permitido; sem sugerir endosso. Não é especializado; as palavras-chave da busca não comprovam etnia nem nacionalidade |
| **[Brasil com S](https://www.brasilcoms.com.br/termosdeuso)** | Cenas e pessoas brasileiras reais | **Não.** O uso gratuito é só editorial, excluindo uso comercial e promocional, e a edição é proibida. Para produção sob medida, entre em contato com eles |

> [!NOTE]
> Não foi possível confirmar um "banco de imagens afro" como fornecedor específico com licença clara, nem os termos do AFROPIXEL para fotografia autêntica gratuita. Não use essas fontes até conferir os termos atuais. Licenças antigas da Agência Brasil também não cobrem todas as imagens atuais da EBC; confira arquivo por arquivo.

Mantenha um pequeno registro de cada imagem: `arquivo → autor/a → URL original → data do download → quem/o que aparece → licença → uso permitido → crédito exigido → edições permitidas → autorização de quem aparece → revisor/a`.

## Padrões de prompt que funcionam melhor

Quando uma ilustração com IA for realmente útil, estes padrões reduzem as falhas mais comuns. São rascunhos, não garantias: duas imagens boas não provam que um modelo é justo.

**Menor risco: tipografia e formas, sem pessoas**

```prompt
Crie um storyboard de 15 segundos para divulgar o CONAFROEDU 2026 a professoras e professores brasileiros. Use tipografia legível e movimento de formas geométricas simples. Fatos: 5 e 6 de dezembro de 2026; 100% on-line; inscrições na Even3. Não invente pessoas, falas, símbolos culturais, imagens de edições anteriores ou apoiadores. Deixe a carga horária e as condições de certificação para inserção após conferência da organização. Entregue o roteiro, a ordem das telas e uma lista dos fatos que precisam de revisão humana.
```

**Cena contemporânea com papéis, pele e cabelo definidos**

```prompt
Ilustração editorial contemporânea, sem aparência de fotografia documental. Três docentes negros brasileiros adultos discutem juntos um plano de aula de história e cultura afro-brasileira em uma escola brasileira atual. Uma professora de pele retinta apresenta o planejamento e um professor de pele castanha organiza as referências; a terceira docente faz perguntas e anota. Varie os traços faciais e os tons de pele, com iluminação que preserve seus detalhes. Inclua cabelo crespo curto, tranças e cabelo cacheado, desenhados com cuidado; são escolhas destes personagens, não uniformes de uma identidade. Roupas cotidianas, biblioteca e materiais escolares plausíveis, computador utilizado pelos próprios docentes. Composição horizontal com espaço para texto inserido depois. Sem cenário de resgate, pobreza como atalho visual, salvador branco, estampa "tribal" genérica, animal exótico ou objeto religioso. Não associe a cena a participantes reais do CONAFROEDU. Não gere letras, nomes ou logotipos.
```

Papéis específicos ("apresenta", "organiza") ajudam a manter a autoridade com as pessoas certas. Varie os papéis ao longo da campanha, em vez de repetir sempre a mesma hierarquia, e rejeite resultados que ainda clonem rostos ou desloquem a autoridade.

**Preservar a identidade de uma pessoa real: checklist de edição manual**

- Use o original aprovado num editor comum de recorte/layout, **sem geração por IA**.
- Ajuste recorte e exposição só como autorizado; compare lado a lado com o original.
- Preserve tom de pele, traços, cabelo, idade e marcas pessoais. Não use aprimoramento por IA, reconstrução ou embelezamento.
- Ponha o nome fora da foto e confira separadamente. Se outra tarefa propuser envio a uma IA externa, obtenha autorização específica antes.

**Sessão sobre uma cultura específica: consulte antes de desenhar**

```prompt
Precisamos divulgar uma mesa sobre [tradição/comunidade específica, confirmada pela pessoa convidada]. Antes de sugerir imagens, liste o que perguntar à pessoa responsável: quais termos usa, quais símbolos podem aparecer publicamente, quais referências ela autoriza e quais elementos não devem ser representados. Proponha primeiro uma composição com título, formas simples e retrato autorizado. Não invente orixás, rituais, grafismos, significados de adinkra ou uma "estética africana" genérica. Diferencie o que está confirmado do que depende de consulta.
```

**IA como apoio à revisão (nunca como quem aprova)**

```prompt
Analise esta peça como apoio à revisão: quem está no centro, quem ensina, quem escuta e quem usa a tecnologia? Há uniformização dos rostos, associação entre tom de pele e posição de autoridade, elementos culturais sem contexto ou aparência de registro documental? Liste dúvidas e possíveis problemas; não infira raça ou religião de pessoas reais e não declare a peça culturalmente correta. A aprovação é humana.
```

> [!TIP]
> Não basta acrescentar "diverso" ao prompt. Uma pesquisa com modelos de vídeo mostrou que palavras explícitas de "remoção de viés" podem reduzir alguns vieses e piorar outros. Descreva pessoas, papéis e contexto concretos e o que deve ser evitado, e depois **confira o resultado**.

## Símbolos religiosos e culturais: cuidado redobrado

Nesta revisão, não encontramos um benchmark controlado e robusto para avaliar a precisão dos modelos atuais com orixás, candomblé, umbanda ou adinkra. Não presuma precisão: consulte as pessoas detentoras desses saberes antes de representar elementos culturais específicos.

- **Candomblé e umbanda** são tradições religiosas distintas, não rótulos intercambiáveis nem um conjunto padronizado de imagens. Um congresso de africanidades não é um congresso religioso, e ser uma pessoa negra não diz nada sobre a religião de alguém. A [política nacional para povos e comunidades tradicionais de terreiro e de matriz africana](https://www.gov.br/igualdaderacial/pt-br/assuntos/programas-e-projetos/politica-nacional-para-povos-e-comunidades-tradicionais-de-terreiro-e-matriz-africana/politica-nacional-para-povos-e-comunidades-tradicionais-de-terreiro-e-matriz-africana) enfatiza o respeito a seus saberes, práticas e participação.
- **Orixás e objetos sagrados** nunca devem virar fundo decorativo, mascote ou imagem de venda. Se uma sessão específica precisar deles, consulte uma pessoa praticante adequada sobre nomes, atributos, contexto e o que não deve ser mostrado. Uma pessoa não fala por todos os terreiros. Evite tudo o que embranqueça, demonize, sexualize ou transforme figuras sagradas em personagens de fantasia. Não gere essas imagens com IA.
- **Os adinkra** são uma linguagem simbólica das tradições akan, de Gana, não um conjunto de "ícones africanos" genéricos ([Ministério da Cultura de Gana](https://www.motcca.gov.gh/traditional-symbols-in-ghana-adinkra/)). Confirme nome, forma e significado de cada símbolo; nunca deixe a IA inventar um símbolo e atribuir um significado a ele.
- **O kente** é um saber ganense de tecelagem em tiras, reconhecido pela [UNESCO](https://ich.unesco.org/en/RL/craftsmanship-of-traditional-woven-textile-kente-02130) em 2024. Nem todo zigue-zague colorido é kente, e ele não é "o tecido ancestral do Brasil".
- **Ubuntu** aparece na programação do CONAFROEDU. Peça à palestrante que aprove qualquer explicação ou citação; não use uma frase de efeito gerada por IA como resumo da filosofia africana.
- **As artes atuais do evento** usam motivos visuais africanos genéricos. Isso não autoriza inventar mais símbolos ou significados. Uma revisão visual futura pode aprimorá-las, sem fazer suposições sobre a intenção de quem as criou.
- **Negro, africano, afro-brasileiro, indígena e quilombola** não são identidades intercambiáveis. A Lei 11.645/2008 trata da história afro-brasileira *e* indígena; não misture as duas numa mesma imagem genérica.

> [!TIP]
> Na dúvida, use **tipografia e formas geométricas simples** com as cores da marca. É respeitoso, legível e rápido. Em vez de gerar "algo africano", mostre o conteúdo educativo de verdade.

## Como evitar os clichês de pobreza, salvador branco e exotismo

| Faça | Não faça |
|---|---|
| Parta de uma mensagem educativa real e de uma necessidade do público | Parta de "faça algo africano" e aceite o primeiro resultado |
| Use fotos autorizadas de palestrantes reais | Fabrique uma plateia realista ou uma "edição anterior" |
| Mostre educadores negros ensinando, pesquisando, liderando, usando tecnologia | Mostre pessoas negras só como alunos, assistidos ou em dificuldade |
| Mostre cenários brasileiros atuais: escolas, bibliotecas, universidades, sessões on-line, cidade e campo sem hierarquia | Use savana, cabana, animais ou máscaras como atalho para "África" |
| Mostre alegria, estudo, debate e vida cotidiana | Faça toda imagem girar em torno de sofrimento, escravidão ou resgate |
| Preserve tom de pele, traços e cabelo nas edições autorizadas | Chame clareamento ou alisamento de "deixar mais profissional" |
| Confira papéis e composição na campanha inteira | Achar que um rosto negro no canto de um grupo é inclusão |
| Use referências verificadas para qualquer símbolo ou tecido específico | Misture adinkra, kente, orixás e escritas inventadas como enfeite |
| Coloque o texto em português no Canva depois de gerar a imagem | Confie em letreiro gerado por IA para nomes, datas, leis, ISBN ou DOI |
| Rejeite um resultado que você não consegue revisar com segurança | Gere imagens sagradas de novo e de novo até "parecer certo" |

Para princípios mais amplos de narrativa, a organização africana Africa No Filter publica orientações contra o enquadramento do "salvador branco" e a favor da cocriação, do consentimento e do protagonismo ([narrativa ética](https://africanofilter.org/press-office/press-releases/new-handbook-outlines-how-to-write-about-africa-for-development-community/)). No Brasil, o [manual de comunicação antirracista da Rede JP/Peregum](https://redejpcomunicacao.org/manual-antirracista/) é uma referência profissional sobre representação racial.

## Checklist de revisão antes de publicar

**Não publique se algum item importante ficar sem resposta.** Este checklist vale para toda imagem *e* todo vídeo, com ou sem IA.

**Fatos e honestidade**

- [ ] A mensagem atende a um público real do congresso e corresponde à programação de fato.
- [ ] Todo nome, data, preço, número de lei e chamada para ação confere com a ficha de fatos aprovada.
- [ ] Nada sugere parceria, apoio institucional, edição anterior ou depoimento que não exista.
- [ ] Fotos e vozes de pessoas reais têm autorização para este uso; nenhum rosto ou voz foi clonado sem permissão.
- [ ] Pessoas geradas por IA aparecem claramente como ilustração, não como participantes ou palestrantes.

**Representação**

- [ ] Pessoas negras aparecem com protagonismo, saberes variados e destaque adequado.
- [ ] A pele retinta não aparece sistematicamente ligada a dificuldade ou a papéis subalternos.
- [ ] As edições não clarearam a pele, não mudaram traços do rosto nem alteraram a textura do cabelo.
- [ ] A iluminação preserva os detalhes da pele escura, sem embranquecer nem esconder rostos na sombra.
- [ ] Os cabelos são variados e plausíveis (crespo, cacheado, tranças, locs, curto, raspado, alisado por escolha). Nenhum estilo é tratado como "o" autêntico ou "o" profissional.
- [ ] Rostos, mãos, corpos, aparelhos, tecnologias assistivas e objetos parecem críveis; os rostos não são clones.
- [ ] O cenário é específico e adequado; nada de savana, cabana ou animais como atalho.
- [ ] Sem clichê de salvador branco ou de pobreza: educadores negros explicam, pesquisam, criam e usam tecnologia.

**Cultura e religião**

- [ ] Nenhum símbolo, roupa, escrita, palavra ou objeto religioso aparece sem motivo e fonte conhecidos.
- [ ] Material sagrado ou culturalmente específico foi revisado por praticantes ou detentores desses saberes.
- [ ] Identidades negras, africanas, afro-brasileiras, indígenas e quilombolas não foram tratadas como equivalentes.
- [ ] A interpretação histórica está claramente separada do registro documental.

**Produção**

- [ ] Os vídeos foram assistidos inteiros, com som: identidade, pele, cabelo, voz, símbolos e legendas se mantêm corretos do início ao fim.
- [ ] Nomes, acentos, pronúncia e legendas em português foram conferidos por uma pessoa.
- [ ] As informações essenciais também estão na legenda; o texto alternativo descreve o que se vê sem adivinhar a identidade de ninguém.
- [ ] Contraste, tamanho do texto e leitura no celular estão adequados.
- [ ] O uso de IA está sinalizado e os créditos de arte e foto estão claros.
- [ ] Autoria, URL de origem, licença, crédito exigido e autorização de quem aparece estão registrados.
- [ ] Uma **revisora ou revisor com nome definido**, com autoridade para pedir substituição, aprovou a versão final.

**Ordem prática de revisão:** (1) confira legenda e fatos; (2) examine a imagem em tamanho real; (3) compare qualquer retrato editado com o original, lado a lado; (4) olhe a **grade da campanha inteira** em busca de padrões de tom de pele e autoridade. Peça a uma educadora ou designer negra brasileira, com tempo combinado e poder real de decisão, que revise a representação, e a uma pessoa praticante da tradição em questão quando houver conteúdo religioso. Se uma dúvida não for resolvida, troque por uma foto aprovada ou por tipografia.

## Transparência e rótulos honestos

- **Regras da Meta:** a Meta rotula com "Informações de IA" o conteúdo que detecta como gerado por IA e **exige** que você use a ferramenta de divulgação em publicações orgânicas com vídeo fotorrealista ou áudio realista criado ou alterado digitalmente ([Meta](https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/)).
- **O aviso de vocês nas ilustrações:** *"Ilustração gerada com IA; não retrata participantes do evento."*
- **Avisar não conserta uma imagem ruim.** O estudo da *Scientific Reports* citado acima mostrou que rostos estereotipados gerados por IA influenciaram as pessoas mesmo com o rótulo de IA. O aviso é necessário, mas não é suficiente.
- **Texto alternativo:** descreva o que se vê ("Ilustração: três docentes conversam diante de um computador"); nunca adivinhe a raça, a religião ou a identidade de uma pessoa real.

## Quem decide

A salvaguarda mais importante é organizacional, não técnica. Dê a educadoras, designers e detentores de saberes negros, na comissão ou próximos a ela, **poder real de decisão**: essas pessoas precisam poder rejeitar uma imagem bonita, mas enganosa, sem ter de se justificar longamente. Não espere que colegas negros façam essa revisão como trabalho extra, invisível e não remunerado, e não trate uma pessoa como porta-voz de todas as comunidades. Registre quem faz a revisão em cada semana do [plano de 6 semanas](conafroedu-sprint.md).

## Próximos passos

- [Livro de receitas de prompts de imagem](image-prompts.md): prompts prontos que já incluem estes cuidados.
- [Geração de imagens](image-generation.md): ferramentas, custos, tamanhos e o fluxo "sem texto na imagem".
- [Geração de vídeo](video-generation.md): os mesmos princípios para imagens em movimento e vozes.
- [Kits de divulgação para palestrantes e parceiros](speaker-partner-kits.md): como obter fotos reais e aprovações de palestrantes.
- [Ética, políticas e LGPD](ethics-legal.md): consentimento, uso de imagem, direitos autorais e rótulos de IA.
