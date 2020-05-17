import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { configureStore, getPersistor } from './store';
import App from './App';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
const persistor = getPersistor(reduxStore);

const routing = (
  <ReduxProvider store={reduxStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </ReduxProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
