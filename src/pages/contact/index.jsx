import React from 'react';
import QuickContact from '../../components/quickContact';
import {
  ContactHero,
  InfoHero,
  ContentHero,
  StyledH1,
  Contactsection,
} from './styles/index';
import ContactForm from '../../components/ContactForm/index';

function Contact() {
  return (
    <main>
      <ContactHero>
        <InfoHero>
          <ContentHero>
            <StyledH1>Contact us</StyledH1>
            <p>We are waiting for tour questions!</p>
          </ContentHero>
        </InfoHero>
      </ContactHero>
      <QuickContact />
      <Contactsection>
        <ContactForm />
      </Contactsection>
    </main>
  );
}

export default Contact;
