import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from '../../../utils/format-number';

import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          Owner: {product.name}
        </Link>
        <Typography variant="subtitle2">
          Uniqueness: {product.uniqueness}
        </Typography>

        <Link
          href={product.openSeaLink}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="subtitle2"
        >
          View on OpenSea
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={[]} />
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    cover: PropTypes.string,
    uniqueness: PropTypes.string,
    openSeaLink: PropTypes.string,
  }),
};
