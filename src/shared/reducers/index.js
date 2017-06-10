import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import groups from './groups';
import entries from './entries';
import settingsByArchiveId from './settings';
import archives, { currentArchive } from './archives';
import update from './update';
import config from './config';

export default function getRootReducer(scope = 'main') {
  let reducers = {
    settingsByArchiveId,
    archives,
    update,
    config,
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      currentArchive,
      groups,
      entries,
      form,
    };
  }

  return combineReducers({ ...reducers });
}
