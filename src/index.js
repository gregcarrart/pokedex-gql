import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPage from './components/ListPage';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './ApolloClient';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((
  <ApolloProvider client={ apolloClient }>
    <Router>
      <Switch>
        <Route path='/detail/:id' component={ Detail } />
        <Route exact path='/' component={ ListPage } />
      </Switch>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
