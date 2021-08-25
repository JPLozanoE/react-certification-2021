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
  DivDarkMode,
  DivSwitch,
} from './styles/NavBar';

export const Navbar = ({ setSelectedVideo }) => {
  const {
    state: {
      darkTheme,
      auth: { isLogged },
    },
    dispatch,
  } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: types.setSelectedVideo, payload: null });
  };

  const handleLogout = () => {
    dispatch({ type: types.logout });
  };

  const handleToggleChange = () => {
    dispatch({
      type: types.toggleTheme,
    });
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <Links onClick={handleClick} to="/">
        Inicio
      </Links>
      {/* <Links href="#" className="active" /> */}
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
          {isLogged ? (
            <>
              <Links onClick={handleLogout} to="/">
                Logout
              </Links>
              <Links to="/favorites">Favorites</Links>
            </>
          ) : (
            <Links to="/auth">Login</Links>
          )}
        </DivSwitch>
      </DivDarkMode>
    </Bar>
  );
};
