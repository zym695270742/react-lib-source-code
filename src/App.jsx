import './App.css'
//import { Provider } from 'react-redux'
import { Provider } from './myLib/react-redux'
import store from './store'
import ReduxPage from './pages/ReduxPage'
import ReactReduxPage from './pages/ReactReduxPage'

function App() {
  return (
    <div className="App">
      {/* redux source code demo page */}
      {/* <ReduxPage /> */}

      {/* react-redux source code demo page */}
      <Provider store={store}>
        <ReactReduxPage />
      </Provider>
    </div>
  )
}

export default App
