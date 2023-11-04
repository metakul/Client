import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



// Import the MyCrypto and MyActivity components
import MyNFT from './MyNFT';
import MyCrypto from './MyCrypto';
import MyActivity from './MyActivity';
import { useTheme } from '@mui/material/styles';


const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: "0",
    // '&.Mui-selected': {
    //   color: '#000',
    // },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
    padding:0
  }),
);

const CustomizedTabs = () => {
  const theme=useTheme()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
    sx={{
      margin:"4px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      border: `2px solid ${theme.palette.colors.colors.grey[100]}`,
      borderRadius: "24px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adding a box shadow
      padding: "8px", // Additional custom CSS for padding
      maxWidth:"800px !important"
    }}
  >

  
      <Box sx={{ margin: 2, display:"flex", justifyContent:"center", }} >
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs">
          <StyledTab label="Crypto" />
          <StyledTab label="NFTs" />
          <StyledTab label="Activity" />
        </StyledTabs>
      </Box>
      {value === 0 && <MyNFT />}
      {value === 1 && <MyCrypto />}
      {value === 2 && <MyActivity />}
    </Container>

  );
};

const App = () => {
  return (
    <div>
      {/* Place any other components or content here */}
      <CustomizedTabs />
    </div>
  );
};

export default App;
