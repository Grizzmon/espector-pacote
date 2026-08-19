'use client'

import { Check, Crown, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Stars } from '@/components/stars'
import { cn } from '@/lib/utils'
import { formatBRL, plans, type Plan } from '@/lib/plans'
import { trackPurchase } from '@/lib/fbq'

function PlanCard({ plan }: { plan: Plan }) {
  function handleBuy() {
    // Dispara o evento de compra no Meta Pixel ao clicar.
    trackPurchase({
      planId: plan.id,
      planName: plan.name,
      value: plan.price,
    })

    // Se houver link de checkout, redireciona.
    if (plan.checkoutUrl) {
      window.location.href = plan.checkoutUrl
    }
  }

  const Icon = plan.elite ? Crown : plan.highlight ? Zap : Sparkles
  const discount =
    plan.priceOld != null
      ? Math.round(((plan.priceOld - plan.price) / plan.priceOld) * 100)
      : null

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-transform',
        plan.highlight
          ? 'border-primary shadow-xl ring-2 ring-primary lg:-translate-y-3 lg:scale-[1.03]'
          : 'border-border hover:-translate-y-1',
        plan.elite && 'border-accent/40',
      )}
    >
      {plan.badge && (
        <span
          className={cn(
            'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide shadow',
            plan.highlight
              ? 'bg-primary text-primary-foreground'
              : 'bg-accent text-accent-foreground',
          )}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-2">
        <span
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-xl',
            plan.highlight
              ? 'bg-primary/15 text-primary'
              : plan.elite
                ? 'bg-accent/10 text-accent'
                : 'bg-secondary text-secondary-foreground',
          )}
        >
          <Icon width={20} height={20} />
        </span>
        <div>
          <h3 className="text-base font-bold text-card-foreground">
            {plan.name}
          </h3>
          <Stars rating={5} size={13} />
        </div>
      </div>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        {plan.tagline}
      </p>

      <div className="mt-5">
        {plan.priceOld != null && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">
              {formatBRL(plan.priceOld)}
            </span>
            {discount != null && (
              <span className="rounded-md bg-destructive/10 px-1.5 py-0.5 text-xs font-bold text-destructive">
                -{discount}%
              </span>
            )}
          </div>
        )}
        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-card-foreground">
            {formatBRL(plan.price)}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Pagamento único · acesso imediato
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              width={18}
              height={18}
              className="mt-0.5 shrink-0 text-primary"
            />
            <span className="text-card-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleBuy}
        size="lg"
        className={cn(
          'mt-6 h-12 w-full text-base font-bold',
          plan.highlight
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : plan.elite
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/70',
        )}
      >
        Comprar agora
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Compra 100% segura e protegida
      </p>
    </div>
  )
}

export function PlansSection() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Nossos planos
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Escolha o acesso que combina com você. Todos com garantia e
          pagamento protegido.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
