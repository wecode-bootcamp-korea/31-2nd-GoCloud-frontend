import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Review = ({ id, image, space_name, content, price, space }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`detail/${space.space_id}`);
  };
  return (
    <ReviewBox onClick={goToDetail}>
      <ReviewImg src={image} />
      <ReviewInfo>
        <ReviewTitle>{space_name}</ReviewTitle>
        <ReviewPriceBox>
          <ReviewPrice>{`${Number(price).toLocaleString('en')}`}</ReviewPrice>
          <ReviewText>원/시간</ReviewText>
        </ReviewPriceBox>
        <ReviewComment>{content}</ReviewComment>
      </ReviewInfo>
    </ReviewBox>
  );
};

export default Review;

const ReviewBox = styled.button`
  padding: 10px;
  width: 360px;
  background: inherit;
  border-style: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 200px;
`;

const ReviewInfo = styled.div`
  padding: 15px;
  width: 100%;
  border-left: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
`;

const ReviewTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 25px;
`;

const ReviewPriceBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const ReviewPrice = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: ${theme.purple};
`;

const ReviewText = styled.span`
  margin-left: 5px;
  font-size: 15px;
  color: #909190;
`;

const ReviewComment = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.71;
  text-align: left;
  color: gray;
`;
