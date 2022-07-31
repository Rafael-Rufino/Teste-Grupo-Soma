import { createGlobalStyle } from "styled-components";

import theme from "./themes";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body{
    background: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, button{
    font-size: 14px sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor: pointer;
  }


`;
