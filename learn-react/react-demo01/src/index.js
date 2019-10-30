import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import JSDemo from './components/jsdemo'
import JSDemoB from './components/jsdemob'
import JSDemoC from './components/jsdemoc'
import Nav from './Nav'

ReactDOM.render(
<Router>
  <div>
    <Nav/>
    <Route exact path="/" component={JSDemo} />
    <Route path="/jsdemob" component={JSDemoB} />
    <Route path="/jsdemoc" component={JSDemoC} />
  </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
