import {Tooltip} from "antd";
import {UserAddOutlined, CheckOutlined} from '@ant-design/icons'

const _renderTooltip = (tooltipText) => (nickname) => (
    <Tooltip placement="topLeft" title={tooltipText}>
        {nickname}
    </Tooltip>
)

const _renderAction = ({sendRequestToFriend, requestFriendList}) => (_, row) => {
    const isRequestSent = requestFriendList.includes(row.id)
    return isRequestSent ? <CheckOutlined/> :
        <button onClick={() => sendRequestToFriend(row)} style={{cursor: 'pointer'}}>
            <UserAddOutlined/>
        </button>
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