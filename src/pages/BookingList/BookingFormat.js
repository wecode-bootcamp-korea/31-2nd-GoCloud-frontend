import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const BookingFormat = ({ children }) => {
  const { tag, content, date, price } = children;

  return (
    <ReservCard to="/">
      <Img />
      <Right>
        <Tags>{tag}</Tags>
        <Content>{content}</Content>

        <Date>{date}</Date>
        <Price>{price}</Price>
      </Right>
      <RightArrow />
    </ReservCard>
  );
};

export default BookingFormat;

const ReservCard = styled(Link)`
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
