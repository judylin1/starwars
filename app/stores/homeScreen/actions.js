import * as constants from './constants';
const unirest = require('unirest');
import R from 'ramda';

export const getFilmList = () => (dispatch) => {
  dispatch({ type: constants.LOADING_FILM_LIST });
  unirest.get('https://swapi.co/api/films')
  .end(response => {
    if (response.error) return dispatch({ type: constants.LOADING_FILM_LIST_FAILED, payload: response.error });
    return dispatch({ type: constants.LOADED_FILM_LIST, payload: R.call(R.compose(
      R.sortBy(R.prop('episode_id')),
      R.pathOr([], ['body', 'results'])
    ), response) });
  });
};
