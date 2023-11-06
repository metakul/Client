import { Link } from 'react-router-dom';

// material-ui
import { Button, Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';
import AnimateButton from '../../components/@extended/AnimateButton';
// ================================|| REGISTER ||================================ //

const Register = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign up</Typography>
          <AnimateButton>
            <Typography variant="body1" sx={{ textDecoration: 'none' }} color="secondary">
              Already have an account?
            </Typography>

            <Button component={Link} to="/login" variant="contained"
              color="primary"
              >
              Login In
            </Button>
          </AnimateButton>

        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FirebaseRegister />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Register;