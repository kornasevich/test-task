import {
    MAX_SCORES,
    STATES,
    MAX_INDEX_STATES,
    MAX_AMOUNT_KILLS,
    MAX_AMOUNT_DEATHS
} from "../constants/user";
import {MAX_INDEX_TEAM} from "../constants/team";

const calcRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

export function getMockPlayers(amountUsers = 100) {
    let players = []
    for (let i = 1; i <= amountUsers; i++) {
        players.push({
            id: i,
            nickname: `User-${i}`,
            scores: calcRandomNumber(MAX_SCORES),
            state: STATES[calcRandomNumber(MAX_INDEX_STATES)],
            kills: calcRandomNumber(MAX_AMOUNT_KILLS),
            deaths: calcRandomNumber(MAX_AMOUNT_DEATHS),
            team: calcRandomNumber(MAX_INDEX_TEAM)
        })
    }
    return players
}

export function getMockWinnerTeam() {
    return calcRandomNumber(MAX_INDEX_TEAM)
}

export function getMockPostBattleScreenDetails() {
    return {
        winnerTeam: getMockWinnerTeam(),
        players: getMockPlayers()
    }
}