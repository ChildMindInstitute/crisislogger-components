import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { PersistGate } from 'redux-persist/integration/react'
import { Store } from './redux/store';
import App from './App';
import './index.css';
import './style/global.scss'
const routing = (
    <ReduxProvider store={Store}>
        <App />
    </ReduxProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
