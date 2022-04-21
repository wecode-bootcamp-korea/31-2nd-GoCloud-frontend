import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterButton from './ListComponents/FilterButton';
import styled from 'styled-components';
import { BiMapAlt, BiSliderAlt } from 'react-icons/bi';
import { Checkbox } from '@mui/material';
import DropDown from './ListComponents/DropDown';
import { PopperUnstyled } from '@mui/base';
import Popup from './ListComponents/Popup';
import ListItem from '../../components/ListItem';
import { API } from '../../config';

const List = () => {
  const location = useLocation();
  const decodeLocation = decodeURI(location.search);

  const [anchorEl, setAnchorEl] = useState(null);
  const [listData, setListData] = useState([]);
  const [dateQuery, setDateQuery] = useState('');
  const [priceQuery, setPriceQuery] = useState('');
  const [capacityQuery, setCapacityQuery] = useState('');

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const categoryQuery = `${decodeLocation}`;
  const query = `${categoryQuery}${priceQuery}${dateQuery}${capacityQuery}`;
  console.log(listData);

  useEffect(() => {
    fetch(`${API.list}${query}`)
      .then(res => res.json())
      .then(data => setListData(data.result));
  }, [priceQuery, query, dateQuery]);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const sortHandler = value => {
    if (value === '가격 낮은 순') {
      setPriceQuery('&order=asc_price');
    } else if (value === '가격 높은 순') {
      setPriceQuery('&order=desc_price');
    } else if (value === '베스트 공간 순') {
      setPriceQuery('');
    }
  };

  const dateQueryHandler = value => {
    setDateQuery(value);
  };

  const capacityQueryHandler = value => {
    setCapacityQuery(value);
  };

  return (
    <>
      <ButtonWrap>
        <FilterButton name="지역" />
        <FilterButton
          name="인원"
          capacityQueryHandler={capacityQueryHandler}
          query={query}
        />
        <FilterButton
          name="날짜"
          dateQueryHandler={dateQueryHandler}
          query={query}
        />
        <SubButtonWrap>
          <SubButton onClick={handleClick}>
            <BiSliderAlt />
            필터
          </SubButton>
          <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
            <Popup name="필터" />
          </PopperUnstyled>
          <SubButton>
            <BiMapAlt />
            지도
          </SubButton>
        </SubButtonWrap>
      </ButtonWrap>
      <SpaceContainer>
        <SortingWrap>
          <SortDiscount>
            <Checkbox {...label} disabled checked />
            할인쿠폰 드리는 공간
          </SortDiscount>
          <DropDown sortHandler={sortHandler} query={query} />
        </SortingWrap>
      </SpaceContainer>
      <ListContainer>
        {listData.map(
          ({ id, room_name, address, price, max_capacity, image }, index) => (
            <ListItem
              id={id}
              key={index}
              room_name={room_name}
              address={address}
              price={price}
              capacity={max_capacity}
              image={image}
            />
          )
        )}
      </ListContainer>
    </>
  );
};

export default List;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 35px;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const SubButtonWrap = styled.span`
  margin-left: 30px;
`;
const SubButton = styled.button`
  width: 100px;
  margin: 0px 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  border-radius: 25px;
  padding: 10px;
  background-color: white;
  color: ${({ theme }) => theme.purple};
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    filter: grayscale(15%);
    background-color: ${({ theme }) => theme.lightgrey};
  }
`;

const SpaceContainer = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.lightgrey};
`;

const SortingWrap = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between')};
  border-bottom: 2px solid #656565;
  padding: 20px 0;
`;

const SortDiscount = styled.span`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
`;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ListContainer = styled.div`
  ${({ theme }) => theme.flexMixIn('space-around')}
  flex-wrap: wrap;
  margin-top: 30px;
  width: 1150px;
`;
