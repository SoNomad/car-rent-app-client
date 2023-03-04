import { Button, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import styles from './BookingConfirm.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';

const BookingConfirm = ({ setShow, car, location, fromDate, toDate }) => {
  //расчет длительности аренды по дням
  const fromDateFormat = moment(fromDate, 'DD-MM-YYYY'); // перевод в формат для расчета длительности
  const toDateFormat = moment(toDate, 'DD-MM-YYYY'); // перевод в формат для расчета длительности
  const totalDays = moment.duration(toDateFormat.diff(fromDateFormat)).asDays() + 1; //функция расчета
  const totalPayment = totalDays * car.payPerDay; //сумма за все дни

  const dispatch = useDispatch();

  //методы
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = async (value) => {
    // await dispatch(fetchBook(value));
    alert(value);
  };

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
                minLength: { value: 5, message: 'Минимум 6 символов' },
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
            ></TextField>

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
            ></TextField>

            {/* ИНПУТ ДЛЯ НОМЕРА */}
            <TextField
              label="Номер"
              type="tel"
              {...register('tel', {
                required: 'Укажите номер правильно',
                minLength: { value: 6, message: 'Минимум 6 цифр' },
                pattern: /0-9/i,
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
              label="Комментарий"
              multiline
              rows={4}
              variant="filled"
              margin="dense"
              color="warning"
              InputProps={{ className: styles.textfield__label }}
              focused
              fullWidth
            ></TextField>

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
