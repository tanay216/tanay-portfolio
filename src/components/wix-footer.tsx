import { site } from '@/data/content'

export function WixFooter() {
  return (
    <footer className="wix-band border-t border-black/5">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-5 text-[14px] font-light text-wix-ink sm:flex-row md:px-10">
        <p>{site.copyright}</p>
        <a href={`mailto:${site.email}`} className="hover:text-wix-accent">
          {site.email}
        </a>
      </div>
    </footer>
  )
}
