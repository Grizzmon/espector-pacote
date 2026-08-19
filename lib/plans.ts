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
      'Característica 1 (edite aqui)',
      'Característica 2 (edite aqui)',
      'Característica 3 (edite aqui)',
      'Característica 4 (edite aqui)',
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
      'Característica 1 (edite aqui)',
      'Característica 2 (edite aqui)',
      'Característica 3 (edite aqui)',
      'Característica 4 (edite aqui)',
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
      'Recurso exclusivo 1 (edite aqui)',
      'Recurso exclusivo 2 (edite aqui)',
      'Recurso exclusivo 3 (edite aqui)',
      'Acesso ilimitado (edite aqui)',
    ],
  },
]

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
