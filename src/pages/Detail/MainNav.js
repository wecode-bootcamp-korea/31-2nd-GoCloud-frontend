import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const MainNav = () => {
  const [idCheck, setIdCheck] = useState('');

  const handleEventRead = id => {
    setIdCheck(id);
  };
  return (
    <Nav>
      <NavArea>
        {SCROLL_DATA.map(({ id, title }) => {
          return (
            <NavList key={id}>
              <Link
                check={idCheck}
                onClick={() => handleEventRead(id)}
                to={String(id)}
                spy={true}
                smooth={true}
                duration={300}
                className={
                  idCheck === id && 'active' ? `colorActive` : `colorNonActive`
                }
              >
                {title}
              </Link>
            </NavList>
          );
        })}
      </NavArea>
    </Nav>
  );
};

export default MainNav;

const Nav = styled.div`
  position: sticky;
  float: left;
  top: 0px;
  width: 770px;
  margin: 50px 0;
  z-index: 100;
`;

const NavArea = styled.ul`
  display: table;
  top: 20px;
  width: 100%;
  color: #656565;
  table-layout: fixed;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.purple};
`;

const NavList = styled.li`
  display: table-cell;
  position: relative;
  text-align: center;
  font-size: 16px;

  .colorActive {
    background-color: ${({ theme }) => theme.yellow};
    z-index: 99;
  }

  .colorNonActive {
    background-color: #fff;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0px;
    top: 10px;
    height: 20px;
    width: 0.7px;
    background-color: ${({ theme }) => theme.purple};
    text-align: center;
    vertical-align: middle;
    z-index: 99;
  }

  &:last-child {
    &:after {
      width: 0px;
    }
  }

  &::selection {
    background-color: #ffd014;
    color: #fff;
  }

  a {
    display: block;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
`;

const SCROLL_DATA = [
  { id: 1, title: '공간소개' },
  { id: 2, title: '유의사항' },
  { id: 3, title: '이용후기' },
];
