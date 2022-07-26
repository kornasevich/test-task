import {getMockPostBattleScreenDetails} from "../../../utils/mockCreator";

export default (httpClient, endpoint) => ({
    getDetails() {
        // return httpClient.get(endpoint);
        return new Promise((resolve, reject) =>
            setTimeout(endpoint ? resolve(getMockPostBattleScreenDetails()) : reject, 500, endpoint))
    }
});
