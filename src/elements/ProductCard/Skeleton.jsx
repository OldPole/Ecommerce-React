import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonProduct = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={390}
      width={300}
      sx={{ borderRadius: 1, maxWidth: '100%' }}
    />
  );
};

export default SkeletonProduct;
