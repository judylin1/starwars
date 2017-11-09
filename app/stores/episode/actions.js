import * as constants from './constants';
const unirest = require('unirest');
import R from 'ramda';

export const getEpisode = (episodeId) => (dispatch) => {
  dispatch({ type: constants.LOADING_EPISODE });
  unirest.get(`https://swapi.co/api/films/${episodeId}/`)
  .end(response => {
    if (response.error) return dispatch({ type: constants.LOADING_EPISODE_FAILED, payload: response.error });
    return dispatch({ type: constants.LOADED_EPISODE, payload: R.propOr({}, 'body', response) });
  });
};
