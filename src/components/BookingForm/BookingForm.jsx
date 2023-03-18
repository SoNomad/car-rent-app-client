import styles from './Booking.module.scss';
import { DatePicker } from 'antd';
import Location from './GetLocation';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setDate } from '../../app/slices/bookingSlice';
// import CustomButton from '../CustomButton';

const BookingForm = () => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();

  const filterByDate = (dates) => {
    if (dates !== null) {
      const fromDate = moment(dates[0].$d).format('DD-MM-YYYY');
      const toDate = moment(dates[1].$d).format('DD-MM-YYYY');

      const datesRange = { fromDate, toDate };
      dispatch(setDate(datesRange));
    }
  };

  return (
    <div className={styles.wrapper}>
      <RangePicker size="large" format="DD-MM-YYYY" onChange={filterByDate} />
      <div className={styles.location}>
        <Location />
      </div>
    </div>
  );
};

export default BookingForm;
