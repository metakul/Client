import React from 'react'
import nfticon from '../../assets/images/nfticon.svg'
import cat_nft from '../../assets/images/cat_nft.svg'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import MyComponent from "./Winners"

const CustomButton = styled(Button)`
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  // color:white
`;

const CustomImage = styled('img')`
  cursor: pointer;
`;

const CustomTextGray = styled(Typography)`
  color: gray;
`;

const CustomTextNouveauMain = styled(Typography)`
color: lightgreen
`;




export default function Info() {

    const navigate = useNavigate();
    const pageNavigate = (page) => {
        navigate(`/${page}`);
    };
    return (
        <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem',marginTop:"40px" }}>
          <div>
            <div style={{ display: 'flex', }}>
              <Typography variant="h4" fontWeight="bold">
                Free Metaverse Passes
              </Typography>
             
            </div>
            <CustomTextGray variant="subtitle1" fontWeight="bold">
            <CustomTextNouveauMain variant="subtitle1" fontWeight="bold">
                31/777
              </CustomTextNouveauMain>
            </CustomTextGray>
          </div>
          <Box style={{ display: 'flex', gap: '1rem' }}>
            <CustomButton onClick={() => pageNavigate("previousrounds")}>
              <Typography variant="h6" fontWeight="bold">
                RoadMap
                </Typography>
                </CustomButton>
            <CustomButton>Team</CustomButton>
          </Box>
        </Box>
        <div>
          <div style={{ display: 'flex' }}>
          <MyComponent/>
           
          </div>
        </div>
      </Box>
      );
      
      
}