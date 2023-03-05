import { Button, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BookingConfirm.module.scss';
import { useForm } from 'react-hook-form';
import { createBooking } from '../../app/slices/bookingSlice';

const BookingConfirm = ({ setShow, car, location, fromDate, toDate }) => {
  //расчет длительности аренды по дням
  const fromDateFormat = moment(fromDate, 'DD-MM-YYYY'); // перевод в формат для расчета длительности
  const toDateFormat = moment(toDate, 'DD-MM-YYYY'); // перевод в формат для расчета длительности
  const totalDays = moment.duration(toDateFormat.diff(fromDateFormat)).asDays() + 1; //функция расчета
  const totalPayment = totalDays * car.payPerDay; //сумма за все дни

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  //методы react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  //запрос на создание записи об аренде
  const onSubmit = async (value) => {
    const fields = {
      ...value,
      _carId: car._id,
      location,
      fromDate,
      toDate,
      totalDays,
      totalPayment,
    };
    await dispatch(createBooking(fields));

    if (error !== '') {
      return alert(error);
    }

    if (!isLoading || error === '') {
      setShow(false);
      alert('Машина забронирована');
    }
  };

  //верстка
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={car.imageUrl} alt="" height={150} />
        <Typography variant="h4" sx={{ fontWeight: 200 }}>
          {car.name}
        </Typography>

        {/* информация о заказе */}
        <div className={styles.forms}>
          <Typography> Дата начала: {fromDate}</Typography>
          <Typography> Дата конца: {toDate}</Typography>
          <Typography> Доставка: {location}</Typography>
          <Typography sx={{ fontWeight: 200, fontSize: 58 }}>
            {car.payPerDay} <span>RUB/day</span>{' '}
          </Typography>
          <Typography sx={{ fontWeight: 200 }}>
            Итого за {totalDays} дней: <b>{totalPayment}</b> RUB
          </Typography>

          {/* форма для заполнения контактных данных */}
          <form onSubmit={handleSubmit(onSubmit)} className={styles.fields}>
            <h3>Контактные данные</h3>

            {/* ИНПУТ ДЛЯ ФИО */}
            <TextField
              {...register('name', {
                required: 'Укажите ФИО',
                pattern: {
                  value: /^([A-Za-zА-Яа-яЁё\s]+)$/i,
                  message: 'ФИО должно содержать только буквы',
                },
                minLength: { value: 5, message: 'Минимум 4 символа' },
              })}
              error={!!errors.name}
              helperText={errors?.name ? errors?.name?.message : null}
              label="ФИО"
              variant="filled"
              margin="dense"
              color="warning"
              InputProps={{ className: styles.textfield__label }}
              focused
              fullWidth
            />

            {/* ИНПУТ ДЛЯ ИМЕЙЛА */}
            <TextField
              label="E-mail"
              type="email"
              // ФУНКЦИЯ ВАЛИДАЦИИ И ВЫВОДА ОШИБКИ
              {...register('email', {
                required: 'Укажите email',
              })}
              error={!!errors.email}
              helperText={errors?.email ? errors?.email?.message : null}
              //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
              variant="filled"
              margin="dense"
              color="warning"
              InputProps={{ className: styles.textfield__label }}
              focused
              fullWidth
            />

            {/* ИНПУТ ДЛЯ НОМЕРА */}
            <TextField
              label="Номер"
              type="tel"
              {...register('tel', {
                required: 'Укажите номер правильно',
                minLength: { value: 6, message: 'Минимум 6 цифр' },
                pattern: {
                  value: /^\d+$/,
                  message: 'Введите корректный формат номера',
                },
              })}
              error={!!errors.tel}
              helperText={errors?.tel ? errors?.tel?.message : null}
              variant="filled"
              margin="dense"
              color="warning"
              InputProps={{ className: styles.textfield__label }}
              focused
              fullWidth
            />

            {/* ИНПУТ ДЛЯ КОММЕНТА */}
            <TextField
              id="filled-multiline-static"
              {...register('coment', {
                required: 'Укажите coment',
              })}
              label="Комментарий"
              multiline
              rows={4}
              variant="filled"
              margin="dense"
              color="warning"
              InputProps={{ className: styles.textfield__label }}
              focused
              fullWidth
            />

            <Button
              // disabled={isLoading}
              sx={{ mt: 2 }}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Применить
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.background} onClick={() => setShow(false)}></div>
    </div>
  );
};

export default BookingConfirm;
