import { styled } from '@mui/material/styles';

// Header
export const Header = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const searchInput = styled('input')(({ theme }) => ({
  height: '40px',
  width: '50%',
  borderRadius: '15px',
  margin: 'auto auto auto 20px',
  paddingLeft: '15px',
}));

// NFT Input
export const nftInput = styled('input')(({ theme }) => ({
  height: '40px',
  width: '80%',
  borderRadius: '10px',
  paddingLeft: '15px',
}));

export const textArea = styled('textarea')(({ theme }) => ({
  width: '80%',
  borderRadius: '10px',
  paddingLeft: '15px',
}));

// Upload Input
export const uploadInput = styled('input')(({ theme }) => ({
  marginTop: '10px',
}));

// Label for Upload
export const uploadLabel = styled('label')(({ theme }) => ({
  cursor: 'pointer',
  height: '250px',
  width: '300px',
  borderStyle: 'dashed',
  marginTop: '10px',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '20px',
  paddingTop: 'auto',
  paddingRight: 'auto',
}));

export const nftIcon = styled('label')(({ theme }) => ({
  cursor: 'pointer',
  margin: 'auto auto auto auto',
}));

// Screen
export const Screen = styled('div')(({ theme, image }) => ({
  backgroundImage: image ? `url(${image})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: '5px 25px',
}));

// Spacer Components (No changes needed)

// Container
export const Container = styled('div')(({ theme, fd }) => ({
  display: 'flex',
  flex: 'flex-start',
  flexDirection: fd ? fd : 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'pink',
  width: '100%',
}));

// Text Components
export const TextTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '30px',
  fontWeight: 1500,
  marginLeft: '5px',
}));

export const TextSubTitle = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '20px',
  lineHeight: 1.6,
  marginTop: '8px',
  marginBottom: '0',
  fontWeight: 1200,
}));

export const TextInfo = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '13px',
  opacity: 0.6,
  marginTop: '4px',
  marginBottom: '6px',
  fontWeight: 600,
  '@media (min-width:1000px)': {
    paddingRight: '150px',
  },
}));

// Responsive Wrapper
export const ResponsiveWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'stretched',
  alignItems: 'stretched',
  padding: '10px 10% 10px 5%',
  '@media (min-width:1000px)': {
    flexDirection: 'column',
    padding: '0px 15% 10px 15%',
  },
}));

// Styled Images
export const StyledImg = styled('img')(({ theme }) => ({
  width: '250px',
  margin: '350px',
  '@media (min-width: 1000px)': {
    width: '330px',
    bottom: '70px',
    borderRadius: '330px',
  },
  transition: 'width 0.5s',
  borderRadius: '250px',
}));

// Styled Logo
export const StyledLogo = styled('img')(({ theme }) => ({
  width: '50px',
  '@media (min-width: 1000px)': {
    width: '50px',
  },
  transition: 'width 0.5s',
  transition: 'height 0.5s',
  display: 'block',
}));

// Styled Link
export const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary,
  textDecoration: 'none',
}));

// Styled Button
export const StyledButton = styled('button')(({ theme }) => ({
  padding: '4px',
  fontSize: '17px',
  fontWeight: 'bold',
  cursor: 'pointer',
  background: 'linear-gradient(180deg, rgb(148 186 255 / 98%) 0%, rgb(13 142 233 / 96%) 70%)!important',
  color: theme.palette.black,
  textTransform: 'uppercase',
  borderRadius: '16px',
  height: '65px',
  marginTop: '30px',
  marginBottom: 'auto',
  width: '200px',
  '&:disabled': {
    opacity: 0.4,
    background: 'linear-gradient(180deg, rgb(175 28 28 / 98%) 0%, rgb(233 13 13 / 96%) 70%)!important',
  },
}));
