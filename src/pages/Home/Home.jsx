import React, { useState } from 'react';
import styles from './Home.module.scss';
import { Typography } from '@mui/material';
import BookingForm from '../../components/BookingForm/BookingForm';
import Products from '../../components/Products/Products';
import CarSwitcher from '../../components/carSwitcher/carSwitcher';
import Section from '../../components/Section/Section';

const Home = ({ setIsTrue }) => {
  setIsTrue(true);
  const [placeHolder, setPlaceHolder] = useState('Место получения');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

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
        <BookingForm
          placeHolder={placeHolder}
          setPlaceHolder={setPlaceHolder}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </main>
      <Products placeHolder={placeHolder} fromDate={fromDate} toDate={toDate} />
      <Section />
    </>
  );
};

export default Home;
