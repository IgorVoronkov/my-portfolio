import { SkillsIllustrationUrl } from '@/assets/images';
import { Container, ContentIllustrated, FlexWrapper, SkillCard } from '@/components';
import { skills } from '@/shared/skills.data';

import * as S from './SkillsSection.styled';

export const SkillsSection = () => (
  <S.Section>
    <Container>
      <S.Heading>Skills</S.Heading>
      <ContentIllustrated
        $picture={{
          src: SkillsIllustrationUrl,
          where: 'right',
          width: '400px',
        }}
      >
        <FlexWrapper $alignItems="center">
          <div>
            <S.Description>
              I have a vast experience in the following web technologies:
            </S.Description>
            <FlexWrapper $wrap="wrap" $justifyContent="space-around">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </FlexWrapper>
          </div>
        </FlexWrapper>
      </ContentIllustrated>
    </Container>
  </S.Section>
);
