import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.projects.paddings.top};
  padding-bottom: ${({ theme }) => theme.sections.projects.paddings.bottom};
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const Heading = styled.h2`
  margin-bottom: 32px;
  text-align: center;
`;

export const Item = styled.li`
  flex: 1;
`;
