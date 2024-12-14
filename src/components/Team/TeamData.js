import {
  StyledCiFacebook,
  StyledAiOutlineInstagram,
  StyledFiTwitter,
  StyledFaLinkedinIn,
} from './styles/index';

const TeamData = [
  {
    id: 1,
    image: './images/personTeam1.jpg',
    name: 'Andrew',
    profession: 'chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 2,
    image: './images/personTeam2.jpg',
    name: 'John',
    profession: 'chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 3,
    image: './images/personTeam3.jpg',
    name: 'Lina',
    profession: 'chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 4,
    image: './images/personTeam4.jpg',
    name: 'Marie',
    profession: 'chef',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
];

export default TeamData;
