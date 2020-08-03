import React from 'react';
import { Row, Col, Form, Input, Button, Modal } from 'antd'
const { Password } = Input;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
export class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { showModal: false };
    }
    tempModalCancel = () => this.setState({ showModal: false });
    showModal = () => this.setState({ showModal: true });
    render() {
        return (
            <>
                <Row justify="center" align="middle" className="login">
                    <Col lg={6} md={8} sm={18} xs={24}>
                        <Form {...layout}>
                            <Form.Item name="account" label="帐号" rules={[{ required: true }]}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name="password" label="密码" rules={[{ required: true }]}>
                                <Password></Password>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                                <Button type="link" onClick={this.showModal}>
                                    以游客身份进入
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Modal
                    title="游客信息录入"
                    visible={this.state.showModal}
                    onCancel={this.tempModalCancel}
                    footer={[
                        <Button htmlType="submit">进入大厅</Button>
                    ]}
                >
                    <Form>
                        <Form.Item name="tempName" label="昵称" rules={[{ required: true, message: "请输入一个昵称" }]} key="tempName">
                            <Input></Input>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}
interface IProps {

}
interface IState {
    showModal: boolean
}