import React from 'react';
import styled from 'styled-components';

const Service = () => {
  return (
    <ServiceModal>
      <SerViceList>서비스 소개</SerViceList>
      <SerViceList>이용약관</SerViceList>
      <SerViceList>개인정보처리방침</SerViceList>
      <SerViceList>운영정책</SerViceList>
    </ServiceModal>
  );
};

export default Service;

const ServiceModal = styled.ul`
  background-color: #f6f6f6;
`;

const SerViceList = styled.li`
  ${({ theme }) => theme.flexMixIn('', 'center')}
  height: 20px;
  padding: 16px 25px;
  border: 1px solid #ebebeb;
  font-size: 12px;
  color: #656565;
`;
