import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
} from '@mui/material';

const TransferNFTDialog = ({ open, onClose, onTransfer }) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleTransfer = () => {
    onTransfer(recipientAddress, password);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Transfer NFT</DialogTitle>
      <DialogContent>
        <TextField
          label="Recipient Address"
          fullWidth
          value={recipientAddress}
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleTransfer}>
            Transfer
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TransferNFTDialog;