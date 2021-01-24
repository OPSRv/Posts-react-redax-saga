import React from "react";
import { render } from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import {forbidenWordsMiddleware} from './redux/middleware'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, forbidenWordsMiddleware, saga), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
