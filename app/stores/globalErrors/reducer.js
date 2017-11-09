import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  errorType: '',
  errorMessage: '',
});

export default function globalErrors(state = initialState, { type, payload, errorType }) {
  switch (type) {
    case constants.ERROR_TRIGGERED:
      return state.set('errorType', errorType)
                  .merge(fromJS(payload));
    case 'LOADING_EPISODE_FAILED':
      return state.set('errorMessage', 'Failed to load episode. Please try again.');
    case 'LOADING_FILM_LIST_FAILED':
      return state.set('errorMessage', 'Failed to load films. Please try again.');
    case constants.CLEAR_STORE:
      return initialState;
    default:
      return state;
  }
}
