import { styled } from '@mui/material';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { CiTextAlignCenter } from 'react-icons/ci';

export const Styledfooter = styled('footer')({
  width: '100%',
  minHeight: '20vh',
  background: '#463f3a',
});

export const LogoImg = styled('img')({
  '@media (min-width: 320px)': {
    width: '13em',
    margin: '2em',
  },
  '@media (min-width: 640px)': {
    width: '17em',
    margin: '2em',
  },
});

export const FooterSocials = styled('div')({
  width: '100%',
  fontSize: '2.3em',
  minHeight: '10vh',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '.5em',
  paddingLeft: '1em',
  position: 'relative', 
  top: '60px',

  '@media (max-width: 640px)': { // Для малих екранів
   

   marginLeft: '55px',

    marginBottom: '60px',
  },
});

const StylesSocials = {
  color: 'white',
  '&:hover': {
    color: '#d8d6d0',
    cursor: 'pointer',
    transition: '.3s',
  },
};

export const StyledFacebook = styled(FaFacebook)(StylesSocials);
export const StyledTwitter = styled(AiFillTwitterCircle)(StylesSocials);
export const StyledInstagram = styled(AiFillInstagram)(StylesSocials);
export const StyledYoutube = styled(AiFillYoutube)(StylesSocials);
export const StyledTelegram = styled(FaTelegram)(StylesSocials);

export const StyledRight = styled('div')({
  width: '100%',
  display: 'block',
});

export const StyledP = styled('p')({
  padding: '0px 0 25px 0',
  color: 'white',
  marginBottom: '0px',
  '@media (min-width: 320px)': {
    fontSize: '15px',
  },
  '@media (min-width: 640px)': {
    fontSize: '18px',
  },
});

export const StyledSpan = styled('span')({
  '@media (min-width: 320px)': {
    display: 'block',
  },
  '@media (min-width: 640px)': {
    paddingLeft: '25px',
    paddingRight: '25px',
    ':nth-of-type(2)': {
      borderRight: '2px solid #f4f3ee',
      borderLeft: '2px solid  #f4f3ee',
    },
  },
});

export const Styledinfo = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '50px',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  color: 'white',
  marginBottom: '0px',
  '@media (min-width: 320px)': {
    fontSize: '16px',
    display: 'block',
    width: '100%',
    height: '6em',
  },
  '@media (min-width: 640px)': {
    display: 'flex',
    height: '50px',
    width: '50%',
    fontSize: '18px',
  },
});

export const ColorLogo = styled('span')({
  color: 'var(--mainColor)',
});
