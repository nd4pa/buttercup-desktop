import { getWorkspace } from '../../renderer/system/buttercup/archive';
import { ExportTypes } from '../buttercup/types';

export const exportToJSON = ({ path }) => {
  //@TODO Implement
}


export const exportToFile = payload => dispatch => {
    const { type, ...config } = payload;
    switch (type) {
      case ExportTypes.JSON:
        dispatch(exportToJSON(config))
        break;
      default:
        break;
    }
}
