import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import * as s from './Marketplacecss';
import { uploadFileToIPFS, uploadJSONToIPFS } from '../../scripts/pinata.js';
import Marketplace from '../../abi/Marketplace.json';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ethers } from 'ethers';

const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const TextSubTitle = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '16px',
  lineHeight: 1.6,
  marginTop: '8px',
  marginBottom: '0',
  fontWeight: 1200,
}));

const TextInfo = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '13px',
  opacity: 0.6,
  marginTop: '4px',
  marginBottom: '6px',
  fontWeight: 600,
}));
const Heading = styled('p')(({ theme }) => ({
  color: theme.palette.primary.text,
  fontSize: '18px',
  opacity: 0.6,
  marginTop: '4px',
  marginBottom: '6px',
  fontWeight: 600,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  background: 'linear-gradient(180deg, rgb(148 186 255 / 98%) 0%, rgb(13 142 233 / 96%) 70%)!important',
  color: theme.palette.black,
  textTransform: 'uppercase',
  borderRadius: '16px',
  marginTop: '30px',
  marginBottom: 'auto',
  width: '200px',
  '&:disabled': {
    opacity: 0.4,
    background: 'linear-gradient(180deg, rgb(175 28 28 / 98%) 0%, rgb(233 13 13 / 96%) 70%)!important',
  },
}));

const Home = () => {
  const [formParams, updateFormParams] = useState({ name: '', description: '', external_url: '' });
  const [fileURL, setFileURL] = useState(null);
  const [message, updateMessage] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [dataFetched, updateFetched] = useState(false);

  const OnChangeFile = async (e) => {
    const file = e.target.files[0];
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log('Uploaded image to Pinata: ', response.pinataURL);
        setFileURL(response.pinataURL);
        setDisableButton(false);
      }
    } catch (e) {
      console.log('Error during file upload', e);
    }
  };

  const uploadMetadataToIPFS = async () => {
    const { name, description, external_url } = formParams;
    if (!name || !description || !fileURL) return;

    const nftJSON = {
      name,
      description,
      external_url,
      image: fileURL,
    };

    try {
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log('Uploaded JSON to Pinata: ', response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log('Error uploading JSON metadata:', e);
    }
  };

  const mintNFT = async (e) => {
    e.preventDefault();

    try {
      updateMessage('Please wait.. uploading (upto 1 min)');
      const metadataURL = await uploadMetadataToIPFS();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer);
      let transaction = await contract.uploadDocs(metadataURL);
      await transaction.wait();

      alert('Successfully Minted your NFT!');
      updateMessage('');
      updateFormParams({ name: '', email: '', external_url: '' });
      window.location.replace('/');
    } catch (e) {
      alert('Upload error' + e);
      updateMessage(e.toString());
    }
  };

//   const getBal = () => {
//     const ethers = require('ethers');
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     signer.getAddress().then((addr) => {
//       provider.getBalance(addr).then((balance) => {
//         const balanceInEth = ethers.utils.formatEther(balance);
//         console.log(`balance: ${balanceInEth} Matic`);
//         // const ethereumButton = document.querySelector('.enableEthereumButton');
//         // ethereumButton.textContent = balanceInEth.substring(0, 5) + ' Eth';
//       });
//     });

//     updateFetched(true);
//   };

//   if (!dataFetched) getBal();

  return (
    <MainContainer>
      <s.ResponsiveWrapper flex={1} test>
        
        <Heading style={{ marginBottom: '0px' }}>Verify User For Physical Utilities <TextInfo> * Required fields</TextInfo></Heading>
         <TextSubTitle>Your Name *</TextSubTitle>
        <TextField
          type="text"
          name="name"
          placeholder="User Name"
          onChange={(e) => updateFormParams({ ...formParams, name: e.target.value })}
          value={formParams.name}
        />
        <TextSubTitle>External link</TextSubTitle>
        <TextField
          type="text"
          name="externallink"
          placeholder="https://yoursite.io/"
          value={formParams.external_url}
          onChange={(e) => updateFormParams({ ...formParams, external_url: e.target.value })}
        />
        <TextSubTitle>E-mail</TextSubTitle>
        <TextInfo>The email will be included on the doc's detail page underneath its image.</TextInfo>
        <TextField
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formParams.description}
          onChange={(e) => updateFormParams({ ...formParams, description: e.target.value })}
        />
         <TextSubTitle>Your College ID card *</TextSubTitle>
        <TextInfo>Colleges supported: GBPIET, IIT Kanpur. Max size: 10 MB</TextInfo>
        <s.uploadInput onChange={OnChangeFile} accept="image/png,image/gif,image/jpeg,image/jpg,image/svg" type="file" name="file" id="fileid" />
      
        <StyledButton onClick={mintNFT} disabled={disableButton}>
          Verify Docs
        </StyledButton>
        <TextInfo>Upload Docs to enable Verify Button</TextInfo>
        <TextInfo>{message}</TextInfo>
      </s.ResponsiveWrapper>
    </MainContainer>
  );
};

export default Home;
