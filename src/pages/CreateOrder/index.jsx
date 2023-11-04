import React, { useState } from 'react';
import { Container, Stepper, Step, StepLabel, Button, Paper } from '@mui/material';
import toast from 'react-hot-toast'; 

import ClothesSelection from './ClothesSelection';
import HostelAddress from './HostelAddress';
import PaymentInformation from './PaymentInformation';
import { CreateOrder } from '../../utils/apiUrl/Laundry/Post/PostApi';
const steps = ['Hostel Address', 'Clothes Selection', 'Payment Information'];

function getStepContent(step, stepData, setStepData) {
  switch (step) {
    case 0:
      return <HostelAddress stepData={stepData} setStepData={setStepData} />;
    case 1:
      return <ClothesSelection stepData={stepData} setStepData={setStepData} />;
    case 2:
      return <PaymentInformation stepData={stepData} setStepData={setStepData} />;
    default:
      return 'Unknown step';
  }
}

function NewOrders() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepData, setStepData] = useState({
        date: new Date(),
        address: {},
        clothesSelection: {},
        paymentInfo: {
            useCOD: false,
            useKULL: true,
        },
        totalAmount: 0, // Add this field to store the total amount
        password: '', // Add this field to store the password
    });
    

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setStepData({
        date: new Date(),
        address: {},
        clothesSelection: {},
        paymentInfo: {
            useCOD: false,
            useKULL: true,
        },
        totalAmount: 0, // Add this field to store the total amount
        password: '', // Add this field to store the password
    });
}


const handleCreateOrder = async () => {
  try {
    console.log('Order Data:', stepData);

    // Make the API call to create an order
    const response = await CreateOrder(stepData);

    if (response.status === 200) {
      // If the response status is 200, show a success toast message
      toast.success(response.data.message);
      console.log('Order created successfully:', response);

      // For example, you can check if useCOD or useKULL is selected and access the password and amount.
    } else {
      // Handle other status codes or errors here
      console.error('Order creation failed. Status:', response.status);
    }
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error creating order:', error);
    // You can also show an error message to the user if needed.
  }
};

  

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper elevation={3}>
        {activeStep === steps.length ? (
          <div>
            <h3>Order created successfully!</h3>
            <Button onClick={handleReset}>Create Another Order</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, stepData, setStepData)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === steps.length - 1 ? handleCreateOrder : handleNext}
              >
                {activeStep === steps.length - 1 ? 'Create Order' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default NewOrders;
