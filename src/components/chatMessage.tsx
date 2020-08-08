import React from 'react';
import { Row, Card } from 'antd';
import { MessageModel } from '../models/messageModel';
import { MessageModelUtil } from '../utils/messageModelUtil';

export class ChatMessage extends React.Component<IProps, IState>{
    render() {
        return (
            <Row justify={MessageModelUtil.isCurrentUserMessage(this.props.message) ? "end" : "start"}>
                <Card size="small"
                    title={
                        this.props.message.isNotify ?
                            "" :
                            <Row justify={MessageModelUtil.isCurrentUserMessage(this.props.message) ? "end" : "start"}>
                                {`${this.props.message.user.userName} ${this.props.message.date}`}
                            </Row>
                    }
                    style={{ marginBottom: 10 }}
                >
                    <p style={{ marginBottom: 0, textAlign: MessageModelUtil.isCurrentUserMessage(this.props.message) ? "end" : "start" }}>
                        {
                            this.props.message.isNotify ?
                                `${this.props.message.content} ${this.props.message.date}` :
                                `${this.props.message.content}`
                        }
                    </p>
                </Card>
            </Row>
        )
    }

}
interface IProps {
    message: MessageModel
}
interface IState {

}