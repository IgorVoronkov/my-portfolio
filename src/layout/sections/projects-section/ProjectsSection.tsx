import { ProjectCard } from '@/components';
import { projects } from '@/shared/projects.data';

import * as S from './ProjectsSection.styled';

export const ProjectsSection = () => (
  <S.Section>
    <S.Heading>Projects</S.Heading>
    <S.List>
      {projects.map((project) => (
        <S.Item key={project.id}>
          <ProjectCard project={project} />
        </S.Item>
      ))}
    </S.List>
  </S.Section>
);
