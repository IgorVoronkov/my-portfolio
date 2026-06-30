import { SocialLink } from '@/components';

import { footerData } from './footer.data';
import * as S from './Footer.styled';

export const Footer = () => {
  const { socialLinks, github } = footerData;

  return (
    <S.Footer>
      <div>
        <S.BlockLabel>My social media links:</S.BlockLabel>
        <S.SocialList>
          {socialLinks.map(({ href, iconUrl, label }) => (
            <li key={label}>
              <SocialLink iconSrc={iconUrl} href={href} aria-label={label} />
            </li>
          ))}
        </S.SocialList>
      </div>

      <div>
        <S.BlockLabel>{"More projects I've worked on"}</S.BlockLabel>
        <SocialLink iconSrc={github.iconUrl} href={github.url}>
          @{github.username} on github
        </SocialLink>
      </div>
    </S.Footer>
  );
};
