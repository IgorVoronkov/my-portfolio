import { ContactIllustrationUrl } from '@/assets/images';
import { Container, ContentIllustrated, FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import * as S from './ContactSection.styled';

export const ContactSection = () => {
  return (
    <S.Section id={SECTIONS['contact-me'].id}>
      <S.Title>Contact me</S.Title>
      <Container>
        <ContentIllustrated
          $picture={{
            src: ContactIllustrationUrl,
            where: 'left',
            width: '400px',
          }}
          $gap="32px"
        >
          <S.Form>
            <FlexWrapper $direction="column" $justifyContent="center" $gap="24px">
              <input id="email" type="email" name="email" placeholder="Enter email address" />
              <S.Textarea id="message" name="message" rows={6} placeholder="Enter message..." />
              <S.SubmitButton type="submit">Send Message</S.SubmitButton>
            </FlexWrapper>
          </S.Form>
        </ContentIllustrated>
      </Container>
    </S.Section>
  );
};
