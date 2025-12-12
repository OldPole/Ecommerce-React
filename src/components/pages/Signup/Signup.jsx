import AppBreadcrumbs from '@/components/ui/AppBreadcrumbs';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Signup = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#F6F6F6' }}>
      <Container fixed>
        <Typography
          variant="h5"
          sx={{ pl: '25px', pt: '25px', fontWeight: 'bold' }}
        >
          Sign up
        </Typography>
        <AppBreadcrumbs items={['Sign up']} />
      </Container>
    </Box>
  );
};

export default Signup;
