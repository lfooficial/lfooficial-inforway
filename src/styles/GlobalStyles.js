import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html{
      background: var(--whiteGround);
    }

    html, body, #root{
      max-height: 100vh;
      max-width: 100vw;
      height: 100%;
      width: 100%;
      font-family: 'Roboto', sans-serif;
    }

    *, button, input{
      border: 0;
      background: none;
     }
    
    :root{
      --search: #202327;
      --black: #000;
      --white: #D9D9D9;
      --whiteGround: #FFF;
      --gray: #7A7A7A;
      --outline: #2F3336;
      --retweet: #00C06B;
      --red: #E8265E;
      --site: #00e676;
      --site-dark-hover: #00b248;
      --site-light-hover: #66ffa6;
    }
`;