import styled from 'styled-components';

export const Form = styled.form`
  max-width: ${({ theme }) => theme.sections.contactMe.form.width};
  margin-left: auto;
`;

export const Textarea = styled.textarea`
  min-height: 160px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  align-self: center;
`;
