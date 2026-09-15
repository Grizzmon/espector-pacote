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
    tagline: 'Descubra a verdade de um número em minutos, sem deixar rastro.',
    price: 47.9,
    checkoutUrl: 'https://pay.kiwify.com.br/BgTy28q',
    features: [
      'Rastreie todas as conversas de 1 número, incluindo mensagens apagadas',
      'Recupere fotos e vídeos enviados mesmo depois de excluídos',
      'Registro completo de chamadas: quem ligou, quando e por quanto tempo',
      'Alerta instantâneo quando o número suspeito falar com seu parceiro(a)',
      'Acompanhe chamadas em tempo real, 100% invisível para o alvo',
      'Ative uma vez e monitore para sempre, sem mensalidade',
      'Proteção total: seus dados e sua identidade nunca são expostos',
      'Garantia de 7 dias ou seu dinheiro de volta',
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
    checkoutUrl: 'https://pay.kiwify.com.br/qnxTYjF',
    features: [
      'Tudo do plano ESPECTOR 2.0',
      'Rastreie números ilimitados, sem barreira e sem fila',
      'Fotos e vídeos de visualização única salvos automaticamente',
      'Acesso a fotos e vídeos sem censura, mesmo apagados',
      'Localização em tempo real do número monitorado',
      'Histórico de conversas arquivadas e grupos ocultos',
      'Suporte prioritário e atualizações em primeira mão',
      'Garantia de 7 dias ou seu dinheiro de volta',
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
      'Tudo do plano PRO PLUS',
      'Resultados em segundos: prioridade máxima, zero espera',
      'Histórico completo de chamadas de vídeo e áudio',
      'Recuperação de mídias apagadas há mais de 30 dias',
      'Acesso vitalício com atualizações e suporte VIP',
      'Relatório completo em PDF para você guardar as provas',
      'Garantia estendida de 7 dias ou seu dinheiro de volta',
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
