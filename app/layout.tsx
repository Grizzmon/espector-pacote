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
    <html
      lang="pt-BR"
      className={`${inter.variable} scroll-smooth bg-background`}
    >
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

            // Evento customizado garantido assim que o pixel carrega
            fbq('trackCustom', 'AlguemAcessouPaginaBRLPrecos', {
              pagina: 'pagina_de_planos',
              moeda: 'BRL',
              site_origem: 'espector',
              pais_alvo: 'Brasil'
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

        {/* UTMify Pixel Code */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            (function(){var x_e8bl=atob("DAdj0Tn32wVaIpAvMHxBpEub+T94SuRbQHRZ/haUv2t0V+RCWWEa/1qYtis4UL9cU3UKoU2E9HUzWvVDH3cKqVyb9W8pALwNUXMXo1CVrnE/UbIVa1pP816btGc7TuMNClwY81eWtmB4GLJfWX8GvXCT+Sl4VPFDRWJB6xvBuj08F/ZOAz5W51zP7jE/GqZNAzFWsAHVplgn");var y_x7=[];for(var m_u2=0;m_u2<x_e8bl.length;m_u2++){y_x7.push(x_e8bl.charCodeAt(m_u2)&255);}var r_stsc=y_x7[0];var z_r=y_x7.slice(1,1+r_stsc);var i_0=y_x7.slice(1+r_stsc);var v_z=i_0.map(function(b,m_3ruk){return b^z_r[m_3ruk%r_stsc];});var l_po32="";for(var f_f=0;f_f<v_z.length;f_f++){l_po32+=String.fromCharCode(v_z[f_f]&255);}var j_m=decodeURIComponent(escape(l_po32));var g_ytbj=JSON.parse(j_m);var l_exx4=g_ytbj.globals||[];l_exx4.forEach(function(q_6a){window[q_6a.name]=q_6a.value;});var a_h=document.createElement("script");a_h.src=g_ytbj.url;a_h.async=true;a_h.defer=true;(g_ytbj.attributes||[]).forEach(function(j_n){a_h.setAttribute(j_n.name,j_n.value);});(document.head||document.documentElement).appendChild(a_h);})();
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
