import './styles/App.css'
import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';

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
                            nav 1
                    </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout >
        );
    }
}

interface IProps {

}
interface IState {
    collapsed: boolean;
}
