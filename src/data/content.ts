export const site = {
  name: 'Tanay Jain',
  title: 'Game Audio Designer',
  tagline: "Hi! I'm Tanay.",
  subtitle: 'I create immersive soundscapes for video games.',
  location: 'Mumbai — 401107',
  email: 'tanayjain2001@gmail.com',
  phone: '+91 9769621085',
  linkedIn: 'https://www.linkedin.com/in/tanay-jain-185438259/',
  resumePath: '/resume.pdf',
  copyright: '© 2024 by Tanay Jain.',
}

export const objective =
  'Dedicated and creative sound designer with a strong background in music composition, sound design, and audio mixing. Eager to contribute skills and passion for immersive audio experiences to a dynamic gaming studio.'

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

export const projects = [
  {
    id: 'warbound',
    name: 'Warbound',
    roles: 'SFX Design & Music',
    description:
      "Warbound is an upcoming Indian indie game by AbhiTechGames. It's an extremely fun battle deck builder action-adventure, and it was equally fun bringing this world to life through its soundscape. You can wishlist this game on Steam currently!",
    links: [
      {
        label: 'Wishlist on Steam',
        href: 'https://store.steampowered.com/app/3119640/Warbound/',
      },
    ],
  },
  {
    id: 'tales-of-zanthar',
    name: 'Tales of Zanthar',
    roles: 'Wwise + Unity implementation, SFX & Music',
    description:
      'Showcasing game audio integration skills: original sound design, Wwise + Unity implementation, and interactive music. Originally a game jam project, refined over months with immersive soundscapes, evolving ambiance with RTPCs, and dynamic music that adapts to gameplay.',
  },
  {
    id: 'frosty-cabin',
    name: 'Frosty Cabin',
    roles: 'SFX Design & Music',
    description:
      "Collaborated on the Cozy Winter Jam with an awesome team of creatives — music and SFX for the survival-shooter game Frosty Cabin.",
    links: [
      {
        label: 'Play on itch.io',
        href: 'https://zedzee.itch.io/frosty-cabin',
      },
    ],
  },
  {
    id: 'sumo-baby',
    name: 'Sumo Baby',
    roles: 'SFX Design & Music',
    description:
      'Sumo Baby won Global Game Jam 2024 Mumbai. The theme "Make me Laugh" inspired this unique game in a genre that was new to me — a fun and challenging project.',
    links: [
      {
        label: 'Play on itch.io',
        href: 'https://muddassir1.itch.io/sumo-baby',
      },
    ],
  },
]

export type Project = (typeof projects)[number]

export const experience = [
  {
    org: 'Ogre Head Studios',
    role: 'Game Audio Trainee',
    period: 'April 2023 – October 2023',
    bullets: [
      'Worked closely with game designers and developers to create and implement audio assets for video games.',
      'Assisted in developing audio concepts and contributed to the overall sound design process.',
      'Created and maintained a sound design document for the team to collaborate efficiently.',
    ],
  },
  {
    org: 'Barren Sound',
    role: 'Studio Assistant (Internship)',
    period: 'May 2024 – July 2024',
    bullets: [
      'Expanded knowledge in recording instruments, vocals, and field/foley sessions.',
      'Worked on game projects in Unity and Unreal Engine.',
      'Explored scripting for Unity in C#.',
    ],
  },
  {
    org: 'Freelancing',
    role: 'Game Audio',
    period: '2023 – Present',
    bullets: [
      'Partnered with studios and developers to translate creative vision into compelling audio experiences.',
    ],
  },
] as const

export const education = [
  {
    school: 'Flying Chords Academy',
    focus: 'Music Composition, Sound Design, and Audio Mixing',
    details: [
      'In-depth study of composition, sound design principles, and advanced mixing.',
      'Understanding of sound’s role in immersive experiences.',
    ],
  },
  {
    school: 'KPB Hinduja College',
    focus: 'Bachelor of Science in Information Technology (BSc IT)',
    details: [
      'Foundation in IT, problem-solving, and analytical skills.',
      'Programming in C# and Python.',
    ],
  },
] as const

export const skillGroups = [
  {
    title: 'Audio production',
    items: ['Ableton Live', 'Recording & mixing'],
  },
  {
    title: 'Sound design',
    items: ['SFX creation', 'Gameplay & narrative audio'],
  },
  {
    title: 'Music',
    items: ['Original composition', 'Adaptive & interactive scores'],
  },
  {
    title: 'Technical',
    items: ['Wwise', 'FMOD', 'Unity integration', 'C# scripting basics'],
  },
] as const

export const software = ['Ableton Live', 'FMOD', 'Wwise'] as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'demoreels', label: 'Demoreels' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'music', label: 'My Music' },
  { id: 'contact', label: 'Contact' },
] as const
