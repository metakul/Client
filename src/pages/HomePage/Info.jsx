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
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
`;

const CustomImage = styled('img')`
  cursor: pointer;
`;

const CustomTextGray = styled(Typography)`
  color: gray;
`;

const CustomTextNouveauMain = styled(Typography)`
  color: #YOUR_COLOR_HERE; /* Replace with your color code */
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
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Typography variant="h4" fontWeight="bold">
                Winners Takes All
              </Typography>
              <CustomTextNouveauMain variant="subtitle1" fontWeight="bold">
                5/6
              </CustomTextNouveauMain>
            </div>
            <CustomTextGray variant="subtitle1" fontWeight="bold">
              Waiting for <span style={{ color: 'lightgreen' }}>1</span> more player ...
            </CustomTextGray>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <CustomButton onClick={() => pageNavigate("previousrounds")}>Previous Rounds</CustomButton>
            <CustomButton>Rules</CustomButton>
          </div>
        </Box>
        <div>
          <div style={{ display: 'flex' }}>
          <MyComponent/>
           
          </div>
        </div>
      </Box>
      );
      
      
}