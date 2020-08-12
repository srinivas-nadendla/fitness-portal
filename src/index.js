import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Members from './components/members/Members';

import './index.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <Header></Header>
    
    <div className="main-container">
      <Sidebar></Sidebar>
    
      <div className="center-container">
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/members" component={Members}></Route>
      </div>
      </div>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
