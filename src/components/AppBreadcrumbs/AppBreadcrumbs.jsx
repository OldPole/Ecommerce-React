import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material';

const AppBreadcrumbs = ({ items = [] }) => {
  // items:
  // 1) ['Login']
  // 2) [{label: 'Login', path: '/login'}]

  return (
    <Box sx={{ width: '100%', bgcolor: '#F6F6F6' }}>
      <Container fixed>
        <Typography
          variant="h5"
          sx={{ pl: '25px', pt: '25px', fontWeight: 'bold' }}
        >
          {items[items.length - 1]}
        </Typography>

        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          sx={{ display: 'flex', p: '5px 25px 25px 25px', bgcolor: '#F6F6F6' }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            color="text.secondary"
          >
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
      </Container>
    </Box>
  );
};

export default AppBreadcrumbs;
