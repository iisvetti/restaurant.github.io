import { React, useState, useEffect } from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledNavLi,
  StyledLogo,
  StyledLogoImg,
  StyledLink,
  StyledNavUl,
  StyledBurger,
} from './styles';
import Logo from '../../images/logo.svg';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [fixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <StyledHeader fixed={fixed} className={fixed ? 'fixed' : ''}>
      <StyledLogo>
        <StyledLink to="/">
          <StyledLogoImg src={Logo} />
        </StyledLink>
      </StyledLogo>
      <StyledBurger>
        <Hamburger className="halo" toggled={isOpen} toggle={handleToggle} />
      </StyledBurger>
      <StyledNav isOpen={isOpen} className={isOpen ? 'open' : ''}>
        <StyledBurger>
          <Hamburger className="halo" toggled={isOpen} toggle={handleToggle} />
        </StyledBurger>
        <StyledNavUl>
          <StyledNavLi>
            <StyledLink to="/">Main</StyledLink>
          </StyledNavLi>
          <StyledNavLi>
            <StyledLink to="/Menu">Menu</StyledLink>
          </StyledNavLi>
          <StyledNavLi>
            <StyledLink to="Onas">About us</StyledLink>
          </StyledNavLi>
          <StyledNavLi>
            <StyledLink to="/kontakt">Contacts</StyledLink>
          </StyledNavLi>
        </StyledNavUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
