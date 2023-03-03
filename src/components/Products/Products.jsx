import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import CustomButton from '../CustomButton';
import BookingConfirm from '../BookingConfirm/BookingConfirm';
import axios from '../../app/axios';

const Products = ({ getLocation, fromDate, toDate }) => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/car')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBooking = () => {
    setShow(!show);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.catPanel}>
        <h4>Легковые</h4>
        <h4>Внедорожники</h4>
        <h4>Минивены</h4>
      </div>

      {show && (
        <BookingConfirm
          setShow={setShow}
          getLocation={getLocation}
          fromDate={fromDate}
          toDate={toDate}
        />
      )}

      <div className={styles.itemContainer}>
        {data.map((car) => (
          <div className={styles.item}>
            <div className={styles.imageBlock}>
              <img src={car.imageUrl} alt="" height={120} />
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
                  <ul>
                    <li>Автоматич КПП</li>
                    <li>{car.engine}</li>
                    <li>Кондиционер</li>
                    <li>{car.seats}</li>
                    <li>Парковочные датчики</li>
                  </ul>
                </div>
              </div>
              <div onClick={() => handleBooking()}>
                <CustomButton variant="contained">Забронировать</CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
