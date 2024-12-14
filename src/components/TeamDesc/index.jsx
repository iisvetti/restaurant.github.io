import React from 'react';
import {
  DescTeamSection,
  DescTeamwrapper,
  StyledH2,
  ImageDesc,
} from './styles/index';

const TeamDesc = () => {
  return (
    <DescTeamSection>
      <DescTeamwrapper>
        <div>
          <StyledH2>Our team</StyledH2>
        </div>
        <p>
          Our team is a group of passionate gastronomes working in the culinary
          and hospitality industries. Each of us has the knowledge and
          experience that allows us to create unique taste sensations for our
          guests. taste sensations for our guests. We focus on the quality and
          freshness of ingredients so that our dishes are always fragrant and
          full of flavor. Our work is based on passion and satisfaction of our
          customers, so we always try to meet their expectations. we always
          strive to meet their expectations. Our team creates a friendly
          atmosphere in our restaurant that makes our guests feel especially
          welcome and valued.
        </p>
      </DescTeamwrapper>
      <ImageDesc />
    </DescTeamSection>
  );
};

export default TeamDesc;
