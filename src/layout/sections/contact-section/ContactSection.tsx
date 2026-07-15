import { useTheme } from 'styled-components';

import { ContactIllustrationUrl } from '@/assets/images';
import { ContentIllustrated, FlexWrapper, Section } from '@/components';
import { SECTIONS } from '@/shared/constants';

import * as S from './ContactSection.styled';

export const ContactSection = () => {
  const { sections } = useTheme();

  return (
    <Section
      id={SECTIONS['contact-me'].id}
      title="Contact me"
      $padding={{
        top: sections.contactMe.paddings.top,
        bottom: sections.contactMe.paddings.bottom,
      }}
    >
      <ContentIllustrated
        $picture={{
          src: ContactIllustrationUrl,
          where: 'left',
          width: sections.contactMe.pictureWidth,
        }}
      >
        <S.Form>
          <FlexWrapper
            $direction="column"
            $justifyContent="center"
            $gap={sections.contactMe.form.gap}
          >
            <input id="email" type="email" name="email" placeholder="Enter email address" />
            <S.Textarea id="message" name="message" placeholder="Enter message..." />
            <S.SubmitButton type="submit">Send Message</S.SubmitButton>
          </FlexWrapper>
        </S.Form>
      </ContentIllustrated>
    </Section>
  );
};
