import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const ProductModule = ({ car, styles, handleBooking }) => {
  const fromDate = useSelector((state) => state.fromDate);
  const place = useSelector((state) => state.place);

  return (
    <div className={styles.item} key={car._id}>
      <div className={styles.imageBlock}>
        <img src={car.imageUrl} alt="" height={160} />
      </div>
      <div className={styles.itemInfo}>
        <h2 style={{ fontWeight: 400, fontSize: 34 }}>{car.name}</h2>
        <div className={styles.details}>
          <div className={styles.paymentInfo}>
            <h1 style={{ fontWeight: 400 }}>{car.payPerDay}</h1>
            <h3>RUB/day</h3>
            <p>При аренде на 30 дней</p>
            <p>30 дней / {car.payPerDay * 30} RUB</p>
          </div>
          <div className={styles.desc}>
            {car.seats && (
              <ul>
                <li>Автоматич КПП</li>
                <li>Кондиционер</li>
                <li>Парковочные датчики</li>
                <li>{car.seats}</li>
              </ul>
            )}
            <ul>
              <li>{car.engine}</li>
            </ul>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            disabled={fromDate && place !== 'Место получения' ? false : true}
            onClick={() => handleBooking(car)}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductModule;
