import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Clock from './Clock';
//import MyEvents from './Events'
import Forms from './Forms';

import * as serviceWorker from './serviceWorker';

var content = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* <Clock  /> */}
        <Forms/>
    </div>,
    content);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
