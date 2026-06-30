import { type Skill } from '@/shared/skills.data';

import * as S from './SkillCard.styled';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => (
  <S.Figure>
    <S.Icon src={skill.icon} alt="" />
    <S.Caption>{skill.name}</S.Caption>
  </S.Figure>
);
