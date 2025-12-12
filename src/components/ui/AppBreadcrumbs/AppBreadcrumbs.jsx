import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const AppBreadcrumbs = ({ items = [] }) => {
  // items:
  // 1) ['Login']
  // 2) [{label: 'Login', path: '/login'}]

  return (
    <Breadcrumbs
      separator=">"
      aria-label="breadcrumb"
      sx={{ display: 'flex', p: '5px 25px 25px 25px', bgcolor: '#F6F6F6' }}
    >
      <Link component={RouterLink} to="/" underline="hover" color="inherit">
        Ecommerce
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const label = typeof item === 'string' ? item : item.label;

        if (typeof item === 'object' && item.path && !isLast) {
          return (
            <Link
              key={index}
              component={RouterLink}
              to={item.path}
              underline="hover"
              color="text.secondary"
            >
              {label}
            </Link>
          );
        }

        return (
          <Typography
            key={index}
            color={isLast ? 'text.primary' : 'text.secondary'}
            sx={{
              fontWeight: isLast ? 600 : 400,
            }}
          >
            {label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
