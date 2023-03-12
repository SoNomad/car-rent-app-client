import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import { Button } from '@mui/material';

import BookingConfirm from '../BookingConfirm/BookingConfirm';
import axios from '../../app/axios';
import { useDispatch } from 'react-redux';
import { checkReserved } from '../../app/slices/bookingSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Products = ({ placeHolder, fromDate, toDate }) => {
  //стилизация кнопки MUI

  const dispatch = useDispatch();
  const [show, setShow] = useState(false); //стэйт для показа окна заказа
  const [data, setData] = useState(); // список машин с базы
  const [isLoading, setLoading] = useState(true); // для лоадера
  const [carId, setCarId] = useState(''); //для передачи айди в кнопку брони

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  //фетч списка авто
  useEffect(() => {
    axios
      .get(`/car?page=${page}`)
      .then((res) => {
        console.log(res);
        setData(res.data.cars);
        setPageCount(res.data.pageCount);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  //хэндлер для отправки конкретного авто в окно заказа и открытия окна
  const handleBooking = (carById) => {
    const params = { _carId: carById._id, fromDate, toDate };
    dispatch(checkReserved(params));
    setShow(!show);
    setCarId(carById);
  };

  //лоадер
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //категории
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* открытие кона заказа и передача в него информации о датах и адресе */}
        {show && (
          <BookingConfirm
            setShow={setShow}
            car={carId}
            fromDate={fromDate}
            toDate={toDate}
            location={placeHolder}
          />
        )}
        {/* маппинг списка полученных авто */}
        <div className={styles.itemContainer}>
          {data.map((car) => (
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
                    <ul>
                      <li>Автоматич КПП</li>
                      <li>{car.engine}</li>
                      <li>Кондиционер</li>
                      <li>{car.seats}</li>
                      <li>Парковочные датчики</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Button
                    variant="contained"
                    disabled={fromDate && placeHolder !== 'Место получения' ? false : true}
                    onClick={() => handleBooking(car)}
                  >
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </Stack>
    </div>
  );
};

export default Products;
