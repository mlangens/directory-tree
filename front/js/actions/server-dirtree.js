/**
 * @file Server DirTree related actions.
 */

import axios from 'axios';

import getLogger from '../util/logger';

const log = getLogger('FirstDirTreeAction');

export const FETCH_FIRST_DIRTREE = 'server-dirtree/SHOW';

const firstDirTreeShow = (dirtree) => {
  return { type: FETCH_FIRST_DIRTREE, dirtree };
};

export const fetchFirstDirTree = () => async (dispatch) => {
  try {
    const res = await axios.get('/dirtrees/1');
    console.log(JSON.stringify(res.data.dirtree));
    dispatch(firstDirTreeShow(JSON.stringify(res.data.dirtree)));
  } catch (error) {
    log.error(error);
  }
};
