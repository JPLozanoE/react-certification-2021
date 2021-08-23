import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
