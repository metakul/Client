import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/assets/images/dp.gif',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GMT +5:30'
};

export const AccountProfile = (userProfile) => {
  const [open, setOpen] = useState(false);

  const handleMintProfile = () => {
    setOpen(true);
    // Perform any additional actions related to profile minting here.
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {userProfile.userProfile.firstName} {userProfile.userProfile.lastName}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
             {userProfile.userProfile.user_country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
          onClick={handleMintProfile}
          color='secondary'
        >
          MINT PROFILE PICTURE
        </Button>
      </CardActions>

      {/* KYC Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mint Profile Picture</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your profile picture will be minted after completing the KYC process.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
