import { Container, FlexWrapper, ProjectCard } from '@/components';
import { SECTIONS } from '@/shared/constants';
import { projects } from '@/shared/projects.data';

import * as S from './ProjectsSection.styled';

export const ProjectsSection = () => (
  <S.Section id={SECTIONS.projects.id}>
    <Container>
      <S.Heading>Projects</S.Heading>
      <ul>
        <FlexWrapper $gap="32px">
          {projects.map((project) => (
            <S.Item key={project.id}>
              <ProjectCard project={project} />
            </S.Item>
          ))}
        </FlexWrapper>
      </ul>
    </Container>
  </S.Section>
);
