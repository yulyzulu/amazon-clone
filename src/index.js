import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './components/StateProvider';
import './index.css';
import App from './routes/App';
import { initialState } from './reducer/reducer';
import reducer from './reducer/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
