import React from 'react'
import { Tabs } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { SpeachRank } from './speachRank'

const { TabPane } = Tabs;

export class Statistics extends React.Component {
    render() {
        return (
            <Tabs>
                <TabPane
                    tab={<span> <SmileOutlined />话痨排行榜 </span>}
                    key="1"
                >
                    <SpeachRank rankResultCount={10}></SpeachRank>
                </TabPane>
            </Tabs>
        );
    }
}