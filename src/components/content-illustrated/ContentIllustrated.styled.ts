import styled from 'styled-components';

export interface ContentIllustratedStyledProps {
  $picture: {
    src: string;
    where: 'left' | 'right';
    width: string;
  };
  $gap?: string | undefined;
}

export const ContentIllustratedStyled = styled.div<ContentIllustratedStyledProps>`
  display: flex;
  align-items: stretch;
  min-height: calc(${({ $picture: { width } }) => width} * 0.9);

  & > div {
    width: calc(calc(100% - ${({ $picture: { width } }) => width}) - ${({ $gap = '0px' }) => $gap});
    margin: ${({ $picture: { where } }) => (where === 'left' ? '0 0 0 auto' : '0 auto 0 0')};
  }

  background-image: url(${({ $picture: { src } }) => src});
  background-repeat: no-repeat;
  background-position: ${({ $picture: { where } }) => where} center;
  background-size: ${({ $picture: { width } }) => width} auto;
`;
