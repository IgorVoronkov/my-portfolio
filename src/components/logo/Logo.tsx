import { LogoImage } from '@/assets/images';
import { SECTIONS } from '@/shared/constants';

export const Logo = () => (
  <a href={`#${SECTIONS.hero.id}`} aria-label="На главную">
    <LogoImage width={100} />
  </a>
);
