import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ListItem = ({ image }) => {
  return (
    <ListBox>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {image.map((data, index) => (
          <SwiperSlide key={index}>
            <img alt="bgimg" src={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ListBox>
  );
};

export default ListItem;

const ListBox = styled.button`
padding:10px;
  width: 100%;
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
