// import React, { useRef } from 'react';
import React from 'react';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
// import './Home.styles.css';
import { Navbar } from '../../components/Home/Navbar';
import { FullWidthContainer } from '../../__globalStyles';
import { VideoGrid } from '../../components/Home/VideoGrid';

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  // event.preventDefault();
  // logout();
  // history.push('/');
  // }

  return (
    <>
      <FullWidthContainer>
        <Navbar />
        <VideoGrid />
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
