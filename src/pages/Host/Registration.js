import React from 'react';
import styled from 'styled-components';
import TextInput from './RegisterInputs/TextInput';
import Category from './RegisterInputs/Category';

const Registration = () => {
  return (
    <RegistrationWrap>
      <Heading>공간 정보를 입력해주세요.</Heading>
      <TextInput
        title="공간명"
        placeholder="고유 업체명을 입력해주세요. (예시) 인디워커스 하이브 회의실"
      />
      <Title>공간 유형</Title>
      <Category />
      <Title>공간 소개</Title>
      <TextArea placeholder="게스트들에게 필요한 공간 정보를 상세하게 소개해주세요. 툴팁을 클릭해 작성 가이드를 확인할 수 있습니다." />
      <Title>이미지</Title>
      <ImageInput
        type="file"
        id="RegisterImage"
        name="RegisterImage"
        accept=".png, .jpeg, .jpg"
        multiple
      />
      <ImageInputWrap>
        <ImageContainer>
          이미지 파일을 추가해 주세요. (JPG, JPEG, PNG)
        </ImageContainer>
        <ImageLabel htmlFor="RegisterImage">파일첨부</ImageLabel>
      </ImageInputWrap>
      <ButtonWrap>
        <Button background="#4D4D4D">이전</Button>
        <Button background="#FF3A48">저장</Button>
      </ButtonWrap>
    </RegistrationWrap>
  );
};

export default Registration;

const RegistrationWrap = styled.div`
  padding: 50px 50px;
  background-color: ${({ theme }) => theme.lightgrey};
`;

const Heading = styled.div`
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 5px solid ${({ theme }) => theme.purple};
  font-size: 25px;
`;

const Title = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 17px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 15px 0;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.grey};
  font-size: 15px;

  ::placeholder {
    color: #c8c8c8;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageInputWrap = styled.div`
  display: flex;
`;

const ImageLabel = styled.label`
  display: block;
  height: 60px;
  margin: 16px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.purple};
  color: white;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 85%;
  height: 150px;
  margin: 15px 0;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.grey};
  background-color: white;
  color: #c8c8c8;
  font-size: 15px;
`;

const ButtonWrap = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between')}
`;

const Button = styled.button`
  padding: 15px 265px;
  border: none;
  border-radius: 3px;
  background-color: ${({ background }) => background};
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
