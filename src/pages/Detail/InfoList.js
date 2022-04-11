import React from 'react';
import styled from 'styled-components';

const InfoList = bookingResult => {
  const { category, max_capacity, address } = bookingResult;

  return (
    <>
      <List>
        <span>공간유형</span>
        {category}
      </List>
      <List>
        <span>공간주소</span>
        {address}
      </List>
      <List>
        <span>수용인원</span>
        {max_capacity}명
      </List>
      <List>
        <span>예약시간</span>
        최소 1시간부터
      </List>
    </>
  );
};

export default InfoList;

const List = styled.li`
  border-top: 1px solid ${({ theme }) => theme.grey};
  padding: 10px 15px 10px 0px;
  font-size: 15px;

  &:last-child {
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grey};
  }

  span {
    margin-right: 20px;
    color: #656565;

    &:before {
      content: '•';
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }
`;
