import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import theme from 'helpers/theme';
import Footer from 'components/Footer';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
  }
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
