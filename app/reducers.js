import { combineReducers } from 'redux';

import homeScreen from './stores/homeScreen/reducer';
import episode from './stores/episode/reducer';
import globalErrors from './stores/globalErrors/reducer';

export default combineReducers({
  homeScreen,
  episode,
  globalErrors,
});
