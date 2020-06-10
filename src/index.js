import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import Main from './components/main';
import Header from './components/header';
import configureStore from './store';
import './index.css';

const store = configureStore();

const Root = () => {
  return (
      <Provider store={ store }>
          <ErrorBoundry>
            <Header/>
            <Main/>
          </ErrorBoundry>
      </Provider>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

