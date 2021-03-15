import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #F2F3F5;
  max-width: 700px;
  margin: 0 auto;
  padding: 24px;
}

body, input, button {
  font: 16px 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
`;
