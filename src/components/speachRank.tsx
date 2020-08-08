import React from 'react'
import { List, Progress } from 'antd';
import { SpeachRankModel } from '../models/speachRankModel'
import { Api } from '../utils/api'

export class SpeachRank extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { rank: [] };
    }
    render() {
        return (
            <List
                size="small"
                dataSource={this.state.rank}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={"1"}
                            title={item.userName}
                            description={<Progress percent={item.percent} status="active"></Progress >}
                        ></List.Item.Meta>
                    </List.Item>
                )}
            ></List>
        );
    }

    componentDidMount() {
        Api.speachRank(this.props.rankResultCount,
            (res: SpeachRankModel[]) => {
                this.setState({ rank: res });
            });
    }
}

interface IProps {
    rankResultCount: number
}
interface IState {
    rank: SpeachRankModel[]
}