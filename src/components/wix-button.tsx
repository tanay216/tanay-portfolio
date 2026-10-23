import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type WixButtonProps = {
  href: string
  children: ReactNode
  className?: string
  hero?: boolean
  external?: boolean
}

export function WixButton({ href, children, className, hero, external }: WixButtonProps) {
  return (
    <a
      href={href}
      className={cn('wix-btn', hero && 'wix-btn-hero', className)}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
