import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import BookingConfirm from '../BookingConfirm/BookingConfirm';
import axios from '../../app/axios';
import { useDispatch } from 'react-redux';
import { checkReserved } from '../../app/slices/bookingSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductModule from './ProductModule';
import SkeletonProduct from './SkeletonProduct';

const Products = ({ placeHolder, fromDate, toDate, active, page, setPage }) => {
  //стилизация кнопки MUI

  const dispatch = useDispatch();
  const [show, setShow] = useState(false); //стэйт для показа окна заказа
  const [data, setData] = useState(); // список машин с базы
  const [isLoading, setLoading] = useState(true); // для лоадера
  const [carId, setCarId] = useState(''); //для передачи айди в кнопку брони
  const [pageCount, setPageCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  //фетч списка авто
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/vehicle/${active}?page=${page}`)
      .then((res) => {
        setData(res.data.transport);
        setPageCount(res.data.pageCount);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [page, active]);

  //хэндлер для отправки конкретного авто в окно заказа и открытия окна
  const handleBooking = (carById) => {
    const params = { _carId: carById._id, fromDate, toDate };
    dispatch(checkReserved(params));
    setShow(!show);
    setCarId(carById);
  };

  //лоадер
  if (isLoading) {
    return <SkeletonProduct styles={styles} />;
  }

  //категории
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* открытие кона заказа и передача в него информации о датах и адресе */}
        {show && (
          <BookingConfirm
            type={active}
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
            <ProductModule
              car={car}
              styles={styles}
              fromDate={fromDate}
              handleBooking={handleBooking}
              placeHolder={placeHolder}
            />
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
