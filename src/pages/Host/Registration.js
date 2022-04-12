import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from './RegisterInputs/TextInput';
import Category from './RegisterInputs/Category';
import UploadImage from './RegisterInputs/UploadImage';

const Registration = () => {
  const navigate = useNavigate();
  const [spaceInfo, setSpaceInfo] = useState({
    title: '',
    sub_title: '',
    category: [],
    description: '',
    price: '',
    max_capacity: '',
    filename: [],
    address: '',
  });

  const uploadSpace = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', spaceInfo.title);
    formData.append('sub_title', spaceInfo.sub_title);
    formData.append('detail', spaceInfo.description);
    formData.append('max_capacity', spaceInfo.max_capacity);
    formData.append('address', spaceInfo.address);
    formData.append('price', spaceInfo.price);
    formData.append('category_id', 1);
    for (let i = 0; i < spaceInfo.filename.length; i++) {
      formData.append('filename', spaceInfo.filename[i]);
    }

    fetch('http://13.125.241.114:8000/spaces', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(alert('등록이 완료 되었습니다.'))
      .then(navigate('/'));
  };

  const spaceInfoHandler = e => {
    const { name, value } = e.target;
    setSpaceInfo(data => ({ ...data, [name]: value }));
  };

  const spaceCategoryHandler = input => {
    const isSelect = spaceInfo.category.includes(input);
    let newCategory = [];
    if (isSelect) {
      newCategory = spaceInfo.category.filter(data => data !== input);
    } else {
      newCategory = spaceInfo.category.concat(input);
    }
    setSpaceInfo({ ...spaceInfo, category: newCategory });
  };

  const spaceImageHandler = input => {
    let imageInput = spaceInfo.filename;
    imageInput.push(input);
    setSpaceInfo(data => ({ ...data, filename: imageInput }));
  };

  const goToHost = () => {
    navigate('/host');
  };

  return (
    <div>
      <RegistrationWrap>
        <Heading>공간 정보를 입력해주세요.</Heading>
        <TextInput
          title="업체명"
          name="title"
          placeholder="고유 업체명을 입력해주세요. (예시) 인디워커스 하이브 회의실"
          spaceInfoHandler={spaceInfoHandler}
        />
        <TextInput
          title="공간명"
          name="sub_title"
          placeholder="사용 가능한 공간명을 입력해주세요. (예시) Room A"
          spaceInfoHandler={spaceInfoHandler}
        />
        <Title>공간 유형</Title>
        <Category
          spaceCategoryHandler={spaceCategoryHandler}
          category={spaceInfo.category}
        />
        <TextInput
          title="최대 인원 수"
          name="max_capacity"
          placeholder="최대 가용 인원 수를 입력해주세요. (예시) 5"
          spaceInfoHandler={spaceInfoHandler}
        />
        <Title>공간 소개</Title>
        <TextArea
          name="description"
          placeholder="게스트들에게 필요한 공간 정보를 상세하게 소개해주세요. 툴팁을 클릭해 작성 가이드를 확인할 수 있습니다."
          onChange={spaceInfoHandler}
        />
        <TextInput
          title="가격"
          name="price"
          placeholder="시간당 가격을 적어주세요. (예시) 5000"
          spaceInfoHandler={spaceInfoHandler}
        />
        <Title>이미지</Title>
        <UploadImage
          spaceImageHandler={spaceImageHandler}
          spaceInfo={spaceInfo}
        />
        <TextInput
          title="주소"
          name="address"
          placeholder="실제 서비스를 제공하는 주소를 입력해주세요."
          spaceInfoHandler={spaceInfoHandler}
        />
        <ButtonWrap>
          <Button background="#4D4D4D" onClick={goToHost}>
            이전
          </Button>
          <Button background="#FF3A48" onClick={uploadSpace}>
            저장
          </Button>
        </ButtonWrap>
      </RegistrationWrap>
    </div>
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
