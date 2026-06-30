import {
  githubIconUrl,
  gmailIconUrl,
  linkedinIconUrl,
  twitterIconUrl,
  whatsappIconUrl,
} from '@/assets/icons';

export const footerData = {
  socialLinks: [
    { href: '#', iconUrl: linkedinIconUrl, label: 'LinkedIn' },
    { href: '#', iconUrl: whatsappIconUrl, label: 'WhatsApp' },
    { href: '#', iconUrl: twitterIconUrl, label: 'Twitter' },
    { href: '#', iconUrl: gmailIconUrl, label: 'Gmail' },
  ],
  github: {
    username: 'IgorVoronkov',
    url: 'https://github.com/IgorVoronkov',
    iconUrl: githubIconUrl,
  },
} as const;
