// UI strings ("chrome") for every supported locale. Guide content lives in
// content/<locale>/*.md — this file only covers the interface around it.
// Kept free of React/Vite imports so the build-time content plugin can use it.

export const LOCALES = ['en', 'pt-BR'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as ReadonlyArray<string>).includes(value)
}

export const SECTIONS = ['start', 'create', 'facebook', 'automate', 'extras'] as const
export type Section = (typeof SECTIONS)[number]

export function isSection(value: unknown): value is Section {
  return typeof value === 'string' && (SECTIONS as ReadonlyArray<string>).includes(value)
}

export const CALLOUT_TYPES = ['NOTE', 'TIP', 'IMPORTANT', 'WARNING', 'CAUTION'] as const
export type CalloutType = (typeof CALLOUT_TYPES)[number]

interface Dictionary {
  siteName: string
  siteTagline: string
  languageName: string
  /** Open Graph locale, e.g. en_US */
  ogLocale: string
  skipToContent: string
  menu: string
  closeMenu: string
  navLabel: string
  home: string
  breadcrumb: string
  onThisPage: string
  previous: string
  next: string
  updated: string
  readingTime: (minutes: number) => string
  allGuides: string
  eventLabel: string
  eventCta: string
  opensInNewTab: string
  search: string
  searchLabel: string
  searchPlaceholder: string
  searchLoading: string
  searchError: string
  searchEmpty: string
  searchNoResults: (query: string) => string
  searchResults: (count: number) => string
  searchHelp: string
  close: string
  theme: string
  themes: Record<'system' | 'light' | 'dark', string>
  switchLanguage: string
  startReading: string
  startCampaign: string
  guidesInSection: (count: number) => string
  copy: string
  copied: string
  copyCode: string
  permalink: string
  footnotes: string
  backToContent: string
  footer: string
  notFoundTitle: string
  notFoundBody: string
  backHome: string
  chooseLanguage: string
  sections: Record<Section, { label: string; description: string }>
  callouts: Record<CalloutType, string>
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    siteName: 'AI for Conference Marketing',
    siteTagline: 'A practical, organic-first guide to promoting an education conference with AI.',
    languageName: 'English',
    ogLocale: 'en_US',
    skipToContent: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    navLabel: 'Guides',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    onThisPage: 'On this page',
    previous: 'Previous',
    next: 'Next',
    updated: 'Updated',
    readingTime: (n) => `${n} min read`,
    allGuides: 'All guides',
    eventLabel: 'Upcoming event',
    eventCta: 'Register now',
    opensInNewTab: '(opens in a new tab)',
    search: 'Search',
    searchLabel: 'Search the guides',
    searchPlaceholder: 'Search guides, tools, tips…',
    searchLoading: 'Loading search…',
    searchError: 'Search could not be loaded. Check your connection and try again.',
    searchEmpty: 'Type to search every guide on this site.',
    searchNoResults: (q) => `No results for “${q}”.`,
    searchResults: (n) => (n === 1 ? '1 result' : `${n} results`),
    searchHelp: '↑ ↓ to move · Enter to open · Esc to close',
    close: 'Close',
    theme: 'Theme',
    themes: { system: 'System', light: 'Light', dark: 'Dark' },
    switchLanguage: 'Ler em português',
    startReading: 'Start reading',
    startCampaign: 'What to do now: the 6-week sprint',
    guidesInSection: (n) => (n === 1 ? '1 guide' : `${n} guides`),
    copy: 'Copy',
    copied: 'Copied!',
    copyCode: 'Copy to clipboard',
    permalink: 'Link to this section',
    footnotes: 'Footnotes',
    backToContent: 'Back to content',
    footer: 'Made for a small team promoting an education conference in Brazil. Organic only — no ad budget required.',
    notFoundTitle: 'Page not found',
    notFoundBody: 'The page you are looking for does not exist or has moved.',
    backHome: 'Go to the guide home',
    chooseLanguage: 'Choose your language',
    sections: {
      start: { label: 'Getting started', description: 'Which AI assistants exist and what each one is best at.' },
      create: { label: 'Create content', description: 'Images, video, motion graphics and copy made with AI.' },
      facebook: { label: 'Facebook & Meta', description: 'The organic playbook for Pages, Events, Groups, Reels, Instagram and WhatsApp.' },
      automate: { label: 'Automate', description: 'Scheduling, agents and workflows — with policy and ethics guardrails.' },
      extras: { label: 'Tips & extras', description: 'Partnerships, privacy, accessibility, measurement, checklists and prompts.' },
    },
    callouts: {
      NOTE: 'Note',
      TIP: 'Tip',
      IMPORTANT: 'Important',
      WARNING: 'Warning',
      CAUTION: 'Caution',
    },
  },
  'pt-BR': {
    siteName: 'IA para Marketing de Eventos',
    siteTagline: 'Um guia prático, focado em alcance orgânico, para divulgar um congresso de educação com IA.',
    languageName: 'Português',
    ogLocale: 'pt_BR',
    skipToContent: 'Pular para o conteúdo',
    menu: 'Menu',
    closeMenu: 'Fechar menu',
    navLabel: 'Guias',
    home: 'Início',
    breadcrumb: 'Você está aqui',
    onThisPage: 'Nesta página',
    previous: 'Anterior',
    next: 'Próximo',
    updated: 'Atualizado em',
    readingTime: (n) => `${n} min de leitura`,
    allGuides: 'Todos os guias',
    eventLabel: 'Próximo evento',
    eventCta: 'Inscreva-se',
    opensInNewTab: '(abre em nova aba)',
    search: 'Buscar',
    searchLabel: 'Buscar nos guias',
    searchPlaceholder: 'Busque guias, ferramentas, dicas…',
    searchLoading: 'Carregando a busca…',
    searchError: 'Não foi possível carregar a busca. Verifique sua conexão e tente de novo.',
    searchEmpty: 'Digite para buscar em todos os guias do site.',
    searchNoResults: (q) => `Nenhum resultado para “${q}”.`,
    searchResults: (n) => (n === 1 ? '1 resultado' : `${n} resultados`),
    searchHelp: '↑ ↓ para navegar · Enter para abrir · Esc para fechar',
    close: 'Fechar',
    theme: 'Tema',
    themes: { system: 'Automático', light: 'Claro', dark: 'Escuro' },
    switchLanguage: 'Read in English',
    startReading: 'Começar a ler',
    startCampaign: 'O que fazer agora: o plano de 6 semanas',
    guidesInSection: (n) => (n === 1 ? '1 guia' : `${n} guias`),
    copy: 'Copiar',
    copied: 'Copiado!',
    copyCode: 'Copiar para a área de transferência',
    permalink: 'Link para esta seção',
    footnotes: 'Notas de rodapé',
    backToContent: 'Voltar ao texto',
    footer: 'Feito para uma pequena equipe que divulga um congresso de educação no Brasil. Só alcance orgânico — sem verba para anúncios.',
    notFoundTitle: 'Página não encontrada',
    notFoundBody: 'A página que você procura não existe ou mudou de endereço.',
    backHome: 'Ir para o início do guia',
    chooseLanguage: 'Escolha o idioma',
    sections: {
      start: { label: 'Primeiros passos', description: 'Quais assistentes de IA existem e para que cada um é melhor.' },
      create: { label: 'Criar conteúdo', description: 'Imagens, vídeos, animações e textos feitos com IA.' },
      facebook: { label: 'Facebook e Meta', description: 'O passo a passo orgânico para Páginas, Eventos, Grupos, Reels, Instagram e WhatsApp.' },
      automate: { label: 'Automação', description: 'Agendamento, agentes e fluxos automáticos — com limites éticos e regras das plataformas.' },
      extras: { label: 'Dicas e extras', description: 'Parcerias, LGPD, acessibilidade, métricas, checklists e prompts.' },
    },
    callouts: {
      NOTE: 'Observação',
      TIP: 'Dica',
      IMPORTANT: 'Importante',
      WARNING: 'Atenção',
      CAUTION: 'Cuidado',
    },
  },
}

export function t(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-BR' : 'en'
}

export function formatDate(locale: Locale, isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return isoDate
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date)
}
