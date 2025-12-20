import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';

const HomeLink = () => {
  return (
    <Box
      component={RouterLink}
      to={'/'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: 'black',
        textDecoration: 'none',
      }}
    >
      <ShopIcon fontSize="large" />

      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Ecommerce
      </Typography>
    </Box>
  );
};

export default HomeLink;
