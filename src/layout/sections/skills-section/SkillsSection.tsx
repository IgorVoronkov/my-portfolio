import { SkillsIllustrationUrl } from '@/assets/images';
import { Container, ContentIllustrated, FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import { SKILLS } from './constants';
import { SkillIcon } from './skill-icon/SkillIcon';
import * as S from './SkillsSection.styled';

export const SkillsSection = () => (
  <S.Section id={SECTIONS.skills.id}>
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
          <S.Content>
            <S.Description>
              I have a vast experience in the following web technologies:
            </S.Description>

            <FlexWrapper as="ul" $justifyContent="flex-start" $wrap="wrap" $gap="1em 0">
              {SKILLS.map((skill) => (
                <li key={skill.label}>
                  <SkillIcon key={skill.label} skill={skill} />
                </li>
              ))}
            </FlexWrapper>
          </S.Content>
        </FlexWrapper>
      </ContentIllustrated>
    </Container>
  </S.Section>
);
