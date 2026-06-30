import styled from 'styled-components';

import { ContactIllustrationUrl } from '@/assets/images';

export const Section = styled.section`
  background-color: #f2f4e7;
`;

export const Title = styled.h2`
  color: #3e8745;
  text-align: center;
`;

export const Columns = styled.div`
  display: flex;
  gap: 50px;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 30px;
  align-items: stretch;
  justify-content: center;
`;

export const Illustration = styled.div`
  flex: 4;
  order: -1;
  aspect-ratio: 563/412;
  background-image: url(${ContactIllustrationUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Textarea = styled.textarea`
  resize: none;
`;

export const SubmitButton = styled.button`
  align-self: center;
`;
