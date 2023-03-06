import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { brown } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import BookingConfirm from '../BookingConfirm/BookingConfirm';
import axios from '../../app/axios';
import { useDispatch } from 'react-redux';
import { checkReserved } from '../../app/slices/bookingSlice';

const Products = ({ placeHolder, fromDate, toDate }) => {
  //стилизация кнопки MUI
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  const dispatch = useDispatch();
  const [show, setShow] = useState(false); //стэйт для показа окна заказа
  const [data, setData] = useState(); // для даты с календаря
  const [isLoading, setLoading] = useState(true); // для лоадера
  const [carId, setCarId] = useState(''); //для передачи айди в кнопку брони

  //фетч списка авто
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

  //хэндлер для отправки конкретного авто в окно заказа и открытия окна
  const handleBooking = async (carById) => {
    const params = { _carId: carById._id, fromDate, toDate };
    await dispatch(checkReserved(params));
    setShow(!show);
    setCarId(carById);
  };

  //лоадер
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //категории
  return (
    <div className={styles.wrapper}>
      <div className={styles.catPanel}>
        <h4>Легковые</h4>
        <h4>Внедорожники</h4>
        <h4>Минивены</h4>
      </div>

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
              <div>
                <ColorButton
                  variant="contained"
                  disabled={fromDate && placeHolder !== 'Место получения' ? false : true}
                  onClick={() => handleBooking(car)}
                >
                  Забронировать
                </ColorButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
