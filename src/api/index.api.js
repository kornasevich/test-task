import httpClient from './httpClient';
import URL_PATHES from './url-pathes';
import login from './endpoints/postBattleDetails';
import player from './endpoints/player';

const api = {
  postBattleDetails: login(httpClient, URL_PATHES.API.POST_BATTLE_DETAILS),
  player: player(httpClient, URL_PATHES.API.PLAYER)
};

export default api;
