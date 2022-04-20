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
    const queryString = `?${searchInput}`;
    navigate(`/list${queryString}`);
  };

  return (
    <SearchBox onSubmit={onSubmit}>
      <SearchIcon>
        <GoSearch />
      </SearchIcon>
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
  right: 20%;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 2%;
  bottom: 16%;
  width: 25px;
  height: 25px;
  font-size: 25px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 100px;
  margin-right: 162px;
  padding-left: 50px;
`;
