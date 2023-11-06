import React, { useState, useEffect } from 'react';
import {
    Box,
  Container,
  styled,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import loadingGif from '../../assets/gif/loading_24.gif';
import { FetchMynfts } from '../../utils/apiUrl/contracts/Get/getApi';
import { useNavigate } from 'react-router-dom';
import { stakeNFT } from '../../utils/apiUrl/erc721/Post/PostApi';

const NFTCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '0 1rem 1rem 0',
  maxWidth: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const Image = styled(CardMedia)(({ theme }) => ({
  paddingTop: '100%',
}));

const NFTName = styled(Typography)({
  color: 'gold',
  textAlign: 'left',
  borderBottom: '1px solid gold',
});

const StakeButton = styled(Button)({
  background: '#00BFFF',
  color: 'white',
  marginTop: '10px',
});

const SortButton = styled(Button)({
  textAlign: 'center',
  backgroundColor: 'gold',
  borderRadius: '0.1cm',
  width: '10rem',
  height: '2rem',
  color: 'rgb(30, 30, 55)',
  fontSize: '0.8rem',
});

const CategoriesContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem',
});

const Staking = () => {
  const navigate = useNavigate();
  const [mynfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openStakeDialog, setOpenStakeDialog] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isStaking, setStaking] = useState(false);
  const [stakingSuccess, setStakingSuccess] = useState(false);

  useEffect(() => {
    FetchMynfts()
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setNfts(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching NFTs:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openWallet = () => {
    navigate('/wallet');
  };

  const openStakeDialogNow = (nft) => {
    setSelectedNFT(nft);
    setOpenStakeDialog(true);
  };

  const closeStakeDialog = () => {
    setSelectedNFT(null);
    setOpenStakeDialog(false);
  };

  const handleStakeNFT = async () => {
    setStaking(true);
    try {
      if (password === confirmation) {
        console.log(selectedNFT.metadata.id,password)
        
        const response = await stakeNFT(selectedNFT.metadata.id, password);
        console.log(response)
        if (response.status === 200) {
          // Staking successful
          setStakingSuccess(true);
        } else {
          // Staking failed
          console.error('Staking failed:', response.data.message);
        }
      }
    } catch (error) {
      // Handle errors as needed
      console.error('Error while staking:', error);
    } finally {
      setStaking(false);
    }
  };
  

  return (
    <Container>
      <CategoriesContainer>
        <SortButton onClick={openWallet}>My Wallet</SortButton>
      </CategoriesContainer>
      {loading ? (
        <img src={loadingGif} alt="Loading" />
      ) : (
        <>
          <Typography variant="h5">NFT TO STAKE</Typography>
          <Grid container spacing={2}>
            {mynfts.map((nft, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <NFTCard>
                  <Image image={nft.metadata.image} title={nft.metadata.name} />
                  <CardContent>
                    <NFTName>{nft.metadata.name}</NFTName>
                    <StakeButton onClick={() => openStakeDialogNow(nft)}>Stake NFT</StakeButton>
                  </CardContent>
                </NFTCard>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Dialog open={openStakeDialog} onClose={closeStakeDialog} fullWidth maxWidth="sm">
        <DialogTitle>Stake NFT</DialogTitle>
        <DialogContent>
          {stakingSuccess ? (
            <Typography variant="h6">Staking Successful</Typography>
          ) : (
            <>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                margin="normal"
              />
              {isStaking ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress />
                  <Typography>Staking in progress...</Typography>
                </Box>
              ) : (
                <DialogActions>
                  <Button onClick={handleStakeNFT} color="primary" variant="contained">
                    Stake
                  </Button>
                </DialogActions>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Staking;
