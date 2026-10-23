import { useEffect, useRef, useState } from 'react'
import { musicAlbum } from '@/data/content'
import { cn } from '@/lib/utils'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const total = Math.floor(seconds)
  const minutes = Math.floor(total / 60)
  const remainder = total % 60
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-1 size-7" aria-hidden>
      <path d="M8 5.2v13.6L19 12 8 5.2z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="0.5" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="0.5" fill="currentColor" />
    </svg>
  )
}

function SkipIcon({ direction }: { direction: 'prev' | 'next' }) {
  const previous = direction === 'prev'
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      {previous ? (
        <>
          <rect x="5" y="5" width="2" height="14" fill="currentColor" />
          <path d="M19 5.5 8 12l11 6.5V5.5z" fill="currentColor" />
        </>
      ) : (
        <>
          <path d="M5 5.5v13L16 12 5 5.5z" fill="currentColor" />
          <rect x="17" y="5" width="2" height="14" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

function VolumeIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path d="M4 9h3.2L12 5.2v13.6L7.2 15H4V9z" fill="currentColor" />
      {muted ? (
        <path d="M16 9.5 20.5 14M20.5 9.5 16 14" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path
          d="M15.5 9.2a3.4 3.4 0 0 1 0 5.6M17.8 7a6 6 0 0 1 0 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <circle cx="17" cy="6.5" r="2" fill="currentColor" />
      <circle cx="17" cy="17.5" r="2" fill="currentColor" />
      <path d="M8 11.2 15 7.4M8 12.8l7 3.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const autoplayRef = useRef(false)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.9)
  const [muted, setMuted] = useState(false)
  const [copied, setCopied] = useState(false)

  const track = musicAlbum.tracks[index]
  const progress = duration > 0 ? `${(currentTime / duration) * 100}%` : '0%'
  const shownDuration = duration > 0 ? formatTime(duration) : track.duration

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = muted ? 0 : volume
  }, [muted, volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !autoplayRef.current) return
    autoplayRef.current = false
    void audio.play().catch(() => setPlaying(false))
  }, [index])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) void audio.play().catch(() => setPlaying(false))
    else audio.pause()
  }

  function selectTrack(next: number) {
    if (next === index) {
      toggle()
      return
    }
    autoplayRef.current = true
    setCurrentTime(0)
    setDuration(0)
    setIndex(next)
  }

  function skip(direction: -1 | 1) {
    const next = index + direction
    if (next < 0 || next >= musicAlbum.tracks.length) {
      const audio = audioRef.current
      if (audio && direction < 0) audio.currentTime = 0
      return
    }
    autoplayRef.current = playing
    setCurrentTime(0)
    setDuration(0)
    setIndex(next)
  }

  function seek(value: number) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  async function share() {
    const url = window.location.href
    const payload = { title: `${track.title} — ${musicAlbum.artist}`, url }
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(payload)
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-12">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => {
          if (index < musicAlbum.tracks.length - 1) {
            autoplayRef.current = true
            setCurrentTime(0)
            setDuration(0)
            setIndex(index + 1)
          }
        }}
      />

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <img
          src={musicAlbum.cover}
          alt={musicAlbum.coverAlt}
          width={3000}
          height={3000}
          className="size-[168px] shrink-0 object-cover shadow-[0_8px_24px_rgba(40,26,57,0.12)]"
        />

        <div className="flex w-full min-w-0 flex-1 flex-col gap-5">
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              type="button"
              className="flex size-[72px] shrink-0 items-center justify-center rounded-full border-2 border-wix-ink text-wix-ink transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wix-ink"
              aria-label={playing ? `Pause ${track.title}` : `Play ${track.title}`}
              onClick={toggle}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-[15px] text-wix-ink/70">{musicAlbum.artist}</p>
              <p className="truncate text-[18px] font-normal text-wix-ink">{track.title}</p>
              <p className="text-[15px] text-wix-ink/70">{musicAlbum.title}</p>
            </div>

            <div className="relative shrink-0 self-start">
              <button
                type="button"
                className="flex size-9 items-center justify-center border border-wix-ink/80 text-wix-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wix-ink"
                aria-label={copied ? 'Link copied' : 'Share this playlist'}
                onClick={() => void share()}
              >
                <ShareIcon />
              </button>
              {copied ? (
                <span className="absolute top-full right-0 mt-1 text-xs whitespace-nowrap text-wix-ink/70">
                  Link copied
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-wix-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wix-ink disabled:opacity-30"
              aria-label="Previous track"
              disabled={index === 0 && currentTime < 0.5}
              onClick={() => skip(-1)}
            >
              <SkipIcon direction="prev" />
            </button>
            <button
              type="button"
              className="text-wix-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wix-ink disabled:opacity-30"
              aria-label="Next track"
              disabled={index === musicAlbum.tracks.length - 1}
              onClick={() => skip(1)}
            >
              <SkipIcon direction="next" />
            </button>

            <input
              className="music-range min-w-0 flex-1"
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              style={{ ['--music-progress' as string]: progress }}
              aria-label="Seek"
              onChange={(event) => seek(Number(event.target.value))}
            />

            <span className="shrink-0 text-[13px] tabular-nums text-wix-ink/80">
              {formatTime(currentTime)} / {shownDuration}
            </span>

            <button
              type="button"
              className="shrink-0 text-wix-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wix-ink"
              aria-label={muted || volume === 0 ? 'Unmute' : 'Mute'}
              aria-pressed={muted || volume === 0}
              onClick={() => setMuted((value) => !value)}
            >
              <VolumeIcon muted={muted || volume === 0} />
            </button>
            <input
              className="music-range hidden w-16 sm:block"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              style={{ ['--music-progress' as string]: `${(muted ? 0 : volume) * 100}%` }}
              aria-label="Volume"
              onChange={(event) => {
                setMuted(false)
                setVolume(Number(event.target.value))
              }}
            />
          </div>
        </div>
      </div>

      <ol className="mt-8 border-t border-[#d5ebf6]">
        {musicAlbum.tracks.map((item, itemIndex) => {
          const active = itemIndex === index
          return (
            <li key={item.id} className="border-b border-[#d5ebf6]">
              <button
                type="button"
                className={cn(
                  'flex w-full items-center gap-4 px-2 py-3.5 text-left text-[16px] transition-colors hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-wix-ink',
                  active ? 'font-normal text-wix-ink' : 'font-light text-wix-ink/90',
                )}
                aria-current={active ? 'true' : undefined}
                onClick={() => selectTrack(itemIndex)}
              >
                <span className="w-6 shrink-0 text-center tabular-nums text-wix-ink/55">
                  {itemIndex + 1}
                </span>
                <span className="min-w-0 flex-1 truncate">{item.title}</span>
                <span className="shrink-0 tabular-nums text-wix-ink/70">{item.duration}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
