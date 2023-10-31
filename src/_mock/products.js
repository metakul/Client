import axios from 'axios';
import { GetAlllNfts } from '../utils/apiUrl/contracts/Get/getApi';

// Function to fetch the image from the metadata URI and convert it to a URL
const fetchImageFromMetadataURI = async (metadataURI) => {
  try {
    // Extract the IPFS hash and metadata ID from the URI
    const ipfsHash = metadataURI.replace('ipfs://', ''); // Remove 'ipfs://' from the URI
  

    // Build the converted URI
    const convertedURI = `https://ipfs.io/ipfs/${ipfsHash}`;

    // Use the converted URI to fetch the image
    const response = await axios.get(convertedURI)
    if (response.data && response.data.image) {
      const ipfsImageHash =  response.data.image.replace('ipfs://', '');
      const myCoverImage=`https://ipfs.io/ipfs/${ipfsImageHash}`;
      return  myCoverImage
    }
  } catch (error) {
    console.error('Error fetching image from metadata URI:', error);
  }
  return ''; // Return an empty string in case of an error
};
// Fetch NFT data and transform it
export const fetchNFTs = async () => {
  try {
    const alllnft = await GetAlllNfts();
    const nfts = await Promise.all(
      alllnft.data.map(async (nft, index) => {
        const imageResponse = await fetchImageFromMetadataURI(nft.metadata.uri);

        // Check if imageResponse is not null and contains an image property
        if (imageResponse ) {
          return {
            id: nft.metadata.id,
            cover: imageResponse,
            name: nft.owner || 'Unknown Owner',
            uniqueness: `1/777`,
            openSeaLink: `https://opensea.io/assets/matic/0x710e9161e8a768c0605335ab632361839f761374/${nft.metadata.id}`,
          };
        }
      })
    );
    return nfts.filter((nft) => nft !== null); // Filter out any null values
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return []; // Return an empty array in case of an error
  }
};
