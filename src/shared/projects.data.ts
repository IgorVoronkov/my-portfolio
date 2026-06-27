import { project1Url, project2Url, project3Url } from '@/assets/images/projects-section';

export const projects = [
  {
    id: 'social-media-dashboard',
    previewSrc: project1Url,
    previewAlt: 'Social Media Dashboard preview',
    title: 'Social Media Dashboard',
    link: '#',
  },
  {
    id: 'card-page',
    previewSrc: project2Url,
    previewAlt: 'Card page preview',
    title: 'Card Page',
    link: '#',
  },
  {
    id: 'ip-address-tracker',
    previewSrc: project3Url,
    previewAlt: 'IP Address Tracker preview',
    title: 'IP Address Tracker',
    link: '#',
  },
] as const;

export type Project = (typeof projects)[number];
