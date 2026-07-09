import { type Skill } from '../constants';
import * as S from './SkillIcon.styled';

interface SkillIconProps {
  skill: Skill;
}

export const SkillIcon = ({ skill }: SkillIconProps) => (
  <S.Figure>
    <S.Icon src={skill.icon} alt={skill.label} $enlarged={skill.enlarged} />
    <S.Caption>{skill.label}</S.Caption>
  </S.Figure>
);
