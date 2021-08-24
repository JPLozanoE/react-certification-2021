import React, { useContext } from 'react';
import { useHistory } from 'react-router';
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
  DivDarkMode,
  DivSwitch,
} from './styles/NavBar';

export const Navbar = ({ setSelectedVideo }) => {
  const history = useHistory();
  const {
    state: { darkTheme },
    dispatch,
  } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: types.setSelectedVideo, payload: null });
    history.push('/');
  };

  const handleToggleChange = () => {
    dispatch({
      type: types.toggleTheme,
    });
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <Links onClick={handleClick} href="#" className="active">
        Inicio
      </Links>
      <SearchBar setSelectedVideo={setSelectedVideo} />
      <DivDarkMode>
        <Text href="#about">Oscuro</Text>
        <DivSwitch>
          <CheckBoxWrapper>
            <CheckBox
              defaultChecked={darkTheme}
              id="checkbox"
              type="checkbox"
              onChange={handleToggleChange}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </DivSwitch>
      </DivDarkMode>
    </Bar>
  );
};
