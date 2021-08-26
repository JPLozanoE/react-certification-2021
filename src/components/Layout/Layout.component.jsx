import React from 'react';
import styled from 'styled-components';

import './Layout.styles.css';

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
