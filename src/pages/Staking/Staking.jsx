import React, { useState, useEffect } from 'react';
import {
  Container,
  styled,
  Grid,
  useMediaQuery,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import loadingGif from '../../assets/gif/loading_24.gif';
import { FetchMynfts } from '../../utils/apiUrl/contracts/Get/getApi';
import { useNavigate } from 'react-router-dom';

// Define styled components
const NFTCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '0 1rem 1rem 0',
  maxWidth: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Image = styled(CardMedia)(({ theme }) => ({
  paddingTop: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '100%',
  },
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
  const theme = useMediaQuery('(max-width:600px)') ? 'sm' : 'md';
  const [openStakeDialog, setOpenStakeDialog] = useState(false);

  useEffect(() => {
    setTimeout(() => {
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
    }, 2000);
  }, []);

  const openWallet = () => {
    navigate('/wallet');
  };

  const openStakeDialogNow = () => {
    setOpenStakeDialog(true);
  };

  const closeStakeDialog = () => {
    setOpenStakeDialog(false);
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
                    <StakeButton onClick={openStakeDialogNow}>Stake NFT</StakeButton>
                  </CardContent>
                </NFTCard>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Dialog
        open={openStakeDialog}
        onClose={closeStakeDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Stake NFT</DialogTitle>
        <DialogContent>
          <Typography>
            Staking will soon be enabled for all users.
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Staking;
