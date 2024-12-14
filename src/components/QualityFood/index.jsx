import React from 'react';
import {
  QualitySection,
  QualityWrapper,
  SingleCard,
  StyledH4,
  StyledP,
  StyledHeading,
  Cards,
  StyledImg,
} from './styles/index';
import items from './QualityData';

const QualityFood = () => {
  return (
    <QualitySection>
      <QualityWrapper>
        <StyledHeading>
          <h2>The most popular dishes</h2>
          <p>We offer:</p>
        </StyledHeading>
        <Cards>
          {items.map(item => {
            const { id, image, name, desc } = item;
            return (
              <SingleCard key={id}>
                <StyledImg src={image} alt={name} />
                <StyledH4>{name}</StyledH4>
                <StyledP>{desc}</StyledP>
              </SingleCard>
            );
          })}
        </Cards>
      </QualityWrapper>
    </QualitySection>
  );
};

export default QualityFood;
