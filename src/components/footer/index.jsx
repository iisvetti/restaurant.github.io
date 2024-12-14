import React from 'react';
import {
  Styledfooter,
  FooterSocials,
  StyledFacebook,
  StyledTwitter,
  StyledInstagram,
  StyledYoutube,
  StyledTelegram,
  StyledP,
  StyledRight,
  Styledinfo,
  StyledSpan,
  ColorLogo,
} from './styles/index';

const Footer = () => {
  return (
    <Styledfooter>
      <FooterSocials>
        <StyledFacebook />
        <StyledTwitter />
        <StyledInstagram />
        <StyledYoutube />
        <StyledTelegram />
      </FooterSocials>
      <StyledRight>
        <Styledinfo>
          <StyledSpan>Tea House Restaurant</StyledSpan>
          <StyledSpan>Kyiv<br/> Bohdana Khmelnytskoho 54</StyledSpan>
          <StyledSpan>+380 77 777 7777</StyledSpan>
        </Styledinfo>
        <StyledP>
          
          <ColorLogo>
            <a
              href="https://www.linkedin.com/in/dmytrii-beresten/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              
            </a>
          </ColorLogo>
        </StyledP>
      </StyledRight>
    </Styledfooter>
  );
};

export default Footer;
