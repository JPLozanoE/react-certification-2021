import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  color: #000000;
  border: 0px;
  border-bottom: 1px solid #cccccc;
  font-size: 16px;
  margin-bottom: 10px;
  height: 20px;
  width: 100%;

  transition: border-bottom 0.3s ease;

  &:focus {
    border-bottom: 1px solid #ffffff;
    outline: none;
  }
`;

export const SocialNetworksDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export const GoogleDiv = styled.div`
  cursor: pointer;
  margin-top: 5px;
  width: 100%;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);

  transition: box-shadow 0.3s ease;

  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #ffffff;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 20px 0 0;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0.2px;
  }
  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
`;
