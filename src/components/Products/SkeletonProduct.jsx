import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonProduct = ({ styles }) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <Skeleton sx={{ marginRight: 2 }} variant="rectangular" width={350} height={300} />
      <div className={styles.itemInfo}>
        <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
        <div className={styles.details}>
          <div className={styles.paymentInfo}>
            <Skeleton variant="text" width={300} sx={{ fontSize: '3rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          </div>
          <div className={styles.desc}>
            <ul>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </ul>
          </div>
        </div>
        <div>
          <Skeleton variant="rectangular" width={200} height={50} sx={{ marginBottom: 3 }} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
