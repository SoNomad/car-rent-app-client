import styles from './Booking.module.scss';
import { Button } from '@mui/material';
import { DatePicker } from 'antd';
import Location from './GetLocation';
import moment from 'moment';

const BookingForm = () => {
  const { RangePicker } = DatePicker;

  const filterByDate = (dates) => {
    if (dates !== null) {
      console.log(moment(dates[0].$d).format('DD-MM-YYYY'));
      console.log(moment(dates[1].$d).format('DD-MM-YYYY'));
    }
  };

  return (
    <div className={styles.wrapper}>
      <RangePicker size="large" format="DD-MM-YYYY" onChange={filterByDate} />
      <div className={styles.location}>
        <Location />
      </div>

      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default BookingForm;
