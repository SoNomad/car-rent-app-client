import React from 'react';
import styles from './Home.module.scss';
import gradient from './gradient.png';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoName}>
          <Typography mr={2} pr={2} variant="h1" sx={{ color: 'white', fontWeight: 400 }}>
            Самуи
          </Typography>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 100 }}>
            Аренда <br /> транспорта
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
