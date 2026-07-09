import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.contactMe.paddings.top};
  padding-bottom: calc(
    ${({ theme }) =>
      theme.sections.footer.waveHeight + ' + ' + theme.sections.contactMe.paddings.bottom}
  );
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  max-width: 500px;
  height: 100%;
  margin-left: auto;
`;

export const Textarea = styled.textarea`
  resize: none;
`;

export const SubmitButton = styled.button`
  align-self: center;
`;
