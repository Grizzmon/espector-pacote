import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { PlansSection } from '@/components/plans-section'
import { ReviewsSection } from '@/components/reviews-section'
import { GuaranteeSection } from '@/components/guarantee-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <PlansSection />
        <GuaranteeSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
