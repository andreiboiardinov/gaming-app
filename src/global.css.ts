import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    outline: none;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
    /*-webkit-overflow-scrolling: touch;*/
    -webkit-tap-highlight-color: transparent;
    /*-webkit-touch-callout: none;*/
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
    font-family: 'Lato', sans-serif;

    /*text-rendering: auto;*/
    /*text-rendering: optimizeSpeed;*/
    text-rendering: optimizeLegibility;
    /*text-rendering: geometricPrecision;*/

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;

    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .App {
    width: 100%;
    height: 100%;
  }
`