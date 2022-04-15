import React, { useState } from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Search from './Search';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [aside, setAside] = useState(false);
  const navigate = useNavigate();

  const navigateMain = () => {
    navigate('/');
  };

  const asideToggle = () => {
    setAside(!aside);
  };
  return (
    <NavBox>
      <GoGloud onClick={navigateMain}>Go-Cloud</GoGloud>
      <Search />
      <Menu>
        <AsideMenu>
          <div>내 공간 등록하기</div>
          <div>
            <AiOutlineMenu onClick={asideToggle} />
          </div>
        </AsideMenu>
      </Menu>
      <Aside aside={aside} asideToggle={asideToggle} setAside={setAside} />
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
  cursor: pointer;
`;

const Menu = styled.div`
  width: 200px;
  position: absolute;
  left: 85%;
  ${({ theme }) => theme.flexMixIn('space-around', '')}
  font-size: 20px;
  cursor: pointer;
`;

const AsideMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  transform: translateX(-30px);
`;
