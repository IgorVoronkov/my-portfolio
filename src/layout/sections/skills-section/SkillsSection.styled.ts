import styled from 'styled-components';

export const SkillsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 10px;
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
`;
