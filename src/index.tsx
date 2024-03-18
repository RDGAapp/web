import { StrictMode } from 'react';

import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import AppSettingsProvider from 'context/AppSettings';
import { store } from 'store';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppSettingsProvider>
        <App />
      </AppSettingsProvider>
    </Provider>
  </StrictMode>,
);
serviceWorkerRegistration.register();
