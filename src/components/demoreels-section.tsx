import { useState } from 'react'
import { demoreels } from '@/data/content'
import { cn } from '@/lib/utils'

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="4" y="8" width="56" height="18" rx="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 17h-4M18 15v4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="44" cy="15" r="2" fill="currentColor" />
      <circle cx="50" cy="19" r="2" fill="currentColor" />
    </svg>
  )
}

export function DemoreelsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = demoreels[activeIndex]

  return (
    <section aria-labelledby="demoreels-title">
      <div className="wix-band py-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-6 px-6 md:px-10">
          <GamepadIcon className="hidden h-8 w-16 text-sky-700/70 sm:block" />
          <h2 id="demoreels-title" className="wix-section-title text-center">
            Demoreels
          </h2>
          <GamepadIcon className="hidden h-8 w-16 text-sky-700/70 sm:block" />
        </div>
      </div>

      <div className="relative min-h-[420px] w-full overflow-hidden bg-black">
        <img
          src={`https://i.ytimg.com/vi/${active.youtubeId}/maxresdefault.jpg`}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto flex min-h-[420px] max-w-[1280px] flex-col items-center justify-center px-4 py-10">
          <div className="w-full max-w-3xl border border-white/20 bg-[#1a1030]/85 p-6 text-center text-white shadow-2xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">Game Audio Designer</p>
            <button
              type="button"
              className="mx-auto mt-6 flex items-center gap-2 text-sm underline-offset-4 hover:underline"
              onClick={() => {
                window.open(`https://www.youtube.com/watch?v=${active.youtubeId}`, '_blank', 'noopener,noreferrer')
              }}
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-white">
                ▶
              </span>
              Play Video
            </button>
            <p className="mt-8 font-[family-name:var(--font-barlow-condensed)] text-3xl font-medium sm:text-4xl">
              {active.title.includes('Music') ? 'Music Demoreel' : 'SFX Demoreel'}
            </p>
            <p className="mt-2 text-sm text-white/70">— Tanay Jain</p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="flex gap-2">
            {demoreels.map((reel, i) => (
              <button
                key={reel.id}
                type="button"
                className={cn(
                  'size-2 rounded-full',
                  i === activeIndex ? 'bg-white' : 'bg-white/40',
                )}
                aria-label={`Show ${reel.title}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="rounded border border-white/60 bg-black/40 px-4 py-1 text-xs text-white"
            onClick={() => setActiveIndex((i) => (i + 1) % demoreels.length)}
          >
            All Videos +
          </button>
        </div>
      </div>
    </section>
  )
}
