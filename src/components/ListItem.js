import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '../styles/theme';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

const ListItem = ({ id, title, address, price, capacity, image }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <ListBox>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {image.map((data, idx) => (
          <SwiperSlide key={idx}>
            <ListImg src={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ListInfo onClick={goToDetail}>
        <ListTitle>{title}</ListTitle>
        <ListHashTag>
          <FaMapMarkerAlt />
          <ListAddress>{address}</ListAddress>
        </ListHashTag>
        <ListPriceHour>
          <ListPrice>{`${Number(price).toLocaleString('en')}`}</ListPrice>
          <ListPriceText>원/시간</ListPriceText>
          <LimitBox>
            <BsPersonFill />
            <ListLimit>최대 {capacity}</ListLimit>
          </LimitBox>
        </ListPriceHour>
      </ListInfo>
    </ListBox>
  );
};

export default ListItem;

const ListBox = styled.button`
padding:10px;
  width: 380px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;

  .swiper-button-next {
    color: white;
    opacity: 0;
  }

  .swiper-button-prev {
    color: white;
    opacity: 0;
  }
  &:hover {
    .swiper-button-next {
      background: linear-gradient(270deg, transparent, rgba(0,0,0,0.4))
      color: white;
      opacity: 1;
    }

    .swiper-button-prev {
      color: white;
      opacity: 1;
    }
  }
`;

const ListImg = styled.img`
  width: 100%;
  height: 200px;

  &:hover {
    filter: none;
    transform: scale(1.2);
  }
`;
const ListInfo = styled.div`
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #b5b5b5;
`;

const ListTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 25px;
`;

const ListHashTag = styled.div`
  margin-top: 10px;
  display: flex;
  color: #909190;
`;

const ListAddress = styled.div`
  font-weight: bold;
`;

const ListPriceHour = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #909190;
`;

const ListPrice = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: ${theme.purple};
`;

const ListPriceText = styled.span`
  font-size: 15px;
  margin-left: 5px;
`;

const LimitBox = styled.span`
  position: absolute;
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  // margin-left: 90px;
  right: 10px;
`;

const ListLimit = styled.div`
  font-size: 15px;
`;
