import React from 'react';
import styled from 'styled-components';

const CheckBox = ({ toggleCheckbox, roomName, price }) => {
  return (
    <CheckBoxSection>
      <div>
        <input type="checkbox" onChange={toggleCheckbox} />
        <label>{roomName}</label>
      </div>
      <Price fontSize="20px">
        ₩{price}
        <Text>/ 시간</Text>
      </Price>
    </CheckBoxSection>
  );
};

export default CheckBox;

const CheckBoxSection = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  padding: 10px 5px;
  font-size: 18px;

  label {
    margin-left: 10px;
  }
`;

const Price = styled.h3`
  color: ${({ theme }) => theme.purple};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
`;

const Text = styled.span`
  margin-left: 5px;
  color: #949494;
  vertical-align: middle;
  font-size: 12px;
`;
