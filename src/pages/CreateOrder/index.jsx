import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
} from '@mui/material';

const LaundryOrderPage = () => {
  const [sem, setSem] = useState('');
  const [hostel, setHostel] = useState('');
  const [room, setRoom] = useState('');
  const [items, setItems] = useState({
    shirts: 0,
    pants: 0,
    jeans: 0,
    shorts: 0,
    towel: 0,
    bsheet: 0,
    pillow: 0,
  });
  const [services, setServices] = useState({
    wash: false,
    iron: false,
  });
  const [date, setDate] = useState(new Date());

  const handleCreateOrder = () => {
    // Create an order object and send it to the server
    const orderData = {
      sem,
      hostel,
      room,
      ...items,
      ...services,
      date,
    };

    // Send the order data to your server for processing (e.g., using fetch or Axios)
    // Replace the following line with your actual API call
    fetch('/api/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order created:', data);
        // Handle success or error here
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Laundry Order
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Semester</InputLabel>
            <Select value={sem} onChange={(e) => setSem(e.target.value)}>
              <MenuItem value="1">Semester 1</MenuItem>
              <MenuItem value="2">Semester 2</MenuItem>
              {/* Add more semesters as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Hostel</InputLabel>
            <Select value={hostel} onChange={(e) => setHostel(e.target.value)}>
              <MenuItem value="A">Hostel A</MenuItem>
              <MenuItem value="B">Hostel B</MenuItem>
              {/* Add more hostels as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Room</InputLabel>
            <Select value={room} onChange={(e) => setRoom(e.target.value)}>
              <MenuItem value="101">Room 101</MenuItem>
              <MenuItem value="102">Room 102</MenuItem>
              {/* Add more rooms as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Laundry Items</Typography>
              {Object.entries(items).map(([item, count]) => (
                <FormControl key={item} fullWidth>
                  <InputLabel>{item}</InputLabel>
                  <Select
                    value={count}
                    onChange={(e) =>
                      setItems({ ...items, [item]: e.target.value })
                    }
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Services</Typography>
              {Object.entries(services).map(([service, selected]) => (
                <FormControlLabel
                  key={service}
                  control={
                    <Checkbox
                      checked={selected}
                      onChange={(e) =>
                        setServices({ ...services, [service]: e.target.checked })
                      }
                      color="primary"
                    />
                  }
                  label={service}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Date</InputLabel>
            <input
              type="date"
              value={date.toISOString().split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateOrder}
          >
            Create Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LaundryOrderPage;
