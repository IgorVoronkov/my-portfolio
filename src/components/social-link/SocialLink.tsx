import * as S from './SocialLink.styled';
import { type SocialLinkProps } from './SocialLink.types';

export const SocialLink = ({
  iconSrc,
  href,
  'aria-label': ariaLabel,
  $gap,
  children,
}: SocialLinkProps) => {
  return (
    <S.Link
      href={href}
      aria-label={children ? undefined : ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Icon src={iconSrc} alt="" $gap={$gap} />
      {children}
    </S.Link>
  );
};
