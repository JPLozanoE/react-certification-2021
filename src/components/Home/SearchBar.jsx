import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

const Bar = styled.div`
  width: 30vw;
  background-color: #333;
  overflow: hidden;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: black;
  border: 1px solid gray;
  color: white;
  font-size: 16px;
  padding: 4px;
`;

const SearchButton = styled.button`
  cursor: pointer;
  width: 65px;
  border: 1px solid hsl(0, 0%, 18.82%);
  background-color: hsla(0, 0%, 100%, 0.08);
  border-radius: 0 2px 2px 0;
  margin: 0;
  height: 30px;
  font-size: 16px;
`;

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: types.setSelectedVideo,
      payload: null,
    });
    dispatch({
      type: types.changeSearchQuery,
      payload: input,
    });
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <SearchInput value={input} onChange={handleChange} placeholder="Buscar" />
      <SearchButton onClick={handleClick} name="buscar">
        buscar
      </SearchButton>
    </Bar>
  );
};
