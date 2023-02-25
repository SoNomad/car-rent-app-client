import styles from './Booking.module.scss';
import { DatePicker } from 'antd';
import Location from './GetLocation';
import moment from 'moment';
import CustomButton from '../CustomButton';

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

      <CustomButton variant="contained">Применить</CustomButton>
    </div>
  );
};

export default BookingForm;
