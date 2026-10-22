# Instalação, configuração e aprendizagem com IA — CONAFROEDU 2026

**Data da pesquisa e de acesso às fontes: 21/10/2026.** Público: educadores e voluntários brasileiros que já conversaram em chatgpt.com ou claude.ai, mas estão começando a usar outros recursos. Pesquisa documental em fontes oficiais; não houve teste com contas pagas nem instalação dos programas nesta tarefa. Não é uma garantia de que um recurso em liberação gradual já aparecerá em toda conta brasileira.

Este documento subsidia o guia bilíngue. Os exemplos estão em pt-BR. Os nomes de menus em inglês são os documentados pelo fornecedor; a tradução exibida pode variar. **[UNVERIFIED]** identifica informação que não foi estabelecida pelas fontes consultadas, ou um passo que ainda exige validação na interface. Não converter preços em dólares para reais e apresentar a conversão como preço oficial.

## 0. Decisões editoriais que evitam instruções desatualizadas

1. **Claude Skills já estão no Free.** O caminho atual de instalação é `Customize > Skills`; a execução de código fica em `Settings > Capabilities`. Não publicar apenas o antigo caminho `Settings > Capabilities > Skills`. [C04]
2. **Projects do Claude também estão no Free: até cinco.** A página de preços destaca Projects no Pro, mas o artigo específico de Projects confirma o acesso gratuito; usar a documentação específica para esse limite. [C01, C09]
3. **Claude in Chrome está em todos os planos pagos**, não apenas no Max. Controle da tela inteira, extensão de Chrome e ferramenta de API são produtos/capacidades diferentes. [C06–C08]
4. **Computer use no aplicativo Claude está em beta para Pro e Max, em Windows e macOS.** A documentação atual não o inclui em Team/Enterprise; não inferir que planos organizacionais necessariamente têm todos os recursos individuais. [C07]
5. **Claude Design, Docs e Slides estão nos artefatos, inclusive no Free. Claude Motion é beta de Team/Enterprise.** Escrever código de animação em uma conversa não equivale a ter o produto Claude Motion. [C13–C14]
6. **Atlas foi aposentado.** Não oferecer sua instalação como recomendação atual. **O antigo ChatGPT agent também foi descontinuado; o caminho atual é ChatGPT Work.** Os próprios artigos ainda contêm trechos antigos de `/agent`; tratá-los como legado. [O04–O06]
7. **Contas pessoais de ChatGPT não podem criar/publicar novos GPTs.** GPTs existentes têm regras de continuidade/edição e migração para Plugins; não recomendar pagar Plus apenas para criar um novo GPT. [O08]
8. **A documentação atual do Google usa “Gemini Notebook” para o produto antes chamado NotebookLM.** Há páginas antigas e URLs de NotebookLM ainda no ar; apresentar os dois nomes para o leitor se localizar. A entrada atual indicada na ajuda é `https://notebook.google.com/`. [G05–G09]
9. **Coursera substituiu a experiência geral de auditoria por prévia gratuita do primeiro módulo.** Não prometer um curso completo gratuito apenas porque o botão diz “Enroll for free”. edX ainda documenta auditoria gratuita, quando oferecida. [L10–L11]

## PARTE A — SETUP / INSTALAÇÃO

### A1. Um conjunto inicial sem custo para o comitê

**Recomendação editorial:** começar com um assistente gratuito, um projeto de campanha, Canva Free, Meta Business Suite e WhatsApp Business. Acrescentar NotebookLM/Gemini Notebook para consultar documentos aprovados. Instalar CapCut quando houver vídeo; OBS quando houver gravação de tela ou transmissão. Claude Code e Node.js são opcionais para quem for produzir animações por código.

Criar uma pasta `CONAFROEDU-2026` com anúncio oficial, informações públicas do Even3, logotipo autorizado, calendário e textos aprovados. Manter a planilha de inscritos em armazenamento separado e restrito. Usar como fatos de trabalho: **I CONAFROEDU; 5–6/12/2026; 100% online; submissões até 4/11; virada de lote em 16/11; programação até 25/11**. Conferir alterações diretamente com a organização. Não usar memória de IA como fonte desses prazos. Contexto local: [BRIEF](../BRIEF.md) e [pesquisa do evento](04-conafroedu-context.md).

### A2. Claude: planos e o que cada um permite

Preços web publicados em USD, sem impostos; preços nas lojas móveis podem diferir. Referência: [planos](https://claude.com/pricing) e [comparação oficial](https://support.claude.com/en/articles/11049762-choose-a-claude-plan). [C01–C02]

| Recurso | Free | Pro | Max 5x / Max 20x |
|---|---|---|---|
| Preço web | US$ 0 | US$ 20/mês; US$ 200/ano, equivalência anunciada de cerca de US$ 17/mês | US$ 100 / US$ 200 por mês |
| Web, desktop, iOS e Android | Sim, com limites | Sim; mais uso | Sim; 5x ou 20x a capacidade de sessão do Pro, não uso ilimitado |
| Projects | Até cinco | Mais capacidade e recuperação de conhecimento em projetos grandes | Incluído |
| Skills próprias e da Anthropic | Sim; execução de código habilitada | Sim | Sim |
| Connectors web | Sim; restrições por conector e modalidade | Sim | Sim |
| Claude in Chrome | Não | Sim; experiência Cowork do painel em liberação gradual | Sim |
| Computer use do desktop | Não | Beta em Mac/Windows | Beta em Mac/Windows |
| Cowork / tarefas com ações | Não incluído como plano de tarefas pago | Sim; interface unificada em implantação | Sim; interface unificada em implantação |
| Claude Code | Não por assinatura Free | Incluído, sujeito à franquia | Incluído, sujeito à franquia |
| Artefatos, Design, Docs e Slides | Sim | Sim | Sim |
| Design systems | Não listado no Free | Beta | Beta |
| Produto Claude Motion | Não | Não | Não; beta documentada para Team/Enterprise |

Fontes específicas de disponibilidade prevalecem sobre resumos comerciais: Skills [C04], Projects [C09], Chrome [C06], computer use [C07], Cowork [C08], artefatos [C13], Motion [C14]. **[UNVERIFIED]** Preço oficial uniforme do Claude em BRL: não encontrado; conferir moeda, impostos e periodicidade no checkout.

**Team:** assinatura por pessoa com administração e compartilhamento; a página consultada informa Standard a US$ 25/mês ou US$ 20/mês com cobrança anual, e Premium a US$ 125/mês ou US$ 100/mês anual. O cadastro exige pelo menos duas pessoas e e-mail empresarial do criador; um comitê só com Gmail precisa verificar essa exigência antes de escolher o plano. Skills podem ser compartilhadas ou publicadas na organização; arquivos não são automaticamente compartilhados só porque alguém os enviou à sua conta. [C01, C18]

#### A2.1 Instalar desktop e celular; colocar em português

**Windows / Mac:**

1. Abrir [claude.com/download](https://claude.com/download).
2. Selecionar **Windows** ou **macOS**, conforme o computador, e baixar o instalador oficial.
3. Abrir o arquivo baixado e seguir o assistente de instalação.
4. Abrir Claude pelo menu Iniciar, no Windows, ou pela pasta Aplicativos, no Mac.
5. Entrar com a mesma conta usada no navegador. O aplicativo não exige Pro apenas para conversar.
6. Requisitos no artigo atual: **Windows 10 ou posterior; macOS 13 ou posterior**. Há resultados antigos com requisito inferior de macOS; usar a página canônica atual. [C03]

**Android / iPhone / iPad:**

1. Usar os links de Android/iOS em [claude.com/download](https://claude.com/download), que levam à loja oficial.
2. Conferir que o aplicativo é da **Anthropic**, instalar e entrar na própria conta.
3. Permitir microfone/câmera apenas quando for usar voz/fotos. [C03, C17]

**Interface em português no navegador/desktop:** clicar no perfil no canto inferior esquerdo → **Language** → **Portuguese (Brazilian)**. A fonte atual documenta Language no menu de perfil; não exige inventar uma sequência por Settings. É possível escrever “Responda em português do Brasil” em qualquer idioma de interface. **Voz tem configuração separada:** `Settings > General > Voice > Language`. [C11]

#### A2.2 Claude in Chrome: instalação e permissões

Exige **Pro, Max, Team ou Enterprise**, Chrome de computador e conta Claude; a extensão não é suportada em outros navegadores Chromium nem no Chrome móvel. A integração com o aplicativo exige desktop conectado conforme a tarefa. [C06]

1. No Google Chrome, abrir o [guia oficial](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome) e seguir o link **Chrome Web Store** para a extensão oficial. Isso evita confundir extensões de terceiros com Claude.
2. Clicar **Add to Chrome / Usar no Chrome** e revisar a tela de permissões.
3. Entrar na conta Claude paga.
4. No ícone de quebra-cabeça do Chrome, fixar Claude com o alfinete.
5. Clicar no ícone Claude para abrir o painel lateral.
6. Começar por uma página pública; para revisar cada ação, usar **Manually approve** se a interface oferecer o seletor de modo. O novo painel Cowork inicia em **Automatically approve**, com checagens automáticas, não em aprovação manual de cada clique.
7. Para usar a partir do desktop: perfil → `Settings > Connectors > Claude in Chrome > Configure` → ativar; na conversa, habilitar o conector no menu de Connectors. Essa configuração é distinta de instalar a extensão. [C06]

As permissões documentadas incluem `debugger` (cliques, digitação e capturas), `scripting` (leitura de páginas), `tabs`/`tabGroups`, `downloads`, `nativeMessaging`, `storage`/`unlimitedStorage`, notificações, alarmes, navegação e painel lateral. A extensão pode ver o conteúdo da aba e trabalhar com sessões já autenticadas. Usar um perfil de Chrome dedicado à campanha; não abrir o painel sobre lista de inscritos, banco ou e-mail pessoal. [C06, C19]

#### A2.3 Ativar computer use — controle dos aplicativos do computador

**Situação atual:** beta de **Pro/Max**, no Claude Desktop para **macOS e Windows**; não documentado para Team/Enterprise. Precisa do computador acordado e do aplicativo aberto. Não há uma barreira isolando os cliques de seus aplicativos reais. [C07]

1. Atualizar ou instalar o Claude Desktop pelo site oficial.
2. Abrir `Settings > General`, na seção **Desktop app**.
3. Ativar **Enable computer use**.
4. Abrir **Cowork** ou **Claude Code** no aplicativo. Durante a unificação de chat/Cowork, algumas contas recebem uma caixa de conversa única; não procurar um botão Cowork que já não aparece.
5. Pedir uma tarefa pequena, por exemplo: “Abra este arquivo de teste e mostre como exportá-lo em PDF. Pare antes de sobrescrever qualquer arquivo.”
6. Aprovar o acesso ao aplicativo específico quando Claude pedir; conceder permissões do sistema operacional apenas ao que for necessário.
7. Observar a primeira execução e interromper se ele acessar algo fora da tarefa. [C07–C08]

No macOS 15+, a ajuda descreve operação em janelas de fundo; `Settings > General (Desktop app) > When Claude requests access to an app > Full control` muda o comportamento. **Não é necessário alterar isso para o primeiro teste.** A ferramenta **computer use da API** é outra rota, para desenvolvedores, com infraestrutura e cobrança próprias; não instruir iniciantes a procurar uma chave de API para ativar a beta do desktop. [C07, C16]

#### A2.4 Skills: o que são e como habilitar

Uma Skill é um pacote de instruções e, opcionalmente, referências, modelos e scripts para uma tarefa recorrente. Claude consulta sua descrição para decidir quando carregá-la. Não é um novo modelo nem uma conta de serviço. A Skill CONAFROEDU pode orientar legendas, revisão de datas, linguagem antirracista e checklist de publicação; não autoriza acesso ao Even3 nem publica sozinha. [C04–C05]

1. Em conta Free/Pro/Max, abrir `Settings > Capabilities` e ativar **Code execution and file creation** (também aparece como **Cloud code execution and file creation** em páginas recentes).
2. Abrir **Customize > Skills**.
3. Ativar/desativar as Skills desejadas.
4. Para adicionar a nossa: botão **+** → **+ Create skill** → **Upload a skill** → selecionar o `.zip` da pasta.
5. Confirmar que aparece na lista e ligar seu interruptor.
6. Iniciar uma conversa de teste e solicitar uma legenda do CONAFROEDU baseada nos fatos públicos anexados. Revisar o resultado antes de reutilizar. [C04]

Em Team, o recurso é habilitado por padrão na organização. Em Enterprise, o proprietário verifica `Organization settings > Plugins & skills > Policy` e habilita execução de código e Skills. A interface e a política administrativa podem impedir upload/compartilhamento. [C04]

#### A2.5 Especificação verificada para a Skill baixável do CONAFROEDU

**Destino:** upload no Claude para usuários comuns. **Entregável futuro:** `conafroedu-marketing.zip`. Não foi criado nem testado neste trabalho de pesquisa.

Há uma divergência oficial: o Help Center usa `skill.md`, admite nome de exibição com espaços e limita `description` a **200 caracteres**; a especificação aberta Agent Skills, vinculada pelo próprio Help Center, requer **`SKILL.md`**, nome slug e permite descrição de até **1.024 caracteres**. A documentação técnica da própria Anthropic também confirma **`SKILL.md`** em maiúsculas. Adotar esse nome canônico, nome slug igual à pasta e descrição com até 200 caracteres. Não distribuir dois arquivos que diferem só por maiúsculas: isso causa problemas em Windows/macOS. O upload do pacote final ainda precisa de teste real; a estrutura abaixo foi verificada documentalmente. [C05, C15, C22]

```text
conafroedu-marketing.zip
└── conafroedu-marketing/
    ├── SKILL.md
    ├── references/
    │   ├── fatos-do-evento.md
    │   └── linguagem-e-representacao.md
    └── assets/
        └── modelos-de-legenda.md
```

O ZIP contém **uma pasta de primeiro nível**, e dentro dela o arquivo principal; não colocar `SKILL.md` solto na raiz do ZIP nem uma pasta extra envolvendo a pasta da Skill. `references/`, `assets/` e `scripts/` são opcionais; não é necessário código executável para a versão inicial. [C05, C15]

Frontmatter mínimo e corpo sugerido:

```markdown
---
name: conafroedu-marketing
description: Cria e revisa materiais em pt-BR para o CONAFROEDU 2026. Use em legendas, calendários e divulgação orgânica, conferindo fatos e representação antirracista.
---

# Apoio à divulgação do CONAFROEDU

Leia references/fatos-do-evento.md antes de redigir.
Se faltar confirmação de prazo, valor ou regra, sinalize a pendência.
Peça canal, público e objetivo se isso mudar a resposta.
Entregue texto, chamada para ação, texto alternativo e itens a conferir.
Use references/linguagem-e-representacao.md na revisão.
Apresente um rascunho para revisão humana antes da publicação.
```

| Item | Regra de autoria / estado de verificação |
|---|---|
| Arquivo | Texto Markdown com frontmatter YAML delimitado por `---`; extensão `.md`, não `.txt` oculta |
| `name` | Obrigatório. Adotar 1–64 caracteres; minúsculas ASCII, números e hífens; sem hífen inicial/final ou `--`; igual à pasta. A documentação Anthropic também proíbe tags XML e as palavras reservadas `anthropic` e `claude` |
| `description` | Obrigatória, não vazia; explica função e quando usar; sem tags XML. Adotar ≤200 caracteres para compatibilidade com a ajuda do Claude |
| Campos extras | Não necessários. Agent Skills documenta `license`, `compatibility`, `metadata` e `allowed-tools` experimental; a ajuda Claude menciona `dependencies`. Evitar extras na primeira distribuição |
| Tamanho do corpo | A especificação recomenda manter `SKILL.md` abaixo de 500 linhas e carregar referências sob demanda; é recomendação, não limite de upload comprovado |
| ZIP, limite em MB | **[UNVERIFIED]** Os artigos consultados falam em exceder “size limits”, mas não publicam um número para o upload individual. Não reaproveitar limites de arquivos de chat, de API nem de plugins organizacionais |
| Quantidade de Skills | **[UNVERIFIED]** Não foi encontrado limite numérico atual para o total instalado/ativo no Claude pessoal |
| Tamanho proposto do pacote | Meta editorial: texto leve, idealmente <1 MB; não apresentar isso como limite oficial |
| Atualização de fatos | Registrar data de revisão, URL Even3 e campos ainda pendentes em `fatos-do-evento.md`; revalidar antes de cada campanha |
| Conteúdo privado | Nenhuma lista de inscritos, credencial, chave, telefone pessoal não publicado ou fotografia sem autorização |

Fontes do formato: [C05, C15, C22]. Usar C22 para estrutura/autoria: a página técnica de overview ainda contém trechos legados de disponibilidade e `Settings > Features`, que conflitam com a ajuda atual C04. Não reutilizar esses trechos para o tutorial de instalação.

**Empacotar sem terminal:** criar a pasta com esses arquivos → Windows: botão direito na pasta → **Compactar para arquivo ZIP** (em versões antigas, **Enviar para > Pasta compactada**); Mac: botão direito → **Comprimir “conafroedu-marketing”**. Abrir o ZIP e conferir a árvore antes de publicar. Os rótulos do sistema operacional variam por versão.

**Teste de aceitação antes de disponibilizar o download:** (a) validar YAML e contagem de caracteres; (b) conferir a árvore do ZIP; (c) fazer upload numa conta Free e habilitar execução de código; (d) testar um pedido que deveria ativá-la e outro sem relação; (e) testar dados faltantes/contraditórios, inclusive tentativa de inventar prazo prorrogado; (f) verificar português, links, revisão antirracista e ausência de dados privados; (g) registrar data, plano e resultado. Esses testes são pendência de lançamento, não verificação já realizada.

**Compartilhar em Team/Enterprise:** `Customize > Skills` → menu `...` da Skill criada → **Share** → escolher colegas → **Share**. O destinatário precisa habilitá-la; recebe acesso de uso, não de edição. Compartilhamento com grupos é de Enterprise, conforme política. Para biblioteca organizacional: abrir a Skill → **Publish to org**; pode haver revisão pelo proprietário. Políticas em `Organization settings > Plugins & skills > Policy`. No Free/Pro/Max, distribuir o ZIP para cada pessoa instalar na própria conta. [C04]

#### A2.6 Connectors: Google Drive, Gmail e Canva

Conectores são permissões para acessar serviços. Uma Skill fornece instruções; um conector fornece acesso. **Ligar um serviço pode permitir leitura e escrita**, conforme as capacidades e o consentimento concedido. [C10]

1. Abrir **Customize > Connectors** (Canva e algumas páginas ainda descrevem `Settings > Connectors`).
2. Clicar **+**, localizar **Google Drive**, **Gmail** ou **Canva**.
3. Ler capacidades e clicar **Connect** ou **Install**.
4. Entrar na conta correta do serviço e revisar o consentimento OAuth; não digitar senha na conversa com Claude.
5. Voltar ao chat: **+ > Connectors**, habilitar o serviço para a conversa quando necessário.
6. Fazer um teste com um arquivo público/de treinamento; depois revisar ou desconectar em **Customize > Connectors**. [C10]

Google Workspace connectors estão documentados para todos os usuários no Claude web/desktop. O Gmail atual pode pesquisar, redigir **e enviar** mensagens; a configuração padrão solicita aprovação antes de enviar/responder/encaminhar. Google Drive pode ler arquivos e realizar ações como compartilhar/mover/excluir, conforme permissões. Não ensinar que são conexões somente de leitura. Em Team/Enterprise, o proprietário precisa disponibilizá-las primeiro. [C12]

**Canva confirmado:** existe AI Connector oficial, inclusive para Canva Free/Education; funções específicas como Brand Templates dependem de plano elegível. A orientação Canva: `Settings > Connectors > Canva` → conectar → novo chat → configurações/Connectors → ativar Canva. Algumas telas Claude já usam Customize; anotar essa variação em capturas futuras. Assinar Claude Pro não concede automaticamente Canva Pro. [T02–T03]

#### A2.7 Projects e memória

**Criar o projeto da campanha:**

1. Acessar [claude.ai/projects](https://claude.ai/projects) → **+ New Project**.
2. Dar nome `CONAFROEDU 2026 — divulgação` e descrição organizacional.
3. Na área de conhecimento do projeto, clicar **+** e enviar arquivos públicos aprovados.
4. Clicar **Set project instructions** → escrever regras de tom, idioma e checagem → **Save instructions**.
5. Abrir as conversas da campanha dentro do projeto. Colocar fatos essenciais nos arquivos/instruções: nome e descrição do projeto não substituem instruções que Claude efetivamente recebe.
6. Em Team/Enterprise, revisar visibilidade e **Share project** antes de convidar pessoas. [C09]

**Memória:** a experiência atual usa `Settings > Memory > Generate memory from chats`; está ligada por padrão em contas individuais, segundo a ajuda atual. Em **Topics**, revisar e apagar informações lembradas. Não ativar **Include sensitive topics in memory** para a campanha. Em projeto, desativar **Use account memory** para maior separação do contexto; antes da primeira mensagem, **+ > Memory** permite desligar memória para aquela conversa. Contas legadas podem ter memória em `Settings > Capabilities`; confirmar qual experiência está visível. Memória, compartilhamento, retenção e uso para treinamento são controles diferentes. [C09, C20]

#### A2.8 Claude Code para quem não programa

**Rota inicial recomendada:** instalar Claude Desktop → entrar numa conta **Pro/Max** (ou organização elegível) → abrir a aba **Code** → selecionar uma pasta de trabalho de teste → pedir instruções passo a passo. Evitar começar pela pasta inteira Documentos. O desktop já oferece interface para Claude Code; não é obrigatório instalar Node.js para o instalador nativo do Claude Code. [C03, C16]

**CLI opcional, copiando somente a linha do seu sistema:**

1. Mac: abrir **Terminal** pelo Spotlight e executar:

   ```sh
   curl -fsSL https://claude.ai/install.sh | bash
   ```

2. Windows: abrir **PowerShell** pelo menu Iniciar e executar:

   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```

3. Fechar e reabrir o terminal; executar `claude --version` para conferir a instalação.
4. Entrar na pasta de teste com `cd`, executar `claude` e seguir o login no navegador com a conta elegível.
5. Escolher a assinatura Claude quando essa for a intenção; login por Console/API tem cobrança separada. Não colar comandos de terceiros nem chaves na conversa.

A documentação CLI atual recomenda Git for Windows para a ferramenta Bash, mas informa uso de PowerShell quando Git não estiver instalado. Algumas páginas de desktop mais antigas ainda exigem Git for Windows: se a aba Code pedir, instalar pelo link oficial e reiniciar o aplicativo. Assinaturas Pro/Max incluem uso limitado; Console/API é alternativa paga por consumo. [C16–C17]

#### A2.9 Design e Motion: caminho correto

- **Design:** pedir um design em qualquer conversa, escolher **Output > Design** ou abrir **Artifacts** e um template. Revisar textos e elementos na área de edição. Está disponível no Free, embora sistemas de design sejam beta paga. A versão independente em `claude.ai/design` tem encerramento anunciado para **14/12/2026**; orientar novos usuários pelo Claude principal. [C13, C21]
- **Motion:** em Team/Enterprise, pedir uma animação ou escolher **Output > Motion** / template Motion em Artifacts → revisar → **Export > MP4**. Enterprise: proprietário habilita em `Organization settings > Artifacts`. É animação de texto, formas, gráficos e imagens por código, não filmagem fotorrealista de pessoas. [C14]
- **Alternativa de baixo custo:** pedir roteiro e código SVG/HTML/JS ou Remotion e renderizar com ajuda de alguém responsável pelo código. Essa rota não ganha automaticamente o botão MP4 do Claude Motion. Node/OBS aparecem abaixo para apoiar esse fluxo. [C13–C14; recomendação editorial]

### A3. ChatGPT: planos, aplicativo e configuração

#### A3.1 Planos e preços

| Plano | Preço de referência publicado | Aplicação para esta equipe |
|---|---|---|
| Free | R$ 0 | Conversa, pesquisa/ferramentas com limites, Study, projetos e voz conforme disponibilidade; bom ponto de partida |
| Go | Referência EUA: US$ 8/mês; App Store Brasil lista **R$ 39,90** | Amplia limites de arquivos/imagens/análise e memória. Não comprar supondo acesso a todo recurso de Plus/Work |
| Plus | Web: **US$ 20/mês**; App Store Brasil lista **R$ 99,90** | Mais acesso a modelos, raciocínio, arquivos e pesquisa; Work para contas elegíveis |
| Pro | Ajuda atual: **US$ 100, US$ 200 ou US$ 500/mês**, com franquias diferentes | Excesso para um comitê pequeno salvo necessidade comprovada; não descrever Pro como um único plano de US$ 200 |

Fontes: Go [O01], Plus [O02], Pro [O03], App Store oficial [O15]. Os valores BRL acima são **itens de compra da loja brasileira**, não garantia de preço do checkout web ou Google Play. A loja também lista “Pro 5x” a **R$ 524,90** e “Pro 20x” a **R$ 999,90**; **[UNVERIFIED]** correspondência exata desses rótulos com os novos tiers Pro 100/200/500. Não chamar qualquer item avulso da lista de preço mensal sem confirmar a periodicidade na tela de assinatura. Há ainda outro item Plus de R$ 999,90 na loja; não o confundir com o preço mensal.

Para verificar antes de pagar: entrar na própria conta → perfil → **Upgrade plan / Fazer upgrade do plano** → comparar valor, moeda, período e impostos. Gerenciamento: `Settings > Account`. API é serviço distinto. Limites de mensagens/ferramentas mudam; não prometer uso ilimitado de imagens, arquivos, Work ou voz. [O01–O03]

#### A3.2 Instalar desktop e celular; Atlas

1. Abrir [chatgpt.com/download](https://chatgpt.com/download/).
2. Escolher Mac ou Windows, baixar e seguir o instalador oficial; no Mac, abrir o arquivo e colocar o aplicativo em Aplicativos se solicitado.
3. Abrir e entrar na mesma conta do navegador. O novo aplicativo combina **Chat, Work e Codex**; não confundir com o antigo **ChatGPT Classic**.
4. Mac: artigo atual informa **macOS 14+**, Intel ou Apple Silicon. **[UNVERIFIED]** requisitos mínimos exatos do novo app Windows: conferir no download antes de instalar, sem transplantar os requisitos do antigo app Microsoft Store.
5. No celular, usar os links oficiais de iOS/Android da página de download e conferir o desenvolvedor OpenAI. [O07]

**Atlas:** encerrado, sem atualizações, conforme ajuda atual. Não instalar. Quem já o usou deve consultar a [orientação de aposentadoria](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement); dados de navegador e conversas ChatGPT não são a mesma coisa. [O04]

#### A3.3 Antigo agent mode e atual ChatGPT Work

O artigo de ChatGPT agent começa informando que ele **não está mais disponível**, embora preserve passos de `/agent` e limites históricos. Não transformá-los em tutorial vigente. [O05]

**Caminho atual documentado:**

1. Atualizar o aplicativo oficial ou usar ChatGPT web com conta elegível.
2. No desktop: menu superior esquerdo → **ChatGPT** → seletor **Work** no topo. Na web/celular, escolher **Work** quando disponível.
3. Descrever uma tarefa com resultado claro, fontes e limites: “Compare estes três guias oficiais e prepare um checklist de publicação; mostre as fontes e entregue um rascunho”.
4. Conectar arquivos/apps somente se a tarefa precisar. Para ações que afetem contas, revisar as permissões na tela.
5. Acompanhar, corrigir e revisar o material final. Work pode produzir documentos/apresentações e usar navegador em fluxos suportados. [O06]

Work na web/mobile é documentado para planos pagos elegíveis; Plus/Pro são os caminhos pessoais de referência. O aplicativo pode oferecer acesso mais limitado a Free/Go conforme plano/liberação; **[UNVERIFIED]** a franquia exata e a disponibilidade completa de Work para cada conta Free/Go brasileira. Não publicar os antigos “40/400 agentes por mês” como limites de Work: o uso segue uma estrutura compartilhada com Codex e pode usar créditos. [O01, O06]

#### A3.4 Projects e GPTs personalizados

**Projeto da campanha:**

1. Na barra lateral, selecionar **New project / Novo projeto**.
2. Dar nome, escolher aparência e criar.
3. Usar **Add files / Adicionar arquivos** para documentos públicos aprovados.
4. Menu `...` do projeto → **Project settings / Configurações do projeto** → instruções: idioma, tom, fontes e necessidade de confirmar prazos.
5. Selecionar memória **Project-only** se disponível e desejada. Conferir participantes e permissões antes de compartilhar o projeto.
6. Abrir novas conversas dentro dele para trabalhar com esse contexto. Projects estão disponíveis para usuários conectados, com limites e compartilhamento por plano/configuração. [O09]

**GPTs:** novas criações/publicações não estão disponíveis nas contas pessoais Free/Go/Plus/Pro. Contas Business/Enterprise/Edu com permissão ainda usam `Explore GPTs > Create`, configuram instruções/conhecimento/capacidades e testam em Preview. GPTs existentes podem continuar utilizáveis/editáveis conforme regras. A ajuda anuncia migração para **Plugins**, com aposentadoria planejada para workspaces Enterprise afetados em **11/12/2026**, e possível acompanhamento de outros planos conforme aviso da conta. Para a equipe, preferir Projects/instruções e verificar Plugins em vez de planejar uma distribuição baseada em novo GPT pessoal. [O08]

#### A3.5 Memória, apps/plugins e voz

**Memória:** `Settings > Personalization > Memory`. Os controles podem se chamar **Memory**, **Reference saved memories**, **Reference chat history**, **Memory summary**, **Manage** ou **Saved memories**, conforme experiência. Revisar o que foi salvo e remover itens desnecessários. Desligar memória não apaga o histórico; apagar o chat não necessariamente apaga a memória separada. Em chat temporário, verificar a opção **Unpersonalized** se não quiser usar personalização existente. [O10]

**Conectar apps:**

1. Abrir `Settings > Plugins` (algumas interfaces ainda mostram **Apps**).
2. Selecionar o app/plugin oficial, como Google Drive ou Canva, e instalar/conectar quando elegível.
3. Autorizar a própria conta no provedor, lendo permissões.
4. Chamar pelo `@` ou por **+ > More**, conforme a interface; pedir uma ação de teste.
5. Revisar/desconectar em Settings. Diretório acessível não significa que todas as extensões, apps e ações estejam incluídas em Free/Go. [O11–O12]

**Voz:** abrir o ícone de voz/ondas na conversa, autorizar microfone e dizer “Vamos conversar em português do Brasil”. Se detectar o idioma errado, abrir **Settings > Voice > Language** e escolher português. Em **Settings > Voice**, selecionar Standard/Advanced/Live entre as opções disponíveis. Live não oferece vídeo/compartilhamento de tela; essas funções continuam no Advanced móvel para assinantes elegíveis. Para Work na web/mobile, selecionar Work e depois Voice; na área desktop, selecionar Work/Codex e depois Voice. Usar texto se um app não funcionar em voz. Franquias e disponibilidade variam; não prometer minutos ilimitados. As permissões de envio/ação continuam valendo durante a fala. [O06, O13]

**Study / Modo estudo:** ver B1; é gratuito e não exige instalar um GPT ou plugin de terceiros. [O14]

### A4. Google: Gemini, Gems, Chrome, NotebookLM e AI Studio

#### A4.1 Gemini e planos no Brasil

| Plano | Preço BRL publicado em 21/10/2026 | O que distinguir |
|---|---|---|
| Sem custo | R$ 0 | Gemini, Live, Canvas, Gems e outros recursos com limites; armazenamento padrão de 15 GB da conta |
| Google AI Plus | **R$ 24,99/mês** | Brasil incluído; mais acesso a recursos de IA, Gemini Notebook e armazenamento; página atual anuncia 400 GB |
| Google AI Pro | **R$ 96,99/mês** | Brasil incluído; limites maiores, recursos adicionais e 5 TB na página atual; conferir pacote/condições no checkout |

Valores da [página brasileira do Gemini](https://gemini.google/br/subscriptions/?hl=pt-BR), não conversões cambiais. Google One também apresenta planos no Brasil. Promoções, ofertas estudantis e teste grátis têm elegibilidade própria; não tratar como plano gratuito permanente. Assinatura pessoal Google AI e licença institucional Workspace for Education são diferentes. [G01–G02]

**Começar:**

1. Abrir [gemini.google.com](https://gemini.google.com/) e entrar na própria Conta Google.
2. Para celular, seguir os links Android/iOS do [site oficial](https://gemini.google/br/about/?hl=pt-BR); instalar o aplicativo Google Gemini e entrar.
3. Usar português na conversa; verificar as restrições do administrador em conta escolar.
4. Antes de anexar documentos, ajustar a atividade conforme A7.
5. Para pagar, usar a opção de upgrade na conta e conferir o valor final. Começar pelo gratuito basta para praticar prompts/Gems. [G01, G03]

#### A4.2 Criar um Gem

1. No computador, abrir Gemini e entrar.
2. Na lateral, clicar **Gems** → **Novo Gem**.
3. Dar nome, por exemplo `Revisor CONAFROEDU`, e inserir instruções específicas.
4. Adicionar arquivos de conhecimento públicos se necessário; testar a resposta na prévia.
5. Clicar **Salvar**. O Gem criado na web aparece também nas superfícies compatíveis do app.

Gems personalizados não exigem Google AI Pro por regra geral. O uso depende de idade/conta/políticas. **Gems não funcionam com Gemini Live**, segundo a ajuda consultada. Anexar arquivos do Drive ao conhecimento pode exigir **Atividade nos apps do Gemini** ligada e conexão Workspace; para manter atividade desligada, preferir upload local do documento público quando suportado. [G03]

#### A4.3 Gemini no Chrome

Disponível no **Brasil para adultos elegíveis**, em português, com implantação gradual. A documentação atual inclui Mac, Windows e Chromebook Plus; não ensinar como se ainda fosse exclusivo dos EUA/inglês ou obrigatoriamente pago. [G04]

1. Atualizar o Google Chrome.
2. Entrar no Chrome com a Conta Google elegível; não usar janela anônima.
3. Conferir idioma do dispositivo/Chrome e restrições do administrador escolar.
4. Clicar **Peça ao Gemini** no topo do navegador quando o recurso aparecer e seguir a ativação. A aba atual é compartilhada por padrão; revisar quais abas estão sendo usadas. Para mudar: **Chrome > Configurações > Inovações de IA > Gemini no Chrome > Compartilhar a guia atual por padrão**.
5. Pedir ajuda sobre aquela página e revisar antes de qualquer ação.
6. Se não aparecer, conferir a [disponibilidade oficial](https://support.google.com/gemini/answer/17140089?hl=pt-BR) e usar gemini.google.com enquanto aguarda.

É uma integração do Chrome; não procurar extensão de terceiros para “desbloquear Gemini”. O atalho `@gemini` na barra de endereço apenas abre a consulta no web app e não equivale ao painel que lê a página. [G04, G12]

#### A4.4 NotebookLM / Gemini Notebook: fontes e limites gratuitos

O Help Center de NotebookLM agora descreve **Gemini Notebook** e aponta para [notebook.google.com](https://notebook.google.com/). URLs legadas como [notebooklm.google.com](https://notebooklm.google.com/) ainda ajudam a localizar o produto; conferir o destino apresentado pelo Google. Usar o nome duplo durante a transição. [G05]

**Limites padrão gratuitos documentados**, sujeitos a mudança:

| Item | Limite |
|---|---|
| Notebooks | 100 por usuário |
| Fontes | 50 por notebook |
| Fonte individual | Até 500 mil palavras; arquivo enviado até 200 MB |
| Perguntas no chat | 50/dia |
| Resumos em Áudio | 3/dia |
| Resumos em Vídeo | 3/dia |
| Relatórios / cartões / testes / mapas mentais | 10/dia de cada categoria |
| Deep Research | 10/mês |

A tabela atual diferencia Standard, Plus, Pro e Ultra; não dizer que “Plus” e “Pro” têm o mesmo limite. O artigo de upgrade atual prevalece sobre artigos antigos de recursos Pro. [G05–G06]

**Criar o notebook de campanha e adicionar fontes:**

1. Entrar no site oficial com a própria Conta Google e criar um notebook.
2. Nomear `CONAFROEDU — documentos públicos aprovados`.
3. Selecionar **Adicionar fontes** no painel esquerdo.
4. Escolher arquivo local (PDF/texto e demais formatos aceitos), Drive, URL de site, texto copiado ou URL pública do YouTube.
5. Para o site Even3, tentar a URL e conferir se o texto importado contém todas as datas. Se a página dinâmica não for importada corretamente, usar documento público autorizado com o texto e a URL/data de conferência.
6. Para YouTube, usar vídeo **público com legendas/transcrição**; a importação usa a transcrição, não toda a informação visual. Vídeos muito novos (menos de 72 horas) podem falhar.
7. Clicar na fonte e ler o conteúdo efetivamente importado. Selecionar fontes pertinentes antes de perguntar.
8. Nas respostas, abrir a citação e comparar com o trecho original. [G05]

URLs HTML importam texto daquela página, não todo o site, imagens ou vídeos incorporados; páginas com paywall não são aceitas por essa rota. Fontes de Drive têm sincronização na experiência atual, mas sites/PDFs não devem ser presumidos atualizados automaticamente. Conferir datas antes de usar informações em campanha. [G05]

**Português:** engrenagem **Configurações > Idioma de saída > Português (Brasil)**. No painel **Estúdio**, gerar Resumo em Áudio/Resumo em Vídeo, personalizar idioma, escopo e formato e então gerar. **pt-BR está listado para áudio e vídeo**; não repetir a antiga restrição “Video Overviews só em inglês”. Recursos do app móvel podem chegar depois da web. [G07–G09]

#### A4.5 Google AI Studio gratuito

1. Abrir [aistudio.google.com](https://aistudio.google.com/) e entrar com Conta Google elegível.
2. Ler/aceitar os termos e conferir se o projeto/modelo está no **Free tier**.
3. Abrir uma conversa de teste e usar somente informações públicas/fictícias.
4. Testar o prompt, observando o limite indicado para o modelo.
5. Não vincular chave/projeto pago para “experimentar grátis” sem compreender cobrança e quotas. **Dashboard > Usage** mostra uso; recursos pagos e alguns modelos exigem faturamento separado.

AI Studio oferece acesso gratuito limitado e é mais técnico que o app Gemini. **O opt-out de atividade do app Gemini não se aplica automaticamente ao AI Studio/API.** Para serviços não pagos, os termos permitem uso de entradas/saídas para melhorar produtos e revisão humana; não enviar dados de inscritos. Disponibilidade regional/idade e acesso de contas institucionais seguem as regras do serviço. [G10–G11]

### A5. Meta: Business Suite, WhatsApp Business e Meta AI

#### A5.1 Meta Business Suite: computador e celular

É a central de administração de Página Facebook e Instagram: publicações, calendário, caixa de entrada e resultados, conforme permissões. O acesso básico é gratuito; anúncios continuam sendo uma operação paga separada. [M01–M03]

1. No computador, abrir [business.facebook.com](https://business.facebook.com/) em navegador e entrar com o **perfil pessoal próprio** que tem acesso à Página/portfólio.
2. Selecionar a Página/empresa correta no seletor de ativos. A conta do Instagram deve estar corretamente conectada para gerenciá-la no mesmo lugar.
3. No celular, instalar **Meta Business Suite**, da Meta, pelos links oficiais de [Google Play](https://play.google.com/store/apps/details?id=com.facebook.pages.app) ou [App Store](https://apps.apple.com/br/app/meta-business-suite/id514643583).
4. Entrar com a mesma identidade e conferir a Página antes de publicar.
5. No desktop, preferir a versão web. **[UNVERIFIED]** um aplicativo nativo independente de Business Suite para Windows/macOS: não encontrado; não mandar baixar “Business Suite para PC” de sites de terceiros. Uma página da App Store com parâmetro `platform=mac` não comprova aplicativo macOS nativo.

**Delegação sem compartilhar senha:** quem tem controle total deve dar acesso individual. A ajuda distingue **Facebook access** (controle total/parcial) de **task access** (tarefas por ferramentas como Business Suite). [M03]

1. Como administrador, alternar para a Página no Facebook.
2. Abrir configurações da Página e a área **Page access / Acesso à Página**.
3. Adicionar a pessoa com a modalidade adequada, selecionando apenas tarefas necessárias, como conteúdo ou mensagens.
4. A pessoa aceita o convite na própria conta e testa o acesso no Business Suite.
5. Remover o acesso ao encerrar sua participação. Dar controle total somente a responsáveis permanentes.

**[UNVERIFIED]** sequência intermediária exata dos menus da interface brasileira atual (incluindo eventual `Configuração da Página` e `Settings > People` de portfólios): a ajuda acessível confirma os tipos de acesso, mas o passo a passo de portfólio não foi recuperado integralmente. Validar numa conta administradora antes de produzir capturas. Não resolver essa pendência distribuindo uma senha comum. [M03]

#### A5.2 WhatsApp Business: instalar e migrar número

Aplicativo gratuito para download em Android/iPhone. “WhatsApp Business Platform/API” é outro produto, com configuração e preços próprios. É possível manter Messenger e Business no mesmo aparelho **com números diferentes**; o mesmo número não opera simultaneamente como duas contas independentes nos dois aplicativos. [M04]

1. Escolher um número institucional que a organização controla e consegue verificar por SMS/ligação.
2. Se for migrar o número usado no Messenger, atualizar o WhatsApp e fazer **backup** antes de começar. Garantir senha/chave de backup criptografado quando aplicável.
3. Baixar **WhatsApp Business**, da WhatsApp/Meta, pela [página oficial](https://www.whatsapp.com/business/) ou pela loja oficial do aparelho.
4. Abrir e aceitar os termos.
5. Confirmar o número detectado ou escolher **Usar outro número**.
6. Verificar o número e seguir a transferência/restauração de conversas e mídia quando oferecida; não apagar a instalação/backup anterior antes de conferir o resultado.
7. Dar nome correto ao perfil e configurar categoria, descrição e horário da organização.
8. Criar respostas rápidas e mensagem de ausência com informações aprovadas; ativar segurança em duas etapas e revisar aparelhos conectados. [M04–M05]

A migração documentada é entre os apps; **não pressupor que uma troca simultânea de Android para iPhone restaura um backup de Google Drive no iCloud**. Para troca de sistema, consultar o procedimento oficial específico. Conferir se a transferência preservou o histórico necessário antes de desativar o número antigo. [M05]

#### A5.3 Meta AI no WhatsApp no Brasil

Brasil e português são suportados. Não é preciso instalar uma extensão nem conversar com um número desconhecido que se apresenta como “suporte Meta AI”. [M06–M07]

1. Atualizar o WhatsApp pela loja oficial.
2. Tocar no círculo/entrada **Meta AI** quando aparecer na busca/lista de conversas.
3. Pedir em português: “Sugira três chamadas de até 100 caracteres para um congresso online de educação antirracista. Não invente dados”.
4. Nos grupos, a menção `@Meta AI` pode chamar a IA; evitar inserir informações do grupo/participantes sem necessidade.
5. Se não aparecer, consultar a ajuda: a Meta mantém implantação gradual e a presença em um país não garante acesso em toda conta/versão. Não prometer que aparecerá no WhatsApp Business de todos. [M06–M08]

Não tratar um chat comum com a IA como tendo automaticamente as mesmas garantias de uma conversa pessoal entre duas pessoas. Há modalidade anônima documentada, com disponibilidade variável; não usá-la como justificativa para processar cadastros do evento. [M08]

### A6. Ferramentas de apoio: instalação e gratuidade

#### A6.1 Canva

1. Abrir [canva.com](https://www.canva.com/) e criar conta/entrar.
2. Começar com **Canva Free**; escolher formato de post/carrossel e usar apenas elementos gratuitos/licenciados para o uso pretendido.
3. Criar uma pasta da campanha e duplicar um modelo aprovado; conferir prévia de exportação para identificar elementos pagos.
4. Se desejar aplicativo, usar os downloads do próprio Canva ou as lojas oficiais. O navegador basta para começar.

**Canva Educação:** gratuito no mundo todo para professores e instituições elegíveis de educação básica e seus alunos. Não basta organizar um congresso educacional: o professor precisa estar em exercício e apresentar a comprovação solicitada. Ensino superior não é automaticamente elegível; Canva for Campus é uma oferta distinta. Acessar [elegibilidade no Brasil](https://www.canva.com/pt_br/educacao/elegibilidade/) → verificação → conta institucional/documentos → aguardar aprovação. Não pressupor que licença educacional autoriza qualquer uso comercial/promocional: conferir os termos dos elementos e do plano. [T01]

**Canva Nonprofits:** requer entidade beneficente sem fins lucrativos formalmente registrada, elegível no país e aprovada por verificação (Goodstack na documentação atual). Um coletivo informal de voluntários não é automaticamente elegível; “evento sem verba de anúncios” também não comprova elegibilidade. Abrir [diretrizes](https://www.canva.com/nonprofits/eligibility-guidelines/) e solicitar com os documentos da entidade quando aplicável. [T04]

#### A6.2 CapCut

1. Abrir [capcut.com](https://www.capcut.com/) ou o [centro oficial de instalação](https://www.capcut.com/help/download-and-install).
2. No computador, escolher download **Windows/Mac**, abrir o instalador e seguir os passos; no celular, usar Google Play/App Store vinculadas pelo site.
3. Criar um projeto de teste; importar um vídeo autorizado; cortar, reorganizar, inserir texto e exportar.
4. Verificar se há selo **Pro** nos recursos/elementos usados e se a exportação exige assinatura antes de investir tempo no projeto.

A versão gratuita oferece ferramentas essenciais de edição, efeitos e modelos. **[UNVERIFIED]** cotas uniformes de legendas automáticas/IA e exportação sem marca para todo template, aparelho e conta no Brasil; não prometer que todos esses recursos são gratuitos. Música de biblioteca não tem automaticamente licença para todos os canais/finalidades. [T05]

#### A6.3 OBS Studio

OBS Studio é gratuito e de código aberto. Serve para gravar tela/apresentações e transmitir; não é obrigatório para gerar textos ou editar um post. [T06]

1. Abrir [obsproject.com/download](https://obsproject.com/download).
2. Windows: escolher **Download Installer**; o download atual suporta Windows 10/11. Executar e concluir.
3. Mac: escolher instalador **Apple Silicon/arm64** ou **Intel/x86_64**, abrir e instalar em Aplicativos. A página de download atual requer **macOS 13+**; o artigo antigo de requisitos ainda menciona 11, por isso usar o requisito do download atual.
4. Abrir OBS e conceder gravação de tela/microfone no sistema quando solicitado.
5. Rodar **Ferramentas > Assistente de configuração automática**; selecionar gravação se o objetivo inicial for capturar tela.
6. Criar cena e fonte de captura, conferir microfone e fazer uma gravação curta de teste. Reproduzir o arquivo para verificar áudio, tamanho da fonte e ausência de notificações/dados privados. [T06–T07]

#### A6.4 Node.js LTS para executar um pequeno script de render

Node.js executa JavaScript fora do navegador. **É ferramenta opcional para a pessoa que renderizará animações**, não requisito para todos os voluntários. O instalador nativo do Claude Code é independente de Node.js. [T08, C16]

1. Abrir [nodejs.org/en/download](https://nodejs.org/en/download).
2. Selecionar **LTS**, não “Current/Latest Release”. Em 21/10/2026, a página consultada oferece **v24.22.1 LTS**; Node 26 aparece como versão Current. Não fixar o patch em tutorial duradouro.
3. Windows: baixar o instalador `.msi` adequado ao processador, executá-lo e manter a instalação de Node/npm e PATH. Não selecionar instalação extra de ferramentas de compilação se o script não as exigir.
4. Mac: baixar o instalador `.pkg` e seguir o assistente. A alternativa por gerenciador de versões exige mais conhecimento; não é necessária para este primeiro fluxo.
5. Fechar e reabrir Terminal/PowerShell. Executar separadamente:

   ```sh
   node --version
   npm --version
   ```

6. Colocar o script e os arquivos de entrada numa pasta de trabalho. Abrir o terminal nessa pasta e seguir o README do renderizador.
7. Para um script simples chamado `render.mjs`, o comando pode ser `node render.mjs`; **isso é exemplo, não comando universal de renderização**. Se o projeto pedir `npm install`/`npm run render`, instalar somente dependências de um projeto que a equipe revisou. [T08]

Um roteiro JavaScript não instala automaticamente Chrome, Remotion, FFmpeg ou fontes. Registrar dependências reais no pacote entregue, com uma instrução de saída esperada. Se aparecer erro, copiar só a mensagem pertinente, sem variáveis de ambiente/chaves, e pedir explicação em português.

#### A6.5 Gerenciador de senhas e 2FA

**Opção gratuita verificada: Bitwarden.** Plano pessoal inclui armazenamento de credenciais e sincronização entre aparelhos; autenticação do cofre por autenticador/FIDO2 tem opções gratuitas. O autenticador TOTP embutido no gerenciador para guardar códigos de outros serviços é recurso diferente e pode exigir Premium. [T09–T10]

1. Abrir [bitwarden.com/download](https://bitwarden.com/download/), criar conta e instalar extensão/app oficial.
2. Criar senha mestra longa e exclusiva; guardar o plano de recuperação em local seguro, fora da mesma conta de e-mail.
3. Gerar senhas únicas para contas que ainda precisem de senha; não reutilizar a senha do Gmail no Facebook/Even3/Canva.
4. No cofre web: `Settings > Security > Two-step login` → habilitar autenticador ou chave de segurança.
5. Salvar o **recovery code** em local seguro antes de encerrar a sessão. [T09–T10]

**Facebook/Instagram:** `Accounts Center / Central de Contas > Password and security / Senha e segurança > Two-factor authentication / Autenticação de dois fatores` → selecionar conta → configurar autenticador/chave quando disponível → guardar códigos de recuperação. Exigir 2FA dos responsáveis. Dar acesso individual à Página/Business Suite; o gerenciador de senhas não substitui permissões por função. [M03, M09]

**WhatsApp:** configurações da conta → **Verificação em duas etapas**; adicionar e-mail de recuperação controlado pela organização. O artigo atual avisa da transição do antigo PIN de seis dígitos para senha; **[UNVERIFIED]** estágio dessa mudança em cada conta. Seguir o que a própria versão oferece e não confundir código SMS de login com senha/PIN da verificação em duas etapas. [M10]

### A7. Higiene de segurança e privacidade

#### A7.1 Dados de inscritos e LGPD

**Procedimento editorial proposto:** usar dados públicos aprovados ou fictícios nas ferramentas pessoais de IA. Não colar planilha Even3 com nomes, CPF, e-mail, telefone, comprovantes, dados bancários, necessidades de acessibilidade, saúde, filiação, relatos de discriminação ou dados de crianças. **Origem racial/étnica e religião são dados pessoais sensíveis na LGPD**, especialmente relevantes neste evento. Substituir um nome por “Participante 01” não anonimiza se outros campos ainda identificam a pessoa. [P01–P02]

Para analisar campanha, preferir totais agregados sem identificação, por exemplo “12 inscrições nesta semana”. Remover identificadores e revisar grupos pequenos que ainda possam revelar pessoas. O organizador deve definir finalidade, base legal, acesso, retenção e fornecedores adequados antes de qualquer tratamento real; desligar treinamento não substitui essa avaliação. A LGPD não é uma proibição genérica de IA, mas o opt-out pessoal também não torna qualquer envio legal. [P01–P02; aplicação prática da pesquisa]

#### A7.2 Desligar uso para treinamento: nomes e caminhos

| Serviço pessoal | Passo documentado | O que continua exigindo cuidado |
|---|---|---|
| Claude Free/Pro/Max | Perfil/nome → `Settings > Privacy > Help Improve our AI models` → desligar | Incognito não é usado para melhorar Claude; há exceções de segurança. Não reverte treinamento já iniciado. Memória é controle separado |
| ChatGPT | Perfil → `Settings > Data Controls > Improve the model for everyone` → desligar | Conversas continuam no histórico; áudio/vídeo têm opções próprias; memória é separada |
| Gemini pessoal, web | `Configurações e ajuda > Atividade` → **Manter Atividade** → **Ativada > Desativar** ou **Desativar e excluir atividade** | Sem atividade e sem feedback, futuras conversas não são usadas para melhorar modelos; retenção operacional de até 72 h; revisão anterior/feedback tem regras próprias |
| AI Studio gratuito/API gratuita | Não presumir existência de opt-out equivalente ao Gemini app | Termos de serviços não pagos permitem uso para melhoria/revisão. Usar apenas material público/fictício neste projeto |
| NotebookLM/Gemini Notebook | Não há necessidade de transportar o toggle Gemini app para o notebook | A tabela de ajuda diz que os dados não treinam o produto, salvo contexto enviado por feedback; não enviar cadastros por esse motivo |

Fontes oficiais: Claude [P03], ChatGPT [P04], Gemini [P05–P06], AI Studio [G10–G11], notebook [G06]. Os nomes traduzidos de Claude/ChatGPT podem variar; incluir o nome inglês na primeira explicação. Contas Team/Enterprise/Workspace têm políticas próprias; não generalizar os defaults de contas pessoais.

**No ChatGPT voz:** em Data Controls, não habilitar **Include your audio recordings** ou **Include your video recordings** por engano. Desligar o treinamento de texto e compartilhar gravações são controles que precisam ser compreendidos separadamente. [O13, P04]

#### A7.3 Extensões, conectores e computador compartilhado

- Instalar somente pelo site/loja oficial; conferir editor e domínio. Extensões com `debugger`, captura de tela e acesso a sites têm poder sobre a sessão autenticada. Dar acesso mínimo e remover quando não necessário. [C06, C19]
- Para a campanha, criar perfil de navegador próprio e pasta de trabalho dedicada. Não permitir que agente use a pasta inteira de documentos, e-mail pessoal ou lista de inscritos. [C07, C19]
- Documento, e-mail ou site pode conter instruções maliciosas para o agente; interromper se houver pedidos estranhos de upload, senha ou troca de tarefa. Revisar destinatários, links, anexos e conteúdo antes de publicar/enviar. [C19]
- Em computador compartilhado, usar identidade própria, sair de Claude/ChatGPT/Google/Meta ao terminar, encerrar o perfil do navegador e revisar sessões/aparelhos conectados. Modo anônimo do navegador não revoga permissão de conector já concedida nem apaga arquivos baixados.
- Não salvar senha/código de recuperação em chat, Skill, prompt, arquivo compartilhado ou captura de tela. Não enviar arquivos de cookies/sessão para outra pessoa. [O04, T10]
- Antes de fotografar a tela, recortar nomes, fotos, e-mails, abas, notificações, QR codes e tokens. Usar a função de anexar imagem somente após essa revisão.

## PARTE B — APRENDER COM IA

### B1. Recursos de aprendizagem embutidos

| Ferramenta | Disponibilidade e nome verificados | Como iniciar / uso proposto |
|---|---|---|
| ChatGPT | **Study / study mode**, todos os planos; web/iOS/Android | Web: `@study` ou `+` e buscar Study, depois selecionar; também `chatgpt.com/studymode`. Celular: `+ > Study` ou pesquisar no menu. Conversa comum; não está disponível dentro de Projects, GPTs ou Temporary Chats |
| Claude for Education | **Learning mode**, descrito como tutoria por perguntas em Projects de oferta educacional institucional | Não prometer um botão Learning em toda conta Free/Pro brasileira. Confirmar com a instituição |
| Claude Code | Estilo de saída **Learning** ou **Explanatory**, em `/config` na documentação atual | Ajuda a entender alterações de código; não é o mesmo recurso que Learning mode institucional |
| Claude comum | Prompt de tutoria, instruções e estilos personalizados | Pedir perguntas uma por vez, dicas graduais e revisão; funciona como técnica, sem afirmar que ativa um modo educacional especial |
| Gemini | **Aprendizado guiado / Guided Learning** | Web: caixa de texto → adicionar/mais ferramentas → **Aprendizado guiado** → informar tema e enviar. Alguns layouts mostram o atalho diretamente; rollout móvel gradual |
| NotebookLM/Gemini Notebook | Relatórios/guias de estudo, cartões, testes, mapas mentais e Resumos em Áudio/Vídeo | Adicionar boas fontes → Estúdio → escolher recurso; selecionar idioma pt-BR e revisar citações |
| Khanmigo | Ferramentas para professores e tutoria são acessos distintos; pt-BR é idioma suportado | A lista pública de países das ferramentas gratuitas para professores consultada não inclui Brasil. **[UNVERIFIED]** cadastro gratuito direto disponível para todo professor brasileiro em outubro de 2026; não recomendar como acesso garantido |

Fontes: Study [O14], Learning mode [L01], Learning do Code [L02], Gemini [G13], notebook [G07–G09, G14], Khan [L03–L04]. A documentação de Learning mode é de 2025 e a oferta educacional atual continua citando o recurso, mas **[UNVERIFIED]** caminho de ativação na interface institucional brasileira em 2026.

**Exemplo de primeira sessão (10 minutos):** abrir Study em chat comum, anexar apenas um checklist público da campanha e pedir: “Ensine-me a preparar um post acessível no Facebook. Sou iniciante. Faça uma pergunta de cada vez; espere minha resposta e dê pistas antes da solução. Ao final, peça que eu faça uma postagem de teste sem ajuda”. Não iniciar dentro do Project e depois instruir o leitor a procurar Study ali. [O14; proposta editorial]

#### B1.1 Estudar os documentos no notebook

1. Criar notebook e adicionar fontes conforme A4.4.
2. Definir **Idioma de saída > Português (Brasil)**.
3. Para guia de estudo, abrir **Estúdio > Relatórios** e escolher o formato de guia quando disponível; se não houver template, pedir um guia no chat e salvar a resposta como nota.
4. Para prática, **Estúdio > Cartões de estudo / Testes** → personalizar número/dificuldade/assunto → gerar. Responder antes de revelar a solução; abrir explicações e conferir a fonte.
5. Para estrutura, gerar **Mapa mental** e explorar os tópicos; comparar relações com o documento original.
6. Para áudio/vídeo, escolher o respectivo resumo, personalizar idioma/escopo, gerar e ouvir/assistir. Fazer depois um resumo próprio sem consultar o material.
7. Corrigir erros de datas, nomes, pronúncia e representação antes de compartilhar. Áudio sintético não deve ser apresentado como fala real de palestrante. [G07–G09, G14]

### B2. Técnicas úteis, evidência e limites

**O que a evidência permite afirmar:** prática de recuperação tem suporte experimental; explicar de memória e testar sem ajuda é mais informativo que reler uma resposta. Estudos de tutores de IA mostram resultados dependentes do desenho pedagógico: um RCT universitário de 2025 encontrou ganhos com tutor estruturado; outro estudo em matemática escolar mostrou que assistência sem salvaguardas pode prejudicar o desempenho quando a IA é retirada. Isso não demonstra que qualquer chatbot, prompt ou botão de estudo melhora aprendizagem automaticamente, nem foi um teste com voluntários brasileiros desta campanha. [E01–E04]

| Técnica | Prompt de exemplo em pt-BR | Como verificar aprendizagem / estado da evidência |
|---|---|---|
| Tutoria socrática | “Ensine como programar um post no Business Suite. Primeiro descubra o que já sei. Pergunte uma coisa por vez e espere. Dê uma pista antes de mostrar o passo.” | Ao final, executar numa publicação de teste sem consultar a conversa. Tutor estruturado é mais promissor que entrega irrestrita de respostas; não atribuir causalidade a este prompt específico [E01–E02] |
| Explicação adaptada | “Explique o que é um conector para uma professora que usa WhatsApp, em 120 palavras; depois dê o termo técnico e dois limites da analogia.” | Pedir um exemplo e um contraexemplo. “Explique como se eu tivesse 10 anos” é ajuste de linguagem, não método cientificamente validado por si só |
| Plano de aprendizagem | “Tenho 20 minutos por dia por cinco dias. Quero aprender a montar um carrossel acessível no Canva. Dê uma tarefa observável por dia, usando a versão gratuita.” | Fazer cada tarefa e registrar o que conseguiu sem ajuda. É estratégia prática de organização, não garantia de aprendizagem |
| Recuperação / quizzes | “Crie cinco perguntas sobre os documentos anexos. Faça uma por vez; não revele resposta antes da minha tentativa. Depois dê feedback e cite a fonte.” | Repetir perguntas depois de um intervalo e mudar o exemplo; responder de memória antes de abrir as alternativas. Evidência experimental direta para recuperação [E03] |
| Teach-back | “Vou explicar o que aprendi sobre texto alternativo. Aponte o que está correto, omissões e um erro, usando este guia como referência.” | Explicar sem copiar a resposta; ensinar/expor de memória pode envolver recuperação e elaboração. Evidência não específica de chatbot [E04] |
| Captura de tela e pergunta | “Esta é a tela em que estou. Quero agendar um post, não publicar agora. Identifique o próximo controle visível e peça confirmação se ele não estiver na imagem.” | Recortar dados privados; realizar um passo e mandar nova imagem. O modelo não vê fora da captura e pode inventar nomes de botões; não é necessário instalar agente para receber orientação |
| Conversa por voz | “Vamos praticar como explicar o CONAFROEDU a um professor. Converse em português do Brasil, um turno por vez; no fim dê feedback de clareza.” | Fazer depois a apresentação em voz própria, sem ler; revisar transcrição de nomes/datas. Voz facilita interação, mas não comprova melhor aprendizagem por si só |
| Pesquisa com fontes | “Pesquise na web a documentação oficial atual sobre este recurso. Dê URL, data, plano necessário e sinalize divergências. Não complete uma lacuna por suposição.” | Abrir cada fonte e conferir o trecho; link plausível não comprova que a afirmação é verdadeira |

**Repetição espaçada:** como rotina editorial, retomar no dia seguinte e uma semana depois; os intervalos são um exemplo prático, não a alegação de que existe um calendário ótimo universal. Quizzes de fatos do evento devem usar a versão atual dos documentos: praticar uma data errada só fixa o erro.

### B3. Aprender a verificar respostas: busca, corte de conhecimento e leitura lateral

1. **Separar memória do modelo de pesquisa atual.** O conhecimento aprendido no treinamento tem corte temporal; a ferramenta de busca acrescenta fontes atuais ao contexto, mas não torna toda resposta automaticamente atualizada. A data de corte depende do modelo; **não publicar uma única data de corte para “ChatGPT”, “Claude” ou “Gemini” como produtos inteiros**.
2. **Pedir busca explicitamente** quando o tema for preço, botão, plano, política ou recurso recente. Verificar se a resposta realmente mostra fontes consultadas. Se a ferramenta não estiver disponível, fornecer a página oficial e pedir análise daquele texto.
3. **Abrir a fonte fora do chat.** Confirmar domínio, título, data, país/plano e a frase que sustenta o conselho. Diferenciar data da notícia, data do evento e data de acesso. Um anúncio de 2025 pode estar correto historicamente e ter deixado de valer.
4. **Fazer leitura lateral:** sair da página, pesquisar quem publica e comparar com outra fonte primária ou com o Help Center atual. A pesquisa de leitura lateral encontrou melhoria na avaliação de credibilidade em contexto escolar; aplicar essa prática a respostas de IA é uma recomendação de transferência, não o resultado específico daquele experimento. [E05]
5. **Procurar contradições:** “Você citou dois planos diferentes. Qual documento mais recente trata especificamente deste recurso?” Não pedir que a IA escolha apenas pelo tom de certeza.
6. **Testar num rascunho.** Para interface, um passo reversível por vez; para planilha, conferir manualmente uma amostra; para divulgação, comparar todo número com Even3/organização.
7. **Reconhecer alucinação:** citação que não abre, autor/título inexistente, botão ausente, prazo inventado, mistura de Brasil com outro país, ou explicação segura sem evidência. Pedir confirmação a outro modelo pode ajudar a encontrar objeções, mas concordância entre modelos não é validação independente.
8. **Reservar julgamento humano:** conceitos de africanidades, leis educacionais, história e símbolos culturais devem ser revistos com fontes e pessoas qualificadas. Não validar um estereótipo só porque o texto ficou gramaticalmente bom.

O próprio material de fluência da Anthropic distingue treinamento de contexto e ensina limitações/alucinações; as ajudas Study/Gemini/notebook também alertam para erros. [L05, O14, G08, G13]

### B4. Cursos e recursos gratuitos, priorizando português

| Recurso oficial | Idioma / gratuidade verificados | Acesso e uso para a equipe |
|---|---|---|
| **Google — Série de IA para educadores** | Página e trilha brasileira; sessões gratuitas de 15–45 min, com modalidades autoinstrucionais e microcredenciais | [Série brasileira](https://edu.google.com.br/intl/ALL_br/learning-center/google-ai-educator-series/). Abrir “Ver sessões”; escolher fundamentos e aplicação administrativa antes de recursos avançados [L06] |
| **Microsoft Learn — IA para educadores** | Conteúdo pt-BR, iniciante; trilha autoformativa gratuita. Página atual: quatro módulos, cerca de 4 h 11 min | [Trilha](https://learn.microsoft.com/pt-br/training/paths/ai-education/). Conta Microsoft ajuda a salvar progresso; não confundir com bootcamp ministrado por parceiros, que pode ser pago [L07] |
| **Nova Escola + Microsoft — Inteligência Artificial para professores** | **100% grátis, 10 h, certificado, pt-BR**, foco Ensino Fundamental | [Curso](https://cursos.novaescola.org.br/curso/12141/inteligencia-artificial-para-professores/resumo). A página oferece estudar pelo site ou WhatsApp; seguir somente o link oficial, não números divulgados por terceiros [L08] |
| **OpenAI Academy — AI for Educators** | Academy oferece cursos gratuitos globais; catálogo atual declara conteúdo em inglês **e português** | [Curso](https://academy.openai.com/public/courses/ai-for-educators-lc8j1) e [ajuda dos cursos](https://help.openai.com/en/articles/20001270-openai-academy-courses). Entrar com conta ChatGPT. O corpo do curso exige sessão/JavaScript: **[UNVERIFIED]** interface de escolha de idioma e matrícula completa testada neste levantamento [L09] |
| **Anthropic / Claude Academy — AI Fluency: Framework and foundations** | Curso aberto, cerca de 4 h; materiais consultados em inglês; **[UNVERIFIED]** versão integral/legendas oficiais pt-BR | [Curso atual](https://academy.claude.com/courses/ai-fluency-framework-foundations). Não prometer “curso em português” só porque o navegador traduz o site [L05] |
| **Claude Academy — Teaching AI Fluency / edição para educadores** | Catálogo oficial com cursos/edições para educadores; pt-BR integral **[UNVERIFIED]** | [Catálogo](https://academy.claude.com/collections/ai-fluency) e [Teaching AI Fluency](https://academy.claude.com/courses/teaching-ai-fluency). Útil para formação crítica; priorizar as opções nativas em português acima para iniciantes [L05] |
| **MEC / AVAMEC** | Microsoft confirma curso “Tecnologia a favor da aprendizagem” na AVAMEC; **[UNVERIFIED]** matrícula atual de um curso específico de IA com URL direta confirmada na plataforma MEC | [Portal AVAMEC](https://avamec.mec.gov.br/) e [página oficial da parceria Microsoft](https://www.microsoft.com/pt-br/conecta/professores.aspx). Pesquisar o título no portal; não anunciar uma turma de IA aberta com base em edital antigo [L12] |
| **Instituto Reúna** | Materiais brasileiros gratuitos de apoio curricular; **[UNVERIFIED]** curso de IA próprio, aberto e gratuito em outubro de 2026 | [Reflexão sobre educação em 2026](https://o.institutoreuna.org.br/8-temas-que-estarao-em-alta-na-educacao-em-2026/). Recurso de contexto, não uma formação de IA certificada verificada [L13] |
| **edX** | Auditoria gratuita onde houver opção FREE; acesso temporário, sem certificado/avaliações valendo nota; idioma varia por curso | [Como funciona a auditoria](https://support.edx.org/hc/en-us/articles/1500003964681-What-is-the-audit-track). Escolher curso e conferir áudio/legendas antes de se matricular; não prometer português ou gratuidade de todos os programas [L10] |
| **Coursera** | Prévia gratuita do primeiro módulo de quase todos os cursos, substituindo a auditoria geral; bolsas/programas específicos podem dar acesso adicional | [Explicação oficial](https://blog.coursera.org/introducing-courseras-new-course-preview-experience/). Distinguir prévia, bolsa e teste de assinatura; não tratar teste com cartão como curso completo gratuito [L11] |

**Sequência sugerida para os voluntários:** uma sessão curta em português sobre IA responsável → configuração de segurança e projeto → tutoria de uma tarefa real → execução sem ajuda → revisão por outro voluntário. Um curso concluído ou badge não comprova que um texto de campanha está factual/culturalmente correto.

### B5. Roteiro de aprendizagem aplicado à campanha curta

Plano editorial de cinco sessões de 20–30 minutos, aproveitando os recursos gratuitos; não é necessário fazer todos os cursos antes de começar.

1. **Sessão 1 — conversar com contexto:** criar projeto, anexar anúncio público e redigir uma legenda com fonte de cada fato. Checar data, modalidade online e chamada para inscrição.
2. **Sessão 2 — aprender fazendo:** pedir tutoria para montar uma peça acessível no Canva. Repetir sem a conversa; revisar contraste, texto alternativo, grafia e representação.
3. **Sessão 3 — organizar o conhecimento:** criar notebook com documentos públicos; gerar quiz sobre informações confirmadas e distinguir perguntas ainda pendentes dos organizadores.
4. **Sessão 4 — operar com segurança:** configurar acesso individual à Página e fazer agendamento de teste no Business Suite; duas pessoas conferem canal, horário, link e rascunho.
5. **Sessão 5 — ensinar de volta:** cada voluntário explica um procedimento a outro e entrega um checklist curto. Quem cuida de vídeo testa CapCut/OBS; só a pessoa do render instala Node/Claude Code, se necessário.

Nos exemplos datados, submissões são prioridade até **4/11**; Consciência Negra em **20/11** é gancho para participação/inscrição, sem afirmar que submissões continuam abertas. Conferir a programação quando publicada até **25/11** e concentrar orientações de acesso nos dias anteriores a **5–6/12**. Não inventar regras de certificado/apresentação que o organizador ainda não confirmou. [contexto do evento](04-conafroedu-context.md)

## Pendências de verificação antes da publicação

- **Skill:** testar upload real de `SKILL.md` e ZIP com pasta única em conta Free; confirmar se o uploader informa limite em MB. O nome canônico é confirmado na documentação técnica; descrição curta evita a divergência de 200/1.024 caracteres. O pacote final ainda não passou pelo uploader nesta pesquisa.
- **Interfaces em transição:** capturas das novas telas Claude Customize, unificação Chat/Cowork, Projects/memória, Work/Plugins/Study e notebook Google. Este levantamento verifica documentação, não cada tela de conta brasileira.
- **Preços:** checkout BRL do Claude; checkout web ChatGPT Go/Plus/Pro e correspondência dos itens Pro da App Store. Conservar rótulo de canal de compra nos preços já confirmados.
- **Meta:** validar passo a passo atual de convite no portfólio Business Suite em pt-BR e presença de Meta AI na conta/aplicativo WhatsApp Business específico.
- **Cursos:** validar escolha de português no AI for Educators após login; português oficial integral da Claude Academy; oferta atual de IA na AVAMEC e eventual curso Reúna; cadastro Khanmigo aberto no Brasil.
- **Apps:** requisitos Windows do novo ChatGPT desktop e cotas gratuitas de recursos IA do CapCut na versão usada pela equipe.
- Não converter essas lacunas em afirmações. Revalidar fontes e avisos de conta antes de publicar o guia, sobretudo recursos novos e preços.

## SOURCES — fontes, URLs e datas de acesso

Todas as fontes abaixo foram consultadas em **2026-10-21**. “Ajuda atual” indica documentação disponível nessa data, que pode mudar sem manter histórico público. Links de lojas são listagens oficiais do fornecedor; preço na loja não estabelece preço de outro canal. As referências de pesquisa acadêmica anteriores a 2026 são usadas como evidência de aprendizagem, não para disponibilidade de produtos.

### Claude / Anthropic

| ID | Fonte oficial e URL | Acesso |
|---|---|---|
| C01 | [Claude — Pricing](https://claude.com/pricing) | 2026-10-21 |
| C02 | [Choose a Claude plan](https://support.claude.com/en/articles/11049762-choose-a-claude-plan) | 2026-10-21 |
| C03 | [Install Claude Desktop](https://support.claude.com/en/articles/10065433-install-claude-desktop); [downloads](https://claude.com/download) | 2026-10-21 |
| C04 | [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude) | 2026-10-21 |
| C05 | [How to create custom skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) | 2026-10-21 |
| C06 | [Get started with Claude in Chrome](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome) | 2026-10-21 |
| C07 | [Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork) | 2026-10-21 |
| C08 | [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork); [Cowork and chat are one Claude](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) | 2026-10-21 |
| C09 | [How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) | 2026-10-21 |
| C10 | [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) | 2026-10-21 |
| C11 | [Use Claude in your preferred language](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language) | 2026-10-21 |
| C12 | [Use Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors) | 2026-10-21 |
| C13 | [What are artifacts and how do I use them?](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them) | 2026-10-21 |
| C14 | [Get started with Claude Motion](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion) | 2026-10-21 |
| C15 | [Agent Skills — Specification](https://agentskills.io/specification), especificação de formato vinculada pelo Help Center Anthropic | 2026-10-21 |
| C16 | [Claude Code — Quickstart](https://code.claude.com/docs/en/quickstart) | 2026-10-21 |
| C17 | [Claude Code — Desktop](https://code.claude.com/docs/pt/desktop); [Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode) | 2026-10-21 |
| C18 | [Get started with the Team plan](https://support.claude.com/en/articles/9267247-get-started-with-the-team-plan) | 2026-10-21 |
| C19 | [Use Claude in Chrome safely](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely) | 2026-10-21 |
| C20 | [Claude chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context); [memory import/export and legacy settings](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude) | 2026-10-21 |
| C21 | [Migrate from standalone Claude Design to Claude](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude) | 2026-10-21 |
| C22 | [Anthropic — Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices); [Agent Skills overview — formato/frontmatter, com trechos legados de instalação](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | 2026-10-21 |

### OpenAI / ChatGPT

| ID | Fonte oficial e URL | Acesso |
|---|---|---|
| O01 | [What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go); [anúncio Go, preço de referência EUA](https://openai.com/pt-BR/index/introducing-chatgpt-go/) | 2026-10-21 |
| O02 | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) | 2026-10-21 |
| O03 | [About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers) | 2026-10-21 |
| O04 | [ChatGPT Atlas retirement](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement) | 2026-10-21 |
| O05 | [ChatGPT agent — aviso de descontinuação e trechos legados](https://help.openai.com/en/articles/11752874-chatgpt-agent) | 2026-10-21 |
| O06 | [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) | 2026-10-21 |
| O07 | [Downloading the ChatGPT macOS app — novo app Mac/Windows](https://help.openai.com/en/articles/9275200-downloading-the-chatgpt-macos-app); [download](https://chatgpt.com/download/) | 2026-10-21 |
| O08 | [Creating and editing GPTs](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts) | 2026-10-21 |
| O09 | [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) | 2026-10-21 |
| O10 | [Memory in ChatGPT](https://help.openai.com/en/articles/8590148-memory-in-chatgpt) | 2026-10-21 |
| O11 | [Connected apps in ChatGPT](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt) | 2026-10-21 |
| O12 | [Plugins in ChatGPT](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt); [troubleshooting/Free-Go restrictions](https://help.openai.com/en/articles/20001497-troubleshooting-plugins-and-apps-in-chatgpt) | 2026-10-21 |
| O13 | [ChatGPT Voice](https://help.openai.com/en/articles/20001274/) | 2026-10-21 |
| O14 | [Using study mode in ChatGPT](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) | 2026-10-21 |
| O15 | [ChatGPT — App Store Brasil, OpenAI](https://apps.apple.com/br/app/chatgpt/id6448311069) | 2026-10-21 |

### Google

| ID | Fonte oficial e URL | Acesso |
|---|---|---|
| G01 | [Gemini — assinaturas no Brasil](https://gemini.google/br/subscriptions/?hl=pt-BR) | 2026-10-21 |
| G02 | [Google One — planos de IA Brasil](https://one.google.com/intl/pt-BR_br/about/google-ai-plans/) | 2026-10-21 |
| G03 | [Usar os Gems](https://support.google.com/gemini/answer/15146780?hl=pt-BR) | 2026-10-21 |
| G04 | [Disponibilidade do Gemini no Chrome](https://support.google.com/gemini/answer/17140089?hl=pt-BR); [usar no Chrome](https://support.google.com/gemini/answer/16283624?hl=pt) | 2026-10-21 |
| G05 | [Adicionar ou descobrir fontes no Gemini Notebook](https://support.google.com/gemininotebook/answer/16215270?hl=pt-BR) | 2026-10-21 |
| G06 | [Upgrade e tabela de limites do Gemini Notebook](https://support.google.com/gemininotebook/answer/16213268?hl=pt-BR) | 2026-10-21 |
| G07 | [Idioma de saída, incluindo pt-BR](https://support.google.com/gemininotebook/answer/16261963?hl=pt) | 2026-10-21 |
| G08 | [Gerar Resumos em Vídeo](https://support.google.com/gemininotebook/answer/16454555?hl=pt-BR) | 2026-10-21 |
| G09 | [Ajuda NotebookLM/Gemini Notebook — recursos e áudio](https://support.google.com/gemininotebook/?hl=pt-BR) | 2026-10-21 |
| G10 | [Gemini API / AI Studio — billing e free tier](https://ai.google.dev/gemini-api/docs/billing) | 2026-10-21 |
| G11 | [Gemini API Additional Terms — unpaid services](https://ai.google.dev/gemini-api/terms) | 2026-10-21 |
| G12 | [Atalho @gemini no Chrome](https://support.google.com/chrome/answer/14886647?hl=pt) | 2026-10-21 |
| G13 | [Ferramentas de aprendizado / Guided Learning](https://support.google.com/gemini/answer/16448384?hl=pt-BR) | 2026-10-21 |
| G14 | [Cartões e testes no Gemini Notebook](https://support.google.com/gemininotebook/answer/16958963?hl=es-419) | 2026-10-21 |

### Meta

| ID | Fonte oficial e URL | Acesso |
|---|---|---|
| M01 | [Meta Business Suite — Google Play, Meta](https://play.google.com/store/apps/details?id=com.facebook.pages.app) | 2026-10-21 |
| M02 | [Meta Business Suite — App Store, Meta](https://apps.apple.com/us/app/meta-business-suite/id514643583) | 2026-10-21 |
| M03 | [Dar, editar ou remover acesso à Página](https://www.facebook.com/help/187316341316631); [tipos de acesso à Página](https://www.facebook.com/help/289207354498410/) | 2026-10-21 |
| M04 | [Download do WhatsApp Business — requisitos e números](https://faq.whatsapp.com/665643701880397/?cms_platform=iphone&locale=en_US) | 2026-10-21 |
| M05 | [Transferir Messenger para Business](https://faq.whatsapp.com/3059780464322392/?cms_platform=iphone&locale=pt_BR) | 2026-10-21 |
| M06 | [Meta AI chega ao Brasil — anúncio original](https://about.fb.com/br/news/2024/10/meta-ai-chega-ao-brasil-assistente-de-inteligencia-artificial-comeca-a-ser-disponibilizado-no-pais/) | 2026-10-21 |
| M07 | [Meta AI app no Brasil — presença no WhatsApp](https://about.fb.com/br/news/2025/08/apresentando-o-app-meta-ai-uma-nova-forma-de-acessar-seu-assistente-de-inteligencia-artificial/) | 2026-10-21 |
| M08 | [Meta AI anônima — implantação/idiomas e privacidade](https://faq.whatsapp.com/1657920171834350?locale=pt_BR) | 2026-10-21 |
| M09 | [Chave de segurança e caminho da autenticação de dois fatores](https://www.facebook.com/help/1167409720358611) | 2026-10-21 |
| M10 | [Verificação em duas etapas do WhatsApp](https://faq.whatsapp.com/1920866721452534/?cms_platform=web&locale=pt_BR) | 2026-10-21 |

### Ferramentas, privacidade, aprendizagem e cursos

| ID | Fonte oficial / pesquisa primária e URL | Acesso |
|---|---|---|
| T01 | [Canva Educação — elegibilidade Brasil](https://www.canva.com/pt_br/educacao/elegibilidade/) | 2026-10-21 |
| T02 | [Canva AI Connector — disponibilidade e planos](https://www.canva.com/en_gb/help/mcp-agent-setup/) | 2026-10-21 |
| T03 | [Conectar Canva ao Claude](https://www.canva.com/help/connect-claude-to-canva/) | 2026-10-21 |
| T04 | [Canva Nonprofits — elegibilidade](https://www.canva.com/nonprofits/eligibility-guidelines/) | 2026-10-21 |
| T05 | [CapCut — instalação](https://www.capcut.com/help/download-and-install); [download multiplataforma e edição gratuita](https://www.capcut.com/tools/video-editor-download) | 2026-10-21 |
| T06 | [OBS — download atual e requisitos por versão](https://obsproject.com/download) | 2026-10-21 |
| T07 | [OBS — requisitos e Auto Configuration Wizard](https://obsproject.com/kb/system-requirements) | 2026-10-21 |
| T08 | [Node.js — download LTS atual](https://nodejs.org/en/download) | 2026-10-21 |
| T09 | [Bitwarden — planos](https://bitwarden.com/help/password-manager-plans/); [métodos de duas etapas](https://bitwarden.com/en-gb/help/setup-two-step-login/) | 2026-10-21 |
| T10 | [Bitwarden — recovery code](https://bitwarden.com/help/two-step-recovery-code/) | 2026-10-21 |
| P01 | [ANPD — Glossário, dados pessoais e sensíveis](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/glossario-anpd) | 2026-10-21 |
| P02 | [LGPD — Lei 13.709, texto oficial](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) | 2026-10-21 |
| P03 | [Claude — model improvement privacy settings](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings) | 2026-10-21 |
| P04 | [ChatGPT — Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-usage-for-openai-models); [dados em serviços pessoais](https://help.openai.com/en/articles/7039943-how-openai-handles-data-in-consumer-services) | 2026-10-21 |
| P05 | [Gemini — gerenciar/desligar atividade](https://support.google.com/gemini/answer/13278892?hl=pt-BR) | 2026-10-21 |
| P06 | [Gemini Apps Privacy Hub — treinamento, feedback e retenção](https://support.google.com/gemini/answer/13594961?hl=en) | 2026-10-21 |
| L01 | [Anthropic — Claude for Education / Learning mode](https://www.anthropic.com/news/introducing-claude-for-education); [oferta educacional](https://www.anthropic.com/education) | 2026-10-21 |
| L02 | [Claude Code power user tips — Learning/Explanatory](https://support.claude.com/en/articles/14554000-claude-code-power-user-tips) | 2026-10-21 |
| L03 | [Khanmigo — idiomas](https://support.khanacademy.org/hc/en-us/articles/41626114291469-Which-languages-can-I-use-for-Khanmigo-and-free-teacher-tools) | 2026-10-21 |
| L04 | [Khanmigo — países das ferramentas gratuitas, artigo pt-BR](https://support.khanacademy.org/hc/pt-br/articles/28467553186317-Em-quais-locais-as-Ferramentas-Gratuitas-para-Professores-do-Khanmigo-est%C3%A3o-dispon%C3%ADveis) | 2026-10-21 |
| L05 | [Claude Academy — AI Fluency](https://academy.claude.com/courses/ai-fluency-framework-foundations); [catálogo](https://academy.claude.com/collections/ai-fluency) | 2026-10-21 |
| L06 | [Google — Série de IA para educadores, pt-BR](https://edu.google.com.br/intl/ALL_br/learning-center/google-ai-educator-series/) | 2026-10-21 |
| L07 | [Microsoft Learn — IA para educadores](https://learn.microsoft.com/pt-br/training/paths/ai-education/); [bootcamp de parceiros é pago](https://learn.microsoft.com/pt-br/training/educator-center/programs/msle/generative-ai-for-teaching-bootcamp) | 2026-10-21 |
| L08 | [Nova Escola — curso IA para professores](https://cursos.novaescola.org.br/curso/12141/inteligencia-artificial-para-professores/resumo) | 2026-10-21 |
| L09 | [OpenAI Academy — regras dos cursos](https://help.openai.com/en/articles/20001270-openai-academy-courses); [curso AI for Educators](https://academy.openai.com/public/courses/ai-for-educators-lc8j1); [catálogo oficial com português](https://academy.openai.com/public/search?query=chatgpt+for+work) | 2026-10-21 |
| L10 | [edX — auditoria gratuita, atualização de 08/10/2026](https://support.edx.org/hc/en-us/articles/1500003964681-What-is-the-audit-track) | 2026-10-21 |
| L11 | [Coursera — prévia substitui auditoria, 08/08/2025](https://blog.coursera.org/introducing-courseras-new-course-preview-experience/) | 2026-10-21 |
| L12 | [Microsoft ConectAI — parceria Nova Escola/AVAMEC](https://www.microsoft.com/pt-br/conecta/professores.aspx) | 2026-10-21 |
| L13 | [Instituto Reúna — temas da educação em 2026](https://o.institutoreuna.org.br/8-temas-que-estarao-em-alta-na-educacao-em-2026/) | 2026-10-21 |
| E01 | [Kestin et al., 2025 — RCT de tutor de IA, Scientific Reports](https://doi.org/10.1038/s41598-025-97652-6) | 2026-10-21 |
| E02 | [Bastani et al., 2025 — Generative AI without guardrails can harm learning, PNAS](https://doi.org/10.1073/pnas.2422633122) | 2026-10-21 |
| E03 | [Karpicke & Roediger, 2008 — The Critical Importance of Retrieval for Learning, Science](https://doi.org/10.1126/science.1152408) | 2026-10-21 |
| E04 | [Koh et al., 2018 — The learning benefits of teaching: A retrieval practice hypothesis](https://onlinelibrary.wiley.com/doi/10.1002/acp.3410) | 2026-10-21 |
| E05 | [Wineburg et al. — Lateral Reading on the Open Internet, manuscrito dos pesquisadores](https://doi.org/10.2139/ssrn.3936112) | 2026-10-21 |

**Limites desta pesquisa:** documentação comercial e de suporte é evidência de oferta/instruções, não validação independente de eficácia pedagógica. Fontes antigas foram conservadas quando tratam de pesquisa, lançamento histórico ou uma restrição explicitamente marcada como pendente. Não houve commit, instalação, assinatura nem alteração de contas.
