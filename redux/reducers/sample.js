import { SAMPLE_ACTIONS_TYPES } from '../actions/sample';

const sample = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE': {
      return { ...state, action };
    }
    case 'SAMPLE_SUCCESS': {
      console.log('i succeeded');
      return { ...state, action };
    }
    case 'SAMPLE_FAIL': {
      return { ...state, action };
    }
    default:
      return state;
  }
};

export default sample;
