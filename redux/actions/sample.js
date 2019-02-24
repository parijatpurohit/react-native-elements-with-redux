import { get } from '../../utils/fetchservice';

export const SAMPLE_ACTIONS_TYPES = {
  SAMPLE: 'SAMPLE',
};
export default function sample() {
  return {
    type: 'SAMPLE',
    api: {
      client: get,
      path: '/200',
    },
  };
}
