import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #5965e0;
    color: #fff;
    text-align: center;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;

    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #5965e0 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
