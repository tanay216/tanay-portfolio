import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type WixButtonProps = {
  href: string
  children: ReactNode
  className?: string
  hero?: boolean
  external?: boolean
}

export function WixButton({ href, children, className, hero, external }: WixButtonProps) {
  const classNames = cn('wix-btn', hero && 'wix-btn-hero', className)
  if (!external && href.startsWith('/')) {
    return (
      <Link to={href} className={classNames}>
        {children}
      </Link>
    )
  }
  return (
    <a
      href={href}
      className={classNames}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
