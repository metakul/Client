// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const googleHandler = async () => {
    // login || singup
  };

  const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  };

  return (
    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      <Button
      sx={{
        maxWidth:"100px",
        maxHeight:"100px"

      }}
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"} alt="Google" />}
        onClick={googleHandler}
      >
        
      </Button>
      <Button
        sx={{
          maxWidth:"100px",
          maxHeight:"100px"
  
        }}
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={"https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp"} alt="Twitter" />}
        onClick={twitterHandler}
      >
        {/* {!matchDownSM && 'Twitter'} */}
      </Button>
      <Button
        sx={{
          maxWidth:"100px",
          maxHeight:"100px"
        }}
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={"https://www.freepnglogos.com/uploads/facebook-logo-23.jpg"} alt="Facebook" />}
        onClick={facebookHandler}
      >
        {/* {!matchDownSM && 'Facebook'} */}
      </Button>
    </Stack>
  );
};

export default FirebaseSocial;
