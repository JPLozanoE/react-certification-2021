import React, { useContext } from 'react';
import { SearchBar } from './SearchBar';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import {
  Bar,
  Links,
  CheckBoxWrapper,
  Text,
  CheckBoxLabel,
  CheckBox,
} from './styles/NavBar';

export const Navbar = ({ setSelectedVideo }) => {
  const {
    state: { darkTheme },
    dispatch,
  } = useContext(AppContext);

  const handleToggleChange = () => {
    dispatch({
      type: types.toggleTheme,
    });
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <Links href="#home" className="active">
        Inicio
      </Links>
      <SearchBar setSelectedVideo={setSelectedVideo} />
      <div style={{ display: 'flex' }}>
        <div>
          <Text href="#about">Oscuro</Text>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <CheckBoxWrapper>
            <CheckBox
              defaultChecked={darkTheme}
              id="checkbox"
              type="checkbox"
              onChange={handleToggleChange}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </div>
      </div>
    </Bar>
  );
};
