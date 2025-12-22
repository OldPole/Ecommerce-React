import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardMedia, Typography, Box, Link } from '@mui/material';

const ProductCard = ({ id, title, price, images }) => {
  return (
    <Link
      component={RouterLink}
      to={`/product/${id}`}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
        maxWidth: 300,
      }}
    >
      <Card
        sx={{
          height: '100%',
          width: '100%',
          boxShadow: 'none',
          border: '1px solid #eee',
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={images?.[0]}
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
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {price} $
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ProductCard;
