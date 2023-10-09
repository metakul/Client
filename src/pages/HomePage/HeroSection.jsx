import React from 'react';
import {Box,Grid,Button,Typography, useMediaQuery,Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import hero1 from '../../assets/images/hero1.svg';
import hero2 from '../../assets/images/hero2.svg';
import hero3 from '../../assets/images/hero3.svg';
import hero4 from '../../assets/images/hero4.svg';
import hero5 from '../../assets/images/hero5.svg';
import hero6 from '../../assets/images/hero6.svg';
import percentage from '../../assets/images/percentage.svg';

const GradientPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#27314B',
  borderRadius: '8px',
  padding: theme.spacing(2),
  minWidth: 240,
}));

const HeroSection = () => {
    const isNonMobile = useMediaQuery("(min-width: 766px)");

  return (
    <Box
      component="div"
      className="lg:max-h-56 bg-yankees-blue rounded-3xl block sm:flex lg:flex 2xl:flex py-8 px-8 min-h-[224px] text-gray justify-center sm:justify-between relative"
    >
      <Box
        className="w-60 sm:block md:block lg:block xl:block 2xl:block"
        component="div"
      >
        <img src={percentage} alt="Percentage" />

        <Typography variant="h4" className="font-extrabold">
          Gas Fee
        </Typography>
        <div className="from-cyan-500 to-blue-500"></div>
      </Box>

      <Box className="absolute top-0 left-0 w-2/3 hidden xl:flex justify-center overflow-hidden">
        <div className="bg-image-gradient-top w-36 h-16 blur-[80px]"></div>
      </Box>
      <Box className="absolute bottom-0 left-0 w-full hidden xl:flex justify-center overflow-hidden">
        <div className="bg-image-gradient-bottom w-36 h-16 blur-[80px] opacity-80"></div>
      </Box>
      <Box
        className="relative xl:flex 2xl:flex sm:hidden md:hidden mt-4 sm:mt-0 md:mt-0 lg:mt-0 2xl:mt-0"
        component="div" style={{marginTop:"40px"}}
      >
            {isNonMobile?(
            <div>
             <img src={hero1} alt="Hero1" className="relative right-2" />
             <img src={hero2} alt="Hero2" className="absolute left-20" />
             <img src={hero3} alt="Hero3" className="relative right-8" />
      
          </div>

        ):(
            <div>
            <img src={hero4} alt="Hero4" className="relative right-2" />
            <img src={hero5} alt="Hero5" className="relative left-0 top-1" />
            <img src={hero6} alt="Hero6" className="relative right-0 top-2" />
          </div>
        ) }
               <Box
        className="text-left sm:text-center md:text-center lg:text-right 2xl:text-right relative flex flex-col mt-10 sm:mt-0 md:mt-10 lg:mt-0 2xl:mt-0"
        component="div"
      >
        <Typography variant="h6" className="font-black tracking-wide">
          Utilize Your Eth NFTs
        </Typography>
        <Typography
          variant="body2"
          className="text-space-gray font-black tracking-wider leading-8 pt-2"
        >
          PLAY WITH THEM TO WIN OTHER NFTS
        </Typography>
        <div className="grow"></div>
        <div className="relative">
          <Button
            variant="contained"
            color="primary"
            className="rounded-lg px-6 py-3 bottom-0 right-0"
          >
            Learn More
          </Button>
        </div>
      </Box>
      </Box>
     
    </Box>
  );
};

export default HeroSection;
