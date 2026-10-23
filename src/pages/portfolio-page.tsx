import { WixButton } from '@/components/wix-button'
import { portfolioRows, type PortfolioMedia } from '@/data/content'
import { cn } from '@/lib/utils'

function MediaCell({ media }: { media: PortfolioMedia }) {
  if (media.type === 'youtube') {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${media.videoId}`}
          title={media.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  if (media.type === 'image') {
    return (
      <img src={media.src} alt={media.alt} className="h-full min-h-[280px] w-full object-cover" />
    )
  }
  return (
    <div
      className={cn(
        'min-h-[280px] w-full',
        media.variant === 'blue' ? 'bg-wix-sky-block' : 'bg-wix-cream',
      )}
      aria-hidden
    />
  )
}

function TextCell({
  name,
  roles,
  description,
  cta,
}: {
  name: string
  roles: string
  description: string
  cta: { label: string; href: string }
}) {
  return (
    <div className="flex h-full flex-col justify-center bg-wix-panel px-8 py-10 md:px-12 md:py-14">
      <h3 className="wix-page-title text-[2rem] md:text-[2.5rem]">{name}</h3>
      <p className="mt-4 text-[18px] font-medium text-wix-ink">My Roles: {roles}</p>
      <div className="mt-4 space-y-4 text-[16px] font-light leading-relaxed text-wix-ink">
        {description.split('\n\n').map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <div className="mt-8">
        <WixButton href={cta.href} external className="max-w-[280px] text-[13px]">
          {cta.label}
        </WixButton>
      </div>
    </div>
  )
}

export function PortfolioPage() {
  return (
    <div className="bg-wix-cream">
      <div className="px-6 py-14 text-center md:px-10 md:py-16">
        <h1 className="wix-page-title">My Projects</h1>
      </div>
      <div className="mx-auto max-w-[1280px]">
        {portfolioRows.map((row) => (
          <div
            key={row.id}
            className="grid min-h-[320px] grid-cols-1 md:grid-cols-2"
          >
            {row.mediaSide === 'left' ? (
              <>
                <MediaCell media={row.media} />
                <TextCell
                  name={row.name}
                  roles={row.roles}
                  description={row.description}
                  cta={row.cta}
                />
              </>
            ) : (
              <>
                <TextCell
                  name={row.name}
                  roles={row.roles}
                  description={row.description}
                  cta={row.cta}
                />
                <MediaCell media={row.media} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
