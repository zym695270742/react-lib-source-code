// import {createStore, applyMiddleware} from "redux"
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// custom
import {createStore, applyMiddleware} from "../myLib/redux"
import {thunk, logger} from "../myLib/redux-middlewares"

function todoReducer(state=0, action){
  const {type, payload} = action;
  if(type === 'add'){
    return ++state
  }
  if(type === 'delete'){
    return --state
  }
  return state
}

const store = createStore(todoReducer, applyMiddleware(thunk, logger))

export default store