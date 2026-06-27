import styled from 'styled-components';

import illustrationUrl from '@/assets/images/skills-illustration.svg';

export const Section = styled.section`
  background-color: #c78fb0;
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Columns = styled.div`
  display: flex;
  align-items: stretch;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const RightColumn = styled.div`
  display: flex;
  flex: 0 0 40%;
  align-items: center;
`;

export const Illustration = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-image: url(${illustrationUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
