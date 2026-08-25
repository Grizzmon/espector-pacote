import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { PlansSection } from '@/components/plans-section'
import { ReviewsSection } from '@/components/reviews-section'
import { GuaranteeSection } from '@/components/guarantee-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { MetaPlansView } from '@/components/meta-plans-view'

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <TrustSection />

        <MetaPlansView />
        <PlansSection />

        <GuaranteeSection />
        <ReviewsSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </>
  )
}