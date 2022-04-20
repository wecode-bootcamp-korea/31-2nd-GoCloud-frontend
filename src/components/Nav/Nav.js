import React, { useState } from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Search from './Search';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const [aside, setAside] = useState(true);
  const toggle = () => {
    setAside(!aside);
  };
  return (
    <NavBox>
      <GoGloud>Go-Cloud</GoGloud>
      <Search />
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

const Menu = styled.div`
  width: 200px;
  position: absolute;
  left: 80%;
  ${({ theme }) => theme.flexMixIn('space-around', '')}
  font-size: 20px;
`;
