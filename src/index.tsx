import { StrictMode } from 'react';

import ReactDOMClient from 'react-dom/client';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
serviceWorkerRegistration.register();
