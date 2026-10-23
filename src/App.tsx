import { ExternalLink, FileDown, Link2, Mail, MapPin, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { YoutubeEmbed } from '@/components/youtube-embed'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  demoreels,
  education,
  experience,
  navItems,
  objective,
  projects,
  site,
  skillGroups,
  software,
} from '@/data/content'

function SectionHeading({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  return (
    <div id={id} className="scroll-mt-24 space-y-2">
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-zinc-400">{description}</p>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-amber-500 focus:px-3 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <section
          id="home"
          className="scroll-mt-24 grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20"
          aria-labelledby="hero-heading"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400">
              {site.title}
            </p>
            <h1 id="hero-heading" className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="text-lg text-pretty text-zinc-300 sm:text-xl">{site.subtitle}</p>
            <p className="max-w-xl text-pretty text-zinc-400">{objective}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-amber-500 text-zinc-950 hover:bg-amber-400">
                <a href="#demoreels">Watch demoreels</a>
              </Button>
              <Button asChild variant="secondary" className="border border-white/10 bg-white/5">
                <a href={site.resumePath} download>
                  <FileDown className="size-4" aria-hidden />
                  Resume
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-zinc-200">
                <a href={site.linkedIn} target="_blank" rel="noreferrer">
                  <Link2 className="size-4" aria-hidden />
                  LinkedIn
                </a>
              </Button>
            </div>
            <p className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {site.location}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-teal-500/20 blur-2xl" aria-hidden />
            <img
              src="/images/profile.jpg"
              alt="Portrait of Tanay Jain"
              width={862}
              height={934}
              className="relative rounded-2xl border border-white/10 object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-8 py-16" aria-labelledby="demoreels-heading">
          <SectionHeading
            id="demoreels"
            title="Demoreels"
            description="Music and SFX reels from recent game audio work."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {demoreels.map((reel) => (
              <article key={reel.id} className="space-y-3">
                <YoutubeEmbed videoId={reel.youtubeId} title={reel.title} />
                <h3 className="text-sm font-medium text-zinc-200">{reel.title}</h3>
                <p className="text-xs text-zinc-500">Duration: {reel.duration}</p>
              </article>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-8 py-16" aria-labelledby="projects-heading">
          <SectionHeading
            id="projects"
            title="Game audio projects"
            description="Selected work across indie releases and game jams."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const links = 'links' in project ? project.links : undefined
              return (
              <Card
                key={project.id}
                className="border-white/10 bg-white/[0.03] text-zinc-100 shadow-none"
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl text-white">{project.name}</CardTitle>
                  <CardDescription className="text-teal-300/90">{project.roles}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>
                </CardContent>
                {links?.length ? (
                  <CardFooter className="flex flex-wrap gap-2">
                    {links.map((link) => (
                      <Button key={link.href} asChild variant="secondary" size="sm">
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ExternalLink className="size-3.5" aria-hidden />
                        </a>
                      </Button>
                    ))}
                  </CardFooter>
                ) : null}
              </Card>
            )})}
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className="grid gap-10 py-16 lg:grid-cols-2" aria-labelledby="experience-heading">
          <div className="space-y-8">
            <SectionHeading id="experience" title="Experience" />
            <ol className="space-y-6">
              {experience.map((job) => (
                <li key={job.org} className="relative border-l border-amber-500/40 pl-5">
                  <span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-amber-500" aria-hidden />
                  <h3 className="font-medium text-white">{job.role}</h3>
                  <p className="text-sm text-amber-200/90">{job.org}</p>
                  <p className="text-xs text-zinc-500">{job.period}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-zinc-400">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            <SectionHeading id="education" title="Education" />
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.school} className="border-white/10 bg-white/[0.03] shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{edu.school}</CardTitle>
                    <CardDescription>{edu.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-400">
                      {edu.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-white">Skills & tools</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-medium text-amber-300">{group.title}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-white/10 text-zinc-200">
                          {item}
                        </Badge>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {software.map((s) => (
                  <Badge key={s} className="bg-teal-500/15 text-teal-200 hover:bg-teal-500/20">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-6 py-16" aria-labelledby="music-heading">
          <SectionHeading
            id="music"
            title="My music"
            description="The Wix site embedded a music player here. Add your tracks or streaming links when you are ready."
          />
          <Card className="border-dashed border-white/20 bg-white/[0.02] shadow-none">
            <CardContent className="flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm text-zinc-300">No tracks are hosted in this static build yet.</p>
                <p className="text-sm text-zinc-500">
                  Drop Spotify, SoundCloud, or Bandcamp URLs in{' '}
                  <code className="rounded bg-black/40 px-1.5 py-0.5 text-xs text-amber-200">src/data/content.ts</code>{' '}
                  or link your preferred platform below.
                </p>
              </div>
              <Button asChild variant="secondary">
                <a href={`mailto:${site.email}?subject=Music%20samples`}>Request samples</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-white/10" />

        <section className="py-16" aria-labelledby="contact-heading">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-10">
            <SectionHeading
              id="contact"
              title="Contact"
              description="Got projects, questions, wild ideas, or just want to say hello? I'm an email away — let's connect."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-amber-500/40"
              >
                <Mail className="mt-0.5 size-5 text-amber-400" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-zinc-400">{site.email}</p>
                </div>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-amber-500/40"
              >
                <Phone className="mt-0.5 size-5 text-amber-400" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-zinc-400">{site.phone}</p>
                </div>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-amber-500 text-zinc-950 hover:bg-amber-400">
                <a href={`mailto:${site.email}`}>Let's chat</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent">
                <a href={site.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        <p>{site.copyright}</p>
        <p className="mt-2">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="mx-2 hover:text-zinc-300">
              {n.label}
            </a>
          ))}
        </p>
      </footer>
    </>
  )
}
