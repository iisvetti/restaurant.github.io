import React from 'react';
import {
  AboutSection,
  RestaurantWrapper,
  AboutInfo,
  H1About,
  Description,
  LineDescription,
  ReviewWrapper,
  ImgRestaurant,
  ButtonAbout,
} from './styles/index';

import restaurant from '../../images/restaurant.jpg';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <AboutSection>
      <RestaurantWrapper>
        <AboutInfo>
          <H1About>About restaurant</H1About>
          <Description>
          We are a restaurant that has been operating for ten years,<br/> 
          which means that we have been focusing on quality and<br/>
           customer satisfaction from the very beginning. Our cuisine is<br/>
            based on fresh ingredients and patented recipes, which guarantees<br/>
             the unique taste
            of each dish. The experience gained over the years<br/> allows us to 
            constantly improve the quality of our products and<br/>  services and 
            introduce new, interesting flavours. We invite you to visit our restaurant 
          and enjoy our dishes that will definitely remain in your memory for a long time.
          </Description>
          <Link to="/onas">
            <ButtonAbout>See more</ButtonAbout>
          </Link>
          <LineDescription>
            <ImgRestaurant src={restaurant} />
          </LineDescription>
        </AboutInfo>
        <ReviewWrapper>
          <Reviews />
        </ReviewWrapper>
      </RestaurantWrapper>
    </AboutSection>
  );
};

export default AboutUs;
