import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  TextField,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled, useTheme } from '@mui/material/styles';
import { tokens } from '../../theme';
import { ClaimNFT } from '../../utils/apiUrl/erc721/Post/PostApi';
import toast from 'react-hot-toast';
import loadingGif from '../../assets/gif/loading_24.gif';

import { FetchMynfts } from '../../utils/apiUrl/contracts/Get/getApi';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledContent = styled(Card)(({ theme, colors }) => ({
  background: colors.primary[900],
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const StyledCardHeader = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color:theme.palette.colors.colors.primary[100]
}));

const StyledButton = styled(Button)(({ theme, colors }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  color: colors.green[300],
}));
const LoadingGif = styled('img')({
  width: '30px',
  height: '30px',
});

const MintPage = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  const colors = tokens(theme.palette.mode);
  const [password, setPassword] = useState(''); // Use "password" instead of "address"
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Fetch the user's NFTs when the component mounts
  //   // You should replace this example with your actual data fetching logic
  //   FetchMynfts()
  //     .then((response) => {
  //       if (response.data && response.data.length > 0) {
  //         navigate("/staking")
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching NFTs:', error);
  //     });
  // }, []);

  const handleClaim = async () => {
    try {
      setLoading(true);
      await ClaimNFT(password);
      toast.success('NFT claimed successfully!');
    } catch (error) {
      toast.error("Error claiming NFT. Visit Discord")
      console.error('Error claiming NFT:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledContent colors={colors}>
     
          <>
            <StyledCardHeader>Claim Your Free NFT</StyledCardHeader>
            <Typography sx={{
              m:2
            }}>
              Enter your password to and claim NFT
            </Typography>
            <TextField
  variant="outlined"
  value={password}
  onChange={handlePasswordChange}
  fullWidth
  type="password"  // You can set the type to "password" to mask the input
/>

            <StyledButton
              variant="contained"
              colors={colors}
              endIcon={loading ? <LoadingGif src={loadingGif} alt="Loading" /> : <SendIcon />}
              onClick={handleClaim}
              disabled={loading}
            >
              {loading ? 'Claiming...' : 'Mint'}
            </StyledButton>
          </>
      </StyledContent>
    </StyledContainer>
  );
};

export default MintPage;
