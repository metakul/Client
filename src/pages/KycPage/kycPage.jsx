import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { uploadFileToIPFS, uploadJSONToIPFS } from '../../scripts/pinata.js';
import TextField from '@mui/material/TextField';
import * as s from './Marketplacecss';

// Import your loading GIF
import loadingGif from '../../assets/gif/loading_24.gif';

const Home = () => {
  const [formParams, updateFormParams] = useState({ name: '', description: '', external_url: '' });
  const [fileURL, setFileURL] = useState(null);
  const [message, updateMessage] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [uploading, setUploading] = useState(false); // Add uploading state
  const theme=useTheme()

  const OnChangeFile = async (e) => {
    const file = e.target.files[0];
    try {
      setUploading(true); // Set uploading to true when starting the upload
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log('Uploaded image to Pinata: ', response.pinataURL);
        setFileURL(response.pinataURL);
        setDisableButton(false);
      }
      setUploading(false); // Set uploading to false when the upload is complete
    } catch (e) {
      console.log('Error during file upload', e);
      setUploading(false); // Set uploading to false on error
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

  const uploadKYC = async (e) => {
    e.preventDefault();

    try {
      updateMessage('Please wait.. uploading (upto 1 min)');
      const metadataURL = await uploadMetadataToIPFS();
      console.log(metadataURL);
      alert('Successfully Submitted your Docs!');
      updateMessage('');
      updateFormParams({ name: '', email: '', external_url: '' });
    } catch (e) {
      alert('Upload error' + e);
      updateMessage(e.toString());
    }
  };

  return (
    <s.MainContainer theme={theme}>
      <s.ResponsiveWrapper flex={1} test>
        <s.Heading style={{ marginBottom: '0px', minWidth: "800px" }}>Verify User For Physical Utilities </s.Heading>
        <s.TextInfo> * Required fields</s.TextInfo>
        <s.TextSubTitle>Your Name *</s.TextSubTitle>
        <TextField
          variant="filled"
          type="text"
          name="name"
          placeholder="User Name"
          onChange={(e) => updateFormParams({ ...formParams, name: e.target.value })}
          value={formParams.name}
        />
        <s.TextSubTitle>Your College ID card *</s.TextSubTitle>
        <s.TextInfo>Colleges supported: GBPIET, IIT Kanpur. Max size: 10 MB</s.TextInfo>
        <s.uploadInput onChange={OnChangeFile} accept="image/png,image/gif,image/jpeg,image/jpg,image/svg" type="file" name="file" id="fileid" />

        <s.TextSubTitle>Roll No</s.TextSubTitle>
        <TextField
          variant="filled"
          type="text"
          name="externallink"
          placeholder="https://yoursite.io/"
          value={formParams.external_url}
          onChange={(e) => updateFormParams({ ...formParams, external_url: e.target.value })}
        />
        <s.TextSubTitle>Email</s.TextSubTitle>
        <TextField
          variant="filled"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formParams.description}
          onChange={(e) => updateFormParams({ ...formParams, description: e.target.value })}
        />

        {uploading ? ( // Display loading spinner when uploading
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src={loadingGif} alt="Uploading..." />
          </div>
        ) : (
          <>
            <s.StyledButton onClick={uploadKYC} disabled={disableButton}>
              Verify Docs
            </s.StyledButton>
            <s.TextInfo>Upload Docs to enable Verify Button</s.TextInfo>
          </>
        )}
        <s.TextInfo>{message}</s.TextInfo>
      </s.ResponsiveWrapper>
    </s.MainContainer>
  );
};

export default Home;
