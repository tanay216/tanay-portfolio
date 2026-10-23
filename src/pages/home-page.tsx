import { DemoreelsSection } from '@/components/demoreels-section'
import { SocialIcons } from '@/components/social-icons'
import { WixButton } from '@/components/wix-button'
import { site } from '@/data/content'
import { asset } from '@/lib/asset'

export function HomePage() {
  return (
    <>
      <section
        className="wix-hero-bg"
        style={{ backgroundImage: `url(${asset('/images/hero-bg.png')})` }}
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:px-10 md:py-20">
          <div className="flex justify-center md:justify-start">
            <img
              src={asset('/images/profile.jpg')}
              alt="Portrait of Tanay Jain"
              width={431}
              height={467}
              className="max-h-[467px] w-full max-w-[431px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="wix-h1">{site.tagline}</h1>
            <p className="max-w-[310px] text-[20px] font-light leading-7 text-wix-ink">
              {site.subtitle}
            </p>
            <div className="flex w-full max-w-[430px] flex-col gap-3">
              <WixButton href="/portfolio" hero>GAME AUDIO PROJECTS</WixButton>
              <WixButton href="/music" hero>MY MUSIC</WixButton>
              <WixButton href="/contact" hero>WORK WITH ME</WixButton>
            </div>
            <SocialIcons />
          </div>
        </div>
      </section>
      <DemoreelsSection />
    </>
  )
}
