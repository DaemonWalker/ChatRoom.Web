import React from 'react';
import { Row } from 'antd';
import { SessionUtil } from '../utils/sessionUtil';

export class ChatMessage extends React.Component<IProps, IState>{
    render() {
        return (
            <Row justify={this.props.userId === SessionUtil.getUserId() ? "end" : "start"}>
                <p>{`${this.props.userName} ${this.props.date}`}</p>
                <p>{`${this.props.message}`}</p>
            </Row>
        )
    }
}
interface IProps {
    message: string;
    userName: string;
    userId: string;
    date: string;
}
interface IState {

}