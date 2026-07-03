import styled from 'styled-components';

interface ContainerProps {
  $paddingY?: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  padding: ${({ $paddingY = '20px' }) => $paddingY} 40px;
  margin: 0 auto;
`;
