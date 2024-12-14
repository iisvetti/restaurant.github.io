import { styled } from '@mui/material';

export const AboutHero = styled('section')({
  height: '100vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  filter: 'brightness(80%)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContainerHero = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '75%',
  height: '100%',
});

export const WrapperHero = styled('div')({
  color: 'white',
  '@media (min-width: 320px)': {
    textAlign: 'center',
    width: '80%',
  },
  '@media (min-width: 724px)': {
    width: '100%',
  },
});

export const StyledH1 = styled('h1')({
  width: '100%',
  filter: 'brightness(100%)',
  color: '#f4f3ee',
  textShadow: '#000 1px 0 3px',
  textAlign: 'center',
  fontWeight: '600',
  '@media (min-width: 320px)': {
    fontSize: '1.9em',
  },
  '@media (min-width: 720px)': {
    fontSize: '4.5em',
  },
});

export const StyledP = styled('p')({
  textAlign: 'center',
  marginLeft: '250px' /*change*/,
  color: '#bcb8b1',
  textShadow: '#000 1px 0 3px',
  fontWeight: '600',
  '@media (min-width: 320px)': {
    fontSize: '.8em',
  },
  '@media (min-width: 720px)': {
    width: '50%',
    fontSize: '1em',
  },
});

export const MainContent = styled('main')({
  width: '100%',
});

export const TeamWrapper = styled('div')({
  width: '100%',
});

export const Contactsection = styled('section')({
  width: '100%',
});
