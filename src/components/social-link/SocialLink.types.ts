import { type ReactNode } from 'react';

export interface SocialLinkProps {
  iconSrc: string;
  href: string;
  'aria-label'?: string;
  children?: ReactNode;
  $gap?: string | undefined;
}

export type IconProps = Pick<SocialLinkProps, '$gap'>;
