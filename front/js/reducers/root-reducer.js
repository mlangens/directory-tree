/**
 * @file Root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverDirTreeReducer from './server-dirtree-reducer';

export default combineReducers({
  serverDirTree: serverDirTreeReducer,
});
