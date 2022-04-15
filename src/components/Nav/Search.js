import React, { useState } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const [searchInput, setSeachInput] = useState('');

  const handleInput = e => {
    setSeachInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const queryString = `?category=${searchInput}`;
    navigate(`/spaces${queryString}`);
  };

  return (
    <SearchBox onSubmit={onSubmit}>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="지역, 공간유형, 공간명으로 찾아보세여"
        onChange={handleInput}
      />
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.form`
  position: relative;
  right: 15%;
`;

const SearchIcon = styled(GoSearch)`
  position: absolute;
  left: 2%;
  bottom: 24%;
  width: 25px;
  height: 25px;
  font-size: 25px;
`;

const SearchInput = styled.input`
  width: 400px;
  border-radius: 100px;
  margin-right: 162px;
  padding: 15px 40px;
`;
