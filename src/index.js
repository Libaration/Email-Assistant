import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { checkForUpdates } from './lib/checkForUpdates';
import { ApolloProviderWithClient } from './hooks/useApollo.js';
import { Route, Switch } from 'react-router-dom';
import { ProgressBar } from './components/ProgressBar';
import { useUpdateStore } from './components/store/updateStore';
const performCheckForUpdates = () => {
  const checked = useUpdateStore.getState().checkedForUpdate;
  if (!checked) {
    checkForUpdates().then((data) => {
      const currentVersion = process.env.REACT_APP_VERSION;
      if (data.tag_name !== `v${currentVersion}`) {
        window.electronAPI && window.electronAPI.updateApp(data);
      }
    });
  }
};

performCheckForUpdates();
ReactDOM.render(
  <ApolloProviderWithClient>
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/progressBar" component={ProgressBar} />
        <Route path="/" component={App} />
      </Switch>
    </HashRouter>
  </ApolloProviderWithClient>,
  document.getElementById('root')
);
