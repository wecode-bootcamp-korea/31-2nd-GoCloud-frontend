import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Host = () => {
  const navigate = useNavigate();

  const BtnHandler = () => {
    navigate('/registration');
  };

  return (
    <div>
      <HostWrap>
        <PhraseWrap>
          <Phrase>지금 MZ세대들을 위한</Phrase>
          <Phrase>공간비지니스를 시작해보세요!</Phrase>
          <ButtonWrap>
            <Button background={({ theme }) => theme.yellow}>
              입점 제안서
            </Button>
            <Button
              background={({ theme }) => theme.purple}
              onClick={BtnHandler}
            >
              공간 등록하기
            </Button>
          </ButtonWrap>
          <TextWrap>
            <TextTitle>|등록 가능 공간|</TextTitle>
            <Text>모임 · 촬영 · 스터디 ·연습 · 행사 · 공유오피스까지</Text>
          </TextWrap>
        </PhraseWrap>
        <IconsImage src="/images/아이콘모음.png" />
      </HostWrap>
    </div>
  );
};

export default Host;

const HostWrap = styled.div`
  display: flex;
`;

const PhraseWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 40px;
`;

const Phrase = styled.div`
  margin-bottom: 10px;
  font-size: 38px;
  font-weight: bold;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 50px 0;
`;

const Button = styled.button`
  margin: 5px;
  padding: 20px 55px;
  border: none;
  border-radius: 7px;
  background-color: ${({ background }) => background};
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const TextWrap = styled.div`
  display: flex;
`;

const TextTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Text = styled.span`
  margin-left: 5px;
  font-size: 20px;
`;

const IconsImage = styled.img`
  width: 450px;
  height: 450px;
  margin: 70px 0 0 50px;
`;
