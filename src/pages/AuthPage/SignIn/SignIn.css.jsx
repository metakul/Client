import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '6px',
  width: '100%',
});

export const Title = styled('h1')({
  fontSize: '24px',
  marginBottom: '16px',
});

export const StyledAvatar = styled('img')({
  margin: '0 auto 14px auto',
  width: '48px',
  height: '48px',
});

export const Form = styled('form')({
  width: '100%',
});

export const TextField = styled('input')({
  width: '80%',
  padding: '10px',
  marginBottom: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const TextField2 = styled('input')({
  width: '80%',
  padding: '10px',
  marginBottom: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const OtpButton = styled('button')({
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});

export const CheckboxContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

export const CheckboxLabel = styled('label')({
  width: '80%',
  marginLeft: '8px',
});

export const Button = styled('button')({
  width: '80%',
  padding: '12px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const LinkContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '16px',
  width: '80%',
  
});

export const Signup = styled('a')({
  cursor: 'pointer',
  marginLeft: '8px',
  textDecoration: 'none',
  fontSize: '12px',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const Link = styled('a')({
  cursor: 'pointer',
  marginLeft: '8px',
  textDecoration: 'none',
  fontSize: '12px',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const OptionBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
});

export const OptionButton = styled('button')(({ active }) => ({
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: '8px',
  fontSize: '14px',
  marginTop:"12px",
  transition: 'background-color 0.3s ease, color 0.3s ease',
    backgroundColor: '#1976d2',

  '&:hover': {
    backgroundColor: '#1976d2',
  },
}));
