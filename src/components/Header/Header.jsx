import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Person, Search, ShoppingCart } from '@mui/icons-material';
import ShopIcon from '@mui/icons-material/Shop';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

const Header = () => {
  return (
    <Container fixed>
      <AppBar
        position="static"
        sx={{ bgcolor: 'white', color: 'black', boxShadow: 0 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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

            <Box sx={{ ml: 4, display: 'flex', gap: 1 }}>
              <Button component={RouterLink} to="/" color="inherit">
                Home
              </Button>
              <Button component={RouterLink} to="/categories" color="inherit">
                Categories
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search products"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                sx: { bgcolor: 'grey.50', borderRadius: 1, width: 250 },
              }}
            />

            <IconButton component={RouterLink} to="/cart">
              <Badge badgeContent={0} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton component={RouterLink} to="/signup">
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
