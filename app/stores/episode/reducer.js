import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  // loaders
  loadingEpisode: false,

  title: '',
  opening_crawl: '',
});

export default function episode(state = initialState, { type, payload }) {
  switch (type) {
    case constants.UPDATE_HOMESCREEN_PROP:
      return state.merge(fromJS(payload));
    case constants.LOADING_EPISODE:
      return state.set('loadingEpisode', true);
    case constants.LOADED_EPISODE:
      return state.set('loadingEpisode', false)
                  .merge(fromJS(payload));
    case constants.LOADING_EPISODE_FAILED:
      return state.set('loadingEpisode', false);
    default:
      return state;
  }
}
