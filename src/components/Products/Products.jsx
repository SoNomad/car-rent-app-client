import React from 'react';
import styles from './Products.module.scss';
import car from './car.png';
import CustomButton from '../CustomButton';

const Products = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catPanel}>
        <h4>Легковые</h4>
        <h4>Внедорожники</h4>
        <h4>Минивены</h4>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={car} alt="" height={120} />
          </div>
          <div className={styles.itemInfo}>
            <h2 style={{ fontWeight: 400, fontSize: 34 }}>Toyota Corolla</h2>
            <div className={styles.details}>
              <div className={styles.paymentInfo}>
                <h1 style={{ fontWeight: 400 }}>50</h1>
                <h3>EUR/day</h3>
                <p>При аренде на 30 дней</p>
                <p>30 дней / 1200 EUR</p>
              </div>
              <div className={styles.desc}>
                <ul>
                  <li>Автоматич КПП</li>
                  <li>Багажник 500 л.</li>
                  <li>Кондиционер</li>
                  <li>5 мест</li>
                  <li>Парковочные датчики</li>
                </ul>
              </div>
            </div>
            <CustomButton variant="contained">Забронировать</CustomButton>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBlock}>
            <img src={car} alt="" height={120} />
          </div>
          <div className={styles.itemInfo}>
            <h2 style={{ fontWeight: 400, fontSize: 34 }}>Toyota Corolla</h2>
            <div className={styles.details}>
              <div className={styles.paymentInfo}>
                <h1 style={{ fontWeight: 400 }}>50</h1>
                <h3>EUR/day</h3>
                <p>При аренде на 30 дней</p>
                <p>30 дней / 1200 EUR</p>
              </div>
              <div className={styles.desc}>
                <ul>
                  <li>Автоматич КПП</li>
                  <li>Багажник 500 л.</li>
                  <li>Кондиционер</li>
                  <li>5 мест</li>
                  <li>Парковочные датчики</li>
                </ul>
              </div>
            </div>
            <CustomButton variant="contained">Забронировать</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
