import React from 'react';
import { Login } from '../pages/login'
import { Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { SessionUtil } from '../utils/sessionUtil';

class PrivateRoute extends React.Component<IProps> {
    render() {
        return (
            <Route path={this.props.path} component={this.getComponent()} exact={this.props.exact} render={this.getRender()}></Route>
        );
    }
    getComponent = () => {
        if (SessionUtil.isAuth()) {
            return this.props.component;
        }
        else {
            return Login;
        }
    }

    getRender = () => {
        if (SessionUtil.isAuth()) {
            return this.props.render;
        }
        else {
            return () => (<Login {...this.props}></Login>);
        }
    }
}

export default withRouter(PrivateRoute)

interface IProps extends RouteComponentProps {
    path: string;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean;
    render?: (props: RouteComponentProps<any>) => React.ReactNode
}