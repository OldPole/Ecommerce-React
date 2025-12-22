import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Person, ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from '@mui/material';

import HomeLink from '@/elements/HomeLink';

const Header = () => {
  return (
    <Container fixed>
      <AppBar
        position="static"
        sx={{ bgcolor: 'white', color: 'black', boxShadow: 0 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HomeLink />
            <Box sx={{ ml: 4, display: 'flex', gap: 1 }}>
              <Button component={RouterLink} to="/" color="inherit">
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/products?page=1"
                color="inherit"
              >
                Products
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton component={RouterLink} to="/cart">
              <Badge badgeContent={0} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton component={RouterLink} to="/login">
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
