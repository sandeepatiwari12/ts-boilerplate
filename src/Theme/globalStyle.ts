import colors from './colors';

const globalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.lightBG};
    color: ${colors.black};
    font-family: 'Inter';
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${colors.black};
  }
`;

export default globalStyle;
