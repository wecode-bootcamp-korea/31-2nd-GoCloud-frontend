import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Service from './AsideService';
import HostModal from './HostModal';
import SERVICE_LIST from './AsdieThirdBox';
import { AiOutlineArrowRight, AiFillGithub } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { BsFillJournalBookmarkFill, BsHouse } from 'react-icons/bs';

const Aside = ({ aside, toggle }) => {
  const token = localStorage.getItem('access_token');
  const [service, setService] = useState(false);
  const [host, setHost] = useState(false);

  const serviceToggle = () => {
    setService(!service);
  };

  const hostToggle = () => {
    setHost(!host);
  };

  const logOut = () => {
    localStorage.clear();
    navigate('/main');
  };

  const navigate = useNavigate();

  const hostNavigate = () => {
    navigate('/host');
  };

  const login = () => {
    navigate('/login');
  };

  return (
    <AsideBox aside={aside}>
      <AsideBoxfirst>
        <GuestBox>
          {token ? (
            <div>
              <LoginSignIn>노영완님!!!</LoginSignIn>
              <LoginSignIn>환영합니다!!!</LoginSignIn>
            </div>
          ) : (
            <div>
              <LoginSignIn onClick={login}>로그인</LoginSignIn>
              <LoginSignIn>회원가입</LoginSignIn>
            </div>
          )}
          <CloseBox>
            <AiOutlineArrowRight onClick={toggle} />
          </CloseBox>
        </GuestBox>
        <HostBox onClick={hostToggle}>
          <Host>호스트로</Host>
          <Host>등록하기</Host>
        </HostBox>
        {host && <HostModal hostToggle={hostToggle} />}
      </AsideBoxfirst>
      <ScrollWrapper>
        <AisdeBoxSecond>
          <SecondBoxReservation>
            <BsFillJournalBookmarkFill />
            <Reservation>예약 리스트</Reservation>
          </SecondBoxReservation>
          <SecondBoxQA>
            <AiFillGithub />
            <QA>이용후기</QA>
            <QA>Q&A관리</QA>
          </SecondBoxQA>
          <SecondBoxSpace>
            <BsHouse />
            <Space>찜한 공간</Space>
          </SecondBoxSpace>
        </AisdeBoxSecond>
        <MonthBox>이 달의 기획전</MonthBox>
        <AisdeBoxThrid>
          {SERVICE_LIST.map(({ title, id }) => (
            <ThridBox key={id}>
              {title}
              <ThridBoxArrow>
                <IoIosArrowForward />
              </ThridBoxArrow>
            </ThridBox>
          ))}
          <ThirdBoxService>
            서비스 정보
            <ThridBoxArrow>
              <IoIosArrowDown onClick={serviceToggle} />
            </ThridBoxArrow>
          </ThirdBoxService>
          {service && <Service />}
        </AisdeBoxThrid>
        <LoginBox>
          {token ? (
            <GuestLoginBox onClick={logOut}>로그아웃</GuestLoginBox>
          ) : (
            <GuestLoginBox onClick={login}>로그인</GuestLoginBox>
          )}
          <GuestLoginBox>Powerd by C Go-Cloud</GuestLoginBox>
        </LoginBox>
      </ScrollWrapper>
      <HostLoginBox onClick={hostNavigate}>호스트 센터로 이동</HostLoginBox>
    </AsideBox>
  );
};
export default Aside;

const AsideBox = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.aside ? '-100%' : 0)};
  transition: 0.9s ease-in-out;
  bottom: 0;
  display: block;
  width: 28%;
  height: 100%;
  z-index: 10000000;
  background: #f6f6f6;
`;

const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 230px);
`;
const AsideBoxfirst = styled.div`
  position: relative;
  height: 170px;
`;

const GuestBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  left: 50%;
  text-align: center;
  background-color: rgba(255, 208, 20, 0.85);
`;

const HostBox = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  top: -100%;
  right: 0%;
  text-align: center;
  background-color: #6d3afb;
`;

const CloseBox = styled.div`
  position: absolute;
  top: 0%;
  left: 78%;
  font-size: 40px;
`;

const AisdeBoxSecond = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  font-size: 40px;
  height: 20%auto;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
`;

const SecondBoxReservation = styled.div`
  width: 30%;
  margin-left: 5px;
  border-right: 1px solid #ebebeb;
`;

const Reservation = styled.div`
  font-size: 10px;
`;

const SecondBoxQA = styled.div`
  width: 40%;
  margin-top: 5px;
`;

const QA = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-size: 10px;
`;

const SecondBoxSpace = styled.div`
  width: 30%;
  margin-right: 5px;
  border-left: 1px solid #ebebeb;
`;

const Space = styled.div`
  font-size: 10px;
`;

const MonthBox = styled.div`
  ${({ theme }) => theme.flexMixIn('', 'center')}
  height: 12%;
  padding-left: 15px;
  font-size: 15px;
  color: #fff;
  background-color: #6d3afb;
`;

const AisdeBoxThrid = styled.div`
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-top: 15px;
`;

const ThridBox = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  height: 40px;
  margin-left: 20px;
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
`;

const ThridBoxArrow = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

const ThirdBoxService = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  height: 40px;
  margin-left: 20px;
  font-size: 14px;
`;
const LoginBox = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  flex-direction: column;
  height: 18.5%;
`;

const GuestLoginBox = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: #949494;
  cursor: pointer;
`;

const HostLoginBox = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')}
  height: 60px;
  text-align: center;
  background-color: #6d3afb;
  color: #ffd014;
  cursor: pointer;
`;

const LoginSignIn = styled.div`
  position: relative;
  top: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #6d3afb;
  cursor: pointer;
`;

const Host = styled.div`
  position: relative;
  top: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #ffd014;
  cursor: pointer;
`;
