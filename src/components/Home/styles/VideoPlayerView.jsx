import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 16px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemPlayerView = styled.div`
  padding: 8px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.titles.color};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.subtitles.color};
`;

export const Videoiframe = styled.iframe`
  height: 700px;
  @media only screen and (max-width: 1200px) {
    height: 300px;
  }
`;
