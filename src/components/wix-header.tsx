import { NavLink } from 'react-router-dom'
import { site } from '@/data/content'
import { cn } from '@/lib/utils'

const nav = [
  { to: '/', label: 'HOME' },
  { to: '/portfolio', label: 'PORTFOLIO' },
  { href: site.resumePath, label: 'RESUME', external: true },
  { to: '/contact', label: 'CONTACT' },
] as const

export function WixHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-[85px] max-w-[1280px] items-center justify-between px-6 md:px-10">
        <NavLink
          to="/"
          className="max-w-[50%] text-[14px] font-light leading-tight text-wix-ink hover:opacity-80"
        >
          {site.brand}
        </NavLink>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-0" aria-label="Primary">
          {nav.map((item) =>
            'href' in item ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 text-[16px] font-light text-wix-ink hover:text-wix-accent"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-[16px] font-light transition-colors',
                    isActive ? 'text-wix-accent' : 'text-wix-ink hover:text-wix-accent',
                  )
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
