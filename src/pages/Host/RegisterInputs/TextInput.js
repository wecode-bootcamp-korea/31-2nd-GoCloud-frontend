import React from 'react';
import styled from 'styled-components';

const TextInput = ({ title, placeholder, spaceInfoHandler, name }) => {
  return (
    <>
      <Title>{title}</Title>
      <Input
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={spaceInfoHandler}
      />
    </>
  );
};

export default TextInput;

const Title = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 17px;
`;

const Input = styled.input`
  width: 100%;
  margin: 15px 0;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.grey};
  font-size: 15px;

  ::placeholder {
    color: #c8c8c8;
  }
`;
