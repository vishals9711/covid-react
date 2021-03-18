import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import { ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
