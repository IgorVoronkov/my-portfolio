import { BootstrapIconUrl, Css3IconUrl, Html5IconUrl, JsIconUrl } from '@/assets/icons';

export const skills = [
  { name: 'HTML5', icon: Html5IconUrl },
  { name: 'CSS3', icon: Css3IconUrl },
  { name: 'JavaScript', icon: JsIconUrl },
  { name: 'React', icon: BootstrapIconUrl },
] as const;

export type Skill = (typeof skills)[number];
