import '../styles/index.css'
import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
const { Password } = Input;

export class Regist extends React.Component {
    regist=()=>{
        
    }
    render() {
        return (
            <Row justify="center" align="middle" className="regist">
                <Col md={12} sm={24} lg={4}>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        layout="horizontal">
                        <Form.Item label="帐号">
                            <Input name="account" placeholder="用于登录"></Input>
                        </Form.Item>
                        <Form.Item label="昵称">
                            <Input name="userName"></Input>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Password name="password"></Password>
                        </Form.Item>
                        <Form.Item label="确认密码">
                            <Password name="confirmPassword"></Password>
                        </Form.Item>
                        <Button>注册</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

interface IProps extends RouteComponentProps{

}
interface IState{

}