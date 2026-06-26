import { HeroPhotoUrl } from '@/assets/images';

import * as S from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <S.Section>
      <div>
        <span>{"Hi👋, I'm a"}</span>
        <h1>Software Developer</h1>
        <p>
          {"I'm"} <strong>Igor Voronkov</strong>, a developer dedicated to making the world a better
          place one line of code at a time.
        </p>
        <button>Hire me</button>
      </div>
      <S.Photo src={HeroPhotoUrl} alt="Igor Voronkov" />
    </S.Section>
  );
};
