import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 30vw;
  padding: 0px 16px;
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
  color: gray;
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
  return (
    <Bar className="topnav" id="myTopnav">
      <SearchInput placeholder="Buscar" />
      <SearchButton name="buscar">buscar</SearchButton>
      {/* <button type="button" href="#" className="icon" onClick="myFunction()">
        <i className="fa fa-bars" />
      </button> */}
    </Bar>
  );
};
