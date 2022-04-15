import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const BookingFormat = ({ space, price, start_time, space_id }) => {
  const navigate = useNavigate();

  const start = start_time;
  const dateFormat = date => {
    const YEAR = date.slice(0, 4);
    const MONTH = date.slice(5, 7);
    const DAY = date.slice(8, 10);
    const HOUR = date.slice(11, 13);
    const HOURPLUS = Number(date.slice(11, 13)) + 1;

    const DATE = `${YEAR}-${MONTH}-${DAY} ${HOUR}:00 ~ ${HOURPLUS}:00`;

    return DATE;
  };
  const goToDetail = () => {
    navigate(`/detail/${space_id}`);
  };
  return (
    <ReservCard onClick={goToDetail}>
      <Img />
      <Right>
        <Tags>예약완료</Tags>
        <Content>{`${space}`}</Content>

        <Date>{`${dateFormat(start)}`}</Date>
        <Price>{`${Number(price).toLocaleString('en')}원`}</Price>
      </Right>
      <RightArrow />
    </ReservCard>
  );
};

export default BookingFormat;

const ReservCard = styled.div`
  display: flex;
  position: relative;
  width: calc(100% / 2 - 10px);
  padding: 20px;
  margin: 5px;
  color: black;
  box-shadow: none;
  border: 1px solid #ebebeb;
  text-decoration: none;
  cursor: pointer;
`;

const Tags = styled.span`
  display: inline-block;
  height: 23px;
  padding: 3px 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.purple};
  border: none;
  color: #fff;
  border-radius: 15px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
`;

const Content = styled.h3`
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 800;
`;

const Date = styled.p`
  color: '#656565';
`;

const Price = styled.p`
  margin-top: 12px;
`;

const Img = styled.div`
  width: 105px;
  height: 105px;
  background: url(/images/logo.jpg) no-repeat 50%;
  background-size: cover;
`;

const Right = styled.div`
  margin-bottom: 10px;
  width: calc(100% - 105px);
  padding: 0px 35px 0px 20px;
`;

const RightArrow = styled(FaAngleRight)`
  position: absolute;
  right: 0px;
  bottom: calc(130px / 2);
  color: rgba(0, 0, 0, 0.3);
  font-size: 22px;
`;
