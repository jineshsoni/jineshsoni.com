export const SITE = {
  url: 'https://jineshsoni.com',
  name: 'Jinesh Soni',
  title: 'Jinesh Soni — AI & Mobile Architect',
  description:
    'Jinesh Soni architects AI products that ship to real devices — on-device speech recognition, AI content pipelines and production ML — backed by 12+ years building Flutter and Android apps with 600K+ downloads.',
  jobTitle: 'Principal Developer',
  company: { name: 'AppExert', url: 'https://appexert.com' },
  email: 'hi@jineshsoni.com',
  /** Shown only in the printed / PDF résumé, never on the web pages. */
  phone: '+91 78784 15078',
  location: 'India',
  twitter: '@jineshmsoni',
  resume: '/resume/',
  resumePdf: '/Jinesh-Soni-Resume.pdf',
  // Cloudflare Web Analytics beacon token. Leave empty to disable, or enable
  // "automatic setup" in the Cloudflare dashboard instead (no code needed).
  cfAnalyticsToken: '',
};

export const SOCIALS = [
  { name: 'GitHub', handle: 'jineshsoni', url: 'https://github.com/jineshsoni' },
  { name: 'LinkedIn', handle: 'jineshsoni', url: 'https://www.linkedin.com/in/jineshsoni' },
  { name: 'X', handle: '@jineshmsoni', url: 'https://twitter.com/jineshmsoni' },
] as const;

/** Flip to true to publish the blog (nav link, /blog/ pages, RSS, home "Writing" section). */
export const BLOG_ENABLED = false;

const ALL_NAV = [
  { label: 'Work', href: '/work/' },
  { label: 'AI', href: '/#ai' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Résumé', href: '/resume/' },
] as const;

export const NAV = ALL_NAV.filter((n) => BLOG_ENABLED || n.href !== '/blog/');

/** Career start (first Android role) — used to keep "years of experience" honest over time. */
export const CAREER_START = new Date('2014-07-01');

export const yearsSince = (d: Date) =>
  Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000));
