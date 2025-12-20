import React from 'react';
import { Skeleton, Grid } from '@mui/material';

const SkeletonProduct = () => {
  return (
    <Grid>
      <Skeleton
        variant="rectangular"
        height={390}
        width={300}
        sx={{ borderRadius: 1, mb: 2 }}
      />
    </Grid>
  );
};

export default SkeletonProduct;
