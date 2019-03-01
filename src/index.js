import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'

import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <div>
      <div className="cc-h-area cc-shade3 cc-nav">
        <div className="container cc-padding">
          <h1 className="cc-h cc-inline">
            <a href="/">tccui</a>
          </h1>
        </div>
      </div>
      <div className="cc-body">
        <div className="container" id="container">
          <Main></Main>
        </div>
      </div>
    </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
