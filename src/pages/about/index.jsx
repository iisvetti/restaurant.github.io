import React from 'react';
import {
  AboutHero,
  WrapperHero,
  ContainerHero,
  StyledH1,
  MainContent,
  StyledP,
} from './styles/index';
import Team from '../../components/Team/index';
import TeamDesc from './../../components/TeamDesc/index';
import FeaturesTeam from './../../components/featuresTeam/index';

function About() {
  return (
    <section>
      <AboutHero className="hero">
        <ContainerHero>
          <WrapperHero>
            <StyledH1>About us</StyledH1>
            <StyledP>
            Our talented team with a passion for cooking and serving guests
            </StyledP>
          </WrapperHero>
        </ContainerHero>
      </AboutHero>
      <MainContent>
        <Team />
        <TeamDesc />
        <FeaturesTeam />
      </MainContent>
    </section>
  );
}

export default About;
