import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Picker = ({ startDate, handleOnChange }) => {
  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={handleOnChange}
      minDate={new Date()}
      locale={ko}
      showTimeSelect
      timeIntervals={60}
      timeCaption="시간선택"
      filterTime={filterPassedTime}
      inline
    />
  );
};

export default Picker;
