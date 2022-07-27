import {DELAY_TIME_MS} from '../../../constants/api'

export default (httpClient, endpoint) => ({
    sendRequestToFriend(playerId) {
        // return httpClient.post(endpoint, {playerId}) - how it should be without mock

        // imitated api response with delay time
        return new Promise((resolve, reject) =>
            setTimeout(endpoint ? resolve({playerId}) : reject, DELAY_TIME_MS, endpoint))
    }
});
