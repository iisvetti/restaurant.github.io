import { styled } from '@mui/material';

export const ContactHero = styled('section')({
  height: '100vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  filter: 'brightness(80%)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media (min-width: 320px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (min-width: 1020px)': {
    display: 'flex',
  },
});

export const InfoHero = styled('div')({
  textAlign: 'center',
  width: '80%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 320px)': {
    marginTop: '2em',
  },
  '@media (min-width: 724px)': {
    marginTop: '0',
    width: '60%',
  },
});

export const WrapperHero = styled('div')({
  color: 'white',
  textAlign: 'center',
});

export const ContentHero = styled('div')({
  color: '#f4f3ee',
  display: 'block',
});

export const StyledH1 = styled('h1')({
  color: '#f4f3ee',
  textAlign: 'center',
  fontWeight: '600',
  '@media (min-width: 320px)': {
    fontSize: '2em',
  },
  '@media (min-width: 724px)': {
    fontSize: '4em',
  },
});

export const Contactsection = styled('section')({
  color: '#e96a43',
  minHeight: '60vh',
});
