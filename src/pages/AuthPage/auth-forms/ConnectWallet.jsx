import React, { useState } from 'react';
import { Modal, Typography, Button, Box, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import coinbase from '../../../assets/walletIcon/coinbase.svg'; 
import walletConnect from '../../../assets/walletIcon/walletConnect.svg'; 
import MetaMaskIcon from '../../../assets/walletIcon/metamask.png'; 

const ConnectWallet = ({ open, onClose ,colors }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="wallet-modal-title"
      aria-describedby="wallet-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          maxWidth: 600,
          minWidth: 300,
          bgcolor: colors.primary[700], // Background with 80% opacity
          boxShadow: 100,
          p: 4,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
     
       
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              overflow: 'hidden',
              filter: 'blur(2px)', // Apply blur to the background images
              margin:"20px 5px"
            }}
          >
            <img src={MetaMaskIcon} alt="MetaMask Icon" width="90" height="90" />
          </div>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              overflow: 'hidden',
              filter: 'blur(2px)', // Apply blur to the background images
              margin:"20px 5px"

            }}
          >
            <img src={coinbase} alt="Coinbase Icon" width="90" height="90" />
          </div>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              overflow: 'hidden',
              filter: 'blur(2px)', // Apply blur to the background images
              margin:"20px 5px"

            }}
          >
            <img src={walletConnect} alt="Wallet Connect Icon" width="90" height="90" />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                backgroundColor: colors.secondary[800], // Background with 80% opacity
                border: '2px solid #000',
                padding: '16px',
                borderRadius:"10px"
              }}
            >
              Gasless Connect Wallet Coming Soon
            </span>
            <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: '8px',
            top: '8px',
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
          </div>
      </Box>
    </Modal>
  );
};

export default ConnectWallet;
