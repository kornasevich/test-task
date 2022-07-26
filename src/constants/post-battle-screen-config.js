import {Tooltip} from "antd";
import {UserAddOutlined, CheckOutlined} from '@ant-design/icons'

const _renderTooltip = (tooltipText) => (nickname) => (
    <Tooltip placement="topLeft" title={tooltipText}>
        {nickname}
    </Tooltip>
)

const _renderAction = ({sendRequestToFriend, requestFriendList}) => (_, record) => {
    const isRequestSend = requestFriendList.includes(record.id)
    return isRequestSend ? <CheckOutlined/> :
        <div onClick={() => sendRequestToFriend(record)} style={{cursor: 'pointer'}}>
            <UserAddOutlined/>
        </div>
}

export const columns = ({tooltipText, sendRequestToFriend, requestFriendList}) => [
    {
        title: 'Nickname',
        dataIndex: 'nickname',
        key: 'nickname',
        ellipsis: {
            showTitle: false,
        },
        render: _renderTooltip(tooltipText)
    },
    {
        title: 'Scores',
        dataIndex: 'scores',
        key: 'scores',
    },
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        align: 'right',
        key: 'action',
        width: 60,
        render: _renderAction({sendRequestToFriend, requestFriendList})
    },
];