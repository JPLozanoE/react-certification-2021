import React from 'react';
import styled from 'styled-components';

import './Layout.styles.css';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.main.backgroundColor};
`;

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
