import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import HeroSection from './HeroSection';
import Info from './Info';


const StyledContainer = styled(Container)(({ theme }) => {
  const customTheme = useTheme();
  return {
    marginTop: '0',
    maxWidth: '100%',
    width: '100%', // Default width
    transition: 'width 0.5s ease-in-out', // Add CSS transition for width
    display:"flex",
    flexDirection:"column",
    [customTheme.breakpoints.up('lg')]: {
      maxWidth: '100%',
      width: '100%',
      marginLeft: '0',
    },
  };
});

const StyledBackground = styled(Box)(({ theme }) => ({
//   backgroundImage: `url('${image}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%', // Set the height to 100% of the container
  animation: '$rotate 10s linear infinite',
}));

const StyledContent = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: theme.spacing(10),
  paddingBottom: theme.spacing(10), // Add padding at the bottom for space
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundColor: 'transparent', // Set card background to transparent
  color: 'white',
}));

const StyledCardHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const HomePage = () => {
  // Add your component logic here

  return (
    <StyledContainer>
        <HeroSection/>
        <Info/>
      <StyledBackground>
      <StyledContent>
        <Typography variant="h4" component="h1">
          Welcome to Meta-kul Metaverse
        </Typography>
        <Typography variant="body1">
          Meta-kul is a metaverse-based NFT project aimed at spreading awareness of blockchain WEB 3.0, NFT's, and revolutionizing the educational system. In this digital realm, students are treated equally and can nurture their special talents.
        </Typography>
      
        <StyledCard>
          <CardContent>
            <StyledCardHeader>Upcoming Events</StyledCardHeader>
            <Typography variant="body2">
              <strong>The Blackout Mint</strong><br />
              1. Minting will be open for pre and public sale.<br />
              2. Launching Staking dashboard of NFT's to earn $KULL passively.<br />
              3. Introducing breeding of the NFT's to upgrade your current 3D NFT's.<br />
            </Typography>
          </CardContent>
        </StyledCard>
        

        
      </StyledContent>
      </StyledBackground>
    </StyledContainer>
  );
};

export default HomePage;
