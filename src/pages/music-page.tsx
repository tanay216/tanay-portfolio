import { MusicPlayer } from '@/components/music-player'

export function MusicPage() {
  return (
    <div className="bg-wix-cream px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[820px]">
        <h1 className="wix-page-title text-center">My Music</h1>
        <MusicPlayer />
      </div>
    </div>
  )
}
