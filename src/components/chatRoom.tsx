import '../styles/chatRoom.css';
import React from 'react';
import { Row, Col, Input, Button, List } from 'antd';
import { ChatClient } from '../chatClient/chatClient'
import { MessageModelUtil } from '../utils/messageModelUtil';
import { MessageModel } from '../models/messageModel'
import { UserModel } from '../models/userModel';
import { SessionUtil } from '../utils/sessionUtil'
import { ChatMessage } from './chatMessage';

export class ChatRoom extends React.Component<IProps, IState> {
    private client: ChatClient;
    constructor(props: IProps) {
        super(props);
        this.client = new ChatClient(this.props.url, this.showMessage);
        this.state = {
            messages: [],
            users: [{
                userId: SessionUtil.getUserId(),
                userName: SessionUtil.getUserName(),
                isTempUser: SessionUtil.getUserIsTemp()
            }],
            text: ""
        };
        window.onbeforeunload = (event: BeforeUnloadEvent) => {
            this.client.closeConnection();
        }
    }
    componentWillUnmount() {
        this.client.closeConnection();
    }
    showMessage = (message: MessageModel) => {
        this.setState({
            messages: [...this.state.messages, message]
        });
    }
    sendMessage = () => {
        this.client.sendMessage(MessageModelUtil.createDefault(this.state.text));
        this.setState({ text: "" });
    }
    render() {
        return (
            <Row align="bottom" justify="center" className="chatRoom">
                <Col md={18}>
                    <List
                        dataSource={this.state.messages}
                        renderItem={item => <ChatMessage message={item} />}
                    ></List>
                    <Row justify="end">
                        <Col span={24} style={{ marginBottom: 10 }}>
                            <Input
                                onChange={event => this.setState({ text: event.target.value })}
                                onPressEnter={this.sendMessage}
                                value={this.state.text}
                            />
                        </Col>
                        <Col>
                            <Button onClick={this.sendMessage}>发送</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}></Col>
            </Row >
        );
    }
}
interface IProps {
    url: string
}
interface IState {
    messages: MessageModel[],
    users: UserModel[],
    text: string
}