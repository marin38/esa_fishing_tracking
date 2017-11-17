import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// const target = document.getElementById('root');
const target = document.querySelector('#root')
let data = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
);
// data = (
//   <div>Test</div>
// )
ReactDOM.render(
  data,
  target
)
registerServiceWorker();
