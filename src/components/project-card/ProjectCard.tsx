import { type Project } from '@/shared/projects.data';

import * as S from './ProjectCard.styled';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <S.Article>
    <S.Preview src={project.previewSrc} alt={project.previewAlt} />
    <S.Body>
      <S.Title>{project.title}</S.Title>
    </S.Body>
  </S.Article>
);
