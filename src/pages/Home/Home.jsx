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
  const [active, setActive] = useState('car');
  const [page, setPage] = useState(1);

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
          <img src={clouds} alt="clouds" />
        </marquee>
        <img src={gradient} alt="gradient" width="100%" className={styles.gradient} />
        <div className={styles.logoName}>
          <Typography mr={2} pr={2} variant="h1" sx={{ color: 'white', fontWeight: 400 }}>
            Самуи
          </Typography>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 100 }}>
            Аренда <br /> транспорта
          </Typography>
        </div>
        <div className={styles.switcher}>
          <CarSwitcher active={active} setActive={setActive} setPage={setPage} />
        </div>
      </div>
      <main>
        <BookingForm />
      </main>
      <Products active={active} page={page} setPage={setPage} />
      <Section />
    </>
  );
};

export default Home;
