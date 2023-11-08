import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Container, Box, Button, Divider, FormHelperText, Grid, Link, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography, FormControl } from '@mui/material';
import toast from 'react-hot-toast';
import { strengthColor, strengthIndicator } from '../../../utils/password-strength';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { registerUser, sendOTP } from '../../../utils/apiUrl/apiUrl';
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from '../../../components/@extended/AnimateButton';
const AuthRegister = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    phoneNumber: '1234567890',
    user_country: 'INDIA',
    otp: '', // Add an OTP field
  });
  const [otpSent, setOtpSent] = useState(false); // Track OTP sending status

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

  const handleSendOTP = async () => {
    try {
      setIsLoading(true);
      // Check if the email field is empty
      if (!formData.email.trim()) {
        setError('Email is required');
        setIsLoading(false);
        return;
      }

      // Send OTP to the email
      const sendOtpNow = await sendOTP(formData.email);
      console.log(sendOtpNow);
      setOtpSent(true);
      setError('');
      toast.success('OTP sent to your email');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    const newErrors = {};

    // Check if any form field is empty and update error state
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!otpSent) {
      setError('Please send OTP first.');
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Only proceed with the submission if there are no errors
      try {
        setIsLoading(true);
        setErrors({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          password: '',
        });

        // Perform OTP verification and user registration
        const response = await registerUser(formData);

        if (response.status === 201) {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            password: '',
            phoneNumber: '1234567890',
            user_country: 'INDIA',
            otp: '', // Clear the OTP field
          });

          toast.success('Registered Successfully');
          setError('');
          setOtpSent(false); // Reset the OTP sending status
        }
      } catch (err) {
        if (err.response.status) {
          setError(err.response.data.error);
        } else {
          setError('Unknown Error. Join discord to get help.');
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      // Update the error state with newErrors
      setErrors(newErrors);
    }
  };

  return (
    <Container>
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="firstName-signup">First Name*</InputLabel>
              <OutlinedInput
                id="firstName-login"
                type="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                fullWidth
                error={Boolean(errors.firstName)}
              />
              {errors.firstName && (
                <FormHelperText error id="helper-text-firstName-signup">
                  {errors.firstName}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="lastName-signup">Last Name*</InputLabel>
              <OutlinedInput
                fullWidth
                id="lastName-signup"
                type="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                inputProps={{}}
                error={Boolean(errors.lastName)}
              />
              {errors.lastName && (
                <FormHelperText error id="helper-text-lastName-signup">
                  {errors.lastName}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="company-signup">University or Company Name</InputLabel>
              <OutlinedInput
                fullWidth
                id="company-signup"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="GBPIET / Demo Inc"
                inputProps={{
                  required: true,
                }}
                error={Boolean(errors.company)}
              />
              {errors.company && (
                <FormHelperText error id="helper-text-company-signup">
                  {errors.company}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="demo@metakul.com"
                    inputProps={{}}
                    error={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4}>
                {otpSent ? (
                  <Stack spacing={1}>
                    <InputLabel htmlFor="otp">OTP*</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="otp"
                      type="text"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      placeholder="Enter OTP"
                      inputProps={{}}
                    />
                  </Stack>
                ) : (
                  <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleSendOTP}
                  sx={{mt:4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  {isLoading ? 'Sending OTP...' : 'Send OTP'}
                </Button>
                
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">Password*</InputLabel>
              <OutlinedInput
                fullWidth
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
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <FormHelperText error id="helper-text-password-signup">
                  {errors.password}
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
          <Grid item xs={12}>
            {isLoading ? (
              <Typography variant="body2">Creating Account...</Typography>
            ) : (
              <FormHelperText error>{error}</FormHelperText>
            )}
          </Grid>

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
                {isLoading ? 'Creating Account...' : 'Create Account'}
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
