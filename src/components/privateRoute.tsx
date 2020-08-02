import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionUtil } from '../utils/sessionUtil';

export class PrivateRoute extends Route {
    render() {
        return (
            SessionUtil.isAuth() ?
                <Route path={this.props.path} component={this.props.component} exact={this.props.exact}></Route>
                :
                <Redirect to="/login"></Redirect>
        );
    }
}