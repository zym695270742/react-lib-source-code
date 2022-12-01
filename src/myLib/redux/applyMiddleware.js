function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const middleApi = {
      getState: store.getState,
      //真实的dispatch最终只会执行一次
      dispatch: (action, ...args) => dispatch(action, ...args),
    }

    const middlewaresChain = middlewares.map((middleware) => middleware(middleApi))

    dispatch = compose(...middlewaresChain)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

export default applyMiddleware
