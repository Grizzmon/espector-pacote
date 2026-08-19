'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'O pagamento é seguro?',
    a: 'Sim. Utilizamos um ambiente de checkout verificado e criptografado. Seus dados de pagamento são protegidos em todas as etapas.',
  },
  {
    q: 'O acesso é liberado na hora?',
    a: 'Sim. Assim que o pagamento é confirmado, o acesso ao seu plano é liberado imediatamente.',
  },
  {
    q: 'Meus dados ficam privados?',
    a: 'Totalmente. Levamos privacidade a sério e nunca compartilhamos suas informações com terceiros.',
  },
  {
    q: 'Posso pedir reembolso?',
    a: 'Sim. Você tem garantia de 7 dias. Caso não fique satisfeito, devolvemos 100% do valor pago.',
  },
  {
    q: 'Qual a diferença entre os planos?',
    a: 'Cada plano oferece um nível de acesso e recursos. O Pro Plus é o mais escolhido pelo custo-benefício, e o No Limits é a opção elite, sem limites.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-card-foreground">{q}</span>
        <ChevronDown
          width={18}
          height={18}
          className={cn(
            'shrink-0 text-primary transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
          {a}
        </p>
      )}
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-foreground">
        Perguntas frequentes
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} {...faq} />
        ))}
      </div>
    </section>
  )
}
