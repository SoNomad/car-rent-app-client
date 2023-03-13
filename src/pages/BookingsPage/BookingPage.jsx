import React, { useEffect } from 'react';
import styles from './BookingPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, fetchBooks } from '../../app/slices/bookingSlice';
import { Button, Skeleton, Typography } from '@mui/material';

const BookingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookings);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div style={{ height: '80vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Skeleton width="80%" height="120%" />
      </div>
    );
  }

  const onClickRemove = (id) => {
    if (window.confirm('Удалить запись?')) {
      return dispatch(deleteBooking(id));
    }
  };

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div className={styles.item} key={book._id}>
          <div style={{ display: 'contents', marginLeft: '40px' }}>{/* Удаление */}</div>
          <div className={styles.image}>
            <div className={styles.titleButton}>
              <Typography variant="h2">{book._carId.name}</Typography>
            </div>
            <img src={book._carId.imageUrl} alt="" height={190} />
          </div>
          <div className={styles.infoSection}>
            <table>
              <tr>
                <th>ФИО:</th>
                <td>{book.name}</td>
              </tr>
              <tr>
                <th>E-mail:</th>
                <td>{book.email}</td>
              </tr>
              <tr>
                <th>Номер телефона:</th>
                <td>{book.tel}</td>
              </tr>
              <tr>
                <th>Дата начала аренды:</th>
                <td>{book.fromDate}</td>
              </tr>
              <tr>
                <th>Дата конца аренды:</th>
                <td>{book.toDate}</td>
              </tr>
              <tr>
                <th>Количество дней:</th>
                <td>{book.totalDays}</td>
              </tr>
              <tr>
                <th>Стоимость за 1 день:</th>
                <td>{book._carId.payPerDay} rub</td>
              </tr>
              <tr>
                <th>Суммарно за {book.totalDays} дня:</th>
                <td>{book.totalPayment} rub</td>
              </tr>
              <Button onClick={() => onClickRemove(book._id)} color="primary" size="large">
                Удалить запись
              </Button>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingPage;
