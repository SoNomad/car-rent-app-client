import { Typography } from '@mui/material';
import React from 'react';
import styles from './BookingConfirm.module.scss';

const BookingConfirm = ({ setShow, car, location, fromDate, toDate }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <img src={car.imageUrl} alt="" height={100} />
      <Typography variant='h3'>{car.name}</Typography>
      <Typography variant='h4'>{fromDate}</Typography>
      <Typography variant='h4'>{toDate}</Typography>
      <Typography variant='h4'>{location}</Typography>
      

      
      </div>
      <div className={styles.background} onClick={() => setShow(false)}></div>
    </div>
  );
};

export default BookingConfirm;
