// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  author: string;
  author_img:string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  image?: string; // default og image
  imageAlt?: string;
  locale?: string;
  type?: string;
  robots?: string;
  themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Vaishali Jadon',
  domain: 'vaishalijadon.com',
  author: 'Vaishali Jadon',
  description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
  about:
    'I’m a recent software engineering graduate and a full-stack developer who loves building useful products. In my spare time I create applications and personal projects, and I’m exploring machine learning and AI to level up my problem-solving skills.',
    author_img: '/img/IMG_6761.jpg',
    keywords: [
    'Vaishali Jadon',
    'Software Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Java',
    'TypeScript',
    'Kotlin',
    'Python',
    'Framer Motion',
    'Machine Learning',
    'Automation',
    'AI'
  ],
  ogImage: '/og.png',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://vaishalijadon.com',
    github: 'https://github.com/vjadon09',
    linkedin: 'https://www.linkedin.com/in/vaishali-jadon',
    email: 'mailto:vaishali.jadon09@gmail.com',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/vjadon09', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaishali-jadon', icon: 'linkedin' },
    { label: 'Website', url: 'https://vaishalijadon.com', icon: 'globe' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    //{ label: 'Posts', href: '/posts' },
    { label: 'Chat', href: '/chat' },
    { label: 'Contact', href: '/contact' }
  ],

  
  seo: {
    title: 'Vaishali Jadon',
    description: 'Full-stack developer building cloud, embedded, and automation projects.',
    keywords: [
      'Vaishali Jadon',
    'Software Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Java',
    'TypeScript',
    'Kotlin',
    'Python',
    'Framer Motion',
    'Machine Learning',
    'Automation',
    'AI'
    ],
    canonical: 'https://vaishalijadon.com',
    image: '/og.png',
    imageAlt: "Vaishali Jadon – Portfolio",
    locale: 'en-US',
    type: 'website',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
