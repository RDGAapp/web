import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import theme from 'helpers/theme';
import routes from 'helpers/routes';
import Home from 'pages/Home';
import Master from 'pages/Master';
import Train from 'pages/Train';
import Newbie from 'pages/Newbie';

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
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.MASTER} component={Master} />
        <Route exact path={routes.TRAINING} component={Train} />
        <Route exact path={routes.NEWBIE} component={Newbie} />
        <Route exact path={routes.PRO} component={Home} />
        <Route exact path={routes.INTERNATIONAL} component={Home} />
        <Route exact path={routes.SHOP} component={Home} />
        <Route exact path={routes.COMPANIES} component={Home} />
        <Route exact path={routes.SPONSORSHIP} component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
