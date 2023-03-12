import React, { useState } from 'react';
import styles from './Home.module.scss';
import { Typography } from '@mui/material';
import BookingForm from '../../components/BookingForm/BookingForm';
import Products from '../../components/Products/Products';
import CarSwitcher from '../../components/carSwitcher/carSwitcher';
import Section from '../../components/Section/Section';
import clouds from './cloud.png';
import gradient from './gradient.png';

const Home = ({ setIsTrue }) => {
  setIsTrue(true);
  const [placeHolder, setPlaceHolder] = useState('Место получения');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <>
      <div className={styles.header}>
        <marquee
          direction="right"
          behavior="alternate"
          width="100%"
          height="100%"
          scrollamount="5"
          className={styles.clouds}
        >
          <img src={clouds}></img>
        </marquee>
        <img src={gradient} width="100%" className={styles.gradient} />
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
