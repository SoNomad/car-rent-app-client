import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const BookingForm = () => {
  return (
    <div>
      <RangePicker size="large" />
      <button>submit</button>
    </div>
  );
};

export default BookingForm;
