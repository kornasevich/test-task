export default (httpClient, endpoint) => ({
    sendRequestToFriend(playerId) {
        // return httpClient.post(endpoint, {playerId})
        return new Promise((resolve, reject) =>
            setTimeout(endpoint ? resolve() : reject, 500, endpoint))
    }
});
