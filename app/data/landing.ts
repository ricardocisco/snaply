export const PHOTOS = [
  { id: "1024", name: "Ana Lima", label: "18:23", size: "24 MB" },
  { id: "1043", name: "João", label: "18:31", size: "18 MB" },
  { id: "1056", name: "Carol", label: "18:44", size: "31 MB" },
  { id: "1060", name: "Família", label: "19:02", size: "22 MB" },
  { id: "1062", name: "Tia Ruth", label: "19:15", size: "19 MB" },
  { id: "1074", name: "Marcos", label: "19:28", size: "27 MB" },
  { id: "1080", name: "Letícia", label: "19:41", size: "33 MB" },
  { id: "1084", name: "Pedro", label: "20:00", size: "21 MB" },
  { id: "1090", name: "DJ Tom", label: "20:14", size: "28 MB" }
];

export const FEATURES = [
  {
    icon: "🔗",
    title: "Link com expiração",
    desc: "Define a data em que o link para de aceitar envios. Abre no dia da festa, fecha depois."
  },
  {
    icon: "👤",
    title: "Sem cadastro",
    desc: "Convidados só digitam o nome. Nenhum e-mail, senha ou app."
  },
  {
    icon: "🔍",
    title: "Filtro por pessoa",
    desc: "Veja todas as fotos de alguém específico. Ache aquela foto da tia."
  },
  {
    icon: "📦",
    title: "Download em lote",
    desc: "Baixa tudo em .zip de uma vez. Original em alta resolução."
  },
  {
    icon: "🛡️",
    title: "Moderação",
    desc: "Aprove fotos antes de aparecerem. Você controla o que fica visível."
  },
  {
    icon: "📊",
    title: "QR Code",
    desc: "Gera um QR Code pra imprimir e colocar na mesa do evento."
  }
];

export const PLANS = [
  {
    name: "Free",
    price: "R$0",
    period: "/mês",
    desc: "Para experimentar.",
    featured: false,
    features: [
      "1 evento ativo",
      "500 MB de armazenamento",
      "Fotos até 20 MB",
      "Link com QR Code",
      "Galeria com filtros"
    ],
    cta: "Começar grátis"
  },
  {
    name: "Basic",
    price: "R$49",
    period: "/evento",
    desc: "Para casamentos e festas.",
    featured: true,
    badge: "Mais popular",
    features: [
      "5 eventos ativos",
      "5 GB por evento",
      "Fotos e vídeos até 50 MB",
      "Download em lote (.zip)",
      "Moderação de conteúdo",
      "Suporte prioritário"
    ],
    cta: "Contratar Basic"
  },
  {
    name: "Pro",
    price: "R$149",
    period: "/mês",
    desc: "Para fotógrafos e assessores.",
    featured: false,
    features: [
      "Eventos ilimitados",
      "50 GB por evento",
      "Arquivos até 200 MB",
      "Whitelabel",
      "API de integração",
      "Reconhecimento facial IA"
    ],
    cta: "Contratar Pro"
  }
];

export const TESTIMONIALS = [
  {
    text: "Coloquei o QR Code na mesa do casamento e as fotos começaram a chegar sozinhas. Mais de 400 fotos de convidados no final.",
    name: "Beatriz Mendonça",
    role: "Noiva · São Paulo",
    bg: "#8B5E3C",
    emoji: "👰"
  },
  {
    text: "Uso em todas as festas que organizo. Meus clientes amam receber um álbum completo com as fotos dos próprios convidados.",
    name: "Fernanda Castro",
    role: "Assessora de eventos · Rio",
    bg: "#4A7C59",
    emoji: "🎉"
  },
  {
    text: "Finalmente não preciso mais implorar pra amigos mandarem fotos da viagem. Todo mundo enviou na hora.",
    name: "Rafael Souza",
    role: "Viajante frequente · BH",
    bg: "#3B6FA0",
    emoji: "✈️"
  }
];

export const HOW_STEPS = [
  {
    num: "01",
    title: "Cria o evento",
    desc: "Dá um nome, define por quanto tempo o link fica aberto. Leva 30 segundos."
  },
  {
    num: "02",
    title: "Manda o link",
    desc: "Coloca o QR Code na mesa ou manda no grupo do WhatsApp. Os convidados clicam, digitam o nome e já enviam."
  },
  {
    num: "03",
    title: "Aprecia o resultado",
    desc: "Todas as fotos num único álbum organizado por pessoa e horário. Download de tudo em um clique."
  }
];

export const STATS = [
  { target: 12000, suffix: "+", label: "eventos criados" },
  { target: 840000, suffix: "", label: "fotos enviadas" },
  { target: 98, suffix: "%", label: "satisfação" },
  { target: 0, suffix: "", label: "apps necessários" }
];
