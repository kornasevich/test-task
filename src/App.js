import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {Table} from "antd";

import {columns} from "./constants/post-battle-screen-config";
import api from "./api/index.api";
import {TEAMS, STATE_TEAM} from "./constants/team";

import './styles.css'

const {FIRST_TEAM, SECOND_TEAM} = TEAMS;
const {WINNER, LOSER} = STATE_TEAM;

function App() {
    const [firstTeam, setFirstTeam] = useState([])
    const [secondTeam, setSecondTeam] = useState([])
    const [winnerTeam, setWinnerTeam] = useState(null)
    const [tooltipData, setTooltipData] = useState({})
    const [requestFriendList, setRequestFriendList] = useState([])

    const isLoaded = useMemo(() =>
            firstTeam.length && secondTeam.length && winnerTeam !== null,
        [firstTeam, secondTeam, winnerTeam]
    )

    useEffect(() => {
        api
            .postBattleDetails
            .getDetails()
            .then(({winnerTeam, players}) => {
                setWinnerTeam(winnerTeam)
                const first = []
                const second = []
                players.forEach((player) => {
                    if (player.team === FIRST_TEAM) {
                        first.push({...player, key: player.id})
                    } else {
                        second.push({...player, key: player.id})
                    }
                })
                setFirstTeam(first)
                setSecondTeam(second)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const sendRequestToFriend = useCallback(({id}) => {
        api.player.sendRequestToFriend(id).then(() => {
            setRequestFriendList([...requestFriendList, id])
        }).catch(() => {
            console.log('something went wrong')
        })
    }, [requestFriendList])

    const memoizedColumns = useMemo(() =>
            columns({
                tooltipText: `kills: ${tooltipData?.kills}, deaths: ${tooltipData?.deaths}`,
                sendRequestToFriend,
                requestFriendList
            }),
        [tooltipData, requestFriendList, sendRequestToFriend]
    )

    const _renderDefaultTitle = (TEAM) => winnerTeam === TEAM ? () => WINNER : () => LOSER

    const onRow = (rowIndex, team) => {
        return {
            onMouseEnter: () => {
                setTooltipData(team[rowIndex])
            }
        };
    }

    const tableProps = {
        pagination: false,
        showHeader: false,
        loading: !isLoaded,
        columns: memoizedColumns
    }

    return (
        <div className='scores-container'>
            <div className='first-score-wrapper'>
                <Table
                    onRow={(_, rowIndex) => onRow(rowIndex, firstTeam)}
                    title={_renderDefaultTitle(FIRST_TEAM)}
                    dataSource={firstTeam}
                    {...tableProps}
                >
                </Table>
            </div>

            <div className='second-score-wrapper'>
                <Table
                    onRow={(_, rowIndex) => onRow(rowIndex, secondTeam)}
                    title={_renderDefaultTitle(SECOND_TEAM)}
                    dataSource={secondTeam}
                    {...tableProps}
                />
            </div>
        </div>
    )
}

export default App;
