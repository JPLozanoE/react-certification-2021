import styled from 'styled-components';

export const VideoBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px;
`;

export const DescriptionBox = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.titles.color};
`;
