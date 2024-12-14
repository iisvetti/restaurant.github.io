import { styled } from '@mui/material';

export const StyledImgHero = styled('img')({
  width: '100%',
  filter: 'brightness(50%)',
  zIndex: '-1',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const SectionHero = styled('section')({
  width: '100%',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30vh',
  '@media (min-width: 640px)': {
    minHeight: '100vh',
  },
  '@media (min-width: 1024px)': {
    minHeight: '100vh',
  },
  '@media (max-width: 500px)': {
    minHeight: '100vh',
  },
});

export const HeroWrapper = styled('div')({});

export const H1Hero = styled('h1')({
  color: '#f4f3ee',
  fontSize: '5.5em',
  textShadow: '#000 1px 0 3px',
  fontWeight: '600',
  letterSpacing: '2px',
  '@media (min-width: 320px)': {
    marginTop: '100px',
    fontSize: '38px',
  },
  '@media (min-width: 640px)': {
    fontSize: '50px',
  },
  '@media (min-width: 1280px)': {
    fontSize: '4.8em',
  },
});

export const SpanHero = styled('span')({
  color: '#bcb8b1',
  fontWeight: '500',
  letterSpacing: '2px',
  textShadow: '#000 1px 0 3px',
});

export const H3SubTitle = styled('h3')({
  color: '#f4f3ee',
  fontSize: '1.5em',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: '500',
  '@media (min-width: 320px)': {
    width: '90%',
    fontSize: '24px',
  },
  '@media (min-width: 620px)': {
    width: '90%',
    fontSize: '18px',
  },

  '@media (min-width: 1280px)': {
    fontSize: '1.5em',
  },
});
