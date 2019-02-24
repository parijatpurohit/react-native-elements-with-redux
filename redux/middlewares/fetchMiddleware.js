const API_CALL_SUCCESS = '_SUCCESS';
const API_CALL_FAIL = '_FAIL';
const API_CALL_REQUEST = '_REQUEST';
export const API_MODE_GET = 'GET';

export default store => next => (action) => {
  if (!action.api) {
    console.log(action.type, store.getState());
    return next(action);
  }
  const requestAction = {
    ...action,
    type: action.type + API_CALL_REQUEST,
  };
  delete requestAction.api;
  next(requestAction);
  console.log(requestAction.type, store.getState());
  return action.api.client(action.api)
    .then((response) => {
      const successAction = {
        ...requestAction,
        type: action.type + API_CALL_SUCCESS,
        api: {
          ...requestAction.api,
          response,
        },
      };
      let nextAction = null;
      try {
        console.log(successAction.type, store.getState());
        nextAction = next(successAction);
      } catch (ex) {
        console.log(successAction.type, store.getState());
        return nextAction;
      }
      return nextAction;
    })
    .catch((error) => {
      console.error(error);
      const failAction = {
        ...requestAction,
        type: action.type + API_CALL_FAIL,
        api: {
          ...requestAction.api,
          error,
        },
      };
      const nextAction = next(failAction);
      console.log(failAction.type, store.getState());
      return nextAction;
    });
};
