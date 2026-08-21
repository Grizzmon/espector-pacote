import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Espector — Planos de Acesso',
  description:
    'Escolha o plano Espector ideal para você. Acesso seguro, privado e verificado. Espector 2.0, Pro Plus e No Limits.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#075E54',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '829061486173119');

            // Evento padrão do Meta
            fbq('track', 'PageView');

            // Evento padrão ViewContent — NÃO é suprimido pelo Meta como os
            // eventos customizados não verificados. Fonte única de disparo.
            // Os parâmetros permitem segmentar a Página de Planos BRL.
            fbq('track', 'ViewContent', {
              content_name: 'PaginaDePlanosBRL',
              content_category: 'pagina_de_planos',
              currency: 'BRL',
              pais_alvo: 'Brasil',
              site_origem: 'espector'
            });
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=829061486173119&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
