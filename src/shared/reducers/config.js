import {
  CONFIG_SET,
} from '../actions/types';

const initialState = {
  autoHideMenuBar: false,
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case CONFIG_SET:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
}
