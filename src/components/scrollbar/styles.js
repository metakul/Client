import SimpleBar from 'simplebar-react';
import {  styled } from '@mui/material/styles';

// Define your custom scrollbar styles here
const customScrollbarStyles = {
  /* Your custom scrollbar styles go here */
  '&::-webkit-scrollbar': {
    width: '16px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '8px',
    backgroundImage: 'url("https://i.ibb.co/5150925/tracks.png")',
    backgroundPosition: '-5px',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '35px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundImage: 'url("https://i.ibb.co/q95CBdZ/train.png")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '30px',
  },
};

// Update StyledRootScrollbar with your custom styles
export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
  ...customScrollbarStyles, // Merge your custom styles here
}));

// Update StyledScrollbar with your custom styles
export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({

  ...customScrollbarStyles, // Merge your custom styles here
}));
