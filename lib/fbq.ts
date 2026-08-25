export const SITE_ORIGEM = 'espector'
export const PAIS_ALVO = 'Brasil'

declare global {
  interface Window {
    fbq?: (
      track: string,
      event: string,
      params?: Record<string, unknown>
    ) => void
  }
}

export function trackInitiateCheckout({
  planId,
  planName,
  value,
}: {
  planId: string
  planName: string
  value: number
}) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return
  }

  window.fbq('track', 'InitiateCheckout', {
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