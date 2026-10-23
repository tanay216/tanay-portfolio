export const site = {
  name: 'Tanay Jain',
  brand: 'TANAY JAIN | GAME AUDIO DESIGNER',
  title: 'Game Audio Designer',
  tagline: "Hi! I'm Tanay.",
  subtitle: 'I create immersive Soundscapes for Video Games.',
  location: 'Mumbai — 401107',
  email: 'tanayjain2001@gmail.com',
  phone: '+91 9769621085',
  linkedIn: 'https://www.linkedin.com/in/tanay-jain-185438259/',
  discord: 'https://discord.com/users/1052180983174156308',
  twitter: 'https://twitter.com/eigo_wav',
  resumePath: '/resume.pdf',
  copyright: '© 2024 by Tanay Jain.',
}

export const demoreels = [
  {
    id: 'music-2024',
    title: 'Game Audio Designer | Music Demoreel | 2024',
    youtubeId: 'lij40YWGO4w',
    duration: '3:07',
  },
  {
    id: 'sfx-2024',
    title: 'Game Audio Designer | SFX Demoreel | 2024',
    youtubeId: 'U487BKhj-Cs',
    duration: '1:29',
  },
] as const

export type PortfolioMedia =
  | { type: 'youtube'; videoId: string; title: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'placeholder'; variant: 'blue' | 'cream' }

export type PortfolioRow = {
  id: string
  name: string
  roles: string
  description: string
  cta: { label: string; href: string }
  media: PortfolioMedia
  mediaSide: 'left' | 'right'
}

export const portfolioRows: PortfolioRow[] = [
  {
    id: 'warbound',
    name: 'Warbound',
    roles: 'SFX Design & Music',
    description:
      "Warbound is an upcoming Indian Indie Game by AbhiTechGames. Its an extremely fun Battle Deck builder action-adventure and it was equally fun bringing this world to life through it's soundscape.\n\nYou can wishlist this game on steam currently!",
    cta: { label: 'Warbound on Steam!', href: 'https://store.steampowered.com/app/3119640/Warbound/' },
    media: {
      type: 'youtube',
      videoId: 'ctpy1oxd-1k',
      title: 'Warbound: Official Game Announcement',
    },
    mediaSide: 'left',
  },
  {
    id: 'tales-of-zanthar-1',
    name: 'Tales of Zanthar',
    roles: 'Wwise + Unity implementation, SFX & Music',
    description:
      'Showcasing my game audio integration skills, this project features original sound design, Wwise + Unity implementation, and interactive music. Originally a Game Jam project, I refined it over months, adding immersive soundscapes, evolving ambiance with RTPCs, and dynamic music that adapts to gameplay.',
    cta: { label: 'Play Tales of Zanthar!', href: 'https://tanaywav.itch.io/tales-of-zanthar' },
    media: { type: 'placeholder', variant: 'blue' },
    mediaSide: 'right',
  },
  {
    id: 'frosty-cabin',
    name: 'Frosty Cabin',
    roles: 'SFX Design & Music',
    description:
      "I collaborated on a project in the Cozy Winter Jam where I worked with an awesome team of creatives and made music and sfx for a survival-shooter game called 'Frosty Cabin'.",
    cta: { label: 'Play Frosty Cabin!', href: 'https://zedzee.itch.io/frosty-cabin' },
    media: { type: 'image', src: '/images/projects/frosty.jpg', alt: 'Frosty Cabin artwork' },
    mediaSide: 'left',
  },
  {
    id: 'sumo-baby',
    name: 'Sumo Baby',
    roles: 'SFX Design & Music',
    description:
      'Sumo Baby is an exciting project that recently won the Global Game Jam 2024 Mumbai. The theme "Make me Laugh" inspired the creation of this unique game, which falls into a genre that was new to me, making it a fun and challenging project.',
    cta: { label: 'Play Sumo Baby!', href: 'https://mudassir1.itch.io/sumo-baby' },
    media: { type: 'placeholder', variant: 'cream' },
    mediaSide: 'right',
  },
  {
    id: 'tales-of-zanthar-2',
    name: 'Tales of Zanthar',
    roles: 'Wwise + Unity implementation, SFX & Music',
    description:
      'Showcasing my game audio integration skills, this project features original sound design, Wwise + Unity implementation, and interactive music. Originally a Game Jam project, I refined it over months, adding immersive soundscapes, evolving ambiance with RTPCs, and dynamic music that adapts to gameplay.',
    cta: { label: 'Play Tales of Zanthar!', href: 'https://tanaywav.itch.io/tales-of-zanthar' },
    media: { type: 'placeholder', variant: 'blue' },
    mediaSide: 'right',
  },
]

export const contactCopy = {
  title: 'Contact',
  intro:
    "Got projects/ questions/ wild ideas, or just want to say hello? I am just an email away. Hit me up and let's connect!",
  chatTitle: "Let's Chat",
}
