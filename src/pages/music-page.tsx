import { site } from '@/data/content'

export function MusicPage() {
  return (
    <div className="bg-wix-cream px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[720px] text-center">
        <h1 className="wix-page-title">My Music</h1>
        <p className="mt-8 text-[16px] font-light leading-relaxed text-wix-ink">
          The Wix site embedded a music player here. Add your streaming links in{' '}
          <code className="rounded bg-wix-panel px-1.5 py-0.5 text-sm">src/data/content.ts</code> when
          you are ready.
        </p>
        <p className="mt-6">
          <a href={`mailto:${site.email}`} className="text-wix-accent underline-offset-4 hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </div>
  )
}
