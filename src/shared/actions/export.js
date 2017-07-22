import { getWorkspace } from '../../renderer/system/buttercup/archive';
import { ExportTypes } from '../buttercup/types';

export const exportToJSON = ({ path }) => dispatch => {
  const workspace = getWorkspace().instance;
  const objects = workspace
    .getAllItems()
    .map(item => item.archive)
    .map(archive => archive.toObject());

  console.log(JSON.stringify(objects));
};

export const exportToFile = ({ type, ...config }) => dispatch => {
  switch (type) {
    case ExportTypes.JSON:
      dispatch(exportToJSON(config));
      break;
    default:
      break;
  }
};
