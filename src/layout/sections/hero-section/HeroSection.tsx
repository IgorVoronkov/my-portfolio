import { HeroPhotoUrl } from '@/assets/images';
import { Container, FlexWrapper } from '@/components';

import * as S from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <S.Section>
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
          <S.Photo src={HeroPhotoUrl} alt="Igor Voronkov" />
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
