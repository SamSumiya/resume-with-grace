import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'




import store from './store/store'
// require ('dotenv').config()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* {console.log(store.getState())}
      {console.log(import.meta.env)} */}
      <App />
    </Provider>
  </React.StrictMode>,
)
