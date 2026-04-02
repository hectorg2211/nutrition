import { ConsultationBanner } from '@/components/landing/consultation-banner'
import { HeroSection } from '@/components/landing/hero'
import { InstagramCarousel } from '@/components/landing/instagram-carousel'
import { NeoReveal } from '@/components/motion/neo-reveal'
import { LinktreeSection } from '@/components/landing/linktree-section'
import { LocationSection } from '@/components/landing/location-section'
import { PromoSection } from '@/components/landing/promo-section'
import { ShopSection } from '@/components/landing/shop-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { TipsSection } from '@/components/landing/tips-section'
import { WhatsAppFab } from '@/components/landing/whatsapp-fab'

export default function Home() {
  return (
    <div className='relative flex min-h-full flex-1 flex-col'>
      <main>
        <HeroSection />
        <ConsultationBanner />
        <ShopSection />
        <section
          className='border-t-2 border-black px-4 pt-16 pb-20 md:px-8 md:pb-24'
          aria-labelledby='instagram-heading'
        >
          <div className='mx-auto max-w-6xl'>
            <NeoReveal className='text-center'>
              <h2 id='instagram-heading' className='mb-2 font-heading text-3xl font-bold md:text-4xl'>
                En Instagram
              </h2>
              <p className='mb-10 text-muted-foreground'>
                Carrusel con publicaciones tipo feed — desliza para ver más.
              </p>
            </NeoReveal>
            <InstagramCarousel />
          </div>
        </section>
        <TipsSection />
        <LocationSection />
        <PromoSection />
        <LinktreeSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  )
}
