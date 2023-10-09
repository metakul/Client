import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

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
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

const CustomImageContainer = styled(Box)`
  position: relative;
`;

const CustomImage = styled('img')`
  cursor: pointer;
`;

const PlusButtonContainer = styled(Box)`
  position: absolute;
  left: 0;
`;

const PlusButtonLabel = styled(Typography)`
  position: absolute;
  top: 40%;
  right: 48%;
  font-size: 5xl;
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

function MyComponent() {
  return (
    <CustomGrid container>
      <Grid item xs={6}>
        <CustomImageContainer>
          <CustomImage src={winners_nft2} alt="Winner NFT" />
          <CustomImage src={winners_nft3} alt="Winner NFT" style={{ top: '16px', left: '105px' }} />
          <CustomImage src={winners_nft4} alt="Winner NFT" style={{ top: '188px', left: '105px' }} />
         
          <CustomImage src={winners_nft5} alt="Winner NFT" style={{ top: '245px' }} />
          {/* <AdditionalPlusButtonLabel style={{ top: '220px', right: '153px' }}>+</AdditionalPlusButtonLabel> */}
          <CustomImage src={winners_nft1} alt="Winner NFT" style={{ top: '16px', right: '105px' }} />
          <PlusButtonContainer>
            <PlusButtonLabel>+</PlusButtonLabel>
            <CustomImage src={plus_button} alt="Plus Button" />
          </PlusButtonContainer>

        </CustomImageContainer>
      </Grid>
      <Grid item xs={6} style={{ marginTop: '10px' }}>
        <HowItWorksText>How It Works</HowItWorksText>
        <DescriptionText>
          6 Players, 6 NFTs, 1 random winner gets selected, winner takes all
        </DescriptionText>
      </Grid>
    </CustomGrid>
  );
}

export default MyComponent;
