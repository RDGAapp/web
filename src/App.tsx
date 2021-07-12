import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import theme from 'helpers/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
