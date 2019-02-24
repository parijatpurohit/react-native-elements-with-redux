export const SAMPLE_ACTIONS_TYPES = {
  SAMPLE: 'SAMPLE',
};
export default function sample() {
  return {
    type: 'SAMPLE',
    payload: {
      request: {
        url: '/200',
      },
    },
  };
}
