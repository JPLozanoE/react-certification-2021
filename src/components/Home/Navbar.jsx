import React from 'react';
import styled from 'styled-components';
import { SearchBar } from './SearchBar';

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
  float: left;
  display: block;
  color: #212121;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

export const Navbar = ({ setSearch, setSelectedVideo }) => {
  return (
    <Bar className="topnav" id="myTopnav">
      <Links href="#home" className="active">
        Toggle
      </Links>
      <SearchBar setSelectedVideo={setSelectedVideo} setSearch={setSearch} />
      <Links href="#about">Perfil</Links>
    </Bar>
  );
};
