import { SkillCard } from '@/components';
import { skills } from '@/shared/skills.data';

import * as S from './SkillsSection.styled';

export const SkillsSection = () => (
  <S.Section>
    <S.Heading>Skills</S.Heading>
    <S.Columns>
      <S.LeftColumn>
        <S.Description>I have a vast experience in the following web technologies:</S.Description>
        <S.SkillsGrid>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </S.SkillsGrid>
      </S.LeftColumn>
      <S.RightColumn>
        <S.Illustration />
      </S.RightColumn>
    </S.Columns>
  </S.Section>
);
