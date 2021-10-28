import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './extendTheme';
import './index.css';
import { HashRouter } from 'react-router-dom';
ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
  document.getElementById('root')
);
