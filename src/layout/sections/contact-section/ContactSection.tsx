import { VisuallyHidden } from '@/components';

import * as S from './ContactSection.styled';

export const ContactSection = () => {
  return (
    <S.Section>
      <S.Title>Contact me</S.Title>
      <S.Columns>
        <S.Form>
          <VisuallyHidden as="label" htmlFor="email">
            Email address
          </VisuallyHidden>
          <input id="email" type="email" name="email" placeholder="Enter email address" />
          <VisuallyHidden as="label" htmlFor="message">
            Message
          </VisuallyHidden>
          <S.Textarea id="message" name="message" rows={5} placeholder="Enter message..." />
          <S.SubmitButton type="submit">Send Message</S.SubmitButton>
        </S.Form>
        <S.Illustration />
      </S.Columns>
    </S.Section>
  );
};
