import {
  KeyboardArrowDown,
  Person,
  Search,
  ShoppingCart,
} from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: 'white', color: 'black', boxShadow: 0 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Ecommerce
          </Typography>

          <Box sx={{ ml: 4, display: 'flex', gap: 1 }}>
            <Button color="inherit">Home</Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDown />}
              onClick={handleClick}
            >
              Categories
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Electronics</MenuItem>
            <MenuItem onClick={handleClose}>Clothing</MenuItem>
            <MenuItem onClick={handleClose}>Books</MenuItem>
            <MenuItem onClick={handleClose}>Home & Garden</MenuItem>
            <MenuItem onClick={handleClose}>Sports</MenuItem>
          </Menu>
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

          <IconButton>
            <Badge badgeContent={0} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton>
            <Person />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
