import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface InputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  height: 60px;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 6px;

  display: flex;
  align-items: center;

  > svg {
    height: 20px;
    margin-left: 8px;
    color: #2e384d;
  }

  input {
    border: none;
    margin: 0 16px;
    flex: 1;

    &::placeholder {
      color: #2e384d;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #e83f5b;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #5965e0;
    `}


  @media (min-width: 768px) {
    border-radius: 6px 0 0 6px;
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
  align-items: center;

  span {
    background: #e83f5b;

    &::before {
      border-color: #e83f5b transparent;
    }
  }
`;
