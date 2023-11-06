import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Container, Button } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import AnimateButton from '../../components/@extended/AnimateButton';
// ================================|| LOGIN ||================================ //

const Login = () => (
  <Container>
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <AnimateButton>


              <Typography  variant="body1" sx={{ textDecoration: 'none' }} color="secondary">
                Don&apos;t have an account?

              </Typography>
              <Button component={Link} to="/register" variant="contained"
                color="primary"
                backgroundColor="secondary">
                SIGN UP
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  </Container>


);

export default Login;
