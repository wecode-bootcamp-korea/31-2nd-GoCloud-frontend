import React from 'react';
import styled from 'styled-components';
import CategoryBtn from './CategoryBtn';
import CATEGORY_DATA from './CATEGORY_DATA';

const Category = ({ spaceCategoryHandler, category }) => {
  return (
    <div>
      <CategoryWrap>
        {CATEGORY_DATA.map(({ id, title, list }) => (
          <CategoryContainer key={id}>
            <CategoryTitle>{title}</CategoryTitle>
            <Arrow>▶</Arrow>
            {list.map(({ id, spaceType }) => (
              <CategoryBtn
                key={id}
                spaceType={spaceType}
                spaceCategoryHandler={spaceCategoryHandler}
                isSelect={category.includes(spaceType)}
              />
            ))}
          </CategoryContainer>
        ))}
      </CategoryWrap>
    </div>
  );
};

export default Category;

const CategoryWrap = styled.div`
  margin: 30px 0;
`;

const CategoryContainer = styled.ul`
  display: flex;
  margin: 25px 0;
  text-align: center;
`;

const CategoryTitle = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  width: 130px;
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey};
  color: #8e8e8e;
`;

const Arrow = styled.span`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  margin-right: 30px;
  color: ${({ theme }) => theme.grey};
  font-size: 13px;
  transform: translateX(-4px);
`;
