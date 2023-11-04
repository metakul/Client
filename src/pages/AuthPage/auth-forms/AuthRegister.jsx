import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
  Container,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';


// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from '../../../components/@extended/AnimateButton';

import { strengthColor, strengthIndicator } from '../../../utils/password-strength';

// assets
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

// Import your API URL function for user registration
import { registerUser } from '../../../utils/apiUrl/apiUrl';
const AuthRegister = () => {
  const navigate=useNavigate
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    phoneNumber:'1234567890',
    user_country:'INDIA'
  });
  const [error, setError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleFormSubmit = async () => {
    try {
      console.log(formData)
      // Simulate form submission for the example
      const response = await registerUser(formData); // Use your API URL function here
      console.log(response);

      if (response.status === 201) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          password: '',
          phoneNumber: '1234567890',
          user_country: 'INDIA',
        });
  
       
        toast.success("Registered SuccessFully"); // Import toast function for displaying messages
      }
    } catch (err) {
      if (err.resposne) {
        // toast.error(err.response.data.error);
        setError(err.response.data.error);
      } else {
        console.log('Unknown Error',err);
      }
    }
  };

  return (
    <Container>
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="firstName-signup">First Name*</InputLabel>
              <OutlinedInput
                id="firstName-login"
                type="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                fullWidth
                error={error.includes('firstName')}
              />
              {error.includes('firstName') && (
                <FormHelperText error id="helper-text-firstName-signup">
                  {error}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="lastName-signup">Last Name*</InputLabel>
              <OutlinedInput
                fullWidth
                error={error.includes('lastName')}
                id="lastName-signup"
                type="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                inputProps={{}}
              />
              {error.includes('lastName') && (
                <FormHelperText error id="helper-text-lastName-signup">
                  {error}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="company-signup">Company</InputLabel>
              <OutlinedInput
                fullWidth
                error={error.includes('company')}
                id="company-signup"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Demo Inc."
                inputProps={{}}
              />
              {error.includes('company') && (
                <FormHelperText error id="helper-text-company-signup">
                  {error}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">Email Address*</InputLabel>
              <OutlinedInput
                fullWidth
                error={error.includes('email')}
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="demo@company.com"
                inputProps={{}}
              />
              {error.includes('email') && (
                <FormHelperText error id="helper-text-email-signup">
                  {error}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">Password</InputLabel>
              <OutlinedInput
                fullWidth
                error={error.includes('password')}
                id="password-signup"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <VisibilityOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="******"
                inputProps={{}}
              />
              {error.includes('password') && (
                <FormHelperText error id="helper-text-password-signup">
                  {error}
                </FormHelperText>
              )}
            </Stack>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              By Signing up, you agree to our &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <FormHelperText error>{error}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                fullWidth
                size="large"
                onClick={handleFormSubmit}
                variant="contained"
                color="primary"
              >
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption">Sign up with</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AuthRegister;
