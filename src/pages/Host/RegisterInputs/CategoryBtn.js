import React from 'react';
import styled from 'styled-components';

const CategoryBtn = ({ spaceType, spaceCategoryHandler, isSelect }) => {
  return (
    <div>
      <Button
        key={spaceType}
        onClick={() => {
          spaceCategoryHandler(spaceType);
        }}
        isSelect={isSelect}
      >
        {spaceType}
      </Button>
    </div>
  );
};

export default CategoryBtn;

const Button = styled.li`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  width: 108px;
  height: 30px;
  margin-right: 30px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme, isSelect }) =>
    isSelect ? theme.yellow : theme.grey};
  color: #8e8e8e;
  cursor: pointer;
`;
