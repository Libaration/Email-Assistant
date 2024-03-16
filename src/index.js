import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import './index.css';
import { AuthProvider } from './providers/AuthProvider';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Email from './pages/Email';
import ErrorPage from './pages/ErrorPage';
import SearchShow from './pages/SearchShow';
import Settings from './pages/Settings';
import Reschedule from './pages/Reschedule';
import Home from './pages/Home';

// const performCheckForUpdates = () => {
//   checkForUpdates().then((data) => {
//     const currentVersion = process.env.REACT_APP_VERSION;
//     if (data.tag_name !== `v${currentVersion}`) {
//       window.electronAPI && window.electronAPI.updateApp(data);
//     }
//   });
// };
//
//

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'email',
        element: <Email />,
      },
      {
        path: 'reschedule',
        element: <Reschedule />,
      },
      {
        path: 'search',
        element: <SearchShow />,
        children: [
          {
            path: ':name',
          },
        ],
      },
      {
        path: 'preview/:id',
        lazy: () => import('./pages/loaders/preview-loader'),
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

loadErrorMessages();
loadDevMessages();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
