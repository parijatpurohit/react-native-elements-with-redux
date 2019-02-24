import { SAMPLE_ACTIONS_TYPES } from '../actions/sample';

const sample = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE': {
      console.log('i reached here');
      console.log(action);
      return { ...state, action };
    }
    case 'SAMPLE_SUCCESS': {
      console.log('i reached here too');
      console.log(action);
      return { ...state, action };
    }
    case 'SAMPLE_FAIL': {
      console.log('i failed');
      console.log(action);
      return { ...state, action };
    }
    default:
      return state;
  }
};

export default sample;
