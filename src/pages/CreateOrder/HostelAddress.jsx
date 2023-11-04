import React from 'react';
import TextField from '@mui/material/TextField';

function HostelAddress({ stepData, setStepData }) {
    const { hostelName, hostelRoom, hostelAddress } = stepData;
  
    const handleChange = (field, value) => {
      setStepData({
        ...stepData,
        address: {
          ...stepData.address,
          [field]: value,
        },
      });
    };
  
    return (
      <div>
        <TextField
          id="hostelName"
          label="Hostel Name"
          variant="outlined"
          fullWidth
          value={hostelName}
          onChange={(e) => handleChange('hostelName', e.target.value)}
          margin="normal"
        />
        <TextField
          id="hostelRoom"
          label="Hostel Room"
          variant="outlined"
          fullWidth
          value={hostelRoom}
          onChange={(e) => handleChange('hostelRoom', e.target.value)}
          margin="normal"
        />
        <TextField
          id="hostelAddress"
          label="Hostel Address"
          variant="outlined"
          fullWidth
          value={hostelAddress}
          onChange={(e) => handleChange('hostelAddress', e.target.value)}
          margin="normal"
        />
      </div>
    );
  }
  

export default HostelAddress;
