import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.main.backgroundColor};


}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  background-color: gray;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 12px;
  padding: 7px 10px 7px 10px;

  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #eae9e9;
  }

  /* &:hover {
    color: darken($color: white, $amount: 15);
  } */
`;

export const FullWidthContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;
