import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import './index.css';
import { AuthProvider } from './providers/AuthProvider';
// const performCheckForUpdates = () => {
//   checkForUpdates().then((data) => {
//     const currentVersion = process.env.REACT_APP_VERSION;
//     if (data.tag_name !== `v${currentVersion}`) {
//       window.electronAPI && window.electronAPI.updateApp(data);
//     }
//   });
// };
//
loadErrorMessages();
loadDevMessages();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider>
    <HashRouter basename='/'>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </HashRouter>
  </AuthProvider>,
);
