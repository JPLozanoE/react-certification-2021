import React, { useContext, useState } from 'react';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { Bar, SearchButton, SearchInput } from './styles/SearchBar';

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
    setInput('');
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
