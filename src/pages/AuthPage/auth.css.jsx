import { styled } from '@mui/material/styles';

// Main Container
export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginLeft:'auto',
    marginRight:"auto"
  },
}));

// Background Image Styles
export const BackgroundImageContainer = styled('div')(({ theme }) => ({
  backgroundImage: 'url(https://raw.githubusercontent.com/rabbit-sol/metakul-nft/main/hero1.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRight: '1px solid #ccc',
  width: '50%',
  padding: '20px',
  borderRadius: '10px',
  margin: '5px',
  marginRight: '4px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));



// Auth Container
export const AuthContainer = styled('div')(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  margin: '5px',
  [theme.breakpoints.down('md')]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    marginTop: '20px',
  },
}));

// Styled Paper
export const StyledPaper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// Sign In Container
export const SignInContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
});

// Sign Up Container
export const SignUpContainer = styled('div')({
  alignItems: 'center',
  marginTop: '2rem',
});
