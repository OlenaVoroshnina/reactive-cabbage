import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';

import 'modern-normalize';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);