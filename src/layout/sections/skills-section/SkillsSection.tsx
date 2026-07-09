import { useTheme } from 'styled-components';

import { SkillsIllustrationUrl } from '@/assets/images';
import { ContentIllustrated, Section } from '@/components';
import { SECTIONS } from '@/shared/constants';

import { SKILLS } from './constants';
import { SkillIcon } from './skill-icon/SkillIcon';
import * as S from './SkillsSection.styled';

export const SkillsSection = () => {
  const { sections } = useTheme();

  return (
    <Section id={SECTIONS.skills.id} title="Skills">
      <ContentIllustrated
        $picture={{
          src: SkillsIllustrationUrl,
          where: 'right',
          width: sections.skills.pictureWidth,
        }}
        $minHeight={sections.skills.minHeight}
      >
        <S.Description>I have a vast experience in the following web technologies:</S.Description>
        <S.SkillsList>
          {SKILLS.map((skill) => (
            <li key={skill.label}>
              <SkillIcon key={skill.label} skill={skill} />
            </li>
          ))}
        </S.SkillsList>
      </ContentIllustrated>
    </Section>
  );
};
