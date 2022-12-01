function createStore(reducer, enhancer) {
  //enhancer from applyMiddleware(...middlewares)
  if(enhancer){
    return enhancer(createStore)(reducer)
  }

  let currentState
  let listeners = []
  
  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }

  function subscribe(listener){
    listeners.push(listener)
    //返回取消订阅函数
    return () => {
      listeners = listeners.filter(item => item !== listener) 
    }
  }

  dispatch({type: 'adffffffffffffsdfae'})

  return {getState, dispatch, subscribe}

}

export default createStore;