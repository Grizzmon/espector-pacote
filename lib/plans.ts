export type Plan = {
  id: string
  name: string
  tagline: string
  priceOld?: number
  price: number
  highlight?: boolean
  badge?: string
  elite?: boolean
  // Preencha com o link do checkout de cada plano.
  // Se ficar vazio, o botão apenas dispara o evento de compra.
  checkoutUrl?: string
  // Edite manualmente as características de cada plano.
  features: string[]
}

export const plans: Plan[] = [
  {
    id: '8337992',
    name: 'ESPECTOR 2.0',
    tagline: 'O essencial para começar com segurança.',
    price: 47.9,
    checkoutUrl: 'https://go.hotmart.com/D107214279J',
    features: [
      'Rastreie conversas de um numero com acesso a tres fotos e registros de chamadas',
      'Receba notificaçao quando o numero suspeito estiver em conversa com seu parceiro',
      'Acompanhe a chamda em tempo real sem que ninguem saiba',
      'Ative uma vez e monitore seus contatos',
    ],
  },
  {
    id: '8340467',
    name: 'ESPECTOR PRO PLUS',
    tagline: 'O favorito de quem quer o melhor custo-benefício.',
    priceOld: 369,
    price: 89.9,
    highlight: true,
    badge: 'MAIS VENDIDO',
    checkoutUrl: 'https://go.hotmart.com/W107219861R',
    features: [
      'Tudo do plano 2.0',
      'Sistema rastreiador sem barreira, rasteria qualquer numero',
      'fotos de visualizaçao unicas disponiveis',
      'Acesso a fotos e videos sem sensura nenhuma ',
      'Especione quantos numeros quiser sem limitaçao',
      'Localizaçao em tempo real e acompanhamento de chamadas em tempo real',
      'Suporte e Atualizaçao em primeira mao e garantia',
    ],
  },
  {
    id: '8340486',
    name: 'ESPECTOR NO LIMITS',
    tagline: 'A experiência elite, sem limites.',
    priceOld: 679,
    price: 159.99,
    elite: true,
    badge: 'ELITE',
    checkoutUrl: 'https://go.hotmart.com/H107219899X',
    features: [
      'Tudo do plano Pro Plus',
      'Rastrei numeros sem ter que esperar na fila, em poucos segundos.',
      'Acompanhe o hitorico de chamada de video',
      'fotos de visualiçao unica',
      'Uso definitivo e com atualizaçoes suporte em primeira mao',
      'Localizaçao em tempo real e acompanhamento de chamadas em tempo real',
    ],
  },
]

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
