import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../../components/ListItem';
import Review from './Review';
import { API } from '../../config';
import ICON_DATA from './Icon';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate, useLocation } from 'react-router-dom';

const Main = () => {
  const [listData, setListData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [limit, setLimit] = useState(6);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API.list}${location.search || `?limit=${limit}&offset=0`}`)
      .then(res => res.json())
      .then(data => setListData(data.result));
  }, [limit, location.search]);

  useEffect(() => {
    fetch(`${API.reviews}`)
      .then(res => res.json())
      .then(res => setReviewData(res.result));
  }, []);

  const goToList = name => {
    navigate(`spaces?category=${name}`);
  };

  const updateList = () => {
    setLimit(limit + 6);
  };

  return (
    <MainWrapper>
      <MainTitle>어떤 공간을 찾고 있나요?</MainTitle>
      <IconWrapper>
        {ICON_DATA.map(({ id, icon, name }) => (
          <IconBox key={id}>
            <IconBtn onClick={() => goToList(name)}>
              <IconImg>{icon}</IconImg>
            </IconBtn>
            {name}
          </IconBox>
        ))}
      </IconWrapper>
      <SwiperWrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {IMGS.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <SwiperImg src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
      <PlanningWrapper>
        <PlanningTitle>기획전</PlanningTitle>
        <PlanningText>지금 딱 내가 찾는 공간!</PlanningText>
        <PlanningBox>
          {PLANNING_IMG.map(({ id, img }) => (
            <PlanningImgBox key={id}>
              <PlanningImg src={img} />
            </PlanningImgBox>
          ))}
        </PlanningBox>
      </PlanningWrapper>
      <PlaceWrapper>
        <PlaceTitle>요즘 뜨는 핫플레이스</PlaceTitle>
        <PlaceText>인기만점 찜!콩!</PlaceText>
        <ListWrapper>
          {listData.map(
            ({ id, room_name, address, price, max_capacity, image }) => (
              <ListItem
                id={id}
                key={id}
                room_name={room_name}
                address={address}
                price={price}
                capacity={max_capacity}
                image={image}
              />
            )
          )}
          <ListButton onClick={updateList}>더보기</ListButton>
        </ListWrapper>
      </PlaceWrapper>
      <ReviewWrapper>
        <ReviewTitle>리뷰 ZONE</ReviewTitle>
        <ReviewText>이용자들의 생생한 후기를 만나보세요!</ReviewText>
        <ReviewBoxWrapper>
          {reviewData &&
            reviewData.map(({ id, image, space, content }) => (
              <Review
                key={id}
                image={image}
                space={space}
                space_name={space.space_name}
                price={space.price}
                content={content}
              />
            ))}
        </ReviewBoxWrapper>
      </ReviewWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
  padding: 0 150px;
`;

const MainTitle = styled.h1`
  margin-top: 70px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
`;

const IconWrapper = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')};
  flex-wrap: wrap;
  margin-top: 70px;
  width: 1150px;
`;

const IconBox = styled.span`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
  margin-top: 30px;
  width: 130px;
  text-align: center;
  font-size: 20px;
`;

const IconBtn = styled.button`
  margin-bottom: 15px;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  border-style: none;
  cursor: pointer;
`;

const IconImg = styled.div`
  padding-top: 20px;
  font-size: 50px;
  color: ${({ theme }) => theme.purple};
`;

const SwiperWrapper = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  margin-top : 70px;
  width: 1150px;
  height: 200px;
  overflow: hidden;
  border-radius: 25px;

  .swiper-button-next {
    color: white;
  }

  .swiper-button-prev {
    color: white;
  }
`;

const SwiperImg = styled.img`
  width: 100%;
  height: 200px;
`;

const PlanningWrapper = styled.div`
  width: 1150px;
`;

const PlanningTitle = styled.div`
  margin-top: 70px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const PlanningText = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const PlanningBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 100%;
`;

const PlanningImgBox = styled.span`
  width: 50%;
  height: 200px;
  overflow: hidden;
`;

const PlanningImg = styled.img`
  padding: 10px;
`;

const PlaceWrapper = styled.div`
  width: 1150px;
`;

const PlaceTitle = styled.div`
  margin-top: 70px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const PlaceText = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  width: 1150px;
`;

const ListButton = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 80px;
  border: 1px solid #b5b5b5;
  background-color: white;
  font-size: 18px;
  cursor: pointer;
`;

const ReviewWrapper = styled.div`
  width: 1150px;
`;

const ReviewTitle = styled.div`
  margin-top: 70px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const ReviewText = styled.div`
  margin: 15px 0;
  width: 1150px;
  text-align: center;
`;

const ReviewBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IMGS = [
  { id: 1, img: '/images/main/보라색.png' },
  { id: 2, img: '/images/main/노란책 2.jpg' },
];

const PLANNING_IMG = [
  { id: 1, img: '/images/main/회의.jpg' },
  { id: 2, img: '/images/main/공부.jpg' },
  { id: 3, img: '/images/main/공부1.jpg' },
  { id: 4, img: '/images/main/빵.jpg' },
];
