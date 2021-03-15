import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 80px;

  h1 {
    color: #2e384d;
    font-size: 2.5rem;
    font-weight: 600;
  }

  form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    max-width: 500px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Address = styled.section`
  margin-top: 60px;
  background: #fff;
  border-radius: 6px;
  padding: 24px;
`;

export const AddressInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    color: #2e384d;
    margin-bottom: 40px;
  }

  div {
    strong {
      color: #2e384d;
    }

    p {
      margin-top: 4px;
      font-size: 0.9rem;
    }
  }

  div + div {
    margin-top: 12px;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 240px;
  }

  p {
    margin-top: 32px;
    font-weight: 600;
    color: #2e384d;
  }
`;
