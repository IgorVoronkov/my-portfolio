import { Container, FlexWrapper, SocialLink } from '@/components';

import { footerData } from './footer.data';
import * as S from './Footer.styled';

export const Footer = () => {
  const { socialLinks, github } = footerData;

  return (
    <S.Footer>
      <Container $paddingY="60px">
        <FlexWrapper $justifyContent="space-around">
          <div>
            <S.BlockLabel>My social media links:</S.BlockLabel>
            <FlexWrapper as="ul" $gap="32px">
              {socialLinks.map(({ href, iconUrl, label }) => (
                <li key={label}>
                  <SocialLink iconSrc={iconUrl} href={href} aria-label={label} />
                </li>
              ))}
            </FlexWrapper>
          </div>

          <div>
            <S.BlockLabel>{"More projects I've worked on"}</S.BlockLabel>
            <SocialLink iconSrc={github.iconUrl} href={github.url}>
              @{github.username} on github
            </SocialLink>
          </div>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
