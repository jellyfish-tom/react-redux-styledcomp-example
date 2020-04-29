import 'rc-slider/assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import HomePage from './pages/home-page';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.pink};
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  .page {
    padding: 20px 0;
  }
`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path={Routes.home}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
