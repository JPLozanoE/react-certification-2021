import styled from 'styled-components';

export const VideoContainer = styled.div`
  margin: 10px;
  cursor: pointer;
`;
export const VideoTitle = styled.h3`
  color: ${(props) => props.theme.titles.color};
`;

export const VideoText = styled.p`
  color: ${(props) => props.theme.subtitles.color};
`;
