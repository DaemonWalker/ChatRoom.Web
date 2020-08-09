import React from 'react';
import { Row, Col, Form, Input, Button, Modal, Select } from 'antd'
import { LoginModel } from '../models/loginModel'
import { Api } from '../utils/api';
import { GlobalUtil } from '../utils/globalUtil'
import { SessionUtil } from '../utils/sessionUtil';
import { LoginResponseModel } from '../models/loginResponseModel';
import { RouteComponentProps } from 'react-router-dom';
import { Constance } from '../utils/constance';
const { Password } = Input;
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
export class Login extends React.Component<IProps, IState> {
    formData: LoginModel;
    constructor(props: IProps) {
        super(props);
        this.state = {
            showModal: false,
            loginBtnLoading: false
        };
        this.formData = {
            account: "",
            password: ""
        }
    }
    tempModalCancel = () => this.setState({ showModal: false });
    showModal = () => this.setState({ showModal: true });
    login = () => {
        this.setState({
            loginBtnLoading: true
        })
        Api.login(
            this.formData,
            (res: LoginResponseModel) => {
                if (GlobalUtil.stringIsNullOrEmpty(res.sessionId)) {

                }
                else {
                    SessionUtil.setLoginInfo(res);
                    this.props.history.push("/");
                }
            },
            (res: any) => {
                this.setState({ loginBtnLoading: false })
            });
    }
    render() {
        return (
            <>
                <Row justify="center" align="middle" className="login">
                    <Col lg={6} md={8} sm={18} xs={24}>
                        <Form {...layout}>
                            <Form.Item name="account" label="帐号" rules={[{ required: true }]}>
                                <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.formData.account = event.target.value}></Input>
                            </Form.Item>
                            <Form.Item name="password" label="密码" rules={[{ required: true }]}>
                                <Password onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.formData.password = event.target.value}></Password>
                            </Form.Item>
                            <Form.Item label="登录服务器" >
                                <Select
                                    defaultValue={SessionUtil.getCurrentServerName()}
                                    onChange={value => {
                                        SessionUtil.setDefaultSever(value);
                                    }}>
                                    <Option value="7181">电信一区</Option>
                                    <Option value="7182">联通一区</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="button" loading={this.state.loginBtnLoading} onClick={this.login}>
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
interface IProps extends RouteComponentProps {

}
interface IState {
    showModal: boolean,
    loginBtnLoading: boolean;
}