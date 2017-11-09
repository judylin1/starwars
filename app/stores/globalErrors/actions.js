import * as constants from './constants';

export const clearStore = () => ({
  type: constants.CLEAR_STORE,
});

export const triggerError = (payload) => ({
  type: constants.ERROR_TRIGGERED,
  payload,
});
