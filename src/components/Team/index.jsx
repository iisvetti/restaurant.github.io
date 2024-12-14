import React from 'react';
import {
  TeamContainer,
  HeadingTeam,
  StyledH1,
  OurTeamWrapper,
  TeamWrapper,
  TeamSection,
  StyledP,
} from './styles/index';
import TeamMemberCard from './TeamMemberCard ';

const Team = () => {
  return (
    <TeamSection>
      <TeamContainer>
        <TeamWrapper>
          <HeadingTeam>
            <StyledH1>Our team</StyledH1>
            <StyledP>
            This is our team, people who are
             ready to provide our guests with an exceptional culinary experience.
            </StyledP>
          </HeadingTeam>
          <OurTeamWrapper>
            <TeamMemberCard />
          </OurTeamWrapper>
        </TeamWrapper>
      </TeamContainer>
    </TeamSection>
  );
};

export default Team;
