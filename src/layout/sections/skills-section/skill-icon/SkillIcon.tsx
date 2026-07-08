import { type Skill } from '../constants';
import * as S from './SkillIcon.styled';

interface SkillIconProps {
  skill: Skill;
}

export const SkillIcon = ({ skill }: SkillIconProps) => (
  <S.Figure>
    <S.Hexagon>
      <S.Icon src={skill.icon} alt="" />
    </S.Hexagon>
    <S.Caption>{skill.label}</S.Caption>
  </S.Figure>
);
