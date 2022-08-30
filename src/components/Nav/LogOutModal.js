import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogOut = ({ logOut, setLogOut, aside, setAside }) => {
  const navigate = useNavigate();

  const handlelogOut = () => {
    setLogOut(!logOut);
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    navigate('/');
    setAside(!aside);
  };

  const handlenologOut = () => {
    setLogOut(!logOut);
    setAside(!aside);
  };

  return (
    <LogOutBox>
      <LogOutModal>
        <LogoutLogo>로그아웃 하시겠습니까?</LogoutLogo>
        <YesNoBox>
          <YesBox onClick={handlelogOut}>예</YesBox>
          <NoBox onClick={handlenologOut}>아니오</NoBox>
        </YesNoBox>
      </LogOutModal>
    </LogOutBox>
  );
};

export default LogOut;

const LogOutBox = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  position: fixed;
  top: 45%;
  left: 50%;
  width: 350px;
  height: 200px;
  border: 1px solid #e9e9e9;
  border-radius: 3%;
  background-color: #fff;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 50%);
  /* transform: translate(-50%, -50%); */
`;

const LogOutModal = styled.div`
  margin: 30px;
`;

const LogoutLogo = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const YesNoBox = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const YesBox = styled.button`
  width: 90px;
  border: 1px solid #6d3afb;
  border-radius: 5px;
  background-color: #6d3afb;
  color: rgba(255, 208, 20, 0.85);
  margin-right: 50px;
  padding: 10px;
  cursor: pointer;
`;

const NoBox = styled.button`
  width: 90px;
  border: 1px solid rgba(255, 208, 20, 0.85);
  border-radius: 5px;
  background-color: rgba(255, 208, 20, 0.85);
  color: #6d3afb;
  padding: 10px;
  cursor: pointer;
`;
