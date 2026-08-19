import { BadgeCheck } from 'lucide-react'
import { Stars } from '@/components/stars'

const reviews = [
  {
    name: 'Ricardo M.',
    initials: 'RM',
    text: 'Melhor decisão que tomei. Simples de usar e o suporte respondeu na hora. Recomendo demais!',
  },
  {
    name: 'Ana Paula S.',
    initials: 'AS',
    text: 'Fiquei receosa no início, mas o pagamento é super seguro e o acesso foi imediato. Vale cada centavo.',
  },
  {
    name: 'Bruno F.',
    initials: 'BF',
    text: 'O plano Pro Plus é sensacional pelo preço. Já indiquei para vários amigos.',
  },
  {
    name: 'Carla D.',
    initials: 'CD',
    text: 'Atendimento nota 10 e tudo funcionou perfeitamente. Ambiente confiável de verdade.',
  },
  {
    name: 'Felipe R.',
    initials: 'FR',
    text: 'Comprei o No Limits e superou minhas expectativas. Experiência premium mesmo.',
  },
  {
    name: 'Juliana T.',
    initials: 'JT',
    text: 'Processo rápido, seguro e transparente. Me senti protegida em todas as etapas.',
  },
]

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-2">
          <Stars rating={5} size={22} />
        </div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Avaliado por milhares de clientes
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Nota média de 4,9/5 baseada em mais de 12.000 avaliações verificadas.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <Stars rating={5} size={15} />
            <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-card-foreground/90">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                {review.initials}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                {review.name}
                <BadgeCheck width={15} height={15} className="text-primary" />
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
