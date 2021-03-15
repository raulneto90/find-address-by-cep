import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  height: 60px;
  margin-top: 8px;
  border: none;
  border-radius: 6px;
  background: #5965e0;
  font-weight: 600;
  color: #fff;

  transition: background 0.2s;

  &:hover {
    background: #4953b8;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 180px;
    border-radius: 0 6px 6px 0;
  }
`;
