import React, { useState, useEffect } from 'react';
import { Container, styled, Grid, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import loadingGif from '../../assets/gif/loading_24.gif';
import { FetchMynfts } from '../../utils/apiUrl/contracts/Get/getApi';
import { useNavigate } from 'react-router-dom';

// Define styled components
const NFTCard = styled(Card)(({ theme }) => ({
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '0 1rem 1rem 0', // Adjust the margins between cards
    maxWidth: '70%', // Make the card full width on small screens
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints.down('sm')]: {
        maxWidth: '70%', // Make the card full width on small screens
        marginLeft:"auto",
        marginRight:"auto"
    },
}));

const Image = styled(CardMedia)(({ theme }) => ({
    paddingTop: '100%', // 1:1 aspect ratio on small screens

    [theme.breakpoints.down('sm')]: {
        paddingTop: '100%', // 1:1 aspect ratio on small screens
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
    marginTop:"10px"
    
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

const UnStaking = () => {
    const navigate=useNavigate()
    const [mynfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const theme = useMediaQuery('(max-width:600px)') ? 'sm' : 'md';

    useEffect(() => {
        // Simulate a delay to show loading
        setTimeout(() => {
            // Fetch the user's NFTs when the component mounts
            // You should replace this example with your actual data fetching logic
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
                    setLoading(false); // Set loading to false after fetching
                });
        }, 2000); // Simulate a 2-second loading delay
    }, []);
    const openWallet = () => {
        navigate('/wallet'); // Navigate to the /wallet route
    };

    return (
        <Container>
            <CategoriesContainer >
                <SortButton  onClick={openWallet} >My Wallet</SortButton>
            </CategoriesContainer>
            {loading ? (
                // Show the loading GIF while data is being fetched
                <img src={loadingGif} alt="Loading" />
            ) : (
                // Display the NFT list when data is available
                <>
                    <Typography variant="h5" >NFT TO UNSTAKE</Typography>

                    <Grid container spacing={2}>
                        {mynfts.map((nft, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <NFTCard>
                                    <Image
                                        image={nft.metadata.image}
                                        title={nft.metadata.name}
                                    />
                                    <CardContent>
                                        <NFTName>{nft.metadata.name}</NFTName>
                                        {/* Display more NFT details as needed */}
                                        <StakeButton>UNStake NFT</StakeButton>
                                    </CardContent>
                                </NFTCard>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default UnStaking;
