import React from 'react';
import './styles/style.css';
import {
  SectionHero,
  HeroWrapper,
  H1Hero,
  H3SubTitle,
  SpanHero,
} from './styles/index';

const Hero = () => {
  return (
    <SectionHero className="hero-container">
      <div className="styledBg"></div>
      <HeroWrapper>
        <H1Hero>
          Welcome to the <SpanHero>TeaHouse</SpanHero>
        </H1Hero>

        <H3SubTitle>teashop</H3SubTitle>
      </HeroWrapper>
    </SectionHero>
  );
};

export default Hero;
