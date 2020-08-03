import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { ChatClient } from '../chatClient/chatClient'
export class ChatRoom extends React.Component<IProps, IState> {
    private client: ChatClient;
    private text: string;
    constructor(props: IProps) {
        super(props);
        this.client = new ChatClient(this.props.url, this.showMessage);
        this.state = {
            messages: []
        };
    }
    showMessage = (msg: string) => {
        let temp = this.state.messages;
        temp.push(msg);
        this.setState({
            messages: temp
        });
    }
    sendMessage = () => {
        this.client.sendMessage(this.text);
        this.text = "";
    }
    render() {
        return (
            <Row align="middle" justify="center">
                <Col md={18}>
                    <div></div>
                    <Row justify="end">
                        <Col>
                            <Input
                                onChange={event => this.text = event.target.value}
                                onPressEnter={this.sendMessage}
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
    messages: string[]
}