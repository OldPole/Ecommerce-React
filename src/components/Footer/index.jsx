import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import HomeLink from '@/elements/HomeLink';

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '60px 20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <HomeLink />
          <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
            <IconButton href="#" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" aria-label="YouTube">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Support
          </Typography>
          <RouterLink
            to="/faq"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              FAQ
            </Typography>
          </RouterLink>
          <RouterLink
            to="/terms"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Terms of Use
            </Typography>
          </RouterLink>
          <RouterLink
            to="/privacy"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Privacy Policy
            </Typography>
          </RouterLink>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Shop
          </Typography>
          <RouterLink
            to="/profile"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              My Account
            </Typography>
          </RouterLink>
          <RouterLink
            to="/products"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Products
            </Typography>
          </RouterLink>
          <RouterLink
            to="/cart"
            style={{ textDecoration: 'none', margin: '5px 0' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Cart
            </Typography>
          </RouterLink>
        </Box>
      </Box>
      <Typography
        variant="body2"
        textAlign="center"
        borderTop={'1px solid #F6F6F6'}
        color="text.secondary"
        p={3}
      >
        &copy; 2025 OldPole. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
