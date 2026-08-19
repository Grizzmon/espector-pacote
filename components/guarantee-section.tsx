import { RefreshCw, ShieldCheck } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center sm:flex-row sm:text-left">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <ShieldCheck width={32} height={32} />
        </span>
        <div>
          <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold text-foreground sm:justify-start">
            Garantia de 7 dias
            <RefreshCw width={18} height={18} className="text-primary" />
          </h2>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Sua satisfação é prioridade. Se não ficar satisfeito, devolvemos
            100% do seu dinheiro em até 7 dias, sem burocracia — conforme o
            Código de Defesa do Consumidor.
          </p>
        </div>
      </div>
    </section>
  )
}
