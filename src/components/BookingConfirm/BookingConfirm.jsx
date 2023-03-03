import React from 'react';
import styles from './BookingConfirm.module.scss';

const BookingConfirm = ({ setShow }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}></div>
      <div className={styles.background} onClick={() => setShow(false)}></div>
    </div>
  );
};

export default BookingConfirm;
