import React from 'react';
import styles from './carSwitch.module.scss';
import moto from './moto.png';
import car2 from './car2.png';
import flot from './flot.png';

const CarSwitcher = ({ active, setActive, setPage }) => {
  const classHandler = (item) => {
    setActive((prev) => (prev = item));
    setPage(1);
  };

  return (
    <div>
      <div className={styles.items}>
        <div
          className={active === 'bike' ? styles.active : styles.inActive}
          onClick={() => classHandler('bike')}
        >
          <img src={moto} alt="" height={50} />
        </div>
        <div
          className={active === 'car' ? styles.active : styles.inActive}
          onClick={() => classHandler('car')}
        >
          <img src={car2} alt="" height={50} />
        </div>
        <div
          className={active === 'ship' ? styles.active : styles.inActive}
          onClick={() => classHandler('ship')}
        >
          <img src={flot} alt="" height={50} />
        </div>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.item}>Мото</div>
        <div className={styles.item}>Авто</div>
        <div className={styles.item}>Катеры</div>
      </div>
    </div>
  );
};

export default CarSwitcher;
