import {getMockPostBattleScreenDetails} from "../../../utils/mockCreator";
import {DELAY_TIME_MS} from '../../../constants/api'

export default (httpClient, endpoint) => ({
    getDetails() {
        // return httpClient.get(endpoint); - how it should be without mock

        // imitated api response with delay time
        return new Promise((resolve, reject) =>
            setTimeout(endpoint ? resolve(getMockPostBattleScreenDetails()) : reject, DELAY_TIME_MS, endpoint))
    }
});
