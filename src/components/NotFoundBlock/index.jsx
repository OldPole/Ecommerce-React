import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFoundBlock = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '100px',
        maxWidth: '750px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h1" component="div" sx={{ fontSize: '64px' }}>
        <span role="img" aria-label="confused face">
          😕
        </span>
        <br />
        Ничего не найдено
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '24px' }}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </Typography>
    </Box>
  );
};

export default NotFoundBlock;
