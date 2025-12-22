import React, { useState, useCallback } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  Menu,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Search as SearchIcon,
  Sort as SortIcon,
  Clear as ClearIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { useGetCategoriesQuery } from '@/api/productsApi';

const ProductToolbar = ({ filters, onFilterChange }) => {
  const { data: categories = [] } = useGetCategoriesQuery();
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const handleOpenSort = useCallback(e => setSortAnchorEl(e.currentTarget), []);
  const handleCloseSort = useCallback(() => setSortAnchorEl(null), []);

  const handleSortSelect = useCallback(
    (sortBy, order) => {
      onFilterChange({ sortBy, order });
      handleCloseSort();
    },
    [onFilterChange, handleCloseSort],
  );

  return (
    <Box
      sx={{
        m: 4,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          size="small"
          placeholder="Search products..."
          value={filters.search}
          onChange={e =>
            onFilterChange({ search: e.target.value, category: '', page: 1 })
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: filters.search && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => onFilterChange({ search: '' })}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filters.category}
            label="Category"
            onChange={e =>
              onFilterChange({ category: e.target.value, search: '', page: 1 })
            }
            startAdornment={
              <InputAdornment position="start">
                <FilterIcon fontSize="small" />
              </InputAdornment>
            }
          >
            <MenuItem>
              <em>All Categories</em>
            </MenuItem>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category.replace(/-/g, ' ')}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="inherit"
          startIcon={<SortIcon />}
          onClick={handleOpenSort}
          sx={{ height: 40 }}
        >
          {filters.sortBy ? `By ${filters.sortBy}` : 'Sort'}
        </Button>

        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={handleCloseSort}
        >
          <MenuItem onClick={() => handleSortSelect('', '')}>Default</MenuItem>
          <MenuItem onClick={() => handleSortSelect('price', 'asc')}>
            Price: Low to High
          </MenuItem>
          <MenuItem onClick={() => handleSortSelect('price', 'desc')}>
            Price: High to Low
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
};

export default React.memo(ProductToolbar);
