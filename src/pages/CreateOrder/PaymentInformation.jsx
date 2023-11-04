import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import OutlinedInput from '@mui/material/OutlinedInput';
function PaymentInformation({ stepData, setStepData }) {
    const [paymentType, setPaymentType] = useState('');
    const [password, setPassword] = useState(''); // Separate state for password

    const totalAmount = stepData.totalAmount; // Read the totalAmount from stepData

    const handlePaymentTypeChange = (event) => {
        const selectedPaymentType = event.target.value;
        setPaymentType(selectedPaymentType);

        // Update stepData based on the selected payment type
        setStepData((prevStepData) => {
            return {
                ...prevStepData,
                paymentInfo: {
                    ...prevStepData.paymentInfo,
                    useCOD: selectedPaymentType === 'COD',
                    useKULL: selectedPaymentType === 'KULL',
                },
            };
        });

        // Clear the password when the payment type changes
        setPassword('');
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
    
        // Update the password in the stepData
        setStepData((prevStepData) => ({
            ...prevStepData,
            password: newPassword, // Store the password in stepData
        }));
    };
    
    

    const handlephoneNumberChange = (event) => {
        setStepData((prevStepData) => ({
            ...prevStepData,
            paymentInfo: {
                ...prevStepData.paymentInfo,
                phoneNumber: event.target.value,
            },
        }));
    };



    return (
        <div>
            <h3>Payment Information</h3>

            <RadioGroup
                aria-label="paymentType"
                name="paymentType"
                value={paymentType}
                onChange={handlePaymentTypeChange}
            >
                {paymentType === 'KULL' ? (
                    <p>Total Amount: $KULL {totalAmount}</p>
                ) : (
                    <p>Total Amount: RS. {totalAmount}</p>
                )}

                <FormControlLabel
                    value="COD"
                    control={<Radio />}
                    label="Cash on Delivery (COD)"
                />
                <FormControlLabel
                    value="KULL"
                    control={<Radio />}
                    label="Pay with $KULL"
                />
            </RadioGroup>
            <div>
                <TextField
                    name="phone"
                    label="Contact Number"
                    value={stepData.paymentInfo.phoneNumber}
                    onChange={handlephoneNumberChange}
                />
            </div>

            {paymentType === 'KULL' && (
                <div>
                    <OutlinedInput
                        id="password"
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                        fullWidth
                    />
                </div>
            )}
        </div>
    );
}

export default PaymentInformation;
