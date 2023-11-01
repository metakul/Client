import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProductCard from './Products/product-card';
import ProductSort from './Products/product-sort';
import ProductFilters from './Products/product-filters';
import ProductCartWidget from './Products/product-cart-widget';
import Backdrop from '@mui/material/Backdrop'; // Import Backdrop component

// Import your fetchNFTs function from the previous code
import { fetchNFTs } from '../../_mock/products';
import loadingGif from '../../assets/gif/loading_24.gif';

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTProducts = async () => {
      try {
        const fetchedProducts = await fetchNFTs();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchNFTProducts();
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container sx={{
     
    }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        All NFT's
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1, ml:"50px",
      mr:"50px", }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
          <ProductSort />
        </Stack>
      </Stack>

      {loading ? (
        <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}>
           <img src={loadingGif} alt="Loading..." />
        </Backdrop>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      <ProductCartWidget />
    </Container>
  );
}
