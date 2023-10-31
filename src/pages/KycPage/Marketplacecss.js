import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  marginLeft: 'auto',
    marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    
  },
  background:theme.palette.background
}));

export const TextSubTitle = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '16px',
  lineHeight: 1.6,
  marginTop: '8px',
  marginBottom: '0',
  fontWeight: 1200,
}));
export const ResponsiveWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '10px 10% 10px 5%',
  padding:"24px",
  '@media (min-width:1000px)': {
    flexDirection: 'column',
    margin: '0px 25% 10px 25%',
  },
  border:`1px solid ${theme.palette.colors.colors.grey[100]}`,
  borderRadius:"20px",
  background:theme.palette.colors.colors.primary[900]

}));

export const TextInfo = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '13px',
  opacity: 0.8,
  marginTop: '4px',
  marginBottom: '6px',
  fontWeight: 600,
}));
export const Heading = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '18px',
  opacity: 0.8,
  marginTop: '4px',
  marginBottom: '6px',
  fontWeight: 600,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  background: 'linear-gradient(180deg, rgb(148 186 255 / 98%) 0%, rgb(13 142 233 / 96%) 70%)!important',
  color: theme.palette.black,
  textTransform: 'uppercase',
  borderRadius: '16px',
  marginTop: '30px',
  marginBottom: 'auto',
  width: '200px',
  '&:disabled': {
    opacity: 0.4,
    background: 'linear-gradient(180deg, rgb(175 28 28 / 98%) 0%, rgb(233 13 13 / 96%) 70%)!important',
  },
}));
export const uploadInput = styled('input')(({ theme }) => ({
  marginTop: '10px',
}));