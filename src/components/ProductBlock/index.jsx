import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, Box, Link } from '@mui/material';

import React from 'react';

const ProductBlock = ({ id, title, price, images }) => {
  return (
    <Grid>
      <Link
        component={RouterLink}
        to={`/product/${id}`}
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card sx={{ height: '100%', width: '100%', maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="300"
            image={images[0]}
            alt={title}
            sx={{ objectFit: 'cover' }}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2">{price} $</Typography>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductBlock;
