import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Stars({
  rating = 5,
  className,
  size = 16,
}: {
  rating?: number
  className?: string
  size?: number
}) {
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={cn(
            i < Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-muted text-muted-foreground/30',
          )}
        />
      ))}
    </div>
  )
}
