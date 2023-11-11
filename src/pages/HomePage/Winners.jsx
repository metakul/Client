import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

import winners_nft1 from '../../assets/images/winners_nft1.svg';
import winners_nft2 from '../../assets/images/winners_nft2.svg';
import winners_nft3 from '../../assets/images/winners_nft3.svg';
import winners_nft4 from '../../assets/images/winners_nft4.svg';
import winners_nft5 from '../../assets/images/winners_nft5.svg';
import plus_button from '../../assets/images/plus_button.svg';

const CustomGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

const CustomImageContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const CustomImage = styled('img')`
  overflow: hidden; /* Hide the overflow to prevent images from being visible outside the container */

  /* Define the keyframes for the top-to-bottom animation for CustomImage1 */
  @keyframes slideInFromTop1 {
    from {
      transform: translateX(200%); /* Start off-screen above */
    }
    to {
      transform: translateX(0); /* Move to the original position */
    }
  }

  animation: slideInFromTop1 1.5s ease; /* Adjust the duration and easing as needed */
`;

const CustomImage2 = styled('img')`
  overflow: hidden; /* Hide the overflow to prevent images from being visible outside the container */

  /* Define the keyframes for the top-to-bottom animation for CustomImage2 */
  @keyframes slideInFromTop2 {
    from {
     transform: translateX(200%); /* Start off-screen above */
    }
    to {
      transform: translateY(0); /* Move to the original position */
    }
  }

  animation: slideInFromTop2 2.5s ease; /* Adjust the duration and easing as needed */
`;

// Create CustomImage3 to CustomImage6 with similar styles as CustomImage and CustomImage2 with unique animations.

const CustomImage3 = styled('img')`
  overflow: hidden; /* Hide the overflow to prevent images from being visible outside the container */

  /* Define the keyframes for the top-to-bottom animation for CustomImage3 */
  @keyframes slideInFromTop3 {
    from {
     transform: translateX(200%); /* Start off-screen above */
    }
    to {
      transform: translateY(0); /* Move to the original position */
    }
  }

  animation: slideInFromTop3 3.5s ease; /* Adjust the duration and easing as needed */
`;
const CustomImage4 = styled('img')`
  overflow: hidden; /* Hide the overflow to prevent images from being visible outside the container */

  /* Define the keyframes for the top-to-bottom animation for CustomImage3 */
  @keyframes slideInFromTop4 {
    from {
     transform: translateX(200%); /* Start off-screen above */
    }
    to {
      transform: translateY(0); /* Move to the original position */
    }
  }

  animation: slideInFromTop4 4.5s ease; /* Adjust the duration and easing as needed */
`;
const CustomImage5 = styled('img')`
  overflow: hidden; /* Hide the overflow to prevent images from being visible outside the container */

  /* Define the keyframes for the top-to-bottom animation for CustomImage3 */
  @keyframes slideInFromTop5 {
    from {
     transform: translateX(200%); /* Start off-screen above */
    }
    to {
      transform: translateY(0); /* Move to the original position */
    }
  }

  animation: slideInFromTop5 5.5s ease; /* Adjust the duration and easing as needed */
`;

// Create CustomImage4 to CustomImage6 with similar styles as CustomImage3 and unique animations.


const PlusButtonContainer = styled(Box)`
position: absolute;
color:white;
`;

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;
const PlusButtonLabel = styled(Typography)`
  position: absolute;
  top: 35%;
  left: 25%;
  font-size: 5xl;
  animation: ${blinkAnimation} 1s ease infinite; /* Adjust the duration and properties as needed */
`;


const AdditionalNfts = styled('img')`
  position: absolute;
  cursor: pointer;
`;

const AdditionalPlusButtonContainer = styled(Box)`
  position: absolute;
  top: 188px;
  right: 105px;
  width:40px
`;

const AdditionalPlusButtonLabel = styled(Typography)`
  position: absolute;
  top: 220px;
  right: 153px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 5xl;
`;

const HowItWorksText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: sm;
  font-weight: bold;
  letter-spacing: wide;
`;

const DescriptionText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: sm;
  font-weight: semibold;
  letter-spacing: wide;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
const DescriptionText2 = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: sm;
  font-weight: semibold;
  letter-spacing: wide;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

function MyComponent() {
  return (
    <>
    <CustomGrid container>
    <Grid item xs={8}>
      <CustomImageContainer>
      <CustomImage src={winners_nft2} alt="Winner NFT" />
          <CustomImage2 src={winners_nft3} alt="Winner NFT"  />
          <CustomImage3 src={winners_nft4} alt="Winner NFT"  />
         
          <CustomImage4 src={winners_nft5} alt="Winner NFT"  />
          <CustomImage5 src={winners_nft1} alt="Winner NFT"  />
          <PlusButtonContainer>
            <PlusButtonLabel>MINT YOUR NFT +</PlusButtonLabel>
            {/* <PlusButtonLabel></PlusButtonLabel> */}
            <CustomImage5 src={plus_button} alt="Plus Button" />
          </PlusButtonContainer>
      </CustomImageContainer>
    </Grid>
  
  </CustomGrid>
    <Box item xs={12} style={{ marginTop: '10px' }}>
    <Grid item xs={12}>
      <HowItWorksText>What we offer</HowItWorksText>
      <DescriptionText>
        7777 Metaverse land, 777 NFTs, and unlimited
      </DescriptionText>
      <DescriptionText2 variant="h4">
        virtual & web3 experience
      </DescriptionText2>
    </Grid>
    
  </Box>
  </>

);
}

export default MyComponent;