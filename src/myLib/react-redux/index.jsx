import { useLayoutEffect, useReducer } from 'react'
import { createContext, useContext } from 'react'

const reduxContext = createContext({})

const Provider = function ({ store, children }) {
  //通过react context把store传递给子组件使用
  return <reduxContext.Provider value={store}>{children}</reduxContext.Provider>
}

const useForceUpdate = function () {
  const [, forceUpdate] = useReducer((state) => state + 1, 0)
  return forceUpdate
}

const useStore = function () {
  return useContext(reduxContext)
}

const useSelector = function (selector) {
  //获取到store.getState
  const store = useStore()
  const getState = store.getState

  const forceUpdate = useForceUpdate()

  //订阅
  useLayoutEffect(() => {
    const unSubscribe = store.subscribe(() => {
      //store 发生改变 强制刷新
      //此处用useState实现forceUpdate注意闭包
      forceUpdate()
    })
    //组件unmount取消订阅
    return unSubscribe
  }, [store])

  return selector(getState())
}

const useDispatch = function () {
  //获取到store.dispatch
  const store = useStore()
  const dispatch = store.dispatch
  return dispatch
}

export { Provider, useSelector, useDispatch }
