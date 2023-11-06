import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MetaMaskIcon from '../../../assets/walletIcon/metamask.png'; 

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //
import ConnectWallet from './ConnectWallet';
import { tokens } from '../../../theme';

const FirebaseSocial = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  const googleHandler = async () => {
    setOpenConnectWallet(true);
  };

  const twitterHandler = async () => {
    setOpenConnectWallet(true);
    
  };

  const facebookHandler = async () => {
    setOpenConnectWallet(true);

  };
  const handleCloseConnectWallet = () => {
    setOpenConnectWallet(false);
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
        startIcon={<img src={MetaMaskIcon} alt="Google" />}
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
        startIcon={<img src={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"} alt="Facebook" />}
        onClick={facebookHandler}
      >
        {/* {!matchDownSM && 'Facebook'} */}
      </Button>
      <ConnectWallet  colors={colors} open={openConnectWallet} onClose={handleCloseConnectWallet} />
    </Stack>
  );
};

export default FirebaseSocial;
