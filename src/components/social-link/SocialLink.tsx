import { type ReactNode } from 'react';

import * as S from './SocialLink.styled';

interface SocialLinkProps {
  iconSrc: string;
  href: string;
  'aria-label'?: string;
  children?: ReactNode;
}

export const SocialLink = ({
  iconSrc,
  href,
  'aria-label': ariaLabel,
  children,
}: SocialLinkProps) => (
  <S.Link
    href={href}
    aria-label={children ? undefined : ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <S.Icon src={iconSrc} alt="" />
    {children}
  </S.Link>
);
