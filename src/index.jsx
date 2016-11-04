import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger()
  )
);

store.dispatch(setState({
    list: ['ESL_SC2', 'freecodecamp', 'medrybw']
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);