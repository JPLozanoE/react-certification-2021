import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px;
  height: 94vh;
  max-height: 100%;
  width: 100%;
`;

export const BoxContainer = styled.div`
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0px 3px #cccccc;
  border-radius: 2px;
  padding: 20px;
  width: 250px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b6b6b;

  &:hover {
    text-decoration: underline;
  }
`;
