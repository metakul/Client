import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { tokens } from '../../../../theme';

import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WalletIcon from '@mui/icons-material/Wallet';
import { useNavigate } from 'react-router-dom';
import { userLogin } from "../../../../utils/apiUrl/apiUrl";

// Import the ConnectWallet component
import ConnectWallet from './ConnectWallet';
import {Box, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Title = styled('h1')`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  border: 1px solid ${({ colors }) => colors.primary[800]};
  background-color: ${({ colors }) => colors.background};
  border-radius: 8px;
`;

const ButtonBase = styled('button')`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const GoogleSignInButton = styled(ButtonBase)`
  background-color: ${({ colors }) => colors.primary[700]};
  color: ${({ colors }) => colors.grey[100]};
  &:hover {
    background-color: ${({ colors }) => colors.primary[400]};
  }
`;

const ConnectButton = styled(ButtonBase)`
  background-color: ${({ colors }) => colors.secondary[900]};
  &:hover {
    background-color: ${({ colors }) => colors.secondary[700]};
  }
`;

const Input = styled(TextField)`
  padding: 2px;
  border-radius: 4px;
  margin-bottom: 4px;
  width: 100%;
  color: ${({ colors }) => colors.primary[100]};

`;

const Icon = styled('span')`
  margin-right: 8px;
`;

const SignIn = ({ setShowSignIn }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleGoogleSignIn = () => {
    console.log("coming soon")
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Simulate login response for the example
      const response = await userLogin(data); // Ensure you use await here
      console.log(response)
  
      if (response.status==200) {
        navigate("/"); // Redirect to the dashboard page after login
        // Assuming a successful login would return a token
        toast.success(response.data.message)
      } 
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error)
      } else {
        console.log("Unknown Error");
      }
    }
  };

  const handleWalletConnect = () => {
    setOpenConnectWallet(true);
  };

  const handleCloseConnectWallet = () => {
    setOpenConnectWallet(false);
  };

  return (
    <Container colors={colors}>
      <Title>Sign In</Title>


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative'}}>
        <Input
            colors={colors}
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={data.email || ""}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
 
          <Input
            colors={colors}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={data.password || ""}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div style={{ height: 4 }}></div>
        <ConnectButton colors={colors} onClick={handleLogin}>
          <Icon>
            <EmailIcon />
          </Icon>
          Login
        </ConnectButton>
      </div>
      <div style={{ paddingBlock: 8 }}>
        <span>OR</span>
      </div>
      <Box display="flex" flexDirection="column">
  <GoogleSignInButton colors={colors} onClick={handleWalletConnect}>
    <Icon>
      <GoogleIcon />
    </Icon>
    Sign in with Google
  </GoogleSignInButton>
  <Box marginRight={2}></Box> {/* Adjust the margin-right value to control the space */}
  <ConnectButton colors={colors} onClick={handleWalletConnect}>
    <Icon>
      <WalletIcon />
    </Icon>
    Connect a Wallet
  </ConnectButton>
</Box>


      
      {/* Display the ConnectWallet component */}
      <ConnectWallet  colors={colors} open={openConnectWallet} onClose={handleCloseConnectWallet} />
    </Container>
  );
};

export default SignIn;
