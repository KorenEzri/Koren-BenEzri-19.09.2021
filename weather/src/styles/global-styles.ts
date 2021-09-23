import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
  font-family: 'roboto_condensedlight', 'Helvetica Neue' , Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  @font-face {
    font-family: 'roboto_condensedlight';
    src: url('weather/src/styles/fonts/RobotoCondensed-Light-webfont.woff') format('woff2'),
    url('weather/src/styles/fonts/RobotoCondensed-Light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
