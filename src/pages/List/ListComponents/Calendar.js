import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ setDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  const dateHandler = date => {
    setStartDate(date);
    selectedDateFormat(date);
  };

  const selectedDateFormat = date => {
    const YEAR = String(date.getFullYear()).padStart(2, '0');
    const MONTH = String(date.getMonth() + 1).padStart(2, '0');
    const DAY = String(date.getDate()).padStart(2, '0');

    const bookingDate = `${YEAR}-${MONTH}-${DAY}`;
    setDate(bookingDate);
    return bookingDate;
  };

  return (
    <PickerStyle>
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        locale={ko}
        inline
        onChange={dateHandler}
      />
    </PickerStyle>
  );
};

export default Calendar;

const PickerStyle = styled.div`
  .react-datepicker {
    border: none;

    button {
      top: 10px;
      right: 10px;
    }

    .react-datepicker__month-container {
      width: 100%;

      .react-datepicker__header {
        border-bottom: 1px solid ${props => props.theme.grey};
        background-color: #fff;

        .react-datepicker__current-month {
          padding: 10px 0;
          font-size: 15px;
          font-weight: 700;
        }
      }

      .react-datepicker__week,
      .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
      }

      .react-datepicker__day--selected {
        background-color: ${({ theme }) => theme.yellow};
        color: white;
      }

      .react-datepicker__day--keyboard-selected {
        background-color: #5940ac;
      }
    }
  }
`;
