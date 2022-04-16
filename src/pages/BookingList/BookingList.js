import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BookingFormat from './BookingFormat';

const BookingList = () => {
  const [bookingDate, setBookingDate] = useState('');

  useEffect(() => {
    axios.get('/data/bookingList.json').then(result => {
      setBookingDate(result.data);
    });
  }, []);

  return (
    <Wrapper>
      <Heading>예약 내역 리스트</Heading>
      <ReservList>
        {bookingDate &&
          bookingDate.map(item => {
            return <BookingFormat key={item.id}>{item}</BookingFormat>;
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
