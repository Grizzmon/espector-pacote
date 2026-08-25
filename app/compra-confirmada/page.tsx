'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (
      track: string,
      event: string,
      params?: Record<string, unknown>
    ) => void
  }
}

export default function CompraConfirmadaPage() {
  useEffect(() => {
    if (typeof window.fbq !== 'function') {
      return
    }

    // Evita disparar o Purchase várias vezes na mesma sessão
    const purchaseAlreadySent = sessionStorage.getItem(
      'espector_purchase_sent'
    )

    if (purchaseAlreadySent === '1') {
      return
    }

    // Lê o valor enviado pelo checkout na URL
    const params = new URLSearchParams(window.location.search)
    const valor = Number(params.get('valor'))

    // Sem valor válido, não dispara Purchase
    if (!Number.isFinite(valor) || valor <= 0) {
      console.warn('Purchase não enviado: valor da compra não encontrado.')
      return
    }

    // Envia a compra para o Meta Pixel
    window.fbq('track', 'Purchase', {
      value: valor,
      currency: 'BRL',
      content_type: 'product',
    })

    sessionStorage.setItem('espector_purchase_sent', '1')
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg rounded-2xl border bg-card p-8 text-center shadow-lg">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-4xl">
          ✅
        </div>

        <h1 className="text-3xl font-extrabold text-foreground">
          Compra realizada com sucesso!
        </h1>

        <p className="mt-4 text-muted-foreground">
          Obrigado pela sua compra. O seu pagamento foi confirmado.
        </p>

        <p className="mt-6 text-sm text-muted-foreground">
          As informações de acesso serão enviadas conforme as instruções
          apresentadas durante a compra.
        </p>
      </div>
    </main>
  )
}