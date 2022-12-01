function combineReducers(reducers){
  return function(state={}, action){
    let nextState = {}
    let hasChanged = false
    for (const key in reducers) {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
      hasChanged = hasChanged || nextState[key] !== state[key]
    }

    return hasChanged ? nextState : state
  }
}

export default combineReducers