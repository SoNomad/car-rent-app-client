import React from 'react'
import styles from './Home.module.scss'
import { Typography } from '@mui/material'
import BookingForm from '../../components/BookingForm/BookingForm'
import Products from '../../components/Products/Products'
import CarSwitcher from '../../components/carSwitcher/carSwitcher'
import Section from '../../components/Section/Section'

const Home = () => {
  const [getLocation, setGetLocation] = useState(
    'https://maps.google.com/maps?q=%D0%B3%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9&t=&z=13&ie=UTF8&iwloc=&output=embed'
  );
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
          getLocation={getLocation}
          setGetLocation={setGetLocation}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </main>
      <Products />
      <Section />
    </>
  );
};

export default Home;
