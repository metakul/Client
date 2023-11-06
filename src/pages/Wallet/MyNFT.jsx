import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Backdrop,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink
import { FetchMynfts } from '../../utils/apiUrl/contracts/Get/getApi';
import TransferNFTDialog from './TransferNft';
import loadingGif from '../../assets/gif/loading_24.gif';
import { TransferNFT } from '../../utils/apiUrl/erc721/Post/PostApi';
import { toast } from 'react-hot-toast';

const MyNFT = () => {
  const [nfts, setNFTs] = useState([]);
  const [isTransferDialogOpen, setTransferDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transferDialogTokenID, setTransferDialogTokenID] = useState(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await FetchMynfts();
        console.log('NFTs:', response);
        setNFTs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  const handleViewOnOpenSea = (externalUrl) => {
    window.open(externalUrl, '_blank');
  };

  const handleOpenTransferDialog = (tokenID) => {
    setTransferDialogOpen(true);
    setTransferDialogTokenID(tokenID);
  };

  const handleCloseTransferDialog = () => {
    setTransferDialogOpen(false);
  };

  const handleTransferNFT = async (receiverAddress, password, tokenID) => {
    try {
      const response = await TransferNFT(receiverAddress, password, tokenID);

      if (response.status === 200) {
        toast.success('NFT transfer successful');
      } else {
        toast.error('NFT transfer failed');
      }
    } catch (error) {
      console.log(error);
      toast.error('NFT transfer failed');
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            My NFTs
          </Typography>

          {loading ? (
            <img src={loadingGif} alt="Loading..." />
          ) : nfts.length > 0 ? (
            <Grid container spacing={3}>
              {nfts.map((nft, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 2,
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #e0e0e0',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={nft.metadata.image}
                      alt={nft.metadata.name}
                      sx={{
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6">{nft.metadata.name}</Typography>
                      <Typography variant="body2">{nft.metadata.description}</Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={() =>
                            handleViewOnOpenSea(
                              `https://opensea.io/assets/matic/0x710e9161e8a768c0605335ab632361839f761374/${nft.metadata.id}`
                            )
                          }
                        >
                          View on OpenSea
                        </Button>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={() => handleOpenTransferDialog(nft.metadata.id)}
                        >
                          Transfer NFT
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1">
              No NFT claimed yet. Visit{' '}
              <Button
                component={RouterLink}
                to="/nft"
                variant="contained"
                color="primary"
              >
                Claim NFT
              </Button>{' '}
              page to claim your free NFT.
            </Typography>
          )}
        </Container>
      </Box>

      <TransferNFTDialog
        open={isTransferDialogOpen}
        onClose={handleCloseTransferDialog}
        onTransfer={handleTransferNFT}
        tokenID={transferDialogTokenID}
      />
    </>
  );
};

export default MyNFT;
