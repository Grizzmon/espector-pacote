// Identificador do site usado nos eventos do Meta Pixel.
// Edite este valor com o nome/identificador do seu site.
export const SITE_ORIGEM = 'IDENTIFICADOR_SITE'
export const PAIS_ALVO = 'Brasil'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type PurchaseEvent = {
  planId: string
  planName: string
  value: number
}

/**
 * Dispara o evento de compra no Meta Pixel quando o usuário clica
 * no botão de um plano.
 */
export function trackPurchase({ planId, planName, value }: PurchaseEvent) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return

  window.fbq('track', 'Purchase', {
    value,
    currency: 'BRL',
    content_ids: [planId],
    content_name: planName,
    content_type: 'product',
    pagina: 'pagina_de_planos',
    site_origem: SITE_ORIGEM,
    pais_alvo: PAIS_ALVO,
  })
}
