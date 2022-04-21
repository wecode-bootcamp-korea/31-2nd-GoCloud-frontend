import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import BookingFormat from './BookingFormat';
import { API } from '../../config';

const BookingList = () => {
  const [bookingDate, setBookingDate] = useState('');
  useEffect(() => {
    fetch(`${API.booking_list}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => setBookingDate(data.result));
  }, []);

  return (
    <Wrapper>
      <Heading>예약 내역 리스트</Heading>
      <ReservList>
        {bookingDate[0] &&
          bookingDate.map(({ id, space_id, space, price, start_time }) => {
            return (
              <BookingFormat
                key={id}
                space_id={space_id}
                space={space}
                price={price}
                start_time={start_time}
              />
            );
          })}
      </ReservList>
    </Wrapper>
  );
};

export default BookingList;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Heading = styled.h2`
  padding: 120px 0px 20px 0px;
  font-size: 34px;
  font-weight: 800;
  text-align: center;
`;

const ReservList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 35px 100px;
`;
