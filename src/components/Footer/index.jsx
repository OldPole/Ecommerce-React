import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, IconButton, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';

import HomeLink from '@/elements/HomeLink';

const Footer = () => {
  const supportLinks = [
    { text: 'FAQ', to: '/faq' },
    { text: 'Terms of Use', to: '/terms' },
    { text: 'Privacy Policy', to: '/privacy' },
  ];

  const shopLinks = [
    { text: 'My Account', to: '/login' },
    { text: 'Products', to: '/products?page=1' },
    { text: 'Cart', to: '/cart' },
  ];

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
          flexWrap: 'wrap',
          gap: 4,
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

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Support
          </Typography>
          {supportLinks.map(({ text, to }) => (
            <Link
              key={text}
              component={RouterLink}
              to={to}
              variant="body2"
              sx={{
                mb: 1,
                color: 'black',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Shop
          </Typography>
          {shopLinks.map(({ text, to }) => (
            <Link
              key={text}
              component={RouterLink}
              to={to}
              variant="body2"
              sx={{
                mb: 1,
                color: 'black',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 150 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Accepted Payments
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
            <CreditCardIcon titleAccess="Visa / Mastercard" />
            <AccountBalanceWalletIcon titleAccess="American Express" />
            <PaymentsIcon titleAccess="Cash / Local Payments" />
          </Box>
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
