import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import configStore from "../src/redux/config/configStore"
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
      <Provider store={configStore}>
        <App />
      </Provider>
  </React.StrictMode>
);
