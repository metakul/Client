import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import OpenSeaIcon from '../../../assets/logo/opensea-logo.svg'; // Replace with the correct path to your SVG

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 10,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background,
  '&:hover': { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  const openSeaUrl = 'https://opensea.io/collection/metakul'; // Replace with your OpenSea URL

  return (
    <a href={openSeaUrl} target="_blank" rel="noopener noreferrer">
      <StyledRoot>
          <img src={OpenSeaIcon} alt="OpenSea" width={48} height={48} />
      </StyledRoot>
    </a>
  );
}
