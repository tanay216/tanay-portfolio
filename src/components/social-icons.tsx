import { site } from '@/data/content'
import { asset } from '@/lib/asset'

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="flex items-center gap-4">
        <li>
          <a href={site.discord} target="_blank" rel="noreferrer" aria-label="Discord">
            <img src={asset('/images/discord.png')} alt="" width={30} height={30} className="size-[30px]" />
          </a>
        </li>
        <li>
          <a href={site.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={asset('/images/linkedin.png')} alt="" width={30} height={30} className="size-[30px]" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export function SocialIconsWithTwitter({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="flex items-center gap-4">
        <li>
          <a href={site.discord} target="_blank" rel="noreferrer" aria-label="Discord">
            <img src={asset('/images/discord.png')} alt="" width={30} height={30} className="size-[30px]" />
          </a>
        </li>
        <li>
          <a href={site.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={asset('/images/linkedin.png')} alt="" width={30} height={30} className="size-[30px]" />
          </a>
        </li>
        <li>
          <a href={site.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <span className="inline-flex size-[30px] items-center justify-center text-wix-ink" aria-hidden>
              𝕏
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
