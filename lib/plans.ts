export type Plan = {
  id: string
  name: string
  tagline: string
  priceOld?: number
  price: number
  highlight?: boolean
  badge?: string
  elite?: boolean
  checkoutUrl?: string
  features: string[]
}

export const plans: Plan[] = [
  {
    id: '3899115',
    name: 'ESPECTOR 2.0',
    tagline: 'O essencial para começar com segurança.',
    price: 47.9,
    checkoutUrl: 'https://checkout.escalepay.com/3899115',
    features: [
      'Rastreie conversas de um numero com acesso a tres fotos e registros de chamadas',
      'Receba notificaçao quando o numero suspeito estiver em conversa com seu parceiro',
      'Acompanhe a chamda en tempo real sem que ninguem saiba',
      'Ative uma vez e monitore seus contatos',
    ],
  },
  {
    id: '2206074',
    name: 'ESPECTOR PRO PLUS',
    tagline: 'O favorito de quem quer o melhor custo-benefício.',
    priceOld: 369,
    price: 89.9,
    highlight: true,
    badge: 'MAIS VENDIDO',
    checkoutUrl: 'https://checkout.escalepay.com/2206074',
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
    id: '4854382',
    name: 'ESPECTOR NO LIMITS',
    tagline: 'A experiência elite, sem limites.',
    priceOld: 679,
    price: 159.99,
    elite: true,
    badge: 'ELITE',
    checkoutUrl: 'https://checkout.escalepay.com/4854382',
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

// Função para disparar o evento personalizado do Meta Pixel
export function handlePlanClick(plan: Plan) {
  // Dispara o evento personalizado solicitado
  if (typeof window !== 'undefined' && (window as any).fbq) {
    // Evento personalizado
    (window as any).fbq('trackCustom', 'PagPlansBrlAcessado', {
      content_name: plan.name,
      content_ids: [plan.id],
      content_type: 'product',
      value: plan.price,
      currency: 'BRL',
    })

    // (Opcional recomendado) Também dispara o InitiateCheckout padrão do Meta
    (window as any).fbq('track', 'InitiateCheckout', {
      content_name: plan.name,
      content_ids: [plan.id],
      content_type: 'product',
      value: plan.price,
      currency: 'BRL',
    })
  }

  // Redireciona para o checkout se houver URL
  if (plan.checkoutUrl && typeof window !== 'undefined') {
    // Pequeno delay de segurança para garantir o disparo do pixel antes de mudar de página
    setTimeout(() => {
      window.location.href = plan.checkoutUrl!
    }, 150)
  }
}
