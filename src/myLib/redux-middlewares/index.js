function thunk({dispatch, getState}){
  return next => action => {
    if(typeof action === 'function'){
      return action(dispatch, getState)
    }
    return next(action)
  }
}

function logger({dispatch, getState}){
  return next => action => {
    console.log('action type', action.type)
    console.log('prev state', getState());
    const returnValue = next(action);
    console.log('current state', getState())
    return returnValue
  }

}

export {thunk, logger}