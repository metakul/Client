import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  CircularProgress, // Import CircularProgress component
  Typography, // Import Typography component
} from '@mui/material';
import loadingGif from '../../assets/gif/loading_24.gif'; // Import the loading GIF

const TransferNFTDialog = ({ open, onClose, onTransfer, tokenID }) => {
  const [receiverAddress, setRecipientAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isTransferring, setTransferring] = useState(false);
  const [transferMessage, setTransferMessage] = useState('');

  const handleTransfer = async () => {
    setTransferring(true);
    setTransferMessage('Transfer is in process. You will be notified soon.');

    try {
      await onTransfer(receiverAddress, password, tokenID);
      setTransferMessage('NFT transfer successful');
    } catch (error) {
      setTransferMessage('NFT transfer failed');
    } finally {
      setTransferring(false);
      // Close the dialog after a delay or when you get a response from the server
      setTimeout(() => {
        onClose();
      }, 3000); // Close the dialog after 3 seconds
    }
  };

  useEffect(() => {
    if (!open) {
      // Reset the dialog fields when the dialog is closed
      setRecipientAddress('');
      setPassword('');
      setTransferMessage('');
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Transfer NFT</DialogTitle>
      <DialogContent>
        <TextField
          label="Recipient Address"
          fullWidth
          value={receiverAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {isTransferring ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularProgress />
            <Typography>{transferMessage}</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleTransfer}>
              Transfer
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TransferNFTDialog;
