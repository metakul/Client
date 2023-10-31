import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled, useTheme } from '@mui/material/styles';
import { tokens } from '../../theme';
import { ClaimNFT } from '../../utils/apiUrl/erc721/Post/PostApi';
import toast from 'react-hot-toast';

import loadingGif from '../../assets/gif/loading_24.gif';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledContent = styled(Card)(({ theme, colors }) => ({
  background: colors.primary[800],
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
  const colors = tokens(theme.palette.mode);
  const [password, setPassword] = useState(''); // Use "password" instead of "address"
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    try {
      setLoading(true);
  
      await ClaimNFT(password);
      toast.success('NFT claimed successfully!');
    } catch (error) {
      console.error('Error claiming NFT:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = (event) => { // Rename to handlePasswordChange
    setPassword(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledContent colors={colors}>
        <StyledCardHeader>Mint NFT</StyledCardHeader>
        <TextField
          label="Password" // Change the label to "Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange} // Change to handlePasswordChange
          fullWidth
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
      </StyledContent>
    </StyledContainer>
  );
};

export default MintPage;
