import React, { useState, useEffect } from 'react';
import { Container, styled, Grid, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import loadingGif from '../../assets/gif/loading_24.gif';
import { getstakedNFTsForWallet } from '../../utils/apiUrl/contracts/Get/getApi';
import { useNavigate } from 'react-router-dom';
import { claimRewards } from '../../utils/apiUrl/erc721/Post/PostApi';
import PasswordInputModal from './passwordModel';
import { unstakeNFT } from '../../utils/apiUrl/erc721/Post/PostApi';
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

const UnStaking = () => {
    const navigate = useNavigate();
    const [totalReward, setTotalReward] = useState(0); // Initialize totalReward
    const [nftDetails, setNftDetails] = useState([]); // Initialize nftDetails
    const [loading, setLoading] = useState(true);
    const [isClaiming, setIsClaiming] = useState(false);
    const [unstakingTokenId, setUnstakingTokenId] = useState('');
    const [isUnstaking, setIsUnstaking] = useState(false);
    const [password, setPassword] = useState('');
    const theme = useMediaQuery('(max-width:600px)') ? 'sm' : 'md';

    useEffect(() => {
        console.log("staking start")
        getstakedNFTsForWallet()
            .then((response) => {
                if (response.data) {
                    setTotalReward(response.data.totalReward); // Set totalReward
                    setNftDetails(response.data.nftDetails); // Set nftDetails
                }
            })
            .catch((error) => {
                console.error('Error fetching NFTs:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    const handleClaim = async (enteredPassword) => {
        // Check the entered password here
        try {
            // Perform the TRX signing and claim rewards here
            // Call your claimRewards function with the necessary parameters
            const response = await claimRewards(enteredPassword); // Assuming claimRewards is an asynchronous function
            console.log(response)
            // Reset the password and isClaiming state
            setPassword('');
            setIsClaiming(false);

            alert('Rewards claimed successfully.');
        } catch (error) {
            // Handle errors that occurred during TRX signing or rewards claiming
            console.error('Error claiming rewards:', error);
            alert('Error claiming rewards. Please try again.');
        }

    };

    const setIsUnstakingTrue=async(tokenId)=>{
        setIsUnstaking(true);
        setUnstakingTokenId(tokenId)
    }

    const handleUnstakeNFT = async (enteredPassword) => {
        // Implement unstaking logic using the unstakeNFT function
        try {
            // Perform the unstaking action here
            const response = await unstakeNFT(unstakingTokenId, enteredPassword);
            console.log(response);

            // Handle success or failure based on the response
            if (response.status === 200) {
                // Unstaking successful
                alert('NFT Unstaked successfully.');
                setUnstakingTokenId('')
                setIsUnstaking(false)
            } else {
                // Unstaking failed
                console.error('Unstaking failed:', response.data.message);
                alert('Error unstaking NFT. Please try again.');
                setIsUnstaking(false)
            }
        } catch (error) {
            // Handle errors that occurred during the unstaking process
            console.error('Error while unstaking:', error);
            alert('Error unstaking NFT. Please try again.');
        } finally {
            // Reset the password and close the modal
            setPassword('');
           
        }
    };


    const openWallet = () => {
        navigate('/wallet');
    }

    return (
        <Container>
            <CategoriesContainer>
                <SortButton onClick={openWallet}>My Wallet</SortButton>
            </CategoriesContainer>
            {loading ? (
                <img src={loadingGif} alt="Loading" />
            ) : (
                <>
                    <Typography container spacing={2} variant="h5">NFT TO UNSTAKE</Typography>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <NFTCard>
                            <CardContent>
                                <NFTName>Total Rewards: {totalReward}</NFTName>
                                <StakeButton onClick={() => setIsClaiming(true)}>Claim Rewards</StakeButton>
                            </CardContent>
                        </NFTCard>
                    </Grid>
                    <Grid container spacing={2}>
                        {nftDetails.map((nft, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <NFTCard>
                                    <Image image={nft.metadata.image} title={nft.metadata.name} />
                                    <CardContent>
                                        <NFTName>{nft.metadata.name}</NFTName>
                                        <StakeButton onClick={() => setIsUnstakingTrue(nft.metadata.id)}>
                                            UNStake NFT
                                        </StakeButton>
                                    </CardContent>
                                </NFTCard>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
            <PasswordInputModal
                open={isClaiming}
                onClose={() => setIsClaiming(false)}
                onConfirm={handleClaim}
            />
            <PasswordInputModal
                open={isUnstaking}
                onClose={() => setIsClaiming(false)}
                onConfirm={handleUnstakeNFT}
            />
        </Container>
    );
};

export default UnStaking;
