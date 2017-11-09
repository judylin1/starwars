import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  // loaders
  loadingFilmList: false,

  filmList: [],
  errors: [],
});

export default function homeScreen(state = initialState, { type, payload }) {
  switch (type) {
    case constants.UPDATE_FILMSCREEN_PROP:
      return state.merge(fromJS(payload));
    case constants.LOADING_FILM_LIST:
      return state.set('loadingFilmList', true);
    case constants.LOADED_FILM_LIST:
      return state.set('loadingFilmList', false)
                  .set('filmList', fromJS(payload));
    case constants.LOADING_FILM_LIST_FAILED:
      return state.set('loadingFilmList', false)
                  .set('errors', fromJS(payload));
    default:
      return state;
  }
}
