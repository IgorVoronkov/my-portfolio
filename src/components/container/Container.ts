import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: calc(
    ${({ theme: { container } }) => container.maxWidth + ' + ' + container.paddingX + ' * 2'}
  );
  padding: 0 ${({ theme }) => theme.container.paddingX};
  margin: 0 auto;
`;
