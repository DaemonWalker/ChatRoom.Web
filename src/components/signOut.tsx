import React from 'react'
import { Button } from 'antd'
import { Api } from '../utils/api'
import { RouteComponentProps } from 'react-router-dom';
export class SignOut extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { btnLoading: false }
    }
    signOut = () => {
        this.setState({ btnLoading: true });
        Api.logout(this.props);
    }
    render() {
        return (
            <Button type="link" htmlType="button" loading={this.state.btnLoading} onClick={this.signOut}>登出</Button>
        )
    }
}

interface IProps extends RouteComponentProps {

}
interface IState {
    btnLoading: boolean
}