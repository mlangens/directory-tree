/**
 * @file The Server DirTree reducer.
 */

import { FETCH_FIRST_DIRTREE } from '../actions/server-dirtree';

const initialState = {
  dirtree: null,
};

const serverDirTreeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FIRST_DIRTREE:
      return {
        ...state,
        dirtree: action.dirtree,
      };

    default:
      return state;
  }
};

export default serverDirTreeReducer;
