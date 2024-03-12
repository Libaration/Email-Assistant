import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { ProgressBar } from './components/ProgressBar';
import { ApolloProviderWithClient } from './hooks/useApollo.js';
import './index.css';
import { checkForUpdates } from './lib/checkForUpdates';

const performCheckForUpdates = () => {
  checkForUpdates().then((data) => {
    const currentVersion = process.env.REACT_APP_VERSION;
    if (data.tag_name !== `v${currentVersion}`) {
      window.electronAPI && window.electronAPI.updateApp(data);
    }
  });
};

performCheckForUpdates();
ReactDOM.render(
  <ApolloProviderWithClient>
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/progressBar' component={ProgressBar} />
        <Route path='/' component={App} />
      </Switch>
    </HashRouter>
  </ApolloProviderWithClient>,
  document.getElementById('root'),
);
