import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { fetchTokenBalance, fetchNativeTokenBalance } from '../../utils/apiUrl/contracts/Get/getApi';
import { Box } from '@mui/material';
import { sendErc20Token } from '../../utils/apiUrl/erc20/Post/PostApi';

const mockCryptoBalances = [
    { id: 1,symbol: "$KULL", balance: null  },
    { id: 2, symbol: "MATIC", balance: null },
    { id: 3, symbol: "BTC", balance: "0.00"}, // Initially set the balance to null
];


export default function CryptoWallet() {
    const [cryptoBalances, setCryptoBalances] = useState(mockCryptoBalances);
    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [selectedCryptoId, setSelectedCryptoId] = useState(null);
    const [isTransferDialogOpen, setTransferDialogOpen] = useState(false);
    const [password, setPassword] = useState('');

     // Function to fetch and update the balance of "$KULL"
     const updateKullBalance = async () => {
        try {
            const response = await fetchTokenBalance('$KULL');
            const updatedBalances = [...cryptoBalances];
            const kullIndex = updatedBalances.findIndex((crypto) => crypto.symbol === "$KULL");
            updatedBalances[kullIndex].balance = response.data.displayValue;
            setCryptoBalances(updatedBalances);
        } catch (error) {
            console.error("Error fetching $KULL balance:", error);
        }
    };

    // Function to fetch and update the balance of "MATIC"
    const updateMaticBalance = async () => {
        try {
            const response = await fetchNativeTokenBalance('MATIC');
            const updatedBalances = [...cryptoBalances];
            const maticIndex = updatedBalances.findIndex((crypto) => crypto.symbol === "MATIC");
            updatedBalances[maticIndex].balance = response.data.displayValue;
            setCryptoBalances(updatedBalances);
        } catch (error) {
            console.error("Error fetching MATIC balance:", error);
        }
    };

    useEffect(() => {
        // Call the updateKullBalance function when the component mounts
        updateKullBalance();
        // Call the updateMaticBalance function when the component mounts
        updateMaticBalance();
    }, []);

    const getIcon = (symbol) => {
        if (symbol === "$KULL") {
            return <ImageIcon />;
        } else if (symbol === "MATIC") {
            return <WorkIcon />;
        } else if (symbol === "BTC") {
            return <BeachAccessIcon />;
        }
        return null;
    };

    const handleTransfer = async () => {
        try {
            const recipientAddress = transferTo;
            const value = transferAmount;
            console.log(value)

            // Check if recipient address, transfer amount, and password are valid
            if (!recipientAddress || isNaN(value) || parseFloat(value) <= 0 || !password) {
                console.error("Invalid recipient address, transfer amount, or password");
                return;
            }

            const response = await sendErc20Token(recipientAddress, value, password);

            if (response.status === 200) {
                // Transfer was successful
                console.log('Transfer successful');
            } else {
                console.error('Transfer failed');
            }
        } catch (error) {
            console.error('Transfer failed:', error);
        }
    };


    const openTransferDialog = (id) => {
        setSelectedCryptoId(id);
        setTransferDialogOpen(true);
    };

    const closeTransferDialog = () => {
        setTransferDialogOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
                {cryptoBalances.map((crypto) => (
                    <ListItem key={crypto.id}>
                        <ListItemAvatar>
                            <Avatar>{getIcon(crypto.symbol)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={crypto.symbol}
                            secondary={crypto.balance !== null ? `${crypto.balance}` : 'Loading...'}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => openTransferDialog(crypto.id)}
                        >
                            Transfer
                        </Button>
                        
                        
                    </ListItem>
                ))}
            </List>

            <Dialog open={isTransferDialogOpen} onClose={closeTransferDialog}>
                <DialogTitle>Transfer Crypto (ID: {selectedCryptoId})</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Transfer To"
                        variant="outlined"
                        fullWidth
                        value={transferTo}
                        onChange={(e) => setTransferTo(e.target.value)}
                    />
                    <TextField
                        label="Transfer Amount"
                        variant="outlined"
                        fullWidth
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleTransfer}>
                        Transfer
                    </Button>
                    
                </DialogContent>
            </Dialog>
        </Box>
    );
}
