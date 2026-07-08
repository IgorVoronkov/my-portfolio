import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Content = styled.div`
  li {
    min-width: calc(100% / 4);
  }
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
`;
