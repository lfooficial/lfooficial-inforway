import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html{
      background: var(--white);
    }

    html, body, #root{
      max-height: 100vh;
      max-width: 100vw;
      height: 100%;
      width: 100%;
    }

    *, button, input{
      border: 0;
      background: none;
     }
    
    :root{
      --search: #202327;
      --black: #000;
      --white: #D9D9D9;
      --gray: #7A7A7A;
      --outline: #2F3336;
      --retweet: #00C06B;
      --red: #E8265E;
      --site: #1766AE;
      --site-dark-hover: #011017;
      --site-light-hover: #2C8ED6;
    }
`;