import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

const Bar = styled.div`
  padding: 0px 16px;
  background-color: #202020;
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
    flex-direction: column;
  }
`;

const Links = styled.a`
  color: white;
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

const Text = styled.p`
  color: white;
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

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
