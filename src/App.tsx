import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'pages/Home';
import theme from 'helpers/theme';
import routes from './helpers/routes';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
  }
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path={routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
