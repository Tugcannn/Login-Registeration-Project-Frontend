import React, {Component} from 'react';
import './App.css';

import Login from './Login'
import Register from './Register'
import Home from './Home'
import User from './User'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Router>
        <div className ="App">
         <ul>
           <li>
             <Link to = '/'>Home</Link>
           </li>
           <li>
             <Link to = '/Register'>Register</Link>
           </li>
           <li>
             <Link to = '/Login'>Login</Link>
           </li>
           <li>
             <Link to = '/User'>User</Link>
           </li>
         </ul>
         <div>
           <Route path = '/' exact = {true} component = {Home} />
           <Route path = '/Register' exact = {true} component = {Register} />
           <Route path = '/Login' exact = {true} component = {Login} />
           <Route path = '/User' exact = {true} component = {User} />

         </div>
        </div>
      </Router>
    )   
  }
}
export default App;
