import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route render={({history}) => <App history={history} />} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);