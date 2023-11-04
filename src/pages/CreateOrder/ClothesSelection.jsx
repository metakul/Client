import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function ClothesSelection({ stepData, setStepData }) {
  const { clothesSelection } = stepData;

  const handleChange = (item, quantity) => {
    const updatedSelection = { ...clothesSelection, [item]: quantity };
    setStepData({ ...stepData, clothesSelection: updatedSelection, totalAmount: calculateTotalAmount(updatedSelection) });
  };

  const clothingItems = [
    { name: 'Shirt', pricePerItem: 10 },
    { name: 'Pants', pricePerItem: 15 },
    { name: 'Jacket', pricePerItem: 20 },
    { name: 'Hoodie', pricePerItem: 25 },
    { name: 'T-Shirt', pricePerItem: 12 },
  ];

  const calculatePrice = (item, quantity) => {
    const selectedClothing = clothingItems.find((clothing) => clothing.name === item);
    return selectedClothing.pricePerItem * quantity;
  };

  const calculateTotalAmount = (selection) => {
    let total = 0;
    for (const item of clothingItems) {
      if (selection[item.name] > 0) {
        total += calculatePrice(item.name, selection[item.name]);
      }
    }
    return total;
  };

  return (
    <div>
      <Typography variant="h6">Select Clothes</Typography>
      <FormGroup>
        {clothingItems.map((item) => (
          <Grid container spacing={1} key={item.name}>
            <Grid item xs={6} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={clothesSelection[item.name] > 0}
                    onChange={() => handleChange(item.name, clothesSelection[item.name] > 0 ? 0 : 1)}
                  />
                }
                label={item.name}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
                <TextField
                  label="Quantity"
                  type="number"
                  value={clothesSelection[item.name]}
                  onChange={(e) => handleChange(item.name, parseInt(e.target.value, 10))}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
              {clothesSelection[item.name] > 0 && (
                <Typography variant="body2">Price: ${item.pricePerItem} per item</Typography>
              )}
            </Grid>
          </Grid>
        ))}
        <Typography variant="subtitle1">Total Amount: ${stepData.totalAmount}</Typography>
      </FormGroup>
    </div>
  );
}

export default ClothesSelection;
