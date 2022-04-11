import React from 'react';
import styled from 'styled-components';

const AsideImg = () => {
  return (
    <>
      <SubMainImg src="/images/1.png" />
      <p>
        35평형 단독홀로 다른 공간의 방해 없이 편하게 연습 하실 수 있습니다 :)
      </p>
    </>
  );
};

export default AsideImg;

const SubMainImg = styled.img`
  padding: 10px;
`;
