import { SocialIconsWithTwitter } from '@/components/social-icons'
import { contactCopy, site } from '@/data/content'

export function ContactPage() {
  return (
    <div className="relative min-h-[calc(100svh-85px-72px)] overflow-hidden">
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="wix-hero-bg opacity-90" aria-hidden />
        <div className="bg-wix-panel" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6 py-12 md:px-10 md:py-16">
        <div className="bg-wix-panel/95 p-8 md:p-12">
          <h1 className="wix-page-title">{contactCopy.title}</h1>
          <p className="mt-6 max-w-xl text-[16px] font-light leading-relaxed">{contactCopy.intro}</p>
        </div>
        <div className="mt-0 bg-[#cce4f7]/90 p-8 md:p-12">
          <h2 className="wix-page-title text-[2rem]">{contactCopy.chatTitle}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-[15px] font-light hover:text-wix-accent">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-2 block text-[15px] font-light hover:text-wix-accent">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium">Social Media</p>
              <SocialIconsWithTwitter className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
