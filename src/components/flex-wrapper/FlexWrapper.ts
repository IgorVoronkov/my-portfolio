import styled from 'styled-components';

interface FlexWrapperProps {
  $direction?: 'row' | 'column';
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  $gap?: string;
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-flow: ${({ $direction }) => $direction ?? null} ${({ $wrap }) => $wrap ?? null};
  gap: ${({ $gap }) => $gap ?? null};
  align-items: ${({ $alignItems }) => $alignItems ?? null};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? null};
  height: 100%;
`;
