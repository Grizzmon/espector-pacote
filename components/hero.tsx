import { BadgeCheck, Lock, Users } from 'lucide-react'
import { Stars } from '@/components/stars'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          <BadgeCheck width={14} height={14} className="text-primary" />
          Plataforma verificada e segura
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Escolha o plano Espector ideal para você
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-accent-foreground/80 sm:text-lg">
          Acesso imediato, pagamento protegido e privacidade garantida. Junte-se
          a milhares de pessoas que já confiam no Espector.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <Stars rating={5} />
            <span className="text-sm font-medium text-accent-foreground/90">
              4,9/5 · +12.000 avaliações
            </span>
          </div>
          <div className="hidden h-5 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-4 text-sm text-accent-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Users width={16} height={16} className="text-primary" />
              +50 mil usuários
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock width={16} height={16} className="text-primary" />
              Dados criptografados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
