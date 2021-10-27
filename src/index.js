import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './extendTheme';
import './index.css'
ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
