import React from 'react';
import styled from 'styled-components';

const UploadImage = ({ spaceImageHandler, spaceInfo }) => {
  const onLoadImage = e => {
    spaceImageHandler(e.target.files[0]);
  };

  return (
    <div>
      <ImageInput
        id="RegisterImage"
        type="file"
        accept=".png, .jpeg, .jpg"
        multiple
        onChange={onLoadImage}
      />
      <ImageInputWrap>
        <ImageContainer>
          {spaceInfo.filename[0] ? (
            spaceInfo.filename.map(data => (
              <ImagePreview key={data.name} src={URL.createObjectURL(data)} />
            ))
          ) : (
            <ContainerText>
              이미지 파일을 추가해 주세요. (JPG, JPEG, PNG)
            </ContainerText>
          )}
        </ImageContainer>
        <ImageLabel htmlFor="RegisterImage">파일첨부</ImageLabel>
      </ImageInputWrap>
    </div>
  );
};

export default UploadImage;

const ImageInput = styled.input`
  display: none;
`;

const ImageInputWrap = styled.div`
  display: flex;
`;

const ImageLabel = styled.label`
  display: block;
  width: 150px;
  height: 60px;
  margin: 16px;
  padding: 20px;
  background-color: ${({ theme }) => theme.purple};
  text-align: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 85%;
  height: 150px;
  margin: 15px 0;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.grey};
  background-color: white;
`;

const ImagePreview = styled.img`
  width: auto;
  height: 100%;
`;

const ContainerText = styled.div`
  font-size: 15px;
  color: #c8c8c8;
`;
