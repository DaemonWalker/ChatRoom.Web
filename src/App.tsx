import './styles/App.css'
import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, BarChartOutlined } from '@ant-design/icons';
import { ChatRoom } from './components/chatRoom';
import { SignOut } from './components/signOut'
import { RouteComponentProps, Link } from 'react-router-dom'
import PrivateRoute from './components/privateRoute';
import { Statistics } from './components/statistics'
import { SessionUtil } from './utils/sessionUtil';

const { Header, Content, Sider } = Layout;

export class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { collapsed: false };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="App">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            聊天室
                        </Menu.Item>
                        <Menu.Item key="2" icon={<BarChartOutlined />}>
                            <Link to="/home/statistics">各种统计</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        {SessionUtil.getCurrentServerName()}
                        <SignOut {...this.props}></SignOut>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <PrivateRoute path="/home/statistics" exact component={Statistics} {...this.props}></PrivateRoute>
                        <PrivateRoute path="/home" exact render={(props: any) => (<ChatRoom url={"hall"} {...props} ></ChatRoom>)} {...this.props}></PrivateRoute>
                    </Content>
                </Layout >
            </Layout >
        );
    }
}

interface IProps extends RouteComponentProps {

}
interface IState {
    collapsed: boolean;
}
