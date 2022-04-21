import React, { useState } from 'react';
import styled from 'styled-components';
import { PopperUnstyled } from '@mui/base';
import Popup from './Popup';

const FilterButton = ({
  name,
  dateQueryHandler,
  capacityQueryHandler,
  query,
}) => {
  const [borderColor, setBorderColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setBorderColor(!borderColor);
  };

  return (
    <>
      <Button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        borderColor={borderColor}
      >
        <ButtonTitle>{name}</ButtonTitle>
        <DownArrow src="/images/downarrow.png" />
      </Button>
      <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
        <Popup
          name={name}
          dateQueryHandler={dateQueryHandler}
          capacityQueryHandler={capacityQueryHandler}
          handleClick={handleClick}
          query={query}
        />
      </PopperUnstyled>
    </>
  );
};

export default FilterButton;

const Button = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')};
  width: 270px;
  margin: 15px;
  padding: 13px;
  border: 1px solid
    ${({ borderColor, theme }) => (borderColor ? theme.purple : theme.grey)};
  border-radius: 5px;
  color: #656565;
  cursor: pointer;
`;

const ButtonTitle = styled.span`
  font-size: 17px;
`;

const DownArrow = styled.img`
  width: 17px;
  height: 10px;
`;
