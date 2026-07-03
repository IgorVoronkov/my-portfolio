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
  flex-flow: ${({ $direction }) => $direction ?? 'row'} ${({ $wrap }) => $wrap ?? 'nowrap'};
  gap: ${({ $gap }) => $gap ?? '0'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'stretch'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'space-between'};
  height: 100%;
`;
