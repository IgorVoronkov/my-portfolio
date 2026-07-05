import styled from 'styled-components';

import { CirclesUrl, HeroPhotoBgUrl } from '@/assets/images/hero-section';

const bgUrl = `"${HeroPhotoBgUrl}"`;
const circlesUrl = `"${CirclesUrl}"`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary['50']};
`;

export const Content = styled.div`
  max-width: 500px;
`;

export const PortraitWrapper = styled.div`
  position: relative;
  width: 413px;
  height: 490px;
  padding: 50px 25px 40px 45px;
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  &::after {
    position: absolute;
    right: 12px;
    bottom: 0;
    width: 111px;
    height: 69px;
    content: '';
    background-image: url(${circlesUrl});
    background-repeat: no-repeat;
  }
`;

export const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;
