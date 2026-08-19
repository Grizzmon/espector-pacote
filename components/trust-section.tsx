import { CreditCard, Eye, Headphones, LockKeyhole } from 'lucide-react'

const items = [
  {
    icon: LockKeyhole,
    title: 'Segurança de ponta',
    description:
      'Todas as informações são protegidas com criptografia de ponta a ponta.',
  },
  {
    icon: Eye,
    title: 'Privacidade garantida',
    description:
      'Seus dados são confidenciais e nunca compartilhados com terceiros.',
  },
  {
    icon: CreditCard,
    title: 'Pagamento protegido',
    description:
      'Checkout com ambiente seguro e verificado. Compre com tranquilidade.',
  },
  {
    icon: Headphones,
    title: 'Suporte dedicado',
    description:
      'Atendimento humano pronto para te ajudar em cada etapa do processo.',
  },
]

export function TrustSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon width={22} height={22} />
              </span>
              <h3 className="text-sm font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
