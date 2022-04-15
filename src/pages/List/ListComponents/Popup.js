import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from './Calendar';
import PriceSlider from './PriceSlider';

const Popup = ({
  name,
  dateQueryHandler,
  capacityQueryHandler,
  handleClick,
  query,
}) => {
  const navigate = useNavigate();
  const [capacity, setCapacity] = useState(1);
  const [date, setDate] = useState('');

  const countUp = () => {
    let value = capacity;
    setCapacity(value + 1);
  };

  const countDown = () => {
    let value = capacity;
    capacity > 1 && setCapacity(value - 1);
  };

  return (
    <PopupContainer>
      {name === '인원' && (
        <>
          <CountContainer>
            인원
            <ChangeCountBox>
              <CountButton onClick={countDown}>-</CountButton>
              <CountValue>{capacity}</CountValue>
              <CountButton onClick={countUp}>+</CountButton>
            </ChangeCountBox>
          </CountContainer>
          <ApplyButtonWrap>
            <ResetButton
              onClick={() => {
                capacityQueryHandler('');
                handleClick();
              }}
            >
              초기화
            </ResetButton>
            <ApplyButton
              onClick={() => {
                capacityQueryHandler(`&capacity=${capacity}`);
                handleClick();
              }}
            >
              인원수 적용하기
            </ApplyButton>
          </ApplyButtonWrap>
        </>
      )}
      {name === '날짜' && (
        <PopupWrap>
          <Calendar setDate={setDate} />
          <ApplyButtonWrap>
            <ResetButton
              onClick={() => {
                dateQueryHandler('');
                handleClick();
              }}
            >
              초기화
            </ResetButton>
            <ApplyButton
              onClick={() => {
                dateQueryHandler(`&date=${date}`);
                handleClick();
              }}
            >
              날짜 적용하기
            </ApplyButton>
          </ApplyButtonWrap>
        </PopupWrap>
      )}
      {name === '필터' && (
        <PopupWrap>
          <PriceSliderWrap>
            가격
            <PriceSlider />
          </PriceSliderWrap>
          <ApplyButtonWrap>
            <ResetButton>초기화</ResetButton>
            <ApplyButton>가격 적용하기</ApplyButton>
          </ApplyButtonWrap>
        </PopupWrap>
      )}
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 7px;
  background-color: white;
`;

const CountContainer = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')};
  padding: 30px;
`;
const ChangeCountBox = styled.div`
  // ${({ theme }) => theme.flexMixIn('space-between', 'center')};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 7px;
`;

const CountButton = styled.button`
  width: 30px;
  margin: 5px;
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

const CountValue = styled.div`
  border-left: 1px solid ${({ theme }) => theme.grey};
  border-right: 1px solid ${({ theme }) => theme.grey};
  padding: 10px 15px;
`;

const PopupWrap = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
`;

const PriceSliderWrap = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
  margin: 30px;
`;

const ApplyButtonWrap = styled.div`
  display: flex;
`;

const ResetButton = styled.button`
  padding: 15px 40px;
  border: none;
  background-color: ${({ theme }) => theme.yellow};
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const ApplyButton = styled.button`
  padding: 15px 40px;
  border: none;
  background-color: ${({ theme }) => theme.purple};
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
