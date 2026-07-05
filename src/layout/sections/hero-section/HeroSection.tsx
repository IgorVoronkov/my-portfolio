import { HeroPhotoUrl } from '@/assets/images/hero-section';
import { Container, FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import * as S from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <S.Section id={SECTIONS.hero.id}>
      <Container>
        <FlexWrapper $gap="24px" $alignItems="center">
          <S.Content>
            <span>{"Hi👋, I'm a"}</span>
            <h1>Software Developer</h1>
            <p>
              {"I'm"} <strong>Igor Voronkov</strong>, a developer dedicated to making the world a
              better place one line of code at a time.
            </p>
            <button>Hire me</button>
          </S.Content>
          <S.PortraitWrapper>
            <S.PortraitImage src={HeroPhotoUrl} alt="Igor Voronkov" />
          </S.PortraitWrapper>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
