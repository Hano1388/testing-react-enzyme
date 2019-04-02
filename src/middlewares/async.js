export default ({ dispatch }) => next => action => {
  // Check if the action is a promise?
  //  if it is not, then send the action to the next middleware
  //  if it is then, wait for it to resolve
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // if there is a promise then wait for the promise to resolve
  // then create a new action with resolved data and dispatch it
  action.payload.then(function(response){
    const newAction = { ...action, payload: response.data };
    dispatch(newAction);
  });
}
