import { Lock, ShieldCheck } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
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
