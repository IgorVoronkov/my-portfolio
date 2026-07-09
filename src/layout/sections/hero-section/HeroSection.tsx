import { HeroPhotoUrl } from '@/assets/images/hero-section';
import { Container, FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import * as S from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <S.Section id={SECTIONS.hero.id}>
      <Container>
        <FlexWrapper $justifyContent="space-between" $alignItems="center" $gap="24px">
          <S.Content>
            <S.Greeting>{"Hi👋, I'm a"}</S.Greeting>
            <S.Heading>Software Developer</S.Heading>
            <S.Presentation>
              {"I'm"} <b>Igor Voronkov</b>, a developer dedicated to making the world a better place
              one line of code at a time.
            </S.Presentation>
            <S.Button>Hire me</S.Button>
          </S.Content>
          <S.PortraitWrapper>
            <S.PortraitImage src={HeroPhotoUrl} alt="Igor Voronkov" />
          </S.PortraitWrapper>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
