import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :focus {
    outline: none;
  }

  button {
    cursor: pointer;
  };

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.2;
    background-color: ${({ theme }) => theme.bodyBgColor};
    color: ${({ theme }) => theme.bodyColor};
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    font-weight: 600;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  .mr-10 {
    margin-right: 10px !important;
  }

  .mb-15 {
    margin-bottom: 15px !important;
  }

  .mb-20 {
    margin-bottom: 20px !important;
  }

  .mb-40 {
    margin-bottom: 40px !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .link {
    color: ${({ theme }) => theme.colors.primary.base};
    font-weight: 500;
  }
`;

export default GlobalStyle;
