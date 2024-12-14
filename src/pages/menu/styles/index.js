import { styled } from '@mui/material';

export const MenuSection = styled('section')({
  width: '100%',
  marginBottom: '10em',
});

export const HeroMenu = styled('div')({
  width: '100%',
  filter: 'brightness(100%)',
  marginBottom: '25em',
});

export const StyledWrapper = styled('div')({
  paddingTop: '4.3em',
  width: '100%',
  position: 'relative',
  top: '1.8em',
  color: '#f4f3ee',
  fontSize: '4em',
  fontWeight: '600',
  '@media (min-width: 320px)': {
    top: '3em',
    fontSize: '2.2em',
  },
  '@media (min-width: 720px)': {
    top: '1.8em',
    fontSize: '2.5em',
  },
});

export const TitleMenu = styled('h1')({
  width: '100%',
  filter: 'brightness(100%)',
  color: '#f4f3ee',
  textShadow: '#000 1px 0 3px',
  marginBottom: '70px',
  '@media (min-width: 320px)': {
    top: '3em',
    fontSize: '1.5em',
    fontWeight: '600',
  },
  '@media (min-width: 720px)': {
    top: '1.8em',
    fontSize: '2.5em',
    fontWeight: '600',
  },
});

export const StyledSpan = styled('span')({
  color: '#bcb8b1',
  textShadow: '#000 1px 0 3px',
  marginTop: '120px',
});

export const MainContent = styled('article')({
  marginLeft: 'auto',
  marginRight: 'auto',
  color: 'black',
  width: '70%',
});

export const BackToAll = styled('span')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '150px',
  height: '100px',
  display: 'flex',
  cursor: 'pointer',
});
