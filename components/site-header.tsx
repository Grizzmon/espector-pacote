import { ShieldCheck } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-accent/95 backdrop-blur supports-[backdrop-filter]:bg-accent/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ShieldCheck width={20} height={20} />
          </span>
          <span className="text-lg font-bold tracking-tight text-accent-foreground">
            Espector
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-accent-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Conta verificada
        </div>
      </div>
    </header>
  )
}
