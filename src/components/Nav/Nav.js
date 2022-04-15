import React, { useState } from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';

const Nav = () => {
  const [aside, setAside] = useState(true);
  const toggle = () => {
    setAside(!aside);
  };
  return (
    <NavBox>
      <GoGloud>Go-Cloud</GoGloud>
      <Search>
        <SearchIcon>
          <GoSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="지역, 공간유형, 공간명으로 찾아보세여"
        />
      </Search>
      <Menu>
        <div>내 공간 등록하기</div>
        <div>
          <AiOutlineMenu onClick={toggle} />
        </div>
      </Menu>
      <Aside aside={aside} toggle={toggle} />
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.div`
  width: 1200px;
  ${({ theme }) => theme.flexMixIn('space-around', 'center')}
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -52px;
`;

const GoGloud = styled.div`
  position: relative;
  right: 2%;
  text-align: left;
  font-size: 35px;
  font-weight: bold;
`;

const Search = styled.form`
  position: relative;
  right: 20%;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 2%;
  bottom: 16%;
  width: 25px;
  height: 25px;
  font-size: 25px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 100px;
  margin-right: 162px;
  padding-left: 50px;
`;

const Menu = styled.div`
  width: 200px;
  position: absolute;
  left: 80%;
  ${({ theme }) => theme.flexMixIn('space-around', '')}
  font-size: 20px;
`;
