import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Rating,
  CardMedia,
  Chip,
} from '@mui/material';
import {
  ShoppingBagOutlined,
  LocalShipping,
  VerifiedUser,
} from '@mui/icons-material';
import { useGetProductByIdQuery } from '@/api/productsApi';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Container maxWidth="md" sx={{ py: '40px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              border: '1px solid #eee',
              borderRadius: '8px',
              mb: '16px',
              bgcolor: '#fff',
            }}
          >
            <CardMedia
              component="img"
              height="450"
              image={product.images[activeImage]}
              sx={{ objectFit: 'contain', p: '20px' }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {product.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                onClick={() => setActiveImage(index)}
                sx={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border:
                    activeImage === index ? '2px solid #000' : '1px solid #eee',
                  objectFit: 'cover',
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Chip label={product.category} size="small" sx={{ mb: '10px' }} />
          <Typography sx={{ fontWeight: 700, fontSize: '32px', mb: '8px' }}>
            {product.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              mb: '20px',
            }}
          >
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>
              ({product.reviews.length} reviews)
            </Typography>
          </Box>

          <Typography sx={{ fontWeight: 700, fontSize: '28px', mb: '20px' }}>
            ${product.price}
          </Typography>

          <Typography
            sx={{
              fontSize: '16px',
              color: '#444',
              mb: '30px',
              lineHeight: 1.6,
            }}
          >
            {product.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              mb: '30px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LocalShipping fontSize="small" />
              <Typography sx={{ fontSize: '14px' }}>
                Shipping: {product.shippingInformation}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <VerifiedUser fontSize="small" />
              <Typography sx={{ fontSize: '14px' }}>
                Warranty: {product.warrantyInformation}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            startIcon={<ShoppingBagOutlined />}
            sx={{
              bgcolor: '#000',
              px: '40px',
              py: '12px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { bgcolor: '#333' },
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
