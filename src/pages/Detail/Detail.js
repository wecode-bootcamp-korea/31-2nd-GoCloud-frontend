import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Picker from './Picker';
import Scroll from './Scroll';
import Header from './Header';
import Head from './Aside/Head';
import CheckBox from './Aside/CheckBox';
import AsideImg from './Aside/AsideImg';
import ReservInfoList from './InfoList';
import { ICON_LIST } from './FORM_LIST';
import { API } from '../../config';
import useFetch from './hooks/useFetch';

import ListItem from './Slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Detail = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState([]);
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    fetch(`${API.detail}/${id}`)
      .then(res => res.json())
      .then(data => setDetailData(data.result));
  }, [id]);

  const bookingResult = useFetch(`${API.detail}/${id}`).result;

  const sendSubmitEvent = () => {
    fetch(`${API.list}/${id}/booking`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        start_time: selectedData[0],
        finish_time: selectedData[1],
        space_name: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('예약완료');
        } else if (result.message === 'DECODE_ERROR') {
          alert('로그인 해주세요!');
        }
      });
  };
  const handleCheckBox = () => {
    isCheck ? setTotalPrice(0) : setTotalPrice(bookingResult.price);
  };

  const toggleCheckbox = () => {
    setIsCheck(!isCheck);
    handleCheckBox();
  };

  const selectedDateFormat = date => {
    const YEAR = String(date.getFullYear()).padStart(2, '0');
    const MONTH = String(date.getMonth() + 1).padStart(2, '0');
    const DAY = String(date.getDate()).padStart(2, '0');

    const START = String(date.getHours()).padStart(2, '0');
    const END = String(date.getHours() + 1).padStart(2, '0');

    const startTime = `${YEAR}-${MONTH}-${DAY} ${START}:00`;
    const endTime = `${YEAR}-${MONTH}-${DAY} ${END}:00`;

    setSelectedData([startTime, endTime]);
  };

  const handleOnChange = date => {
    const fixedPrice = 2000;
    let newPrice = totalPrice + fixedPrice;
    setStartDate(date);
    selectedDateFormat(date);

    if (
      new Date().getHours() !== startDate &&
      totalPrice !== bookingResult.price + fixedPrice
    ) {
      return setTotalPrice(newPrice);
    }
  };

  return (
    <div>
      {bookingResult && (
        <Wrapper>
          <Header {...bookingResult} />
          <Main>
            <Center>
              <MainImgSection>
                <ListItem image={detailData.image} />
              </MainImgSection>

              <DetailPhrase>당신의 도약을 응원합니다.</DetailPhrase>
              <Scroll detail={bookingResult.detail} />
            </Center>

            <BoxRight>
              <Head />
              <ul>
                <li>
                  <CheckBox
                    price={bookingResult.price}
                    toggleCheckbox={toggleCheckbox}
                    roomName={bookingResult.room_name}
                  />
                  {isCheck && (
                    <ResponseColumn>
                      <ReservInfo>
                        <AsideImg />
                        <ReservInfoList {...bookingResult} />
                      </ReservInfo>

                      <RightIconList>
                        {ICON_LIST.map(({ id, icon, span }) => {
                          return (
                            <RightIconListItem key={id}>
                              {icon}
                              <RightIconSpan>{span}</RightIconSpan>
                            </RightIconListItem>
                          );
                        })}
                      </RightIconList>

                      <SelectWeater>날짜선택</SelectWeater>
                      <PickerStyle>
                        <Picker
                          startDate={startDate}
                          handleOnChange={handleOnChange}
                        />
                      </PickerStyle>

                      <SubTitleHeading>
                        공간사용료
                        <span>{` ₩${totalPrice}`}</span>
                      </SubTitleHeading>
                    </ResponseColumn>
                  )}
                </li>
              </ul>

              <SubmitBtn
                width="40%"
                color="#d9cdff"
                type="button"
                value="전화"
              />
              <SubmitBtn
                onClick={sendSubmitEvent}
                width="60%"
                color="#ffd014"
                type="submit"
                value="바로 예약하기"
              />
            </BoxRight>
          </Main>
        </Wrapper>
      )}
    </div>
  );
};

export default Detail;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const MainImgSection = styled.div`
  width: 770px;
  height: 450px;
`;

const Main = styled.main`
  display: flex;
`;

const BoxRight = styled.div`
  width: 330px;
`;

const ReservInfo = styled.ul`
  width: 100%;
  padding: 0px 5px;
`;

const ResponseColumn = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.purple};

  p {
    padding: 20px 10px;
    font-size: 15px;
    line-height: 20px;
  }
`;

const DetailPhrase = styled.div`
  margin-top: 150px;
  font-size: 30px;
`;
const RightIconList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
`;

const RightIconListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  width: calc(100% / 3);
  color: #949494;
`;

const RightIconSpan = styled.span`
  margin-left: 2px;
  font-size: 15px;
`;

const SelectWeater = styled.h3`
  width: 100%;
  padding: 20px 10px;
  color: ${({ theme }) => theme.purple};
  border-bottom: 3px solid ${({ theme }) => theme.purple};
  font-size: 20px;
  font-weight: 600;
  text-align: start;
`;

const SubTitleHeading = styled.h3`
  position: relative;
  width: 100%;
  padding: 20px 10px;
  color: ${({ theme }) => theme.purple};
  font-size: 20px;
  font-weight: 600;
  text-align: start;

  span {
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px 10px;
    color: ${({ theme }) => theme.purple};
  }
`;

const SubmitBtn = styled.input`
  width: ${({ width }) => width};
  height: 50px;
  background-color: #704de4;
  color: ${({ color }) => color};
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 19px;
  font-weight: 400;
  line-height: 50px;
  cursor: pointer;
`;

const Center = styled.div`
  margin: 0 4% 0 0;

  h3 {
    padding: 50px 100px 0 0;
    font-size: 48px;
    line-height: 60px;
  }
`;

const PickerStyle = styled.div`
  .react-datepicker {
    border: none;

    button {
      top: 10px;
      right: 10px;
    }

    .react-datepicker__month-container {
      width: 100%;

      .react-datepicker__header {
        border-bottom: 1px solid ${({ theme }) => theme.grey};
        background-color: #fff;

        .react-datepicker__current-month {
          padding: 10px 0;
          font-size: 15px;
          font-weight: 700;
        }
      }

      .react-datepicker__week,
      .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
      }

      .react-datepicker__day--selected {
        background-color: #5940ac;
        color: white;
      }
    }

    .react-datepicker__time-container {
      width: 100%;
      border-left: none;

      .react-datepicker__header {
        background-color: #fff;
        padding: 0;
      }

      .react-datepicker__time
        .react-datepicker__time-box
        ul.react-datepicker__time-list {
        height: auto !important;

        li.react-datepicker__time-list-item--selected {
          background-color: #5940ac;
          color: white;
          font-weight: bold;
        }
      }

      .react-datepicker__time-box {
        width: 300px;
        padding: 10px 0px;
      }

      .react-datepicker__time-list,
      .react-datepicker__time-box {
        display: flex;
      }
    }

    .react-datepicker__time-list-item,
    .react-datepicker__time-list-item--selected {
      height: auto !important;
      line-height: 30px;
    }

    .react-datepicker-time__header {
      color: ${({ theme }) => theme.purple};
      padding: 20px 10px;
      font-size: 20px;
      text-align: start;
    }

    .react-datepicker__header--time {
      border-bottom: 3px solid ${({ theme }) => theme.purple};
    }

    .react-datepicker__day--keyboard-selected {
      background-color: #5940ac;
    }
  }
`;
