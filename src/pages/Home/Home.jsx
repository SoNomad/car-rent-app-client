import React from 'react';
import styles from './Home.module.scss';
import { Typography } from '@mui/material';
import CarSwitcher from '../../components/CarSwitcher/CarSwitcher';
import BookingForm from '../../components/BookingForm/BookingForm';
import Products from '../../components/Products/Products';

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
        <div className={styles.switcher}>
          <CarSwitcher />
        </div>
      </div>
      <main>
        <BookingForm />
      </main>
      <Products />
    </>
  );
};

export default Home;
