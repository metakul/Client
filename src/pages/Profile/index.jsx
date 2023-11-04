import React, { useState, useEffect } from 'react'; // Import React and useEffect
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from '../../sections/accounts/account-profile';
import { AccountProfileDetails } from '../../sections/accounts/account-profile-details';
import { getProfile } from '../../utils/apiUrl/apiUrl';

const Page = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    // Fetch the user profile when the component mounts
    getProfile()
      .then((profileData) => {
        // Update the state with the fetched profile data
        setUserProfile(profileData.data.user);
        console.log(userProfile)
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">
                Account
              </Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile userProfile={userProfile}/>
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountProfileDetails userProfile={userProfile} />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
