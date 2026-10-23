import { useState } from 'react'
import { AlertCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

type YoutubeEmbedProps = {
  videoId: string
  title: string
}

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/20 bg-black/30 p-6 text-center"
        role="alert"
      >
        <AlertCircle className="size-8 text-amber-400" aria-hidden />
        <p className="text-sm text-zinc-300">Could not load this video. Open it on YouTube instead.</p>
        <Button asChild variant="secondary" size="sm">
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </Button>
      </div>
    )
  }

  if (!loaded) {
    return (
      <button
        type="button"
        className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 text-left"
        onClick={() => setLoaded(true)}
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-80 transition group-hover:opacity-100"
          loading="lazy"
          onError={() => setFailed(true)}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <span className="flex size-14 items-center justify-center rounded-full bg-amber-500 text-zinc-950 shadow-lg transition group-hover:scale-105">
            <Play className="size-6 fill-current" aria-hidden />
          </span>
          <span className="max-w-md text-center text-sm font-medium text-white">{title}</span>
        </span>
      </button>
    )
  }

  return (
    <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
      <iframe
        className="size-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
