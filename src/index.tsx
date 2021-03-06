import { StrictMode } from 'react';

import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'store';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
serviceWorkerRegistration.register();
