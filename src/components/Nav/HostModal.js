import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const HostModal = ({ hostToggle, host, setHost, aside, setAside }) => {
  const [phoneNumberData, setPhoneNumberData] = useState('');
  const navigate = useNavigate();

  const hostRegister = () => {
    fetch(`${API.hostconvert}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        phone_number: phoneNumberData,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'DECODE_ERROR') {
          alert('로그인을 해야 호스트 등록이 가능합니다');
          setHost(!host);
          setAside(!aside);
        } else if (res.message === 'ALREADY_EXISTS') {
          alert('호스트 등록 완료');
          navigate('/host');
          setHost(!host);
          setAside(!aside);
        }
      });
  };

  const handleInput = e => {
    const { value } = e.target;
    setPhoneNumberData(value);
  };

  return (
    <Box>
      <HostModalBox>
        <CloseBox onClick={hostToggle}>
          <AiOutlineCloseCircle />
        </CloseBox>
        <HostModalLogo>Go-Cloud</HostModalLogo>
        <PhoneNumerBox>
          <PhoneNumber>호스트 권한을 받을려면</PhoneNumber>
          <PhoneNumber>핸드폰 번호를 입력하세요</PhoneNumber>
          <PhoneNumnerInput
            type="text"
            placeholder="핸드폰 번호를 입력하세요"
            onChange={handleInput}
          />
          <PhoneNumberWrap>
            <PhoneNumberButton onClick={hostRegister}>
              권한 받기
            </PhoneNumberButton>
          </PhoneNumberWrap>
        </PhoneNumerBox>
      </HostModalBox>
    </Box>
  );
};

export default HostModal;

const Box = styled.main`
  width: 100%;
  height: 100%;
`;

const HostModalBox = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 350px;
  padding: 25px;
  border: 1px solid #e9e9e9;
  border-radius: 10%;
  background-color: #fff;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 50%);
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

const CloseBox = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
  font-size: 30px;
`;

const HostModalLogo = styled.head`
  position: relative;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const PhoneNumerBox = styled.ul`
  position: relative;
  margin-top: 40px;
`;

const PhoneNumber = styled.li`
  display: block;
  text-align: center;
  font-size: 20px;
`;

const PhoneNumnerInput = styled.input`
  margin: 20px 20px 0;
  width: calc(100% - 40px);
  height: 30px;
  -webkit-appearance: none;
`;

const PhoneNumberWrap = styled.div`
  text-align: center;
`;

const PhoneNumberButton = styled.button`
  margin-top: 40px;
  width: 80px;
  height: 30px;
  border: none;
  background-color: #222;
  color: #fff;
  -webkit-appearance: none;
`;
