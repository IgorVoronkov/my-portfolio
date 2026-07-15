import styled from 'styled-components';

import { type IconProps } from './SocialLink.types';

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Icon = styled.img<IconProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: ${({ $gap }) => $gap ?? null};
  vertical-align: middle;
`;
