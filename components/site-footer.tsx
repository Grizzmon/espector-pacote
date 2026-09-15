import { ArrowUp, Lock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex w-full flex-col items-center gap-4 border-b border-white/10 pb-10">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              Pronto para descobrir a verdade?
            </h2>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-accent-foreground/80">
              Escolha seu plano agora e tenha acesso imediato. Garantia de 7
              dias ou seu dinheiro de volta.
            </p>
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-base font-bold shadow-lg shadow-primary/30"
            >
              <a href="#planos" className="inline-flex items-center gap-2 whitespace-nowrap">
                Escolher meu plano
                <ArrowUp width={18} height={18} aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ShieldCheck width={18} height={18} />
            </span>
            <span className="text-base font-bold">Espector</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="#"
              className="text-accent-foreground/80 transition-colors hover:text-accent-foreground"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-accent-foreground/80 transition-colors hover:text-accent-foreground"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-accent-foreground/80 transition-colors hover:text-accent-foreground"
            >
              Contato / Suporte
            </a>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-medium">
            <Lock width={14} height={14} className="text-primary" />
            Site protegido · Compra 100% segura
          </div>

          <p className="max-w-xl text-pretty text-xs leading-relaxed text-accent-foreground/60">
            © {new Date().getFullYear()} Espector. Todos os direitos
            reservados. Este site não é afiliado ao Facebook/Meta. Ao continuar,
            você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </div>
      </div>
    </footer>
  )
}
