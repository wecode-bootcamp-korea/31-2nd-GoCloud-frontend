import React from 'react';
import styled from 'styled-components';
import { MdOutlineIosShare } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

const Head = () => {
  return (
    <>
      <Heading>
        <Title>세부공간 선택</Title>
        <Icon>
          <Share />
          <Heart />
        </Icon>
      </Heading>
      <Info>
        호스트의 승인을 기다릴 필요 없이
        <br /> 지금 바로 예약하세요!
      </Info>
    </>
  );
};

export default Head;

const Heading = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  padding: 2px 0px 20px 0px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.purple};
  font-size: 24px;
  font-weight: 600;
`;

const Icon = styled.div`
  & svg {
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  padding: 25px 40px;
  border-top: 3px solid ${({ theme }) => theme.purple};
  text-align: center;
  line-height: 25px;
`;

const Share = styled(MdOutlineIosShare)`
  font-size: 24px;
`;

const Heart = styled(AiOutlineHeart)`
  margin-left: 20px;
  font-size: 24px;
`;
