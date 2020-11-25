export default ({ dispatch }) => next => action => {
  /*
    Check to see if the actions payload is of type Promise()
    If yes: Wait for it to resolve.
    If no: Send this action to the next middleware
   */
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  /*
    Resolve the promise and dispatch a
    action with its data
   */
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
