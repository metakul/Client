import { Button, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import { Link } from '@mui/icons-material';

export const Team = ({ onClose }) => {
    const theme=useTheme()
  return (
    <Container >
      <Button sx={{ position: 'absolute', top: 60, right: 20,color:theme.palette.colors.colors.yellow[200] }} onClick={onClose}>
        Close
      </Button>

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Team Member
        </Typography>
        <Typography variant="h2" textAlign="center" mb={4}>
          Meet the Crew
        </Typography>

        <div style={{ overflow: 'auto', maxHeight: '75vh' }}>
          <Grid container spacing={3}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper elevation={3} sx={{ padding: 2, position: 'relative' }}>
                  <img
                    src="assets/team/avatar2.png"
                    alt="Team Image"
                    width="100px"
                    height="100px"
                    style={{ borderRadius: '50%' }}
                  />
                  <Typography variant="h5" mt={2}>
                   Shubham Kunwar
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Blockchain Developer
                  </Typography>
                  <div sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="#" target="_blank" sx={{ mr: 2 }}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Container>
  );
};
