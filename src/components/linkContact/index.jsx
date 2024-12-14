import React from 'react';
import { ContactButton, LinkSection } from './styles/index';
import { Link } from 'react-router-dom';

const LinkCantact = () => {
  return (
    <LinkSection>
      <h2>Do you have any questions?</h2>
      <p>
      Write us a message, we will be happy to contact with you
      </p>
      <Link to="/kontakt">
        <ContactButton>Conect with us</ContactButton>
      </Link>
    </LinkSection>
  );
};

export default LinkCantact;
