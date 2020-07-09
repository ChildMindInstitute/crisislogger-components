import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import * as Sentry from '@sentry/react';

import * as serviceWorker from './serviceWorker';
import './i18n';
import { Store } from './redux/store';
import App from './App';
import './index.css';
import './style/global.scss'


// Set up error logging with Sentry.
if (config.env !== 'development') {
  Sentry.init({
    dsn: "https://8cd0d02f082f46c7aaccf908df2617a7@o414302.ingest.sentry.io/5320597",
    environment: config.env,
  });
}

const routing = (
    <ReduxProvider store={Store}>
        <App />
    </ReduxProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
