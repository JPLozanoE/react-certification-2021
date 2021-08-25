import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { Bar, SearchButton, SearchInput } from './styles/SearchBar';

export const SearchBar = () => {
  const history = useHistory();
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
    history.push('/');
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
