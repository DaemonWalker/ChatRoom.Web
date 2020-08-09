import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom';
import { Login } from './pages/login';
import PrivateRoute from './components/privateRoute'
import { Regist } from './pages/regist';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/regist" exact component={Regist}></Route>
        <PrivateRoute path="/home" component={App}></PrivateRoute>
        <PrivateRoute path="/" exact render={() => (<Redirect to="/home"></Redirect>)} ></PrivateRoute>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
